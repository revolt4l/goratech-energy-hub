import { BarChart3, Leaf, Wrench, Lightbulb, Home } from "lucide-react";

const reasons = [
  { icon: BarChart3, text: "Accurate system design using data" },
  { icon: Leaf, text: "Reduced energy waste" },
  { icon: Wrench, text: "Long-lasting installations" },
  { icon: Lightbulb, text: "Technology-driven approach" },
  { icon: Home, text: "Built for Nigerian homes and businesses" },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient">Us</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {reasons.map((r) => (
            <div key={r.text} className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <r.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground font-medium">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
