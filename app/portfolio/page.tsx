'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import imageOne from '../../public/images/whatwedobest/one.png';
import imageTwo from '../../public/images/whatwedobest/two.png';
import imageThree from '../../public/images/whatwedobest/three.png';
import imageFour from '../../public/images/whatwedobest/four.png';
import imageFive from '../../public/images/whatwedobest/five.png';
import videoThumb from '../../public/images/videos/videoOne.png';

const allProjects = [
    {
        id: 1,
        image: imageOne,
        name: 'NovaSaaS Dashboard',
        description: 'A sleek multi-tenant SaaS platform with real-time analytics and role-based access control.',
        tag: 'SaaS',
        tagColor: 'bg-purple-500/20 text-purple-300',
    },
    {
        id: 2,
        image: imageTwo,
        name: 'ConnectHub Web App',
        description: 'A modern collaboration platform built with Next.js, enabling teams to work seamlessly.',
        tag: 'Web App',
        tagColor: 'bg-blue-500/20 text-blue-300',
    },
    {
        id: 3,
        image: imageThree,
        name: 'PocketPay Mobile',
        description: 'A cross-platform fintech mobile app with instant payments and smart spending insights.',
        tag: 'Mobile',
        tagColor: 'bg-green-500/20 text-green-300',
    },
    {
        id: 4,
        image: imageFour,
        name: 'ArtSpace UI Kit',
        description: 'A comprehensive Figma-based design system for creative agencies and product teams.',
        tag: 'UI/UX',
        tagColor: 'bg-pink-500/20 text-pink-300',
    },
    {
        id: 5,
        image: imageFive,
        name: 'SmartFlow AI',
        description: 'An intelligent workflow automation tool that integrates with your existing tech stack.',
        tag: 'AI',
        tagColor: 'bg-yellow-500/20 text-yellow-300',
    },
    {
        id: 6,
        image: videoThumb,
        name: 'Penpot Open Source',
        description: 'Open-source design and prototyping platform built for cross-team collaboration.',
        tag: 'Open Source',
        tagColor: 'bg-orange-500/20 text-orange-300',
    },
    {
        id: 7,
        image: imageOne,
        name: 'CloudBase Platform',
        description: 'A backend-as-a-service platform supporting rapid prototyping and scalable deployments.',
        tag: 'SaaS',
        tagColor: 'bg-purple-500/20 text-purple-300',
    },
    {
        id: 8,
        image: imageTwo,
        name: 'MarketPulse Analytics',
        description: 'A data-driven marketing analytics dashboard that turns raw data into actionable insights.',
        tag: 'Web App',
        tagColor: 'bg-blue-500/20 text-blue-300',
    },
    {
        id: 9,
        image: imageFour,
        name: 'Designr Workspace',
        description: 'A professional UI/UX workspace platform with real-time collaboration and version history.',
        tag: 'UI/UX',
        tagColor: 'bg-pink-500/20 text-pink-300',
    },
];

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 3;

const Portfolio = () => {
    const [visible, setVisible] = useState(INITIAL_COUNT);

    const handleLoadMore = () => {
        setVisible((prev) => Math.min(prev + LOAD_MORE_COUNT, allProjects.length));
    };

    const shownProjects = allProjects.slice(0, visible);
    const hasMore = visible < allProjects.length;

    return (
        <div className="min-h-screen bg-[#1E1E1E]">
            <main className="max-w-7xl mx-auto px-6 md:px-10 xl:px-0 pt-32 pb-24">

                {/* Page Header */}
                <motion.div
                    className="text-center mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
                        Our Portfolio
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        A curated showcase of projects we have crafted — from SaaS platforms to mobile apps,
                        AI tools, and beautiful UI/UX systems.
                    </p>
                </motion.div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <AnimatePresence>
                        {shownProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: index < INITIAL_COUNT ? index * 0.08 : 0 }}
                                className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-[#7370FF]/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(115,112,255,0.1)] cursor-pointer"
                            >
                                {/* Image */}
                                <div className="relative w-full h-[240px] sm:h-[280px] md:h-[300px] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Tag badge */}
                                    <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm ${project.tagColor}`}>
                                        {project.tag}
                                    </span>
                                </div>

                                {/* Card Footer */}
                                <div className="p-6 md:p-8">
                                    <h3 className="text-white text-xl md:text-2xl font-bold mb-2 group-hover:text-[#9C99FF] transition-colors duration-300">
                                        {project.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Load More Button */}
                {hasMore && (
                    <motion.div
                        className="flex justify-center mt-14 md:mt-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <button
                            onClick={handleLoadMore}
                            className="px-10 py-4 rounded-full bg-[#7370FF] text-white font-semibold text-base hover:bg-[#625df5] active:scale-95 transition-all duration-200 shadow-[0_0_30px_rgba(115,112,255,0.3)]"
                        >
                            Load More Projects
                        </button>
                    </motion.div>
                )}

                {!hasMore && visible > INITIAL_COUNT && (
                    <motion.p
                        className="text-center text-gray-500 mt-14 text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        You&apos;ve seen all our projects. More coming soon!
                    </motion.p>
                )}
            </main>
        </div>
    );
};

export default Portfolio;