import { Globe, LayoutDashboard, Bot, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  { icon: Globe, label: "Web Platforms", desc: "Modern, responsive websites and web applications built for impact." },
  { icon: LayoutDashboard, label: "Dashboards & UIs", desc: "Intuitive interfaces and admin panels that simplify operations." },
  { icon: Bot, label: "AI-Powered Tools", desc: "Intelligent automation and AI integrations for business workflows." },
  { icon: Workflow, label: "Digital Automation", desc: "Streamlined processes that save time and reduce manual effort." },
];

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
          {/* Cards column — left on this section for visual alternation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="grid grid-cols-2 gap-4 order-2 lg:order-1"
          >
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
                style={{
                  background:
                    "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))",
                }}
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
