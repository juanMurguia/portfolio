"use client";
import useLocale from "@/lib/context/useLocale";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Container animation variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.19, 1.0, 0.22, 1.0],
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  // Skill item animation variants
  const skillVariants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 },
  };

  // Code snippet decorative elements
  const getRandomOffset = () => Math.floor(Math.random() * 5) - 2;

  return (
    <div ref={ref}>
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center">{t("skills.title")}</h2>
      </div>

      <motion.div
        className="grid md:grid-cols-4 sm:grid-cols-2 gap-12"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-[#380a0a81] bg-opacity-70 rounded-3xl p-6 relative overflow-hidden cursor-default border border-[#400000]"
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 25px rgba(255,50,50,0.15)",
              background: "rgba(40, 0, 0, 0.7)",
            }}
          >
            <h3 className="text-xl mb-4 text-[#ff5050]">
              {t(`skills.category.${category.key}`)}
            </h3>

            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.li
                  key={skillIndex}
                  className="font-mono text-sm text-[#ffcccc]"
                  variants={skillVariants}
                  transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                >
                  - {skill}
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="absolute right-0 bottom-0 w-16 h-16 rounded-full bg-[#ff3030] blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.5, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
