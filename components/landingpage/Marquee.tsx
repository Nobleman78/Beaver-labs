"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import { motion } from "framer-motion";
import { manrope } from "../utils/font";

const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Jane",
        username: "@jane",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jane",
    },
    {
        name: "Jenny",
        username: "@jenny",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jenny",
    },
    {
        name: "James",
        username: "@james",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/james",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

interface ReviewCardProps {
    img: string;
    name: string;
    username: string;
    body: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
    img,
    name,
    username,
    body,
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-72 cursor-pointer overflow-hidden rounded-2xl border p-6 transition-all duration-300",
                "border-zinc-200 bg-white hover:border-[#7370FF]/30 hover:shadow-xl hover:shadow-[#7370FF]/5 hover:-translate-y-1",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image
                    className="rounded-full"
                    width="32"
                    height="32"
                    alt={name}
                    src={img}
                />

                <div className="flex flex-col">
                    <figcaption className="text-sm font-bold text-zinc-900">
                        {name}
                    </figcaption>
                    <p className={`text-xs font-medium text-zinc-500 ${manrope.className}`}>
                        {username}
                    </p>
                </div>
            </div>

            <blockquote className={`mt-4 text-sm leading-relaxed text-zinc-600 ${manrope.className}`}>{body}</blockquote>
        </figure>
    );
};

// Main Demo Component
export function MarqueeDemo() {
    return (
        <div id="testimonials" className="relative flex w-full flex-col items-center justify-center overflow-hidden py-16 md:py-24 bg-[#7370FF]">
            {/* Elegant Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-indigo-50 via-white to-white opacity-70 pointer-events-none" />

            <motion.div
                className="text-center mb-12 md:mb-16 max-w-2xl mx-auto px-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <h2 className={`${manrope.className} text-4xl md:text-5xl lg:text-[80px] font-bold tracking-[-0.02em] text-white leading-[1.05] mb-8`}>What people are saying</h2>
                <p className={`${manrope.className} text-lg sm:text-xl md:text-2xl text-white max-w-4xl mx-auto mb-14 leading-relaxed font-medium tracking-[-0.01em]`}>Here what people are saying about our craft and process.</p>
            </motion.div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden"
                style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>

                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
            </div>
        </div>
    );
}
export default MarqueeDemo;
