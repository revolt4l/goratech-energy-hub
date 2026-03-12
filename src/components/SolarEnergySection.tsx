import { Sun, Battery, Zap, Activity, Check } from "lucide-react";
import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const highlights = [
  { icon: Sun, label: "Solar Installations", desc: "Residential & commercial on-grid and off-grid systems." },
  { icon: Battery, label: "Energy Storage", desc: "Inverter and battery solutions for reliable backup power." },
  { icon: Zap, label: "Energy Audits", desc: "Load analysis and efficiency optimization for your property." },
  { icon: Activity, label: "Power Management", desc: "Remote monitoring and maintenance for long-term reliability." },
];

// Animated SVG sun with rotating rays
const AnimatedSun = () => {
  const [angle, setAngle] = useState(0);
  useAnimationFrame((t) => setAngle(t * 0.025));

  const rays = Array.from({ length: 8 }, (_, i) => {
    const a = (i / 8) * 360 + angle;
    const rad = (a * Math.PI) / 180;
    const r1 = 38, r2 = 50;
    return {
      x1: 60 + r1 * Math.cos(rad),
      y1: 60 + r1 * Math.sin(rad),
      x2: 60 + r2 * Math.cos(rad),
      y2: 60 + r2 * Math.sin(rad),
    };
  });

  // Energy ring pulse
  const pulseRings = [1, 2, 3];

  return (
    <div className="relative flex items-center justify-center w-full h-full select-none pointer-events-none">
      <svg viewBox="0 0 120 120" className="w-48 h-48 sm:w-56 sm:h-56">
        {/* Pulse rings */}
        {pulseRings.map((ring) => (
          <motion.circle
            key={ring}
            cx="60" cy="60"
            r={28 + ring * 10}
            fill="none"
            stroke="hsl(28 95% 60%)"
            strokeWidth="0.8"
            initial={{ opacity: 0.3, scale: 1 }}
            animate={{ opacity: [0.3, 0, 0.3], scale: [1, 1.15, 1] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              delay: ring * 0.7,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "60px 60px" }}
          />
        ))}

        {/* Rotating rays */}
        {rays.map((r, i) => (
          <line
            key={i}
            x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2}
            stroke="hsl(43 95% 56%)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeOpacity="0.85"
          />
        ))}

        {/* Sun core glow */}
        <circle cx="60" cy="60" r="22" fill="hsl(28 95% 60% / 0.18)" />
        <circle cx="60" cy="60" r="16" fill="hsl(28 95% 60% / 0.35)" />
        {/* Sun face */}
        <circle cx="60" cy="60" r="12" fill="hsl(43 95% 60%)" />
        <circle cx="60" cy="60" r="8" fill="hsl(28 95% 65%)" />
      </svg>

      {/* Floating energy bolt */}
      <motion.div
        className="absolute bottom-4 right-4 text-orange-400"
        animate={{ y: [-4, 4, -4], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Zap className="h-6 w-6" fill="currentColor" />
      </motion.div>
    </div>
  );
};

const SolarEnergySection = () => {
  const sectionRef = useRef(null);

  return (
    <section id="solar" className="py-28 relative overflow-hidden" ref={sectionRef}>
      {/* Warm ambient background */}
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 15% 50%, hsl(28 95% 60% / 0.08) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 85% 50%, hsl(214 100% 60% / 0.06) 0%, transparent 55%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
          >
            {/* Label */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-400/30 text-orange-400 text-xs font-semibold tracking-wider uppercase mb-6"
              style={{ background: "hsl(28 95% 60% / 0.08)" }}
            >
              <Sun className="h-3 w-3" />
              Solar &amp; Energy
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Solar &amp;{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, hsl(28 95% 60%), hsl(43 95% 56%))",
                }}
              >
                Energy Solutions
              </span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              At Goratech, we deliver smart solar and energy solutions designed to help homes and
              businesses save energy, increase reliability, and optimize power management. From
              installations to energy efficiency systems, our solar solutions address real-world
              energy needs.
            </p>

            {/* Decorative bar */}
            <div className="flex items-center gap-3">
              <div
                className="h-1 w-16 rounded-full"
                style={{ background: "linear-gradient(90deg, hsl(28 95% 60%), hsl(43 95% 56%))" }}
              />
              <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
                Powering a better tomorrow
              </span>
            </div>
          </motion.div>

          {/* Right column: animated sun + cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Animated sun visual */}
            <div
              className="rounded-2xl border border-orange-400/15 flex items-center justify-center py-6 relative overflow-hidden"
              style={{ background: "hsl(28 95% 60% / 0.04)" }}
            >
              <AnimatedSun />
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="rounded-2xl border border-border bg-card p-5 flex flex-col gap-3 card-shadow group cursor-default transition-all duration-300 hover:border-orange-400/30"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "hsl(28 95% 60% / 0.1)" }}
                  >
                    <item.icon className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-1">{item.label}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolarEnergySection;
