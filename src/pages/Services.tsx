import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <ServicesSection />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Services;
