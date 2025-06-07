"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReviewSection from "./Reviews";
import HalfSareeHighlightSection from "./HalfSareeHighlightSection";

const photos = [
  { src: "/imag2.jpg", alt: "Traditional Half Saree Photography 1" },
  { src: "/out.jpg", alt: "Traditional Half Saree Photography 2" },
  { src: "/pic1.jpg", alt: "Traditional Half Saree Photography 3" },
  { src: "/pic2.jpg", alt: "Traditional Half Saree Photography 4" },
];

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      repeat: Infinity,
      duration: 6,
      ease: "easeInOut",
    },
  },
};

const textLines = [
  "Half saree, also known as 'Langa Voni' or 'Pavada Davani', is a beautiful South Indian traditional attire typically worn by teenage girls during special occasions. Our photography services specialize in capturing the elegance and cultural significance of this attire.",
  "Whether you're looking for an outdoor photoshoot in London's iconic locations or a studio session in West Midlands, we bring professional expertise to create stunning images that preserve your cultural heritage.",
  "We serve clients across UK including Scotland, Yorkshire, and Northern Ireland, offering both traditional and contemporary styles of half saree photography.",
];

const fixedFirstLine = "Drape yourself in style";

const languageHeadings = [
  "In Traditional Half Saree",
  "సంప్రదాయ హాఫ్ చీరలో",
  "சம்பிரதாய ஹால் சீரில்",
  "ಸಂಪ್ರದಾಯ ಹಾಫ್ ಸೀರೆಯಲ್ಲಿ",
  "പരമ്പരാഗത ഹാഫ് സാരിയിൽ",
];

export default function HeroImageShow() {
  const [current, setCurrent] = useState(0);
  const [langIndex, setLangIndex] = useState(0);
  const [timerPercent, setTimerPercent] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    setTimerPercent(0);
    const startTime = Date.now();
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setTimerPercent(Math.min(elapsed / 4000, 1));
      if (elapsed >= 4000) {
        setCurrent((prev) => (prev + 1) % photos.length);
        setLangIndex((prev) => (prev + 1) % languageHeadings.length);
      }
    }, 30);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [current]);

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      rotate: 5,
      transition: { duration: 0.5, ease: "easeIn" },
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
    <>
      <section id="about" className="py-10 pt-20  bg-white select-none">
          
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-4 md:px-10 lg:px-20 hero-section">
  {/* IMAGE BLOCK */}
  <AnimatePresence mode="wait" initial={false}>
    <motion.div
      key={photos[current].src}
      variants={imageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full max-w-md lg:max-w-xl rounded-xl shadow-2xl overflow-hidden cursor-pointer hero-image flex-shrink-0"
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
        sizes="(max-width: 768px) 90vw, (min-width: 1024px) 600px"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
        }}
      />
    </motion.div>
  </AnimatePresence>

  {/* TEXT BLOCK */}
  <div className="">
    <div className="mb-6 drop-shadow-sm hero-4k" style={{ lineHeight: "1.2" }}>
      <p className="font-extrabold text-gray-900 text-xl lg:text-3xl truncate">
        {fixedFirstLine}
      </p>

      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={`line2-${langIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="font-extrabold text-green-700 truncate text-lg lg:text-2xl"
          style={{ whiteSpace: "nowrap" }}
        >
          {languageHeadings[langIndex]}
        </motion.p>
      </AnimatePresence>
    </div>

    <div>
      {textLines.map((line, idx) => (
        <motion.p
          key={idx}
          custom={idx}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 min-h-[3.25rem]"
        >
          {line}
        </motion.p>
      ))}
    </div>

    <Link
      href="/#Contact"
      className="inline-block mt-6 bg-green-800 text-white font-bold py-3 px-8 rounded-full hover:bg-green-200 hover:text-green-800 transition duration-300"
    >
      Book Your Photoshoot
    </Link>
  </div>
</div>




                </section>

      {/* REVIEWS SECTION */}
      <ReviewSection />
    </>
  );
}




// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect, useRef } from "react";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
// import { motion, AnimatePresence, useAnimation } from "framer-motion";
// import ReviewSection from "./Reviews";
// import UKMapWithReviews from "./Reviews";

// const photos = [
//   { src: "/imag2.jpg", alt: "Traditional Half Saree Photography 1" },
//   { src: "/out.jpg", alt: "Traditional Half Saree Photography 2" },
//   { src: "/pic1.jpg", alt: "Traditional Half Saree Photography 3" },
//   { src: "/pic2.jpg", alt: "Traditional Half Saree Photography 4" },
// ];

// const textLines = [
//   "Half saree, also known as 'Langa Voni' or 'Pavada Davani', is a beautiful South Indian traditional attire typically worn by teenage girls during special occasions. Our photography services specialize in capturing the elegance and cultural significance of this attire.",
//   "Whether you're looking for an outdoor photoshoot in London's iconic locations or a studio session in West Midlands, we bring professional expertise to create stunning images that preserve your cultural heritage.",
//   "We serve clients across UK including Scotland, Yorkshire, and Northern Ireland, offering both traditional and contemporary styles of half saree photography.",
// ];

// const fixedFirstLine = "Drape yourself in style";

// const languageHeadings = [
//   "In Traditional Half Saree",         // English
//   "సంప్రదాయ హాఫ్ చీరలో",             // Telugu
//   "சம்பிரதாய ஹால் சீரில்",             // Tamil
//   "ಸಂಪ್ರದಾಯ ಹಾಫ್ ಸೀರೆಯಲ್ಲಿ",           // Kannada
//   "പരമ്പരാഗത ഹാഫ് സാരിയിൽ",            // Malayalam
// ];


// export default function HeroImageShow() {
//   const [current, setCurrent] = useState(0);
//   const [langIndex, setLangIndex] = useState(0);
//   const controls = useAnimation();
//   const [timerPercent, setTimerPercent] = useState(0);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     setTimerPercent(0);
//     controls.start("visible");

//     if (intervalRef.current) clearInterval(intervalRef.current);
//     const startTime = Date.now();
//     intervalRef.current = setInterval(() => {
//       const elapsed = Date.now() - startTime;
//       setTimerPercent(Math.min(elapsed / 4000, 1));
//       if (elapsed >= 4000) {
//         setCurrent((prev) => (prev + 1) % photos.length);
//         setLangIndex((prev) => (prev + 1) % languageHeadings.length);
//       }
//     }, 30);

//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     };
//   }, [current, controls]);

//   const nextPhoto = () => {
//     setCurrent((prev) => (prev + 1) % photos.length);
//     setLangIndex((prev) => (prev + 1) % languageHeadings.length);
//   };

//   const prevPhoto = () => {
//     setCurrent((prev) => (prev - 1 + photos.length) % photos.length);
//     setLangIndex((prev) => (prev - 1 + languageHeadings.length) % languageHeadings.length);
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.8, rotate: -8, filter: "brightness(0.8)" },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       rotate: 0,
//       filter: "brightness(1)",
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//     exit: {
//       opacity: 0,
//       scale: 1.1,
//       rotate: 8,
//       filter: "brightness(0.8)",
//       transition: { duration: 0.6, ease: "easeIn" },
//     },
//   };

//   const floatingAnimation = {
//     animate: {
//       y: [0, -10, 0],
//       transition: {
//         yoyo: Infinity,
//         duration: 6,
//         ease: "easeInOut",
//       },
//     },
//   };

//   const textVariants = {
//     hidden: { opacity: 0, y: 20, scale: 0.95 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   return (
//     <>
//       <section id="about" className="py-10 bg-white select-none">
//         <div className=" mx-1 my-[-25px] px-6">
//           <div className="flex flex-col md:flex-row items-center gap-10">
//             {/* IMAGE */}
//             <div className="md:w-1/2 relative w-full max-w-lg mx-auto ">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={photos[current].src}
//                   variants={imageVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   className="rounded-xl shadow-2xl overflow-hidden cursor-pointer"
//                   {...floatingAnimation.animate}
//                 >
//                   <Image
//                     src={photos[current].src}
//                     alt={photos[current].alt}
//                     width={600}
//                     height={400}
//                     className="rounded-xl pointer-events-none select-none"
//                     priority
//                     draggable={false}
//                   />
//                 </motion.div>
//               </AnimatePresence>
//                     {/* <div className="flex justify-between items-center mt-6 px-4">
//                       {[
//                         { dir: "prev", Icon: ChevronLeftIcon, handler: prevPhoto },
//                         { dir: "next", Icon: ChevronRightIcon, handler: nextPhoto },
//                       ].map(({ dir, Icon, handler }) => {
//                         const isPrev = dir === "prev";
//                         return (
//                           <button
//                             key={dir}
//                             onClick={handler}
//                             aria-label={isPrev ? "Previous photo" : "Next photo"}
//                             type="button"
//                             className="
//                               relative 
//                               w-12 h-12                  
//                               bg-white                   
//                               rounded-full              
//                               flex items-center justify-center 
//                               shadow-md                 
//                               hover:shadow-lg           
//                               transition 
//                               focus:outline-none
//                             "
//                           >
//                             <svg
//                               className="absolute inset-0 w-full h-full"
//                               viewBox="0 0 48 48"
//                               fill="none"
//                               xmlns="http://www.w3.org/2000/svg"
//                               aria-hidden="true"
//                             >
//                               <circle
//                                 cx="24"
//                                 cy="24"
//                                 r="22"
//                                 stroke="url(#ringGradient)"
//                                 strokeWidth="4"
//                                 strokeOpacity="0.2"
//                               />
//                               <motion.circle
//                                 cx="24"
//                                 cy="24"
//                                 r="22"
//                                 stroke="url(#ringGradient)"
//                                 strokeWidth="4"
//                                 strokeLinecap="round"
//                                 strokeDasharray={138}
//                                 strokeDashoffset={138 * (1 - (isPrev ? 0 : timerPercent))}
//                                 animate={{ strokeDashoffset: 138 * (1 - (isPrev ? 0 : timerPercent)) }}
//                                 transition={{ ease: "linear" }}
//                               />
//                               <defs>
//                                 <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                                   <stop offset="0%" stopColor="#6366F1" />
//                                   <stop offset="100%" stopColor="#A78BFA" />
//                                 </linearGradient>
//                               </defs>
//                             </svg>
//                             <Icon className="w-6 h-6 text-green-600 hover:text-green-700" />
//                           </button>
//                         );
//                       })}
//                     </div> */}
//               </div>

//             {/* TEXT */}
//             <div className="md:w-1/2 text-center md:text-left">
//               <AnimatePresence mode="wait">  
//             <div className="mx-auto mb-6 select-text drop-shadow-sm"
//                   style={{
//                     width: '100%',
//                     maxWidth: '480px',
//                     height: '4.5rem',   // fixed height to avoid shifting
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     overflow: 'hidden',
//                     textAlign: 'center',
//                   }}
//                 >
//                   {/* First line - static */}
//                   <p
//                     className="font-extrabold text-gray-900"
//                     style={{
//                       margin: 0,
//                       fontSize: '1.25rem',
//                       whiteSpace: 'nowrap',
//                       overflow: 'hidden',
//                       textOverflow: 'ellipsis',
//                     }}
//                   >
//                     {fixedFirstLine}
//                   </p>

//                   {/* Second line - animated language-dependent */}
//                   <AnimatePresence mode="wait">
//                     <motion.p
//                       key={`line2-${langIndex}`}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -20 }}
//                       transition={{ duration: 0.6 }}
//                       className="font-extrabold text-green-700"
//                       style={{
//                         margin: 0,
//                         fontSize: languageHeadings[langIndex].length > 30 ? '1rem' : '1.125rem',
//                         whiteSpace: 'nowrap',
//                         overflow: 'hidden',
//                         textOverflow: 'ellipsis',
//                       }}
//                     >
//                       {languageHeadings[langIndex]}
//                     </motion.p>
//                   </AnimatePresence>
//                 </div>
//               </AnimatePresence>

//               <div>
//                 {textLines.map((line, idx) => (
//                   <motion.p
//                     key={idx}
//                     custom={idx}
//                     initial="hidden"
//                     animate="visible"
//                     variants={textVariants}
//                     className="text-gray-700 text-lg leading-relaxed mb-4"
//                   >
//                     {line}
//                   </motion.p>
//                 ))}
//               </div>
// <Link
//   href="/#Contact"
//   className="bg-green-800 text-white font-bold py-3 px-8 rounded-full hover:bg-green-200 hover:text-green-800 transition duration-300"
// >
//   Book Your Photoshoot
// </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//      <ReviewSection/> 
//       {/* CTA */}
//       <section className="relative bg-green-900 text-white py-20">
//         <div className=" mx-auto px-6 text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">Half Saree Photography UK</h1>
//           <p className="text-xl md:text-2xl mb-8">
//             Capturing the Elegance of Indian Tradition in the Heart of London & Across UK
//           </p>
          
//         </div>
//       </section>
    
//     </>
//   );
// }
