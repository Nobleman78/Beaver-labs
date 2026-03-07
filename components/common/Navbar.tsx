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
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='relative bg-[#1E1E1E]'>
            <div className='flex items-center justify-between py-6 md:py-10 px-6 md:px-10 lg:px-0 max-w-7xl mx-auto'>
                {/* Logo */}
                <Link href={'/'} className={`${gerbilFont.className} text-white text-xl z-50`}>Breaverlabs</Link>

                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center gap-10'>
                    {
                        navItems.map((item, index) => (
                            <div key={index} className=''>
                                <Link className={`${gerbilFont.className} text-white hover:text-[#7370FF] transition-colors`} href={item.path}>{item.label}</Link>
                            </div>
                        ))
                    }
                </div>

                {/* Desktop Book Call Button */}
                <div className='hidden md:flex items-center gap-2 bg-[#7370FF] rounded-full px-5 py-3 hover:bg-[#625df5] transition-colors cursor-pointer'>
                    <a href="tel:+09433443" className={`text-white ${satoshiFont.className}`}>Book your call</a>
                    <FaPhone className='text-white' />
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='md:hidden text-white z-50 focus:outline-none'
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaXmark size={28} /> : <FaBars size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-[#1E1E1E] z-40 flex flex-col items-center justify-center transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex flex-col items-center gap-8'>
                    {
                        navItems.map((item, index) => (
                            <div key={index}>
                                <Link
                                    className={`${gerbilFont.className} text-white text-3xl hover:text-[#7370FF] transition-colors`}
                                    href={item.path}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </div>
                        ))
                    }
                    <div className='flex items-center gap-2 bg-[#7370FF] rounded-full px-8 py-4 mt-6'>
                        <a href="tel:+09433443" className={`text-white text-lg font-medium ${satoshiFont.className}`}>Book your call</a>
                        <FaPhone className='text-white' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;