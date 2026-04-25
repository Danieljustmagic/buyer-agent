import { ArrowRight } from "lucide-react";

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
              Accompagnement acheteur immobilier
            </span>
          </div>

          {/* Titre */}
          <h1
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] mb-6"
            data-reveal
            data-reveal-delay="80"
          >
            Vous cherchez à acheter
            <br />
            un bien immobilier…
            <br />
            <span className="text-accent">mais vous ne voulez pas</span>
            <br />
            <span className="text-accent">vous tromper.</span>
          </h1>

          {/* Ligne de séparation */}
          <div className="w-8 h-0.5 bg-accent/40 mb-8" data-reveal data-reveal-delay="160" />

          {/* Corps */}
          <p
            className="text-white/75 text-lg mb-8 leading-relaxed"
            data-reveal
            data-reveal-delay="200"
          >
            Je vous accompagne concrètement de A à Z :
          </p>

          <ul className="space-y-3 mb-12">
            {[
              "Définir un projet solide",
              "Sélectionner des biens pertinents",
              "Analyser et négocier",
              "Sécuriser votre achat jusqu'à la signature",
            ].map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-3 text-white/80 text-base group/item
                  hover:text-white transition-colors duration-200 cursor-default"
                data-reveal
                data-reveal-delay={240 + i * 70}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0
                  group-hover/item:scale-125 transition-transform duration-200" />
                {item}
              </li>
            ))}
          </ul>

          {/* CTA principal */}
          <div
            className="flex flex-col sm:flex-row gap-4 items-start"
            data-reveal
            data-reveal-delay="520"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-accent text-night font-bold
                px-8 py-4 rounded-xl text-sm tracking-wide hover:bg-accent-hover
                transition-all duration-200 shadow-lg shadow-accent/20 hover:-translate-y-0.5"
            >
              Faire le point sur mon projet
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mention RDV gratuit */}
          <p
            className="text-white/50 text-sm mt-4"
            data-reveal
            data-reveal-delay="580"
          >
            Premier échange de 30 min — offert, sans engagement
          </p>
        </div>

        {/* Bas de page – chiffres */}
        <div
          className="mt-24 pt-8 border-t border-white/10 grid grid-cols-3 gap-8 max-w-md"
          data-reveal
          data-reveal-delay="640"
        >
          {[
            { v: "A → Z", l: "accompagnement complet" },
            { v: "100%", l: "dans votre camp" },
            { v: "0", l: "conflit d'intérêt" },
          ].map((s) => (
            <div key={s.l} className="group/stat">
              <div className="text-xl font-black text-white group-hover/stat:text-accent transition-colors duration-200">
                {s.v}
              </div>
              <div className="text-xs text-white/55 mt-1 leading-snug">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
