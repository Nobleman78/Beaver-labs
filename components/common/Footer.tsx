"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IoLogoYoutube, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io5';
import { ArrowUpRight } from 'lucide-react';
import { manrope } from '../utils/font';

const Footer = () => {
    return (
        <footer className={`${manrope.className} w-full bg-white border-t border-zinc-100`}>
            {/* CTA Strip */}
            <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-0 pt-12 pb-10 md:pt-20 md:pb-16">
                <motion.div
                    className="relative rounded-[2rem] md:rounded-[2.5rem] bg-zinc-950 overflow-hidden px-6 sm:px-10 md:px-16 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    {/* Glow orbs */}
                    <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#7370FF]/25 blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute -bottom-20 -right-10 w-64 h-64 bg-[#9C99FF]/20 blur-[100px] rounded-full pointer-events-none" />

                    <div className="relative z-10 text-center md:text-left">
                        <p className="text-[#9C99FF] text-xs font-bold uppercase tracking-[0.2em] mb-3">Ready when you are</p>
                        <h2 className={`${manrope.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-[-0.02em] leading-[1.15] md:leading-[1.1]`}>
                            Let&apos;s build something<br className="hidden md:block" /> remarkable together.
                        </h2>
                    </div>

                    <div className="relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-4 shrink-0 w-full sm:w-auto">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-[#7370FF] hover:bg-[#5f5ce8] text-white font-bold px-7 py-3.5 md:px-8 md:py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(115,112,255,0.4)] text-sm"
                        >
                            Start a Project
                            <ArrowUpRight size={16} />
                        </Link>
                        <Link
                            href="/how-we-work"
                            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 md:px-8 md:py-4 rounded-full transition-all duration-300 border border-white/20 text-sm"
                        >
                            How We Work
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Footer Links */}
            <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-0 pb-10">
                <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-8 pb-12">
                    {/* Brand */}
                    <div className="max-w-xs">
                        <Link href="/" className={`${manrope.className} text-zinc-900 text-2xl font-bold tracking-tight`}>
                            Beaver Labs
                        </Link>
                        <p className={`${manrope.className} text-zinc-500 text-sm leading-relaxed mt-4`}>
                            A product design & engineering studio building beautiful, fast digital products for founders worldwide.
                        </p>
                        <div className="flex items-center gap-3 mt-6">
                            <Link href="#" aria-label="YouTube" className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-[#7370FF] hover:text-[#7370FF] hover:bg-[#7370FF]/5 transition-all duration-300">
                                <IoLogoYoutube size={15} />
                            </Link>
                            <Link href="#" aria-label="Twitter" className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-[#7370FF] hover:text-[#7370FF] hover:bg-[#7370FF]/5 transition-all duration-300">
                                <IoLogoTwitter size={15} />
                            </Link>
                            <Link href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-[#7370FF] hover:text-[#7370FF] hover:bg-[#7370FF]/5 transition-all duration-300">
                                <IoLogoLinkedin size={15} />
                            </Link>
                        </div>
                    </div>

                    {/* Nav Columns */}
                    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-8 sm:gap-12 md:gap-16 lg:gap-20">
                        <div>
                            <h4 className={`${manrope.className} text-zinc-900 text-xs font-bold uppercase tracking-[0.15em] mb-5`}>Studio</h4>
                            <div className="flex flex-col gap-3">
                                <Link href="/about" className={`${manrope.className} text-zinc-500 text-sm hover:text-zinc-900 transition-colors duration-200`}>About Us</Link>
                                <Link href="/how-we-work" className={`${manrope.className} text-zinc-500 text-sm hover:text-zinc-900 transition-colors duration-200`}>How We Work</Link>
                                <Link href="/contact" className={`${manrope.className} text-zinc-500 text-sm hover:text-zinc-900 transition-colors duration-200`}>Contact</Link>
                            </div>
                        </div>

                        <div>
                            <h4 className={`${manrope.className} text-zinc-900 text-xs font-bold uppercase tracking-[0.15em] mb-5`}>Work</h4>
                            <div className="flex flex-col gap-3">
                                <Link href="/projects" className={`${manrope.className} text-zinc-500 text-sm hover:text-zinc-900 transition-colors duration-200`}>Projects</Link>
                                <Link href="/#testimonials" className={`${manrope.className} text-zinc-500 text-sm hover:text-zinc-900 transition-colors duration-200`}>Testimonials</Link>
                                <Link href="/#faq" className={`${manrope.className} text-zinc-500 text-sm hover:text-zinc-900 transition-colors duration-200`}>FAQ</Link>
                            </div>
                        </div>

                        <div>
                            <h4 className={`${manrope.className} text-zinc-900 text-xs font-bold uppercase tracking-[0.15em] mb-5`}>Get in touch</h4>
                            <div className="flex flex-col gap-3">
                                <a href="mailto:hello@beaverlabs.com" className={`${manrope.className} text-zinc-500 text-sm hover:text-zinc-900 transition-colors duration-200`}>hello@beaverlabs.com</a>
                                <a href="tel:+09433443" className={`${manrope.className} text-zinc-500 text-sm hover:text-zinc-900 transition-colors duration-200`}>+0943 3443</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-zinc-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className={`${manrope.className} text-zinc-400 text-xs`}>© 2026 Beaver Labs. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className={`${manrope.className} text-zinc-400 text-xs hover:text-zinc-600 transition-colors`}>Privacy Policy</Link>
                        <Link href="#" className={`${manrope.className} text-zinc-400 text-xs hover:text-zinc-600 transition-colors`}>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
