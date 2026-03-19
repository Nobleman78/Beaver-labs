'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { manrope } from '../utils/font';

const workingPrinciple = [
    {
        step: "01",
        icon: "/images/new/idea.png",
        title: "Discovery",
        description: "We start by diving deep into your vision and requirements.",
        includes: [
            "Understand Requirements",
            "Define project scope"
        ]
    },
    {
        step: "02",
        icon: "/images/new/design.png",
        title: "Design",
        description: "Crafting beautiful, intuitive, and engaging interfaces.",
        includes: [
            "UI/UX wireframes",
            "User flows"
        ]
    },
    {
        step: "03",
        icon: "/images/new/development.png",
        title: "Development",
        description: "Building robust, scalable, and high-performance solutions.",
        includes: [
            "Agile Sprint",
            "Regular Updates"
        ]
    },
    {
        step: "04",
        icon: "/images/new/launch.png",
        title: "Launch",
        description: "Deploying your product and ensuring a smooth transition.",
        includes: [
            "Deployments",
            "Handoff and Support"
        ]
    },
];

const HowWeWork = () => {
    return (
        <section className="relative overflow-hidden bg-[#7370FF] rounded-t-[60px] lg:rounded-t-[120px] py-12 md:py-16">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute top-0 -left-4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" style={{ willChange: "opacity", transform: "translateZ(0)" }} />
                <div className="absolute bottom-0 -right-4 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', willChange: "opacity", transform: "translateZ(0)" }} />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full max-w-7xl">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-10 md:mb-15 lg:mb-28 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    style={{ willChange: "transform, opacity" }}>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-block mb-6"
                    >

                    </motion.div>

                    <h2 className={`${manrope.className} text-3xl md:text-5xl lg:text-[80px] font-bold tracking-[-0.02em] text-white leading-[1.05] mb-5 md:mb-8`}>
                        How we work
                    </h2>
                    <p className={`${manrope.className} text-base sm:text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed font-medium tracking-[-0.01em]`}>
                        A structured, transparent, and efficient journey from the first concept
                        to a world-class production release.
                    </p>
                </motion.div>

                {/* Vertical Stepped Layout */}
                <div className="relative max-w-5xl mx-auto   md:py-10">
                    {/* Central Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 border-l-[2.5px] border-dashed border-[#b3c1d6] -translate-x-1/2 hidden md:block" />

                    {workingPrinciple.map((item, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div key={index} className={`relative flex flex-col md:flex-row w-full mb-6 md:mb-12 lg:mb-16 ${isEven ? 'justify-start' : 'justify-end'}`}>

                                {/* Item Container */}
                                <div className={`w-full lg:w-1/2 flex ${isEven ? 'lg:pr-20 justify-end' : 'lg:pl-20 justify-start'} relative`}>

                                    {/* Horizontal Connecting Line - Desktop Only */}
                                    <div className={`hidden md:block absolute top-[50%] -translate-y-[50%] w-20 border-t-[2.5px] border-dashed border-[#b3c1d6] 
                                    ${isEven ? 'right-0' : 'left-0'}`} />

                                    {/* Card */}
                                    <motion.div
                                        className="w-full max-w-115 bg-white rounded-[20px] shadow-[0_4px_40px_rgba(0,0,0,0.06)] p-6 md:p-8 lg:p-10 relative z-10 border border-slate-100/50"
                                        initial={{ opacity: 0, x: isEven ? -40 : 40, y: 15 }}
                                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.1 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        style={{ willChange: "transform, opacity" }}
                                    >
                                        <div className="flex justify-between items-start mb-6 gap-4">
                                            {/* Title */}
                                            <h3 className={`${manrope.className} text-[22px] lg:text-[26px] font-extrabold text-[#1e293b] mt-1 tracking-tight`}>
                                                {item.title}
                                            </h3>

                                            {/* Badge */}
                                            <div className="inline-flex shrink-0">
                                                <span className={`${manrope.className} px-4 py-1.5 rounded-[12px] border-[1.5px] border-[#2563eb] text-[#2563eb] font-bold text-sm lg:text-[15px] bg-transparent whitespace-nowrap`}>
                                                    Step - {item.step}
                                                </span>
                                            </div>
                                        </div>

                                        <p className={`${manrope.className} text-[#475569] text-base lg:text-[17px] leading-[1.7]`}>
                                            {item.description}
                                        </p>

                                        {/* Includes list made very subtle to match layout weight */}
                                        {item.includes && item.includes.length > 0 && (
                                            <div className="mt-8 flex flex-wrap gap-2">
                                                {item.includes.map((inc, i) => (
                                                    <span key={i} className={`${manrope.className} px-3 py-1 bg-[#f8fafc] text-[#64748b] rounded-md text-[13px] border border-[#e2e8f0] font-medium`}>
                                                        {inc}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;