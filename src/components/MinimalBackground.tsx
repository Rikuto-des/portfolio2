import { memo, useEffect, useRef, useState } from 'react';

interface Dot {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
}

export const MinimalBackground = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const dotsRef = useRef<Dot[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initDots();
    };

    const initDots = () => {
      const dots: Dot[] = [];
      const spacing = 60;
      const cols = Math.ceil(canvas.width / spacing) + 1;
      const rows = Math.ceil(canvas.height / spacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: i * spacing,
            y: j * spacing,
            baseX: i * spacing,
            baseY: j * spacing,
            size: 2,
            color: '#cbd5e1',
            vx: 0,
            vy: 0,
          });
        }
      }
      dotsRef.current = dots;
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const interactRadius = 150;
      const maxDisplacement = 30;

      dotsRef.current.forEach((dot) => {
        const dx = mousePos.x - dot.baseX;
        const dy = mousePos.y - dot.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < interactRadius && distance > 0) {
          const force = (interactRadius - distance) / interactRadius;
          const angle = Math.atan2(dy, dx);
          const targetX = dot.baseX - Math.cos(angle) * force * maxDisplacement;
          const targetY = dot.baseY - Math.sin(angle) * force * maxDisplacement;
          
          dot.vx += (targetX - dot.x) * 0.1;
          dot.vy += (targetY - dot.y) * 0.1;
          
          // 色を青系のグラデーションで変化（控えめに）
          const r = Math.floor(148 + force * 50);
          const g = Math.floor(163 + force * 20);
          const b = Math.floor(184 + force * 40);
          dot.color = `rgba(${r}, ${g}, ${b}, ${0.4 + force * 0.3})`;
          dot.size = 1.5 + force * 2;
        } else {
          dot.vx += (dot.baseX - dot.x) * 0.05;
          dot.vy += (dot.baseY - dot.y) * 0.05;
          dot.color = 'rgba(203, 213, 225, 0.4)';
          dot.size += (1.5 - dot.size) * 0.1;
        }

        dot.vx *= 0.9;
        dot.vy *= 0.9;
        dot.x += dot.vx;
        dot.y += dot.vy;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();
      });

      // ドット間を線で接続（近いもの同士）
      ctx.strokeStyle = 'rgba(203, 213, 225, 0.15)';
      ctx.lineWidth = 0.3;
      for (let i = 0; i < dotsRef.current.length; i++) {
        for (let j = i + 1; j < dotsRef.current.length; j++) {
          const dotA = dotsRef.current[i];
          const dotB = dotsRef.current[j];
          const dx = dotA.x - dotB.x;
          const dy = dotA.y - dotB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 80) {
            ctx.beginPath();
            ctx.moveTo(dotA.x, dotA.y);
            ctx.lineTo(dotB.x, dotB.y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setMousePos({ x: -1000, y: -1000 });
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos]);

  return (
    <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" aria-hidden="true">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
});
