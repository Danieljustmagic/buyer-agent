const tasks = [
  "Définir un projet réaliste",
  "Trouver les bons biens",
  "Analyser leur valeur réelle",
  "Négocier au bon moment",
  "Sécuriser le financement",
  "Coordonner tous les intervenants",
];

export default function Problem() {
  return (
    <section className="bg-beige section-pad">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px bg-accent" />
              <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">Le constat</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-night leading-tight mb-6">
              Acheter aujourd&apos;hui, c&apos;est gérer seul un projet complexe.
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              Pour acheter, vous devez :
            </p>

            <ul className="space-y-4">
              {tasks.map((task, i) => (
                <li key={task} className="flex items-center gap-4">
                  <span className="text-xs font-bold text-accent/60 w-5 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="w-px h-4 bg-accent/20 flex-shrink-0" />
                  <span className="text-text-main font-medium">{task}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — punchline */}
          <div className="lg:pt-20">
            <div className="bg-white rounded-2xl p-8 border border-beige-dark shadow-sm">
              <p className="text-text-muted text-base leading-relaxed mb-6">
                Et personne ne fait tout ça pour vous.
              </p>
              <blockquote className="border-l-2 border-accent pl-6">
                <p className="font-serif italic text-xl text-night leading-relaxed">
                  &ldquo;Vous prenez une décision importante… tout en gérant seul toute la complexité.&rdquo;
                </p>
              </blockquote>
            </div>

            {/* Jalon visuel */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
              <div className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
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
