const skillCategories = [
  {
    name: "Frontend",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      ".NET MAUI",
      "Blazor",
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
    <div className="section-container">
      <div className="flex items-center mb-8">
        <div className="tab active">
          <span className="font-mono text-sm">_skills</span>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
        <p className="text-vscode-text-muted max-w-2xl">
          As a front-end developer focused on design and performance, I also
          have growing back-end skills in server-side programming and API
          design.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-vscode-bg-light border border-vscode-border rounded-md p-6"
          >
            <h3 className="text-xl font-bold mb-4 text-vscode-accent">
              {category.name}
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
