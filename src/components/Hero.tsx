import { ArrowRight, ChevronDown } from "lucide-react";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-night flex items-center overflow-hidden">

      {/* Grille de fond discrète */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Halo ambre – discret */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-[0.08] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #C8A96A 0%, transparent 70%)",
        }}
      />

      {/* Ligne de parcours – signature verticale */}
      <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent hidden xl:block" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-24 w-full">
        <div className="max-w-2xl">

          {/* Étiquette */}
          <div className="flex items-center gap-3 mb-10" data-reveal>
            <div className="w-6 h-px bg-accent" />
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
              KAP · Accompagnement acheteur immobilier
            </span>
          </div>

          {/* Titre */}
          <h1
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] mb-6"
            data-reveal
            data-reveal-delay="80"
          >
            Vous voulez acheter
            <br />
            un bien immobilier.
          </h1>

          {/* Ligne de séparation */}
          <div className="w-8 h-0.5 bg-accent/40 mb-8" data-reveal data-reveal-delay="160" />

          {/* Tension */}
          <p
            className="text-accent text-xl font-semibold mb-6 leading-snug"
            data-reveal
            data-reveal-delay="200"
          >
            Mais au moment de décider, tout devient plus complexe.
          </p>

          {/* Corps */}
          <p
            className="text-white/75 text-lg leading-relaxed mb-12"
            data-reveal
            data-reveal-delay="280"
          >
            Notre rôle est de vous accompagner tout au long de votre projet, de l&apos;analyse des opportunités à la sécurisation de votre achat jusqu&apos;à sa signature.
          </p>

          {/* CTA principal */}
          <div
            className="flex flex-col items-start gap-3"
            data-reveal
            data-reveal-delay="520"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-accent text-night font-bold
                px-8 py-4 rounded-xl text-sm tracking-wide hover:bg-accent-hover
                transition-all duration-200 shadow-lg shadow-accent/20 hover:-translate-y-0.5"
            >
              Clarifier mon projet (30 min)
              <ArrowRight className="w-4 h-4" />
            </a>
            <p
              className="text-white/55 text-sm leading-relaxed max-w-sm"
              data-reveal
              data-reveal-delay="580"
            >
              Un premier échange pour comprendre votre situation et déterminer la meilleure suite à donner.
            </p>
          </div>
        </div>

        {/* Scroll indicator — au-dessus des stats */}
        <div className="flex flex-col items-center gap-1.5 animate-bounce mt-8 mb-2">
          <span className="text-white/80 text-xs tracking-widest uppercase font-semibold">Découvrir</span>
          <ChevronDown className="w-5 h-5 text-white/80" />
        </div>

        {/* Bas de page – chiffres animés */}
        <HeroStats />
      </div>
    </section>
  );
}
