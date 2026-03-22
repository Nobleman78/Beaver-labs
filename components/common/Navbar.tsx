'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { IconHome, IconBriefcase, IconMail, IconBulb } from '@tabler/icons-react';
import { manrope } from '../utils/font';
import { FloatingDock } from '../ui/floating-dock';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isLightTheme, setIsLightTheme] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const pathname = usePathname();

    const navItems = [
        { title: 'Home', href: '/#hero', icon: <IconHome className="h-full w-full" />, isActive: activeSection === 'hero' },
        { title: 'Why Us', href: '/#why', icon: <IconBulb className="h-full w-full" />, isActive: activeSection === 'why' },
        { title: 'Services', href: '/#services', icon: <IconBriefcase className="h-full w-full" />, isActive: activeSection === 'services' },
        { title: 'Contact', href: '/#contact', icon: <IconMail className="h-full w-full" />, isActive: activeSection === 'contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            
            // Active section tracking
            const sections = ['hero', 'why', 'services', 'contact'];
            let current = 'hero';
            for (const id of sections) {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Offset checking when top reaches upper third of screen
                    if (rect.top <= window.innerHeight / 3) {
                        current = id;
                    }
                }
            }
            if (window.scrollY < 100) current = 'hero';
            setActiveSection(current);
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
            <header className={`fixed top-0 left-0 right-0 z-[100] px-4 pointer-events-none transition-all duration-1000 ${scrolled ? 'pt-4 md:pt-6' : 'pt-0'}`}>
                <div className="max-w-7xl mx-auto w-full flex justify-end">
                    <div 
                        className={`pointer-events-auto flex items-center justify-between w-full transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                            scrolled
                                ? `max-w-[320px] md:max-w-[460px] rounded-full py-2 px-5 shadow-[0_8px_30px_rgba(0,0,0,0.5)] border ${isLightTheme ? 'bg-white/90 backdrop-blur-lg border-zinc-200' : 'bg-[#0a0a0a]/80 backdrop-blur-xl border-white/10'}`
                                : 'max-w-7xl rounded-none py-3 md:py-4 px-6 md:px-10 xl:px-0 border-transparent bg-transparent'
                        }`}
                    >
                    {/* Logo on the left */}
                    <Link
                        href="/"
                        className={`${manrope.className} ${isLightTheme ? ' font-light text-zinc-900' : 'text-white'} text-2xl  tracking-tight transition-colors duration-500`}
                    >
                        <span className='text-[#7370FF] font-bold'>beaver</span>labs.
                    </Link>

                    {/* Right side: Floating Dock */}
                    <div className="flex items-center justify-end">
                        <FloatingDock 
                            items={navItems}
                            desktopClassName="bg-transparent px-0"
                            mobileClassName="z-50"
                        />
                    </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
