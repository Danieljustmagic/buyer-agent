import { ArrowRight, Calendar } from "lucide-react";

export default function CTAFinal() {
  return (
    <section id="contact" className="bg-beige section-pad">
      <div className="container-narrow">
        <div className="bg-night rounded-3xl px-8 py-16 md:px-16 md:py-20 relative overflow-hidden">

          {/* Halo ambre */}
          <div
            className="absolute -bottom-20 -right-20 w-80 h-80 opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle, #C8A96A 0%, transparent 70%)" }}
          />

          {/* Ligne signature */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/25 to-transparent hidden md:block" />

          <div className="relative">
            {/* Tag */}
            <div className="flex items-center gap-3 mb-8" data-reveal>
              <div className="w-6 h-px bg-accent" />
              <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">La vraie question</span>
            </div>

            {/* Titre */}
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-3"
              data-reveal
              data-reveal-delay="80"
            >
              Faisons le point sur votre projet.
            </h2>
            <p
              className="text-accent/70 text-xs font-semibold tracking-[0.18em] uppercase mb-6"
              data-reveal
              data-reveal-delay="130"
            >
              Le bon cap pour votre projet
            </p>

            {/* Punchline serif */}
            <p
              className="font-serif italic text-xl text-white/80 mb-8 leading-relaxed max-w-lg"
              data-reveal
              data-reveal-delay="160"
            >
              &ldquo;Le sujet n&apos;est pas de savoir si vous allez acheter. Le sujet est de savoir si vous allez acheter dans les bonnes conditions.&rdquo;
            </p>

            {/* Description */}
            <p
              className="text-white/75 text-base leading-relaxed mb-10 max-w-md"
              data-reveal
              data-reveal-delay="220"
            >
              Un premier échange de 30 minutes pour comprendre votre projet,
              identifier vos enjeux et vérifier la faisabilité. Offert, sans engagement.
            </p>

            {/* CTA */}
            <div className="flex flex-col items-start gap-3" data-reveal data-reveal-delay="300">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 bg-accent text-night
                  font-bold px-8 py-4 rounded-xl text-sm tracking-wide hover:bg-accent-hover
                  transition-all duration-200 shadow-lg shadow-accent/20 hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                Faire le point sur mon projet (30 min)
              </a>
              <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                Un premier échange pour comprendre votre situation et déterminer la meilleure suite à donner.
              </p>
            </div>

            <div
              className="flex items-center gap-4 mt-4"
              data-reveal
              data-reveal-delay="380"
            >
              <a
                href="mailto:contact@buyer-agent.fr"
                className="inline-flex items-center gap-2 text-white/50
                  hover:text-white text-sm transition-colors duration-200"
              >
                Écrire directement <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-white/20 text-xs">·</span>
              <p className="text-white/35 text-xs">
                Offert · Sans engagement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
