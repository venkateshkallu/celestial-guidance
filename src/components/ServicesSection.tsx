import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

import serviceLove from "@/assets/service-love.jpg";
import serviceMarriage from "@/assets/service-marriage.jpg";
import serviceCareer from "@/assets/service-career.jpg";
import serviceHealth from "@/assets/service-health.jpg";
import serviceNumerology from "@/assets/service-numerology.jpg";
import serviceVastu from "@/assets/service-vastu.jpg";
import serviceKundli from "@/assets/service-kundli.jpg";

const SERVICES = [
  {
    title: "Love Problems",
    desc: "Clarity on relationship conflicts, matchmaking compatibility & remedies to restore harmony.",
    img: serviceLove,
    alt: "Couple consulting astrologer about relationship compatibility",
  },
  {
    title: "Marriage",
    desc: "Guidance on marriage timing, compatibility checks and ceremonial Vedic recommendations.",
    img: serviceMarriage,
    alt: "Marriage compatibility kundli chart consultation",
  },
  {
    title: "Career",
    desc: "Personalized career charts for job changes, promotions and professional direction.",
    img: serviceCareer,
    alt: "Professional discussing career astrology chart",
  },
  {
    title: "Health",
    desc: "Astrological insights for holistic wellbeing and practical remedies to support recovery.",
    img: serviceHealth,
    alt: "Holistic health remedies with astrological chart",
  },
  {
    title: "Numerology",
    desc: "Number-based guidance for name changes, important dates and life path decisions.",
    img: serviceNumerology,
    alt: "Numerology calculations on paper with abacus",
  },
  {
    title: "Vastu",
    desc: "Home & workspace analysis with actionable changes to improve energy & prosperity.",
    img: serviceVastu,
    alt: "Vastu expert reviewing home floor plan on tablet",
  },
  {
    title: "Kundli",
    desc: "In-depth natal chart analysis with clear, step-by-step explanations & remedial suggestions.",
    img: serviceKundli,
    alt: "Detailed kundli natal birth chart with brass instruments",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-background">
    <div className="container">
      <div className="text-center mb-12">
        <p className="text-accent font-sans text-sm font-semibold tracking-widest uppercase mb-2">
          Our Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Expert Guidance for Every Area of Life
        </h2>
        <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {SERVICES.map((s) => (
          <article
            key={s.title}
            className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300"
          >
            <div className="overflow-hidden aspect-[5/4]">
              <img
                src={s.img}
                alt={s.alt}
                loading="lazy"
                width={640}
                height={512}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-4">
                {s.desc}
              </p>
              <Button variant="gold" size="sm" className="w-full" asChild>
                <a
                  href="https://wa.me/919121878363?text=Hello%20I%27d%20like%20a%20consultation%20for%20" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" /> Book Consultation
                </a>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
