import React from 'react';
import Link from 'next/link';
import { Youtube, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full pt-16 pb-8 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start pt-10 pb-16">
                    <div className="mb-10 md:mb-0">
                        <span className="text-white text-2xl font-medium tracking-wide">Breaverlabs</span>
                    </div>

                    <div className="flex flex-wrap gap-16 md:gap-24">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Quick Links</h4>
                            <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Service</Link>
                            <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">How we work</Link>
                            <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">About us</Link>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Explore</h4>
                            <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Testimonial</Link>
                            <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">FAQ</Link>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Company</h4>
                            <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">About us</Link>
                            <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Contact us</Link>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800/60 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-xs text-gray-500">
                        <p>© 2022 Welcome. All right reserved.</p>
                        <div className="flex gap-6">
                            <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-gray-400">
                        <Link href="#" className="hover:text-white transition-colors">
                            <Youtube size={16} />
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            <Twitter size={16} />
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            <Linkedin size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;