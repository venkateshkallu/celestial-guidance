import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPandit from "@/assets/hero-pandit.jpg";

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src={heroPandit}
            alt="Portrait of trusted Vedic astrologer"
            loading="lazy"
            width={400}
            height={500}
            className="rounded-lg shadow-lg max-w-sm w-full object-cover border-2 border-accent/20"
          />
        </div>

        <div>
          <p className="text-accent font-sans text-sm font-semibold tracking-widest uppercase mb-2">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Four Decades of Trusted Vedic Guidance
          </h2>
          <div className="space-y-4 text-muted-foreground font-sans text-sm leading-relaxed">
            <p>
              With over 40 years of dedicated practice, our Panditji comes from a revered lineage of Vedic scholars. 
              Trained under traditional gurukul methods, he combines classical jyotish knowledge with a practical, modern approach.
            </p>
            <p>
              Every consultation begins with an exact kundli prepared from your birth time and location. 
              We give step-by-step advice in plain language — no jargon, no fear-based tactics. Just honest, actionable guidance.
            </p>
            <p>
              Your privacy and trust are paramount. All sessions are strictly confidential. 
              Over 20,000 clients across India and abroad have relied on our ethical, evidence-based readings.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button variant="gold" size="lg" asChild>
              <a href="tel:+919121878363">
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </Button>
            <Button variant="navy-outline" size="lg" asChild>
              <a href="https://wa.me/919121878363?text=Hello%20I%27d%20like%20to%20book%20a%20session" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" /> WhatsApp Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
