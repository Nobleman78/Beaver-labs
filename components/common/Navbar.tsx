'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FaPhone } from "react-icons/fa6";
import { motion, AnimatePresence } from 'framer-motion';
import { manrope } from '../utils/font';

const navItems = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <>
            {/* Fixed Navbar */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-white/70 backdrop-blur-md backdrop-saturate-150 border-b border-white/20 shadow-sm'
                    : 'bg-transparent border-b border-transparent'
                    }`}
            >
                <div className='flex items-center justify-between py-5 px-6 md:px-10 xl:px-0 max-w-7xl mx-auto'>
                    {/* Logo */}
                    <Link href={'/'} className={`${manrope.className} text-black text-2xl font-bold tracking-tight`}>
                        Beaver Labs
                    </Link>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex items-center gap-10'>
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                className={`${manrope.className} text-black hover:text-[#7370FF] transition-colors text-xl`}
                                href={item.path}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className='hidden md:flex items-center gap-2 bg-[#7370FF] rounded-full px-4 py-3 hover:bg-[#625df5] transition-colors cursor-pointer'>
                        <a href="tel:+09433443" className={`text-white text-sm font-medium ${manrope.className}`}>Book your call</a>
                        <FaPhone className='text-white text-xs' />
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className='md:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-[5px] focus:outline-none'
                        aria-label="Toggle menu"
                        style={{ position: isOpen ? 'fixed' : undefined, right: isOpen ? '1.5rem' : undefined, top: isOpen ? '1.25rem' : undefined }}
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 7, backgroundColor: '#ffffff' } : { rotate: 0, y: 0, backgroundColor: '#18181b' }}
                            transition={{ duration: 0.3 }}
                            className="block w-6 h-[2px] rounded-full origin-center"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0, scaleX: 0, backgroundColor: '#ffffff' } : { opacity: 1, scaleX: 1, backgroundColor: '#18181b' }}
                            transition={{ duration: 0.2 }}
                            className="block w-6 h-[2px] rounded-full"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -7, backgroundColor: '#ffffff' } : { rotate: 0, y: 0, backgroundColor: '#18181b' }}
                            transition={{ duration: 0.3 }}
                            className="block w-6 h-[2px] rounded-full origin-center"
                        />
                    </button>
                </div>
            </header>

            {/* Mobile Full-Screen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="fullscreen-menu"
                        className={`${manrope.className} fixed inset-0 z-40 md:hidden bg-[#0a0a0a] flex flex-col overflow-hidden`}
                        initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
                        animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 2.5rem) 2.5rem)' }}
                        exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                    >
                        {/* Subtle glow */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] bg-[#7370FF]/10 blur-[120px] rounded-full pointer-events-none" />

                        {/* Nav Items — vertically & horizontally centered */}
                        <nav className="flex flex-col items-center justify-center flex-1 gap-2">
                            {navItems.map((item, index) => {
                                const isActive = pathname === item.path;
                                return (
                                    <motion.div
                                        key={item.path}
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.15 + index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <Link
                                            href={item.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`block text-[13vw] font-bold tracking-tight leading-none transition-colors duration-200 ${
                                                isActive ? 'text-white' : 'text-zinc-600 hover:text-white'
                                            }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </nav>

                        {/* Bottom CTA */}
                        <motion.div
                            className="flex flex-col items-center pb-12 pt-4 gap-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                        >
                            <a
                                href="tel:+09433443"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2 bg-[#7370FF] hover:bg-[#625df5] active:scale-[0.98] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 text-sm"
                            >
                                <FaPhone className="text-xs" />
                                Book your call
                            </a>
                            <p className="text-zinc-600 text-xs">hello@beaverlabs.com</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
