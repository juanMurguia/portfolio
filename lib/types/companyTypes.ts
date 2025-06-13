// Company data interface
export interface CompanyData {
  slug: string;
  name: string;
  logoUrl: string;
  primaryColor: string;
  secondaryColor: string;
  heroTagline: {
    en: string;
    es: string;
  };
  whyFit: {
    en: string;
    es: string;
  };
  projects: CompanyProject[];
  testimonials?: CompanyTestimonial[];
}

export interface CompanyProject {
  id: string;
  title_en: string;
  title_es: string;
  thumbnail: string;
  tech: string[];
  description_en?: string;
  description_es?: string;
}

export interface CompanyTestimonial {
  author: string;
  role: string;
  company: string;
  text: {
    en: string;
    es: string;
  };
  avatarUrl?: string;
}

// Default company data
export const defaultCompanyData: CompanyData = {
  slug: "default",
  name: "Juan Murguia",
  logoUrl: "",
  primaryColor: "#3b82f6", // Blue
  secondaryColor: "#6366f1", // Indigo
  heroTagline: {
    en: "I create great products",
    es: "Creo grandes productos",
  },
  whyFit: {
    en: "<p>I'm a software developer focused on creating beautiful, responsive, and performant web applications. With years of experience in React, Next.js, and TypeScript, I can help your team build products that users love.</p>",
    es: "<p>Soy un desarrollador de software enfocado en crear aplicaciones web hermosas, responsivas y de alto rendimiento. Con años de experiencia en React, Next.js y TypeScript, puedo ayudar a tu equipo a construir productos que los usuarios amen.</p>",
  },
  projects: [
    {
      id: "1",
      title_en: "Proveum",
      title_es: "Proveum",
      thumbnail: "/assets/proveum.jpg",
      tech: ["Supabase", "Next.js", "OAuth"],
      description_en: "A platform for secure document verification",
      description_es: "Una plataforma para verificación segura de documentos",
    },
    {
      id: "2",
      title_en: "Armada E-sports",
      title_es: "Armada E-sports",
      thumbnail: "/assets/gaming.webp",
      tech: ["TypeScript", "Next.js", "Chakra UI", "React Hook Form"],
      description_en: "Gaming platform for e-sports tournaments",
      description_es: "Plataforma de gaming para torneos de e-sports",
    },
    {
      id: "3",
      title_en: "Jewelry E-commerce",
      title_es: "E-commerce de Joyería",
      thumbnail: "/assets/ecommerce.webp",
      tech: [
        "PostgreSQL",
        "Next.js",
        "Tailwind CSS",
        "Firebase Auth",
        "Algolia",
      ],
      description_en: "Full-featured jewelry online store",
      description_es: "Tienda online completa de joyería",
    },
  ],
  testimonials: [],
};
