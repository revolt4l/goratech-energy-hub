import { Sun, Bot, Laptop, Settings, CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const features = [
  {
    icon: Sun,
    title: "Solar Solutions",
    description: "End-to-end solar installation, energy audits, off-grid & hybrid systems tailored for Nigerian homes and businesses.",
    gradient: "from-orange-400/20 to-yellow-400/10",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-400/10",
    borderHover: "hover:border-orange-400/40",
    items: ["Energy Audits & Load Calculation", "On-grid, Off-grid & Hybrid Systems", "Inverter & Battery Installation"],
  },
  {
    icon: Bot,
    title: "AI Energy Management",
    description: "AI-powered tools, workflow automation, and intelligent energy monitoring systems that optimize your power usage.",
    gradient: "from-accent/20 to-primary/10",
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
    borderHover: "hover:border-accent/40",
    items: ["AI-Powered Business Tools", "Workflow Automation", "Custom AI Prompt Solutions"],
  },
  {
    icon: Laptop,
    title: "Digital Technology Tools",
    description: "Custom websites, web apps, SEO, branding, and full digital presence management for modern businesses.",
    gradient: "from-primary/20 to-cyan-400/10",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    borderHover: "hover:border-primary/40",
    items: ["Custom Website Design", "Domain & Hosting Setup", "SEO & Digital Presence"],
  },
  {
    icon: Settings,
    title: "Custom Power Management",
    description: "Bespoke power management systems designed around your specific energy needs, usage patterns, and budget.",
    gradient: "from-green-400/20 to-teal-400/10",
    iconColor: "text-green-400",
    iconBg: "bg-green-400/10",
    borderHover: "hover:border-green-400/40",
    items: ["Custom System Design", "Remote Monitoring", "Maintenance & Support"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-card/30" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

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
            <Zap className="h-3 w-3" />
            What We Offer
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Our Core <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            End-to-end energy, digital, and AI solutions tailored for Nigerian homes and businesses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {features.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl border border-border bg-card p-7 ${service.borderHover} transition-all duration-300 cursor-default flex flex-col card-shadow group`}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10 flex flex-col h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className={`h-13 w-13 rounded-xl ${service.iconBg} flex items-center justify-center mb-5`}
                  style={{ width: "52px", height: "52px" }}
                >
                  <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                </motion.div>

                <h3 className="font-display font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{service.description}</p>

                <ul className="space-y-2.5 mb-6">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-muted-foreground">
                      <CheckCircle2 className={`h-4 w-4 ${service.iconColor} shrink-0`} />
                      <span className="text-xs">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full gap-2 rounded-lg border-border/60 hover:border-primary/50 group/btn text-sm"
                  asChild
                >
                  <Link to="/contact">
                    Get a Quote
                    <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button size="lg" className="gap-2 rounded-xl btn-gradient border-0 px-10" style={{ height: "52px" }} asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
