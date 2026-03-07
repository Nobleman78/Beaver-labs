'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import saas from "../../public/images/services/saas.png";
import webapp from "../../public/images/services/webappication.jpg";
import mobile from "../../public/images/services/mobileapp.avif";
import ai from '../../public/images/services/ai-automation.jpg';
import ui from '../../public/images/services/ui-ux.avif';

const services = [
    {
        id: 1,
        title: 'SaaS Platform',
        description:
            'We build scalable, multi-tenant SaaS platforms that power your business. From onboarding flows to billing integrations, we help you ship faster and scale confidently with React, Typescript. Come take a product-led growth approach that is ready to invite the future.',
        image: saas,
        imageAlt: 'SaaS Platform Visual',
    },
    {
        id: 2,
        title: 'Web Applications',
        description:
            'We build blazing-fast web applications using Next.js, Typescript, Tailwind CSS, and Nodejs when you refuse to play things safe. We focus on performance, accessibility, and delivering exceptional digital experiences your users will love.',
        image: webapp,
        imageAlt: 'Web Application Visual',
    },
    {
        id: 3,
        title: 'Mobile Apps',
        description:
            'We create stunning, high-performance mobile apps for iOS and Android using React Native. Whether it is a consumer product or an internal tool, our mobile solutions are designed to delight users and drive real-world results.',
        image: mobile,
        imageAlt: 'Mobile App Visual',
    },
    {
        id: 4,
        title: 'UI/UX Design',
        description:
            'We transform complex problems into elegant, intuitive designs. Our team crafts pixel-perfect Figma prototypes, user flows, and design systems that serve as the foundation for every successful product we build.',
        image: ui,
        imageAlt: 'UI/UX Design Visual',
    },
    {
        id: 5,
        title: 'AI Automation',
        description:
            'We integrate intelligent AI workflows that automate the repetitive, amplify the creative, and unlock new possibilities for your business. From LLM-powered tools to custom automation pipelines, we bring the future to your product today.',
        image: ai,
        imageAlt: 'AI Automation Visual',
    },
];

const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};
const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const Service = () => {
    return (
        <div className="min-h-screen bg-[#1E1E1E]">

            {/* Hero */}
            <section className="max-w-7xl mx-auto px-6 md:px-10 xl:px-0 pt-36 pb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
                        Solutions Tailored<br className="hidden md:block" /> for the Next Gen
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        We are a team of strategists, designers built with React, Typescript, Tailwind CSS,
                        and Node.js when you refuse to play things safe.
                    </p>
                </motion.div>
            </section>

            {/* Services List */}
            <section className="max-w-7xl mx-auto px-6 md:px-10 xl:px-0 pb-28 space-y-28 md:space-y-36">
                {services.map((service, index) => {
                    const isEven = index % 2 === 1;
                    return (
                        <div
                            key={service.id}
                            className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-16 lg:gap-24`}
                        >
                            {/* Text */}
                            <motion.div
                                className="flex-1 text-left"
                                variants={isEven ? fadeRight : fadeLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                                    {service.title}
                                </h2>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                                    {service.description}
                                </p>
                                <button className="inline-flex items-center gap-2 bg-[#7370FF] hover:bg-[#625df5] text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 shadow-[0_0_24px_rgba(115,112,255,0.25)]">
                                    Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                                    </svg>
                                </button>
                            </motion.div>

                            {/* Image */}
                            <motion.div
                                className="flex-1 w-full"
                                variants={isEven ? fadeLeft : fadeRight}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <div className="relative w-full h-[280px] sm:h-[340px] md:h-[380px] lg:h-[420px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(115,112,255,0.1)] group">
                                    <Image
                                        src={service.image}
                                        alt={service.imageAlt}
                                        fill
                                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Subtle purple overlay on hover */}
                                    <div className="absolute inset-0 bg-[#7370FF]/0 group-hover:bg-[#7370FF]/10 transition-colors duration-500 rounded-3xl" />
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </section>
        </div>
    );
};

export default Service;