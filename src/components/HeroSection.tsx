import { ArrowRight, MessageCircle, Calculator, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 hero-overlay" />

      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
        >
          <Zap className="h-3.5 w-3.5" />
          Solar + AI + Digital Technology Solutions
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight"
        >
          Powering Businesses with{" "}
          <span className="text-gradient">Solar Energy</span>{" "}
          & Smart Digital Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          From solar installation to web design, AI automation, and business support — your all-in-one technology partner in Nigeria.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap"
        >
          <Button size="lg" className="gap-2 text-base px-8 h-12 shadow-lg shadow-primary/20" asChild>
            <a href="https://revoltaudit.my.canva.site/" target="_blank" rel="noopener noreferrer">
              <Calculator className="h-4 w-4" />
              Get a Free Energy Audit
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 text-base px-8 h-12" asChild>
            <a href="#contact">
              <ArrowRight className="h-4 w-4" />
              Request a Quote
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 text-base px-8 h-12 border-whatsapp/40 text-whatsapp hover:bg-whatsapp/10" asChild>
            <a href="https://wa.me/2348059712276" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              Contact on WhatsApp
            </a>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
