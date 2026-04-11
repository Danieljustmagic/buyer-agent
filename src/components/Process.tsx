const steps = [
  {
    number: "01",
    title: "Clarifier",
    body: "Définir précisément ce que vous cherchez, pourquoi, et dans quels contraintes réelles.",
  },
  {
    number: "02",
    title: "Cadrer",
    body: "Structurer votre démarche : budget, zones, critères, calendrier — un plan d'action concret.",
  },
  {
    number: "03",
    title: "Cibler",
    body: "Identifier les biens et opportunités qui correspondent réellement à votre projet.",
  },
  {
    number: "04",
    title: "Analyser",
    body: "Évaluer objectivement chaque opportunité : prix, potentiel, risques, points de vigilance.",
  },
  {
    number: "05",
    title: "Décider",
    body: "Vous accompagner pour offrir, négocier et décider avec méthode et sérénité.",
  },
  {
    number: "06",
    title: "Sécuriser",
    body: "Vérifier les aspects juridiques, techniques et financiers jusqu'à la signature.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-bg-soft section-padding">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent-hover font-semibold text-sm uppercase tracking-widest mb-4">
            Notre méthode
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-night leading-tight">
            Une méthode claire pour avancer.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group bg-white rounded-2xl p-8 border border-slate-100
                hover:border-accent/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              {/* Background number */}
              <span className="absolute -right-2 -top-4 text-8xl font-black text-slate-50 select-none
                group-hover:text-accent/10 transition-colors duration-300">
                {index + 1}
              </span>

              <div className="relative">
                <div className="text-xs font-bold text-accent tracking-widest mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-night mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
