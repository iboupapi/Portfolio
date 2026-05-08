import { useEffect } from "react";


export default function usePortfolioEffects() {
  useEffect(() => {

    // =========================
    // REVEAL ON SCROLL
    // =========================
    const reveals = document.querySelectorAll(".reveal, .timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => observer.observe(el));

    // =========================
    // COUNTER
    // =========================
    function animateCounter(el) {
      const target = el.textContent;
      const num = parseInt(target);

      if (isNaN(num)) return;

      let start = 0;
      const duration = 1200;

      const step = (timestamp) => {
        if (!start) start = timestamp;

        const progress = Math.min((timestamp - start) / duration, 1);

        el.textContent = Math.floor(progress * num) + "+";

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }

    const counterObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".stat-num").forEach(animateCounter);
            counterObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    document.querySelectorAll(".about-stats").forEach((el) => {
      counterObs.observe(el);
    });

    // =========================
    // TYPEWRITER
    // =========================
    const texts = [
      "Backend NestJS",
      "Frontend React",
      "Data Analyst · Python",
      "NodeJS / API REST",
    ];

    const highlight = document.querySelector(".highlight");

    if (highlight) {
      let ti = 0;
      let ci = 0;
      let deleting = false;

      function type() {
        const current = texts[ti];

        if (!deleting) {
          highlight.textContent = current.slice(0, ci + 1);
          ci++;

          if (ci === current.length) {
            deleting = true;
            setTimeout(type, 1800);
            return;
          }
        } else {
          highlight.textContent = current.slice(0, ci - 1);
          ci--;

          if (ci === 0) {
            deleting = false;
            ti = (ti + 1) % texts.length;
          }
        }

        setTimeout(type, deleting ? 60 : 90);
      }

      setTimeout(type, 1000);
    }

    // =========================
    // GLITCH EFFECT
    // =========================
    const name = document.querySelector(".hero-name");

    if (name) {
      name.addEventListener("mouseenter", () => {
        name.style.textShadow =
          "2px 0 var(--accent), -2px 0 var(--accent2)";

        setTimeout(() => {
          name.style.textShadow = "";
        }, 200);
      });
    }

    // =========================
    // CUSTOM CURSOR
    // =========================
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursorRing");

    if (cursor && ring) {
      let mx = 0;
      let my = 0;
      let rx = 0;
      let ry = 0;

      document.addEventListener("mousemove", (e) => {
        mx = e.clientX;
        my = e.clientY;

        cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
      });

      function animateRing() {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;

        ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;

        requestAnimationFrame(animateRing);
      }

      animateRing();
    }

    // cleanup
    return () => {
      observer.disconnect();
      counterObs.disconnect();
    };
  }, []);
}