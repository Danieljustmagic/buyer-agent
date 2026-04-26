import { ArrowRight } from "lucide-react";

export default function Offers() {
  return (
    <section id="offres" className="bg-white section-pad">
      <div className="container-main">

        <div className="max-w-xl mb-14" data-reveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-accent" />
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">Comment ça commence</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-night leading-tight">
            Tout commence par un échange.
          </h2>
          <p className="text-text-muted text-lg leading-relaxed mt-4">
            Nous définissons ensemble la meilleure façon d&apos;avancer — avant de parler honoraires.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">

          {/* Carte 1 — Appel gratuit */}
          <div data-reveal>
            <div className="h-full rounded-2xl p-8 pb-28 flex flex-col relative border
              bg-beige border-beige-dark hover:border-accent/30 hover:shadow-lg
              hover:-translate-y-0.5 transition-all duration-300">

              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5
                  rounded-full bg-white border border-beige-dark text-text-muted">
                  Gratuit
                </span>
              </div>

              <h3 className="font-extrabold text-lg leading-snug mb-2 text-night">
                Premier échange — 30 min
              </h3>

              <p className="text-xs text-text-light mb-5">Sans engagement</p>

              <p className="text-base leading-relaxed mb-6 text-text-muted">
                Un échange pour comprendre votre situation, identifier vos enjeux
                et déterminer ensemble la meilleure suite à donner à votre projet.
              </p>

              <ul className="space-y-3">
                {[
                  "Comprendre votre projet",
                  "Identifier vos enjeux",
                  "Vérifier la faisabilité",
                  "Définir la meilleure suite",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-base group/feat cursor-default">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-accent/70
                      transition-transform duration-200 group-hover/feat:scale-125" />
                    <span className="text-text-muted group-hover/feat:text-text-main transition-colors duration-200">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-8 left-8 right-8">
                <a
                  href="#contact"
                  className="flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4
                    font-bold text-sm bg-night text-white hover:bg-night-mid
                    transition-all duration-200 hover:-translate-y-px"
                >
                  Clarifier mon projet (30 min) <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Carte 2 — Accompagnement complet */}
          <div data-reveal data-reveal-delay="100">
            <div className="h-full rounded-2xl p-8 pb-28 flex flex-col relative border
              bg-night border-night shadow-2xl shadow-night/30
              hover:-translate-y-1 transition-all duration-300">

              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5
                  rounded-full bg-accent text-night">
                  Accompagnement A → Z
                </span>
              </div>

              <h3 className="font-extrabold text-lg leading-snug mb-2 text-white">
                Jusqu&apos;à la signature
              </h3>

              <p className="text-xs text-white/50 mb-5">
                Honoraires sur mesure — définis après le premier échange
              </p>

              <p className="text-base leading-relaxed mb-6 text-white/75">
                Nous prenons en charge l&apos;intégralité de votre parcours d&apos;achat,
                de la définition du projet jusqu&apos;à l&apos;acte de vente.
              </p>

              <ul className="space-y-3">
                {[
                  "Définition précise du projet",
                  "Sélection hebdomadaire de biens",
                  "Analyse des opportunités",
                  "Accompagnement à la négociation",
                  "Coordination de tous les intervenants",
                  "Suivi jusqu'à l'acte authentique",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-base group/feat cursor-default">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-accent
                      transition-transform duration-200 group-hover/feat:scale-125" />
                    <span className="text-white/85 group-hover/feat:text-white transition-colors duration-200">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-8 left-8 right-8">
                <a
                  href="#contact"
                  className="flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4
                    font-bold text-sm bg-accent text-night hover:bg-accent-hover
                    transition-all duration-200 hover:-translate-y-px"
                >
                  Démarrer l&apos;accompagnement <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
