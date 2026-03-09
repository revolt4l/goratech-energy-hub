import { Globe, LayoutDashboard, Bot, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  { icon: Globe, label: "Web Platforms", desc: "Modern, responsive websites and web applications built for impact." },
  { icon: LayoutDashboard, label: "Dashboards & UIs", desc: "Intuitive interfaces and admin panels that simplify operations." },
  { icon: Bot, label: "AI-Powered Tools", desc: "Intelligent automation and AI integrations for business workflows." },
  { icon: Workflow, label: "Digital Automation", desc: "Streamlined processes that save time and reduce manual effort." },
];

// Animated circuit / dashboard SVG
const AnimatedCircuit = () => {
  // Node positions for the circuit
  const nodes = [
    { x: 20, y: 30 }, { x: 60, y: 20 }, { x: 100, y: 35 },
    { x: 30, y: 65 }, { x: 70, y: 60 }, { x: 110, y: 70 },
    { x: 20, y: 90 }, { x: 85, y: 90 },
  ];
  const edges = [
    [0, 1], [1, 2], [0, 3], [1, 4], [2, 5],
    [3, 4], [4, 5], [3, 6], [5, 7], [4, 7],
  ];

  // Dashboard bars (mini chart)
  const bars = [
    { x: 138, height: 30, delay: 0 },
    { x: 150, height: 48, delay: 0.15 },
    { x: 162, height: 22, delay: 0.3 },
    { x: 174, height: 56, delay: 0.45 },
    { x: 186, height: 38, delay: 0.6 },
  ];

  return (
    <div className="relative flex items-center justify-center w-full h-full select-none pointer-events-none">
      <svg viewBox="0 0 220 120" className="w-full max-w-xs sm:max-w-sm">
        {/* Circuit edges */}
        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x * 1.1} y1={nodes[a].y}
            x2={nodes[b].x * 1.1} y2={nodes[b].y}
            stroke="hsl(214 100% 60%)"
            strokeWidth="1"
            strokeOpacity="0.35"
            strokeDasharray="4 3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1.2, delay: i * 0.08, ease: "easeOut" }}
          />
        ))}

        {/* Circuit nodes */}
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x * 1.1} cy={n.y}
            r="3.5"
            fill="hsl(214 100% 60%)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.3, 1], opacity: [0, 1, 0.85] }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.09, ease: "backOut" }}
            style={{ transformOrigin: `${n.x * 1.1}px ${n.y}px` }}
          />
        ))}

        {/* Travelling signal dot */}
        <motion.circle
          r="3"
          fill="hsl(262 83% 68%)"
          animate={{
            cx: [22, 66, 110, 77, 121, 33, 22],
            cy: [30, 20, 35, 60, 70, 65, 30],
            opacity: [0, 1, 1, 1, 1, 1, 0],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 1 }}
        />

        {/* Divider */}
        <line x1="128" y1="10" x2="128" y2="110" stroke="hsl(214 100% 60% / 0.12)" strokeWidth="1" />

        {/* Mini dashboard panel */}
        <rect x="132" y="8" width="84" height="104" rx="6"
          fill="hsl(224 36% 9% / 0.8)" stroke="hsl(214 100% 60% / 0.18)" strokeWidth="1" />

        {/* Dashboard header dots */}
        {[0, 1, 2].map((d) => (
          <circle key={d} cx={140 + d * 8} cy="17" r="2.5"
            fill={d === 0 ? "hsl(0 80% 60%)" : d === 1 ? "hsl(43 95% 56%)" : "hsl(142 70% 45%)"} />
        ))}

        {/* Bar chart */}
        {bars.map((b, i) => (
          <motion.rect
            key={i}
            x={b.x} y={80 - b.height} width="8" rx="2"
            fill="hsl(214 100% 60%)"
            fillOpacity="0.7"
            initial={{ height: 0, y: 80 }}
            animate={{ height: b.height, y: 80 - b.height }}
            transition={{ duration: 0.7, delay: 1.2 + b.delay, ease: "backOut" }}
          />
        ))}

        {/* Line graph */}
        <motion.polyline
          points="138,55 150,42 162,58 174,35 186,48"
          fill="none"
          stroke="hsl(262 83% 68%)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ duration: 1.2, delay: 2, ease: "easeOut" }}
        />

        {/* Blinking cursor */}
        <motion.rect
          x="138" y="95" width="40" height="6" rx="2"
          fill="hsl(214 100% 60%)"
          fillOpacity="0.25"
          animate={{ opacity: [0.25, 0.6, 0.25] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
        <motion.rect
          x="138" y="95" width="14" height="6" rx="2"
          fill="hsl(214 100% 60%)"
          fillOpacity="0.8"
          animate={{ opacity: [0.8, 0.2, 0.8] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      </svg>
    </div>
  );
};

const TechDigitalSection = () => {
  return (
    <section id="tech" className="py-28 relative overflow-hidden">
      {/* Distinct cool-toned background */}
      <div className="absolute inset-0" style={{ background: "hsl(var(--card) / 0.5)" }} />
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 85% 50%, hsl(214 100% 60% / 0.1) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 15% 50%, hsl(262 83% 68% / 0.07) 0%, transparent 55%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column: animated circuit + cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            {/* Animated circuit visual */}
            <div
              className="rounded-2xl border border-primary/10 flex items-center justify-center py-6 px-4 relative overflow-hidden"
              style={{ background: "hsl(var(--primary) / 0.03)" }}
            >
              <AnimatedCircuit />
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
                  className="rounded-2xl border border-border bg-card p-5 flex flex-col gap-3 card-shadow group cursor-default transition-all duration-300 hover:border-primary/30"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "hsl(var(--primary) / 0.1)" }}
                  >
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-1">{item.label}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="order-1 lg:order-2"
          >
            {/* Label */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-semibold tracking-wider uppercase mb-6"
              style={{ background: "hsl(var(--primary) / 0.08)" }}
            >
              <Globe className="h-3 w-3" />
              Digital &amp; Technology
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Digital &amp;{" "}
              <span className="text-gradient">Technology Solutions</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              Beyond energy, Goratech builds modern digital platforms — including web interfaces,
              dashboards, and automation tools. These solutions simplify management, improve user
              experience, and bring technology to everyday operations.
            </p>

            {/* Decorative bar */}
            <div className="flex items-center gap-3">
              <div
                className="h-1 w-16 rounded-full"
                style={{ background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))" }}
              />
              <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
                Building the digital future
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechDigitalSection;
