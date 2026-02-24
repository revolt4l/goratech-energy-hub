import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image */}
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in-up">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
          Solar + AI Energy Solutions
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Solar Installation, System Audit &{" "}
          <span className="text-gradient">Reliable Power</span>{" "}
          Solutions in Nigeria
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          We design, audit, and install efficient solar systems for homes and businesses.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button size="lg" className="gap-2 text-base px-8" asChild>
            <a href="#contact">
              Book a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 text-base px-8 border-whatsapp/40 text-whatsapp hover:bg-whatsapp/10" asChild>
            <a href="https://wa.me/2348059712276" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
