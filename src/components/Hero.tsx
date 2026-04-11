import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-night flex items-center overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #FACC15 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, #E6F0FF 0%, transparent 50%)`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 pt-24 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/70 text-xs font-medium px-4 py-2 rounded-full mb-10 tracking-wide uppercase">
            Accompagnement acheteur
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Acheter un bien est{" "}
            <span className="text-accent">une décision complexe.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/60 mb-8 leading-relaxed max-w-2xl">
            Le faire seul peut vous coûter du temps, de l&apos;énergie&hellip;
            et parfois très cher.
          </p>

          {/* Body */}
          <p className="text-base md:text-lg text-white/80 mb-12 leading-relaxed max-w-xl">
            Nous vous accompagnons pour clarifier votre projet, sécuriser chaque
            étape et prendre la bonne décision — sans approximation.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-accent text-night font-semibold
                px-8 py-4 rounded-full text-base hover:bg-accent-hover transition-all duration-200
                shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              Faire le point sur mon projet
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center gap-2 text-white/60 hover:text-white
                px-6 py-4 text-base transition-colors duration-200"
            >
              Voir comment ça fonctionne
            </a>
          </div>
        </div>

        {/* Bottom stat strip */}
        <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-3 gap-8 max-w-lg">
          {[
            { value: "100%", label: "côté acheteur" },
            { value: "De A à Z", label: "accompagnement" },
            { value: "Zéro", label: "conflit d'intérêt" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-white/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
