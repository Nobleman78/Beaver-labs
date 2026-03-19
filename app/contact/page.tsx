'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoMail, IoCall, IoLocation, IoLogoLinkedin, IoLogoTwitter, IoLogoInstagram, IoArrowForward, IoCheckmarkCircle, IoTimeOutline, IoChatbubblesOutline } from "react-icons/io5";
import { manrope } from "@/components/utils/font";
import Swal from 'sweetalert2';

const contactInfo = [
    {
        icon: <IoMail className="text-[#7370FF] w-5 h-5" />,
        label: 'Email us',
        value: 'hello@beaverlabs.com',
        href: 'mailto:hello@beaverlabs.com',
    },
    {
        icon: <IoCall className="text-[#7370FF] w-5 h-5" />,
        label: 'Call us',
        value: '+1 (555) 000-0000',
        href: 'tel:+15550000000',
    },
    {
        icon: <IoLocation className="text-[#7370FF] w-5 h-5" />,
        label: 'Our Studio',
        value: '123 Design Street, Creative Valley, CA 94103',
        href: '#',
    },
];

const perks = [
    { icon: <IoTimeOutline className="w-5 h-5" />, text: 'Reply within 24 hours' },
    { icon: <IoCheckmarkCircle className="w-5 h-5" />, text: 'Free project consultation' },
    { icon: <IoChatbubblesOutline className="w-5 h-5" />, text: 'Transparent communication' },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            Swal.fire({
                title: 'Missing Information',
                text: 'Please fill in all fields before sending your message.',
                icon: 'warning',
                background: '#ffffff',
                color: '#18181b',
                confirmButtonColor: '#7370FF'
            });
            return;
        }
        console.log("Form submitted:", formData);
        Swal.fire({
            title: 'Message Sent!',
            text: 'Thanks for reaching out. We\'ll get back to you within 24 hours.',
            icon: 'success',
            background: '#ffffff',
            color: '#18181b',
            confirmButtonColor: '#7370FF'
        });
    };

    return (
        <div className={`${manrope.className} min-h-screen bg-white overflow-x-hidden`}>

            {/* ── Hero ── */}
            <section className="max-w-7xl mx-auto px-6 md:px-10 xl:px-0 pt-28 pb-10 md:pt-40 md:pb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block text-[#7370FF] text-xs font-bold uppercase tracking-[0.2em] mb-5 md:mb-6 bg-[#7370FF]/8 px-4 py-2 rounded-full border border-[#7370FF]/20">
                        Contact Us
                    </span>
                    <h1 className={`${manrope.className} text-[2.1rem] sm:text-4xl md:text-5xl lg:text-7xl font-bold text-zinc-900 tracking-[-0.02em] leading-[1.1] md:leading-[1.05] mb-4 md:mb-6`}>
                        Let&apos;s Start a<br className="hidden sm:block" /> Conversation
                    </h1>
                    <p className={`${manrope.className} text-zinc-500 text-base md:text-xl max-w-2xl mx-auto leading-relaxed`}>
                        Have a project in mind? We&apos;d love to hear from you. Let&apos;s create something extraordinary together.
                    </p>
                </motion.div>

                {/* Perks row */}
                <motion.div
                    className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-6 md:mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    {perks.map((perk, i) => (
                        <div key={i} className="flex items-center gap-2 text-zinc-500 text-xs sm:text-sm bg-zinc-50 border border-zinc-200 px-3 sm:px-4 py-2 rounded-full">
                            <span className="text-[#7370FF]">{perk.icon}</span>
                            {perk.text}
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* ── Main Content ── */}
            <section className="max-w-7xl mx-auto px-6 md:px-10 xl:px-0 pb-14 md:pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 items-start">

                    {/* Left: Contact Info */}
                    <motion.div
                        className="lg:col-span-2 space-y-6"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Info Cards */}
                        {contactInfo.map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                className="flex items-start gap-5 p-6 bg-zinc-50 border border-zinc-200 rounded-2xl hover:border-[#7370FF]/40 hover:shadow-[0_0_25px_rgba(115,112,255,0.08)] transition-all duration-400 group"
                            >
                                <div className="w-11 h-11 rounded-xl bg-white border border-zinc-200 flex items-center justify-center shrink-0 group-hover:bg-[#7370FF]/10 group-hover:border-[#7370FF]/30 transition-all duration-300 shadow-sm">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-1">{item.label}</p>
                                    <p className={`${manrope.className} text-zinc-900 font-bold text-base leading-snug`}>{item.value}</p>
                                </div>
                            </a>
                        ))}

                        {/* Social */}
                        <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-2xl">
                            <p className={`${manrope.className} text-zinc-900 text-sm font-bold mb-4`}>Follow our journey</p>
                            <div className="flex gap-3">
                                {[
                                    { icon: <IoLogoLinkedin className="w-5 h-5" />, label: 'LinkedIn' },
                                    { icon: <IoLogoTwitter className="w-5 h-5" />, label: 'Twitter' },
                                    { icon: <IoLogoInstagram className="w-5 h-5" />, label: 'Instagram' }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="w-11 h-11 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 hover:bg-[#7370FF] hover:border-[#7370FF] hover:text-white transition-all duration-300 shadow-sm"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        className="lg:col-span-3"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="bg-zinc-50 border border-zinc-200 rounded-[2rem] p-8 md:p-12">
                            <h2 className={`${manrope.className} text-zinc-900 text-2xl font-bold mb-8`}>Send us a message</h2>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className={`text-zinc-500 text-xs font-bold uppercase tracking-wider ml-1 ${manrope.className}`}>Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className={`${manrope.className} w-full bg-white border border-zinc-200 rounded-xl py-4 px-5 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#7370FF] focus:ring-1 focus:ring-[#7370FF]/50 transition-all text-sm`}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className={`text-zinc-500 text-xs font-bold uppercase tracking-wider ml-1 ${manrope.className}`}>Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className={`${manrope.className} w-full bg-white border border-zinc-200 rounded-xl py-4 px-5 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#7370FF] focus:ring-1 focus:ring-[#7370FF]/50 transition-all text-sm`}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className={`text-zinc-500 text-xs font-bold uppercase tracking-wider ml-1 ${manrope.className}`}>Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="How can we help?"
                                        className={`${manrope.className} w-full bg-white border border-zinc-200 rounded-xl py-4 px-5 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#7370FF] focus:ring-1 focus:ring-[#7370FF]/50 transition-all text-sm`}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className={`text-zinc-500 text-xs font-bold uppercase tracking-wider ml-1 ${manrope.className}`}>Message</label>
                                    <textarea
                                        rows={6}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project..."
                                        className={`${manrope.className} w-full bg-white border border-zinc-200 rounded-xl py-4 px-5 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#7370FF] focus:ring-1 focus:ring-[#7370FF]/50 transition-all resize-none text-sm`}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className={`${manrope.className} w-full py-5 px-8 font-bold bg-linear-to-r from-[#7370FF] to-[#9C99FF] text-white rounded-xl flex items-center justify-center gap-3 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-[0_10px_30px_rgba(115,112,255,0.3)] text-base`}
                                >
                                    Send Message
                                    <IoArrowForward className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
