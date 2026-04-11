import { Compass, LayoutGrid, CheckCircle } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "La clarté",
    body: "Avant de chercher, il faut savoir précisément ce que vous cherchez — et pourquoi. La clarté du projet est la base de tout.",
  },
  {
    icon: LayoutGrid,
    title: "La méthode",
    body: "Une approche structurée transforme une recherche chaotique en démarche maîtrisée. Chaque étape a une logique.",
  },
  {
    icon: CheckCircle,
    title: "La décision",
    body: "Décider sereinement, c'est avoir les bons éléments au bon moment — et quelqu'un pour vous aider à les interpréter.",
  },
];

export default function Reframe() {
  return (
    <section className="bg-white section-padding">
      <div className="container-wide">
        <div className="max-w-2xl mb-16">
          <p className="text-accent-hover font-semibold text-sm uppercase tracking-widest mb-4">
            Le changement de perspective
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-night leading-tight">
            Acheter n&apos;est pas une question de chance.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div key={title} className="group">
              <div
                className="bg-bg-soft rounded-2xl p-8 h-full border border-slate-100
                group-hover:border-accent/30 group-hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-night rounded-xl flex items-center justify-center mb-6
                  group-hover:bg-accent transition-colors duration-300">
                  <Icon className="w-5 h-5 text-white group-hover:text-night transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-night mb-3">{title}</h3>
                <p className="text-slate-500 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
