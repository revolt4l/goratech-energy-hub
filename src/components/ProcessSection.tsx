import { Search, PenTool, Monitor, Rocket, GitBranch } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Research & Discovery",
    description: "We start by understanding your energy needs, business goals, and constraints to define the perfect solution.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Wireframing & Prototyping",
    description: "We design the system architecture, create detailed layouts, and validate the approach before full execution.",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  {
    icon: Monitor,
    step: "03",
    title: "Visual Design & Build",
    description: "Our team builds the solution with precision — from hardware installation to digital development and integration.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Testing & Launch",
    description: "We rigorously test every component, ensure everything works flawlessly, then deploy and hand over with training.",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-card/20" />
      <div className="absolute inset-0 grid-pattern opacity-15" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-medium mb-6"
            style={{ background: "hsl(var(--primary) / 0.08)" }}>
            <GitBranch className="h-3 w-3" />
            How We Work
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            A structured, transparent approach that ensures every project is delivered on time and beyond expectations.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+26px)] right-[calc(12.5%+26px)] h-px bg-gradient-to-r from-primary/20 via-accent/30 to-green-400/20" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="relative"
              >
                <div className={`rounded-2xl border ${step.border} bg-card p-7 hover:border-opacity-60 transition-all duration-300 cursor-default card-shadow h-full flex flex-col`}>
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`h-[52px] w-[52px] rounded-xl ${step.bg} flex items-center justify-center`}>
                      <step.icon className={`h-6 w-6 ${step.color}`} />
                    </div>
                    <span className={`absolute -top-2 -right-2 text-xs font-display font-bold ${step.color} opacity-60`}>{step.step}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{step.description}</p>
                </div>

                {/* Animated dot on connecting line */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-[52px] -right-3 z-10">
                    <motion.div
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                      className={`w-6 h-6 rounded-full ${step.bg} border-2 ${step.border} flex items-center justify-center`}
                    >
                      <div className="w-2 h-2 rounded-full bg-current" style={{ color: "inherit" }} />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
