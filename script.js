
    // Custom cursor
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
    });
    function animateRing() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      requestAnimationFrame(animateRing);
    }
    animateRing();
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform += ' scale(1.8)';
        ring.style.width = '60px';
        ring.style.height = '60px';
        ring.style.opacity = '0.3';
      });
      el.addEventListener('mouseleave', () => {
        ring.style.width = '36px';
        ring.style.height = '36px';
        ring.style.opacity = '0.5';
      });
    });

    // Reveal on scroll
    const reveals = document.querySelectorAll('.reveal, .timeline-item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, 100);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(el => observer.observe(el));

    // Stagger children
    document.querySelectorAll('.skills-grid, .projects-grid, .lang-grid').forEach(grid => {
      grid.querySelectorAll('.reveal').forEach((child, i) => {
        child.style.transitionDelay = `${i * 0.08}s`;
      });
    });

    // Typewriter effect in hero
    const title = document.querySelector('.hero-title');
    const texts = ['Backend NestJS', 'Frontend React', 'Data Analyst · Python', 'NodeJS / API REST'];
    let ti = 0, ci = 0, deleting = false;
    const highlight = title.querySelector('.highlight');
    function type() {
      const current = texts[ti];
      if (!deleting) {
        highlight.textContent = current.slice(0, ci + 1);
        ci++;
        if (ci === current.length) { deleting = true; setTimeout(type, 1800); return; }
      } else {
        highlight.textContent = current.slice(0, ci - 1);
        ci--;
        if (ci === 0) { deleting = false; ti = (ti + 1) % texts.length; }
      }
      setTimeout(type, deleting ? 60 : 90);
    }
    setTimeout(type, 1200);

    // Glitch effect on name hover
    const name = document.querySelector('.hero-name');
    name.addEventListener('mouseenter', () => {
      name.style.textShadow = '2px 0 var(--accent), -2px 0 var(--accent2)';
      setTimeout(() => name.style.textShadow = '', 200);
    });

    // Counter animation for stats
    function animateCounter(el) {
      const target = el.textContent;
      const num = parseFloat(target);
      if (isNaN(num)) return;
      const suffix = target.replace(num.toString(), '');
      let start = 0;
      const duration = 1200;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        el.textContent = Math.floor(progress * num) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
    const counterObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.stat-num').forEach(animateCounter);
          counterObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll('.about-stats').forEach(el => counterObs.observe(el));
  