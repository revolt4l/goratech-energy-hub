import { Shield, Cpu, Sun, Globe, PenTool, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: Sun, title: "Solar & Energy", desc: "Professional solar installation, inverter setup, and energy audits for homes and businesses." },
  { icon: Cpu, title: "AI & Automation", desc: "AI-powered tools, prompt engineering, and workflow automation to boost efficiency." },
  { icon: Globe, title: "Web & Digital", desc: "Modern website design, domain setup, and full digital presence management." },
  { icon: Headphones, title: "Virtual Assistance", desc: "Remote tech support and virtual assistance for your day-to-day business needs." },
  { icon: PenTool, title: "Design & Branding", desc: "Professional graphic design, branding, and visual identity for your business." },
  { icon: Shield, title: "Proposals & Docs", desc: "Expert proposal writing, technical documentation, and professional business reports." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            About <span className="text-gradient">GORATECH</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            GORATECH Power Hub is a trusted Solar, AI, and Digital Technology Solutions provider based in Nigeria. We help homes and businesses harness reliable solar energy, build a powerful online presence, automate workflows with AI, and streamline operations — all under one roof.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group cursor-default"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
