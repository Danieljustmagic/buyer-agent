import { X } from "lucide-react";

const problems = [
  "Des dizaines d'annonces sans réel fil directeur",
  "Des visites qui s'accumulent sans décision claire",
  "Une hésitation paralysante au moment d'offrir",
  "La peur de se tromper sur un engagement aussi important",
  "L'impression d'avancer seul, sans méthode ni repère",
];

export default function Problem() {
  return (
    <section className="bg-bg-soft section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-accent-hover font-semibold text-sm uppercase tracking-widest mb-4">
              Le constat
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-night leading-tight mb-6">
              Aujourd&apos;hui, la plupart des acheteurs avancent seuls.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Le marché est complexe, l&apos;information abondante, et
              pourtant&hellip; personne n&apos;est vraiment dans votre camp.
            </p>
          </div>

          {/* Right — problems list */}
          <div className="space-y-4">
            {problems.map((problem) => (
              <div
                key={problem}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-slate-100
                  shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-50 flex items-center justify-center mt-0.5">
                  <X className="w-4 h-4 text-red-400" />
                </div>
                <p className="text-night font-medium leading-snug">{problem}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Punchline */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <p className="text-xl md:text-2xl font-semibold text-night text-center max-w-2xl mx-auto leading-snug">
            Le problème n&apos;est pas le marché.{" "}
            <span className="text-slate-400">
              C&apos;est l&apos;absence de cadre.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
