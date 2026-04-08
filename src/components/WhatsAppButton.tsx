import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919121878363?text=Hello%20I%27d%20like%20a%20kundli%20consultation"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default WhatsAppButton;
