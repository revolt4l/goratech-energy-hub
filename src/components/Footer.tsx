import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <Link to="/" className="inline-flex items-center gap-2 font-display font-bold text-lg mb-3">
          <Zap className="h-5 w-5 text-primary" />
          <span className="text-foreground">GORATECH</span>
          <span className="text-primary">POWER HUB</span>
        </Link>
        <p className="text-muted-foreground text-sm mb-3">Solar, AI & Digital Technology Solutions in Nigeria</p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link to="/services" className="hover:text-foreground transition-colors">Services</Link>
          <Link to="/portfolio" className="hover:text-foreground transition-colors">Portfolio</Link>
          <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>
        <p className="text-muted-foreground/60 text-xs">© 2026 GORATECH POWER HUB. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
