const myRole = ["La méthode", "Le cadre", "L'analyse", "La stratégie"];
const yourRole = ["Vous avancez", "Vous visitez", "Vous ressentez", "Vous décidez"];

export default function Partnership() {
  return (
    <section className="bg-beige section-pad">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — texte */}
          <div data-reveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px bg-accent" />
              <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
                Un accompagnement en équipe
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-night leading-tight mb-6">
              Ce que je propose n&apos;est pas une délégation complète.
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              Vous restez acteur de votre projet.
            </p>

            {/* Punchline finale */}
            <div className="border-l-2 border-accent pl-6 mt-10">
              <p className="font-serif italic text-lg text-night leading-relaxed">
                &ldquo;Nous avançons ensemble, avec un objectif commun : prendre la bonne décision dans les bonnes conditions.&rdquo;
              </p>
            </div>
          </div>

          {/* Right — deux colonnes rôles */}
          <div className="grid grid-cols-2 gap-4">

            {/* Moi */}
            <div
              className="bg-night rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              data-reveal
              data-reveal-delay="100"
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-accent text-xs font-bold uppercase tracking-widest">Moi</span>
              </div>
              <ul className="space-y-3">
                {myRole.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80 text-sm
                    group/item hover:text-white transition-colors duration-200 cursor-default">
                    <span className="w-1 h-1 rounded-full bg-accent/60 flex-shrink-0
                      group-hover/item:bg-accent transition-colors duration-200" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vous */}
            <div
              className="bg-white rounded-2xl p-6 border border-beige-dark hover:shadow-lg
                transition-shadow duration-300"
              data-reveal
              data-reveal-delay="180"
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-text-light" />
                <span className="text-text-muted text-xs font-bold uppercase tracking-widest">Vous</span>
              </div>
              <ul className="space-y-3">
                {yourRole.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-text-muted text-sm
                    group/item hover:text-text-main transition-colors duration-200 cursor-default">
                    <span className="w-1 h-1 rounded-full bg-text-light flex-shrink-0
                      group-hover/item:bg-accent transition-colors duration-200" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trait de jonction */}
            <div className="col-span-2 flex items-center gap-3 px-2">
              <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
              <div className="w-2 h-2 rounded-full bg-accent/40" />
              <div className="flex-1 h-px bg-gradient-to-l from-accent/30 to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
