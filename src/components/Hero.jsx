// import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import profile from "../assets/imgXelcomTour.jpg";

const words = [
  "Backend Node.js & Express/Nest.js",
  "Frontend React",
  "Data Analyst · Python",
  "API REST sécurisées",
  "Architecture Backend",
];

export default function Hero() {
  return (
    <section id="hero">

      {/* GLOW */}
      <motion.div
        className="hero-glow"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* PHOTO */}
      <motion.div
        className="hero-photo-wrap"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <motion.div
          className="hero-photo-frame"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.img
            src={profile}
            alt="Ibrahima Ndoye"
            className="hero-photo"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>

      {/* CONTENT */}
      <div className="hero-inner">

        {/* BADGE */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero-badge-dot" />
          Disponible pour des opportunités
        </motion.div>

        {/* NAME */}
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ibrahima<br />
          <span className="accent">Ndoye</span>
        </motion.h1>

        {/* TITLE — animation CSS pure, zéro JS */}
        <motion.p
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Développeur{" "}
          <span className="word-carousel" aria-label={words.join(", ")}>
            <span className="word-fade-top" aria-hidden="true" />
            <span className="word-track" aria-hidden="true">
              {/* On duplique le premier mot à la fin pour boucler sans saut */}
              {[...words, words[0]].map((w, i) => (
                <span key={i}>{w}</span>
              ))}
            </span>
            <span className="word-fade-bottom" aria-hidden="true" />
          </span>
        </motion.p>

        {/* DESCRIPTION */}
        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Développeur Full Stack passionné, spécialisé en Node.js, Express/NestJS
          et React. Je conçois des API REST robustes, sécurisées et scalables
          avec une forte attention aux performances backend et à l'expérience utilisateur.
          Basé à Dakar, je développe également des projets Data Analytics avec Python.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.a
            href="#projects"
            className="btn-primary"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            Voir mes projets
          </motion.a>

          <motion.a
            href="#contact"
            className="btn-outline"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            Me contacter
          </motion.a>
        </motion.div>

      </div>

      {/* SCROLL */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="scroll-line" />
        Scroll
      </motion.div>

    </section>
  );
}