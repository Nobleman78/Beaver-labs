"use client";
import React from 'react';

import Link from 'next/link';
import { Youtube, Twitter, Linkedin } from 'lucide-react';
import { manrope } from '../utils/font';

const Footer = () => {
    return (
        <footer className={`${manrope.className} w-full pt-16 pb-8 px-6 md:px-12 lg:px-24`}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start pt-10 pb-16">
                    <div className="mb-10 md:mb-0">
                        <span className={`${manrope.className} text-zinc-900 text-2xl font-medium tracking-wide`}>Beaver Labs</span>
                    </div>

                    <div className="flex flex-wrap gap-16 md:gap-24">
                        <div className="flex flex-col gap-4">
                            <h4 className={`${manrope.className} text-black text-xs font-semibold uppercase tracking-wider mb-2`}>Quick Links</h4>
                            <Link href="/service" className={`${manrope.className} text-zinc-600 text-sm hover:text-zinc-900 transition-colors`}>Service</Link>
                            <Link href="/how-we-work" className={`${manrope.className} text-zinc-600 text-sm hover:text-zinc-900 transition-colors`}>How we work</Link>
                            <Link href="/about" className={`${manrope.className} text-zinc-600 text-sm hover:text-zinc-900 transition-colors`}>About us</Link>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className={`${manrope.className} text-black text-xs font-semibold uppercase tracking-wider mb-2`}>Explore</h4>
                            <Link href="/#testimonials" className={`${manrope.className} text-zinc-600 text-sm hover:text-zinc-900 transition-colors`}>Testimonial</Link>
                            <Link href="/#faq" className={`${manrope.className} text-zinc-600 text-sm hover:text-zinc-900 transition-colors`}>FAQ</Link>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className={`${manrope.className} text-black text-xs font-semibold uppercase tracking-wider mb-2`}>Company</h4>
                            <Link href="/about" className={`${manrope.className} text-zinc-600 text-sm hover:text-zinc-900 transition-colors`}>About us</Link>
                            <Link href="/contact" className={`${manrope.className} text-zinc-600 text-sm hover:text-zinc-900 transition-colors`}>Contact us</Link>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-xs text-black">
                        <p className={`${manrope.className}`}>© 2026 Beaver Labs. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link href="#" className={`${manrope.className} text-black `}>Privacy Policy</Link>
                            <Link href="#" className={`${manrope.className} text-black `}>Terms of Service</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-black">
                        <Link href="#" className="hover:text-zinc-900 transition-colors">
                            <Youtube size={16} />
                        </Link>
                        <Link href="#" className="hover:text-zinc-900 transition-colors">
                            <Twitter size={16} />
                        </Link>
                        <Link href="#" className="hover:text-zinc-900 transition-colors">
                            <Linkedin size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;