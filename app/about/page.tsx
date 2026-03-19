'use client';
import { motion } from 'framer-motion';
import { manrope } from '@/components/utils/font';

const stats = [
    { value: '10+', label: 'Projects Delivered' },
    { value: '30+', label: 'Happy Clients' },
    { value: '3+', label: 'Years of Experience' },
    { value: '100%', label: 'End-to-End Owned' },
];

const values = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#7370FF]">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
        title: 'Move Fast',
        description: 'We ship quickly without sacrificing quality. Speed is a feature, not a trade-off.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#7370FF]">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
            </svg>
        ),
        title: 'Design First',
        description: 'Every pixel matters. We obsess over details to create experiences that delight.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#7370FF]">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        ),
        title: 'Transparent',
        description: 'No surprises. We keep clients in the loop at every step of the process.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#7370FF]">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        title: 'Performance',
        description: 'We build for scale. Fast, reliable, and production-ready from day one.',
    },
];

const process = [
    {
        number: '01',
        title: 'Discovery & Scoping',
        description:
            'We start by deeply understanding your problem space, users, and constraints. No guesswork — we scope precisely so the first sprint is already pointed at the right target.',
        tags: ['Product Strategy', 'Requirements', 'Architecture Planning'],
    },
    {
        number: '02',
        title: 'Design & Prototype',
        description:
            'Before a single line of production code is written, we nail the UX. High-fidelity prototypes let you feel the product early and course-correct without expensive rework.',
        tags: ['UX/UI Design', 'Wireframing', 'User Flows'],
    },
    {
        number: '03',
        title: 'Build & Iterate',
        description:
            'We build in focused two-week cycles with live demos at every milestone. You always know what\'s shipped, what\'s next, and why. No black boxes.',
        tags: ['Full-Stack Engineering', 'AI Integration', 'Cloud Infrastructure'],
    },
    {
        number: '04',
        title: 'Launch & Scale',
        description:
            'We handle deployment, CI/CD pipelines, and post-launch monitoring. When traction hits, we\'re already ready to scale — not scrambling to catch up.',
        tags: ['AWS', 'CI/CD', 'Performance Monitoring'],
    },
];

const capabilities = [
    { label: 'Web Apps & MVPs', desc: 'Next.js, TypeScript, React' },
    { label: 'Enterprise Tools', desc: 'Dashboards, admin portals, workflows' },
    { label: 'RAG & Generative AI', desc: 'LLMs, vector DBs, embeddings' },
    { label: 'Agentic AI Systems', desc: 'LangGraph, multi-agent pipelines' },
    { label: 'Business Automation', desc: 'n8n, custom pipelines, webhooks' },
    { label: 'AWS Infrastructure', desc: 'Fargate, Redshift, Lambda, S3' },
];

const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay } },
});

const About = () => {
    return (
        <div className={`${manrope.className} min-h-screen overflow-x-hidden`}>

            {/* ── Hero ── */}
            <section className="max-w-7xl mx-auto px-6 md:px-10 xl:px-0 pt-28 pb-10 md:pt-40 md:pb-20 text-center">
                <motion.div initial="hidden" animate="visible" variants={fadeUp(0)}>
                    <span className="inline-block text-[#7370FF] text-xs font-bold uppercase tracking-[0.2em] mb-5 md:mb-6 bg-[#7370FF]/8 px-4 py-2 rounded-full border border-[#7370FF]/20">
                        Our Story
                    </span>
                    <h1 className={`${manrope.className} text-[2.1rem] sm:text-4xl md:text-5xl lg:text-7xl font-bold text-zinc-900 tracking-[-0.02em] leading-[1.1] md:leading-[1.05] mb-5 md:mb-8`}>
                        We Build the Future,<br className="hidden sm:block" /> One Product at a Time
                    </h1>
                    <p className={`text-zinc-500 text-base md:text-xl max-w-2xl mx-auto leading-relaxed ${manrope.className}`}>
                        Beaver Labs is an AI-native product studio — designers and engineers working as one team
                        to ship world-class digital products for founders and businesses worldwide.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    className="mt-10 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp(0.3)}
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                            className="bg-white border border-zinc-200 rounded-[1.5rem] md:rounded-[2rem] py-7 md:py-10 px-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                        >
                            <p className={`${manrope.className} text-3xl md:text-5xl font-bold text-zinc-900 mb-1.5 md:mb-2`}>{stat.value}</p>
                            <p className={`text-zinc-400 text-[10px] md:text-xs font-bold uppercase tracking-widest ${manrope.className}`}>{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ── Mission ── */}
            <section className="max-w-7xl mx-auto px-6 md:px-10 xl:px-0 py-12 md:py-28">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <span className="text-[#7370FF] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Our Mission</span>
                        <h2 className={`${manrope.className} text-3xl md:text-5xl lg:text-6xl font-bold text-zinc-900 tracking-[-0.02em] leading-[1.1] mb-5 md:mb-8`}>
                            Turning Bold Ideas<br className="hidden sm:block" /> into Real Products
                        </h2>
                        <p className="text-zinc-500 text-base md:text-lg leading-relaxed mb-6">
                            We partner with early-stage startups and growth-stage companies to design, build, and launch
                            world-class digital products. From the very first wireframe to production deployment, we are
                            your full-stack product team.
                        </p>
                        <p className="text-zinc-500 text-lg leading-relaxed">
                            Every product we build is crafted with a relentless focus on user experience, technical
                            excellence, and measurable business outcomes.
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex-1 w-full"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="relative w-full h-80 md:h-[420px] rounded-[2.5rem] overflow-hidden border border-zinc-200">
                            <div className="absolute inset-0 bg-linear-to-br from-[#7370FF]/20 via-white to-[#9C99FF]/15" />
                            <div className="absolute -top-10 -right-10 w-52 h-52 bg-[#7370FF]/15 blur-[80px] rounded-full" />
                            <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-[#9C99FF]/15 blur-[70px] rounded-full" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center px-8">
                                    <div className="w-20 h-20 rounded-3xl bg-[#7370FF] flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(115,112,255,0.45)]">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
                                            <circle cx="12" cy="12" r="10" />
                                            <line x1="12" y1="8" x2="12" y2="12" />
                                            <line x1="12" y1="16" x2="12.01" y2="16" />
                                        </svg>
                                    </div>
                                    <p className="text-zinc-900 text-2xl font-bold mb-2">Ideas to Reality</p>
                                    <p className="text-zinc-500 text-base">From concept to launch, with you every step.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Capabilities ── */}
            <section className="max-w-7xl mx-auto px-6 md:px-10 xl:px-0 py-12 md:py-28">
                <motion.div
                    className="text-center mb-10 md:mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[#7370FF] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">What We Build</span>
                    <h2 className={`${manrope.className} text-3xl md:text-5xl lg:text-6xl font-bold text-zinc-900 tracking-[-0.02em]`}>
                        End-to-End Capabilities
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {capabilities.map((cap, index) => (
                        <motion.div
                            key={cap.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="group bg-white border border-zinc-200 rounded-2xl p-7 hover:border-[#7370FF]/30 hover:shadow-[0_8px_40px_rgba(115,112,255,0.08)] transition-all duration-500 flex items-start gap-5"
                        >
                            <div className="w-10 h-10 rounded-xl bg-[#7370FF]/10 flex items-center justify-center shrink-0 group-hover:bg-[#7370FF]/20 transition-colors duration-300 mt-0.5">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#7370FF]">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <div>
                                <p className={`${manrope.className} text-zinc-900 font-bold text-base mb-1`}>{cap.label}</p>
                                <p className={`${manrope.className} text-zinc-400 text-sm`}>{cap.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── Values ── */}
            <section className="max-w-7xl mx-auto px-6 md:px-10 xl:px-0 py-12 md:py-28">
                <motion.div
                    className="text-center mb-10 md:mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[#7370FF] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">What We Stand For</span>
                    <h2 className={`${manrope.className} text-3xl md:text-5xl lg:text-6xl font-bold text-zinc-900 tracking-[-0.02em]`}>Our Core Values</h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.12 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 hover:border-[#7370FF]/40 hover:shadow-[0_0_30px_rgba(115,112,255,0.08)] transition-all duration-500 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[#7370FF]/10 flex items-center justify-center mb-6 group-hover:bg-[#7370FF]/20 transition-colors duration-300">
                                {value.icon}
                            </div>
                            <h3 className={`${manrope.className} text-zinc-900 text-xl font-bold mb-3`}>{value.title}</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── How We Work ── */}
            <section className="max-w-7xl mx-auto px-6 md:px-10 xl:px-0 py-12 md:py-28">
                <div className="bg-zinc-950 rounded-[2rem] md:rounded-[3rem] p-7 sm:p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7370FF]/15 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#9C99FF]/10 rounded-full blur-[120px] pointer-events-none" />

                    <motion.div
                        className="text-center mb-10 md:mb-16 relative z-10"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#7370FF] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Our Process</span>
                        <h2 className={`${manrope.className} text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.02em] leading-[1.1]`}>
                            How We Work
                        </h2>
                        <p className={`text-zinc-400 text-base md:text-lg mt-4 md:mt-5 max-w-xl mx-auto ${manrope.className}`}>
                            A disciplined process that keeps you in control and keeps us moving fast.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10">
                        {process.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] hover:border-[#7370FF]/30 transition-all duration-500"
                            >
                                <span className={`${manrope.className} text-5xl font-black text-white/10 tracking-tighter block mb-5 select-none`}>
                                    {step.number}
                                </span>
                                <h3 className={`${manrope.className} text-xl font-bold text-white mb-3`}>{step.title}</h3>
                                <p className={`${manrope.className} text-zinc-400 text-sm leading-relaxed mb-5`}>{step.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {step.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className={`${manrope.className} px-3 py-1 rounded-md text-xs font-semibold bg-white/10 text-zinc-300 border border-white/10`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
