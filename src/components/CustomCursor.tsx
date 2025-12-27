import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [cursorType, setCursorType] = useState('default');

    // マウス座標（framer-motion value）
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // 遅延追従（バネの動き）
    const springConfigRing = { damping: 30, stiffness: 250 };
    const springConfigDot = { damping: 40, stiffness: 400 };
    const cursorX = useSpring(mouseX, springConfigRing);
    const cursorY = useSpring(mouseY, springConfigRing);
    const dotX = useSpring(mouseX, springConfigDot);
    const dotY = useSpring(mouseY, springConfigDot);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseDown = () => setIsClicked(true);
        const handleMouseUp = () => setIsClicked(false);

        // インタラクティブな要素へのホバー検知
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const interactive = target.closest('button, a, [role="button"], .minimal-btn');

            if (interactive) {
                setIsHovered(true);
                if (interactive.classList.contains('bg-minimal-accent')) {
                    setCursorType('accent');
                } else {
                    setCursorType('hover');
                }
            } else {
                setIsHovered(false);
                setCursorType('default');
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            {/* メインカーソル（中心の点） */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-minimal-text rounded-full pointer-events-none z-[100001]"
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* 追従するリングカーソル */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[100000] rounded-full"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: isHovered ? 60 : 30,
                    height: isHovered ? 60 : 30,
                    border: '1px solid currentColor',
                }}
                animate={{
                    scale: isClicked ? 0.8 : 1,
                    color: cursorType === 'accent' ? '#6366f1' : '#111827',
                    opacity: isHovered ? 0.3 : 0.6,
                    backgroundColor: isHovered ? 'rgba(99, 102, 241, 0.05)' : 'transparent',
                }}
                transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                    mass: 0.5
                }}
            >
                {/* 装飾用のパーツ */}
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 border-[3px] border-minimal-accent/20 rounded-full blur-[2px]"
                    />
                )}
            </motion.div>
        </>
    );
};

