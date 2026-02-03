import Link from 'next/link';
import { FaPhone } from "react-icons/fa6";
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
]

const Navbar = () => {
    return (
        <div className=' bg-[#1E1E1E] '>
            <div className='flex items-center justify-between py-10 max-w-7xl mx-auto'>
                {/* Logo */}
                <Link href={'/'} className={`${gerbilFont.className} text-white`}>Breaverlabs</Link>
                <div className='flex items-center gap-10'>
                    {
                        navItems.map((item, index) => (
                            <div key={index} className=''>
                                <Link className={`${gerbilFont.className} text-white`} href={item.path}>{item.label}</Link>
                            </div>
                        ))
                    }
                </div>
                <div className='flex items-center gap-2 bg-[#7370FF] rounded-full px-5 py-3'>
                    <a href="tel:+09433443" className={`text-white ${satoshiFont.className}`}>Book your call</a>
                    <FaPhone className='text-white' />
                </div>
            </div>
        </div>
    );
};

export default Navbar;