'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FaPhone } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import { manrope } from '../utils/font';

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/#services' },
    { label: 'Contact', path: '/#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isLightTheme, setIsLightTheme] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            
            const lightSections: string[] = [];
            let isLight = false;
            
            for (const id of lightSections) {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Check if navbar (approx 80px) overlaps with the light section
                    if (rect.top <= 80 && rect.bottom >= 80) {
                        isLight = true;
                        break;
                    }
                }
            }
            setIsLightTheme(isLight);
        };
        
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <>
            {/* Fixed Navbar */}
            <header
                className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500 ${
                    scrolled
                        ? isLightTheme 
                            ? 'bg-white/90 backdrop-blur-lg border-b border-zinc-200 shadow-sm'
                            : 'bg-black/60 backdrop-blur-lg border-b border-white/8 shadow-sm'
                        : 'bg-transparent border-b border-transparent'
                }`}
            >
                <div className="flex items-center justify-between py-5 px-6 md:px-10 xl:px-0 max-w-7xl mx-auto">
                    {/* Logo */}
                    <Link
                        href="/"
                        className={`${manrope.className} ${isLightTheme ? ' font-light text-zinc-900' : 'text-white'} text-2xl  tracking-tight transition-colors duration-500`}
                    >
                        <span className='text-[#7370FF] font-bold'>beaver</span>labs.
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                className={`${manrope.className} ${isLightTheme ? 'text-zinc-500 hover:text-zinc-900' : 'text-zinc-400 hover:text-white'} transition-colors duration-500 text-[15px] font-medium`}
                                href={item.path}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop right: CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-[#7370FF] rounded-full px-4 py-3 hover:bg-[#625df5] transition-colors cursor-pointer">
                            <a
                                href="mailto:hello@beaverlabs.com"
                                className={`text-white text-sm font-medium ${manrope.className}`}
                            >
                                Book your call
                            </a>
                            <FaPhone className="text-white text-xs" />
                        </div>
                    </div>

                    {/* Mobile: Hamburger only */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative z-60 w-10 h-10 flex flex-col items-center justify-center gap-[5px] focus:outline-none"
                            aria-label="Toggle menu"
                            style={{
                                position: isOpen ? 'fixed' : undefined,
                                right: isOpen ? '1.5rem' : undefined,
                                top: isOpen ? '1.25rem' : undefined,
                            }}
                        >
                            <motion.span
                                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className={`block w-6 h-[2px] rounded-full origin-center transition-colors duration-500 ${isOpen || !isLightTheme ? 'bg-white' : 'bg-zinc-900'}`}
                            />
                            <motion.span
                                animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                                transition={{ duration: 0.2 }}
                                className={`block w-6 h-[2px] rounded-full transition-colors duration-500 ${isOpen || !isLightTheme ? 'bg-white' : 'bg-zinc-900'}`}
                            />
                            <motion.span
                                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className={`block w-6 h-[2px] rounded-full origin-center transition-colors duration-500 ${isOpen || !isLightTheme ? 'bg-white' : 'bg-zinc-900'}`}
                            />
                        </button>
                    </div>
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
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] bg-[#7370FF]/10 blur-[120px] rounded-full pointer-events-none" />

                        <nav className="flex flex-col items-center justify-center flex-1 gap-2">
                            {navItems.map((item, index) => {
                                const isActive = pathname === '/' && item.path === '/';
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

                        <motion.div
                            className="flex flex-col items-center pb-12 pt-4 gap-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                        >
                            <a
                                href="mailto:hello@beaverlabs.com"
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
