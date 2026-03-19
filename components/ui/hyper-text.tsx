'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

interface HyperTextProps {
    text: string;
    className?: string;
    duration?: number;
    delay?: number;
    animateOnHover?: boolean;
}

export function HyperText({
    text,
    className = '',
    duration = 800,
    delay = 0,
    animateOnHover = false,
}: HyperTextProps) {
    const [displayText, setDisplayText] = useState<string[]>(text.split(''));
    const [isAnimating, setIsAnimating] = useState(false);
    const iterationsRef = useRef(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    const startAnimation = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        iterationsRef.current = 0;

        const chars = text.split('');
        const totalSteps = Math.floor(duration / 30);

        intervalRef.current = setInterval(() => {
            iterationsRef.current += 1;
            const progress = iterationsRef.current / totalSteps;

            setDisplayText(
                chars.map((char, i) => {
                    if (char === ' ') return ' ';
                    const charProgress = Math.max(0, (progress - i / chars.length) * (chars.length + 1));
                    if (charProgress >= 1) return char;
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                })
            );

            if (iterationsRef.current >= totalSteps) {
                clearInterval(intervalRef.current!);
                setDisplayText(chars);
                setIsAnimating(false);
            }
        }, 30);
    };

    useEffect(() => {
        if (!animateOnHover && isInView) {
            const t = setTimeout(startAnimation, delay);
            return () => clearTimeout(t);
        }
    }, [isInView]);

    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <motion.span
            ref={ref}
            className={`inline-block ${className}`}
            onMouseEnter={() => animateOnHover && startAnimation()}
        >
            {displayText.map((char, i) => (
                <span key={i} className={char === ' ' ? 'inline-block w-[0.3em]' : 'inline-block'}>
                    {char}
                </span>
            ))}
        </motion.span>
    );
}
