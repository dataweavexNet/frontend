import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Strip from '../components/Strip';
import ProductCards from '../components/ProductCards';
import FabricOverview from '../components/FabricOverview';
import FeatureImageSection from '../components/FeatureImageSection';
import Transformation from '../components/Transformation';
import Dashboard from '../components/Dashboard';
import AiSection from '../components/AiSection';
import Performance from '../components/Performance';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Faq from '../components/Faq';
import Contact from '../components/Contact';
import FinalCta from '../components/FinalCta';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Strip />
        <ProductCards />
        <FabricOverview />
        <FeatureImageSection />
        <Transformation />
        <Dashboard />
        <AiSection />
        <Performance />
        <Testimonials />
        <Features />
        <Pricing />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
