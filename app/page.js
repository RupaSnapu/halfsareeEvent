"use client";

import Image from 'next/image';
import Link from 'next/link';
import HeroImageShow from './componets/heroimgshow';


export default function HalfSareePhotography() {

  return (
    <div className="min-h-screen bg-gray-50">
           <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <Link href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-900 text-lg">Your Photography</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/" className="py-4 px-2 text-gray-700 hover:text-yellow-600 transition duration-300">Home</Link>
              <Link href="#services" className="py-4 px-2 text-gray-700 hover:text-indigo-600 transition duration-300">Services</Link>
              <Link href="/gallery" className="py-4 px-2 text-gray-700 hover:text-indigo-600 transition duration-300">Gallery</Link>
              <Link href="#packages" className="py-4 px-2 text-gray-700 hover:text-indigo-600 transition duration-300">Packages</Link>
              <Link href="/about" className="py-4 px-2 text-gray-700 hover:text-indigo-600 transition duration-300">About</Link>
              <Link href="/contact" className="py-4 px-2 text-gray-700 hover:text-indigo-600 transition duration-300">Contact</Link>
            </div>
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

           <HeroImageShow/>


          {/* <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image 
                src="/imag2.jpg" 
                alt="Traditional Half Saree Photography in UK" 
                width={600} 
                height={400}
                className="rounded-lg shadow-xl"
                priority
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Traditional Half Saree Photoshoots in UK</h2>
              <p className="text-gray-600 mb-4">
                Half saree, also known as 'Langa Voni' or 'Pavada Davani', is a beautiful South Indian traditional attire typically worn by teenage girls during special occasions. Our photography services specialize in capturing the elegance and cultural significance of this attire.
              </p>
              <p className="text-gray-600 mb-4">
                Whether you're looking for an outdoor photoshoot in London's iconic locations or a studio session in West Midlands, we bring professional expertise to create stunning images that preserve your cultural heritage.
              </p>
              <p className="text-gray-600">
                We serve clients across UK including Scotland, Yorkshire, and Northern Ireland, offering both traditional and contemporary styles of half saree photography.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Hero Section */}
      <section className="relative bg-indigo-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Half Saree Photography UK</h1>
          <p className="text-xl md:text-2xl mb-8">Capturing the Elegance of Indian Tradition in the Heart of London & Across UK</p>
          <Link href="./contact" className="bg-white text-indigo-800 font-bold py-3 px-8 rounded-full hover:bg-indigo-100 transition duration-300">
            Book Your Photoshoot
          </Link>
        </div>
      </section>

      {/* About Section */}
      {/* <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image 
                src="/imag2.jpg" 
                alt="Traditional Half Saree Photography in UK" 
                width={600} 
                height={400}
                className="rounded-lg shadow-xl"
                priority
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Traditional Half Saree Photoshoots in UK</h2>
              <p className="text-gray-600 mb-4">
                Half saree, also known as 'Langa Voni' or 'Pavada Davani', is a beautiful South Indian traditional attire typically worn by teenage girls during special occasions. Our photography services specialize in capturing the elegance and cultural significance of this attire.
              </p>
              <p className="text-gray-600 mb-4">
                Whether you're looking for an outdoor photoshoot in London's iconic locations or a studio session in West Midlands, we bring professional expertise to create stunning images that preserve your cultural heritage.
              </p>
              <p className="text-gray-600">
                We serve clients across UK including Scotland, Yorkshire, and Northern Ireland, offering both traditional and contemporary styles of half saree photography.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Half Saree Photography Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image 
                src="/image1.jpg" 
                alt="Outdoor half saree photoshoot in London" 
                width={400} 
                height={600}
                className="w-full h-auto transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image 
                src="/pic1.jpg" 
                alt="Studio half saree photography UK" 
                width={400} 
                height={600}
                className="w-full h-auto transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image 
                src="/family.jpg" 
                alt="Family photoshoot with half saree dress" 
                width={400} 
                height={600}
                className="w-full h-auto transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery" className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition duration-300">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

       <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Half Saree Photography Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 relative">
                <Image 
                  src="/pic.jpg" 
                  alt="Studio Half Saree Photography" 
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-indigo-700">Studio Photoshoot</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Professional studio setup with traditional Indian props</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Multiple backdrop options (plain, themed, cultural)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Perfect for all weather conditions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Available across UK locations</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 relative">
                <Image 
                  src="/out.jpg" 
                  alt="Outdoor Half Saree Photoshoot" 
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-indigo-700">Outdoor Photoshoot</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Scenic locations across UK (parks, landmarks, urban)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Golden hour photography for magical lighting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Natural poses with traditional elements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Perfect for cultural events and celebrations</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 relative">
                <Image 
                  src="/family.jpg" 
                  alt="Family Half Saree Photography" 
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-indigo-700">Family Photoshoot</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Combine half saree with family portraits</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Traditional and contemporary poses</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Black & white options available</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Perfect for Christmas and special occasions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add this new Packages Section after the Services section */}
      <section id="packages" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Half Saree Photography Packages</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Affordable pricing options for every need. All packages include high-resolution edited images with print release.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>1 hour photoshoot</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>15 high-resolution edited images</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>1 outfit change</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Studio or outdoor location</span>
                  </li>
                  <li className="flex items-start text-gray-400">
                    <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>No makeup artist</span>
                  </li>
                  <li className="flex items-start text-gray-400">
                    <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>No printed photos</span>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <Link href="/contact" className="inline-block bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 w-full">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 border-2 border-indigo-500 relative">
              <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2 rotate-12">
                Most Popular
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
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>2 hour photoshoot</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>30 high-resolution edited images</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>2 outfit changes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Studio + outdoor locations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Professional makeup artist</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>5 printed 6x4 photos</span>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <Link href="/contact" className="inline-block bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 w-full">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

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
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>3 hour photoshoot</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>50 high-resolution edited images</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>3 outfit changes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Multiple locations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Professional makeup & hair styling</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>10 printed photos + 1 framed 8x10</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Online gallery with shareable link</span>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <Link href="/contact" className="inline-block bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 w-full">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

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


      {/* Locations Section */}
      <section id="locations" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Service Areas Across UK</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">London & Southeast</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Half saree photography London</li>
                <li>Outdoor locations in Royal Parks</li>
                <li>Studio sessions in Central London</li>
                <li>Cultural heritage locations</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">Midlands & North</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Half saree photography West Midlands</li>
                <li>Half saree photoshoot East Midlands</li>
                <li>Traditional Indian photography Yorkshire</li>
                <li>Urban and rural locations</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">Scotland & Northern Ireland</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Indian dress photography Scotland</li>
                <li>Saree photoshoot Northern Ireland</li>
                <li>Historic castle backgrounds</li>
                <li>Scenic highland locations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Process */}
      <section id="process" className="py-16 bg-indigo-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Your Photography Journey</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Here's what to expect when you work with us for your half saree photoshoot in UK
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-700 font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Initial Contact</h3>
              <p className="text-sm text-gray-600">You fill out our contact form and we'll respond within 24 hours to discuss your needs.</p>
            </div>
            
            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
              </svg>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-700 font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Consultation</h3>
              <p className="text-sm text-gray-600">We'll schedule a call or meeting to understand your vision, preferences, and event details.</p>
            </div>
            
            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
              </svg>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-700 font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Custom Proposal</h3>
              <p className="text-sm text-gray-600">You'll receive a tailored photography package with pricing and options for your event.</p>
            </div>
            
            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
              </svg>
            </div>
            
            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-700 font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-2">Booking Confirmation</h3>
              <p className="text-sm text-gray-600">Secure your date with a signed contract and deposit payment.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mt-4">
            {/* Step 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center md:col-start-2 md:col-span-1">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-700 font-bold">5</span>
              </div>
              <h3 className="font-semibold mb-2">Pre-Event Planning</h3>
              <p className="text-sm text-gray-600">Finalize shot lists, timelines, and any special requests before your big day.</p>
            </div>
            
            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
              </svg>
            </div>
            
            {/* Step 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-700 font-bold">6</span>
              </div>
              <h3 className="font-semibold mb-2">Event Day</h3>
              <p className="text-sm text-gray-600">Our professional photographers capture your special moments beautifully.</p>
            </div>
            
            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
              </svg>
            </div>
            
            {/* Step 7 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-700 font-bold">7</span>
              </div>
              <h3 className="font-semibold mb-2">Delivery</h3>
              <p className="text-sm text-gray-600">Receive your edited high-resolution photos within the promised timeframe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Half Saree Photoshoot?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Book your session today and preserve the beauty of Indian tradition with our professional photography services across UK.</p>
          <Link href="/contact" className="bg-white text-indigo-800 font-bold py-3 px-8 rounded-full hover:bg-indigo-100 transition duration-300 inline-block">
            Contact Us Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Your Photography</h3>
              <p className="text-gray-400">Capturing life's precious moments with artistic excellence across UK.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                <li><Link href="/gallery" className="text-gray-400 hover:text-white">Gallery</Link></li>
                <li><Link href="/packages" className="text-gray-400 hover:text-white">Packages</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/half-saree-photography" className="text-gray-400 hover:text-white">Half Saree Photography</Link></li>
                <li><Link href="/family-photography" className="text-gray-400 hover:text-white">Family Photography</Link></li>
                <li><Link href="/traditional-photography" className="text-gray-400 hover:text-white">Traditional Photography</Link></li>
                <li><Link href="/event-photography" className="text-gray-400 hover:text-white">Event Photography</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <address className="text-gray-400 not-italic">
                <p>123 Photography Studio</p>
                <p>London, UK</p>
                <p>Phone: +44 123 456 7890</p>
                <p>Email: info@yourphotography.com</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Your Photography. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}