"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const photos = [
  { src: "/imag2.jpg", alt: "Traditional Half Saree Photography 1" },
  { src: "/out.jpg", alt: "Traditional Half Saree Photography 2" },
  { src: "/pic1.jpg", alt: "Traditional Half Saree Photography 3" },
  { src: "/pic2.jpg", alt: "Traditional Half Saree Photography 4" },
];

const textLines = [
  "Half saree, also known as 'Langa Voni' or 'Pavada Davani', is a beautiful South Indian traditional attire typically worn by teenage girls during special occasions. Our photography services specialize in capturing the elegance and cultural significance of this attire.",
  "Whether you're looking for an outdoor photoshoot in London's iconic locations or a studio session in West Midlands, we bring professional expertise to create stunning images that preserve your cultural heritage.",
  "We serve clients across UK including Scotland, Yorkshire, and Northern Ireland, offering both traditional and contemporary styles of half saree photography.",
];

// ✅ Multilingual Headings (shown one by one)
const languageHeadings = [
  "Traditional Half Saree Photoshoots in UK", // English
  "యూకేలో సంప్రదాయ హాఫ్ చీర ఫోటోషూట్స్",   // Telugu
  "யூகேயில் பாரம்பரிய ஹாஃப் சாரி புகைப்படக் காட்சிகள்", // Tamil
  "ಯುಕೆನಲ್ಲಿ ಪರಂಪರೆಯ ಹಾಫ್ ಸೀರೆ ಫೋಟೋಶೂಟ್ಸ್",   // Kannada
  "യുകെയിലുള്ള പരമ്പരാഗത ഹാഫ് സാരീസ് ഫോട്ടോഷൂട്ടുകൾ", // Malayalam
];

export default function HeroImageShow() {
  const [current, setCurrent] = useState(0);
  const [langIndex, setLangIndex] = useState(0);
  const controls = useAnimation();
  const [timerPercent, setTimerPercent] = useState(0);
  const intervalRef = useRef(null);

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
        setLangIndex((prev) => (prev + 1) % languageHeadings.length);
      }
    }, 30);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [current, controls]);

  const nextPhoto = () => {
    setCurrent((prev) => (prev + 1) % photos.length);
    setLangIndex((prev) => (prev + 1) % languageHeadings.length);
  };

  const prevPhoto = () => {
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length);
    setLangIndex((prev) => (prev - 1 + languageHeadings.length) % languageHeadings.length);
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
    exit: {
      opacity: 0,
      scale: 1.1,
      rotate: 8,
      filter: "brightness(0.8)",
      transition: { duration: 0.6, ease: "easeIn" },
    },
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
    <>
      <section id="about" className="py-16 bg-white select-none">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* IMAGE */}
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
                         <div className="flex justify-between items-center mt-6 px-4">
      {[
        { dir: "prev", Icon: ChevronLeftIcon, handler: prevPhoto },
        { dir: "next", Icon: ChevronRightIcon, handler: nextPhoto },
      ].map(({ dir, Icon, handler }) => {
        const isPrev = dir === "prev";
        return (
          <button
            key={dir}
            onClick={handler}
            aria-label={isPrev ? "Previous photo" : "Next photo"}
            type="button"
            className="
              relative 
              w-12 h-12                  /* 48×48px circle */
              bg-white                   /* white background */
              rounded-full               /* perfectly circular */
              flex items-center justify-center 
              shadow-md                  /* soft shadow */
              hover:shadow-lg            /* stronger shadow on hover */
              transition 
              focus:outline-none
            "
          >
            {/* 1) Light gradient ring behind the icon */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Slightly transparent track circle */}
              <circle
                cx="24"
                cy="24"
                r="22"
                stroke="url(#ringGradient)"
                strokeWidth="4"
                strokeOpacity="0.2"
              />
              {/* Animated progress ring */}
              <motion.circle
                cx="24"
                cy="24"
                r="22"
                stroke="url(#ringGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={138}
                strokeDashoffset={138 * (1 - (isPrev ? 0 : timerPercent))}
                animate={{ strokeDashoffset: 138 * (1 - (isPrev ? 0 : timerPercent)) }}
                transition={{ ease: "linear" }}
              />
              <defs>
                <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366F1" />    {/* indigo-500 */}
                  <stop offset="100%" stopColor="#A78BFA" />  {/* purple-300 */}
                </linearGradient>
              </defs>
            </svg>

            {/* 2) Chevron Icon (left or right) */}
            <Icon className="w-6 h-6 text-indigo-600 hover:text-indigo-700" />
          </button>
        );
      })}
    </div>


</div>

            {/* TEXT */}
            <div className="md:w-1/2 text-center md:text-left">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={languageHeadings[langIndex]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight select-text drop-shadow-sm leading-snug"
                >
                  {languageHeadings[langIndex]}
                </motion.h2>
              </AnimatePresence>

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
              </div><Link
            href="/#Contact"
            className="bg-red text-indigo-800 font-bold py-3 px-8 rounded-full hover:bg-indigo-100 transition duration-300"
          >
            Book Your Photoshoot
          </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-indigo-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Half Saree Photography UK</h1>
          <p className="text-xl md:text-2xl mb-8">
            Capturing the Elegance of Indian Tradition in the Heart of London & Across UK
          </p>
          
        </div>
      </section>
    </>
  );
}
