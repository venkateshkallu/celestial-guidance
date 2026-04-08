import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    text: "After years of confusion about my career, one session gave me the clarity I needed. His advice was practical and grounded in my birth chart — no vague promises.",
    rating: 5,
  },
  {
    name: "Rajesh Patel",
    text: "We consulted for marriage compatibility. The analysis was thorough and the remedies simple. Our families are very happy with the guidance we received.",
    rating: 5,
  },
  {
    name: "Anita Desai",
    text: "The vastu consultation transformed our home's energy. Small changes, big results. I recommend to anyone looking for genuine, evidence-based astrological advice.",
    rating: 5,
  },
  {
    name: "Vikram Reddy",
    text: "I was skeptical at first, but the kundli reading was incredibly accurate. The remedies were practical and I saw real changes within weeks.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding bg-card">
    <div className="container">
      <div className="text-center mb-12">
        <p className="text-accent font-sans text-sm font-semibold tracking-widest uppercase mb-2">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          What Our Clients Say
        </h2>
        <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {TESTIMONIALS.map((t) => (
          <blockquote
            key={t.name}
            className="bg-background rounded-lg p-6 border border-border"
          >
            <div className="flex gap-1 mb-3">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed italic mb-4">
              "{t.text}"
            </p>
            <footer className="font-sans text-sm font-semibold text-foreground">
              — {t.name}
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
