import { Sun, Bot, CheckCircle2, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

const solarServices = [
  "Energy Audits",
  "Load Calculation & System Sizing",
  "On-grid, Off-grid & Hybrid Installation",
];

const aiServices = [
  "AI-Powered Energy Reports",
  "Business Automation",
  "AI Prompt Engineering",
  "Technical Documentation Support",
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
            End-to-end solar and tech solutions tailored for Nigerian homes and businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Solar */}
          <div className="rounded-xl border border-border bg-card p-8 glow-box">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Sun className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl">Solar Solutions</h3>
            </div>
            <ul className="space-y-4">
              {solarServices.map((s) => (
                <li key={s} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AI */}
          <div className="rounded-xl border border-border bg-card p-8 glow-box">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Bot className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-xl">AI & Automation</h3>
            </div>
            <ul className="space-y-4">
              {aiServices.map((s) => (
                <li key={s} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Audit & Sizing */}
          <div className="rounded-xl border border-border bg-card p-8 glow-box">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Calculator className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl">Solar System Audit & Sizing</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Get a professional audit of your energy needs. We calculate the right inverter, battery, and panel specifications for your property.
            </p>
            <Button className="w-full gap-2" asChild>
              <a href="https://revoltaudit.my.canva.site/" target="_blank" rel="noopener noreferrer">
                <Calculator className="h-4 w-4" />
                Run Free Solar Audit
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
