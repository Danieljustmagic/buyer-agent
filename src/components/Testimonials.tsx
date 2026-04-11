const testimonials = [
  {
    quote:
      "J'avais visité plus de 30 biens sans jamais me décider. En quelques semaines d'accompagnement, j'ai compris pourquoi — et trouvé le bon.",
    name: "Sophie M.",
    detail: "Acquéreur — appartement Paris 11e",
  },
  {
    quote:
      "Ce que j'ai apprécié, c'est qu'ils n'ont jamais cherché à me pousser vers une offre. Ils m'ont aidé à penser clairement.",
    name: "Thomas & Élise R.",
    detail: "Acquéreurs — maison en région lyonnaise",
  },
  {
    quote:
      "Je me suis senti accompagné pour la première fois dans une recherche immobilière. La différence avec une agence classique est immense.",
    name: "Julien F.",
    detail: "Acquéreur — investissement locatif",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-night section-padding">
      <div className="container-wide">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Témoignages
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Ce que disent ceux qu&apos;on a accompagnés.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-8
                hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="text-4xl text-accent/40 font-serif leading-none mb-4">&ldquo;</div>
              <p className="text-white/80 text-base leading-relaxed mb-8">{t.quote}</p>
              <div>
                <div className="text-white font-semibold text-sm">{t.name}</div>
                <div className="text-white/40 text-xs mt-0.5">{t.detail}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder note */}
        <p className="text-center text-white/20 text-xs mt-12">
          Témoignages illustratifs — placeholders pour intégration de vrais avis
        </p>
      </div>
    </section>
  );
}
