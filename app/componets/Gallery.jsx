// import { useState } from "react";
// import Image from "next/image";

// export default function Gallery() {
//   const images = [
//     { src: "/pic4 (5).jpg", alt: "Outdoor half saree photoshoot in London" },
//     { src: "/pic4 (6).jpg", alt: "Studio half saree photography UK" },
//     { src: "/pic3.jpg", alt: "Family photoshoot with half saree dress" },
//     { src: "/pic4 (1).jpg", alt: "Family photoshoot with half saree dress" },
//     { src: "/pic4 (2).jpg", alt: "Family photoshoot with half saree dress" },
//     { src: "/pic4 (3).jpg", alt: "Family photoshoot with half saree dress" },
//     { src: "/pic4 (4).jpg", alt: "Family photoshoot with half saree dress" },
//   ];

//   const [showAll, setShowAll] = useState(false);

//   // Show first 4 images by default, but hide the 4th image on desktop (lg and up)
//   // Show all images if toggled

//   const imagesToShow = showAll ? images : images.slice(0, 4);

//   return (
//     <section id="gallery" className="py-16 bg-gray-100">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
//           Half Saree Photography Gallery
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {imagesToShow.map((img, i) => (
//             <div
//               key={i}
//               className={`relative w-full aspect-[2/3] overflow-hidden rounded-lg shadow-lg group
//                 ${
//                   !showAll && i === 3
//                     ? "block lg:hidden" // 4th image visible on mobile/tablet, hidden on desktop
//                     : ""
//                 }
//               `}
//             >
//               <Image
//                 src={img.src}
//                 alt={img.alt}
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-8">
//           <button
//             onClick={() => setShowAll(!showAll)}
//             className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition duration-300"
//           >
//             {showAll ? "Show Less" : "View Full Gallery"}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


// import { useState, useRef } from "react";
// import Image from "next/image";

// export default function Gallery() {
//   const images = [
//     { src: "/pic4 (5).jpg", alt: "Outdoor half saree photoshoot in London" },
//     { src: "/pic4 (6).jpg", alt: "Studio half saree photography UK" },
//     { src: "/pic3.jpg", alt: "Family photoshoot with half saree dress" },
//     { src: "/pic4 (1).jpg", alt: "Family photoshoot with half saree dress" },
//     { src: "/pic4 (2).jpg", alt: "Family photoshoot with half saree dress" },
//     { src: "/pic4 (3).jpg", alt: "Family photoshoot with half saree dress" },
//     { src: "/pic4 (4).jpg", alt: "Family photoshoot with half saree dress" },
//   ];

//   const [showAll, setShowAll] = useState(false);
//   const galleryRef = useRef(null); // Step 1: Create a ref

//   const handleToggle = () => {
//     if (showAll && galleryRef.current) {
//       // Step 2: Scroll back to gallery top if "Show Less" clicked
//       galleryRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//     setShowAll(!showAll);
//   };

//   const imagesToShow = showAll ? images : images.slice(0, 4);

//   return (
//     <section id="gallery" ref={galleryRef} className="py-16 bg-gray-100">
//       <div className="mx-auto px-6">
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-black text-center mb-12">
//           Half Saree Photography Gallery
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-8">
//           {imagesToShow.map((img, i) => {
//             const hideOnDesktop = !showAll && i === 3;
//             return (
//               <div
//                 key={i}
//                 className={`relative w-full aspect-[2/3] overflow-hidden rounded-lg shadow-lg group ${
//                   hideOnDesktop ? "block lg:hidden" : ""
//                 }`}
//               >
//                 <Image
//                   src={img.src}
//                   alt={img.alt}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>
//             );
//           })}
//         </div>

//         <div className="text-center mt-8">
//           <button
//             onClick={handleToggle}
//             className="inline-block bg-red-800 text-white hover:text-red-800 font-bold py-3 px-8 rounded-full hover:bg-rose-200 transition duration-300"
//           >
//             {showAll ? "Show Less" : "View Full Gallery"}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState, useRef } from "react";
import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/pic4 (5).jpg", alt: "Outdoor half saree photoshoot in London" },
    { src: "/pic4 (6).jpg", alt: "Studio half saree photography UK" },
    { src: "/pic3.jpg", alt: "Family photoshoot with half saree dress" },
    { src: "/pic4 (1).jpg", alt: "Family photoshoot with half saree dress" },
    { src: "/pic4 (2).jpg", alt: "Family photoshoot with half saree dress" },
    { src: "/pic4 (3).jpg", alt: "Family photoshoot with half saree dress" },
    { src: "/pic4 (4).jpg", alt: "Family photoshoot with half saree dress" },
  ];

  const [showAll, setShowAll] = useState(false);
  const galleryRef = useRef(null);

  const handleToggle = () => {
    if (showAll && galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setShowAll(!showAll);
  };

  const imagesToShow = showAll ? images : images.slice(0, 4);

  return (
    <section id="gallery" ref={galleryRef} className="py-16 bg-[#FFF5F5]">
      <div className="mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-[#4B0082] text-center mb-12 font-serif">
          Half Saree Photography Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-8">
          {imagesToShow.map((img, i) => {
            const hideOnDesktop = !showAll && i === 3;
            return (
              <div
                key={i}
                className={`relative w-full aspect-[2/3] overflow-hidden rounded-lg shadow-lg group ${
                  hideOnDesktop ? "block lg:hidden" : ""
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={handleToggle}
            className="inline-block bg-[#8B0000] text-white hover:text-[#8B0000] font-bold py-3 px-8 rounded-full hover:bg-[#FFD1DC] transition duration-300"
          >
            {showAll ? "Show Less" : "View Full Gallery"}
          </button>
        </div>
      </div>
    </section>
  );
}
