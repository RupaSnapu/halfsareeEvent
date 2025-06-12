// 'use client';
// import React, { useRef, useEffect } from 'react';
// import Link from 'next/link';

// export default function HalfSareeHighlightSection() {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;

//     if (video) {
//       video.play();
//     }
//   }, []);

//   return (
//     <div className="w-full">
//       {/* Half Saree message ABOVE video */}
//       <div className="w-full mt-[-35px] text-black bg-white text-center py-6 px-4">
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-black mb-2">
//           Capture Tradition with Half Saree Photography!
//         </h2>
//         <p className="text-sm sm:text-base text-gray-700 font-medium">
//           Celebrate Elegance, Culture, and Coming of Age Moments
//         </p>
//       </div>

//       <section className="relative w-full h-[90vh] overflow-hidden bg-black">
//         {/* Background video */}
//         <video
//           ref={videoRef}
//           className="absolute inset-0 w-full h-full object-cover opacity-80"
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           <source src="/videobar.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/10 z-0" />

//         {/* Foreground content */}
//         <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 sm:px-10 lg:px-20 text-white">
//           <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-green-300 mb-2 drop-shadow-md">
//             Step into Grace and Heritage
//           </h2>

//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
//             Half Saree Photography greenefined
//           </h1>

//           <p className="text-sm sm:text-base md:text-lg max-w-3xl mb-6 leading-relaxed drop-shadow-md">
//             Commemorate the milestone of womanhood with stunning half saree portraits. 
//             Blending tradition with modern elegance—capturing over 800+ ceremonies across the UK.
//           </p>

//           <Link
//             href="/#gallery"
//             className="bg-gradient-to-br from-red-400 to-rose-800  hover:bg-red-100 hover:text-black  text-white font-bold py-2 px-6 rounded-lg text-sm sm:text-base shadow-lg transition duration-300"
//           >
//             View Our Half Saree Gallery
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }


'use client';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';

export default function HalfSareeHighlightSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) video.play();
  }, []);

  return (
    <div className="w-full">
      {/* Message above video */}
      <div className="w-full mt-[-35px] text-black bg-rose-50 text-center py-6 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-black mb-2">
          Capture Tradition with Half Saree Photography!
        </h2>
        <p className="text-sm sm:text-base text-gray-700 font-medium">
          Celebrate Elegance, Culture, and Coming of Age Moments
        </p>
      </div>

      <section className="relative w-full h-[90vh] overflow-hidden bg-black">
        {/* Background video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videobar.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 z-0" />

        {/* Foreground content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 sm:px-10 lg:px-20 text-white">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-rose-300 mb-2 drop-shadow-md">
            Step into Grace and Heritage
          </h2>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            Half Saree Photography Redefined
          </h1>

          <p className="text-sm sm:text-base md:text-lg max-w-3xl mb-6 leading-relaxed drop-shadow-md">
            Commemorate the milestone of womanhood with stunning half saree portraits. 
            Blending tradition with modern elegance—capturing over 800+ ceremonies across the UK.
          </p>

          <Link
            href="/#gallery"
            className="bg-gradient-to-br from-rose-400 to-rose-800 hover:from-rose-200 hover:to-rose-500 hover:text-black text-white font-bold py-2 px-6 rounded-lg text-sm sm:text-base shadow-lg transition duration-300"
          >
            View Our Half Saree Gallery
          </Link>
        </div>
      </section>
    </div>
  );
}
