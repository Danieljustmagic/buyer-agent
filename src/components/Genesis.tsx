export default function Genesis() {
  return (
    <section className="bg-night section-pad">
      <div className="container-narrow">

        {/* Label */}
        <div className="flex items-center gap-3 mb-12" data-reveal>
          <div className="w-6 h-px bg-coral" />
          <span className="font-mono text-coral text-xs tracking-[0.2em] uppercase">
            Notre raison d&apos;être
          </span>
        </div>

        {/* Vérité de marché */}
        <div className="mb-12" data-reveal data-reveal-delay="80">
          <p className="text-white/45 text-lg leading-relaxed mb-5">
            Dans toute transaction immobilière, le vendeur est accompagné d&apos;un agent
            dont le rôle est de défendre ses intérêts — et dont la rémunération
            dépend du prix de vente.
          </p>
          <p className="text-white text-xl leading-relaxed font-semibold mb-5">
            L&apos;acheteur, lui, affronte seul un environnement réglementé, complexe,
            à fort enjeu financier.
          </p>
          <p className="text-white/45 text-base leading-relaxed border-l border-white/15 pl-5 italic font-serif">
            L&apos;agent vendeur connaît les transactions réelles, les délais de vente, la marge de négociation disponible. L&apos;acheteur, lui, ne voit que les annonces.
          </p>
        </div>

        {/* Séparateur corail */}
        <div className="w-12 h-0.5 bg-coral mb-12" data-reveal data-reveal-delay="160" />

        {/* La conviction */}
        <blockquote
          className="border-l-2 border-coral pl-8"
          data-reveal
          data-reveal-delay="220"
        >
          <p className="font-serif italic text-2xl md:text-3xl text-white leading-snug">
            &ldquo;Acheter un bien, c&apos;est prendre la décision financière la plus importante de sa vie. Elle mérite d&apos;être prise avec quelqu&apos;un dans son camp.&rdquo;
          </p>
        </blockquote>

      </div>
    </section>
  );
}
