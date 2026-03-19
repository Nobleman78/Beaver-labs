'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { manrope } from "../utils/font";

// This is your standalone Accordion component
export function AccordionDemo() {
    return (
        <Accordion
            type="single"
            collapsible
            defaultValue="shipping"
            className="max-w-2xl mx-auto space-y-4"
        >
            <AccordionItem value="shipping" className="bg-white border border-zinc-200 rounded-2xl px-6 py-2 shadow-sm hover:shadow-md transition-all duration-300">
                <AccordionTrigger className={`text-zinc-900 font-bold text-lg hover:no-underline ${manrope.className}`}>What are your typical project timelines?</AccordionTrigger>
                <AccordionContent className={`text-zinc-500 text-base leading-relaxed pt-2 pb-6 ${manrope.className}`}>
                    Every project is unique, but typical timelines range from 4-8 weeks for a standard MVP and 12-16 weeks for more complex enterprise solutions. We prioritize quality and transparency at every stage.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="returns" className="bg-white border border-zinc-200 rounded-2xl px-6 py-2 shadow-sm hover:shadow-md transition-all duration-300">
                <AccordionTrigger className={`text-zinc-900 font-bold text-lg hover:no-underline ${manrope.className}`}>Do you provide ongoing support after launch?</AccordionTrigger>
                <AccordionContent className={`text-zinc-500 text-base leading-relaxed pt-2 pb-6 ${manrope.className}`}>
                    Absolutely. We offer flexible maintenance packages to ensure your product stays updated, secure, and performs at its best as your user base grows.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="support" className="bg-white border border-zinc-200 rounded-2xl px-6 py-2 shadow-sm hover:shadow-md transition-all duration-300">
                <AccordionTrigger className={`text-zinc-900 font-bold text-lg hover:no-underline ${manrope.className}`}>How do we communicate throughout the process?</AccordionTrigger>
                <AccordionContent className={`text-zinc-500 text-base leading-relaxed pt-2 pb-6 ${manrope.className}`}>
                    We use Slack for daily communication, Jira for task tracking, and weekly syncs via Google Meet. You&apos;ll always have a clear view of our progress and upcoming milestones.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}

// This is your main Testimonials page/section
const FAQ = () => {
    return (
        <div id="faq" className='bg-[#7370FF] rounded-t-[60px] md:rounded-t-[100px]'>
            <motion.div
                className="py-12 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="text-center mb-10 md:mb-20">
                    <h2 className={`${manrope.className} text-3xl md:text-5xl lg:text-[80px] font-bold tracking-[-0.02em] text-white leading-[1.05] mb-5 md:mb-8`}>
                        Frequently Asked Questions
                    </h2>
                </div>

                <AccordionDemo />

                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                   

                </motion.div>
            </motion.div>
        </div>
    );
};

export default FAQ;