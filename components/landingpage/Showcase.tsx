'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import imagecode from '../../public/images/showcase/code.png'
import imageFigma from '../../public/images/showcase/figmaOne.png'
import imageFigmaTwo from '../../public/images/showcase/figmaTwo.png';
import imageStatue from '../../public/images/showcase/statue.png'

const Showcase = () => {
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
                        <div className="bg-[#131315] rounded-3xl p-8 border border-gray-800/60 flex flex-col relative overflow-hidden h-[400px]">
                            <div className="z-10 relative">
                                <h3 className="text-white text-xl font-medium mb-2">Images for your designs</h3>
                                <p className="text-gray-400 text-sm">We use the images provided by you on your website</p>
                            </div>
                            <div className="relative w-full mx-auto flex-grow mt-8">
                                <Image
                                    src={imageStatue}
                                    alt="Images design"
                                    fill
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </div>

                        {/* Clean Code */}
                        <div className="bg-[#131315] rounded-3xl p-8 border border-gray-800/60 flex flex-col relative overflow-hidden h-[400px]">
                            <div className="z-10 relative mb-6">
                                <h3 className="text-white text-xl font-medium mb-2">Clean Code, Powerful Solutions</h3>
                                <p className="text-gray-400 text-sm">Building Reliable Code for Real-World Impact</p>
                            </div>
                            <div className="relative w-full mx-auto flex-grow mt-2">
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
                        <div className="bg-[#131315] rounded-3xl p-8 border border-gray-800/60 flex flex-col relative h-[320px]">
                            <div className="flex justify-between items-center w-full relative mb-12">
                                <div className="flex items-center gap-2 text-gray-500 text-sm font-mono font-bold">
                                    <span>&lt; &gt;</span>
                                </div>
                                <span className="text-xs text-gray-400 font-medium absolute left-1/2 -translate-x-1/2">My App</span>
                            </div>

                            <div className="relative border border-[#1ABCFE] p-1.5 mb-2 w-max self-start mt-2">
                                <div className="absolute -top-[3px] -left-[3px] w-[6px] h-[6px] bg-white border border-[#1ABCFE]"></div>
                                <div className="absolute -top-[3px] -right-[3px] w-[6px] h-[6px] bg-white border border-[#1ABCFE]"></div>
                                <div className="absolute -bottom-[3px] -left-[3px] w-[6px] h-[6px] bg-white border border-[#1ABCFE]"></div>
                                <div className="absolute -bottom-[3px] -right-[3px] w-[6px] h-[6px] bg-white border border-[#1ABCFE]"></div>
                                <h3 className="text-white text-xl font-medium px-1">Build your Website now</h3>
                            </div>
                            <p className="text-gray-400 text-sm mb-8 px-2">Get your website now</p>

                            <button className="bg-[#5c4df1] hover:bg-[#4b3cda] text-white text-sm font-medium py-2.5 px-6 rounded-full w-max mt-auto transition-colors">
                                Get Started
                            </button>
                        </div>

                        {/* Organize Figma Files */}
                        <div className="bg-[#131315] rounded-3xl p-8 border border-gray-800/60 flex flex-col relative overflow-hidden h-[320px]">
                            <div className="z-10 relative mb-6">
                                <h3 className="text-white text-xl font-medium mb-2">We organize figma files</h3>
                                <p className="text-gray-400 text-sm">Organize layers so You can spend less time to find any layers.</p>
                            </div>

                            <div className="absolute bottom-6 right-6 w-[85%] bg-[#1E1E1E] rounded-xl p-4 border border-gray-700/50 shadow-2xl flex flex-col gap-3">
                                <div className="flex items-center gap-3 text-gray-400 text-sm py-1">
                                    <span className="text-gray-500">#</span> Frame 2147223044
                                </div>
                                <div className="flex items-center justify-between w-full relative">
                                    <div className="flex items-center gap-3 text-gray-400 text-sm py-1">
                                        <span className="text-gray-500">#</span> Frame 2147223045
                                    </div>
                                    {/* Apple Pencil / Stylus mockup */}
                                    <div className="absolute right-2 top-2 w-[12px] h-[80px] bg-gradient-to-r from-gray-200 to-white rounded-t-full rounded-b-sm shadow-xl z-20 origin-bottom transform rotate-[-20deg]">
                                        <div className="absolute -bottom-[8px] left-0 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-gray-800"></div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-white text-sm py-1 bg-[#2C2C2E] -mx-2 px-2 rounded-md border border-gray-600">
                                    <span className="text-gray-400">#</span> Frame 2147223046
                                </div>
                            </div>
                        </div>

                        {/* Figma's Designs */}
                        <div className="bg-[#131315] rounded-3xl p-8 border border-gray-800/60 flex flex-col relative overflow-hidden h-[320px]">
                            <div className="z-10 relative">
                                <h3 className="text-white text-xl font-medium mb-2">Figma's Designs</h3>
                                <p className="text-gray-400 text-sm">Magic un-works right inside your favorite design tool</p>
                            </div>
                            <div className="absolute right-8 bottom-8 grid grid-cols-2 gap-1.5 w-[118px]">
                                <div className="w-[56px] h-[56px] bg-[#F24E1E] rounded-l-full"></div>
                                <div className="w-[56px] h-[56px] bg-[#FF7262] rounded-full"></div>
                                <div className="w-[56px] h-[56px] bg-[#A259FF] rounded-l-full"></div>
                                <div className="w-[56px] h-[56px] bg-[#1ABCFE] rounded-full"></div>
                                <div className="w-[56px] h-[56px] bg-[#0ACF83] rounded-l-full rounded-br-full"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Showcase;