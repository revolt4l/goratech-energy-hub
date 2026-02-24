import { Calculator, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolarAuditSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
          <Calculator className="h-4 w-4" />
          Free Tool
        </div>

        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          Free Solar System <span className="text-gradient">Audit & Sizing Tool</span>
        </h2>

        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
          Calculate the right inverter, battery, and panel requirements for your home or business — completely free. Get an instant estimate before speaking with our team.
        </p>

        <Button size="lg" className="gap-2 text-base px-10" asChild>
          <a href="https://revoltaudit.my.canva.site/" target="_blank" rel="noopener noreferrer">
            Run Free Solar Audit
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default SolarAuditSection;
