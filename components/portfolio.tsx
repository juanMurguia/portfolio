"use client";
import chetalkImage from "@/app/assets/chetalk.webp";
import ecommerceImage from "@/app/assets/ecommerce.webp";
import gamingImage from "@/app/assets/gaming.webp";
import proveumImage from "@/app/assets/proveum.jpg";
import Image from "next/image";
import useLocale from "@/lib/context/useLocale";

const portfolioItems = [
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

export default function Portfolio() {
  const { t } = useLocale();
  return (
    <div>
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-center">
          {t("portfolio.title")}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {portfolioItems.map((item) => (
          <a
            key={item.id}
            href={item.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl overflow-hidden bg-vscode-bg-light  bg-opacity-50 transition hover:shadow-lg hover:-translate-y-1"
          >
            <div className="aspect-video relative">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover "
              />
            </div>

            <div className="p-5 flex flex-col gap-3">
              <div className="text-xs font-mono text-vscode-accent">
                {t(item.categoryKey)}
              </div>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-vscode-text-muted leading-relaxed">
                {t(item.descriptionKey)}
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {item.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-white/10 border border-vscode-border rounded-md text-xs font-mono text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
