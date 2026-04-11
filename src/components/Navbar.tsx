"use client";

import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-night/80 backdrop-blur-md border-b border-white/8">
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Méthode", href: "#process" },
            { label: "Offres", href: "#offres" },
            { label: "À propos", href: "#positionnement" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/50 hover:text-white text-sm transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-accent text-night text-sm font-bold px-5 py-2.5 rounded-xl
            hover:bg-accent-hover transition-all duration-200 hover:-translate-y-0.5"
        >
          Prendre rendez-vous
        </a>
      </div>
    </header>
  );
}
