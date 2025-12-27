import { useRef, useMemo, memo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedShapes = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const scrollRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // スクロール位置を取得
  useFrame((state) => {
    const scrollY = window.scrollY;
    scrollRef.current = THREE.MathUtils.lerp(scrollRef.current, scrollY, 0.1);

    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2 + scrollRef.current * 0.001;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3 + scrollRef.current * 0.002;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;

      // マウスに追従（控えめに）
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, 2 + mouseRef.current.x * 0.5, 0.1);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouseRef.current.y * 0.5, 0.1);
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={meshRef} position={[2, 0, -2]}>
          <octahedronGeometry args={[1.5, 0]} />
          <meshPhongMaterial
            color="#6366f1"
            wireframe
            transparent
            opacity={0.1}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[-3, 1, -2]}>
          <icosahedronGeometry args={[1.2, 0]} />
          <meshPhongMaterial
            color="#818cf8"
            wireframe
            transparent
            opacity={0.08}
          />
        </mesh>
      </Float>

      <mesh position={[0, -2, -5]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[12, 0.01, 16, 150]} />
        <meshBasicMaterial color="#cbd5e1" transparent opacity={0.1} />
      </mesh>
    </group>
  );
};

const Particles = ({ count = 500 }) => {
  const mesh = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      temp[i * 3] = (Math.random() - 0.5) * 30;
      temp[i * 3 + 1] = (Math.random() - 0.5) * 30;
      temp[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.02;
      mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.05;

      const scrollY = window.scrollY;
      mesh.current.position.y = -scrollY * 0.002;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#94a3b8"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
};

export const MinimalBackground = memo(() => {
  return (
    <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

        <AnimatedShapes />
        <Particles count={1000} />

        <fog attach="fog" args={['#f8fafc', 5, 15]} />
      </Canvas>
    </div>
  );
});

