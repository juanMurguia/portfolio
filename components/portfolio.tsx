"use client";
import chetalkImage from "@/app/assets/chetalk.webp";
import ecommerceImage from "@/app/assets/ecommerce.webp";
import gamingImage from "@/app/assets/gaming.webp";
import proveumImage from "@/app/assets/proveum.jpg";
import Image from "next/image";
import useLocale from "@/lib/context/useLocale";
import { portfolioItems } from "@/lib/types/portfolio-items";

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
            className="group rounded-3xl overflow-hidden bg-[#1a0000] bg-opacity-70 transition hover:shadow-[0_10px_20px_rgba(255,50,50,0.15)] hover:-translate-y-1 border border-[#400000]"
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
              <div className="text-xs font-mono text-[#ff5050]">
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
                    className="px-2 py-1 bg-[#300000] border border-[#500000] rounded-md text-xs font-mono text-[#ffcccc]"
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
