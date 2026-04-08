const Footer = () => (
  <footer className="bg-foreground text-background/60 font-sans text-sm py-10">
    <div className="container text-center space-y-3">
      <p className="text-accent font-serif text-lg font-bold">✦ Jyotish Guru</p>
      <p>Trusted Vedic Astrology · Kundli · Vastu · Numerology</p>
      <p>Phone: <a href="tel:+919121878363" className="hover:text-accent transition-colors">+91 91218 78363</a></p>
      <p className="text-background/30 text-xs mt-4">
        © {new Date().getFullYear()} Jyotish Guru. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
