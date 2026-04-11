import { Clock, Brain, Heart, Lock, Eye } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Gain de temps",
    body: "Vous évitez les visites inutiles, les fausses pistes et les allers-retours improductifs. Votre temps est orienté vers ce qui compte.",
  },
  {
    icon: Brain,
    title: "Décisions plus claires",
    body: "Chaque étape est structurée. Vous avez les bons éléments pour décider avec lucidité, sans être submergé par l'émotion.",
  },
  {
    icon: Heart,
    title: "Moins de stress",
    body: "Savoir que quelqu'un suit votre projet, anticipe les problèmes et vous guide change radicalement l'expérience d'achat.",
  },
  {
    icon: Lock,
    title: "Sécurité à chaque étape",
    body: "Clauses, diagnostics, négociation, compromis : nous veillons à ce que rien ne soit laissé au hasard dans votre parcours.",
  },
  {
    icon: Eye,
    title: "Vision globale",
    body: "Vous ne voyez pas seulement le bien — vous comprenez le marché, le quartier, le potentiel et les risques réels.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-bg-soft section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — sticky title */}
          <div className="lg:sticky lg:top-32">
            <p className="text-accent-hover font-semibold text-sm uppercase tracking-widest mb-4">
              Ce que vous gagnez
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-night leading-tight mb-6">
              Un achat maîtrisé, pas subi.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              L&apos;accompagnement ne réduit pas votre liberté — il
              l&apos;amplifie. Vous prenez de meilleures décisions, plus vite,
              avec moins de doutes.
            </p>
          </div>

          {/* Right — benefits list */}
          <div className="space-y-6">
            {benefits.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex gap-5 bg-white rounded-2xl p-6 border border-slate-100
                  hover:shadow-md hover:border-accent/20 transition-all duration-200 group"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-accent-blue rounded-xl flex items-center justify-center
                  group-hover:bg-accent transition-colors duration-300">
                  <Icon className="w-5 h-5 text-night" />
                </div>
                <div>
                  <h3 className="font-semibold text-night mb-1">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
