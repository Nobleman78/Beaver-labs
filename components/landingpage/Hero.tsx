import { IoCall } from "react-icons/io5";
import { satoshiFont } from "../utils/font";

const Hero = () => {
  return (
    <div className="px-6 md:px-10 lg:px-0 max-w-7xl mx-auto">
      <div className="mt-12 md:mt-20">
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-medium leading-tight text-center">
              Turn your ideas <br className="hidden sm:block" /> into reality
            </h1>
            <p className={`text-white w-full max-w-3xl text-base sm:text-lg md:text-xl font-normal text-center mt-6 md:mt-10 px-4 md:px-0 ${satoshiFont.className}`}>
              We are a team of strategists, designers built
              with React, Typescript, Tailwind CSS, <br className="hidden md:block" /> and Node.js when you refuse to
              play things safe.
            </p>
            <div className={`flex items-center justify-center ${satoshiFont.className}`}>
              <button className="py-3 md:py-4 px-6 md:px-8 font-bold bg-linear-to-r from-[#9C99FF] to-[#7370FF] text-white gap-2 rounded-full mt-8 md:mt-10 flex items-center hover:opacity-90 transition-opacity">
                Book your call <IoCall className="text-white w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
