const tasks = [
  { num: "01", label: "Définir un projet réaliste" },
  { num: "02", label: "Trouver les bons biens" },
  { num: "03", label: "Analyser leur valeur réelle" },
  { num: "04", label: "Négocier au bon moment" },
  { num: "05", label: "Sécuriser le financement" },
  { num: "06", label: "Coordonner tous les intervenants" },
];

export default function Problem() {
  return (
    <section className="bg-cream section-pad">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-8" data-reveal>
              <div className="w-6 h-px bg-coral" />
              <span className="font-mono text-coral text-xs tracking-[0.2em] uppercase">Le constat</span>
            </div>
            <h2
              className="font-display font-black uppercase text-deep leading-[0.95] mb-8"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
              data-reveal
              data-reveal-delay="80"
            >
              Acheter, c&apos;est gérer seul l&apos;une des décisions les plus complexes de sa vie.
            </h2>
            <p
              className="font-mono text-text-muted text-xs tracking-widest uppercase mb-6"
              data-reveal
              data-reveal-delay="140"
            >
              Ce que vous devez assumer seul :
            </p>

            <ul className="space-y-3">
              {tasks.map((task, i) => (
                <li
                  key={task.label}
                  className="flex items-center gap-4 group/item hover:translate-x-1
                    transition-transform duration-200 cursor-default"
                  data-reveal
                  data-reveal-delay={180 + i * 60}
                >
                  <span className="font-mono text-xs font-semibold text-coral/70 w-6 flex-shrink-0
                    group-hover/item:text-coral transition-colors duration-200">
                    {task.num}
                  </span>
                  <span className="w-px h-4 bg-coral/20 flex-shrink-0" />
                  <span className="text-text-main font-medium group-hover/item:text-deep
                    transition-colors duration-200">{task.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — punchline */}
          <div className="lg:pt-16" data-reveal data-reveal-delay="200">
            <div className="bg-white rounded-2xl p-8 border border-cream-dark shadow-sm
              hover:shadow-md transition-shadow duration-300">
              <p className="font-mono text-text-muted text-xs tracking-widest uppercase mb-4">
                Le problème
              </p>
              <p className="text-text-muted text-base leading-relaxed mb-4">
                Et personne ne fait tout ça pour vous.
              </p>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                En face, le vendeur est accompagné d&apos;un agent professionnel dont la rémunération dépend du prix auquel vous achetez.
              </p>
              <blockquote className="border-l-2 border-coral pl-6">
                <p className="font-serif italic text-xl text-deep leading-relaxed">
                  &ldquo;Vous engagez la plus grande décision financière de votre vie — et vous êtes le seul acteur de la transaction sans expert dans votre camp.&rdquo;
                </p>
              </blockquote>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-coral flex-shrink-0" />
              <div className="h-px flex-1 bg-gradient-to-r from-coral/30 to-transparent" />
            </div>
            <p className="text-text-muted text-sm mt-3 pl-7">
              C&apos;est là qu&apos;intervient un accompagnement structuré.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
