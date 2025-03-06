import React from 'react';
import { assets } from '../assets/assets';

const Collections = () => {
  const items = [
    { id: 1, title: 'Colorful RGB Build', description: 'A vibrant and colorful RGB computer setup.', image: assets.pretty_rgb },
    { id: 2, title: 'Minimalist White PC', description: 'A clean and elegant white computer build.', image: assets.white_minimalist },
    { id: 3, title: 'Pastel Gaming Setup', description: 'A dreamy pastel-themed gaming rig.', image: assets.pastel_setup },
    { id: 4, title: 'Compact Mechanical Keyboard', description: 'A cute mechanical keyboard with pastel keycaps.', image: assets.cute_keyboard },
    { id: 5, title: 'Aesthetic GPU Design', description: 'A sleek GPU with LED details.', image: assets.bright_gpu },
  ];

  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-12 sm:py-0">
        <div className="text-[#414141] text-center sm:text-left px-6 sm:px-12">
          {/* Title */}
          <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mt-3">
            Our Collection
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-sm md:text-base leading-relaxed">
            Browse our curated collection of beautiful and functional computer builds and parts.
          </p>
        </div>
      </div>
      {/* Right Side */}
      <div className="w-full sm:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
        {items.map((item) => (
          <div key={item.id} className="border border-gray-300 p-4 rounded-md shadow-md">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections
