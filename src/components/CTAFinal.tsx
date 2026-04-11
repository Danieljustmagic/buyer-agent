import { ArrowRight, Calendar } from "lucide-react";

export default function CTAFinal() {
  return (
    <section id="contact" className="bg-bg-soft section-padding">
      <div className="container-narrow text-center">
        <div
          className="bg-night rounded-3xl px-8 py-16 md:p-20 relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full
            bg-accent/10 blur-3xl pointer-events-none" />

          <div className="relative">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-6">
              Passons à l&apos;action
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Faisons le point sur votre projet.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
              Un échange de 30 minutes pour comprendre où vous en êtes, ce dont
              vous avez besoin, et comment on peut vous aider concrètement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 bg-accent text-night
                  font-semibold px-8 py-4 rounded-full text-base hover:bg-accent-hover
                  transition-all duration-200 shadow-lg shadow-accent/20 hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                Prendre rendez-vous
              </a>
              <a
                href="mailto:contact@buyer-agent.fr"
                className="inline-flex items-center justify-center gap-2 text-white/60
                  hover:text-white px-6 py-4 text-base transition-colors duration-200"
              >
                Nous écrire <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-white/30 text-sm mt-8">
              Sans engagement. Réponse sous 24h.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
