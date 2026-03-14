'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import imagecode from '../../public/images/showcase/code.png'
import imageStatue from '../../public/images/showcase/statue.png'
import { useRouter } from 'next/navigation';
import { manrope, satoshiFont } from '../utils/font';

const Showcase = () => {
    const router = useRouter()
    const handleGotoContact = () => {
        router.push('/contact')
    }
    return (
        <section className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <motion.div
                    className="w-full"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {/* Top Bento Grid - 2 Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-4 relative">
                        {/* Images for your designs */}
                        <div className="group bg-white rounded-[2rem] p-10 border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-700 flex flex-col relative overflow-hidden h-112.5">
                            <div className="z-10 relative">
                                <h3 className={`${manrope.className} text-zinc-900 text-2xl font-bold mb-3`}>Images for your designs</h3>
                                <p className="text-zinc-500 text-base">We use high-fidelity assets to bring your brand to life.</p>
                            </div>
                            <div className="relative w-full mx-auto grow mt-10 transition-transform duration-700 group-hover:scale-105">
                                <Image
                                    src={imageStatue}
                                    alt="Images design"
                                    fill
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </div>

                        {/* Clean Code */}
                        <div className="group bg-white rounded-[2rem] p-10 border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-700 flex flex-col relative overflow-hidden h-112.5">
                            <div className="z-10 relative mb-6">
                                <h3 className={`${manrope.className} text-zinc-900 text-2xl font-bold mb-3`}>Built for Performance</h3>
                                <p className="text-zinc-500 text-base">Clean, scalable, and production-ready codebases.</p>
                            </div>
                            <div className="relative w-full mx-auto grow mt-6 transition-transform duration-700 group-hover:scale-105">
                                <Image
                                    src={imagecode}
                                    alt="Clean code snippet"
                                    fill
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bento Grid - 3 Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                        {/* Build your website */}
                        <div className="group bg-white rounded-[2rem] p-10 border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-700 flex flex-col relative h-95 overflow-hidden">
                            <div className="flex justify-between items-center w-full relative mb-12">
                                <div className="flex items-center gap-2 text-[#7370FF] text-sm font-mono font-bold">
                                    <span>&lt; &gt;</span>
                                </div>
                                <span className={`text-xs text-zinc-400 font-bold uppercase tracking-widest absolute left-1/2 -translate-x-1/2 ${satoshiFont.className}`}>Digital Experience</span>
                            </div>

                            <div className="relative border-2 border-[#1ABCFE] p-3 mb-4 w-max self-start mt-2">
                                <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border-2 border-[#1ABCFE]"></div>
                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border-2 border-[#1ABCFE]"></div>
                                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border-2 border-[#1ABCFE]"></div>
                                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border-2 border-[#1ABCFE]"></div>
                                <h3 className={`${manrope.className} text-zinc-900 text-2xl font-bold px-1`}>Start Building Now</h3>
                            </div>
                            <p className="text-zinc-500 text-base mb-8">Ready to transform your vision into reality?</p>

                            <button onClick={handleGotoContact} className="bg-linear-to-r from-[#7370FF] to-[#9C99FF] hover:opacity-90 cursor-pointer text-white text-sm font-bold py-3 px-8 rounded-full w-max mt-auto transition-all shadow-lg shadow-[#7370FF]/30">
                                Get Started
                            </button>
                        </div>

                        {/* Organize Figma Files */}
                        <div className="group bg-white rounded-[2rem] p-10 border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-700 flex flex-col relative overflow-hidden h-95">
                            <div className="z-10 relative mb-6">
                                <h3 className={`${manrope.className} text-zinc-900 text-2xl font-bold mb-3`}>Optimized Workflows</h3>
                                <p className="text-zinc-500 text-base">We organize Figma files for seamless developer handoff.</p>
                            </div>

                            <div className="absolute bottom-8 right-8 w-[90%] bg-white rounded-2xl p-6 border border-zinc-100 shadow-2xl flex flex-col gap-4 transform group-hover:-translate-y-2 transition-transform duration-700">
                                <div className="flex items-center gap-3 text-zinc-300 text-sm font-bold">
                                    <span className="text-[#7370FF]">#</span> Section / Assets
                                </div>
                                <div className="flex items-center justify-between w-full relative">
                                    <div className="flex items-center gap-3 text-zinc-300 text-sm font-bold">
                                        <span className="text-[#7370FF]">#</span> Design / Tokens
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-900 text-sm font-bold bg-[#7370FF]/5 -mx-2 px-3 py-2 rounded-xl border border-[#7370FF]/10">
                                    <span className="text-[#7370FF]">#</span> Production / Ready
                                </div>
                            </div>
                        </div>

                        {/* Figma's Designs */}
                        <div className="group bg-white rounded-[2rem] p-10 border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-700 flex flex-col relative overflow-hidden h-95">
                            <div className="z-10 relative">
                                <h3 className={`${manrope.className} text-zinc-900 text-2xl font-bold mb-3`}>Iconic Design</h3>
                                <p className="text-zinc-500 text-base">Magic works right inside your favorite design tools.</p>
                            </div>
                            <div className="absolute right-10 bottom-10 grid grid-cols-2 gap-3 w-35 group-hover:rotate-12 transition-transform duration-700">
                                <div className="w-16 h-16 bg-[#F24E1E] rounded-l-full"></div>
                                <div className="w-16 h-16 bg-[#FF7262] rounded-full"></div>
                                <div className="w-16 h-16 bg-[#A259FF] rounded-l-full"></div>
                                <div className="w-16 h-16 bg-[#1ABCFE] rounded-full"></div>
                                <div className="w-16 h-16 bg-[#0ACF83] rounded-l-full rounded-br-full"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Showcase;