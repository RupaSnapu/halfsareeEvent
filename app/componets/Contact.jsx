// // export default function Contact() {
// //     return (
// //         <>
// //             <section id="Contact" className="py-16 bg-green-50">
// //                 <div className="container mx-auto px-6">
// //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

// //                         {/* Left: Photography Journey Steps */}
// //                         <div>
// //                             <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Photography Journey</h2>
// //                             <p className="text-gray-600 mb-10">
// //                                 Here's what to expect when you work with us for your half saree photoshoot in the UK.
// //                             </p>

// //                             <div className="space-y-6">
// //                                 {[
// //                                     "Initial Contact|You fill out our contact form and we'll respond within 24 hours to discuss your needs.",
// //                                     "Consultation|We'll schedule a call or meeting to understand your vision, preferences, and event details.",
// //                                     "Custom Proposal|You'll receive a tailogreen photography package with pricing and options for your event.",
// //                                     "Booking Confirmation|Secure your date with a signed contract and deposit payment.",
// //                                     "Pre-Event Planning|Finalize shot lists, timelines, and any special requests before your big day.",
// //                                     "Event Day|Our professional photographers capture your special moments beautifully.",
// //                                     "Delivery|Receive your edited high-resolution photos within the promised timeframe.",
// //                                 ].map((step, index) => {
// //                                     const [title, desc] = step.split("|");
// //                                     const isFirst = index === 0;
// //                                     return (
// //                                         <div
// //                                             key={index}
// //                                             className={`p-6 rounded-lg shadow-md text-left flex gap-4 transition-transform transform hover:scale-105 ${
// //                                                 isFirst ? 'bg-green-100 border-l-4 border-green-500' : 'bg-white'
// //                                             }`}
// //                                         >
// //                                             <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
// //                                                 <span className="text-green-700 font-bold">{index + 1}</span>
// //                                             </div>
// //                                             <div>
// //                                                 <h3 className="font-semibold text-gray-800">{title}</h3>
// //                                                 {isFirst && (
// //                                                     <span className="inline-block bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">
// //                                                         Start Here
// //                                                     </span>
// //                                                 )}
// //                                                 <p className="text-sm text-gray-600 mt-1">{desc}</p>
// //                                             </div>
// //                                         </div>
// //                                     );
// //                                 })}
// //                             </div>
// //                         </div>

// //                         {/* Right: Contact Form */}
// //                         <div className="bg-white rounded-lg shadow-xl p-8">
// //                             <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
// //                             <form className="space-y-6">
// //                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                                     <div>
// //                                         <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
// //                                         <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required/>
// //                                     </div>
// //                                     <div>
// //                                         <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
// //                                         <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required/>
// //                                     </div>
// //                                 </div>
// //                                 <div>
// //                                     <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
// //                                     <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
// //                                 </div>
// //                                 <div>
// //                                     <label htmlFor="service" className="block text-gray-700 mb-2">Service Interested In</label>
// //                                     <select id="service" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
// //                                         <option value="">Select a service</option>
// //                                         <option value="half-saree">Half Saree Photography</option>
// //                                         <option value="family">Family Photography</option>
// //                                         <option value="traditional">Traditional Indian Photography</option>
// //                                         <option value="event">Event Photography</option>
// //                                         <option value="other">Other</option>
// //                                     </select>
// //                                 </div>
// //                                 <div>
// //                                     <label htmlFor="location" className="block text-gray-700 mb-2">Prefergreen Location</label>
// //                                     <input type="text" id="location" placeholder="e.g. London, West Midlands, etc." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
// //                                 </div>
// //                                 <div>
// //                                     <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
// //                                     <textarea id="message" rows="5" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" requigreen></textarea>
// //                                 </div>
// //                                 <div>
// //                                     <button type="submit" className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition duration-300 w-full md:w-auto">
// //                                         Send Message
// //                                     </button>
// //                                 </div>
// //                             </form>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </section>

// //             {/* Contact Details Section */}
// //             <section className="py-16 bg-gray-100">
// //                 <div className="container mx-auto px-6">
// //                     <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Other Ways to Reach Us</h2>
// //                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //                         <div className="bg-white p-8 rounded-lg shadow-md text-center">
// //                             <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
// //                                 <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
// //                                 </svg>
// //                             </div>
// //                             <h3 className="text-xl font-semibold mb-2">Phone</h3>
// //                             <p className="text-gray-600">+44 123 456 7890</p>
// //                             <p className="text-gray-600">Mon-Fri: 9am-6pm</p>
// //                         </div>
// //                         <div className="bg-white p-8 rounded-lg shadow-md text-center">
// //                             <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
// //                                 <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
// //                                 </svg>
// //                             </div>
// //                             <h3 className="text-xl font-semibold mb-2">Email</h3>
// //                             <p className="text-gray-600">info@yourphotography.com</p>
// //                             <p className="text-gray-600">Response within 24 hours</p>
// //                         </div>
// //                         <div className="bg-white p-8 rounded-lg shadow-md text-center">
// //                             <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
// //                                 <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
// //                                 </svg>
// //                             </div>
// //                             <h3 className="text-xl font-semibold mb-2">Studio</h3>
// //                             <p className="text-gray-600">123 Photography Studio</p>
// //                             <p className="text-gray-600">London, UK</p>
// //                             <p className="text-gray-600">By appointment only</p>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </section>

// //             {/* Custom Styles */}
// //             <style jsx>{`
// //                 @keyframes spin {
// //                     0% { transform: rotate(0deg); }
// //                     100% { transform: rotate(360deg); }
// //                 }
// //                 @keyframes spin-reverse {
// //                     0% { transform: rotate(0deg); }
// //                     100% { transform: rotate(-360deg); }
// //                 }
// //                 .animate-spin-slow {
// //                     animation: spin 8s linear infinite;
// //                 }
// //                 .animate-spin-slow-reverse {
// //                     animation: spin-reverse 8s linear infinite;
// //                 }
// //             `}</style>
// //         </>
// //     );
// // }

// import Link from "next/link";

// export default function Contact() {
//   return (
//     <>
//       {/* Contact Section */}
//       <section id="Contact" className="py-12 md:py-16 bg-green-50">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
//             {/* Left: Photography Journey Steps */}
//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
//                 Your Photography Journey
//               </h2>
//               <p className="text-xs md:text-sm text-gray-600 mb-8">
//                 Here’s what to expect when you work with us for your half saree
//                 photoshoot in the UK.
//               </p>

//               <div className="space-y-4 md:space-y-6">
//                 {[
//                   "Initial Contact|You fill out our contact form and we'll respond within 24 hours to discuss your needs.",
//                   "Consultation|We'll schedule a call or meeting to understand your vision, preferences, and event details.",
//                   "Custom Proposal|You'll receive a tailogreen photography package with pricing and options for your event.",
//                   "Booking Confirmation|Secure your date with a signed contract and deposit payment.",
//                   "Pre-Event Planning|Finalize shot lists, timelines, and any special requests before your big day.",
//                   "Event Day|Our professional photographers capture your special moments beautifully.",
//                   "Delivery|Receive your edited high-resolution photos within the promised timeframe.",
//                 ].map((step, index) => {
//                   const [title, desc] = step.split("|");
//                   const isFirst = index === 0;
//                   return (
//                     <div
//                       key={index}
//                       className={`flex gap-4 transition-transform transform hover:scale-105 duration-300 ${
//                         isFirst
//                           ? "bg-green-100 border-l-4 border-green-500 rounded-lg p-4 md:p-6"
//                           : "bg-white rounded-lg p-4 md:p-6 shadow-md"
//                       }`}
//                     >
//                       {/* Step Number Circle */}
//                       <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 flex items-center justify-center">
//                         <span className="text-green-700 font-bold text-xs md:text-sm">
//                           {index + 1}
//                         </span>
//                       </div>
//                       {/* Step Content */}
//                       <div>
//                         <h3 className="font-semibold text-base md:text-lg text-gray-800">
//                           {title}
//                         </h3>
//                         {isFirst && (
//                           <span className="inline-block bg-green-200 text-green-800 text-[10px] md:text-xs font-semibold px-2 py-1 rounded-full mt-1">
//                             Start Here
//                           </span>
//                         )}
//                         <p className="text-xs md:text-sm text-gray-600 mt-1">
//                           {desc}
//                         </p>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Right: Contact Form */}
//             <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
//                 Send Us a Message
//               </h2>
//               <form className="space-y-4 md:space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//                   <div>
//                     <label
//                       htmlFor="name"
//                       className="block text-gray-700 text-xs md:text-sm mb-1"
//                     >
//                       Your Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-xs md:text-sm"
//                       requigreen
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block text-gray-700 text-xs md:text-sm mb-1"
//                     >
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-xs md:text-sm"
//                       requigreen
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="phone"
//                     className="block text-gray-700 text-xs md:text-sm mb-1"
//                   >
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-xs md:text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="service"
//                     className="block text-gray-700 text-xs md:text-sm mb-1"
//                   >
//                     Service Interested In
//                   </label>
//                   <select
//                     id="service"
//                     className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-xs md:text-sm"
//                   >
//                     <option value="">Select a service</option>
//                     <option value="half-saree">Half Saree Photography</option>
//                     <option value="family">Family Photography</option>
//                     <option value="traditional">Traditional Indian Photography</option>
//                     <option value="event">Event Photography</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="location"
//                     className="block text-gray-700 text-xs md:text-sm mb-1"
//                   >
//                     Prefergreen Location
//                   </label>
//                   <input
//                     type="text"
//                     id="location"
//                     placeholder="e.g. London, West Midlands, etc."
//                     className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-xs md:text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="message"
//                     className="block text-gray-700 text-xs md:text-sm mb-1"
//                   >
//                     Your Message
//                   </label>
//                   <textarea
//                     id="message"
//                     rows="4"
//                     className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-xs md:text-sm"
//                     requigreen
//                   ></textarea>
//                 </div>

//                 <div>
//                   <button
//                     type="submit"
//                     className="bg-green-600 text-white font-bold text-xs md:text-sm py-2 px-4 md:py-3 md:px-6 rounded-lg hover:bg-green-700 transition duration-300 w-full md:w-auto"
//                   >
//                     Send Message
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Details Section */}

                    
              
//       <section className="py-12 md:py-16 bg-gray-100">
//         <div className="container mx-auto px-4 md:px-6">
//           <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">
//             Other Ways to Reach Us
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
//             {/* Phone Card */}
//             <div className="bg-white p-6 md:p-8 rounded-lg shadow-md text-center">
//               <div className="bg-green-100 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg
//                   className="w-6 h-6 md:w-8 md:h-8 text-green-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                   ></path>
//                 </svg>
//               </div>
//               <h3 className="text-lg md:text-xl font-semibold mb-2">Phone</h3>
//               <p className="text-xs md:text-sm text-gray-600">+44 123 456 7890</p>
//               <p className="text-xs md:text-sm text-gray-600">Mon-Fri: 9am-6pm</p>
//             </div>

//             {/* Email Card */}
//             <div className="bg-white p-6 md:p-8 rounded-lg shadow-md text-center">
//               <div className="bg-green-100 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg
//                   className="w-6 h-6 md:w-8 md:h-8 text-green-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                   ></path>
//                 </svg>
//               </div>
//               <h3 className="text-lg md:text-xl font-semibold mb-2">Email</h3>
//               <p className="text-xs md:text-sm text-gray-600">
//                 info@yourphotography.com
//               </p>
//               <p className="text-xs md:text-sm text-gray-600">
//                 Response within 24 hours
//               </p>
//             </div>

//             {/* Studio Card */}
//             <div className="bg-white p-6 md:p-8 rounded-lg shadow-md text-center">
//               <div className="bg-green-100 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg
//                   className="w-6 h-6 md:w-8 md:h-8 text-green-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                   ></path>
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                   ></path>
//                 </svg>
//               </div>
//               <h3 className="text-lg md:text-xl font-semibold mb-2">Studio</h3>
//               <p className="text-xs md:text-sm text-gray-600">
//                 123 Photography Studio
//               </p>
//               <p className="text-xs md:text-sm text-gray-600">London, UK</p>
//               <p className="text-xs md:text-sm text-gray-600">
//                 By appointment only
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Custom Styles for spinning badge (if you ever add badge elements here) */}
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
//           animation: spin-reverse 8s linear infinite;
//         }
//       `}</style>
//     </>
//   );
// }


import Link from "next/link";

export default function Contact() {
  return (
    <>
      {/* Contact Section */}
      <section id="Contact" className="py-12 md:py-16 bg-green-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {/* Left: Photography Journey Steps */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                Your Photography Journey
              </h2>
              <p className="text-xs md:text-sm text-gray-600 mb-8">
                Here’s what to expect when you work with us for your half saree
                photoshoot in the UK.
              </p>

              <div className="space-y-4 md:space-y-6">
                {[
                  "Initial Contact|You fill out our contact form and we'll respond within 24 hours to discuss your needs.",
                  "Consultation|We'll schedule a call or meeting to understand your vision, preferences, and event details.",
                  "Custom Proposal|You'll receive a tailogreen photography package with pricing and options for your event.",
                  "Booking Confirmation|Secure your date with a signed contract and deposit payment.",
                  "Pre-Event Planning|Finalize shot lists, timelines, and any special requests before your big day.",
                  "Event Day|Our professional photographers capture your special moments beautifully.",
                  "Delivery|Receive your edited high-resolution photos within the promised timeframe.",
                ].map((step, index) => {
                  const [title, desc] = step.split("|");
                  const isFirst = index === 0;
                  return (
                    <div
                      key={index}
                      className={`flex gap-4 transition-transform transform hover:scale-105 duration-300 ${
                        isFirst
                          ? "bg-green-100 border-l-4 border-green-500 rounded-lg p-4 md:p-6"
                          : "bg-white rounded-lg p-4 md:p-6 shadow-md"
                      }`}
                    >
                      {/* Step Number Circle */}
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-green-700 font-bold text-xs md:text-sm">
                          {index + 1}
                        </span>
                      </div>
                      {/* Step Content */}
                      <div>
                        <h3 className="font-semibold text-base md:text-lg text-gray-800">
                          {title}
                        </h3>
                        {isFirst && (
                          <span className="inline-block bg-green-200 text-green-800 text-[10px] md:text-xs font-semibold px-2 py-1 rounded-full mt-1">
                            Start Here
                          </span>
                        )}
                        <p className="text-xs md:text-sm text-gray-600 mt-1">
                          {desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-4 md:space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
    <div>
      <label htmlFor="name" className="block text-gray-700 text-xs md:text-sm mb-1">
        Your Name
      </label>
      <input
        type="text"
        id="name"
        className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-xs md:text-sm"
        required
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-gray-700 text-xs md:text-sm mb-1">
        Email Address
      </label>
      <input
        type="email"
        id="email"
        className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-xs md:text-sm"
        required
      />
    </div>
  </div>

  <div>
    <label htmlFor="phone" className="block text-gray-700 text-xs md:text-sm mb-1">
      Phone Number
    </label>
    <input
      type="tel"
      id="phone"
      className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-xs md:text-sm"
    />
  </div>

  <div>
    <label htmlFor="service" className="block text-gray-700 text-xs md:text-sm mb-1">
      Service Interested In
    </label>
    <select
      id="service"
      className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-xs md:text-sm"
    >
      <option value="">Select a service</option>
      <option value="half-saree">Half Saree Photography</option>
      <option value="family">Family Photography</option>
      <option value="traditional">Traditional Indian Photography</option>
      <option value="event">Event Photography</option>
      <option value="other">Other</option>
    </select>
  </div>

  <div>
    <label htmlFor="location" className="block text-gray-700 text-xs md:text-sm mb-1">
      Preferred Location
    </label>
    <input
      type="text"
      id="location"
      placeholder="e.g. London, West Midlands, etc."
      className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-xs md:text-sm"
    />
  </div>

  <div>
    <label htmlFor="message" className="block text-gray-700 text-xs md:text-sm mb-1">
      Your Message
    </label>
    <textarea
      id="message"
      rows="4"
      className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-xs md:text-sm"
      required
    ></textarea>
  </div>

  <div>
    <button
      type="submit"
      className="bg-green-600 text-white font-bold text-xs md:text-sm py-2 px-4 md:py-3 md:px-6 rounded-lg hover:bg-green-700 transition duration-300 w-full md:w-auto"
    >
      Send Message
    </button>
  </div>
</form>

            </div>
          </div>
        </div>
      </section>

      {/* Contact Details Section with 2x2 grid on mobile */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">
            Other Ways to Reach Us
          </h2>

          {/* Grid: 2 columns on mobile, 3 columns on large */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Phone",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                ),
                lines: ["+44 123 456 7890", "Mon-Fri: 9am-6pm"],
              },
              {
                title: "Email",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                ),
                lines: ["info@yourphotography.com", "Response within 24 hours"],
              },
              {
                title: "Studio",
                icon: (
                  <>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </>
                ),
                lines: ["123 Photography Studio", "London, UK", "By appointment only"],
              },
              {
                title: "Social Media",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 2h-3a6 6 0 00-6 6v3H6v4h3v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z"
                  />
                ),
                lines: ["@YourPhotoUK", "Follow us on Instagram and Facebook"],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-lg shadow-md text-center transition-transform transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="bg-green-100 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-lg md:text-xs font-semibold mb-2">{item.title}</h3>
                {item.lines.map((line, i) => (
                  <p key={i} className="text-xs sm:text-xl md:text-sm text-gray-600">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
