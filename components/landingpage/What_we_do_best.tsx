'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import imageOne from '../../public/images/whatwedobest/one.png'
import imageTwo from '../../public/images/whatwedobest/two.png'
import imageThree from '../../public/images/whatwedobest/three.png'
import imageFour from '../../public/images/whatwedobest/four.png'
import imageFive from '../../public/images/whatwedobest/five.png'

const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.12 },
    }),
};

const ArrowButton = ({ size = 16, className = 'bottom-5 right-5 w-7 h-7' }: { size?: number; className?: string }) => (
    <div className={`absolute ${className} bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors z-10 shadow-lg`}>
        <ArrowUpRight className="text-black" size={size} strokeWidth={2.5} />
    </div>
);

const Overlay = ({ height = 'h-1/2' }: { height?: string }) => (
    <div className={`absolute inset-x-0 bottom-0 ${height} bg-gradient-to-t from-[#261E3F]/90 to-transparent`} />
);

const What_we_do_best = () => {
    return (
        <section className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-[#0a0514]">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Header */}
                <motion.div
                    className="text-center max-w-3xl mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                        We are a team of strategists, designers built with React, Typescript, Tailwind CSS, and Node.js
                        <br className="hidden md:block" /> when you refuse to play things safe.
                    </p>
                </motion.div>

                {/* ── MOBILE: stacked single column ── */}
                <div className="flex flex-col gap-4 w-full lg:hidden">
                    {[
                        { src: imageOne, alt: 'SaaS Platforms Dashboard', label: 'SaaS Platforms', h: 'h-[260px] sm:h-[320px]', fit: 'object-left-top' },
                        { src: imageFive, alt: 'AI Automation Interface', label: 'AI Automation', h: 'h-[260px] sm:h-[320px]', fit: 'object-top' },
                        { src: imageTwo, alt: 'Web Applications Interface', label: 'Web Applications', h: 'h-[260px] sm:h-[320px]', fit: 'object-top' },
                        { src: imageThree, alt: 'Mobile Apps Interfaces', label: 'Mobile Apps', h: 'h-[260px] sm:h-[320px]', fit: 'object-top' },
                        { src: imageFour, alt: 'UI/UX Design Portfolio', label: 'UI/UX Design', h: 'h-[300px] sm:h-[360px]', fit: 'object-center' },
                    ].map((card, i) => (
                        <motion.div
                            key={card.label}
                            className={`relative w-full ${card.h} rounded-2xl overflow-hidden bg-[#16122d] group`}
                            custom={i}
                            variants={cardVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <Image src={card.src} alt={card.alt} fill className={`object-cover ${card.fit}`} />
                            <Overlay />
                            <h3 className="absolute bottom-5 left-5 text-white text-lg font-medium tracking-wide z-10">{card.label}</h3>
                            <ArrowButton />
                        </motion.div>
                    ))}
                </div>

                {/* ── DESKTOP: bento grid ── */}
                <div className="hidden lg:flex w-full max-w-[1100px] h-[750px] flex-row gap-5">

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col flex-[2] gap-5 h-full">
                        <motion.div
                            className="flex-[3] rounded-[18px] overflow-hidden relative group bg-[#16122d]"
                            custom={0} variants={cardVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        >
                            <Image src={imageOne} alt="SaaS Platforms Dashboard" fill className="object-cover object-left-top" />
                            <Overlay />
                            <h3 className="absolute bottom-5 left-5 text-white text-lg font-medium tracking-wide z-10">SaaS Platforms</h3>
                            <ArrowButton />
                        </motion.div>

                        <motion.div
                            className="flex-[3] rounded-[18px] overflow-hidden relative group bg-[#16122d]"
                            custom={1} variants={cardVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        >
                            <Image src={imageFive} alt="AI Automation Interface" fill className="object-cover object-top" />
                            <Overlay />
                            <h3 className="absolute bottom-5 left-5 text-white text-lg font-medium tracking-wide z-10">AI Automation</h3>
                            <ArrowButton />
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col flex-[3.8] gap-5 h-full">

                        {/* Top row */}
                        <div className="flex flex-row gap-5 flex-[2]">
                            <motion.div
                                className="flex-[2.5] rounded-[18px] overflow-hidden relative group bg-[#16122d]"
                                custom={2} variants={cardVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            >
                                <Image src={imageTwo} alt="Web Applications Interface" fill className="object-cover object-top" />
                                <Overlay />
                                <h3 className="absolute bottom-5 left-5 text-white text-lg font-medium tracking-wide z-10">Web Applications</h3>
                                <ArrowButton />
                            </motion.div>

                            <motion.div
                                className="flex-[1.8] rounded-[18px] overflow-hidden relative group bg-[#16122d]"
                                custom={3} variants={cardVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            >
                                <Image src={imageThree} alt="Mobile Apps Interfaces" fill className="object-cover object-top pt-8" />
                                <Overlay />
                                <h3 className="absolute bottom-5 left-5 text-white text-lg font-medium tracking-wide z-10">Mobile Apps</h3>
                                <ArrowButton />
                            </motion.div>
                        </div>

                        {/* UI/UX Design — large card */}
                        <motion.div
                            className="flex-[4] rounded-[18px] overflow-hidden relative group bg-[#16122d] border-[3px] border-[#261E3F]"
                            custom={4} variants={cardVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        >
                            <Image src={imageFour} alt="UI/UX Design Portfolio" fill className="object-cover object-center" />
                            <Overlay height="h-[60%]" />
                            <h3 className="absolute bottom-8 left-8 text-white text-2xl font-bold tracking-wide z-10">UI/UX Design</h3>
                            <ArrowButton size={20} className="bottom-8 right-8 w-10 h-10" />
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default What_we_do_best;