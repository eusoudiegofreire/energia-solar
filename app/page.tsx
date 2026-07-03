import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import HowItWorks from "@/components/HowItWorks";
import SavingsComparison from "@/components/SavingsComparison";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import EnergyWire from "@/components/EnergyWire";

export default function Home() {
  return (
    <main>
      <Hero />

      <div className="relative">
        <EnergyWire />
        <TrustStrip />
        <HowItWorks />
        <SavingsComparison />
        <Testimonials />
        <ServiceArea />
        <FinalCTA />
      </div>

      <Footer />
    </main>
  );
}
