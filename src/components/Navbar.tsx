"use client";

import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-night/85 backdrop-blur-md border-b border-white/8">
      <div className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <Logo height={44} />
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-accent text-night text-sm font-bold px-5 py-2.5 rounded-xl
            hover:bg-accent-hover transition-all duration-200 hover:-translate-y-px"
        >
          Rendez-vous gratuit
        </a>
      </div>
    </header>
  );
}
