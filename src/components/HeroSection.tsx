import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

// Placeholder Spline scene — swap this URL with your own scene
const SPLINE_SCENE_URL =
  "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Spotlight radials */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 25% 0%, hsl(var(--primary) / 0.18) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 80% 70%, hsl(var(--accent) / 0.10) 0%, transparent 55%)",
        }}
      />

      {/* Animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-[5%] w-[280px] h-[280px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--accent) / 0.10) 0%, transparent 70%)",
        }}
      />

      {/* ── Content grid ── */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* ── LEFT: Text card ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6 lg:pr-4"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-primary/30 bg-primary/10 text-primary">
                <Zap className="h-3.5 w-3.5" />
                Innovative Solutions
              </span>
            </motion.div>

            {/* Brand heading */}
            <h1
              className="font-display font-extrabold leading-[0.95] tracking-tight uppercase"
              style={{
                fontSize: "clamp(2.4rem, 6vw, 5.5rem)",
                filter:
                  "drop-shadow(0 0 14px hsl(var(--primary) / 0.20)) drop-shadow(0 0 28px hsl(var(--accent) / 0.12))",
              }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="block text-gradient"
              >
                GORATECH
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block text-foreground"
              >
                POWER HUB
              </motion.span>
            </h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              Smart energy systems &amp; cutting-edge digital platforms engineered
              for homes and businesses.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-start gap-4 pt-2"
            >
              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  className="gap-2 text-base px-8 font-semibold rounded-xl btn-gradient border-0 shadow-lg"
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
                  className="gap-2 text-base px-8 font-semibold rounded-xl border-border/70 hover:border-primary/50 hover:bg-primary/5 backdrop-blur-sm"
                  style={{ height: "52px" }}
                  asChild
                >
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="flex flex-wrap gap-8 pt-6 border-t border-border/30"
            >
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "3+", label: "Years Experience" },
                { value: "24/7", label: "Support Available" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: 3D Spline scene ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative w-full aspect-square max-h-[600px] lg:max-h-none lg:h-[70vh] rounded-2xl overflow-hidden border border-border/30 bg-card/40 backdrop-blur-sm"
            style={{
              boxShadow:
                "0 0 60px -15px hsl(var(--primary) / 0.15), 0 0 30px -10px hsl(var(--accent) / 0.10)",
            }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/40 rounded-tl-2xl pointer-events-none z-10" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent/40 rounded-br-2xl pointer-events-none z-10" />

            <Suspense
              fallback={
                <div className="flex items-center justify-center w-full h-full">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-10 h-10 border-2 border-primary/30 border-t-primary rounded-full"
                  />
                </div>
              }
            >
              <Spline
                scene={SPLINE_SCENE_URL}
                className="w-full h-full"
              />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
