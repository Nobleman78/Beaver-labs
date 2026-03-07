'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

// This is your standalone Accordion component
export function AccordionDemo() {
    return (
        <Accordion
            type="single"
            collapsible
            defaultValue="shipping"
            className="max-w-lg mx-auto text-white"
        >
            <AccordionItem value="shipping">
                <AccordionTrigger>What are your shipping options?</AccordionTrigger>
                <AccordionContent>
                    We offer standard (5-7 days), express (2-3 days), and overnight
                    shipping. Free shipping on international orders.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="returns">
                <AccordionTrigger>What is your return policy?</AccordionTrigger>
                <AccordionContent>
                    Returns accepted within 30 days. Items must be unused and in original
                    packaging. Refunds processed within 5-7 business days.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="support">
                <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
                <AccordionContent>
                    Reach us via email, live chat, or phone. We respond within 24 hours
                    during business days.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}

// This is your main Testimonials page/section
const FAQ = () => {
    return (
        <motion.div
            className="py-16 md:py-24 px-6 md:px-12 lg:px-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-10 md:mb-16 text-white text-center tracking-tight">Frequently Asked Questions</h2>
            {/* We call the AccordionDemo component here */}
            <AccordionDemo />
        </motion.div>
    );
};

export default FAQ;