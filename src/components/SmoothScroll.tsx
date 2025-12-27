import { useEffect } from 'react';
import Lenis from 'lenis';

declare global {
    interface Window {
        lenis?: Lenis;
    }
}

interface SmoothScrollProps {
    isStopping?: boolean;
}

export const SmoothScroll = ({ isStopping = false }: SmoothScrollProps) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        window.lenis = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            window.lenis = undefined;
        };
    }, []);

    useEffect(() => {
        if (window.lenis) {
            if (isStopping) {
                window.lenis.stop();
            } else {
                window.lenis.start();
            }
        }
    }, [isStopping]);

    return null;
};
