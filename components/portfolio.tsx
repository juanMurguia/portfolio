import Image from "next/image";
import { ExternalLink } from "lucide-react";
import gamingImage from "@/app/assets/gaming.webp";
import ecommerceImage from "@/app/assets/ecommerce.webp";
import chetalkImage from "@/app/assets/chetalk.webp";

const portfolioItems = [
  {
    id: 1,
    title: "E-sports Web App",
    category: "Web Application",
    image: gamingImage,
    description:
      "Interactive dashboard for financial data visualization with real-time updates and customizable widgets.",
    technologies: ["TypeScript", "Next.js", "Chakra UI", "React Hook Form"],
    liveUrl: "https://armadaesports.gg",
  },
  {
    id: 2,
    title: "Jewelry E-commerce",
    category: "Full-Stack Development",
    image: ecommerceImage,
    description:
      "A modern and optimized e-commerce platform for jewelry, enhancing user experience, product discovery, and conversion rates.",
    technologies: [
      "PostgreSQL",
      "Next.js",
      "Tailwind CSS",
      "Firebase Auth",
      "Algolia",
    ],
    liveUrl: "https://jewelry-ecommerce-delta.vercel.app",
  },

  {
    id: 3,
    title: "AI Argentinian Translator",
    category: "Web Application & AI",
    image: chetalkImage,
    description:
      "An AI-powered translation tool that converts text into the Argentinian dialect, making communication more natural for local users.",
    technologies: ["React", "Gemini API", "Tailwind.css"],
    liveUrl: "https://chetalk.netlify.app",
  },
];

export default function Portfolio() {
  return (
    <div className="section-container">
      <div className="flex items-center mb-8">
        <div className="tab active">
          <span className="font-mono text-sm">portfolio</span>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
        <p className="text-vscode-text-muted max-w-2xl">
          A collection of my best work showcasing my skills in front-end
          development, back-end knowledge, and performance optimization.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {portfolioItems.map((item) => (
          <div key={item.id} className="project-card group">
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Project details"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vscode-bg to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="text-xs text-vscode-accent font-mono">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <div className="text-vscode-accent hover:text-vscode-accent/80 transition-colors">
                    <ExternalLink size={16} />
                  </div>
                </div>

                <p className="text-vscode-text-muted mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-vscode-bg border border-vscode-border rounded-md text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
