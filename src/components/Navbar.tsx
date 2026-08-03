"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-deep/90 backdrop-blur-md border-b border-white/8">
      <div className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <Link href="/">
          <Logo height={44} />
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/blog"
            className="font-mono text-white/45 hover:text-white text-xs tracking-widest uppercase
              transition-colors duration-200"
          >
            Décryptages
          </Link>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-coral text-white text-xs font-bold px-4 py-2
              rounded-lg hover:bg-coral-hover transition-all duration-200 hover:-translate-y-px tracking-wide"
          >
            Clarifier mon projet
          </a>
        </nav>
      </div>
    </header>
  );
}
