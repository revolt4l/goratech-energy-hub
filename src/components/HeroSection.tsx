import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      {/* Primary radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% -5%, hsl(var(--primary) / 0.22) 0%, transparent 65%)",
        }}
      />
      {/* Secondary accent glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 45% 35% at 85% 60%, hsl(var(--accent) / 0.1) 0%, transparent 55%)",
        }}
      />

      {/* Subtle animated orb */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.14) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-1/3 right-1/5 w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--accent) / 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        {/* Eyebrow tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 text-primary text-xs font-semibold tracking-wider uppercase mb-10 backdrop-blur-sm"
          style={{ background: "hsl(var(--primary) / 0.07)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Goratech Power Hub
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] mb-6 tracking-tight"
        >
          <span className="text-gradient glow-text">Innovative Energy</span>
          <br />
          <span className="text-foreground">&amp; Digital Solutions</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Smart energy systems and cutting-edge digital platforms for homes and businesses.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.44 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Button
              size="lg"
              className="gap-2 text-base px-9 font-semibold rounded-xl btn-gradient border-0 shadow-lg"
              style={{ height: "52px" }}
              asChild
            >
              <Link to="/services">
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-base px-9 font-semibold rounded-xl border-border/70 hover:border-primary/50 hover:bg-primary/5 backdrop-blur-sm"
              style={{ height: "52px" }}
              asChild
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-10 mt-20 pt-8 border-t border-border/30"
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "3+", label: "Years Experience" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
