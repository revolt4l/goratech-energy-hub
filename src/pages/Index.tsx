import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolarEnergySection from "@/components/SolarEnergySection";
import SolarAuditSection from "@/components/SolarAuditSection";
import TechDigitalSection from "@/components/TechDigitalSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SolarEnergySection />
      <SolarAuditSection />
      <TechDigitalSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
