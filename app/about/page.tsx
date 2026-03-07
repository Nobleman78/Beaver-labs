'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '30+', label: 'Happy Clients' },
    { value: '5+', label: 'Years of Experience' },
    { value: '10+', label: 'Team Members' },
];

const values = [
    {
        icon: '🚀',
        title: 'Move Fast',
        description: 'We ship quickly without sacrificing quality. Speed is a feature, not a trade-off.',
    },
    {
        icon: '🎨',
        title: 'Design First',
        description: 'Every pixel matters. We obsess over details to create experiences that delight.',
    },
    {
        icon: '🤝',
        title: 'Transparent',
        description: 'No surprises. We keep clients in the loop at every step of the process.',
    },
    {
        icon: '⚡',
        title: 'Performance',
        description: 'We build for scale. Fast, reliable, and production-ready from day one.',
    },
];

const team = [
    { name: 'Alex Johnson', role: 'Founder & CEO', gradient: 'from-purple-500 to-blue-500', initials: 'AJ' },
    { name: 'Sarah Chen', role: 'Lead Designer', gradient: 'from-pink-500 to-orange-400', initials: 'SC' },
    { name: 'Marcus Lee', role: 'Senior Engineer', gradient: 'from-green-400 to-cyan-500', initials: 'ML' },
    { name: 'Priya Patel', role: 'Product Manager', gradient: 'from-yellow-400 to-red-500', initials: 'PP' },
];

const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay } },
});

const About = () => {
    return (
        <div className="min-h-screen bg-[#1E1E1E]">
            {/*  */}
            {/* ── Hero ── */}
            <section className="max-w-7xl mx-auto px-6 md:px-10 xl:px-0 pt-36 pb-20 text-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp(0)}
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
                        We Build the Future,<br className="hidden md:block" /> One Product at a Time
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Breaverlabs is a product studio of designers and engineers obsessed with building
                        beautiful, powerful digital products for founders and businesses worldwide.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp(0.3)}
                >
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-white/5 border border-white/10 rounded-2xl py-8 px-4 hover:border-[#7370FF]/40 transition-colors duration-300"
                        >
                            <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                            <p className="text-gray-400 text-sm">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* ── Mission ── */}
            <section className="max-w-7xl mx-auto px-6 md:px-10 xl:px-0 py-20 md:py-28">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <span className="text-xs font-semibold tracking-widest uppercase text-[#9C99FF] mb-4 block">Our Mission</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                            Turning Bold Ideas into Real Products
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            We partner with early-stage startups and growth-stage companies to design, build, and launch
                            world-class digital products. From the very first wireframe to production deployment, we are
                            your full-stack product team.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
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
                        <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden border border-white/10">
                            {/* Animated gradient card in place of image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#7370FF]/30 via-[#1E1E1E] to-[#9C99FF]/20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center px-8">
                                    <div className="w-20 h-20 rounded-3xl bg-[#7370FF] flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(115,112,255,0.5)]">
                                        <span className="text-4xl">💡</span>
                                    </div>
                                    <p className="text-white text-2xl font-bold mb-2">Ideas → Reality</p>
                                    <p className="text-gray-400 text-base">From concept to launch, with you every step.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Values ── */}
            <section className="max-w-7xl mx-auto px-6 md:px-10 xl:px-0 py-20 md:py-28">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <span className="text-xs font-semibold tracking-widest uppercase text-[#9C99FF] mb-4 block">What We Stand For</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Our Core Values</h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.12 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#7370FF]/40 hover:shadow-[0_0_30px_rgba(115,112,255,0.08)] transition-all duration-500 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[#7370FF]/10 flex items-center justify-center mb-6 text-2xl group-hover:bg-[#7370FF]/20 transition-colors duration-300">
                                {value.icon}
                            </div>
                            <h3 className="text-white text-xl font-bold mb-3">{value.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── Team ── */}
            <section className="max-w-7xl mx-auto px-6 md:px-10 xl:px-0 py-20 md:py-28">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <span className="text-xs font-semibold tracking-widest uppercase text-[#9C99FF] mb-4 block">The People</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Meet Our Team</h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                        A small, mighty team of builders who care deeply about craft and the people we build for.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.12 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:border-[#7370FF]/40 hover:shadow-[0_0_30px_rgba(115,112,255,0.08)] transition-all duration-500 group"
                        >
                            {/* Avatar */}
                            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mx-auto mb-5 shadow-lg text-white text-2xl font-bold group-hover:scale-105 transition-transform duration-300`}>
                                {member.initials}
                            </div>
                            <h3 className="text-white text-lg font-bold mb-1">{member.name}</h3>
                            <p className="text-[#9C99FF] text-sm font-medium">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="max-w-7xl mx-auto px-6 md:px-10 xl:px-0 py-20 md:py-28">
                <motion.div
                    className="bg-gradient-to-br from-[#7370FF]/20 via-white/5 to-[#9C99FF]/10 border border-[#7370FF]/20 rounded-3xl p-12 md:p-16 text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        Ready to Build Something?
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
                        Let&apos;s turn your idea into a product your users will love. Book a free discovery call today.
                    </p>
                    <a
                        href="tel:+09433443"
                        className="inline-flex items-center gap-2 bg-[#7370FF] hover:bg-[#625df5] text-white font-semibold px-9 py-4 rounded-full transition-colors duration-200 shadow-[0_0_30px_rgba(115,112,255,0.3)] text-base"
                    >
                        Book a Call
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14h-.08z" />
                        </svg>
                    </a>
                </motion.div>
            </section>
        </div>
    );
};

export default About;