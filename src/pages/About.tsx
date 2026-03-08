import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <AboutSection />
        <WhyChooseUs />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default About;
