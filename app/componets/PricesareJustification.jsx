
'use client';
import React from 'react';
import {
  SparklesIcon,
  LightBulbIcon,
  GlobeAltIcon,
  UserGroupIcon,
  CameraIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline';

export default function WhyWeExcel() {
  const items = [
    {
      icon: <SparklesIcon className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 2xl:w-16 2xl:h-16 text-green-600" />,
      title: 'Heritage-Inspired Styling',
      desc: 'Blend South Indian tradition with modern editorial style.',
    },
    {
      icon: <LightBulbIcon className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 2xl:w-16 2xl:h-16 text-green-600" />,
      title: 'Customised Themes',
      desc: 'Creative setups tailored to your daughter’s story.',
    },
    {
      icon: <GlobeAltIcon className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 2xl:w-16 2xl:h-16 text-green-600" />,
      title: 'UK-Wide Service',
      desc: 'We travel across the UK to capture your moments.',
    },
    {
      icon: <UserGroupIcon className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 2xl:w-16 2xl:h-16 text-green-600" />,
      title: 'All-Female Crew',
      desc: 'Comfortable, culturally sensitive, women-led team.',
    },
    {
      icon: <CameraIcon className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 2xl:w-16 2xl:h-16 text-green-600" />,
      title: 'Luxury Cinematic Output',
      desc: 'Magazine-style edits delivered in high resolution.',
    },
    {
      icon: <BriefcaseIcon className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 2xl:w-16 2xl:h-16 text-green-600" />,
      title: 'Full-Service Experience',
      desc: 'We handle outfits, props,and more-start to finish.',
    },
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-8 md:px-12 lg:px-24 text-gray-800">
      <div className="max-w-7xl mx-auto 2xl:max-w-[1800px]">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold text-green-600 drop-shadow-md">
            Why My Prices Are Justified
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg 2xl:text-xl text-gray-700 max-w-2xl mx-auto">
            It’s more than just clicking a camera. It’s about making your moment last forever.
          </p>
        </div>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-6 sm:gap-8 place-items-center">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative group w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 2xl:w-72 2xl:h-72 flex items-center justify-center"
            >
              {/* Dashed Circle */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-green-500 opacity-0 group-hover:opacity-100 group-hover:animate-spin-on-hover transition-all duration-300 pointer-events-none"></div>

              {/* Inner Card */}
              <div className="relative z-10 w-[88%] h-[88%] rounded-full bg-gradient-to-br from-green-100 via-white to-green-50 shadow-lg flex flex-col items-center justify-center text-center px-2 py-2 group-hover:scale-105 transition-transform duration-300">
                <div className="mb-2">{item.icon}</div>
                <h3 className="text-sm sm:text-base lg:text-lg 2xl:text-xl font-semibold text-black mb-1">
                  {item.title}
                </h3>
                <p className="text-[10px] sm:text-sm lg:text-base 2xl:text-lg text-gray-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spin Animation */}
      <style jsx>{`
        @keyframes spin-on-hover {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .group-hover\\:animate-spin-on-hover:hover {
          animation: spin-on-hover 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
