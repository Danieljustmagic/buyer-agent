import { X, Check } from "lucide-react";

const comparisons = [
  {
    traditional: "Représente le vendeur",
    us: "Représente l'acheteur",
  },
  {
    traditional: "Commission sur la vente",
    us: "Honoraires transparents, côté acheteur",
  },
  {
    traditional: "Objectif : conclure rapidement",
    us: "Objectif : la bonne décision pour vous",
  },
  {
    traditional: "Information partielle ou orientée",
    us: "Analyse objective et complète",
  },
  {
    traditional: "S'arrête à la signature du mandat",
    us: "Présent jusqu'à la signature finale",
  },
];

export default function Differentiation() {
  return (
    <section className="bg-white section-padding">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent-hover font-semibold text-sm uppercase tracking-widest mb-4">
            Ce qui nous différencie
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-night leading-tight mb-4">
            Pas une agence. Un partenaire.
          </h2>
          <p className="text-slate-500 text-lg">
            La différence ne se joue pas sur les mots — elle se joue sur
            l&apos;alignement d&apos;intérêts.
          </p>
        </div>

        {/* Comparison table */}
        <div className="bg-bg-soft rounded-3xl overflow-hidden border border-slate-100">
          {/* Header */}
          <div className="grid grid-cols-2 border-b border-slate-200">
            <div className="p-6 text-center">
              <span className="text-sm font-semibold text-slate-400 uppercase tracking-wide">
                Agence classique
              </span>
            </div>
            <div className="p-6 text-center bg-night">
              <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                Notre accompagnement
              </span>
            </div>
          </div>

          {comparisons.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-2 border-b border-slate-100 last:border-0"
            >
              <div className="p-5 flex items-center gap-3">
                <X className="w-4 h-4 text-red-300 flex-shrink-0" />
                <span className="text-slate-500 text-sm">{row.traditional}</span>
              </div>
              <div className="p-5 flex items-center gap-3 bg-night/5">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-night font-medium text-sm">{row.us}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Final punchline */}
        <div className="mt-16 text-center">
          <p className="text-2xl md:text-3xl font-bold text-night max-w-2xl mx-auto leading-snug">
            Vous n&apos;avez pas besoin de plus d&apos;annonces.{" "}
            <span className="text-accent">Vous avez besoin de clarté.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
