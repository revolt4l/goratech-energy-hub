import { Sun, Zap, ArrowRight, Globe, Bot, BookOpen, ExternalLink, Church, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { motion } from "framer-motion";

import tremoHero from "@/assets/tremo-hero.jpg";
import tremoSchedule from "@/assets/tremo-schedule.jpg";
import tremoContact from "@/assets/tremo-contact.jpg";

const solarPackages = [
  {
    title: "Tech Bro Solar Package",
    price: "₦1,100,000",
    system: "1–1.5kVA",
    powers: "Laptop, desktop, fan, WiFi router, 3–4 bulbs",
    components: [
      "2× 550W Solar Panels",
      "1× 1–1.5kVA Inverter",
      "1× 200Ah Battery",
      "Mounting & Wiring",
      "Safety Protection",
      "Full Installation",
    ],
  },
  {
    title: "Civil Servant Solar Package",
    price: "₦1,900,000",
    system: "3kVA",
    powers: "Fridge, TV, fan, 4–6 bulbs",
    components: [
      "4× 550W Solar Panels",
      "1× 3kVA Inverter",
      "2× 220Ah Batteries",
      "Mounting & Wiring",
      "Safety Protection",
      "Full Installation",
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
            Solar <span className="text-gradient">Packages</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            {solarPackages.map((pkg, i) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Card className="h-full flex flex-col bg-card border-border overflow-hidden shadow-md hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                  <CardHeader className="pb-3 text-center">
                    <Badge variant="secondary" className="text-xs self-center mb-3">{pkg.system} System</Badge>
                    <CardTitle className="text-xl mb-1">{pkg.title}</CardTitle>
                    <p className="text-3xl font-bold text-primary mt-2">{pkg.price}</p>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Powers</p>
                      <p className="text-sm text-foreground">{pkg.powers}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">What's Included</p>
                      <ul className="space-y-2">
                        {pkg.components.map((comp) => (
                          <li key={comp} className="flex items-start gap-2 text-sm text-foreground">
                            <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            {comp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full gap-2" asChild>
                      <a href="https://wa.me/2348059712276" target="_blank" rel="noopener noreferrer">
                        Request Installation
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Featured Client Project */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl sm:text-3xl font-bold mb-8 text-center"
          >
            Featured Client <span className="text-gradient">Project</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto mb-20"
          >
            <Card className="bg-card border-border overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Church className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">Web Development — Live Project</Badge>
                </div>
                <CardTitle className="text-2xl mb-2">TREM Oke Aro — Church Website</CardTitle>
                <p className="text-muted-foreground">
                  A fully responsive church website designed and developed for The Redeemed Evangelical Mission (TREM), Oke Aro, Akure. 
                  Built to provide an inviting online presence — featuring a welcoming hero section, weekly service schedule, 
                  contact details with Google Maps integration, and social media links. Designed for clarity, warmth, and easy navigation 
                  across all devices.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Role</p>
                  <p className="text-sm text-foreground">Full design & development — from concept to deployment</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Technology Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {["HTML", "CSS", "JavaScript", "Vercel"].map((t) => (
                      <Badge key={t} variant="outline" className="text-xs">{t}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Screenshots</p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { src: tremoHero, label: "Homepage Hero" },
                      { src: tremoSchedule, label: "Service Schedule" },
                      { src: tremoContact, label: "Contact & Map" },
                    ].map((img) => (
                      <div key={img.label} className="space-y-2">
                        <a href="https://tremokearo.vercel.app/" target="_blank" rel="noopener noreferrer" className="block aspect-video rounded-lg overflow-hidden border-2 border-border shadow-md hover:shadow-xl hover:border-primary/40 transition-all duration-300 group/img">
                          <img src={img.src} alt={`TREM Oke Aro — ${img.label}`} className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-105" loading="lazy" />
                        </a>
                        <p className="text-xs text-muted-foreground text-center">{img.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="gap-2" asChild>
                  <a href="https://tremokearo.vercel.app/" target="_blank" rel="noopener noreferrer">
                    View Live Site
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

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
