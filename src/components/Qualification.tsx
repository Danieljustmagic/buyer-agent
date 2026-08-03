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
        <div className="text-center mb-12" data-reveal>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-6 h-px bg-coral" />
            <span className="font-mono text-coral text-xs tracking-[0.2em] uppercase">Pour qui ?</span>
            <div className="w-6 h-px bg-coral" />
          </div>
          <h2
            className="font-display font-black uppercase text-white leading-[0.95]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            Cet accompagnement est fait pour vous si…
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {criteria.map((c, i) => (
            <div
              key={c}
              className="flex items-start gap-4 bg-white/5 border border-white/8 rounded-xl p-5
                hover:bg-white/10 hover:border-coral/30 hover:-translate-y-0.5
                transition-all duration-200 cursor-default"
              data-reveal
              data-reveal-delay={i * 90}
            >
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-coral/15 border border-coral/30
                flex items-center justify-center mt-0.5 transition-colors duration-200">
                <span className="font-mono text-coral text-xs font-semibold">{i + 1}</span>
              </div>
              <p className="text-white/85 text-base leading-snug">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
