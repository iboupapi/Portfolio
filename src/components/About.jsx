export default function About() {
  return (
    <>
      <section id="about">

        <div className="section-label">
          À propos
        </div>

        <h2 className="section-title">
          Qui suis-je ?
        </h2>

        <div className="about-grid">

          <div>

            <div className="about-text">

              <p>
                Développeur Full Stack passionné, spécialisé en{" "}
                <strong style={{ color: "var(--accent)" }}>
                  Node.js, Express & React
                </strong>.
                {" "}Je conçois des API REST performantes et sécurisées,
                des interfaces modernes, et des pipelines de données.
                Je pratique également le{" "}
                <strong style={{ color: "var(--accent2)" }}>
                  Data Analytics
                </strong>{" "}
                depuis 5 mois.
              </p>

              <p>
                Actuellement en Licence 3 à l'
                <strong style={{ color: "var(--accent2)" }}>
                  UN-CHK (Dakar)
                </strong>,
                {" "}je développe des applications web réelles afin
                de renforcer mes compétences et ma maîtrise du
                développement full stack.
              </p>

              <p>
                Participant au{" "}
                <strong style={{ color: "var(--accent)" }}>
                  MIABE Hackathon 2025
                </strong>
                {" "}et ancien de la{" "}
                <strong style={{ color: "var(--accent2)" }}>
                  Zone01 Dakar
                </strong>,
                {" "}j'ai l'habitude de travailler sous pression
                et en équipe.
              </p>

            </div>

            <div className="about-stats">

              <div className="stat-card">
                <div className="stat-num">5+</div>
                <div className="stat-label">
                  Projets livrés
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-num">L3</div>
                <div className="stat-label">
                  Développement Web & Mobile
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-num">3+</div>
                <div className="stat-label">
                  Années de code
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-num">5</div>
                <div className="stat-label">
                  Certifications obtenues
                </div>
              </div>

            </div>

          </div>

          <div className="about-card reveal">

            <div className="about-card-title">
              // Infos rapides
            </div>

            <div className="info-row">
              <span className="info-key">
                Localisation
              </span>

              <span className="info-val">
                Dakar, Sénégal
              </span>
            </div>

            <div className="info-row">
              <span className="info-key">
                Spécialité
              </span>

              <span className="info-val">
                Full Stack · Node.js · React · API REST
              </span>
            </div>

            <div className="info-row">
              <span className="info-key">
                Formation
              </span>

              <span className="info-val">
                Licence Dev Web & Mobile — UN-CHK
              </span>
            </div>

            <div className="info-row">
              <span className="info-key">
                GitHub
              </span>

              <span className="info-val">
                <a
                  href="https://github.com/iboupapi"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/iboupapi
                </a>
              </span>
            </div>

            <div className="info-row">
              <span className="info-key">
                LinkedIn
              </span>

              <span className="info-val">
                <a
                  href="https://linkedin.com/in/ibrahima-ndoye"
                  target="_blank"
                  rel="noreferrer"
                >
                  ibrahima-ndoye
                </a>
              </span>
            </div>

            <div className="info-row">
              <span className="info-key">
                Téléphone
              </span>

              <span className="info-val">
                77-290-49-98
              </span>
            </div>

            <div className="info-row">
              <span className="info-key">
                Email
              </span>

              <span className="info-val">
                <a href="mailto:iboupapi95@gmail.com">
                  iboupapi95@gmail.com
                </a>
              </span>
            </div>

            <div className="info-row">
              <span className="info-key">
                Statut
              </span>

              <span
                className="info-val"
                style={{ color: "var(--accent2)" }}
              >
                ● Ouvert aux opportunités
              </span>
            </div>

          </div>

        </div>

      </section>
    </>
  )
}