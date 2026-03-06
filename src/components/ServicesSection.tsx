import { Sun, Bot, Globe, Headphones, FileText, Palette, CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Sun,
    title: "Solar Installation & Inverter Setup",
    items: ["Energy Audits & Load Calculation", "On-grid, Off-grid & Hybrid Systems", "Inverter & Battery Installation"],
    color: "primary",
  },
  {
    icon: Globe,
    title: "Website Design & Domain Setup",
    items: ["Custom Website Development", "Domain Registration & Hosting", "SEO & Digital Presence"],
    color: "primary",
  },
  {
    icon: Bot,
    title: "AI Automation & Prompt Engineering",
    items: ["AI-Powered Business Tools", "Workflow Automation", "Custom AI Prompt Solutions"],
    color: "accent",
  },
  {
    icon: Headphones,
    title: "Virtual Assistance & Tech Support",
    items: ["Remote Administrative Support", "Technical Troubleshooting", "Business Process Management"],
    color: "primary",
  },
  {
    icon: FileText,
    title: "Proposal Writing & Documentation",
    items: ["Business Proposals & Bids", "Technical Documentation", "Professional Reports"],
    color: "accent",
  },
  {
    icon: Palette,
    title: "Graphic Design & Branding",
    items: ["Logo & Brand Identity", "Marketing Materials", "Social Media Graphics"],
    color: "primary",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            End-to-end solar, digital, and business solutions tailored for Nigerian homes and businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-card p-8 glow-box">
              <div className="flex items-center gap-3 mb-6">
                <div className={`h-10 w-10 rounded-lg bg-${s.color}/10 flex items-center justify-center`}>
                  <s.icon className={`h-5 w-5 text-${s.color}`} />
                </div>
                <h3 className="font-display font-semibold text-lg">{s.title}</h3>
              </div>
              <ul className="space-y-4">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className={`h-5 w-5 text-${s.color} shrink-0 mt-0.5`} />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
