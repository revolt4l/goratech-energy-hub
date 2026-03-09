import { Code2, Palette, Globe, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const skills = [
  { icon: Code2, label: "Web Development", color: "text-primary", bg: "bg-primary/10" },
  { icon: Palette, label: "UI/UX Design", color: "text-accent", bg: "bg-accent/10" },
  { icon: Globe, label: "Digital Strategy", color: "text-orange-400", bg: "bg-orange-400/10" },
  { icon: Sparkles, label: "AI Integration", color: "text-primary", bg: "bg-primary/10" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 text-accent text-xs font-medium mb-6"
              style={{ background: "hsl(var(--accent) / 0.08)" }}>
              <Sparkles className="h-3 w-3" />
              About Goratech
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Powering Progress with <span className="text-gradient">Smart Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              GORATECH Power Hub is a trusted Solar, AI, and Digital Technology Solutions provider based in Nigeria. We help homes and businesses harness reliable solar energy, build a powerful online presence, automate workflows with AI, and streamline operations — all under one roof.
            </p>

            {/* Built-by-owner card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-xl border border-border bg-card/80 backdrop-blur-sm mb-8 cursor-default card-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold text-sm mb-1">Built In-House</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    This site was designed and built by me — web development &amp; digital skills included. Every pixel, every interaction, crafted with purpose.
                  </p>
                </div>
              </div>
            </motion.div>

            <Button className="gap-2 rounded-xl btn-gradient border-0" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Right: skill cards grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 cursor-default card-shadow group"
              >
                <div className={`h-12 w-12 rounded-xl ${skill.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className={`h-6 w-6 ${skill.color}`} />
                </div>
                <p className="font-display font-semibold text-sm">{skill.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
