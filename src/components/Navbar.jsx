export default function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        IN<span>.</span>dev
      </div>

      <ul className="nav-links">
        <li><a href="#about">À propos</a></li>
        <li><a href="#skills">Compétences</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#experience">Expérience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
