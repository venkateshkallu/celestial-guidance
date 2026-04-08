import { useState, type FormEvent } from "react";
import { Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const SERVICES_LIST = [
  "Love Problems",
  "Marriage",
  "Career",
  "Health",
  "Numerology",
  "Vastu",
  "Kundli",
  "Other",
];

const ContactSection = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Thank you!",
        description: "We've received your request. Expect a call/WhatsApp reply within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-accent font-sans text-sm font-semibold tracking-widest uppercase mb-2">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Book Your Consultation
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Quick contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary-foreground font-serif">
              Reach Us Directly
            </h3>
            <p className="text-primary-foreground/60 font-sans text-sm">
              Prefer a direct conversation? Call or WhatsApp us for immediate assistance.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+919121878363"
                className="flex items-center gap-3 text-primary-foreground hover:text-accent transition-colors font-sans"
              >
                <Phone className="w-5 h-5 text-accent" />
                +91 91218 78363
              </a>
              <a
                href="https://wa.me/919121878363?text=Hello%20I%27d%20like%20a%20kundli%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground hover:text-accent transition-colors font-sans"
              >
                <MessageCircle className="w-5 h-5 text-accent" />
                WhatsApp Us
              </a>
            </div>

            <div className="border-t border-primary-foreground/10 pt-6">
              <p className="text-primary-foreground/40 font-sans text-xs">
                Available Mon–Sat, 9 AM – 8 PM IST
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-primary-foreground/80 font-sans text-sm mb-1">
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={100}
                className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground font-sans text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-primary-foreground/80 font-sans text-sm mb-1">
                Phone *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                pattern="[0-9+\-\s]{7,15}"
                className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground font-sans text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div>
              <label htmlFor="channel" className="block text-primary-foreground/80 font-sans text-sm mb-1">
                Preferred Contact
              </label>
              <select
                id="channel"
                name="channel"
                className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="call">Phone Call</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>

            <div>
              <label htmlFor="service" className="block text-primary-foreground/80 font-sans text-sm mb-1">
                Service of Interest
              </label>
              <select
                id="service"
                name="service"
                className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {SERVICES_LIST.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-primary-foreground/80 font-sans text-sm mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                maxLength={1000}
                className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground font-sans text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                placeholder="Brief description of your concern..."
              />
            </div>

            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" required className="mt-1 accent-accent" />
              <span className="text-primary-foreground/50 font-sans text-xs">
                By submitting you consent to be contacted for consultation. We value your privacy.
              </span>
            </label>

            <Button variant="gold" size="lg" className="w-full" type="submit" disabled={submitting}>
              <Send className="w-4 h-4" />
              {submitting ? "Sending..." : "Send Request"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
