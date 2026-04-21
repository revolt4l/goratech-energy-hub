import { Sun, Battery, Zap, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const highlights = [
  { icon: Sun, label: "Solar Installations", desc: "Residential & commercial on-grid and off-grid systems." },
  { icon: Battery, label: "Energy Storage", desc: "Inverter and battery solutions for reliable backup power." },
  { icon: Zap, label: "Energy Audits", desc: "Load analysis and efficiency optimization for your property." },
  { icon: Activity, label: "Power Management", desc: "Remote monitoring and maintenance for long-term reliability." },
];

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

            {/* Solar Package Cards */}
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {/* Tech Bro Package */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="rounded-2xl border-2 border-yellow-500/30 p-6 flex flex-col gap-4 card-shadow group cursor-default transition-all duration-300 hover:border-yellow-500/60"
                style={{ background: "linear-gradient(135deg, hsl(45 95% 15%) 0%, hsl(28 95% 10%) 100%)" }}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "hsl(43 95% 56% / 0.15)" }}
                  >
                    <Sun className="h-6 w-6 text-yellow-400" />
                  </div>
                  <span
                    className="text-xl font-bold"
                    style={{ color: "hsl(43 95% 56%)" }}
                  >
                    ₦1,100,000
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">Tech Bro Solar Package</h3>
                  <p className="text-xs text-muted-foreground mb-3">1–1.5kVA System</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Powers: laptop, desktop, fan, WiFi router, 3–4 bulbs
                  </p>
                </div>
                <Button
                  size="sm"
                  className="w-full gap-2 text-sm font-semibold rounded-xl"
                  style={{
                    background: "linear-gradient(135deg, hsl(43 95% 56%), hsl(28 95% 60%))",
                    color: "hsl(224 40% 5%)",
                  }}
                  onClick={() => window.open("https://wa.me/2348059712276?text=I'm%20interested%20in%20the%20Tech%20Bro%20Solar%20Package%20(%E2%82%A61,100,000)", "_blank")}
                >
                  Request Installation
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>

              {/* Civil Servant Package */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="rounded-2xl border-2 border-yellow-500/30 p-6 flex flex-col gap-4 card-shadow group cursor-default transition-all duration-300 hover:border-yellow-500/60"
                style={{ background: "linear-gradient(135deg, hsl(45 95% 15%) 0%, hsl(28 95% 10%) 100%)" }}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "hsl(43 95% 56% / 0.15)" }}
                  >
                    <Sun className="h-6 w-6 text-yellow-400" />
                  </div>
                  <span
                    className="text-xl font-bold"
                    style={{ color: "hsl(43 95% 56%)" }}
                  >
                    ₦1,900,000
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">Civil Servant Solar Package</h3>
                  <p className="text-xs text-muted-foreground mb-3">3kVA System</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Powers: fridge, TV, fan, 4–6 bulbs
                  </p>
                </div>
                <Button
                  size="sm"
                  className="w-full gap-2 text-sm font-semibold rounded-xl"
                  style={{
                    background: "linear-gradient(135deg, hsl(43 95% 56%), hsl(28 95% 60%))",
                    color: "hsl(224 40% 5%)",
                  }}
                  onClick={() => window.open("https://wa.me/2348059712276?text=I'm%20interested%20in%20the%20Civil%20Servant%20Solar%20Package%20(%E2%82%A61,900,000)", "_blank")}
                >
                  Request Installation
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolarEnergySection;
