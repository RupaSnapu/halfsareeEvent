"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const photos = [
  { src: "/imag2.jpg", alt: "Traditional Half Saree Photography 1" },
  { src: "/out.jpg", alt: "Traditional Half Saree Photography 2" },
  { src: "/image1.jpg", alt: "Traditional Half Saree Photography 3" },
];

const textLines = [
  "Half saree, also known as 'Langa Voni' or 'Pavada Davani', is a beautiful South Indian traditional attire typically worn by teenage girls during special occasions. Our photography services specialize in capturing the elegance and cultural significance of this attire.",
  "Whether you're looking for an outdoor photoshoot in London's iconic locations or a studio session in West Midlands, we bring professional expertise to create stunning images that preserve your cultural heritage.",
  "We serve clients across UK including Scotland, Yorkshire, and Northern Ireland, offering both traditional and contemporary styles of half saree photography."
];

export default function HeroImageShow() {
  const [current, setCurrent] = useState(0);
  const controls = useAnimation();
  const [timerPercent, setTimerPercent] = useState(0);
  const intervalRef = useRef(null);

  // Auto slide every 4 seconds with progress bar animation
  useEffect(() => {
    setTimerPercent(0);
    controls.start("visible");

    if (intervalRef.current) clearInterval(intervalRef.current);
    const startTime = Date.now();
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setTimerPercent(Math.min(elapsed / 4000, 1));
      if (elapsed >= 4000) {
        setCurrent((prev) => (prev + 1) % photos.length);
      }
    }, 30);

    return () => clearInterval(intervalRef.current);
  }, [current, controls]);

  const nextPhoto = () => {
    setCurrent((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -8, filter: "brightness(0.8)" },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      filter: "brightness(1)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 1.1, rotate: 8, filter: "brightness(0.8)", transition: { duration: 0.6, ease: "easeIn" } },
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        yoyo: Infinity,
        duration: 6,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section id="about" className="py-16 bg-white select-none">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 relative w-full max-w-lg mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={photos[current].src}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="rounded-xl shadow-2xl overflow-hidden cursor-pointer"
                {...floatingAnimation.animate}
              >
                <Image
                  src={photos[current].src}
                  alt={photos[current].alt}
                  width={600}
                  height={400}
                  className="rounded-xl pointer-events-none select-none"
                  priority
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation with circular progress */}
            <div className="flex justify-between items-center mt-6 px-4">
              {["prev", "next"].map((dir) => {
                const isPrev = dir === "prev";
                const handler = isPrev ? prevPhoto : nextPhoto;
                return (
                  <button
                    key={dir}
                    onClick={handler}
                    aria-label={isPrev ? "Previous photo" : "Next photo"}
                    className="relative bg-gray-300 hover:bg-indigo-600 hover:text-white rounded-full p-4 shadow-lg transition-transform focus:outline-none"
                    type="button"
                  >
                    <span
                      className="text-2xl font-bold select-none"
                      style={{ lineHeight: 0 }}
                    >
                      {isPrev ? "‹" : "›"}
                    </span>
                    {/* Circular progress ring */}
                    <svg
                      className="absolute -inset-1 w-12 h-12"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <circle
                        cx="24"
                        cy="24"
                        r="22"
                        stroke="#4f46e5"
                        strokeOpacity="0.2"
                        strokeWidth="4"
                      />
                      <motion.circle
                        cx="24"
                        cy="24"
                        r="22"
                        stroke="#4f46e5"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray={138}
                        strokeDashoffset={138 * (1 - (isPrev ? 0 : timerPercent))}
                        animate={{ strokeDashoffset: 138 * (1 - (isPrev ? 0 : timerPercent)) }}
                        transition={{ ease: "linear" }}
                      />
                    </svg>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight select-text drop-shadow-sm">
              Traditional Half Saree Photoshoots in UK
            </h2>
            <div>
              {textLines.map((line, idx) => (
                <motion.p
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  className="text-gray-700 text-lg leading-relaxed mb-4"
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import Image from "next/image";
// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const photos = [
//   { src: "/imag2.jpg", alt: "Traditional Half Saree Photography 1" },
//   { src: "/out.jpg", alt: "Traditional Half Saree Photography 2" },
//   { src: "/image1.jpg", alt: "Traditional Half Saree Photography 3" },
// ];

// const textLines = [
//   "Half saree, also known as 'Langa Voni' or 'Pavada Davani', is a beautiful South Indian traditional attire typically worn by teenage girls during special occasions. Our photography services specialize in capturing the elegance and cultural significance of this attire.",
//   "Whether you're looking for an outdoor photoshoot in London's iconic locations or a studio session in West Midlands, we bring professional expertise to create stunning images that preserve your cultural heritage.",
//   "We serve clients across UK including Scotland, Yorkshire, and Northern Ireland, offering both traditional and contemporary styles of half saree photography."
// ];

// export default function HeroImageShow() {
//   const [current, setCurrent] = useState(0);
//   const containerRef = useRef(null);
//   const [offset, setOffset] = useState({ x: 0, y: 0 });

//   // Auto slide every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % photos.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   // Mouse move parallax effect
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (!containerRef.current) return;
//       const rect = containerRef.current.getBoundingClientRect();
//       const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
//       const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
//       setOffset({ x, y });
//     };
//     const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

//     const container = containerRef.current;
//     container?.addEventListener("mousemove", handleMouseMove);
//     container?.addEventListener("mouseleave", handleMouseLeave);
//     return () => {
//       container?.removeEventListener("mousemove", handleMouseMove);
//       container?.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);

//   const nextPhoto = () => setCurrent((prev) => (prev + 1) % photos.length);
//   const prevPhoto = () => setCurrent((prev) => (prev - 1 + photos.length) % photos.length);

//   const imageVariants = {
//     initial: { opacity: 0, scale: 0.9, rotate: -3 },
//     animate: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, ease: "easeOut" } },
//     exit: { opacity: 0, scale: 1.1, rotate: 3, transition: { duration: 0.6, ease: "easeIn" } },
//   };

//   const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
//     }),
//   };

//   return (
//     <section id="about" className="py-20 bg-white select-none">
//       <div
//         ref={containerRef}
//         className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12"
//       >
//         <div className="md:w-1/2 w-full max-w-xl mx-auto relative">
//           <AnimatePresence mode="wait" initial={false}>
//             <motion.div
//               key={photos[current].src}
//               variants={imageVariants}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//               style={{
//                 transformStyle: "preserve-3d",
//                 willChange: "transform",
//                 boxShadow: "0 20px 30px rgba(0,0,0,0.12)",
//                 borderRadius: "1rem",
//                 cursor: "grab",
//                 transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
//               }}
//               className="overflow-hidden rounded-xl"
//               whileTap={{ cursor: "grabbing" }}
//               transition={{ type: "spring", stiffness: 100, damping: 20 }}
//             >
//               <Image
//                 src={photos[current].src}
//                 alt={photos[current].alt}
//                 width={600}
//                 height={400}
//                 className="rounded-xl select-none pointer-events-none"
//                 priority
//                 draggable={false}
//               />
//             </motion.div>
//           </AnimatePresence>

//           <div className="flex justify-between mt-8 px-4">
//             <button
//               onClick={prevPhoto}
//               aria-label="Previous photo"
//               className="bg-gray-300 hover:bg-indigo-500 text-gray-800 hover:text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110 active:scale-95 focus:outline-none"
//             >
//               ‹
//             </button>

//             <button
//               onClick={nextPhoto}
//               aria-label="Next photo"
//               className="bg-gray-300 hover:bg-indigo-500 text-gray-800 hover:text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110 active:scale-95 focus:outline-none"
//             >
//               ›
//             </button>
//           </div>
//         </div>

//         <div className="md:w-1/2 max-w-xl">
//           <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
//             Traditional Half Saree Photoshoots in UK
//           </h2>
//           <div>
//             {textLines.map((line, i) => (
//               <motion.p
//                 key={i}
//                 custom={i}
//                 variants={textVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="text-gray-700 text-lg mb-5 leading-relaxed"
//               >
//                 {line}
//               </motion.p>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
