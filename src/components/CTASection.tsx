import { ArrowRight, MessageCircle, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, hsl(214 100% 60% / 0.12) 0%, transparent 60%)",
        }}
      />

      {/* Animated decorative orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(262 83% 68% / 0.2) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(28 95% 60% / 0.2) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-8 mx-auto"
          >
            <Zap className="h-8 w-8 text-primary" />
          </motion.div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Ready to{" "}
            <span className="text-gradient">Elevate</span> Your
            <br />
            Energy Solutions?
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
            Let's design a custom solution that powers your home or business efficiently, reliably, and intelligently.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                className="gap-2 text-base px-10 font-semibold rounded-xl btn-gradient border-0"
                style={{ height: "56px" }}
                asChild
              >
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-base px-10 font-semibold rounded-xl border-border/80 hover:border-primary/50 hover:bg-primary/5"
                style={{ height: "56px" }}
                asChild
              >
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-base px-10 font-semibold rounded-xl border-whatsapp/30 text-whatsapp hover:bg-whatsapp/10 hover:border-whatsapp/50"
                style={{ height: "56px" }}
                asChild
              >
                <a href="https://wa.me/2348059712276" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
