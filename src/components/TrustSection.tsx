import { Users, Clock, Award, Star } from "lucide-react";
import { motion } from "framer-motion";

const STATS = [
  { icon: Users, value: "20,000+", label: "Clients Served", color: "text-accent" },
  { icon: Clock, value: "40+", label: "Years Experience", color: "text-accent" },
  { icon: Star, value: "4.9★", label: "Client Rating", color: "text-accent" },
  { icon: Award, value: "Trusted", label: "Vedic Astrologer", color: "text-accent" },
];

const TrustSection = () => (
  <section className="relative py-16 md:py-20 overflow-hidden">
    <div className="absolute inset-0 bg-secondary" />
    <div className="absolute inset-0 radial-glow" />
    <div className="container relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            className="flex flex-col items-center gap-3 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
              <s.icon className={`w-6 h-6 ${s.color}`} />
            </div>
            <span className="text-3xl md:text-4xl font-bold font-serif gold-text">
              {s.value}
            </span>
            <span className="text-foreground/50 font-sans text-sm">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
