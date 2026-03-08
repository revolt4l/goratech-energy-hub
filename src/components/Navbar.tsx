import { useState, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith("/#")) {
        const hash = href.slice(1); // e.g. "#about"
        if (location.pathname === "/") {
          // Already on home – just scroll
          e.preventDefault();
          document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
        } else {
          // Navigate to home, then scroll after render
          e.preventDefault();
          navigate("/");
          setTimeout(() => {
            document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
      setOpen(false);
    },
    [location.pathname, navigate]
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
          <Zap className="h-6 w-6 text-primary" />
          <span className="text-foreground">GORATECH</span>
          <span className="text-primary">POWER HUB</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) =>
            l.href === "/portfolio" ? (
              <Link key={l.href} to={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </Link>
            ) : (
              <a key={l.href} href={l.href} onClick={(e) => handleNavClick(e, l.href)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            )
          )}
          <Button size="sm" asChild>
            <a href="/#contact" onClick={(e) => handleNavClick(e, "/#contact")}>Get a Quote</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((l) =>
            l.href === "/portfolio" ? (
              <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
                {l.label}
              </Link>
            ) : (
              <a key={l.href} href={l.href} onClick={(e) => handleNavClick(e, l.href)} className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
                {l.label}
              </a>
            )
          )}
          <Button size="sm" className="w-full" asChild>
            <a href="/#contact" onClick={(e) => handleNavClick(e, "/#contact")}>Get a Quote</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
