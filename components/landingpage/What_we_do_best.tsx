'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import imageOne from '../../public/images/whatwedobest/one.png'

import imageFive from '../../public/images/whatwedobest/five.png'
import mobile from '../../public/images/whatwedobest/mobile.webp'
import ux from '../../public/images/whatwedobest/ux.jpg'
import webTwo from '../../public/images/whatwedobest/web-two.webp'
import { manrope } from '../utils/font';

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



const What_we_do_best = () => {
    return (
        <section className="w-full py-10 md:py-24 px-6 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Header */}
                <motion.div
                    className=" text-center max-w-4xl mb-8 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <h2 className={`${manrope.className} text-4xl md:text-5xl lg:text-[80px] font-bold tracking-[-0.02em] text-zinc-900 leading-[1.05] mb-8`}>What we do best</h2>
                    <p className={`${manrope.className} text-lg sm:text-xl md:text-2xl text-zinc-600 max-w-4xl mx-auto mb-5 md:mb-10 leading-relaxed font-medium tracking-[-0.01em]`}>
                        We are a team of strategists and designers building with React, TypeScript, Tailwind CSS, and Node.js

                    </p>
                </motion.div>

                {/* ── MOBILE: stacked single column ── */}
                <div className="flex flex-col gap-4 w-full lg:hidden">
                    {[
                        { src: imageOne, alt: 'SaaS Platforms Dashboard', label: 'SaaS Platforms', h: 'h-[260px] sm:h-[320px]', fit: 'object-left-top' },
                        { src: imageFive, alt: 'AI Automation Interface', label: 'AI Automation', h: 'h-[260px] sm:h-[320px]', fit: 'object-top w-[100vw] scale-110 lg:scale-105 transition-transform duration-700' },
                        { src: webTwo, alt: 'Web Applications Interface', label: 'Web Applications', h: 'h-[260px] sm:h-[320px]', fit: 'object-center w-[100vw] scale-150 lg:scale-[1.3] transition-transform duration-700' },
                        { src: mobile, alt: 'Mobile Apps Interfaces', label: 'Mobile Apps', h: 'h-[260px] sm:h-[320px]', fit: 'object-top' },
                        { src: ux, alt: 'UI/UX Design Portfolio', label: 'UI/UX Design', h: 'h-[300px] sm:h-[360px]', fit: 'object-center' },
                    ].map((card, i) => (
                        <motion.div
                            key={card.label}
                            className={`relative w-full ${card.h} rounded-2xl overflow-hidden bg-zinc-100 group`}
                            custom={i}
                            variants={cardVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <Image src={card.src} alt={card.alt} fill className={`object-cover ${card.fit}`} />

                            {/* <h3 className="absolute bottom-5 left-5 text-white text-lg font-medium tracking-wide z-10">{card.label}</h3> */}
                            <ArrowButton />
                        </motion.div>
                    ))}
                </div>

                {/* ── DESKTOP: bento grid ── */}
                <div className="hidden lg:flex w-full max-w-275 h-187.5 flex-row gap-5">

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col flex-2 gap-5 h-full">
                        <motion.div
                            className="flex-3 rounded-[2rem] overflow-hidden relative group bg-zinc-50 border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-700"
                            custom={0} variants={cardVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        >
                            <Image src={imageOne} alt="SaaS Platforms Dashboard" fill className="object-cover object-top-left transition-transform duration-700 group-hover:scale-105" />

                            {/* <h3 className="absolute bottom-6 left-8 text-white text-xl font-bold tracking-tight z-10">SaaS Platforms</h3> */}
                            <ArrowButton className="bottom-6 right-8 w-8 h-8" />
                        </motion.div>

                        <motion.div
                            className="flex-3 rounded-[2rem] overflow-hidden relative group bg-zinc-50 border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-700"
                            custom={1} variants={cardVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        >
                            <Image src={imageFive} alt="AI Automation Interface" fill className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />

                            {/* <h3 className="absolute bottom-6 left-8 text-white text-xl font-bold tracking-tight z-10">AI Automation</h3> */}
                            <ArrowButton className="bottom-6 right-8 w-8 h-8" />
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col flex-[3.8] gap-5 h-full">

                        {/* Top row */}
                        <div className="flex flex-row gap-5 flex-2">
                            <motion.div
                                className="flex-[2.5] rounded-[2rem] overflow-hidden relative group bg-zinc-50 border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-700"
                                custom={2}
                                variants={cardVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <Image
                                    src={webTwo}
                                    alt="Web Applications Interface"
                                    fill
                                    sizes="100vw"
                                    className="object-cover object-center scale-[1.3] transition-transform duration-700 group-hover:scale-[1.4]"
                                    style={{ width: '100%', height: '100%' }}
                                />

                                {/* <h3 className="absolute bottom-6 left-8 text-black text-xl font-bold tracking-tight z-10">Web Apps</h3> */}
                                <ArrowButton className="bottom-6 right-8 w-8 h-8" />
                            </motion.div>

                            <motion.div
                                className="flex-[1.8] rounded-[2rem] overflow-hidden relative group bg-zinc-50 border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-700"
                                custom={3} variants={cardVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            >
                                <Image src={mobile} alt="Mobile Apps Interfaces" fill className="h-full w-full object-cover  transition-transform duration-700 group-hover:scale-105" />

                                {/* <h3 className="absolute bottom-6 left-8 text-white text-xl font-bold tracking-tight z-10">Mobile Apps</h3> */}
                                <ArrowButton className="bottom-6 right-8 w-8 h-8" />
                            </motion.div>
                        </div>

                        {/* UI/UX Design — large card */}
                        <motion.div
                            className="flex-4 rounded-[2rem] overflow-hidden relative group bg-zinc-50 border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-700"
                            custom={4} variants={cardVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        >
                            <Image src={ux} alt="UI/UX Design Portfolio" fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105" />

                            {/* <h3 className="absolute bottom-8 left-10 text-white text-3xl font-bold tracking-tighter z-10">UI/UX Design</h3> */}
                            <ArrowButton size={20} className="bottom-8 right-10 w-12 h-12" />
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default What_we_do_best;