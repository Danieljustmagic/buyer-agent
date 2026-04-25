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
              Notre équipe réunit des experts issus du financement, du conseil et de la stratégie immobilière. Ce qui fait la différence ne se voit pas toujours.
            </p>

            {/* Citation */}
            <div className="border-l-2 border-accent pl-6 space-y-4">
              <p className="text-white/80 text-base leading-relaxed">
                C&apos;est ce qui nous permet d&apos;anticiper les obstacles,
                <span className="text-white"> de structurer votre démarche et de défendre votre intérêt à chaque étape.</span>
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-5">

            {/* Ce que ça permet */}
            <div
              className="bg-white/5 border border-white/10 rounded-2xl p-6
                hover:bg-white/8 hover:border-white/15 transition-all duration-300"
              data-reveal
              data-reveal-delay="120"
            >
              <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-5">
                Aujourd&apos;hui, cela nous permet :
              </p>
              <ul className="space-y-4">
                {abilities.map((a, i) => (
                  <li
                    key={a}
                    className="flex items-start gap-3 group/item cursor-default"
                    data-reveal
                    data-reveal-delay={120 + i * 80}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0
                      group-hover/item:scale-125 transition-transform duration-200" />
                    <span className="text-white/80 text-sm leading-relaxed
                      group-hover/item:text-white transition-colors duration-200">{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Décider avec justesse */}
            <div
              className="bg-accent/10 border border-accent/20 rounded-2xl p-6
                hover:bg-accent/15 hover:border-accent/30 transition-all duration-300"
              data-reveal
              data-reveal-delay="200"
            >
              <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">
                Nous vous aidons aussi à décider avec justesse.
              </p>
              <p className="text-white/75 text-sm leading-relaxed">
                Au-delà des chiffres, il s&apos;agit de savoir{" "}
                <span className="text-white font-medium">quand s&apos;engager</span>,{" "}
                <span className="text-white font-medium">à quelles conditions</span>, et{" "}
                <span className="text-white font-medium">pourquoi</span>.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
