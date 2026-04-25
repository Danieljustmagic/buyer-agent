const levers = [
  "Le prix d'achat négocié",
  "La qualité du financement",
  "Le choix de l'assurance emprunteur",
  "La stratégie globale",
];

export default function ROI() {
  return (
    <section className="bg-night section-pad">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px bg-accent" />
              <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">L'équation financière</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
              Un accompagnement qui s&apos;amortit rapidement.
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              Dans un projet immobilier, la différence ne se fait pas uniquement sur le bien choisi. Elle se joue sur :
            </p>
            <ul className="space-y-4 mb-10">
              {levers.map((l) => (
                <li key={l} className="flex items-center gap-3 text-white/75">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {l}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — chiffres */}
          <div className="space-y-5">
            {/* Bloc prix */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">
                Sur un bien entre 200 000 € et 400 000 €
              </p>
              <div className="space-y-3">
                {[
                  "Une négociation de 3 à 5 %",
                  "Un financement optimisé",
                  "Une assurance mieux adaptée",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-white/10">
                <p className="text-white font-semibold text-base">
                  = plusieurs milliers à plusieurs dizaines de milliers d&apos;euros d&apos;écart.
                </p>
              </div>
            </div>

            {/* Punchline finale */}
            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6">
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                L&apos;enjeu n&apos;est pas le coût de l&apos;accompagnement.
              </p>
              <p className="text-accent font-bold text-lg leading-snug font-serif italic">
                &ldquo;L&apos;enjeu, c&apos;est le coût d&apos;une mauvaise décision.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
