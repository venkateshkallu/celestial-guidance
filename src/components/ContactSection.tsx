import { useState, type FormEvent } from "react";
import { Phone, MessageCircle, Send, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const SERVICES_LIST = ["Love Problems", "Marriage", "Career", "Health", "Numerology", "Vastu", "Kundli", "Other"];

const ContactSection = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({ title: "Thank you!", description: "We've received your request. Expect a call/WhatsApp reply within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const inputClass = "w-full px-4 py-3 rounded-lg bg-background/50 border border-border text-foreground font-sans text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all";

  return (
    <section id="contact" className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 radial-glow pointer-events-none" />
      <div className="container relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accent font-sans text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="gold-text">Book Your</span>{" "}
            <span className="text-foreground">Consultation</span>
          </h2>
          <div className="w-20 h-[2px] gold-gradient mx-auto mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-foreground font-serif">
              Reach Us Directly
            </h3>
            <p className="text-muted-foreground font-sans text-sm">
              Prefer a direct conversation? Call or WhatsApp us for immediate assistance.
            </p>

            <div className="space-y-4">
              {[
                { icon: Phone, label: "+91 91218 78363", href: "tel:+919121878363" },
                { icon: MessageCircle, label: "WhatsApp Us", href: "https://wa.me/919121878363?text=Hello%20I%27d%20like%20a%20kundli%20consultation" },
                { icon: Clock, label: "Mon–Sat, 9 AM – 8 PM IST", href: "" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-accent" />
                  </div>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-foreground/80 hover:text-accent transition-colors font-sans text-sm">
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-foreground/50 font-sans text-sm">{item.label}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4 bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <label htmlFor="name" className="block text-foreground/80 font-sans text-sm mb-1">Name *</label>
              <input id="name" name="name" type="text" required maxLength={100} className={inputClass} placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-foreground/80 font-sans text-sm mb-1">Phone *</label>
              <input id="phone" name="phone" type="tel" required pattern="[0-9+\-\s]{7,15}" className={inputClass} placeholder="+91 XXXXX XXXXX" />
            </div>
            <div>
              <label htmlFor="channel" className="block text-foreground/80 font-sans text-sm mb-1">Preferred Contact</label>
              <select id="channel" name="channel" className={inputClass}>
                <option value="call">Phone Call</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>
            <div>
              <label htmlFor="service" className="block text-foreground/80 font-sans text-sm mb-1">Service of Interest</label>
              <select id="service" name="service" className={inputClass}>
                {SERVICES_LIST.map((s) => (<option key={s} value={s}>{s}</option>))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-foreground/80 font-sans text-sm mb-1">Message</label>
              <textarea id="message" name="message" rows={3} maxLength={1000} className={`${inputClass} resize-none`} placeholder="Brief description of your concern..." />
            </div>
            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" required className="mt-1 accent-accent" />
              <span className="text-muted-foreground font-sans text-xs">
                By submitting you consent to be contacted for consultation. We value your privacy.
              </span>
            </label>
            <Button variant="gold" size="lg" className="w-full" type="submit" disabled={submitting}>
              <Send className="w-4 h-4" />
              {submitting ? "Sending..." : "Send Request"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
