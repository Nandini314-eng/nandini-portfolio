import "../App.css";
import { useState } from "react";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <h1 className="site-title">Nandini's Portfolio</h1>

        {/* ✅ These nav links are hidden on mobile */}
        <nav className="desktop-nav">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* ✅ This shows only on mobile */}
        <div className="hamburger mobile-only" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </header>

      {/* ✅ Mobile nav dropdown */}
      {menuOpen && (
        <div className="mobile-nav">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}

      <main>{children}</main>

      <footer>
        <p>&copy; 2025 Nandini Agarwal | All rights reserved.</p>
      </footer>
    </>
  );
}

