import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import serviceLove from "@/assets/service-love.jpg";
import serviceMarriage from "@/assets/service-marriage.jpg";
import serviceCareer from "@/assets/service-career.jpg";
import serviceHealth from "@/assets/service-health.jpg";
import serviceNumerology from "@/assets/service-numerology.jpg";
import serviceVastu from "@/assets/service-vastu.jpg";
import serviceKundli from "@/assets/service-kundli.jpg";

const SERVICES = [
  { title: "Love Problems", desc: "Clarity on relationship conflicts, matchmaking compatibility & remedies to restore harmony.", img: serviceLove, alt: "Couple consulting astrologer about relationship compatibility" },
  { title: "Marriage", desc: "Guidance on marriage timing, compatibility checks and ceremonial Vedic recommendations.", img: serviceMarriage, alt: "Marriage compatibility kundli chart consultation" },
  { title: "Career", desc: "Personalized career charts for job changes, promotions and professional direction.", img: serviceCareer, alt: "Professional discussing career astrology chart" },
  { title: "Health", desc: "Astrological insights for holistic wellbeing and practical remedies to support recovery.", img: serviceHealth, alt: "Holistic health remedies with astrological chart" },
  { title: "Numerology", desc: "Number-based guidance for name changes, important dates and life path decisions.", img: serviceNumerology, alt: "Numerology calculations on paper with abacus" },
  { title: "Vastu", desc: "Home & workspace analysis with actionable changes to improve energy & prosperity.", img: serviceVastu, alt: "Vastu expert reviewing home floor plan on tablet" },
  { title: "Kundli", desc: "In-depth natal chart analysis with clear, step-by-step explanations & remedial suggestions.", img: serviceKundli, alt: "Detailed kundli natal birth chart with brass instruments" },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-background relative">
    <div className="absolute inset-0 radial-glow pointer-events-none" />
    <div className="container relative z-10">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-accent font-sans text-xs font-semibold tracking-[0.3em] uppercase mb-3">
          Our Services
        </p>
        <h2 className="text-3xl md:text-5xl font-bold">
          <span className="gold-text">Expert Guidance</span>{" "}
          <span className="text-foreground">for Every Area of Life</span>
        </h2>
        <div className="w-20 h-[2px] gold-gradient mx-auto mt-5" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {SERVICES.map((s, i) => (
          <motion.article
            key={s.title}
            className="group bg-card rounded-xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-[0_0_30px_hsla(42,85%,55%,0.1)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="overflow-hidden aspect-[5/4] relative">
              <img
                src={s.img}
                alt={s.alt}
                loading="lazy"
                width={640}
                height={512}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-foreground mb-2 font-serif">{s.title}</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-4">
                {s.desc}
              </p>
              <Button variant="gold" size="sm" className="w-full" asChild>
                <a
                  href={`https://wa.me/919121878363?text=Hello%20I%27d%20like%20a%20consultation%20for%20${encodeURIComponent(s.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" /> Book Consultation
                </a>
              </Button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
