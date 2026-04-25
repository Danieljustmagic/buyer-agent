import { ArrowRight } from "lucide-react";

const offers = [
  {
    tag: "Gratuit",
    title: "Clarifier mon projet",
    duration: "30 min",
    price: "Offert",
    priceNote: "sans engagement",
    description:
      "Un premier échange pour comprendre votre situation et déterminer la meilleure suite à donner.",
    features: [
      "Comprendre votre projet",
      "Identifier vos enjeux",
      "Vérifier la faisabilité",
      "Définir la meilleure suite",
    ],
    highlighted: false,
    cta: "Clarifier mon projet (30 min)",
  },
  {
    tag: "Session",
    title: "Session de Décision Immobilière",
    duration: "Travail approfondi",
    price: "490 €",
    priceNote: "session unique",
    description:
      "Un travail approfondi pour cadrer complètement votre projet et construire une stratégie d'achat claire.",
    features: [
      "Cadrer complètement votre projet",
      "Définir des critères précis",
      "Construire une stratégie d'achat",
      "Valider les options",
      "Établir un plan d'action clair",
    ],
    highlighted: true,
    cta: "Démarrer la session",
  },
  {
    tag: "Complet",
    title: "Accompagnement jusqu'à la signature",
    duration: "Durée de votre projet",
    price: "À partir de 2 500 €",
    priceNote: "sur mesure",
    description:
      "Nous vous accompagnons sur l'ensemble du parcours, de la définition du projet jusqu'à l'acte de vente.",
    features: [
      "Définition précise du projet",
      "Sélection hebdomadaire de biens",
      "Analyse des opportunités",
      "Accompagnement à la négociation",
      "Mise en relation avec des pros",
      "Coordination globale",
      "Suivi jusqu'à l'acte",
    ],
    highlighted: false,
    cta: "En savoir plus",
  },
];

export default function Offers() {
  return (
    <section id="offres" className="bg-white section-pad">
      <div className="container-main">

        <div className="max-w-xl mb-14" data-reveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-accent" />
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">Aller plus loin</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-night leading-tight">
            Tout commence par un rendez-vous.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((o, i) => (
            <div
              key={o.title}
              className={`rounded-2xl p-8 flex flex-col h-full border transition-all duration-300 ${
                o.highlighted
                  ? "bg-night border-night shadow-2xl shadow-night/30 hover:-translate-y-1"
                  : "bg-beige border-beige-dark hover:border-accent/30 hover:shadow-lg hover:-translate-y-0.5"
              }`}
              data-reveal
              data-reveal-delay={i * 100}
            >
              {/* Tag */}
              <div className="mb-6">
                <span
                  className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${
                    o.highlighted
                      ? "bg-accent text-night"
                      : "bg-white border border-beige-dark text-text-muted"
                  }`}
                >
                  {o.tag}
                </span>
              </div>

              {/* Titre */}
              <h3
                className={`font-extrabold text-lg leading-snug mb-2 ${
                  o.highlighted ? "text-white" : "text-night"
                }`}
              >
                {o.title}
              </h3>

              {/* Prix */}
              <div className="mb-5">
                <span
                  className={`text-2xl font-black ${
                    o.highlighted ? "text-accent" : "text-night"
                  }`}
                >
                  {o.price}
                </span>
                <span
                  className={`text-xs ml-2 ${
                    o.highlighted ? "text-white/60" : "text-text-light"
                  }`}
                >
                  {o.priceNote}
                </span>
              </div>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  o.highlighted ? "text-white/75" : "text-text-muted"
                }`}
              >
                {o.description}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 mb-0">
                {o.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm group/feat cursor-default">
                    <span
                      className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 transition-transform
                        duration-200 group-hover/feat:scale-125 ${
                        o.highlighted ? "bg-accent" : "bg-accent/70"
                      }`}
                    />
                    <span
                      className={`transition-colors duration-200 ${
                        o.highlighted
                          ? "text-white/85 group-hover/feat:text-white"
                          : "text-text-muted group-hover/feat:text-text-main"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA — mt-auto pousse le bouton en bas quelle que soit la hauteur */}
              <div className="mt-auto pt-8">
                <a
                  href="#contact"
                  className={`flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4
                    font-bold text-sm transition-all duration-200 hover:-translate-y-px ${
                      o.highlighted
                        ? "bg-accent text-night hover:bg-accent-hover"
                        : "bg-night text-white hover:bg-night-mid"
                    }`}
                >
                  {o.cta} <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
