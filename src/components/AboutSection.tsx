import { Shield, Cpu, Sun, Globe, PenTool, Headphones } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            About <span className="text-gradient">GORATECH</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            GORATECH POWER HUB helps businesses across Nigeria with reliable solar energy solutions and digital technology services. From powering your home with solar to building your online presence, automating workflows with AI, and supporting your business operations — we are your all-in-one technology partner.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Sun, title: "Solar & Energy", desc: "Professional solar installation, inverter setup, and energy audits for homes and businesses." },
            { icon: Cpu, title: "AI & Automation", desc: "AI-powered tools, prompt engineering, and workflow automation to boost efficiency." },
            { icon: Globe, title: "Web & Digital", desc: "Modern website design, domain setup, and full digital presence management." },
            { icon: Headphones, title: "Virtual Assistance", desc: "Remote tech support and virtual assistance for your day-to-day business needs." },
            { icon: PenTool, title: "Design & Branding", desc: "Professional graphic design, branding, and visual identity for your business." },
            { icon: Shield, title: "Proposals & Docs", desc: "Expert proposal writing, technical documentation, and professional business reports." },
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
