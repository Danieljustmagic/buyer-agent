const criteria = [
  "Vous voulez gagner du temps",
  "Vous voulez éviter les erreurs",
  "Vous ne voulez pas gérer seul un projet complexe",
  "Vous souhaitez être accompagné de A à Z",
];

export default function Qualification() {
  return (
    <section className="bg-night-mid section-pad">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-6 h-px bg-accent" />
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">Pour qui ?</span>
            <div className="w-6 h-px bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Cet accompagnement est fait pour vous si…
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {criteria.map((c, i) => (
            <div
              key={c}
              className="flex items-start gap-4 bg-white/5 border border-white/8 rounded-xl p-5
                hover:bg-white/8 hover:border-accent/20 transition-all duration-200"
            >
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/15 border border-accent/30
                flex items-center justify-center mt-0.5">
                <span className="text-accent text-xs font-black">{i + 1}</span>
              </div>
              <p className="text-white/75 leading-snug">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
