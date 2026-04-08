import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPandit from "@/assets/hero-pandit.jpg";

const HeroSection = () => (
  <section className="relative bg-primary overflow-hidden pt-24 md:pt-0">
    <div className="container flex flex-col md:flex-row items-center min-h-[80vh] md:min-h-screen gap-8 md:gap-12 py-12 md:py-0">
      {/* Left content */}
      <div className="flex-1 text-center md:text-left animate-fade-in z-10">
        <p className="text-accent font-sans text-sm font-semibold tracking-widest uppercase mb-4">
          Vedic Astrology · Kundli · Vastu · Numerology
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight text-balance">
          Trusted Astrology Guidance for Life's Important Decisions
        </h1>
        <p className="text-primary-foreground/70 font-sans text-base md:text-lg mt-4 max-w-lg mx-auto md:mx-0">
          Personalized Kundli readings, vastu &amp; numerology — honest guidance, practical solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center md:justify-start">
          <Button variant="gold" size="lg" asChild>
            <a href="tel:+919121878363">
              <Phone className="w-5 h-5" /> Call Now
            </a>
          </Button>
          <Button variant="navy-outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-primary" asChild>
            <a href="https://wa.me/919121878363?text=Hello%20I%27d%20like%20a%20kundli%20consultation" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" /> WhatsApp Now
            </a>
          </Button>
        </div>

        <p className="text-primary-foreground/50 font-sans text-xs mt-4">
          Immediate slots available. Confidential sessions via phone or video.
        </p>
        <div className="flex items-center gap-4 mt-6 justify-center md:justify-start text-accent/80 font-sans text-sm">
          <span>20,000+ clients served</span>
          <span className="w-1 h-1 rounded-full bg-accent/50" />
          <span>40+ years experience</span>
        </div>
      </div>

      {/* Right image */}
      <div className="flex-1 flex justify-center md:justify-end relative">
        <div className="relative w-full max-w-md lg:max-w-lg">
          <div className="absolute -inset-4 border-2 border-accent/20 rounded-lg" />
          <img
            src={heroPandit}
            alt="Trusted Indian pandit seated with kundli charts and brass lamp on wooden desk"
            width={768}
            height={960}
            className="rounded-lg shadow-2xl w-full h-auto object-cover relative z-10"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
