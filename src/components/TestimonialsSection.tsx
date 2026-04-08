import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  { name: "Priya Sharma", text: "After years of confusion about my career, one session gave me the clarity I needed. His advice was practical and grounded in my birth chart — no vague promises.", rating: 5 },
  { name: "Rajesh Patel", text: "We consulted for marriage compatibility. The analysis was thorough and the remedies simple. Our families are very happy with the guidance we received.", rating: 5 },
  { name: "Anita Desai", text: "The vastu consultation transformed our home's energy. Small changes, big results. I recommend to anyone looking for genuine, evidence-based astrological advice.", rating: 5 },
  { name: "Vikram Reddy", text: "I was skeptical at first, but the kundli reading was incredibly accurate. The remedies were practical and I saw real changes within weeks.", rating: 5 },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding bg-background relative particle-bg">
    <div className="container relative z-10">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-accent font-sans text-xs font-semibold tracking-[0.3em] uppercase mb-3">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-5xl font-bold">
          <span className="gold-text">What Our Clients</span>{" "}
          <span className="text-foreground">Say</span>
        </h2>
        <div className="w-20 h-[2px] gold-gradient mx-auto mt-5" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {TESTIMONIALS.map((t, i) => (
          <motion.blockquote
            key={t.name}
            className="relative bg-card rounded-xl p-6 border border-border hover:border-accent/20 transition-all duration-500 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/10 group-hover:text-accent/20 transition-colors" />
            <div className="flex gap-1 mb-3">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground/60 font-sans text-sm leading-relaxed italic mb-4">
              "{t.text}"
            </p>
            <footer className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-serif font-bold text-sm">
                {t.name[0]}
              </div>
              <span className="font-sans text-sm font-semibold text-foreground">
                {t.name}
              </span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
