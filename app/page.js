// "use client";

// import Link from 'next/link';
// import HeroImageShow from './componets/heroimgshow';
// import NavBar from './componets/NavBar';
// import Plans from './componets/plans';
// import Gallery from './componets/Gallery';
// import Services from './componets/Services';
// import Locations from './componets/Locations';
// import Contact from './componets/Contact';
// import Footer from './componets/footer';
// import WhyChooseUs from './componets/About';


// export default function HalfSareePhotography() {

//   return (
//     <div className="min-h-screen bg-gray-50">
           
//            <NavBar/>
//            <HeroImageShow/>
//         <Gallery/>
//         <Services/>
//         <Plans/>
//         <Locations/>
//         <WhyChooseUs/>
//         <Contact/>
//       {/* CTA Section */}
//       <section className="py-16 bg-green-900 text-white">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Half Saree Photoshoot?</h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">Book your session today and preserve the beauty of Indian tradition with our professional photography services across UK.</p>
//           <Link href="/#Contact" className="bg-white text-green-800 font-bold py-3 px-8 rounded-full hover:bg-green-100 transition duration-300 inline-block">
//             Contact Us Now
//           </Link>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer/>
//     </div>
//   );
// }









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
import HalfSareeHighlightSection from './componets/HalfSareeHighlightSection';
import WhyWeExcel from './componets/WhyWeExcel';
import PricesareJustification from './componets/PricesareJustification';

export default function HalfSareePhotography() {
  return (
    <div>
      <NavBar />
      <HeroImageShow />
      <HalfSareeHighlightSection/>
      <WhyWeExcel/>
      <Plans/>
      <PricesareJustification/>
       <Services />
      <Gallery />
      <Locations />
      <WhyChooseUs />
  
      <Contact />

      {/* CTA Section */}
      <section className="py-5 bg-gradient-to-t from-green-900 to-green-700 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-xl md:text-xl font-bold mb-4 animate-fade-in-up">
            Ready for Your Half Saree Photoshoot?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Book your session today and celebrate tradition with vibrant, professional half saree photography across the UK.
          </p>
          {/* <Link
  href="/#Contact"
  className="fixed bottom-6 right-6 z-50 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full shadow-lg transition duration-300 ease-in-out"
>
  Book Now
</Link> */}
        </div>
      </section>

      <Footer />
    </div>
  );
}


