import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <a href="#" className="inline-flex items-center gap-2 font-display font-bold text-lg mb-3">
          <Zap className="h-5 w-5 text-primary" />
          <span className="text-foreground">GORATECH</span>
          <span className="text-primary">POWER HUB</span>
        </a>
        <p className="text-muted-foreground text-sm mb-4">Solar, AI & Digital Technology Solutions in Nigeria</p>
        <p className="text-muted-foreground/60 text-xs">© 2026 GORATECH POWER HUB. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
