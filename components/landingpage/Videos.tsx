'use client';

import React from 'react';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import video from '../../public/images/videos/videoOne.png';

const Videos = () => {
    return (
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 xl:px-0 py-16 md:py-24">
            {/* Background Purple Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[300px] md:h-[500px] bg-[#7370FF] opacity-30 md:opacity-40 blur-[100px] md:blur-[180px] -z-10 rounded-full pointer-events-none"></div>

            {/* Video / Image Container */}
            <motion.div
                className="flex justify-center relative z-10 w-full"
                initial={{ opacity: 0, scale: 0.94, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="relative w-full max-w-5xl rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(115,112,255,0.15)] bg-black/40 backdrop-blur-sm group cursor-pointer">
                    <Image
                        src={video}
                        alt="Product Video Preview"
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors duration-300">
                        <motion.div
                            className="w-16 h-16 md:w-24 md:h-24 bg-[#7370FF] rounded-full flex items-center justify-center shadow-lg"
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 200 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaPlay className="text-white text-xl md:text-3xl ml-1 md:ml-2" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Videos;