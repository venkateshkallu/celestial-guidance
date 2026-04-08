import { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-background/95 backdrop-blur-md shadow-[0_2px_20px_hsla(42,85%,55%,0.1)] py-2"
        : "bg-transparent py-4"
        }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo - left side */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="hidden md:inline text-2xl">🕉</span>
          <span className="shimmer-text font-serif text-xl md:text-2xl font-bold tracking-widest uppercase">
            Jyotish Guru
          </span>
        </a>

        {/* Desktop nav - right side */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-foreground/70 hover:text-accent transition-colors text-sm font-sans font-medium group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-3/4" />
            </a>
          ))}
          <div className="flex items-center gap-2 ml-4">
            <Button variant="gold" size="sm" asChild>
              <a href="tel:+919121878363">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </Button>
            <Button variant="navy-outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-background" asChild>
              <a href="https://wa.me/919121878363?text=Hello%20I%27d%20like%20a%20kundli%20consultation" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </Button>
          </div>
        </nav>

        {/* Mobile hamburger - right */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-t border-accent/10 px-4 pb-4 overflow-hidden"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-foreground/80 hover:text-accent transition-colors font-sans border-b border-border/30 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 mt-4">
              <Button variant="gold" size="sm" className="flex-1" asChild>
                <a href="tel:+919121878363">
                  <Phone className="w-4 h-4" /> Call
                </a>
              </Button>
              <Button variant="navy-outline" size="sm" className="flex-1 border-accent text-accent" asChild>
                <a href="https://wa.me/919121878363?text=Hello%20I%27d%20like%20a%20kundli%20consultation" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default StickyHeader;
