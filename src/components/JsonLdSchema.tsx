const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Jyotish Guru — Trusted Vedic Astrologer",
  description:
    "Trusted Vedic astrology consultations — kundli readings, vastu fixes & numerology guidance. 40+ years experience, 20,000+ clients served.",
  telephone: "+919121878363",
  url: "https://jyotishguru.com",
  image: "/hero-pandit.jpg",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1240",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+919121878363",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi", "Telugu"],
  },
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Astrology Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kundli Reading" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vastu Consultation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Numerology" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Marriage Compatibility" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Career Astrology" } },
    ],
  },
};

const JsonLdSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
);

export default JsonLdSchema;
