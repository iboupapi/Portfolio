import { motion } from "framer-motion";

import ndoumbeImg from "../assets/Ndoumbe.PNG";
import cnImg from "../assets/plateformeCN.PNG";
import hidayaImg from "../assets/Hidaya.PNG";
import davidromaImg from "../assets/david.PNG";
import streamlitImg from "../assets/streamlit.PNG";

const projects = [
  {
    id: "01",
    image: ndoumbeImg,
    title: "Ndoumbé",
    subtitle: "Réseau Social · Bien-être & Santé",
    desc: "Application web sociale centrée sur le bien-être et la santé au Sénégal.",
    features: [
      "API REST complète",
      "Authentification JWT",
      "Gestion utilisateurs",
      "Base MySQL"
    ],
    tech: ["Node.js", "Express", "MySQL", "JWT", "React"],
    github: "https://github.com/iboupapi/ndoumbe"
  },

  {
    id: "02",
    image: cnImg,
    title: "Plateforme CN",
    subtitle: "Outil Collaboratif · UN-CHK",
    desc: "Plateforme collaborative pour étudiants scientifiques.",
    features: [
      "Gestion groupes",
      "API REST",
      "JWT Auth",
      "MySQL"
    ],
    tech: ["Node.js", "Express", "MySQL", "JWT"],
    github: "https://github.com/iboupapi"
  },

  {
    id: "03",
    image: hidayaImg,
    title: "Hidaya",
    subtitle: "Plateforme Podcast Spirituel",
    desc: "Application web de contenu spirituel et podcasts.",
    features: [
      "Streaming audio",
      "Catalogue podcasts",
      "Responsive",
      "Authentification"
    ],
    tech: ["Node.js", "React", "MySQL"],
    github: "https://github.com/iboupapi"
  },

  {
    id: "04",
    image: davidromaImg,
    title: "Site Professionnel",
    subtitle: "Projet Client · Dakar",
    desc: "Site web professionnel luxe conçu pour un client réel.",
    features: [
      "Responsive Design",
      "Animations",
      "Déploiement Vercel"
    ],
    tech: ["React", "Node.js", "Vercel"],
    live: "https://david-roma.vercel.app/"
  },

  {
    id: "05",
    image: streamlitImg,
    title: "Offres Emploi Sénégal",
    subtitle: "Projet Data Analytics",
    desc: "Scraping de 14 848 offres d'emploi et dashboard data.",
    features: [
      "Web Scraping",
      "Pandas",
      "Power BI",
      "Streamlit"
    ],
    tech: [
      "Python",
      "Pandas",
      "Power BI",
      "Streamlit"
    ],
    live: "https://offresenegal.streamlit.app/",
    large: true
  }
];

export default function Projects() {
  return (
    <section id="projects">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="section-label">
          Projets
        </div>

        <h2 className="section-title">
          Ce que j'ai construit
        </h2>
      </motion.div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            className="project-card has-screenshot"
            style={{
              gridColumn: project.large ? "span 2" : "span 1"
            }}
            initial={{
              opacity: 0,
              y: 80
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.12
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10
            }}
          >

            <img
              src={project.image}
              alt={project.title}
              className="project-screenshot"
            />

            <div className="project-card-body">

              <div className="project-num">
                {project.id} —
              </div>

              <h3 className="project-name">
                {project.title}
              </h3>

              <div className="project-sub">
                {project.subtitle}
              </div>

              <p className="project-desc">
                {project.desc}
              </p>

              <ul className="project-features">
                {project.features.map((feature, i) => (
                  <li key={i}>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="project-tech">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="tech-badge"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-actions">

                {project.github && (
                  <a
                    className="project-link"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub →
                  </a>
                )}

                {project.live && (
                  <a
                    className="project-live"
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="project-live-dot"></span>
                    Voir le projet live
                  </a>
                )}

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}