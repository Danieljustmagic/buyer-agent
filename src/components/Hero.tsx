import { ArrowRight, ChevronDown } from "lucide-react";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-deep flex items-center overflow-hidden">

      {/* Grille éditoriale */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Halo corail */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(circle, #E05A42 0%, transparent 65%)" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 lg:px-16 pt-32 pb-20 w-full">

        {/* Label chapitre */}
        <div className="flex items-center gap-3 mb-10" data-reveal>
          <div className="w-6 h-px bg-coral" />
          <span className="font-mono text-coral text-xs tracking-[0.25em] uppercase">
            KAP · Accompagnement acheteur immobilier
          </span>
        </div>

        {/* Titre manifeste */}
        <h1
          className="font-display font-black uppercase text-white mb-8"
          style={{ fontSize: "clamp(3rem, 7.5vw, 6.5rem)", lineHeight: "0.92", letterSpacing: "-0.01em" }}
          data-reveal
          data-reveal-delay="80"
        >
          L&apos;ACCOMPAGNEMENT<br />
          IMMOBILIER<br />
          <span className="text-coral">100&nbsp;% DÉDIÉ<br />À L&apos;ACHETEUR.</span>
        </h1>

        {/* Séparateur corail */}
        <div className="w-10 h-0.5 bg-coral/50 mb-8" data-reveal data-reveal-delay="140" />

        {/* Slogan */}
        <p
          className="text-white/70 text-lg md:text-xl leading-relaxed max-w-lg mb-6 font-sans"
          data-reveal
          data-reveal-delay="180"
        >
          De la définition de votre projet jusqu&apos;à la signature —{" "}
          <em className="font-serif italic text-white/90">exclusivement</em> dans votre camp.
        </p>

        {/* Schéma éditorial — acteurs de la transaction */}
        <div
          className="flex flex-wrap items-center gap-x-2 gap-y-2 mb-10"
          data-reveal
          data-reveal-delay="220"
        >
          <span className="font-mono text-[10px] text-white/25 border border-white/12 rounded px-2 py-1">VENDEUR</span>
          <span className="font-mono text-[10px] text-white/20">—</span>
          <span className="font-mono text-[10px] text-white/25 border border-white/12 rounded px-2 py-1">AGENT VENDEUR</span>
          <span className="font-mono text-[10px] text-white/15 mx-1">·</span>
          <span className="font-mono text-[10px] text-white/25 border border-white/12 rounded px-2 py-1">NOTAIRE</span>
          <span className="font-mono text-[10px] text-white/15 mx-1">·</span>
          <span className="font-mono text-[10px] text-white/25 border border-white/12 rounded px-2 py-1">BANQUE</span>
          <span className="font-mono text-[10px] text-white/20 mx-2">→</span>
          <span className="font-mono text-[10px] text-coral border border-coral/40 bg-coral/10 rounded px-2 py-1 font-semibold">ACHETEUR + KAP</span>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-start gap-3" data-reveal data-reveal-delay="280">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-coral text-white font-bold font-sans
              px-8 py-4 rounded-xl text-sm tracking-wide hover:bg-coral-hover
              transition-all duration-200 shadow-lg shadow-coral/25 hover:-translate-y-0.5"
          >
            Clarifier mon projet (30 min)
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="font-mono text-white/25 text-[10px] tracking-widest uppercase">
            Offert · Sans engagement · Réponse sous 24h
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-1.5 animate-bounce mt-12 mb-2">
          <span className="font-mono text-white/30 text-[10px] tracking-widest uppercase">Découvrir</span>
          <ChevronDown className="w-4 h-4 text-white/30" />
        </div>

        {/* Stats */}
        <HeroStats />
      </div>
    </section>
  );
}
