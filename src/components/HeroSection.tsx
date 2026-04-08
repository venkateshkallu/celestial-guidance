import { Phone, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroPandit from "@/assets/hero-pandit.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden particle-bg bg-background">
    {/* Radial golden glow behind image */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,hsla(42,85%,55%,0.12)_0%,transparent_70%)] pointer-events-none" />
    <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-[radial-gradient(circle,hsla(42,85%,55%,0.06)_0%,transparent_70%)] pointer-events-none" />

    <div className="container relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 pt-28 pb-16 md:py-0">
      {/* Left content */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="flex items-center gap-2 justify-center md:justify-start mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-accent font-sans text-xs font-semibold tracking-[0.3em] uppercase">
            Vedic Astrology · Numerology · Vastu
          </span>
          <Sparkles className="w-4 h-4 text-accent" />
        </motion.div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-balance">
          <span className="shimmer-text">Divine Guidance</span>
          <br />
          <span className="text-foreground">for Your Life's</span>
          <br />
          <span className="shimmer-text">Journey</span>
        </h1>

        <motion.p
          className="text-foreground/50 font-sans text-base md:text-lg mt-6 max-w-lg mx-auto md:mx-0 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          40+ years of Vedic wisdom. 20,000+ lives transformed. Let the stars
          reveal your true path to happiness, love, and prosperity.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 mt-8 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Button variant="gold" size="lg" className="animate-glow-pulse" asChild>
            <a href="tel:+919121878363">
              <Phone className="w-5 h-5" /> Free Consultation
            </a>
          </Button>
          <Button variant="navy-outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-background" asChild>
            <a href="https://wa.me/919121878363?text=Hello%20I%27d%20like%20a%20kundli%20consultation" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </a>
          </Button>
        </motion.div>

        <motion.div
          className="flex items-center gap-4 mt-8 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-8 h-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-accent text-xs font-bold">
                {["P", "R", "A", "V"][i - 1]}
              </div>
            ))}
          </div>
          <div className="text-foreground/40 font-sans text-sm">
            <span className="text-accent font-semibold">20,000+</span> clients served
            <span className="mx-2 text-accent/30">•</span>
            <span className="text-accent font-semibold">40+</span> years
          </div>
        </motion.div>
      </motion.div>

      {/* Right image */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end relative"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="relative w-full max-w-md lg:max-w-lg">
          {/* Glow ring */}
          <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-accent/10 blur-sm" />
          <div className="absolute -inset-1 rounded-xl border border-accent/20" />
          <img
            src={heroPandit}
            alt="Trusted Indian pandit seated with kundli charts and brass lamp on wooden desk"
            width={768}
            height={960}
            className="rounded-xl w-full h-auto object-cover relative z-10 shadow-[0_20px_60px_-15px_hsla(42,85%,55%,0.2)]"
          />
          {/* Floating badge */}
          <motion.div
            className="absolute -bottom-4 -left-4 z-20 bg-card border border-accent/30 rounded-lg px-4 py-3 shadow-xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-accent font-serif text-sm font-bold">✦ Verified Expert</p>
            <p className="text-foreground/50 font-sans text-xs">Since 1985</p>
          </motion.div>
        </div>
      </motion.div>
    </div>

    {/* Bottom gradient fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
  </section>
);

export default HeroSection;
