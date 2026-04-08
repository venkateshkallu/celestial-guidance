import { Users, Clock, Award } from "lucide-react";

const STATS = [
  { icon: Users, value: "20,000+", label: "Clients Served" },
  { icon: Clock, value: "40+", label: "Years Experience" },
  { icon: Award, value: "Trusted", label: "Vedic Astrologer" },
];

const TrustSection = () => (
  <section className="bg-primary py-12 md:py-16">
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {STATS.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-2">
            <s.icon className="w-8 h-8 text-accent" />
            <span className="text-3xl md:text-4xl font-bold text-primary-foreground font-serif">
              {s.value}
            </span>
            <span className="text-primary-foreground/60 font-sans text-sm">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
