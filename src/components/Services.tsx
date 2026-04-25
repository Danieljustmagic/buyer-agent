const services = [
  {
    num: "01",
    title: "On définit un projet ultra précis",
    items: ["Budget réel", "Critères prioritaires", "Stratégie d'achat"],
  },
  {
    num: "02",
    title: "Je vous propose des biens chaque semaine",
    items: ["Sélection ciblée", "Biens cohérents avec votre projet", "Gain de temps considérable"],
  },
  {
    num: "03",
    title: "Je vous aide à analyser les biens",
    items: ["Points forts et points faibles", "Cohérence du prix", "Risques éventuels"],
  },
  {
    num: "04",
    title: "Je vous accompagne dans la négociation",
    items: ["Posture", "Stratégie", "Timing"],
  },
  {
    num: "05",
    title: "Je coordonne tout l'écosystème",
    items: ["Courtier", "Assurance emprunteur", "Notaire", "Artisans"],
  },
  {
    num: "06",
    title: "Je vous accompagne jusqu'à la signature",
    items: ["Suivi complet", "Sécurisation des étapes", "Cohérence globale"],
  },
];

export default function Services() {
  return (
    <section className="bg-white section-pad">
      <div className="container-main">

        {/* Header */}
        <div className="max-w-xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-accent" />
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">Ce que je fais concrètement</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-night leading-tight">
            Je prends en charge votre parcours d&apos;achat.
          </h2>
        </div>

        {/* Timeline avec ligne de parcours */}
        <div className="relative">
          {/* Ligne verticale centrale – signature */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent hidden md:block" />

          <div className="space-y-0">
            {services.map((s, i) => (
              <div key={s.num} className="relative flex gap-8 md:gap-12 pb-0">

                {/* Jalon */}
                <div className="flex-shrink-0 relative z-10 hidden md:flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full border-2 mt-2 ${
                    i === 0 ? "bg-accent border-accent" : "bg-white border-accent/40"
                  }`} />
                  {i < services.length - 1 && (
                    <div className="w-px flex-1 bg-accent/15 mt-1 min-h-[60px]" />
                  )}
                </div>

                {/* Card */}
                <div className={`flex-1 pb-10 ${i === services.length - 1 ? "pb-0" : ""}`}>
                  <div className="group bg-beige hover:bg-white rounded-2xl p-6 border border-beige-dark hover:border-accent/20 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-black text-accent/50 tracking-widest mt-1 flex-shrink-0">
                        {s.num}
                      </span>
                      <div>
                        <h3 className="font-bold text-night text-base mb-3 group-hover:text-night transition-colors">
                          {s.title}
                        </h3>
                        <ul className="flex flex-wrap gap-2">
                          {s.items.map((item) => (
                            <li
                              key={item}
                              className="text-xs text-text-muted bg-white border border-beige-dark rounded-full px-3 py-1"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Punchline finale */}
        <div className="mt-14 pt-10 border-t border-beige-dark">
          <p className="text-xl font-semibold text-night text-center max-w-2xl mx-auto leading-relaxed">
            Vous avancez avec méthode, sans perdre de temps,
            <span className="text-accent"> et en limitant les risques.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
