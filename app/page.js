"use client";

import Link from 'next/link';
import HeroImageShow from './componets/heroimgshow';
import NavBar from './componets/NavBar';
import Plans from './componets/plans';
import Gallery from './componets/Gallery';
import Services from './componets/Services';
import Locations from './componets/Locations';
import Contact from './componets/Contact';
import Footer from './componets/footer';
import WhyChooseUs from './componets/About';


export default function HalfSareePhotography() {

  return (
    <div className="min-h-screen bg-gray-50">
           
           <NavBar/>
           <HeroImageShow/>
        <Gallery/>
        <Services/>
        <Plans/>
        <Locations/>
        <WhyChooseUs/>
        <Contact/>
      {/* CTA Section */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Half Saree Photoshoot?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Book your session today and preserve the beauty of Indian tradition with our professional photography services across UK.</p>
          <Link href="/#Contact" className="bg-white text-indigo-800 font-bold py-3 px-8 rounded-full hover:bg-indigo-100 transition duration-300 inline-block">
            Contact Us Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}