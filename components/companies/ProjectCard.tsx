"use client";

import Image from "next/image";

export const ProjectCard = ({
  title,
  category,
  description,
  technologies,
  image,
  liveUrl,
  primaryColor,
  secondaryColor,
}: {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: any;
  liveUrl: string;
  primaryColor: string;
  secondaryColor: string;
}) => (
  <a
    href={liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2"
    style={{
      backgroundColor: `#${primaryColor}20`,
      borderColor: `#${secondaryColor}`,
      borderWidth: "1px",
    }}
  >
    <div className="aspect-video relative">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="p-6 relative">
      <h3
        className="text-xl font-bold mb-2"
        style={{ color: `#${secondaryColor}` }}
      >
        {title}
      </h3>
      <p
        className="text-sm mb-4 line-clamp-2"
        style={{ color: `#${secondaryColor}cc` }}
      >
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-2 py-1 rounded-full text-xs font-medium"
            style={{
              backgroundColor: `#${secondaryColor}20`,
              color: `#${secondaryColor}`,
              borderColor: `#${secondaryColor}40`,
              borderWidth: "1px",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </a>
);
