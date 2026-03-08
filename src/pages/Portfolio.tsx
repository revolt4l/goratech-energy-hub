import { Battery, Sun, Zap, ArrowRight, Globe, Bot, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { motion } from "framer-motion";

import portfolio3kva from "@/assets/portfolio-3kva.jpg";
import portfolio5kva from "@/assets/portfolio-5kva.jpg";
import portfolio10kva from "@/assets/portfolio-10kva.jpg";

const energyDesigns = [
  {
    title: "3kVA Home Backup System",
    type: "Residential",
    image: portfolio3kva,
    description:
      "Powers lights, fans, fridge, and TV — helping Nigerian homes reduce generator dependency and enjoy quiet, uninterrupted power.",
    equipment: [
      "3kVA Hybrid Inverter",
      "2× 200Ah Tubular Batteries",
      "6× 330W Monocrystalline Solar Panels",
    ],
  },
  {
    title: "Small Office Energy Solution",
    type: "Small Business",
    image: portfolio5kva,
    description:
      "Designed for offices needing reliable power for computers, printers, networking equipment, and lighting throughout the workday.",
    equipment: [
      "5kVA Hybrid Inverter",
      "4× 250Ah Lithium Batteries",
      "10× 330W Monocrystalline Solar Panels",
    ],
  },
  {
    title: "Shop / Retail Energy Setup",
    type: "Retail Shop",
    image: portfolio10kva,
    description:
      "A compact, efficient design for shops powering lighting, POS systems, and refrigeration units reliably during business hours.",
    equipment: [
      "2kVA Hybrid Inverter",
      "2× 150Ah Tubular Batteries",
      "4× 250W Monocrystalline Solar Panels",
    ],
  },
];

const digitalProjects = [
  {
    icon: Globe,
    title: "Goratech Power Hub Website",
    type: "Web Development",
    description:
      "This very website — designed, coded, and deployed from scratch using React, TypeScript, and Tailwind CSS. Features responsive design, smooth animations, and a contact form connected to a live database.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    icon: Bot,
    title: "Energy System Cost Calculator",
    type: "Interactive Tool",
    description:
      "An interactive tool to estimate solar system size and cost based on appliance usage and budget — simplifying the decision process for clients.",
    tech: ["Web Development", "JavaScript", "UX Design"],
  },
  {
    icon: BookOpen,
    title: 'Digital Guide: "Optimizing Home Energy Use"',
    type: "Content / Writing",
    description:
      "A comprehensive written guide with practical energy-saving tips for Nigerian homes — covering system types, usage habits, and cost optimization.",
    tech: ["Technical Writing", "Digital Content Creation"],
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
              This site and the projects showcased here were designed, built, and coded by me to demonstrate Goratech's energy, virtual, and web development expertise.
            </p>
            <p className="text-sm text-muted-foreground/80 italic max-w-lg mx-auto">
              Energy designs are examples to demonstrate our approach. Digital projects highlight real skills and tools.
            </p>
          </motion.div>

          {/* Energy System Designs */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-2xl sm:text-3xl font-bold mb-8 text-center"
          >
            Example Energy System <span className="text-gradient">Designs</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {energyDesigns.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Card className="h-full flex flex-col bg-card border-border overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <Badge variant="secondary" className="text-xs shrink-0">{item.type}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Equipment</p>
                    <ul className="space-y-2">
                      {item.equipment.map((eq) => {
                        const Icon = eq.toLowerCase().includes("batter") ? Battery : eq.toLowerCase().includes("panel") ? Sun : Zap;
                        return (
                          <li key={eq} className="flex items-start gap-2 text-sm text-foreground">
                            <Icon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            {eq}
                          </li>
                        );
                      })}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full gap-2" asChild>
                      <a href="https://wa.me/2348059712276" target="_blank" rel="noopener noreferrer">
                        Get a Custom Quote
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Digital & Virtual Projects */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl sm:text-3xl font-bold mb-8 text-center"
          >
            Digital & Virtual <span className="text-gradient">Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {digitalProjects.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <Card className="h-full flex flex-col bg-card border-border overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs">{item.type}</Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Technologies & Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <Badge key={t} variant="outline" className="text-xs">{t}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full gap-2" asChild>
                      <a href="https://wa.me/2348059712276" target="_blank" rel="noopener noreferrer">
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Portfolio;
