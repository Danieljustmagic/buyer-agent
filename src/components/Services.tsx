const services = [
  {
    num: "01",
    title: "Définir un projet solide, pas un projet flou",
    desc: "Nous établissons ensemble un budget réel, des critères prioritaires et une stratégie d'achat — avant de chercher quoi que ce soit.",
    tags: ["Budget réel", "Critères ciblés", "Stratégie d'achat"],
  },
  {
    num: "02",
    title: "Recevoir chaque semaine des biens qui vous correspondent",
    desc: "Fini les annonces qui ne correspondent pas. Vous recevez une sélection ciblée, cohérente avec votre projet — et votre temps.",
    tags: ["Sélection qualifiée", "Gain de temps majeur", "Zéro visite inutile"],
  },
  {
    num: "03",
    title: "Analyser un bien avant d'y mettre votre cœur",
    desc: "Pour chaque bien identifié : points forts, points faibles, cohérence du prix, risques à anticiper. Vous décidez en connaissance de cause.",
    tags: ["Valeur réelle du bien", "Risques identifiés", "Décision éclairée"],
  },
  {
    num: "04",
    title: "Négocier avec méthode — et pas seul",
    desc: "Le vendeur est accompagné d'un professionnel. Vous aussi. Posture, arguments, timing : nous gérons la négociation à vos côtés pour que la discussion soit équilibrée.",
    tags: ["Stratégie de négociation", "Rapport de force rééquilibré", "3 à 8 % gagnés en moyenne"],
  },
  {
    num: "05",
    title: "Coordonner tous les intervenants à votre place",
    desc: "Courtier, assureur emprunteur, notaire, artisans — nous orchestrons l'écosystème pour que rien ne prenne de retard et que vous n'ayez pas à tout relancer.",
    tags: ["Courtier", "Assurance emprunteur", "Notaire", "Coordination totale"],
  },
  {
    num: "06",
    title: "Sécuriser chaque étape jusqu'à la signature",
    desc: "Compromis, conditions suspensives, acte authentique — nous restons présents jusqu'au bout pour que rien ne soit laissé au hasard.",
    tags: ["Suivi complet", "Aucune étape manquée", "Signature sécurisée"],
  },
];

export default function Services() {
  return (
    <section className="bg-white section-pad">
      <div className="container-main">

        {/* Header */}
        <div className="max-w-2xl mb-16" data-reveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-accent" />
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
              Ce que nous faisons concrètement
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-night leading-tight mb-5">
            Vous ne gérez plus seul l&apos;une des décisions<br className="hidden md:block" /> les plus importantes de votre vie.
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            De la définition de votre projet jusqu&apos;à la remise des clés — chaque étape est structurée, anticipée, sécurisée.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Ligne verticale */}
          <div className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-accent/60 via-accent/25 to-transparent hidden md:block" />

          <div className="space-y-2">
            {services.map((s, i) => (
              <div
                key={s.num}
                className="relative flex gap-8 md:gap-10 group"
                data-reveal
                data-reveal-delay={i * 80}
              >
                {/* Dot */}
                <div className="flex-shrink-0 hidden md:flex items-start pt-4">
                  <div className={`w-[23px] h-[23px] rounded-full border-2 flex items-center justify-center
                    transition-all duration-300 group-hover:border-accent group-hover:bg-accent/10
                    ${i === 0 ? "bg-accent border-accent" : "bg-white border-accent/30"}`}>
                    <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300
                      ${i === 0 ? "bg-white" : "bg-accent/40 group-hover:bg-accent"}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8 last:pb-0">
                  <div className="bg-white border border-stone-100 rounded-2xl p-6
                    hover:border-accent/20 hover:shadow-md transition-all duration-300">

                    {/* Numéro + Titre */}
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="text-xs font-black text-accent/60 tracking-widest flex-shrink-0">
                        {s.num}
                      </span>
                      <h3 className="font-bold text-night text-base leading-snug group-hover:text-accent/90 transition-colors duration-200">
                        {s.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-text-muted text-sm leading-relaxed mb-4 pl-7">
                      {s.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pl-7">
                      {s.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-accent font-semibold bg-accent/8 border border-accent/15
                            rounded-full px-3 py-1 hover:bg-accent/15 transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Punchline finale */}
        <div className="mt-14 pt-10 border-t border-stone-100" data-reveal>
          <p className="text-xl font-semibold text-night text-center max-w-2xl mx-auto leading-relaxed">
            Vous avancez avec méthode, sans perdre de temps,
            <span className="text-accent"> et en limitant les risques à chaque étape.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
