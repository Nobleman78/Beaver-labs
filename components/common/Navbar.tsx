'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaPhone, FaBars, FaXmark } from "react-icons/fa6";
import { gerbilFont, satoshiFont } from '../utils/font';

const navItems = [
    {
        label: "Home",
        path: "/"
    },
    {
        label: "About Us",
        path: "/about"
    },
    {
        label: "Services",
        path: "/services"
    },
    {
        label: "Contact",
        path: "/contact"
    }
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className='bg-[#1E1E1E]'>
            <div className='flex items-center justify-between py-6 md:py-10 px-5 md:px-8 xl:px-0 max-w-7xl mx-auto'>
                {/* Logo */}
                <Link href={'/'} className={`${gerbilFont.className} text-white text-xl z-[60]`}>Breaverlabs</Link>

                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center gap-10'>
                    {
                        navItems.map((item, index) => (
                            <div key={index}>
                                <Link className={`${gerbilFont.className} text-white hover:text-gray-300 transition-colors`} href={item.path}>{item.label}</Link>
                            </div>
                        ))
                    }
                </div>

                {/* Desktop Book Call Button */}
                <div className='hidden md:flex items-center gap-2 bg-[#7370FF] rounded-full px-5 py-3 hover:bg-[#625efc] transition-colors'>
                    <a href="tel:+09433443" className={`text-white ${satoshiFont.className}`}>Book your call</a>
                    <FaPhone className='text-white' />
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className='md:hidden text-white z-[60] focus:outline-none'
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-[#1E1E1E] z-50 flex flex-col items-center justify-center transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex flex-col items-center gap-8'>
                    {
                        navItems.map((item, index) => (
                            <div key={index}>
                                <Link
                                    className={`${gerbilFont.className} text-white text-2xl hover:text-gray-300 transition-colors`}
                                    href={item.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </div>
                        ))
                    }
                    <div className='flex items-center gap-2 bg-[#7370FF] rounded-full px-6 py-4 mt-6'>
                        <a href="tel:+09433443" className={`text-white font-medium ${satoshiFont.className}`}>Book your call</a>
                        <FaPhone className='text-white' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;