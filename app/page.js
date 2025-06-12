"use client";
import HeroImageShow from './componets/heroimgshow';
import NavBar from './componets/NavBar';
import Plans from './componets/plans';
import Gallery from './componets/Gallery';
import Services from './componets/Services';
import Contact from './componets/Contact';
import Footer from './componets/footer';
import WhyChooseUs from './componets/WhyChooseUs';
import HalfSareeHighlightSection from './componets/HalfSareeHighlightSection';
import WhyWeExcel from './componets/WhyWeExcel';
import PricesareJustification from './componets/PricesareJustification';
import PricingGrid from './componets/PricingGrid';
import ScrollToTop from './componets/ScrollToTop';

export default function HalfSareePhotography() {
  return (
    <div >
      <NavBar />
      <HeroImageShow />
      <WhyChooseUs />
      <HalfSareeHighlightSection />
      <WhyWeExcel />
      <PricingGrid />
      <Plans />
      <PricesareJustification />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
      <ScrollToTop/>
    </div>
  );
}
