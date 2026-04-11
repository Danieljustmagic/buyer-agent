import { Shield, Users, ArrowRight } from "lucide-react";

const points = [
  {
    icon: Shield,
    title: "Nous défendons vos intérêts",
    body: "Nous ne représentons pas de vendeur, ne percevons pas de commission sur la transaction. Notre seul alignement : votre réussite.",
  },
  {
    icon: Users,
    title: "Un tiers de confiance",
    body: "Entre l'agent vendeur et vous, il n'y a souvent personne. Nous comblons ce vide avec une expertise entièrement dédiée à l'acheteur.",
  },
  {
    icon: ArrowRight,
    title: "De bout en bout",
    body: "De la clarification du projet jusqu'à la signature — et même après — nous sommes présents à chaque étape qui compte.",
  },
];

export default function Positioning() {
  return (
    <section className="bg-night section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Notre positionnement
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              Un accompagnement dédié à l&apos;acheteur.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Nous ne vendons pas des biens. Nous ne sommes pas une agence
              classique. Nous sommes le partenaire stratégique que tout acheteur
              mérite d&apos;avoir à ses côtés.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all duration-200"
            >
              En savoir plus <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {points.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-5 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center
                  group-hover:bg-accent transition-colors duration-300">
                  <Icon className="w-5 h-5 text-white group-hover:text-night transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{title}</h3>
                  <p className="text-white/50 leading-relaxed text-sm">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
