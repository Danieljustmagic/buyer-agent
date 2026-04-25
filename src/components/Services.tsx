const services = [
  {
    num: "01",
    title: "Nous définissons ensemble un projet précis",
    items: ["Budget réel", "Critères prioritaires", "Stratégie d'achat"],
    extra: null,
  },
  {
    num: "02",
    title: "Nous vous proposons des biens chaque semaine",
    items: ["Sélection ciblée", "Biens cohérents avec votre projet", "Gain de temps considérable"],
    extra: null,
  },
  {
    num: "03",
    title: "Nous vous aidons à analyser les biens",
    items: ["Points forts et points faibles", "Cohérence du prix", "Risques éventuels"],
    extra: null,
  },
  {
    num: "04",
    title: "Nous vous accompagnons dans la négociation",
    items: ["Posture", "Stratégie", "Timing"],
    extra: {
      label: "Une négociation plus équilibrée",
      intro:
        "Dans une transaction immobilière, le vendeur est presque toujours représenté par un agent immobilier. L'acheteur, lui, est seul.",
      blocks: [
        {
          heading: "Lorsque nous intervenons à vos côtés, la dynamique change.",
          points: [
            "Vous n'êtes plus seul face à un professionnel",
            "La discussion devient plus fluide",
            "Les échanges sont plus structurés",
            "Les enjeux sont mieux compris",
          ],
        },
        {
          heading: "Le fait de dialoguer entre professionnels permet :",
          points: [
            "D'éviter les incompréhensions",
            "De poser les bons arguments",
            "De mieux défendre votre position",
          ],
        },
      ],
      conclusion: "Cela rééquilibre la relation et favorise une négociation plus juste.",
    },
  },
  {
    num: "05",
    title: "Nous coordonnons tout l'écosystème",
    items: ["Courtier", "Assurance emprunteur", "Notaire", "Artisans"],
    extra: null,
  },
  {
    num: "06",
    title: "Nous vous accompagnons jusqu'à la signature",
    items: ["Suivi complet", "Sécurisation des étapes", "Cohérence globale"],
    extra: null,
  },
];

export default function Services() {
  return (
    <section className="bg-white section-pad">
      <div className="container-main">

        {/* Header */}
        <div className="max-w-xl mb-16" data-reveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-accent" />
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">Ce que nous faisons concrètement</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-night leading-tight">
            Nous prenons en charge votre parcours d&apos;achat.
          </h2>
        </div>

        {/* Timeline avec ligne de parcours */}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent hidden md:block" />

          <div className="space-y-0">
            {services.map((s, i) => (
              <div
                key={s.num}
                className="relative flex gap-8 md:gap-12 pb-0"
                data-reveal
                data-reveal-delay={i * 90}
              >
                {/* Jalon */}
                <div className="flex-shrink-0 relative z-10 hidden md:flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full border-2 mt-2 transition-colors duration-300 ${
                    i === 0 ? "bg-accent border-accent" : "bg-white border-accent/40"
                  }`} />
                  {i < services.length - 1 && (
                    <div className="w-px flex-1 bg-accent/15 mt-1 min-h-[60px]" />
                  )}
                </div>

                {/* Card */}
                <div className={`flex-1 pb-10 ${i === services.length - 1 ? "pb-0" : ""}`}>
                  <div className="group bg-beige hover:bg-white rounded-2xl border border-beige-dark
                    hover:border-accent/25 hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <span className="text-xs font-black text-accent/80 tracking-widest mt-1
                          flex-shrink-0 group-hover:text-accent transition-colors duration-200">
                          {s.num}
                        </span>
                        <div className="flex-1">
                          <h3 className="font-bold text-night text-base mb-3">{s.title}</h3>
                          <ul className="flex flex-wrap gap-2">
                            {s.items.map((item) => (
                              <li
                                key={item}
                                className="text-xs text-text-muted bg-white border border-beige-dark
                                  rounded-full px-3 py-1 hover:border-accent/30 hover:text-text-main
                                  transition-colors duration-200"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Bloc étendu — négociation */}
                    {s.extra && (
                      <div className="border-t border-beige-dark bg-white px-6 pb-6 pt-5">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-4 h-px bg-accent" />
                          <span className="text-accent text-xs font-bold uppercase tracking-widest">
                            {s.extra.label}
                          </span>
                        </div>
                        <p className="text-text-muted text-base leading-relaxed mb-6">
                          {s.extra.intro}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-5">
                          {s.extra.blocks.map((block) => (
                            <div key={block.heading} className="bg-beige rounded-xl p-5 border border-beige-dark
                              hover:border-accent/20 transition-colors duration-200">
                              <p className="text-night text-sm font-semibold mb-3 leading-snug">
                                {block.heading}
                              </p>
                              <ul className="space-y-2">
                                {block.points.map((pt) => (
                                  <li key={pt} className="flex items-start gap-2 text-sm text-text-muted
                                    hover:text-text-main transition-colors duration-200">
                                    <span className="w-1 h-1 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                                    {pt}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <p className="text-night font-semibold text-base mt-5 pl-4 border-l-2 border-accent">
                          {s.extra.conclusion}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Punchline finale */}
        <div className="mt-14 pt-10 border-t border-beige-dark" data-reveal>
          <p className="text-xl font-semibold text-night text-center max-w-2xl mx-auto leading-relaxed">
            Vous avancez avec méthode, sans perdre de temps,
            <span className="text-accent"> et en limitant les risques.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
