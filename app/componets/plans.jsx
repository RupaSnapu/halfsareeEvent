// import Link from "next/link";

// export default function Plans() {
//   return (
//     <>
//       <section id="packages" className="py-12 mt-[-40px] md:py-16 bg-gray-100">
//         <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1600px]">
//           {/* Heading */}
//           <h2 className="text-xl md:text-3xl 2xl:text-5xl font-bold text-center text-gray-800 mb-8 md:mb-12">
//             Half Saree Photography Packages
//           </h2>

//           {/* Subtext */}
//           <p className="text-center text-gray-600 text-xs md:text-base 2xl:text-xl max-w-3xl mx-auto mb-8 md:mb-12">
//             Affordable pricing options for every need. All packages include high-resolution edited images with print release.
//           </p>

//           {/* Grid: 2 on mobile, 3 on md, 4 on 2xl (4K) */}
//           <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-8 items-stretch">
//             {/* Basic, Premium, Deluxe Packages */}
//             {[
//               {
//                 name: "Basic",
//                 price: "£199",
//                 popular: false,
//                 color: "bg-green-100",
//                 features: [
//                   "1 hour photoshoot",
//                   "15 high-resolution edited images",
//                   "1 outfit change",
//                   "Studio or outdoor location",
//                   "No makeup artist",
//                   "No printed photos",
//                 ],
//               },
//               {
//                 name: "Premium",
//                 price: "£349",
//                 popular: true,
//                 color: "bg-green-600",
//                 textColor: "text-white",
//                 features: [
//                   "2 hour photoshoot",
//                   "30 high-resolution edited images",
//                   "2 outfit changes",
//                   "Studio + outdoor locations",
//                   "Professional makeup artist",
//                   "5 printed 6x4 photos",
//                 ],
//               },
//               {
//                 name: "Deluxe",
//                 price: "£499",
//                 popular: false,
//                 color: "bg-green-100",
//                 features: [
//                   "3 hour photoshoot",
//                   "50 high-resolution edited images",
//                   "3 outfit changes",
//                   "Multiple locations",
//                   "Professional makeup & hair styling",
//                   "10 printed photos + 1 framed 8x10",
//                   "Online gallery with shareable link",
//                 ],
//               },
//             ].map((plan, idx) => (
//               <div
//                 key={idx}
//                 className={`flex flex-col rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-1 ${
//                   plan.popular ? "border-2 border-green-500 relative" : ""
//                 } bg-white`}
//               >
//                 {plan.popular && (
//                   <div className="absolute top-2 right-2 md:top-4 md:right-4 flex items-center justify-center z-20 w-5 h-5 md:w-16 md:h-16 2xl:w-20 2xl:h-20">
//                     <div className="absolute inset-0 rounded-full border-2 border-dashed border-green-500 animate-spin-slow-reverse shadow-md shadow-green-400/50"></div>
//                     <div className="absolute inset-0 rounded-full border-2 border-green-300 animate-spin-slow shadow-green-300/50"></div>
//                     <div className="absolute z-10 bg-green-600 text-white font-bold text-[3px] md:text-[6px] 2xl:text-xs px-2 md:px-3 py-1 rounded-full text-center animate-pulse leading-tight whitespace-nowrap">
//                       Most Popular
//                     </div>
//                   </div>
//                 )}

//                 <div className={`${plan.color} py-4 px-5 md:py-6 md:px-8`}>
//                   <h3
//                     className={`text-lg md:text-xl 2xl:text-2xl font-bold text-center ${
//                       plan.textColor || "text-green-800"
//                     }`}
//                   >
//                     {plan.name}
//                   </h3>
//                   <div className="text-center mt-2 md:mt-4">
//                     <span className={`text-2xl md:text-4xl 2xl:text-5xl font-bold ${plan.textColor || "text-black"}`}>
//                       {plan.price}
//                     </span>
//                     <span className={`text-xs md:text-base 2xl:text-lg ${plan.textColor ? "text-green-200" : "text-gray-600"}`}>
//                       /session
//                     </span>
//                   </div>
//                 </div>

//                 <div className="p-4 md:p-8 2xl:p-10 flex flex-col flex-grow">
//                   <ul className="space-y-2 md:space-y-4 2xl:space-y-5 flex-grow">
//                     {plan.features.map((feature, i) => (
//                       <li
//                         key={i}
//                         className={`flex items-start ${
//                           !plan.popular && i >= 4 ? "text-gray-400" : ""
//                         }`}
//                       >
//                         <svg
//                           className={`w-4 h-4 md:w-5 md:h-5 2xl:w-6 2xl:h-6 ${
//                             !plan.popular && i >= 4 ? "text-gray-400" : "text-green-500"
//                           } mr-2 mt-0.5 flex-shrink-0`}
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                         </svg>
//                         <span className="text-xs md:text-sm 2xl:text-base">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <div className="mt-4 md:mt-8 text-center">
//                     <Link
//                       href="/contact"
//                       className="inline-block bg-green-600 text-white font-bold py-2 px-3 md:py-3 md:px-6 2xl:py-4 2xl:px-8 rounded-lg hover:bg-green-700 transition duration-300 w-full text-xs md:text-base 2xl:text-lg"
//                     >
//                       Book Now
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Custom Package CTA */}
//           <div className="mt-8 md:mt-12 2xl:mt-16 bg-white rounded-lg shadow-md p-4 md:p-8 2xl:p-12">
//             <h3 className="text-lg md:text-2xl 2xl:text-3xl font-bold text-center text-gray-800 mb-4 md:mb-6">
//               Custom Packages Available
//             </h3>
//             <p className="text-gray-600 text-center text-xs md:text-base 2xl:text-lg mb-4 md:mb-6">
//               Have special requirements? We offer custom packages for large families, events, and commercial needs.
//             </p>
//             <div className="text-center">
//               <Link
//                 href="/contact"
//                 className="inline-block bg-green-600 text-white font-bold py-2 px-3 md:py-3 md:px-6 2xl:py-4 2xl:px-8 rounded-lg hover:bg-green-700 transition duration-300 text-xs md:text-base 2xl:text-lg"
//               >
//                 Request Custom Package
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Animations */}
//       <style jsx>{`
//         @keyframes spin {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(360deg);
//           }
//         }
//         @keyframes spin-reverse {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(-360deg);
//           }
//         }
//         .animate-spin-slow {
//           animation: spin 6s linear infinite;
//         }
//         .animate-spin-slow-reverse {
//           animation: spin-reverse 10s linear infinite;
//         }
//       `}</style>
//     </>
//   );
// }





// import Link from "next/link";

// export default function Plans() {
//   const plans = [
//     {
//       name: "Basic",
//       price: "£199",
//       popular: false,
//       color: "bg-green-100",
//       textColor: "text-green-800",
//       features: [
//         "1 hour photoshoot",
//         "15 high-resolution edited images",
//         "1 outfit change",
//         "Studio or outdoor location",
//         "No makeup artist",
//         "No printed photos",
//       ],
//     },
//     {
//       name: "Premium",
//       price: "£349",
//       popular: true,
//       color: "bg-green-600",
//       textColor: "text-white",
//       features: [
//         "2 hour photoshoot",
//         "30 high-resolution edited images",
//         "2 outfit changes",
//         "Studio + outdoor locations",
//         "Professional makeup artist",
//         "5 printed 6x4 photos",
//       ],
//     },
//     {
//       name: "Deluxe",
//       price: "£499",
//       popular: false,
//       color: "bg-green-100",
//       textColor: "text-green-800",
//       features: [
//         "3 hour photoshoot",
//         "50 high-resolution edited images",
//         "3 outfit changes",
//         "Multiple locations",
//         "Professional makeup & hair styling",
//         "10 printed photos + 1 framed 8x10",
//         "Online gallery with shareable link",
//       ],
//     },
//   ];

//   return (
//     <section
//       id="packages"
//       className="py-12 md:py-16 bg-gray-50"
//       aria-label="Photography Packages"
//     >
//       <div className="container mx-auto px-4 md:px-6 2xl:px-20 max-w-7xl 2xl:max-w-[1600px]">
//         {/* Section header */}
//         <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
//           <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-gray-900 mb-3">
//             Half Saree Photography Packages
//           </h2>
//           <p className="text-gray-600 text-sm md:text-base 2xl:text-lg">
//             Affordable pricing options for every need. All packages include
//             high-resolution edited images with print release.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
//           {plans.map((plan, idx) => (
//             <div
//               key={idx}
//               className={`flex flex-col rounded-xl shadow-md bg-white transform transition-transform duration-300 hover:scale-[1.03] 2xl:scale-[1.05] ${
//                 plan.popular
//                   ? "border-4 border-green-500 relative"
//                   : "border border-gray-200"
//               }`}
//             >
//               {/* Popular badge */}
//               {plan.popular && (
//                 <div className="absolute top-3 right-3 z-10 flex items-center justify-center w-16 h-16">
//                   <div className="absolute inset-0 rounded-full border-2 border-dashed border-green-500 animate-spin-slow-reverse opacity-70"></div>
//                   <div className="absolute inset-0 rounded-full border-2 border-green-300 animate-spin-slow opacity-70"></div>
//                   <span className="relative z-20 text-white text-xs md:text-sm 2xl:text-base font-semibold px-52 py-1 rounded-full whitespace-nowrap animate-pulse">
//                     Most Popular
//                   </span>
//                 </div>
//               )}

//               {/* Header */}
//               <div
//                 className={`${plan.color} ${plan.textColor} py-6 px-5 text-center rounded-t-xl`}
//               >
//                 <h3 className="text-xl 2xl:text-2xl font-bold">{plan.name}</h3>
//                 <div className="mt-2 flex items-baseline justify-center gap-1">
//                   <span className="text-3xl 2xl:text-4xl font-extrabold">{plan.price}</span>
//                   <span className="text-base 2xl:text-lg opacity-80">/session</span>
//                 </div>
//               </div>

//               {/* Features */}
//               <div className="p-5 flex flex-col flex-grow">
//                 <ul className="space-y-2 flex-grow">
//                   {plan.features.map((feature, i) => (
//                     <li key={i} className="flex items-start">
//                       <svg
//                         className={`w-5 h-5 flex-shrink-0 mr-3 mt-0.5 ${
//                           !plan.popular && i >= 4
//                             ? "text-gray-300"
//                             : "text-green-500"
//                         }`}
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         aria-hidden="true"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                       <span
//                         className={`${
//                           !plan.popular && i >= 4
//                             ? "text-gray-400"
//                             : "text-gray-700"
//                         } text-sm 2xl:text-base`}
//                       >
//                         {feature}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Button */}
//                 <div className="mt-6 text-center">
//                   <Link
//                     href="#Contact"
//                     className={`inline-block w-full py-3 rounded-lg font-semibold text-white transition-colors duration-300 2xl:text-lg ${
//                       plan.popular
//                         ? "bg-green-700 hover:bg-green-800"
//                         : "bg-green-600 hover:bg-green-700"
//                     }`}
//                     aria-label={`Book ${plan.name} package`}
//                   >
//                     Book Now
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Custom package CTA */}
//         <div className="mt-12 bg-white rounded-xl shadow-md max-w-3xl mx-auto p-8 text-center">
//           <h3 className="text-2xl 2xl:text-3xl font-bold mb-4 text-gray-900">
//             Custom Packages Available
//           </h3>
//           <p className="text-gray-600 mb-6 2xl:text-lg">
//             Have special requirements? We offer custom packages for large
//             families, events, and commercial needs.
//           </p>
//           <Link
//             href="/contact"
//             className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 2xl:text-lg"
//             aria-label="Request custom photography package"
//           >
//             Request Custom Package
//           </Link>
//         </div>
//       </div>

//       {/* Animations */}
//       <style jsx>{`
//         @keyframes spin {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(360deg);
//           }
//         }
//         @keyframes spin-reverse {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(-360deg);
//           }
//         }
//         .animate-spin-slow {
//           animation: spin 8s linear infinite;
//         }
//         .animate-spin-slow-reverse {
//           animation: spin-reverse 12s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }


// import Link from "next/link";

// export default function Plans() {
//   return (
//     <>
//       <section id="packages" className="py-12 mt-[-40px] md:py-16 bg-gray-100">
//         <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1600px]">
//           {/* Heading */}
//           <h2 className="text-xl md:text-3xl 2xl:text-5xl font-bold text-center text-gray-800 mb-8 md:mb-12">
//             Half Saree Photography Packages
//           </h2>

//           {/* Subtext */}
//           <p className="text-center text-gray-600 text-xs md:text-base 2xl:text-xl max-w-3xl mx-auto mb-8 md:mb-12">
//             Affordable pricing options for every need. All packages include high-resolution edited images with print release.
//           </p>

//           {/* Grid: 2 on mobile, 3 on md, 4 on 2xl (4K) */}
//           <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-8 items-stretch">
//             {/* Basic, Premium, Deluxe Packages */}
//             {[
//               {
//                 name: "Basic",
//                 price: "£199",
//                 popular: false,
//                 color: "bg-green-100",
//                 features: [
//                   "1 hour photoshoot",
//                   "15 high-resolution edited images",
//                   "1 outfit change",
//                   "Studio or outdoor location",
//                   "No makeup artist",
//                   "No printed photos",
//                 ],
//               },
//               {
//                 name: "Premium",
//                 price: "£349",
//                 popular: true,
//                 color: "bg-green-600",
//                 textColor: "text-white",
//                 features: [
//                   "2 hour photoshoot",
//                   "30 high-resolution edited images",
//                   "2 outfit changes",
//                   "Studio + outdoor locations",
//                   "Professional makeup artist",
//                   "5 printed 6x4 photos",
//                 ],
//               },
//               {
//                 name: "Deluxe",
//                 price: "£499",
//                 popular: false,
//                 color: "bg-green-100",
//                 features: [
//                   "3 hour photoshoot",
//                   "50 high-resolution edited images",
//                   "3 outfit changes",
//                   "Multiple locations",
//                   "Professional makeup & hair styling",
//                   "10 printed photos + 1 framed 8x10",
//                   "Online gallery with shareable link",
//                 ],
//               },
//             ].map((plan, idx) => (
//               <div
//                 key={idx}
//                 className={`flex flex-col rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-1 ${
//                   plan.popular ? "border-2 border-green-500 relative" : ""
//                 } bg-white`}
//               >
//                 {plan.popular && (
//                   <div className="absolute top-2 right-4 md:top-4 md:right-2 flex items-center justify-center z-20 w-[20px] h-[20px] md:w-12 md:h-12 2xl:w-20 2xl:h-20">
//                     <div className="absolute inset-0 rounded-full border-2 border-dashed border-green-500 animate-spin-slow-reverse shadow-md shadow-green-400/50"></div>
//                     <div className="absolute inset-0 rounded-full border-2 border-green-300 animate-spin-slow shadow-green-300/50"></div>
//                     <div className="absolute z-10 bg-green-550 text-white font-bold text-[4px] md:text-[9px] 2xl:text-[8px] px-2 md:px-3 py-1 rounded-full text-center animate-pulse leading-tight whitespace-nowrap">
//                       Most Popular
//                     </div>
//                   </div>
//                 )}

//                 <div className={`${plan.color} py-4 px-5 md:py-6 md:px-8`}>
//                   <h3
//                     className={`text-lg md:text-xl 2xl:text-2xl font-bold text-center ${
//                       plan.textColor || "text-green-800"
//                     }`}
//                   >
//                     {plan.name}
//                   </h3>
//                   <div className="text-center mt-2 md:mt-4">
//                     <span className={`text-2xl md:text-4xl 2xl:text-5xl font-bold ${plan.textColor || "text-black"}`}>
//                       {plan.price}
//                     </span>
//                     <span className={`text-xs md:text-base 2xl:text-lg ${plan.textColor ? "text-green-200" : "text-gray-600"}`}>
//                       /session
//                     </span>
//                   </div>
//                 </div>

//                 <div className="p-4 md:p-8 2xl:p-10 flex flex-col flex-grow">
//                   <ul className="space-y-2 md:space-y-4 2xl:space-y-5 flex-grow">
//                     {plan.features.map((feature, i) => (
//                       <li
//                         key={i}
//                         className={`flex items-start ${
//                           !plan.popular && i >= 4 ? "text-gray-400" : ""
//                         }`}
//                       >
//                         <svg
//                           className={`w-4 h-4 md:w-5 md:h-5 2xl:w-6 2xl:h-6 ${
//                             !plan.popular && i >= 4 ? "text-gray-400" : "text-green-500"
//                           } mr-2 mt-0.5 flex-shrink-0`}
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                         </svg>
//                         <span className="text-xs md:text-sm 2xl:text-base">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <div className="mt-4 md:mt-8 text-center">
//                     <Link
//                       href="/contact"
//                       className="inline-block bg-green-600 text-white font-bold py-2 px-3 md:py-3 md:px-6 2xl:py-4 2xl:px-8 rounded-lg hover:bg-green-700 transition duration-300 w-full text-xs md:text-base 2xl:text-lg"
//                     >
//                       Book Now
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Custom Package CTA */}
//           <div className="mt-8 md:mt-12 2xl:mt-16 bg-white rounded-lg shadow-md p-4 md:p-8 2xl:p-12">
//             <h3 className="text-lg md:text-2xl 2xl:text-3xl font-bold text-center text-gray-800 mb-4 md:mb-6">
//               Custom Packages Available
//             </h3>
//             <p className="text-gray-600 text-center text-xs md:text-base 2xl:text-lg mb-4 md:mb-6">
//               Have special requirements? We offer custom packages for large families, events, and commercial needs.
//             </p>
//             <div className="text-center">
//               <Link
//                 href="/contact"
//                 className="inline-block bg-green-600 text-white font-bold py-2 px-3 md:py-3 md:px-6 2xl:py-4 2xl:px-8 rounded-lg hover:bg-green-700 transition duration-300 text-xs md:text-base 2xl:text-lg"
//               >
//                 Request Custom Package
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Animations */}
//       <style jsx>{`
//         @keyframes spin {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(360deg);
//           }
//         }
//         @keyframes spin-reverse {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(-360deg);
//           }
//         }
//         .animate-spin-slow {
//           animation: spin 6s linear infinite;
//         }
//         .animate-spin-slow-reverse {
//           animation: spin-reverse 10s linear infinite;
//         }
//       `}</style>
//     </>
//   );
// }


import Link from "next/link";

export default function Plans() {
  return (
    <>
      <section id="packages" className="py-12 mt-[-40px] md:py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1600px]">
          {/* Heading */}
          <h2 className="text-xl md:text-3xl 2xl:text-5xl font-bold text-center text-gray-800 mb-8 md:mb-12">
            Half Saree Photography Packages
          </h2>

          {/* Subtext */}
          <p className="text-center text-gray-600 text-xs md:text-base 2xl:text-xl max-w-3xl mx-auto mb-8 md:mb-12">
            Affordable pricing options for every need. All packages include high-resolution edited images with print release.
          </p>

          {/* Shared wrapper for both cards and CTA */}
          <div className="max-w-6xl mx-auto">
            {/* Grid: 1 on mobile, 3 on md+ */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 items-stretch">
              {[
                {
                  name: "Basic",
                  price: "£199",
                  popular: false,
                  color: "bg-green-100",
                  features: [
                    "1 hour photoshoot",
                    "15 high-resolution edited images",
                    "1 outfit change",
                    "Studio or outdoor location",
                    "No makeup artist",
                    "No printed photos",
                  ],
                },
                {
                  name: "Premium",
                  price: "£349",
                  popular: true,
                  color: "bg-green-600",
                  textColor: "text-white",
                  features: [
                    "2 hour photoshoot",
                    "30 high-resolution edited images",
                    "2 outfit changes",
                    "Studio + outdoor locations",
                    "Professional makeup artist",
                    "5 printed 6x4 photos",
                  ],
                },
                {
                  name: "Deluxe",
                  price: "£499",
                  popular: false,
                  color: "bg-green-100",
                  features: [
                    "3 hour photoshoot",
                    "50 high-resolution edited images",
                    "3 outfit changes",
                    "Multiple locations",
                    "Professional makeup & hair styling",
                    "10 printed photos + 1 framed 8x10",
                    "Online gallery with shareable link",
                  ],
                },
              ].map((plan, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-1 ${
                    plan.popular ? "border-2 border-green-500 relative" : ""
                  } bg-white`}
                >
                  {plan.popular && (
                    <div className="absolute top-2 right-4 md:top-4 md:right-2 flex items-center justify-center z-20 w-[50px] h-[50px] md:w-14 md:h-14 2xl:w-[50px] 2xl:h-[50px]">
                      <div className="absolute inset-0 rounded-full border-2 border-dashed border-green-500 animate-spin-slow-reverse shadow-md shadow-green-400/50"></div>
                      <div className="absolute inset-0 rounded-full border-2 border-green-300 animate-spin-slow shadow-green-300/50"></div>
                      <div className="absolute z-10 bg-green-550 text-white font-bold text-[4px] md:text-[9px] 2xl:text-[8px] px-2 md:px-3 py-1 rounded-full text-center animate-pulse leading-tight whitespace-nowrap">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className={`${plan.color} py-4 px-5 md:py-6 md:px-8`}>
                    <h3
                      className={`text-lg md:text-xl 2xl:text-2xl font-bold text-center ${
                        plan.textColor || "text-green-800"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <div className="text-center mt-2 md:mt-4">
                      <span className={`text-2xl md:text-4xl 2xl:text-5xl font-bold ${plan.textColor || "text-black"}`}>
                        {plan.price}
                      </span>
                      <span
                        className={`text-xs md:text-base 2xl:text-lg ${
                          plan.textColor ? "text-green-200" : "text-gray-600"
                        }`}
                      >
                        /session
                      </span>
                    </div>
                  </div>

                  <div className="p-4 md:p-8 2xl:p-10 flex flex-col flex-grow">
                    <ul className="space-y-2 md:space-y-4 2xl:space-y-5 flex-grow">
                      {plan.features.map((feature, i) => (
                        <li
                          key={i}
                          className={`flex items-start ${
                            !plan.popular && i >= 4 ? "text-gray-400" : ""
                          }`}
                        >
                          <svg
                            className={`w-4 h-4 md:w-5 md:h-5 2xl:w-6 2xl:h-6 ${
                              !plan.popular && i >= 4 ? "text-gray-400" : "text-green-500"
                            } mr-2 mt-0.5 flex-shrink-0`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-xs md:text-sm 2xl:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 md:mt-8 text-center">
                      <Link
                        href="/contact"
                        className="inline-block bg-green-600 text-white font-bold py-2 px-3 md:py-3 md:px-6 2xl:py-4 2xl:px-8 rounded-lg hover:bg-green-700 transition duration-300 w-full text-xs md:text-base 2xl:text-lg"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Package CTA */}
            <div className="mt-8 md:mt-12 2xl:mt-16 bg-white rounded-lg shadow-md p-4 md:p-8 2xl:p-12">
              <h3 className="text-lg md:text-2xl 2xl:text-3xl font-bold text-center text-gray-800 mb-4 md:mb-6">
                Custom Packages Available
              </h3>
              <p className="text-gray-600 text-center text-xs md:text-base 2xl:text-lg mb-4 md:mb-6">
                Have special requirements? We offer custom packages for large families, events, and commercial needs.
              </p>
              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-block bg-green-600 text-white font-bold py-2 px-3 md:py-3 md:px-6 2xl:py-4 2xl:px-8 rounded-lg hover:bg-green-700 transition duration-300 text-xs md:text-base 2xl:text-lg"
                >
                  Request Custom Package
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-reverse 10s linear infinite;
        }
      `}</style>
    </>
  );
}
