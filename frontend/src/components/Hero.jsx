import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-12 sm:py-0">
        <div className="text-[#414141] text-center sm:text-left px-6 sm:px-12">
          {/* Bestseller Tag */}
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-10 h-[2px] bg-[#414141]">
            </div>
            <p className="font-medium text-sm md:text-base tracking-wide">OUR BESTSELLERS</p>
          </div>

          {/* Title */}
          <h1 className=" prata-regular text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mt-3">
            Latest Arrivals
          </h1>

          {/* Shop Now Button */}
          <div className="flex items-center justify-center sm:justify-start gap-3 mt-5 group cursor-pointer">
            <p className="font-semibold text-sm md:text-base transition-colors group-hover:text-black">SHOP NOW</p>
            <div className="w-10 md:w-12 h-[2px] bg-[#414141] transition-all group-hover:w-14"></div>
          </div>
        </div>
      </div>
      {/* Hero Right side */}
      <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
    </div>
  );
};

export default Hero;
