const levers = [
  {
    gain: "+ 9 000 €",
    gainTo: "à 24 000 €",
    label: "Négociation",
    alone: "Vous négociez seul, sans données ni stratégie",
    kap: "Offre construite sur l'analyse réelle du marché",
  },
  {
    gain: "+ 8 000 €",
    gainTo: "à 20 000 €",
    label: "Financement",
    alone: "Vous acceptez le taux de votre banque habituelle",
    kap: "Crédit mis en concurrence, taux et durée optimisés",
  },
  {
    gain: "+ 5 000 €",
    gainTo: "à 12 000 €",
    label: "Assurance",
    alone: "Vous signez l'assurance de votre banque sans comparer",
    kap: "Délégation d'assurance négociée selon votre profil",
  },
];

export default function ROI() {
  return (
    <section className="bg-night section-pad">
      <div className="container-main">

        {/* Header + Grand chiffre */}
        <div className="mb-16" data-reveal>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-px bg-accent" />
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
              Ce que vous gagnez concrètement
            </span>
          </div>

          <p className="text-white/60 text-lg leading-relaxed mb-3">
            Sur un bien à 300 000 €, un acheteur accompagné économise en moyenne
          </p>

          {/* Chiffre héro */}
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-accent font-black text-3xl tracking-tight leading-none">
              + 22 000 €
            </span>
            <span className="text-white/40 text-xl font-light">—</span>
            <span className="text-white font-black text-3xl tracking-tight leading-none">56 000 €</span>
          </div>

          <p className="text-white/40 text-sm tracking-wide">
            Négociation · Financement · Assurance emprunteur · Voici comment ↓
          </p>
        </div>

        {/* 3 leviers */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {levers.map((l, i) => (
            <div
              key={l.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-6
                hover:bg-white/8 hover:border-accent/20 transition-all duration-300"
              data-reveal
              data-reveal-delay={i * 100}
            >
              {/* Gain */}
              <div className="mb-5">
                <span className="text-accent font-black text-3xl tracking-tight">{l.gain}</span>
                <span className="text-white/40 text-base ml-2">à {l.gainTo.replace("à ", "")}</span>
              </div>

              {/* Label */}
              <p className="text-white font-bold text-sm uppercase tracking-widest mb-5">
                {l.label}
              </p>

              {/* Séparateur */}
              <div className="border-t border-white/8 mb-5" />

              {/* Sans */}
              <div className="flex items-start gap-2.5 mb-3">
                <span className="text-red-400/70 text-sm mt-0.5 flex-shrink-0">✕</span>
                <p className="text-white/45 text-sm leading-snug">{l.alone}</p>
              </div>

              {/* Avec KAP */}
              <div className="flex items-start gap-2.5">
                <span className="text-accent text-sm mt-0.5 flex-shrink-0">✓</span>
                <p className="text-white/85 text-sm leading-snug">{l.kap}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Levier expertise marché — pleine largeur */}
        <div
          className="bg-white/5 border border-accent/20 rounded-2xl p-6 mb-4"
          data-reveal
          data-reveal-delay="300"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="flex-shrink-0">
              <p className="text-accent font-bold text-sm uppercase tracking-widest mb-1">Expertise marché & locale</p>
              <p className="text-white/40 text-xs">Avantage décisif · non chiffrable</p>
            </div>
            <div className="w-px bg-white/10 hidden md:block" />
            <div className="grid md:grid-cols-2 gap-4 flex-1">
              <div className="flex items-start gap-2.5">
                <span className="text-red-400/70 text-sm mt-0.5 flex-shrink-0">✕</span>
                <p className="text-white/45 text-sm leading-snug">
                  Vous ne savez pas si le prix au m² est cohérent, ni ce qui est prévu autour du bien — projets urbains, infrastructure, évolution du quartier.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-accent text-sm mt-0.5 flex-shrink-0">✓</span>
                <p className="text-white/85 text-sm leading-snug">
                  Connaissance parfaite du marché local, des projets structurants environnants et de toutes les informations utiles — pour vous positionner sur un bien avec une vision complète de son environnement proche.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Intangibles */}
        <div
          className="border-t border-white/8 pt-10"
          data-reveal
          data-reveal-delay="200"
        >
          <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-6">
            Et ce qu'on ne peut pas chiffrer
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Des mois de recherche gagnés",
              "Des visites ciblées, pas au hasard",
              "Zéro doute au moment de signer",
              "Une décision prise en confiance",
            ].map((item) => (
              <div
                key={item}
                className="border-l-2 border-accent/30 pl-4 py-1
                  hover:border-accent transition-colors duration-200"
              >
                <p className="text-white/65 text-sm leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
