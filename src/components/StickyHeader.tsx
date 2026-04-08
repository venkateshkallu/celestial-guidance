import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-sm shadow-lg py-2"
          : "bg-primary py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-accent font-serif text-xl md:text-2xl font-bold tracking-wide">
            ✦ Jyotish Guru
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary-foreground/80 hover:text-accent transition-colors text-sm font-sans font-medium"
            >
              {link.label}
            </a>
          ))}
          <Button variant="gold" size="sm" asChild>
            <a href="tel:+919121878363">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-primary-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-primary border-t border-primary-foreground/10 px-4 pb-4" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-primary-foreground/80 hover:text-accent transition-colors font-sans"
            >
              {link.label}
            </a>
          ))}
          <Button variant="gold" size="sm" className="w-full mt-2" asChild>
            <a href="tel:+919121878363">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default StickyHeader;
