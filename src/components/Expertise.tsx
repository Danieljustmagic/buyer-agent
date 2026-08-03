const abilities = [
  "Analyser les transactions réelles — pas seulement les annonces",
  "Négocier avec méthode, en connaissant la situation réelle du vendeur",
  "Coordonner chaque intervenant dans votre seul intérêt",
];

export default function Expertise() {
  return (
    <section className="bg-night section-pad">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div data-reveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px bg-accent" />
              <span className="font-mono text-coral text-xs tracking-[0.2em] uppercase">
                Notre engagement
              </span>
            </div>

            <h2
              className="font-display font-black uppercase text-white leading-[0.92] mb-6"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              Le seul intervenant dont l&apos;intérêt est aligné sur le vôtre.
            </h2>

            <p className="text-white/65 text-lg leading-relaxed mb-10 font-serif italic">
              L&apos;agent vendeur défend le vendeur. Le notaire reste impartial. La banque place un financement. KAP, lui, ne défend qu&apos;une seule partie : vous.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-5">

            {/* Ce que ça permet */}
            <div
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              data-reveal
              data-reveal-delay="120"
            >
              {abilities.map((a, i) => (
                <div
                  key={a}
                  className={`flex items-center gap-5 px-6 py-5 group/item cursor-default
                    hover:bg-white/8 transition-colors duration-200
                    ${i < abilities.length - 1 ? "border-b border-white/8" : ""}`}
                  data-reveal
                  data-reveal-delay={120 + i * 80}
                >
                  <span className="font-mono text-coral font-semibold text-sm flex-shrink-0 w-6 text-center">
                    {i + 1}
                  </span>
                  <span className="text-white/85 text-base leading-snug
                    group-hover/item:text-white transition-colors duration-200">{a}</span>
                </div>
              ))}
            </div>

            {/* Décider avec justesse */}
            <div
              className="bg-accent/10 border border-accent/20 rounded-2xl p-6
                hover:bg-accent/15 hover:border-accent/30 transition-all duration-300"
              data-reveal
              data-reveal-delay="200"
            >
              <p className="font-display font-bold uppercase text-white text-base leading-snug"
                style={{ letterSpacing: "-0.01em" }}>
                Dans cette transaction, vous n&apos;avez qu&apos;une chance.{" "}
                <span className="text-coral">Nous, nous en avons accompagné des dizaines.</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
