// import Link from "next/link";
// import Image from "next/image";
// export default function Gallery() {
//     return(<>
//      <section id="gallery" className="py-16 bg-gray-100">
//             <div className="container mx-auto px-6">
//               <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Half Saree Photography Gallery</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 <div className="overflow-hidden rounded-lg shadow-lg">
//                   <Image 
//                     src="/image1.jpg" 
//                     alt="Outdoor half saree photoshoot in London" 
//                     width={400} 
//                     height={800}
//                     className="w-full h-auto transition-transform duration-500 hover:scale-105"
//                   />
//                 </div>
//                 <div className="overflow-hidden rounded-lg shadow-lg">
//                   <Image 
//                     src="/img2.jpg" 
//                     alt="Studio half saree photography UK" 
//                     width={400} 
//                     height={600}
//                     className="w-full h-auto transition-transform duration-500 hover:scale-105"
//                   />
//                 </div>
//                 <div className="overflow-hidden rounded-lg shadow-lg">
//                   <Image 
//                     src="/family.jpg" 
//                     alt="Family photoshoot with half saree dress" 
//                     width={400} 
//                     height={600}
//                     className="w-full h-auto transition-transform duration-500 hover:scale-105"
//                   />
//                 </div>
//               </div>
//               <div className="text-center mt-8">
//                 <Link href="/gallery" className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition duration-300">
//                   View Full Gallery
//                 </Link>
//               </div>
//             </div>
//           </section>
//     </>)
// }
import { useState } from "react";
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

  // Show first 4 images by default, but hide the 4th image on desktop (lg and up)
  // Show all images if toggled

  const imagesToShow = showAll ? images : images.slice(0, 4);

  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Half Saree Photography Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imagesToShow.map((img, i) => (
            <div
              key={i}
              className={`relative w-full aspect-[2/3] overflow-hidden rounded-lg shadow-lg group
                ${
                  !showAll && i === 3
                    ? "block lg:hidden" // 4th image visible on mobile/tablet, hidden on desktop
                    : ""
                }
              `}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition duration-300"
          >
            {showAll ? "Show Less" : "View Full Gallery"}
          </button>
        </div>
      </div>
    </section>
  );
}
