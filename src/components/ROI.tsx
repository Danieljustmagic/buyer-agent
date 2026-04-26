const comparisons = [
  {
    alone: "Vous négociez seul, sans données de marché, sans stratégie d'approche.",
    accompanied: "Négociation préparée, argumentée, au bon moment — sur la base d'une analyse réelle du bien.",
    gain: "3 à 8 % sur le prix",
    example: "Soit 9 000 € à 24 000 € économisés sur un bien à 300 000 €",
  },
  {
    alone: "Vous acceptez l'offre de votre banque habituelle, faute de comparatif.",
    accompanied: "Financement structuré, mis en concurrence, optimisé sur la durée et le taux.",
    gain: "0,2 à 0,5 % de taux",
    example: "Soit 8 000 € à 20 000 € d'intérêts en moins sur 20 ans",
  },
  {
    alone: "Vous signez l'assurance emprunteur proposée par la banque sans la comparer.",
    accompanied: "Délégation d'assurance négociée selon votre profil.",
    gain: "0,2 à 0,4 % du capital",
    example: "Soit 5 000 € à 12 000 € d'économies sur la durée du prêt",
  },
];

export default function ROI() {
  return (
    <section className="bg-night section-pad">
      <div className="container-main">

        {/* Header */}
        <div className="max-w-2xl mb-16" data-reveal>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-px bg-accent" />
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
              Ce que vous gagnez concrètement
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
            Seul ou accompagné — la différence se chiffre.
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Sur un projet immobilier à 300 000 €, l&apos;écart entre une acquisition mal structurée et une acquisition bien accompagnée peut dépasser{" "}
            <span className="text-white font-semibold">40 000 € sur la durée du prêt.</span>
          </p>
        </div>

        {/* Tableau comparatif */}
        <div className="space-y-4 mb-10">
          {comparisons.map((c, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden
                hover:border-white/20 transition-all duration-300"
              data-reveal
              data-reveal-delay={80 + i * 100}
            >
              {/* Gain en vedette */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/8">
                <span className="text-accent font-black text-lg tracking-tight">+ {c.gain}</span>
                <span className="text-white/50 text-sm italic">{c.example}</span>
              </div>

              {/* Avant / Après */}
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/8">
                <div className="px-6 py-5">
                  <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-2">
                    Sans accompagnement
                  </p>
                  <p className="text-white/65 text-base leading-relaxed">{c.alone}</p>
                </div>
                <div className="px-6 py-5 bg-accent/5">
                  <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">
                    Avec KAP
                  </p>
                  <p className="text-white/85 text-base leading-relaxed">{c.accompanied}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total visuel */}
        <div
          className="bg-accent/10 border border-accent/25 rounded-2xl p-8 mb-6
            hover:bg-accent/15 hover:border-accent/35 transition-all duration-300"
          data-reveal
          data-reveal-delay="200"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-white/60 text-sm uppercase tracking-widest font-semibold mb-2">
                Gain potentiel total sur un bien à 300 000 €
              </p>
              <p className="text-accent font-black text-4xl md:text-5xl tracking-tight">
                + 20 000 €<span className="text-accent/60 text-2xl"> à</span> 56 000 €
              </p>
              <p className="text-white/50 text-sm mt-2">
                Négociation + optimisation du financement + assurance emprunteur
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-1">
                Investissement dans l&apos;accompagnement
              </p>
              <p className="text-white font-bold text-xl">Nettement inférieur</p>
              <p className="text-white/50 text-sm mt-1">au gain qu&apos;il génère</p>
            </div>
          </div>
        </div>

        {/* Ce qu'on ne chiffre pas */}
        <div
          className="bg-white/5 border border-white/8 rounded-2xl p-6"
          data-reveal
          data-reveal-delay="250"
        >
          <p className="text-white/55 text-sm font-semibold uppercase tracking-widest mb-4">
            Et au-delà des chiffres
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Des mois de recherche gagnés",
              "Des visites ciblées, pas au hasard",
              "Zéro doute au moment de signer",
              "Une décision prise en confiance",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-2 flex-shrink-0" />
                <p className="text-white/70 text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
