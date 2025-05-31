import Link from "next/link";

export default function Plans() {
    return (
        <>
            <section id="packages" className="py-16 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Half Saree Photography Packages
                    </h2>
                    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                        Affordable pricing options for every need. All packages include high-resolution edited images with print release.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        
                        {/* Basic Package */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
                            <div className="bg-indigo-100 py-6 px-8">
                                <h3 className="text-2xl font-bold text-center text-indigo-800">Basic</h3>
                                <div className="text-center mt-4">
                                    <span className="text-4xl font-bold">£199</span>
                                    <span className="text-gray-600">/session</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <ul className="space-y-4">
                                    {[
                                        "1 hour photoshoot",
                                        "15 high-resolution edited images",
                                        "1 outfit change",
                                        "Studio or outdoor location",
                                        "No makeup artist",
                                        "No printed photos"
                                    ].map((item, index) => (
                                        <li key={index} className={`flex items-start ${index >= 4 ? 'text-gray-400' : ''}`}>
                                            <svg className={`w-5 h-5 ${index >= 4 ? 'text-gray-400' : 'text-green-500'} mr-2 mt-0.5 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 text-center">
                                    <Link href="/contact" className="inline-block bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 w-full">
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Premium Package */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 border-2 border-indigo-500 relative">
                            {/* Bright Rotating Badge */}
                            <div className="absolute top-5 right-5 flex items-center justify-center z-10">
                                <div className="relative w-24 h-24 flex items-center justify-center">
                                    {/* Outer Circle - reverse spin */}
                                    <div className="absolute w-full h-full rounded-full border-4 border-dashed border-indigo-500 animate-spin-slow-reverse shadow-lg shadow-indigo-400/70"></div>
                                    {/* Inner Circle - forward spin */}
                                    <div className="absolute w-20 h-20 rounded-full border-4 border-indigo-300 animate-spin-slow shadow-md shadow-indigo-300/60"></div>
                                    {/* Center Text */}
                                    <div className="absolute z-10 bg-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-full text-center shadow-md animate-pulse">
                                        Most Popular
                                    </div>
                                </div>
                            </div>

                            <div className="bg-indigo-600 py-6 px-8">
                                <h3 className="text-2xl font-bold text-center text-white">Premium</h3>
                                <div className="text-center mt-4">
                                    <span className="text-4xl font-bold text-white">£349</span>
                                    <span className="text-indigo-200">/session</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <ul className="space-y-4">
                                    {[
                                        "2 hour photoshoot",
                                        "30 high-resolution edited images",
                                        "2 outfit changes",
                                        "Studio + outdoor locations",
                                        "Professional makeup artist",
                                        "5 printed 6x4 photos"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 text-center">
                                    <Link href="/contact" className="inline-block bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 w-full">
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Deluxe Package */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
                            <div className="bg-indigo-100 py-6 px-8">
                                <h3 className="text-2xl font-bold text-center text-indigo-800">Deluxe</h3>
                                <div className="text-center mt-4">
                                    <span className="text-4xl font-bold">£499</span>
                                    <span className="text-gray-600">/session</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <ul className="space-y-4">
                                    {[
                                        "3 hour photoshoot",
                                        "50 high-resolution edited images",
                                        "3 outfit changes",
                                        "Multiple locations",
                                        "Professional makeup & hair styling",
                                        "10 printed photos + 1 framed 8x10",
                                        "Online gallery with shareable link"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 text-center">
                                    <Link href="/contact" className="inline-block bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 w-full">
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Custom Package */}
                    <div className="mt-12 bg-white rounded-lg shadow-md p-8">
                        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Custom Packages Available</h3>
                        <p className="text-gray-600 text-center mb-6">
                            Have special requirements? We offer custom packages for large families, events, and commercial needs.
                        </p>
                        <div className="text-center">
                            <Link href="/contact" className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition duration-300">
                                Request Custom Package
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom Styles */}
            <style jsx>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes spin-reverse {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(-360deg); }
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


// import Link from "next/link";

// export default function Plans() {
//     return (
//         <>
//             <section id="packages" className="py-16 bg-gray-100">
//                 <div className="container mx-auto px-6">
//                     <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
//                         Half Saree Photography Packages
//                     </h2>
//                     <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
//                         Affordable pricing options for every need. All packages include high-resolution edited images with print release.
//                     </p>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//                         {/* Basic Package */}
//                         <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
//                             <div className="bg-indigo-100 py-6 px-8">
//                                 <h3 className="text-2xl font-bold text-center text-indigo-800">Basic</h3>
//                                 <div className="text-center mt-4">
//                                     <span className="text-4xl font-bold">£199</span>
//                                     <span className="text-gray-600">/session</span>
//                                 </div>
//                             </div>
//                             <div className="p-8">
//                                 <ul className="space-y-4">
//                                     {[
//                                         "1 hour photoshoot",
//                                         "15 high-resolution edited images",
//                                         "1 outfit change",
//                                         "Studio or outdoor location",
//                                         "No makeup artist",
//                                         "No printed photos"
//                                     ].map((item, index) => (
//                                         <li key={index} className={`flex items-start ${index >= 4 ? 'text-gray-400' : ''}`}>
//                                             <svg className={`w-5 h-5 ${index >= 4 ? 'text-gray-400' : 'text-green-500'} mr-2 mt-0.5 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                                             </svg>
//                                             <span>{item}</span>
//                                         </li>
//                                     ))}
//                                 </ul>
//                                 <div className="mt-8 text-center">
//                                     <Link href="/contact" className="inline-block bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 w-full">
//                                         Book Now
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Premium Package */}
//                         <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 border-2 border-indigo-500 relative">
//                             {/* Rotating Badge */}
//                             <div className="absolute top-5 right-5 flex items-center justify-center z-10">
//                                 <div className="relative w-24 h-24 flex items-center justify-center">
//                                     {/* Outer Circle - Dashed border */}
//                                     <div className="absolute w-full h-full rounded-full border-4 border-dashed border-indigo-500 animate-spin-slow-reverse"></div>
//                                     {/* Inner Circle - Solid border */}
//                                     <div className="absolute w-20 h-20 rounded-full border-4 border-indigo-300 animate-spin-slow"></div>
//                                     {/* Centered Text */}
//                                     <div className="absolute z-10 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full text-center shadow-md">
//                                         Most Popular
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="bg-indigo-600 py-6 px-8">
//                                 <h3 className="text-2xl font-bold text-center text-white">Premium</h3>
//                                 <div className="text-center mt-4">
//                                     <span className="text-4xl font-bold text-white">£349</span>
//                                     <span className="text-indigo-200">/session</span>
//                                 </div>
//                             </div>
//                             <div className="p-8">
//                                 <ul className="space-y-4">
//                                     {[
//                                         "2 hour photoshoot",
//                                         "30 high-resolution edited images",
//                                         "2 outfit changes",
//                                         "Studio + outdoor locations",
//                                         "Professional makeup artist",
//                                         "5 printed 6x4 photos"
//                                     ].map((item, index) => (
//                                         <li key={index} className="flex items-start">
//                                             <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                                             </svg>
//                                             <span>{item}</span>
//                                         </li>
//                                     ))}
//                                 </ul>
//                                 <div className="mt-8 text-center">
//                                     <Link href="/contact" className="inline-block bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 w-full">
//                                         Book Now
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Deluxe Package */}
//                         <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
//                             <div className="bg-indigo-100 py-6 px-8">
//                                 <h3 className="text-2xl font-bold text-center text-indigo-800">Deluxe</h3>
//                                 <div className="text-center mt-4">
//                                     <span className="text-4xl font-bold">£499</span>
//                                     <span className="text-gray-600">/session</span>
//                                 </div>
//                             </div>
//                             <div className="p-8">
//                                 <ul className="space-y-4">
//                                     {[
//                                         "3 hour photoshoot",
//                                         "50 high-resolution edited images",
//                                         "3 outfit changes",
//                                         "Multiple locations",
//                                         "Professional makeup & hair styling",
//                                         "10 printed photos + 1 framed 8x10",
//                                         "Online gallery with shareable link"
//                                     ].map((item, index) => (
//                                         <li key={index} className="flex items-start">
//                                             <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                                             </svg>
//                                             <span>{item}</span>
//                                         </li>
//                                     ))}
//                                 </ul>
//                                 <div className="mt-8 text-center">
//                                     <Link href="/contact" className="inline-block bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 w-full">
//                                         Book Now
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Custom Package */}
//                     <div className="mt-12 bg-white rounded-lg shadow-md p-8">
//                         <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Custom Packages Available</h3>
//                         <p className="text-gray-600 text-center mb-6">
//                             Have special requirements? We offer custom packages for large families, events, and commercial needs.
//                         </p>
//                         <div className="text-center">
//                             <Link href="/contact" className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition duration-300">
//                                 Request Custom Package
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Custom Styles */}
//             <style jsx>{`
//                 @keyframes spin {
//                     0% { transform: rotate(0deg); }
//                     100% { transform: rotate(360deg); }
//                 }
//                 @keyframes spin-reverse {
//                     0% { transform: rotate(0deg); }
//                     100% { transform: rotate(-360deg); }
//                 }

//                 .animate-spin-slow {
//                     animation: spin 8s linear infinite;
//                 }
//                 .animate-spin-slow-reverse {
//                     animation: spin-reverse 8s linear infinite;
//                 }
//             `}</style>
//         </>
//     );
// }
