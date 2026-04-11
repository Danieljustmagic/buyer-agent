"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <span className="text-night font-semibold text-lg tracking-tight">
          Buyer<span className="text-accent">.</span>
        </span>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-night text-white text-sm font-medium px-5 py-2.5 rounded-full
            hover:bg-night-light transition-colors duration-200"
        >
          Prendre rendez-vous
        </a>
      </div>
    </header>
  );
}
