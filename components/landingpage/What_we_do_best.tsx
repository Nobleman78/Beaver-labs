import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import imageOne from '../../public/images/whatwedobest/one.png'
import imageTwo from '../../public/images/whatwedobest/two.png'
import imageThree from '../../public/images/whatwedobest/three.png'
import imageFour from '../../public/images/whatwedobest/four.png'
import imageFive from '../../public/images/whatwedobest/five.png'

const What_we_do_best = () => {
    return (
        <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-[#0a0514]">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Header Section */}
                <div className="text-center max-w-2xl mb-12">
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        We are a team of strategists, designers built with React, Typescript, Tailwind CSS, and Nodejs
                        <br />when you refuse to play things safe.
                    </p>
                </div>

                {/* Main Two-Column Flex Row */}
                <div className="w-full max-w-[1000px] h-[700px] flex flex-row gap-5">

                    {/* LEFT COLUMN — SaaS + AI Automation */}
                    <div className="flex flex-col gap-5 w-1/4">

                        {/* SaaS Platforms */}
                        <div className="flex-1 rounded-[18px] overflow-hidden relative group bg-[#16122d]">
                            <Image
                                src={imageOne}
                                alt="SaaS Platforms Dashboard"
                                fill
                                className="object-cover object-left-top"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#261E3F]/90 to-transparent"></div>
                            <h3 className="absolute bottom-5 left-5 text-white text-lg font-medium tracking-wide z-10">SaaS Platforms</h3>
                            <div className="absolute bottom-5 right-5 w-7 h-7 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors z-10 shadow-lg">
                                <ArrowUpRight className="text-black" size={16} strokeWidth={2.5} />
                            </div>
                        </div>

                        {/* AI Automation */}
                        <div className="flex-1 rounded-[18px] overflow-hidden relative group bg-[#16122d]">
                            <Image
                                src={imageFive}
                                alt="AI Automation Interface"
                                fill
                                className="object-cover object-top"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#261E3F]/90 to-transparent"></div>
                            <h3 className="absolute bottom-5 left-5 text-white text-lg font-medium tracking-wide z-10">AI Automation</h3>
                            <div className="absolute bottom-5 right-5 w-7 h-7 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors z-10 shadow-lg">
                                <ArrowUpRight className="text-black" size={16} strokeWidth={2.5} />
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN — Web Applications + Mobile Apps + UI/UX */}
                    <div className="flex flex-col gap-5 flex-1">

                        {/* Top row: Web Applications + Mobile Apps side by side */}
                        <div className="flex flex-row gap-5 flex-[2]">

                            {/* Web Applications */}
                            <div className="flex-[2] rounded-[18px] overflow-hidden relative group bg-[#16122d]">
                                <Image
                                    src={imageTwo}
                                    alt="Web Applications Interface"
                                    fill
                                    className="object-cover object-top"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#261E3F]/90 to-transparent"></div>
                                <h3 className="absolute bottom-5 left-5 text-white text-lg font-medium tracking-wide z-10">Web Applications</h3>
                                <div className="absolute bottom-5 right-5 w-7 h-7 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors z-10 shadow-lg">
                                    <ArrowUpRight className="text-black" size={16} strokeWidth={2.5} />
                                </div>
                            </div>

                            {/* Mobile Apps */}
                            <div className="flex-1 rounded-[18px] overflow-hidden relative group bg-[#16122d]">
                                <Image
                                    src={imageThree}
                                    alt="Mobile Apps Interfaces"
                                    fill
                                    className="object-cover object-top"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#261E3F]/90 to-transparent"></div>
                                <h3 className="absolute bottom-5 left-5 text-white text-lg font-medium tracking-wide z-10">Mobile Apps</h3>
                                <div className="absolute bottom-5 right-5 w-7 h-7 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors z-10 shadow-lg">
                                    <ArrowUpRight className="text-black" size={16} strokeWidth={2.5} />
                                </div>
                            </div>

                        </div>

                        {/* UI/UX Design — bottom of right column */}
                        <div className="flex-[3] rounded-[18px] overflow-hidden relative group bg-[#16122d] border-[3px] border-[#261E3F]">
                            <Image
                                src={imageFour}
                                alt="UI/UX Design Portfolio"
                                fill
                                className="object-cover object-center"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#261E3F] via-[#261E3F]/80 to-transparent"></div>
                            <h3 className="absolute bottom-8 left-8 text-white text-2xl font-bold tracking-wide z-10">UI/UX Design</h3>
                            <div className="absolute bottom-8 right-8 w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors z-10 shadow-lg">
                                <ArrowUpRight className="text-black" size={20} strokeWidth={2.5} />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default What_we_do_best;