"use client";
import useLocale from "@/lib/context/useLocale";

const skillCategories = [
  {
    key: "frontend",
    name: "Frontend",
    skills: [
      "Next",
      "MAUI.NET",
      "Blazor",
      "React",
      "TypeScript",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    key: "backend",
    name: "Backend",
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Firebase",
      "API Rest",
      "Supabase",
      "Sequelize",
    ],
  },
  {
    key: "performance",
    name: "Performance",
    skills: [
      "Web Vitals",
      "Lighthouse",
      "Webpack",
      "Code Splitting",
      "Image Optimization",
    ],
  },
  {
    key: "tools",
    name: "Tools & Others",
    skills: ["Git", "Agile methods", "npm/yarn", "Jira", "Vercel", "Figma"],
  },
];

export default function Skills() {
  const { t } = useLocale();
  return (
    <div>
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center">{t("skills.title")}</h2>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-gradient-to-tl from-slate-950 to-slate-900 rounded-3xl p-6"
          >
            <h3 className="text-xl mb-4 text-sky-400">
              {t(`skills.category.${category.key}`)}
            </h3>

            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="font-mono text-sm text-vscode-text-muted"
                >
                  - {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
