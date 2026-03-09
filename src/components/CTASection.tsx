import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 55%, hsl(var(--primary) / 0.13) 0%, transparent 60%)",
        }}
      />
      <div className="absolute inset-0 grid-pattern opacity-15" />

      {/* Ambient orbs */}
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/5 -translate-y-1/2 w-56 h-56 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / 0.18) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 right-1/5 -translate-y-1/2 w-44 h-44 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(28 95% 60% / 0.18) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Top label */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 text-primary text-xs font-semibold tracking-wider uppercase mb-8"
            style={{ background: "hsl(var(--primary) / 0.07)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Ready to get started?
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Let's Build Your{" "}
            <span className="text-gradient">Custom Solution</span>
          </h2>

          <p className="text-muted-foreground text-lg sm:text-xl mb-12 max-w-lg mx-auto leading-relaxed">
            Explore our services or get in touch to design your custom solution — whether that's smart energy, a digital platform, or both.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                className="gap-2 text-base px-10 font-semibold rounded-xl btn-gradient border-0 shadow-lg"
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
                className="gap-2 text-base px-10 font-semibold rounded-xl border-border/70 hover:border-primary/50 hover:bg-primary/5"
                style={{ height: "56px" }}
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
