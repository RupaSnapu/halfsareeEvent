// import Link from "next/link";

// export default function NavBar(){
// return(<>
//     <nav className="bg-white shadow-lg sticky top-0 z-50">
//             <div className="max-w-6xl mx-auto px-4">
//               <div className="flex justify-between">
//                 <div className="flex space-x-7">
//                   <Link href="/" className="flex items-center py-4 px-2">
//                     <span className="font-semibold text-gray-900 text-lg">Your Photography</span>
//                   </Link>
//                 </div>
//                 <div className="hidden md:flex items-center space-x-1">
//                   <Link href="/" className="py-4 px-2 text-gray-700 hover:text-yellow-600 transition duration-300">Home</Link>
//                   <Link href="/#services" className="py-4 px-2 text-gray-700 hover:text-indigo-600 transition duration-300">Services</Link>
//                   <Link href="/#gallery" className="py-4 px-2 text-gray-700 hover:text-indigo-600 transition duration-300">Gallery</Link>
//                   <Link href="#packages" className="py-4 px-2 text-gray-700 hover:text-indigo-600 transition duration-300">Packages</Link>
//                   <Link href="/#About" className="py-4 px-2 text-gray-700 hover:text-indigo-600 transition duration-300">About</Link>
//                   <Link href="/#Contact" className="py-4 px-2 text-gray-700 hover:text-indigo-600 transition duration-300">Contact</Link>
//                 </div>
//                 <div className="md:hidden flex items-center">
//                   <button className="outline-none mobile-menu-button">
//                     <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </nav>
    
//     </>);
// }


'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Scroll listener for navbar shadow effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-4 animate-fadeIn">
        <div className="flex justify-between items-center h-16">
          {/* Logo with hover animation */}
          <Link 
            href="/" 
            className="flex items-center text-lg font-semibold text-gray-900 transition-transform hover:scale-105"
          >
            Your Photography
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link 
              href="/" 
              className="relative group hover:text-yellow-600 transition-all duration-300"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/#services" 
              className="relative group hover:text-indigo-600 transition-all duration-300"
            >
              Services
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/#gallery" 
              className="relative group hover:text-indigo-600 transition-all duration-300"
            >
              Gallery
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="#packages" 
              className="relative group hover:text-indigo-600 transition-all duration-300"
            >
              Packages
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/#About" 
              className="relative group hover:text-indigo-600 transition-all duration-300"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/#Contact" 
              className="relative group hover:text-indigo-600 transition-all duration-300"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Animated Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute left-0 top-1/2 w-full h-0.5 bg-gray-700 transform transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
                <span className={`absolute left-0 top-1/2 w-full h-0.5 bg-gray-700 transform transition duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute left-0 top-1/2 w-full h-0.5 bg-gray-700 transform transition duration-300 ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with slide-down animation */}
      <div
        className={`md:hidden bg-white px-4 overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
        }`}
        style={{ transitionProperty: 'max-height, opacity, padding' }}
      >
        <div className="flex flex-col space-y-3">
          {[
            { href: '/', text: 'Home', color: 'yellow' },
            { href: '/#services', text: 'Services', color: 'indigo' },
            { href: '/#gallery', text: 'Gallery', color: 'indigo' },
            { href: '#packages', text: 'Packages', color: 'indigo' },
            { href: '/#About', text: 'About', color: 'indigo' },
            { href: '/#Contact', text: 'Contact', color: 'indigo' },
          ].map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className={`text-gray-700 hover:text-${link.color}-600 transition-all duration-300 transform hover:translate-x-2`}
              style={{ transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' }}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>

      {/* Global CSS for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}