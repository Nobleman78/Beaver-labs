'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const workingPrinciple = [
    {
        step: "01",
        icon: "/images/line-md_search (2).png",
        title: "Discovery",
        description: "We start by diving deep into your vision and requirements.",
        includes: [
            "Understand Requirements",
            "Define project scope"
        ]
    },
    {
        step: "02",
        icon: "/images/leaf.png",
        title: "Design",
        description: "Crafting beautiful, intuitive, and engaging interfaces.",
        includes: [
            "UI/UX wireframes",
            "User flows"
        ]
    },
    {
        step: "03",
        icon: "/images/rounded-point.png",
        title: "Development",
        description: "Building robust, scalable, and high-performance solutions.",
        includes: [
            "Agile Sprint",
            "Regular Update"
        ]
    },
    {
        step: "04",
        icon: "/images/arrow.png",
        title: "Launch",
        description: "Deploying your product and ensuring a smooth transition.",
        includes: [
            "Deployments",
            "Handoff and Support"
        ]
    },
];

const How_we_work = () => {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full max-w-7xl">
                <motion.div
                    className="text-center mb-16 lg:mb-20 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Work</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        From concept to launch — a simple, transparent, and efficient process to bring your ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting dashed line for desktop */}
                    <div className="hidden lg:block absolute top-[50px] left-[12%] right-[12%] h-[2px] border-t-2 border-dashed border-gray-700/50 -z-10" />

                    {workingPrinciple.map((item, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 rounded-3xl p-8 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] hover:-translate-y-2 flex flex-col"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="absolute top-6 right-8 text-7xl font-black text-white/[0.03] group-hover:text-white/[0.08] transition-colors duration-500 pointer-events-none">
                                {item.step}
                            </div>

                            <div className="relative z-10 flex-grow">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/10 group-hover:border-blue-400/30">
                                    <div className="relative w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                                        <Image src={item.icon} alt={item.title} fill className="object-contain" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 tracking-wide group-hover:text-blue-400 transition-colors duration-300">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 mb-8 text-sm leading-relaxed min-h-[60px]">
                                    {item.description}
                                </p>

                                <ul className="space-y-4 mt-auto">
                                    {item.includes.map((inc, i) => (
                                        <li key={i} className="flex items-start text-gray-300 text-sm font-medium">
                                            <span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                            </span>
                                            {inc}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Hover gradient overlay */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default How_we_work;