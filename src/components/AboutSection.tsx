import { Phone, MessageCircle, Shield, Eye, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroPandit from "@/assets/hero-pandit.jpg";

const FEATURES = [
  { icon: BookOpen, text: "Traditional Gurukul-trained Vedic scholar" },
  { icon: Eye, text: "Precise birth chart analysis — no jargon" },
  { icon: Shield, text: "100% confidential sessions" },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-secondary relative overflow-hidden">
    <div className="absolute inset-0 radial-glow pointer-events-none" />
    <div className="container relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-accent/15 via-transparent to-accent/5 blur-sm" />
            <img
              src={heroPandit}
              alt="Portrait of trusted Vedic astrologer"
              loading="lazy"
              width={400}
              height={500}
              className="rounded-xl shadow-2xl max-w-sm w-full object-cover relative z-10 border border-accent/10"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accent font-sans text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gold-text">Four Decades</span>{" "}
            <span className="text-foreground">of Trusted Vedic Guidance</span>
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
          </div>

          <div className="mt-6 space-y-3">
            {FEATURES.map((f) => (
              <div key={f.text} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <f.icon className="w-4 h-4 text-accent" />
                </div>
                <span className="text-foreground/70 font-sans text-sm">{f.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button variant="gold" size="lg" asChild>
              <a href="tel:+919121878363">
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </Button>
            <Button variant="navy-outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-background" asChild>
              <a href="https://wa.me/919121878363?text=Hello%20I%27d%20like%20to%20book%20a%20session" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" /> WhatsApp Now
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
