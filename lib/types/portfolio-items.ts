import chetalkImage from "@/app/assets/chetalk.webp";
import ecommerceImage from "@/app/assets/ecommerce.webp";
import gamingImage from "@/app/assets/gaming.webp";
import proveumImage from "@/app/assets/proveum.jpg";

export const portfolioItems = [
  {
    id: 1,
    title: "Proveum",
    categoryKey: "portfolio.items.proveum.category",
    image: proveumImage,
    descriptionKey: "portfolio.items.proveum.description",
    technologies: ["Supabase", "Next", "OAuth"],
    liveUrl: "https://www.proveum.com.ar",
  },
  {
    id: 2,
    title: "Armada E-sports",
    categoryKey: "portfolio.items.armada.category",
    image: gamingImage,
    descriptionKey: "portfolio.items.armada.description",
    technologies: ["TypeScript", "Next", "Chakra UI", "React Hook Form"],
    liveUrl: "https://armadaesports.gg",
  },
  {
    id: 3,
    title: "Jewelry E-commerce",
    categoryKey: "portfolio.items.jewelry.category",
    image: ecommerceImage,
    descriptionKey: "portfolio.items.jewelry.description",
    technologies: [
      "PostgreSQL",
      "Next",
      "Tailwind CSS",
      "Firebase Auth",
      "Algolia",
    ],
    liveUrl: "https://jewelry-ecommerce-delta.vercel.app",
  },

  {
    id: 4,
    title: "AI Argentinian Translator",
    categoryKey: "portfolio.items.chetalk.category",
    image: chetalkImage,
    descriptionKey: "portfolio.items.chetalk.description",
    technologies: ["React", "Gemini API", "Tailwind.css"],
    liveUrl: "https://chetalk.netlify.app",
  },
];
