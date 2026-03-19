'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IoCall } from "react-icons/io5";
import { manrope } from "../utils/font";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[95vh] flex flex-col items-center justify-start md:justify-center pt-2 pb-6 md:py-0 px-6 md:px-10 lg:px-16 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto text-center relative z-10 ">
        {/* Optional: Badge or Tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >

        </motion.div>

        <motion.h1
          className={`${manrope.className} text-4xl md:text-5xl lg:text-[80px] font-bold tracking-[-0.02em] text-zinc-900 leading-[1.05] mt-4 md:mt-0 mb-4 md:mb-8`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ willChange: "transform, opacity" }}
        >
          Turn your ideas{' '}
          <br className="hidden sm:block " />
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#7370FF] via-[#8B88FF] to-[#9C99FF] drop-shadow-sm">
              into reality</span>

          </span>
        </motion.h1>

        <motion.p
          className={`${manrope.className} text-lg sm:text-xl md:text-2xl text-zinc-600 max-w-4xl mx-auto mb-8 md:mb-14 leading-relaxed font-medium tracking-[-0.01em]`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ willChange: "transform, opacity" }}
        >
          We are a team of strategists and designers building high-performance digital products with React, TypeScript, Tailwind CSS, and Node.js.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="tel:+09433443"
            className={`${manrope.className} group relative px-9 py-4.5 rounded-full bg-[#7370FF] text-white font-bold text-base md:text-lg flex items-center gap-3 overflow-hidden`}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ willChange: "transform" }}
          >
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10">Start Your Project</span>
            <IoCall className="relative z-10 text-white w-5 h-5 group-hover:rotate-12 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section >
  );
};

export default Hero;