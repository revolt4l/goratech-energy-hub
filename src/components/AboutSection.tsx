import { Shield, Cpu, Sun } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            About <span className="text-gradient">GORATECH</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            GORATECH POWER HUB combines Solar Engineering and AI Technology to deliver accurate energy audits, smart system sizing, and scalable power solutions. We don't just install solar — we engineer efficient systems built to last.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Sun, title: "Solar Engineering", desc: "Precision-engineered solar systems designed for Nigerian conditions and maximum output." },
            { icon: Cpu, title: "AI Technology", desc: "Smart automation and AI-powered reporting for intelligent energy management." },
            { icon: Shield, title: "Built to Last", desc: "Quality components and expert installations backed by data-driven design." },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
