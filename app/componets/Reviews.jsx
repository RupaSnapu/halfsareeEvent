// // import { useEffect, useState } from "react";

// // // Dummy reviews
// // const reviews = [
// //   { name: "Anita R.", rating: 4.9, text: "Amazing photography! Captugreen every detail perfectly." },
// //   { name: "Rajesh K.", rating: 5, text: "Professional and friendly. Highly recommend!" },
// //   { name: "Priya S.", rating: 4.8, text: "Beautiful shots, great experience!" },
// // ];

// // // Dummy circle images
// // const circlePics = [
// //   { src: "https://randomuser.me/api/portraits/women/44.jpg", alt: "Client 1" },
// //   { src: "https://randomuser.me/api/portraits/men/46.jpg", alt: "Client 2" },
// //   { src: "https://randomuser.me/api/portraits/women/47.jpg", alt: "Client 3" },
// //   { src: "https://randomuser.me/api/portraits/men/48.jpg", alt: "Client 4" },
// // ];

// // export default function ClientCirclesWithReview() {
// //   const [index, setIndex] = useState(0);
// //   const [fade, setFade] = useState(true);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setFade(false);
// //       setTimeout(() => {
// //         setIndex((prev) => (prev + 1) % reviews.length);
// //         setFade(true);
// //       }, 300);
// //     }, 4000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   const review = reviews[index];

// //   return (
// //     <section className="bg-white py-16 px-4 sm:px-8">
// //       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
// //         {/* LEFT: Circles + Stats */}
// //         <div className="flex items-center justify-center max-w-lg mx-auto space-x-6">
// //           <div className="flex relative space-x-[-20px]">
// //             {circlePics.map((pic, i) => (
// //               <div
// //                 key={i}
// //                 className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform hover:scale-110 duration-300"
// //                 style={{ zIndex: circlePics.length - i }}
// //                 title={pic.alt}
// //               >
// //                 <img
// //                   src={pic.src}
// //                   alt={pic.alt}
// //                   className="w-full h-full object-cover"
// //                 />
// //               </div>
// //             ))}
// //           </div>

// //           <div className="ml-8">
// //             <h3 className="text-3xl font-extrabold text-green-700">
// //               1000+ Happy Clients
// //             </h3>
// //             <p className="mt-2 text-lg font-medium text-gray-700">
// //               Trusted across the UK
// //             </p>
// //           </div>
// //         </div>

// //         {/* RIGHT: Review Card */}
// //         <div className="bg-gray-50 p-8 rounded-xl shadow-xl text-center max-w-md mx-auto min-h-[220px]">
// //           <div className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
// //             <blockquote className="text-lg italic text-gray-800 mb-4 min-h-[88px]">
// //               “{review.text}”
// //             </blockquote>
// //             <div className="mt-2 font-semibold text-green-600">{review.name}</div>
// //             <p className="text-sm text-gray-500">{review.rating.toFixed(1)} / 5 Rating</p>
// //           </div>

// //           {/* Pagination dots */}
// //           <div className="flex justify-center mt-6 gap-2">
// //             {reviews.map((_, i) => (
// //               <button
// //                 key={i}
// //                 onClick={() => {
// //                   setFade(false);
// //                   setTimeout(() => {
// //                     setIndex(i);
// //                     setFade(true);
// //                   }, 300);
// //                 }}
// //                 className={`w-3 h-3 rounded-full transition-colors ${
// //                   index === i ? "bg-green-600" : "bg-gray-300"
// //                 }`}
// //               ></button>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// import { useEffect, useState } from "react";

// // Dummy reviews
// const reviews = [
//   { name: "Anita R.", rating: 4.9, text: "Amazing photography! Captugreen every detail perfectly." },
//   { name: "Rajesh K.", rating: 5, text: "Professional and friendly. Highly recommend!" },
//   { name: "Priya S.", rating: 4.8, text: "Beautiful shots, great experience!" },
// ];

// // Dummy images
// const circlePics = [
//   { src: "https://randomuser.me/api/portraits/women/44.jpg", alt: "Client 1" },
//   { src: "https://randomuser.me/api/portraits/men/46.jpg", alt: "Client 2" },
//   { src: "https://randomuser.me/api/portraits/women/47.jpg", alt: "Client 3" },
//   { src: "https://randomuser.me/api/portraits/men/48.jpg", alt: "Client 4" },
// ];

// export default function ClientCirclesWithReview() {
//   const [index, setIndex] = useState(0);
//   const [fade, setFade] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(false);
//       setTimeout(() => {
//         setIndex((prev) => (prev + 1) % reviews.length);
//         setFade(true);
//       }, 300);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const review = reviews[index];

//   return (
//     <section className="bg-white py-10 px-4 sm:px-6">
//       <div className="max-w-6xl mx-auto grid grid-cols-2 gap-4 items-center">

//         {/* LEFT: Circles + Stats */}
//         <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-4">
          
//           {/* Circle Images */}
//           <div className="flex justify-center sm:justify-start space-x-[-14px]">
//             {circlePics.map((pic, i) => (
//               <div
//                 key={i}
//                 className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white shadow-md transition-transform hover:scale-105 duration-300"
//                 style={{ zIndex: circlePics.length - i }}
//                 title={pic.alt}
//               >
//                 <img
//                   src={pic.src}
//                   alt={pic.alt}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Text Stats */}
//           <div>
//             <h3 className="text-lg sm:text-xl font-bold text-green-700">
//               1000+ Happy Clients
//             </h3>
//             <p className="mt-1 text-sm sm:text-base text-gray-700">
//               Trusted across the UK
//             </p>
//           </div>
//         </div>

//         {/* RIGHT: Review Card */}
//         <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center w-full min-h-[180px]">
//           <div className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
//             <blockquote className="text-sm sm:text-base italic text-gray-800 mb-3 min-h-[72px]">
//               “{review.text}”
//             </blockquote>
//             <div className="mt-1 font-semibold text-green-600 text-sm">{review.name}</div>
//             <p className="text-xs text-gray-500">{review.rating.toFixed(1)} / 5 Rating</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";

// Dummy reviews
const reviews = [
  { name: "Anita R.", rating: 4.9, text: "Amazing photography! Captugreen every detail perfectly." },
  { name: "Rajesh K.", rating: 5, text: "Professional and friendly. Highly recommend!" },
  { name: "Priya S.", rating: 4.8, text: "Beautiful shots, great experience!" },
];

// Dummy images
const circlePics = [
  { src: "https://randomuser.me/api/portraits/women/44.jpg", alt: "Client 1" },
  { src: "https://randomuser.me/api/portraits/men/46.jpg", alt: "Client 2" },
  { src: "https://randomuser.me/api/portraits/women/47.jpg", alt: "Client 3" },
  { src: "https://randomuser.me/api/portraits/men/48.jpg", alt: "Client 4" },
];

export default function ClientCirclesWithReview() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % reviews.length);
        setFade(true);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const review = reviews[index];

  return (
    <section className="bg-white py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-4 items-center">

        {/* LEFT: Circles + Stats */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-4">
          
          {/* Circle Images */}
          <div className="flex justify-center sm:justify-start space-x-[-14px]">
            {circlePics.map((pic, i) => (
              <div
                key={i}
                className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white shadow-md transition-transform hover:scale-105 duration-300"
                style={{ zIndex: circlePics.length - i }}
                title={pic.alt}
              >
                <img
                  src={pic.src}
                  alt={pic.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Text Stats */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-blue-700">
              1000+ Happy Clients
            </h3>
            <p className="mt-1 text-sm sm:text-base text-gray-700 flex items-center justify-center sm:justify-start">
              <span className="text-yellow-500 mr-1">★★★★★</span>
              4.8 out of 5 rating
            </p>
          </div>
        </div>

        {/* RIGHT: Review Card */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center w-full min-h-[180px]">
          <div className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
            <blockquote className="text-sm sm:text-base italic text-gray-800 mb-3 min-h-[72px]">
              “{review.text}”
            </blockquote>
            <div className="mt-1 font-semibold text-green-600 text-sm">{review.name}</div>
            <p className="text-xs text-gray-500">{review.rating.toFixed(1)} / 5 Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
  