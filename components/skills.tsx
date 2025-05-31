const skillCategories = [
  {
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
    name: "Tools & Others",
    skills: ["Git", "Agile methods", "npm/yarn", "Jira", "Vercel", "Figma"],
  },
];

export default function Skills() {
  return (
    <div>
      <div className="mb-4">
        <h2 className="text-3xl font-bold ">Technical Skills</h2>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-gradient-to-tl from-slate-950 to-slate-900 rounded-3xl p-6"
          >
            <h3 className="text-xl mb-4 text-sky-400">{category.name}</h3>

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
