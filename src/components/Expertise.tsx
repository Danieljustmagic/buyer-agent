const abilities = [
  "Anticiper les points de blocage",
  "Adopter les bons codes face aux interlocuteurs",
  "Intervenir au bon moment pour sécuriser votre projet",
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
              <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
                Notre équipe
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
              Des professionnels de l&apos;accompagnement immobilier à vos côtés.
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Financement, négociation, stratégie d&apos;acquisition — une expertise réunie pour défendre votre intérêt à chaque étape.
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
                  <span className="text-accent font-black text-lg flex-shrink-0 w-6 text-center">
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
              <p className="text-white font-semibold text-base leading-relaxed">
                Parce qu&apos;une mauvaise décision coûte{" "}
                <span className="text-accent">bien plus qu&apos;un accompagnement.</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
