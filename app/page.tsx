'use client';

import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from 'framer-motion';
import { manrope } from '@/components/utils/font';
import { FiArrowDown, FiArrowUpRight, FiMail, FiMapPin } from 'react-icons/fi';
import {
    Globe,
    Code2,
    Cpu,
    ShoppingCart,
    Layers,
    Cloud,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Spotlight } from '@/components/ui/spotlight';

/* ─── Dynamic Spline import (no SSR) ─── */
const SplineScene = dynamic(
    () => import('@/components/ui/splite').then((m) => ({ default: m.SplineScene })),
    {
        ssr: false,
        loading: () => (
            <div className="w-full h-full flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border-2 border-[#7370FF]/30 border-t-[#7370FF] animate-spin" />
            </div>
        ),
    }
);

/* ─── Animation helpers ─── */
const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, delay, ease: [0.22, 0.61, 0.36, 1] as [number, number, number, number] },
    },
});

const slideLeft = (delay = 0) => ({
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay, ease: [0.22, 0.61, 0.36, 1] as [number, number, number, number] },
    },
});

/* Static version — no hooks, no JS overhead, used on mobile */
const RevealTextStatic = ({ text }: { text: string }) => (
    <span className="text-white/85 whitespace-pre-wrap">{text}</span>
);

/* Animated version — per-character color reveal driven by scroll progress */
const RevealTextAnimated = ({ text, progress, start, end }: { text: string, progress: MotionValue<number>, start: number, end: number }) => {
    const chars = text.split("");
    const step = (end - start) / chars.length;

    return (
        <span className="relative inline-block whitespace-pre-wrap">
            {chars.map((char, i) => {
                const charStart = start + i * step;
                const charEnd = start + (i + 1) * step;
                const color = useTransform(progress, [charStart, charEnd], ["rgba(255, 255, 255, 0.85)", "#7370FF"]);
                return (
                    <motion.span key={i} style={{ color }}>
                        {char}
                    </motion.span>
                );
            })}
        </span>
    );
};

/* ─── Data ─── */
const manifestoLines = [
    { text: 'From idea to MVP in weeks, not quarters.', delay: 0 },
    { text: 'No bloat. No overhead. Just delivery.', delay: 0.12 },
    { text: 'Full-stack capability at startup speed.', delay: 0.24 },
    { text: 'Your vision, our execution. On demand.', delay: 0.36 },
];

const servicesData = [
    {
        number: '01',
        title: 'Web Applications & MVPs',
        description: 'Blazing-fast web apps and SaaS platforms built with Next.js, TypeScript, and Tailwind CSS. From zero to a shippable MVP, we move fast and iterate faster.',
        tags: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Node.js'],
        className: 'md:col-span-2',
        highlight: false,
    },
    {
        number: '02',
        title: 'Enterprise Internal Tools',
        description: 'Custom dashboards, admin portals, and workflow systems that replace slow spreadsheets and outdated legacy software.',
        tags: ['Dashboards', 'Admin Portals', 'Workflows'],
        className: 'md:col-span-1',
        highlight: false,
    },
    {
        number: '03',
        title: 'RAG & Generative AI',
        description: 'Production-grade AI products powered by LLMs and retrieval-augmented generation, built to deliver accurate, grounded answers at scale.',
        tags: ['LLMs', 'RAG', 'Vector DBs', 'Embeddings', 'OpenAI'],
        className: 'md:col-span-1',
        highlight: true,
    },
    {
        number: '04',
        title: 'Agentic AI Systems',
        description: 'Multi-agent architectures that reason, plan, and act autonomously. We build AI that works for your business around the clock without human intervention.',
        tags: ['AI Agents', 'Multi-Agent', 'LangChain', 'AutoGen'],
        className: 'md:col-span-1',
        highlight: true,
    },
    {
        number: '05',
        title: 'Business Automation',
        description: 'End-to-end automation of repetitive workflows, data processing, and business operations, saving your team hours every single day.',
        tags: ['n8n', 'Zapier', 'Custom Pipelines', 'Webhooks'],
        className: 'md:col-span-1',
        highlight: false,
    },
    {
        number: '06',
        title: 'API & Business Integrations',
        description: 'Seamless connections between your tools, CRMs, ERPs, and third-party APIs. Everything your business runs on, unified under one roof.',
        tags: ['REST APIs', 'GraphQL', 'CRM / ERP', 'Microservices'],
        className: 'md:col-span-1',
        highlight: false,
    },
    {
        number: '07',
        title: 'AWS Infrastructure & Data Pipelines',
        description: 'Scalable cloud architecture, CI/CD pipelines, and data engineering built to carry your product from MVP to enterprise without missing a beat.',
        tags: ['AWS', 'Redshift', 'Glue', 'Lambda', 'RDS', 'S3', 'Fargate'],
        className: 'md:col-span-2',
        highlight: false,
    },
];

/* ─── Page ─── */
export default function Home() {

    const scrollTo = (id: string) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const lenis = (window as any).__lenis;
        if (lenis) {
            lenis.scrollTo(`#${id}`, { duration: 1.2 });
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const servicesRef = useRef<HTMLElement>(null);
    const whyRef = useRef<HTMLElement>(null);
    const spacerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: desktopProgress } = useScroll({
        target: spacerRef,
        offset: ['start end', 'end end']
    });
    const { scrollYProgress: mobileProgress } = useScroll({
        target: spacerRef,
        offset: ['start 65%', 'end 20%']
    });

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const whyScrollProgress = isMobile ? mobileProgress : desktopProgress;

    const [servicesHeight, setServicesHeight] = useState(0);
    const [whyHeight, setWhyHeight] = useState(0);

    useEffect(() => {
        if (!servicesRef.current && !whyRef.current) return;

        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const height = entry.borderBoxSize && entry.borderBoxSize.length > 0
                    ? entry.borderBoxSize[0].blockSize
                    : entry.contentRect.height;

                if (entry.target === servicesRef.current) {
                    setServicesHeight(height);
                } else if (entry.target === whyRef.current) {
                    setWhyHeight(height);
                }
            }
        });

        if (servicesRef.current) observer.observe(servicesRef.current);
        if (whyRef.current) observer.observe(whyRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className={`${manrope.className} bg-zinc-950`}>

            {/* ════════════════════════════════════════════════
                01 · HERO — sticky layer z-0
            ════════════════════════════════════════════════ */}
            <section
                id="hero"
                className="relative md:sticky md:top-0 z-0 min-h-[100svh] bg-zinc-950 flex items-center overflow-hidden"
            >
                {/* Ambient glows */}
                <div className="hidden md:block absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-[#7370FF]/12 blur-[130px] rounded-full pointer-events-none" />
                <div className="hidden md:block absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-[#9C99FF]/8 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl w-full mx-auto px-6 md:px-10 xl:px-0 pt-24 pb-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center relative">

                    {/* Left: Text content */}
                    <div className="relative z-10">
                        <motion.div
                            variants={fadeUp(0)}
                            initial="hidden"
                            animate="visible"
                            className="flex items-center gap-3 mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#7370FF] animate-pulse" />
                            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#7370FF]">
                                Product Design  <span className='text-white'> & Engineering Studio</span>
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={fadeUp(0.1)}
                            initial="hidden"
                            animate="visible"
                            className="text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold text-white tracking-[-0.03em] leading-[1.0] mb-6"
                        >
                            {"Your Agile"}
                            <br />
                            {"Tech Team, "}
                            <span className="text-[#7370FF]">{"On"}</span>
                            <br />
                            <span className="text-[#7370FF]">{"Demand."}</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp(0.2)}
                            initial="hidden"
                            animate="visible"
                            className="text-zinc-400 text-base md:text-lg max-w-md leading-relaxed mb-10"
                        >
                            From idea to MVP to scale, without the hassle and overhead of slow, traditional teams.
                            We are a full-stack engineering studio specializing in cutting-edge web, AI, and cloud solutions.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            variants={fadeUp(0.3)}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-wrap gap-3 mb-12"
                        >
                            <button
                                onClick={() => scrollTo('contact')}
                                className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#7370FF] text-white text-sm font-bold hover:bg-[#625df5] active:scale-[0.98] transition-all duration-200 shadow-[0_8px_30px_rgba(115,112,255,0.4)]"
                            >
                                Let's talk
                                <FiArrowDown size={14} />
                            </button>
                            <a
                                href="mailto:hello@beaverlabs.com"
                                className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/8 border border-white/15 text-white text-sm font-bold hover:bg-white/14 hover:border-white/25 transition-all duration-200"
                            >
                                Start a project
                                <FiArrowUpRight size={14} />
                            </a>
                        </motion.div>

                        {/* Stat pills */}
                        <motion.div
                            variants={fadeUp(0.4)}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-wrap gap-3"
                        >
                            {[
                                { num: '100+', label: 'Projects' },
                                { num: '30K+', label: 'Users' },
                                { num: '5+', label: 'Countries' },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="flex items-baseline gap-1.5 bg-white/6 border border-white/10 rounded-full px-4 py-2"
                                >
                                    <span className="text-white font-bold text-base">{stat.num}</span>
                                    <span className="text-zinc-500 text-xs font-medium">{stat.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Spline robot */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                        className="absolute inset-0 md:relative md:inset-auto h-[100svh] md:h-[580px] w-full z-0 md:z-auto pointer-events-none md:pointer-events-auto flex items-center justify-center overflow-hidden md:overflow-visible"
                    >
                        <div className="w-full h-full opacity-25 md:opacity-100 scale-150 md:scale-100 transition-opacity duration-1000 mt-20 md:mt-0 relative">
                            <Spotlight size={550} className="hidden md:block" />
                            <SplineScene
                                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                className="w-full h-full"
                            />
                            {/* Mobile Overlay to keep text readable */}
                            <div className="absolute inset-0 bg-zinc-950/50 md:hidden pointer-events-none z-10" />
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                    >
                        <FiArrowDown size={16} className="text-zinc-500" />
                    </motion.div>
                </motion.div>
            </section>

            {/* ════════════════════════════════════════════════
                02 · MANIFESTO — sticky layer z-10
            ════════════════════════════════════════════════ */}
            <section
                id="why"
                ref={whyRef}
                className="relative md:sticky z-10 min-h-0 md:min-h-[100svh] bg-zinc-950 rounded-t-[2.5rem] overflow-hidden shadow-[0_-8px_40px_rgba(0,0,0,0.6)] flex items-center md:top-[var(--dynamic-top)]"
                style={{ '--dynamic-top': whyHeight > 0 ? `min(0px, calc(100svh - ${whyHeight}px))` : '0px' } as React.CSSProperties}
            >
                {/* Ambient glow */}
                <div className="hidden md:block absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-[#7370FF]/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />

                <div className="max-w-7xl w-full mx-auto px-6 md:px-10 xl:px-0 py-24">
                    <div className="mb-16">
                        <span className="text-[#7370FF] text-[11px] font-bold tracking-[0.22em] uppercase">
                            Why on demand
                        </span>
                    </div>

                    <div>
                        {manifestoLines.map((line, i) => {
                            const start = i * 0.25;
                            const end = start + 0.25;
                            return (
                                <div
                                    key={i}
                                    className="py-5 md:py-9 border-b border-white/6 last:border-0 group cursor-default"
                                >
                                    <span className="text-[11px] font-bold text-white/15 tabular-nums mr-6 select-none">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-[clamp(1.5rem,4vw,3.2rem)] font-bold leading-tight tracking-[-0.01em]">
                                        {isMobile
                                            ? <RevealTextStatic text={line.text} />
                                            : <RevealTextAnimated text={line.text} progress={whyScrollProgress} start={start} end={end} />
                                        }
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Scroll animation spacer to hold `#why` in place for 200svh on desktop */}
            <div ref={spacerRef} className="hidden md:block h-[200svh] w-full" />

            {/* ════════════════════════════════════════════════
                03 · SERVICES — sticky layer z-20
            ════════════════════════════════════════════════ */}
            <section
                id="services"
                ref={servicesRef}
                className="relative md:sticky z-20 bg-[#0a0a0f] rounded-t-[2.5rem] overflow-hidden shadow-[0_-8px_40px_rgba(0,0,0,0.4)] md:top-[var(--services-top)]"
                style={{ '--services-top': servicesHeight > 0 ? `min(0px, calc(100svh - ${servicesHeight}px))` : 'min(0px, calc(100svh - 100%))' } as React.CSSProperties}
            >
                {/* Ambient glow */}
                <div className="hidden md:block absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#7370FF]/6 blur-[130px] rounded-full pointer-events-none" />

                <div className="max-w-7xl w-full mx-auto px-6 md:px-10 xl:px-0 py-20 md:py-32">
                    {/* Header */}
                    <motion.div
                        initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: isMobile ? 0 : 0.7 }}
                        className="flex flex-col items-center text-center mb-16 md:mb-24 relative z-10"
                    >
                        <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-white tracking-[-0.02em] leading-tight mb-5">
                            What We <span className='text-[#7370FF]'>Build</span>
                        </h2>
                        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl">
                            End-to-end capabilities across product, AI, and infrastructure.
                        </p>
                    </motion.div>

                    {/* Bento Grid layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
                        {servicesData.map((card, i) => (
                            <motion.div
                                key={card.number}
                                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: isMobile ? '50px' : '-40px' }}
                                transition={{ duration: isMobile ? 0 : 0.6, delay: isMobile ? 0 : i * 0.08 }}
                                className={cn(
                                    'group relative flex flex-col p-8 md:p-10 rounded-[2rem] border transition-[transform,border-color,background-color,box-shadow] duration-300 md:hover:-translate-y-1 overflow-hidden min-h-[360px] cursor-default',
                                    card.highlight
                                        ? 'bg-linear-to-b from-[#7370FF]/8 to-zinc-950/50 border-[#7370FF]/25 hover:border-[#7370FF]/50 hover:shadow-[0_8px_32px_rgba(115,112,255,0.15)]'
                                        : 'bg-white/2 border-white/6 hover:bg-white/4 hover:border-white/10',
                                    card.className
                                )}
                            >
                                {/* Highlight ambient interior glow */}
                                {card.highlight && (
                                    <div className="hidden md:block absolute top-0 right-0 w-64 h-64 bg-[#7370FF]/10 blur-[80px] rounded-full mix-blend-screen pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-60" />
                                )}

                                {/* Header row -> Number and Arrow */}
                                <div className="flex justify-between items-start mb-10 relative z-10">
                                    <span className={cn(
                                        'text-[2.5rem] md:text-[3.2rem] font-black leading-none tracking-tighter select-none transition-colors duration-500',
                                        card.highlight ? 'text-[#7370FF]/40 group-hover:text-[#7370FF]/60' : 'text-white/10 group-hover:text-white/20'
                                    )}>
                                        {card.number}
                                    </span>
                                    <div className={cn(
                                        'w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-400',
                                        card.highlight
                                            ? 'border-[#7370FF]/30 text-[#7370FF] group-hover:bg-[#7370FF]/10'
                                            : 'border-white/10 text-white/30 group-hover:border-white/20 group-hover:text-white/70'
                                    )}>
                                        <FiArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-400" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative z-10 flex-1 flex flex-col">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-[-0.01em]">
                                        {card.title}
                                    </h3>
                                    <p className="text-zinc-400 text-[14px] md:text-[15px] leading-relaxed mb-8">
                                        {card.description}
                                    </p>

                                    {/* Tags stuck to bottom */}
                                    <div className="mt-auto flex flex-wrap gap-2 pt-4">
                                        {card.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className={cn(
                                                    'text-[11px] font-semibold px-3 py-1.5 rounded-md border transition-colors duration-400',
                                                    card.highlight
                                                        ? 'bg-[#7370FF]/10 border-[#7370FF]/25 text-[#7370FF]/90 group-hover:border-[#7370FF]/40'
                                                        : 'bg-white/3 border-white/6 text-white/50 group-hover:border-white/12 group-hover:text-white/70'
                                                )}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════
                06 · CONTACT — sticky layer z-50
            ════════════════════════════════════════════════ */}
            <section
                id="contact"
                className="relative md:sticky md:top-0 z-50 min-h-[100svh] bg-zinc-950 rounded-t-[2.5rem] overflow-hidden shadow-[0_-8px_60px_rgba(0,0,0,0.7)] flex items-center justify-center"
            >
                {/* Large ambient glow */}
                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#7370FF]/14 blur-[160px] rounded-full pointer-events-none" />

                {/* Subtle grid */}
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(#7370FF 1px, transparent 1px), linear-gradient(90deg, #7370FF 1px, transparent 1px)`,
                        backgroundSize: '48px 48px',
                    }}
                />

                <div className="max-w-7xl w-full mx-auto px-6 md:px-10 xl:px-0 text-center relative z-10">
                    <motion.div
                        initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: isMobile ? 0 : 0.9 }}
                    >
                        <span className="text-[#7370FF] text-[11px] font-bold tracking-[0.22em] uppercase block mb-10">
                            Get in touch
                        </span>
                        <h2 className="text-[clamp(2.5rem,7vw,6.5rem)] font-extrabold text-white tracking-[-0.03em] leading-[1.02] mb-8 max-w-4xl mx-auto">
                            Ready to Build
                            <br />
                            <span className="text-[#7370FF] pt-24 ">Something Real?</span>
                        </h2>
                        <p className="text-zinc-500 text-lg max-w-sm mx-auto leading-relaxed mb-14">
                            No forms. No waiting. Email us and we'll get back within 24 hours.
                        </p>

                        {/* CTA button with hover glow */}
                        <motion.a
                            href="mailto:hello@beaverlabs.com"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#7370FF] text-white font-bold text-base hover:bg-[#625df5] transition-colors duration-200 shadow-[0_0_40px_rgba(115,112,255,0.5)] hover:shadow-[0_0_60px_rgba(115,112,255,0.7)]"
                        >
                            <FiMail size={16} />
                            hello@beaverlabs.com
                        </motion.a>

                        {/* Divider */}
                        <div className="mt-20 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-600 text-xs max-w-7xl mx-auto px-0">
                            <span className="font-bold text-zinc-400">Beaver Labs</span>
                            <span>© {new Date().getFullYear()} Beaver Labs. All rights reserved.</span>
                            <span>hello@beaverlabs.com</span>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
