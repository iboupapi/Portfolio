import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Server,
  BrainCircuit,
  GitBranch
} from "lucide-react";

export default function Skills() {
  const skillGroups = [
    {
      icon: <Code2 size={28} />,
      title: "Frontend",
      skills: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind",
        "Responsive Design"
      ]
    },
    {
      icon: <Server size={28} />,
      title: "Backend",
      skills: [
        "Node.js",
        "Express",
        "NestJS",
        "Django",
        "REST API",
        "Authentication",
        "JWT"
      ]
    },
    {
      icon: <Database size={28} />,
      title: "Database",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Prisma",
        "Mongoose"
      ]
    },
    {
      icon: <BrainCircuit size={28} />,
      title: "Data Analytics",
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Streamlit"
      ]
    },
    {
      icon: <GitBranch size={28} />,
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Vercel",
        "Postman"
      ]
    },
    {
      icon: <Globe size={28} />,
      title: "Soft Skills",
      skills: [
        "Team Work",
        "Communication",
        "Problem Solving",
        "Adaptability",
        "Creativity"
      ]
    }
  ];

  return (
    <section id="skills">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="section-label">Compétences</div>

        <h2 className="section-title">
          Stack & Technologies
        </h2>
      </motion.div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.div
            key={index}
            className="skill-group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8
            }}
          >
            <div className="skill-group-icon">
              {group.icon}
            </div>

            <h3 className="skill-group-title">
              {group.title}
            </h3>

            <div className="skill-tags">
              {group.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  className={`skill-tag ${
                    skill === "React" ||
                    skill === "Node.js" ||
                    skill === "Express" ||
                    skill === "NestJS" ||
                    skill === "Django" ||
                    skill === "MySQL" ||
                    skill === "PostgreSQL" ||
                    skill === "Python" ||
                    skill === "Pandas" ||
                    skill === "NumPy" ||
                    skill === "Git" ||
                    skill === "GitHub" ||
                    skill === "Postman" ||
                    skill === "Team Work" ||
                    skill === "Communication" ||
                    skill === "Problem Solving" ||
                    skill === "Adaptability"
                      ? "featured"
                      : ""
                  }`}
                  whileHover={{
                    scale: 1.05
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}