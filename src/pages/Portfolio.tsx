import { Battery, Sun, Zap, ArrowRight } from "lucide-react";
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

const portfolioItems = [
  {
    title: "3kVA Home System",
    type: "Residential",
    image: portfolio3kva,
    description:
      "Perfect for powering lights, fans, TV, and a small fridge. Ideal for Nigerian homes looking to cut generator costs and enjoy uninterrupted power.",
    equipment: [
      "3.5kVA Hybrid Inverter",
      "2× 200Ah Tubular Batteries",
      "4× 300W Monocrystalline Solar Panels",
    ],
  },
  {
    title: "5kVA Family System",
    type: "Residential",
    image: portfolio5kva,
    description:
      "Designed for medium-sized households running AC units, washing machines, and multiple appliances. Reliable 24/7 power with zero noise.",
    equipment: [
      "5kVA Hybrid Inverter",
      "4× 200Ah Lithium Batteries",
      "8× 400W Monocrystalline Solar Panels",
    ],
  },
  {
    title: "10kVA Business System",
    type: "Small Business",
    description:
      "Built for shops, offices, and small businesses that need consistent power for computers, printers, freezers, and lighting throughout the day.",
    equipment: [
      "10kVA Hybrid Inverter",
      "8× 200Ah Lithium Batteries",
      "16× 400W Monocrystalline Solar Panels",
    ],
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
              Our Solar <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explore our most popular solar system designs — built for Nigerian homes and businesses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Card className="h-full flex flex-col bg-card border-border overflow-hidden">
                  {/* Placeholder image */}
                  <div className="aspect-video bg-secondary flex items-center justify-center">
                    <Sun className="h-16 w-16 text-primary/40" />
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <Badge variant="secondary" className="text-xs shrink-0">
                        {item.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Equipment
                    </p>
                    <ul className="space-y-2">
                      {item.equipment.map((eq) => {
                        const Icon = eq.toLowerCase().includes("batter")
                          ? Battery
                          : eq.toLowerCase().includes("panel")
                          ? Sun
                          : Zap;
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
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Portfolio;
