'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Use native scroll on touch devices (iOS/Android) — native is faster and has momentum
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        // Expose for programmatic scrollTo
        (window as unknown as Record<string, unknown>).__lenis = lenis;

        let rafId: number;
        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            delete (window as unknown as Record<string, unknown>).__lenis;
        };
    }, []);

    return <>{children}</>;
}
