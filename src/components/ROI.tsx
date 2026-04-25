const levers = [
  "Le prix d'achat négocié",
  "La qualité du financement",
  "Le choix de l'assurance emprunteur",
  "La stratégie globale",
];

const financial = [
  {
    label: "Négociation de 3 à 5 %",
    detail: "peut représenter 6 000 € à 15 000 € d'écart",
  },
  {
    label: "Financement mieux structuré",
    detail: "peut avoir un impact significatif sur la durée",
  },
  {
    label: "Assurance adaptée",
    detail: "peut représenter plusieurs milliers d'euros supplémentaires",
  },
];

const intangible = [
  "Le temps passé à chercher et comparer sans être sûr",
  "Les décisions repoussées par manque de clarté",
  "Les visites qui s'enchaînent sans avancer",
  "Le doute qui revient après chaque opportunité",
];

export default function ROI() {
  return (
    <section className="bg-night section-pad">
      <div className="container-main">

        {/* Header */}
        <div className="max-w-xl mb-14">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-px bg-accent" />
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
              L'équation financière
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
            Un accompagnement qui s&apos;amortit rapidement.
          </h2>
          <p className="text-white/55 text-lg leading-relaxed">
            Dans un projet immobilier, la différence ne se joue pas uniquement sur le bien choisi. Elle se joue sur :
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">

          {/* Leviers */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <ul className="space-y-3">
              {levers.map((l) => (
                <li key={l} className="flex items-center gap-3 text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {l}
                </li>
              ))}
            </ul>
          </div>

          {/* Chiffres */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-5">
              Sur un bien entre 200 000 € et 400 000 €
            </p>
            <ul className="space-y-5">
              {financial.map((f) => (
                <li key={f.label}>
                  <p className="text-white font-semibold text-sm">{f.label}</p>
                  <p className="text-white/45 text-xs mt-1 leading-relaxed">{f.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Intangible */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
          <p className="text-white/50 text-sm leading-relaxed mb-5">
            Mais au-delà de l&apos;aspect financier, il y a aussi ce que l&apos;on ne chiffre pas :
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {intangible.map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/60 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Énergie */}
        <div className="bg-white/5 border border-white/8 rounded-2xl p-6 mb-8">
          <p className="text-white/60 text-base leading-relaxed">
            Un projet immobilier ne mobilise pas uniquement un budget.
          </p>
          <p className="text-white/80 text-base leading-relaxed mt-2">
            Il mobilise votre énergie, votre attention…{" "}
            <span className="text-white">et souvent votre tranquillité d&apos;esprit.</span>
          </p>
        </div>

        {/* Punchline finale */}
        <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6">
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            L&apos;enjeu n&apos;est pas le coût de l&apos;accompagnement.
          </p>
          <p className="text-accent font-bold text-lg leading-snug font-serif italic">
            &ldquo;L&apos;enjeu, c&apos;est ce que peut vous coûter une mauvaise décision… ou l&apos;absence de décision.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
