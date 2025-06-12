// "use client";
// import { useEffect, useState } from "react";
// import { FaCameraRetro, FaArrowUp } from "react-icons/fa";

// export default function ScrollToTop() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsVisible(window.scrollY > 300);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     setIsAnimating(true);
//     setTimeout(() => {
//       setIsAnimating(false);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }, 300);
//   };

//   return (
//     <>
//       {isVisible && (
//         <div className="fixed bottom-6 right-6 z-50">
//           <button
//             onClick={scrollToTop}
//             className={`flex flex-col items-center justify-center bg-white text-[rgb(136,0,0)] rounded-full p-4 shadow-xl border-4 border-[rgb(136,0,0)] transition-transform duration-300 ${
//               isAnimating ? "translate-y-[-10px]" : ""
//             }`}
//             aria-label="Scroll to top"
//           >
//             <FaArrowUp className="mb-1" />
//             <FaCameraRetro size={24} />
//           </button>
//         </div>
//       )}
//     </>
//   );
// }
'use client';
import { useEffect, useState } from "react";
import { FaChevronUp, FaHome } from "react-icons/fa";

export default function Button() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={scrollToTop}
            className={`flex flex-col items-center justify-center 
              bg-gradient-to-br from-red-800 to-rose-800 
              text-white rounded-full p-3 shadow-lg border border-white
              transition-all duration-300 hover:rotate-12 hover:scale-105 ${
                isAnimating ? "translate-y-[-6px]" : ""
              }`}
            aria-label="Scroll to top"
          >
            <FaChevronUp className="text-sm mb-0.5" />
            <FaHome className="text-lg" />
          </button>
        </div>
      )}
    </>
  );
}
