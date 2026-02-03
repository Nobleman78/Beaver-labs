import React from 'react';
import { gerbilFont, satoshiFont } from '../utils/font';
import { FaPhone } from 'react-icons/fa6';

const Hero = () => {
    return (
        <div className='bg-[#1E1E1E] py-10'>
            <div className='text-center w-4xl mx-auto'>
                <h2 className={`${gerbilFont.className} text-[84px] mb-5 text-white`}>Turn your ideas into reality</h2>
                <p className={`${satoshiFont.className} text-[20px] mb-10 text-white`}>We are  a team of strategies, designers built with React, Typescript, Tailwind CSS and Node.js when you reuse to play things safe.</p>
                <div className='flex items-center text-white w-45 py-3 rounded-full mx-auto bg-[#7370FF] justify-center gap-5'>
                    <button className={`${satoshiFont.className}`}>Book your call </button>
                    <FaPhone className='text-white' />
                </div>
            </div>
        </div>
    );
};

export default Hero;