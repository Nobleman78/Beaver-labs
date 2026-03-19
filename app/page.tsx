'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { manrope } from '@/components/utils/font';
import { Marquee } from '@/components/ui/marquee';
import Link from 'next/link';
import { IoCall } from 'react-icons/io5';

// ── Data ────────────────────────────────────────────────────────────────────

const services = [
    {
        id: '01',
        title: 'Web Applications & MVPs',
        description:
            'Blazing-fast web apps and SaaS platforms built with Next.js, TypeScript, and Tailwind CSS. From zero to a shippable MVP, we move fast and iterate faster.',
        tags: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Node.js'],
        span: 'lg:col-span-2',
        dark: false,
    },
    {
        id: '02',
        title: 'Enterprise Internal Tools',
        description:
            'Custom dashboards, admin portals, and workflow systems that replace slow spreadsheets and outdated legacy software.',
        tags: ['Dashboards', 'Admin Portals', 'Workflows'],
        span: 'lg:col-span-1',
        dark: false,
    },
    {
        id: '03',
        title: 'RAG & Generative AI',
        description:
            'Production-grade AI products powered by LLMs and retrieval-augmented generation, built to deliver accurate, grounded answers at scale.',
        tags: ['LLMs', 'RAG', 'Vector DBs', 'Embeddings', 'OpenAI'],
        span: 'lg:col-span-1',
        dark: true,
    },
    {
        id: '04',
        title: 'Agentic AI Systems',
        description:
            'Multi-agent architectures that reason, plan, and act autonomously. We build AI that works for your business around the clock without human intervention.',
        tags: ['AI Agents', 'Multi-Agent', 'LangChain', 'AutoGen'],
        span: 'lg:col-span-1',
        dark: true,
    },
    {
        id: '05',
        title: 'Business Automation',
        description:
            'End-to-end automation of repetitive workflows, data processing, and business operations, saving your team hours every single day.',
        tags: ['n8n', 'Zapier', 'Custom Pipelines', 'Webhooks'],
        span: 'lg:col-span-1',
        dark: false,
    },
    {
        id: '06',
        title: 'API & Business Integrations',
        description:
            'Seamless connections between your tools, CRMs, ERPs, and third-party APIs. Everything your business runs on, unified under one roof.',
        tags: ['REST APIs', 'GraphQL', 'CRM / ERP', 'Microservices'],
        span: 'lg:col-span-1',
        dark: false,
    },
    {
        id: '07',
        title: 'AWS Infrastructure & Data Pipelines',
        description:
            'Scalable cloud architecture, CI/CD pipelines, and data engineering built to carry your product from MVP to enterprise without missing a beat.',
        tags: ['AWS', 'Redshift', 'Glue', 'Lambda', 'RDS', 'S3', 'Fargate'],
        span: 'lg:col-span-2',
        dark: false,
    },
];

const differentiators = [
    {
        number: '01',
        title: 'Ship in Weeks, Not Months',
        description:
            'Our agile process means you get a working product fast. No bloated ceremonies, no endless back-and-forth. Just focused execution.',
    },
    {
        number: '02',
        title: 'End-to-End Ownership',
        description:
            'From the first wireframe to production deployment, we own the full product lifecycle. One team. Zero handoff friction.',
    },
    {
        number: '03',
        title: 'AI-Native by Default',
        description:
            "Every product we build is designed with AI in mind. We don't bolt on intelligence after the fact. We architect it in from day one.",
    },
    {
        number: '04',
        title: 'Fraction of the Cost',
        description:
            "Get a senior engineering team's output without the overhead of a traditional agency or the delays of an in-house hiring process.",
    },
];

const testimonials = [
    {
        quote: "Beaver Labs shipped our entire MVP in 6 weeks. The quality was exceptional: clean code, great design, and they handled everything from design to deployment.",
        name: 'Alex Morgan',
        role: 'Founder, Fintech Startup',
        initials: 'AM',
        gradient: 'from-blue-500 to-purple-500',
    },
    {
        quote: "We outsourced our internal dashboard to Beaver Labs and it transformed how our team operates. What used to take hours now takes minutes.",
        name: 'Sarah Chen',
        role: 'CTO, SaaS Company',
        initials: 'SC',
        gradient: 'from-emerald-400 to-cyan-500',
    },
    {
        quote: "Their AI automation work saved us 20+ hours a week. The RAG system they built for our knowledge base is genuinely impressive.",
        name: 'Marcus Williams',
        role: 'Operations Lead, Enterprise',
        initials: 'MW',
        gradient: 'from-orange-400 to-pink-500',
    },
    {
        quote: "Fast, professional, and genuinely passionate about the product. They feel like an in-house team, not a vendor.",
        name: 'Priya Patel',
        role: 'CEO, B2B Platform',
        initials: 'PP',
        gradient: 'from-purple-500 to-indigo-500',
    },
    {
        quote: "The AWS infrastructure they architected scaled us from 100 to 50,000 users without a single outage. Remarkable work.",
        name: 'David Kim',
        role: 'Engineering Manager',
        initials: 'DK',
        gradient: 'from-yellow-400 to-red-500',
    },
    {
        quote: "Best decision we made was bringing Beaver Labs in early. They helped us avoid expensive mistakes and get to market twice as fast.",
        name: 'Lena Fischer',
        role: 'Co-Founder, HealthTech',
        initials: 'LF',
        gradient: 'from-teal-400 to-blue-500',
    },
];

const faqs = [
    {
        q: 'How quickly can you start and ship?',
        a: 'We can kick off within days of scoping. Most MVPs take 4–8 weeks. Complex enterprise solutions typically range from 10–16 weeks depending on scope and integrations.',
    },
    {
        q: "What does 'end-to-end' actually mean?",
        a: 'We handle everything: product strategy, UX/UI design, frontend, backend, AI integration, cloud infrastructure, and post-launch support. You don\'t need to manage multiple vendors or handoffs.',
    },
    {
        q: 'Can you integrate AI into our existing product?',
        a: 'Absolutely. We specialize in retrofitting AI capabilities (RAG systems, agentic workflows, business automation) into existing products and infrastructure without disrupting what\'s already working.',
    },
    {
        q: 'How do you compare to hiring an in-house team or traditional agency?',
        a: 'An in-house team takes months to hire and is expensive to maintain. Traditional agencies are slow and process-heavy. We give you a senior, full-stack team that moves at startup speed, for a fraction of the cost.',
    },
    {
        q: 'Do you offer ongoing support after launch?',
        a: 'Yes. We offer flexible retainer packages for maintenance, scaling, and new feature development so your product keeps evolving after launch. Many clients stay with us long-term.',
    },
];

const techStack = [
    'Next.js', 'React', 'TypeScript', 'Node.js', 'AWS', 'LLMs', 'RAG',
    'LangChain', 'LangGraph', 'n8n', 'Terraform', 'PostgreSQL', 'React Native', 'Tailwind CSS',
    'GraphQL', 'OpenAI', 'Pinecone', 'Supabase', 'Anthropic', 'Shadcn UI', 'Python'
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">

            {/* ── Hero ── */}
            <section className="relative overflow-hidden w-full pt-24 pb-10 md:pt-36 md:pb-16 text-center">
<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 xl:px-0">
                <motion.div
                    className="relative z-10"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.div
                        className="inline-flex items-center mb-5 md:mb-6 px-4 py-2 rounded-full border border-[#7370FF]/20 bg-[#7370FF]/8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className={`${manrope.className} text-[#625DF5] text-xs font-bold tracking-widest uppercase`}>
                            Product Design &amp; Engineering Studio
                        </span>
                    </motion.div>

                    <h1 className={`${manrope.className} text-[2.1rem] sm:text-4xl md:text-5xl lg:text-[80px] font-bold text-zinc-900 tracking-[-0.02em] leading-[1.1] md:leading-[1.05] mb-5 md:mb-8`}>
                        Your Agile Tech Team,<br className="hidden sm:block" /> On Demand
                    </h1>

                    <p className={`text-zinc-500 text-base md:text-xl max-w-3xl mx-auto leading-relaxed mb-8 md:mb-12 ${manrope.className}`}>
                        From idea to MVP to scale, without the hassle and overhead of slow, traditional teams.
                        We are a full-stack engineering studio specializing in cutting-edge web, AI, and cloud solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                        <motion.a
                            href="/contact"
                            className={`${manrope.className} w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#625DF5] hover:bg-[#7370FF] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#625DF5]/25 text-base md:text-lg`}
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Start a Project
                            <IoCall className="w-5 h-5" />
                        </motion.a>
                        <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                            <Link
                                href="/portfolio"
                                className={`${manrope.className} w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white border-2 border-zinc-200 text-zinc-700 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:border-zinc-300 hover:bg-zinc-50 text-base md:text-lg`}
                            >
                                See Our Work
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
                </div>
            </section>

            {/* ── Tech Stack Strip ── */}
            <div className="border-y border-[#7370FF]/15 bg-[#7370FF]/4 py-5 overflow-hidden">
                <Marquee className="[--duration:35s] [--gap:0rem]" repeat={3}>
                    {techStack.map((tech, i) => (
                        <span key={i} className={`${manrope.className} text-zinc-500 text-sm font-semibold px-6 shrink-0 flex items-center gap-6`}>
                            {tech}
                            <span className="text-[#7370FF]/50 text-base">·</span>
                        </span>
                    ))}
                </Marquee>
            </div>

            {/* ── Services Bento Grid ── */}
            <section className="max-w-7xl mx-auto px-6 md:px-10 xl:px-0 py-14 md:py-32">
                <motion.div
                    className="text-center mb-10 md:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <h2 className={`${manrope.className} text-3xl md:text-5xl lg:text-[80px] font-bold text-zinc-900 tracking-[-0.02em] leading-[1.05] mb-4 md:mb-6`}>
                        What we build
                    </h2>
                    <p className={`text-zinc-500 text-base md:text-xl max-w-xl mx-auto ${manrope.className}`}>
                        End-to-end capabilities across product, AI, and infrastructure.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className={`
                                ${service.span}
                                ${service.dark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200'}
                                border cursor-pointer rounded-3xl p-8 md:p-10 flex flex-col justify-between
                                group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden
                            `}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.07 }}
                            viewport={{ once: true, amount: 0.15 }}
                        >
                            {service.dark ? (
                                <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#7370FF]/20 rounded-full blur-[60px] group-hover:bg-[#7370FF]/35 transition-all duration-700 pointer-events-none" />
                            ) : (
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#7370FF]/5 rounded-full blur-[50px] group-hover:bg-[#7370FF]/10 transition-all duration-700 pointer-events-none" />
                            )}

                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-6">
                                    <span className={`${manrope.className} text-5xl font-black tracking-tighter select-none ${service.dark ? 'text-white/10' : 'text-zinc-100'}`}>
                                        {service.id}
                                    </span>
                                    <div className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:bg-[#7370FF] group-hover:border-[#7370FF] ${service.dark ? 'border-zinc-700' : 'border-zinc-200'}`}>
                                        <svg className={`w-4 h-4 transition-colors duration-300 group-hover:text-white ${service.dark ? 'text-zinc-500' : 'text-zinc-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M7 17L17 7M17 7H7M17 7v10" />
                                        </svg>
                                    </div>
                                </div>

                                <h3 className={`${manrope.className} text-xl md:text-2xl font-bold mb-4 leading-tight ${service.dark ? 'text-white' : 'text-zinc-900'}`}>
                                    {service.title}
                                </h3>

                                <p className={`${manrope.className} text-sm md:text-base leading-relaxed ${service.dark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                                    {service.description}
                                </p>
                            </div>

                            <div className="relative z-10 flex flex-wrap gap-2 mt-8">
                                {service.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className={`${manrope.className} px-3 py-1 rounded-md text-xs font-semibold ${service.dark
                                            ? 'bg-white/10 text-zinc-300 border border-white/10'
                                            : 'bg-zinc-50 text-zinc-500 border border-zinc-200'
                                        }`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── Why Choose Us ── */}
            <section className="max-w-7xl mx-auto px-6 md:px-10 xl:px-0 pb-14 md:pb-32">
                <div className="bg-zinc-950 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7370FF]/15 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#9C99FF]/10 rounded-full blur-[120px] pointer-events-none" />

                    <motion.div
                        className="text-center mb-10 md:mb-16 relative z-10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={`${manrope.className} text-3xl md:text-5xl lg:text-[80px] font-bold text-white tracking-[-0.02em] leading-[1.05] mb-4 md:mb-6`}>
                            Why teams choose us
                        </h2>
                        <p className={`text-zinc-400 text-base md:text-xl max-w-xl mx-auto ${manrope.className}`}>
                            We&apos;re not a traditional agency. We&apos;re your embedded engineering team.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10">
                        {differentiators.map((item, index) => (
                            <motion.div
                                key={item.number}
                                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] hover:border-[#7370FF]/30 transition-all duration-500"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <span className={`${manrope.className} text-5xl font-black text-white/10 tracking-tighter block mb-4 select-none`}>
                                    {item.number}
                                </span>
                                <h3 className={`${manrope.className} text-xl font-bold text-white mb-3`}>{item.title}</h3>
                                <p className={`${manrope.className} text-zinc-400 text-sm leading-relaxed`}>{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Testimonials ── */}
            <section id="testimonials" className="max-w-7xl mx-auto px-6 md:px-10 xl:px-0 pb-14 md:pb-32">
                <motion.div
                    className="text-center mb-10 md:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <h2 className={`${manrope.className} text-3xl md:text-5xl lg:text-[80px] font-bold text-zinc-900 tracking-[-0.02em] leading-[1.05] mb-3 md:mb-6`}>
                        What clients say
                    </h2>
                    <p className={`text-zinc-500 text-base md:text-xl max-w-xl mx-auto ${manrope.className}`}>
                        Teams that trusted us to build, and came back to build more.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.name}
                            className="bg-white border cursor-pointer border-zinc-200 rounded-3xl p-8 flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1 hover:border-[#7370FF]/20 transition-all duration-500 relative overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.08 }}
                            viewport={{ once: true, amount: 0.15 }}
                        >
                            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#7370FF]/5 rounded-full blur-2xl group-hover:bg-[#7370FF]/10 transition-all duration-700 pointer-events-none" />

                            <div className="relative z-10">
                                <span className={`${manrope.className} text-6xl font-black text-[#7370FF]/20 leading-none select-none block mb-4`}>&ldquo;</span>
                                <p className={`${manrope.className} text-zinc-700 text-base leading-relaxed`}>{t.quote}</p>
                            </div>

                            <div className="relative z-10 flex items-center gap-4 mt-8 pt-6 border-t border-zinc-100">
                                <div className={`w-11 h-11 rounded-full bg-linear-to-br ${t.gradient} flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-sm`}>
                                    {t.initials}
                                </div>
                                <div>
                                    <p className={`${manrope.className} text-zinc-900 text-sm font-bold`}>{t.name}</p>
                                    <p className={`${manrope.className} text-zinc-400 text-xs`}>{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── FAQ ── */}
            <section id="faq" className="max-w-7xl mx-auto px-6 md:px-10 xl:px-0 pb-14 md:pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-start">

                    {/* Left: heading */}
                    <motion.div
                        className="lg:sticky lg:top-32"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={`${manrope.className} text-3xl md:text-5xl lg:text-6xl font-bold text-zinc-900 tracking-tight leading-[1.1] mb-4 md:mb-6`}>
                            Frequently asked questions
                        </h2>
                        <p className={`${manrope.className} text-zinc-500 text-base md:text-lg leading-relaxed mb-6 md:mb-10`}>
                            Still have questions? We&apos;d love to talk through your project.
                        </p>
                        <a
                            href="/contact"
                            className={`${manrope.className} inline-flex items-center gap-3 bg-[#7370FF] text-white font-bold px-7 py-3.5 md:px-8 md:py-4 rounded-full transition-all duration-300 hover:bg-[#625df5] hover:scale-105 shadow-lg shadow-[#7370FF]/25 text-sm md:text-base`}
                        >
                            Book a Free Call
                        </a>
                    </motion.div>

                    {/* Right: accordion */}
                    <motion.div
                        className="space-y-3"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className={`border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${openFaq === i
                                    ? 'border-[#7370FF]/30 shadow-lg shadow-[#7370FF]/5'
                                    : 'border-zinc-200 hover:border-zinc-300'
                                }`}
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            >
                                <div className="flex items-center justify-between gap-4 p-6 md:p-7">
                                    <div className="flex items-center gap-4">
                                        <span className={`${manrope.className} text-2xl font-black tracking-tighter select-none shrink-0 ${openFaq === i ? 'text-[#7370FF]/30' : 'text-zinc-100'} transition-colors duration-300`}>
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <h3 className={`${manrope.className} text-zinc-900 font-bold text-base md:text-lg leading-snug`}>
                                            {faq.q}
                                        </h3>
                                    </div>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border shrink-0 transition-all duration-300 ${openFaq === i
                                        ? 'bg-[#7370FF] border-[#7370FF]'
                                        : 'border-zinc-200'
                                    }`}>
                                        <svg
                                            className={`w-3.5 h-3.5 transition-all duration-300 ${openFaq === i ? 'text-white rotate-45' : 'text-zinc-400'}`}
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"
                                        >
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </div>
                                </div>

                                <AnimatePresence initial={false}>
                                    {openFaq === i && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        >
                                            <p className={`${manrope.className} text-zinc-500 text-base leading-relaxed px-6 md:px-7 pb-6 md:pb-7`}>
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="max-w-7xl mx-auto px-6 md:px-10 xl:px-0 pb-16 md:pb-28">
                <motion.div
                    className="bg-linear-to-br from-[#7370FF]/10 via-white to-[#9C99FF]/5 border border-zinc-200 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden group shadow-2xl shadow-[#7370FF]/5"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#7370FF]/10 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-1000 pointer-events-none" />

                    <h2 className={`${manrope.className} text-3xl md:text-5xl lg:text-6xl font-bold text-zinc-900 tracking-tight mb-4 md:mb-6 relative z-10`}>
                        Ready to build something great?
                    </h2>
                    <p className={`text-zinc-500 text-base md:text-xl max-w-xl mx-auto mb-8 md:mb-12 relative z-10 ${manrope.className}`}>
                        Tell us about your idea. We&apos;ll scope it, design it, and ship it faster than you think.
                    </p>
                    <a
                        href="/contact"
                        className="relative z-10 inline-flex items-center gap-3 bg-linear-to-r from-[#7370FF] to-[#9C99FF] hover:scale-105 active:scale-95 text-white font-bold px-8 py-4 md:px-10 md:py-5 rounded-full transition-all duration-300 shadow-[0_20px_40px_rgba(115,112,255,0.3)] text-base md:text-lg"
                    >
                        Book a Free Discovery Call
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                    </a>
                </motion.div>
            </section>
        </div>
    );
}
