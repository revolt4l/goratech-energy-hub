import { Sun, Bot, Globe, Headphones, FileText, Palette, CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    icon: Sun,
    title: "Solar Installation & Inverter Setup",
    items: ["Energy Audits & Load Calculation", "On-grid, Off-grid & Hybrid Systems", "Inverter & Battery Installation"],
  },
  {
    icon: Globe,
    title: "Website Design & Domain Setup",
    items: ["Custom Website Development", "Domain Registration & Hosting", "SEO & Digital Presence"],
  },
  {
    icon: Bot,
    title: "AI Automation & Prompt Engineering",
    items: ["AI-Powered Business Tools", "Workflow Automation", "Custom AI Prompt Solutions"],
  },
  {
    icon: Headphones,
    title: "Virtual Assistance & Tech Support",
    items: ["Remote Administrative Support", "Technical Troubleshooting", "Business Process Management"],
  },
  {
    icon: FileText,
    title: "Proposal Writing & Documentation",
    items: ["Business Proposals & Bids", "Technical Documentation", "Professional Reports"],
  },
  {
    icon: Palette,
    title: "Graphic Design & Branding",
    items: ["Logo & Brand Identity", "Marketing Materials", "Social Media Graphics"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            End-to-end solar, digital, and business solutions tailored for Nigerian homes and businesses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="rounded-xl border border-border bg-card p-8 glow-box hover:border-primary/30 transition-colors cursor-default"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg">{s.title}</h3>
              </div>
              <ul className="space-y-4">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CAC Registration Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="rounded-xl border border-border bg-card p-8 glow-box text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                <ShieldCheck className="h-5 w-5 text-green-500" />
              </div>
              <h3 className="font-display font-semibold text-xl">CAC Registration & Certification Issuance</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-lg mx-auto">
              Register your business with the Corporate Affairs Commission (CAC) and obtain official certification. We handle the entire process so you can focus on growing your business.
            </p>
            <Button className="gap-2 bg-green-600 hover:bg-green-700 text-white" asChild>
              <a href="#contact">Register Now</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
