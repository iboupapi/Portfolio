export default function Certifications() {
  return (
    <section id="certifications">
      <div className="section-label reveal">
        Certifications
      </div>

      <h2 className="section-title reveal">
        Ce qui est validé
      </h2>

      <div className="certs-grid">

        {/* IBM / Coursera — SQL */}
        <div className="cert-card reveal">
          <div className="cert-type tech">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>

            Tech
          </div>

          <div className="cert-title">
            Querying Databases with SQL
          </div>

          <div className="cert-issuer">
            Coursera · Authorized by IBM
          </div>

          <div className="cert-date">
            Janvier 2025
          </div>

          <a
            className="cert-verify"
            href="https://www.credly.com/go/knJbmyGn"
            target="_blank"
            rel="noreferrer"
          >
            Vérifier le badge →
          </a>
        </div>

        {/* FORCE-N — Python */}
        <div className="cert-card reveal">
          <div className="cert-type tech">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>

            Tech
          </div>

          <div className="cert-title">
            Développement Python
          </div>

          <div className="cert-issuer">
            FORCE-N · UN-CHK · Mastercard Foundation
          </div>

          <div className="cert-date">
            Mai 2025
          </div>
        </div>

        {/* FORCE-N — Informatique */}
        <div className="cert-card reveal">
          <div className="cert-type tech">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>

            Tech
          </div>

          <div className="cert-title">
            Informatique et Internet
          </div>

          <div className="cert-issuer">
            FORCE-N · UN-CHK · Mastercard Foundation
          </div>

          <div className="cert-date">
            —
          </div>
        </div>

        {/* Communication */}
        <div className="cert-card soft reveal">
          <div className="cert-type soft">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>

            Soft Skill
          </div>

          <div className="cert-title">
            Communication
          </div>

          <div className="cert-issuer">
            DEFARU Soft Skills · FORCE-N · GIZ · Mastercard Foundation
          </div>

          <div className="cert-date">
            12 octobre 2024 · 6h de formation
          </div>
        </div>

        {/* Ethique */}
        <div className="cert-card soft reveal">
          <div className="cert-type soft">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>

            Soft Skill
          </div>

          <div className="cert-title">
            L'éthique de travail
          </div>

          <div className="cert-issuer">
            RéFoP / Initiative FIT! Sénégal · GIZ · Union Européenne
          </div>

          <div className="cert-date">
            28 avril 2026 · 6h de formation
          </div>
        </div>

        {/* Stat card */}
        <div
          className="cert-card reveal"
          style={{
            background: "rgba(0,229,255,0.03)",
            borderColor: "rgba(0,229,255,0.1)",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "3.5rem",
              color: "var(--accent)",
              lineHeight: 1,
            }}
          >
            5
          </div>

          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.72rem",
              color: "var(--text-dim)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Certifications
            <br />
            obtenues
          </div>

          <div
            style={{
              width: "30px",
              height: "1px",
              background: "var(--accent)",
              margin: "4px auto",
            }}
          />

          <div
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "0.78rem",
              color: "var(--text-dim)",
            }}
          >
            3 Tech · 2 Soft Skills
          </div>
        </div>

      </div>
    </section>
  );
}