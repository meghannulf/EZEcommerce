import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* About Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-12 sm:py-0">
        <div className="text-[#414141] text-center sm:text-left px-6 sm:px-12">
          {/* Title */}
          <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mt-3">
            About Us
          </h1>

          {/* Description */}
          <p className="mt-4 text-sm md:text-base leading-relaxed">
              Welcome to our world of custom builds! We specialize in providing unique and stylish components that help you create the perfect setup. Whether you're designing a workstation, gaming rig, or creative space, our products are carefully crafted to add beauty and functionality to your environment. Let us help you build something amazing!
          </p>


          {/* Explore More Button */}
          <div className="flex items-center justify-center sm:justify-start gap-3 mt-5 group cursor-pointer">
            <Link to="/collection" className="flex items-center">
              <p className="font-semibold text-sm md:text-base transition-colors group-hover:text-black">
                EXPLORE MORE
              </p>
              <div className="w-10 md:w-12 h-[2px] bg-[#414141] transition-all group-hover:w-14"></div>
            </Link>
          </div>
        </div>
      </div>
      {/* About Right Side */}
      <img className="w-full sm:w-1/2" src={assets.sleek_setup_about} alt="About Us" />
    </div>
  );
};

export default About
