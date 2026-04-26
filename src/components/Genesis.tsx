export default function Genesis() {
  return (
    <section className="bg-night section-pad">
      <div className="container-narrow">

        {/* Label */}
        <div className="flex items-center gap-3 mb-12" data-reveal>
          <div className="w-6 h-px bg-accent" />
          <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
            Notre raison d&apos;être
          </span>
        </div>

        {/* Vérité de marché */}
        <div className="mb-12" data-reveal data-reveal-delay="80">
          <p className="text-white/50 text-lg leading-relaxed mb-4">
            Dans toute transaction immobilière, le vendeur est accompagné d&apos;un agent
            immobilier dont le rôle est de défendre ses intérêts — et dont la rémunération
            dépend du prix de vente.
          </p>
          <p className="text-white text-lg leading-relaxed font-medium">
            L&apos;acheteur, lui, affronte seul un environnement réglementé, complexe,
            à fort enjeu financier.
          </p>
        </div>

        {/* Séparateur ambre */}
        <div className="w-12 h-0.5 bg-accent mb-12" data-reveal data-reveal-delay="160" />

        {/* La conviction */}
        <blockquote
          className="border-l-2 border-accent pl-8 mb-12"
          data-reveal
          data-reveal-delay="220"
        >
          <p className="font-serif italic text-2xl md:text-3xl text-white leading-snug">
            &ldquo;Pourtant, acheter un bien, ce n&apos;est pas signer un contrat.
            C&apos;est un moment de vie — une étape essentielle pour construire l&apos;avenir.&rdquo;
          </p>
        </blockquote>

        {/* La conclusion */}
        <p
          className="text-white/70 text-lg leading-relaxed"
          data-reveal
          data-reveal-delay="300"
        >
          KAP est né d&apos;une conviction simple : ceux qui s&apos;engagent dans ce projet
          méritent d&apos;être{" "}
          <span className="text-white font-semibold">défendus, guidés et représentés</span>
          {" "}— au même titre que la partie en face.
        </p>

      </div>
    </section>
  );
}
