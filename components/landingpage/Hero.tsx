import { IoCall } from "react-icons/io5";
import { satoshiFont } from "../utils/font";

const Hero = () => {
  return (
    <div>
      <div className="mt-20">
        <div className="flex justify-center">
          <div>
            <p className="text-white text-6xl text-center">
              Turn your ideas <br /> into reality
            </p>
            <p className={`text-white w-3xl font-normal text-center mt-10 ${satoshiFont.className}`}>
              We are a team of strategists, designers built
              with React, Typescript, Tailwind CSS, <br /> and Nodjs when you refuse to
              play things safe.
            </p>
            <div className={`flex items-center justify-center ${satoshiFont.className}`}>
              <button className="py-3 font-bold bg-linear-to-r from-[#9C99FF] to-[#7370FF] text-white px-5 gap-2 rounded-full mt-10 flex items-center">
                Book your call <IoCall color="white" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
