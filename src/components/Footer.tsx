import { Phone, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border font-sans text-sm py-12">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <p className="shimmer-text font-serif text-xl font-bold mb-3">🕉 Jyotish Guru</p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Trusted Vedic Astrology guidance for life's important decisions. 40+ years of experience serving 20,000+ clients worldwide.
          </p>
        </div>
        <div>
          <h4 className="text-accent font-serif font-semibold mb-3">Quick Links</h4>
          <div className="space-y-2">
            {["Home", "Services", "About", "Testimonials", "Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="block text-muted-foreground hover:text-accent transition-colors text-sm">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-accent font-serif font-semibold mb-3">Contact</h4>
          <div className="space-y-3">
            <a href="tel:+919121878363" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
              <Phone className="w-4 h-4" /> +91 91218 78363
            </a>
            <a href="https://wa.me/919121878363" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-6 text-center">
        <p className="text-muted-foreground/50 text-xs">
          © {new Date().getFullYear()} Jyotish Guru. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
