import { BarChart3, Leaf, Wrench, Lightbulb, Home } from "lucide-react";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient">Us</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.text}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors cursor-default"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <r.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground font-medium">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
