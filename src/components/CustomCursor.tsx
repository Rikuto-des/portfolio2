import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    // マウス座標（framer-motion value）
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // 遅延追従（バネの動き）
    const springConfig = { damping: 25, stiffness: 200 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

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
            if (
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('cursor-hover') ||
                target.getAttribute('role') === 'button'
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
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
                className="fixed top-0 left-0 w-2 h-2 bg-minimal-text rounded-full pointer-events-none z-[9999]"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* 追従するリングカーソル */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-minimal-text rounded-full pointer-events-none z-[9998]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isClicked ? 0.8 : isHovered ? 2 : 1,
                    opacity: isClicked ? 0.8 : 0.6,
                    backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
                    borderColor: isHovered ? 'rgba(0, 0, 0, 0.2)' : 'rgba(17, 24, 39, 1)', // minimal-text color
                }}
                transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                }}
            />
        </>
    );
};
