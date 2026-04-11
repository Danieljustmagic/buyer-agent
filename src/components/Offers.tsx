import { ArrowRight } from "lucide-react";

const offers = [
  {
    tag: "Essentiel",
    title: "Clarifier votre projet",
    description:
      "Une session de travail approfondie pour définir précisément votre projet, cadrer vos critères et structurer votre démarche. Idéal pour partir sur de bonnes bases.",
    features: [
      "Audit de votre situation",
      "Définition des critères réels",
      "Plan d'action personnalisé",
      "Recommandations stratégiques",
    ],
    highlighted: false,
  },
  {
    tag: "Ponctuel",
    title: "Sécuriser une opportunité",
    description:
      "Vous avez trouvé un bien qui vous intéresse ? Nous intervenons pour analyser, conseiller et sécuriser votre décision avant l'engagement.",
    features: [
      "Analyse complète du bien",
      "Évaluation du prix de marché",
      "Points de vigilance juridiques",
      "Accompagnement à la négociation",
    ],
    highlighted: true,
  },
  {
    tag: "Premium",
    title: "Accompagnement global",
    description:
      "Un partenariat complet de la clarification du projet jusqu'à la signature. Nous sommes à vos côtés à chaque étape, sans exception.",
    features: [
      "Tout l'essentiel inclus",
      "Sourcing et sélection des biens",
      "Visites et analyses en continu",
      "Suivi jusqu'à la signature",
    ],
    highlighted: false,
  },
];

export default function Offers() {
  return (
    <section className="bg-white section-padding">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent-hover font-semibold text-sm uppercase tracking-widest mb-4">
            Nos offres
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-night leading-tight mb-4">
            Un accompagnement adapté à votre situation.
          </h2>
          <p className="text-slate-500 text-lg">
            Chaque acheteur est différent. Chaque accompagnement l&apos;est aussi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className={`rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                offer.highlighted
                  ? "bg-night text-white shadow-2xl shadow-night/20 scale-105"
                  : "bg-bg-soft border border-slate-100 hover:shadow-lg"
              }`}
            >
              <div className="mb-6">
                <span
                  className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                    offer.highlighted
                      ? "bg-accent text-night"
                      : "bg-white text-slate-500 border border-slate-200"
                  }`}
                >
                  {offer.tag}
                </span>
              </div>

              <h3
                className={`text-xl font-bold mb-4 ${
                  offer.highlighted ? "text-white" : "text-night"
                }`}
              >
                {offer.title}
              </h3>

              <p
                className={`text-sm leading-relaxed mb-8 ${
                  offer.highlighted ? "text-white/60" : "text-slate-500"
                }`}
              >
                {offer.description}
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {offer.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        offer.highlighted ? "bg-accent" : "bg-night"
                      }`}
                    />
                    <span
                      className={offer.highlighted ? "text-white/80" : "text-slate-600"}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3
                  font-medium text-sm transition-all duration-200 ${
                    offer.highlighted
                      ? "bg-accent text-night hover:bg-accent-hover"
                      : "bg-night text-white hover:bg-night-light"
                  }`}
              >
                En savoir plus <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
