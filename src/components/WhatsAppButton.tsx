import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => (
  <>
    {/* WhatsApp */}
    <motion.a
      href="https://wa.me/919121878363?text=Hello%20I%27d%20like%20a%20kundli%20consultation"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <MessageCircle className="w-7 h-7" />
    </motion.a>
    {/* Phone */}
    <motion.a
      href="tel:+919121878363"
      aria-label="Call now"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-[0_4px_20px_hsla(42,85%,55%,0.4)] hover:scale-110 transition-transform"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
    >
      <Phone className="w-7 h-7" />
    </motion.a>
  </>
);

export default WhatsAppButton;
