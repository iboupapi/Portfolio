export default function Contact() {
  return (
    <section id="contact">
      <div className="section-label reveal">
        Contact
      </div>

      <h2 className="section-title reveal">
        Travaillons ensemble
      </h2>

      <div className="contact-grid">

        <div>

          <div className="contact-text">
            <p>
              Je suis ouvert aux opportunités de stage,
              collaboration ou travail en freelance.
              N'hésite pas à me contacter pour discuter
              de ton projet ou d'une opportunité.
            </p>
          </div>

          <div className="contact-links">

            {/* EMAIL */}
            <a
              className="contact-link reveal"
              href="mailto:iboupapi95@gmail.com"
            >
              <span className="contact-link-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="2"
                    y="4"
                    width="20"
                    height="16"
                    rx="2"
                  />

                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>

              iboupapi95@gmail.com
            </a>

            {/* GITHUB */}
            <a
              className="contact-link reveal"
              href="https://github.com/iboupapi"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-link-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />

                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </span>

              github.com/iboupapi
            </a>

            {/* LINKEDIN */}
            <a
              className="contact-link reveal"
              href="https://www.linkedin.com/in/ibrahima-ndoye-56aa2225a/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-link-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />

                  <rect
                    x="2"
                    y="9"
                    width="4"
                    height="12"
                  />

                  <circle
                    cx="4"
                    cy="4"
                    r="2"
                  />
                </svg>
              </span>

              linkedin.com/in/ibrahima-ndoye
            </a>

            {/* TELEPHONE */}
            <a
              className="contact-link reveal"
              href="tel:+221772904998"
            >
              <span className="contact-link-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>

              +221 77 290 49 98
            </a>

          </div>
        </div>

        {/* FORMULAIRE */}
        <form
          action="https://formsubmit.co/iboupapi95@gmail.com"
          method="POST"
          className="contact-form reveal"
        >

          <div className="form-group">
            <label>Nom</label>

            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="votre@gmail.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>

            <textarea
              name="message"
              placeholder="Décrivez votre projet ou opportunité..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{
              width: "100%",
              justifyContent: "center",
            }}
          >
            <span>Envoyer le message</span>
          </button>

        </form>

      </div>
    </section>
  );
}