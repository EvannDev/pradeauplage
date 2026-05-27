"use client";

import { useEffect, useState } from "react";

const NAV_SECTIONS = [
  { id: "hero", label: "Accueil" },
  { id: "carte", label: "La Carte" },
  { id: "lieu", label: "Le Lieu" },
  { id: "galerie", label: "Galerie" },
  { id: "avis", label: "Avis" },
  { id: "contact", label: "Contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);

      // Determine active section by which one's top is closest to the nav offset
      const offset = 100;
      let current = "hero";
      for (const { id } of NAV_SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offset) current = id;
      }
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      setMobileOpen(false);
      const target = document.querySelector(href);
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 60;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <nav className={`nav${scrolled ? " is-scrolled" : ""}`} id="nav" role="navigation" aria-label="Navigation principale">
        <div className="container nav__inner">
          <a href="#hero" className="nav__logo" aria-label="Pradeau Plage, accueil" onClick={handleNavLink}>
            <span className="nav__logo-mark">P</span>
            <span className="nav__logo-text">
              <strong>Pradeau Plage</strong>
              <small>Presqu&apos;île de Giens</small>
            </span>
          </a>

          <ul className="nav__links" role="list">
            {NAV_SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={handleNavLink}
                  aria-current={activeSection === id ? "page" : undefined}
                  className={activeSection === id ? "is-active" : ""}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#reserver" className="btn btn--primary nav__cta" onClick={handleNavLink}>
            Réserver
          </a>

          <button
            className="nav__burger"
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`nav__mobile${mobileOpen ? " is-open" : ""}`}
        aria-hidden={!mobileOpen}
        role="dialog"
        aria-label="Menu de navigation"
      >
        <button
          className="nav__mobile-close"
          aria-label="Fermer le menu"
          onClick={() => setMobileOpen(false)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        {NAV_SECTIONS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={handleNavLink}
            aria-current={activeSection === id ? "page" : undefined}
          >
            {label}
          </a>
        ))}
        <a
          href="#reserver"
          onClick={handleNavLink}
          className="btn btn--primary"
          style={{ marginTop: 16 }}
        >
          Réserver
        </a>
      </div>
    </>
  );
}
