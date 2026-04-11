import { ArrowRight } from "lucide-react";
import HeroIllustration from "./HeroIllustration";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-night flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 50%, #1E2D4A 0%, #0F172A 60%)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 80% 40%, #FACC1520 0%, transparent 70%)",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">

          {/* Left — copy */}
          <div className="flex flex-col justify-center">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 w-fit bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-10 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              Accompagnement acheteur
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-white leading-[1.08] mb-6 tracking-tight">
              Acheter un bien
              <br />
              est une décision
              <br />
              <span className="text-accent">complexe.</span>
            </h1>

            {/* Divider line */}
            <div className="w-12 h-0.5 bg-accent/50 mb-6" />

            {/* Subheadline */}
            <p className="text-lg text-white/55 mb-4 leading-relaxed max-w-md">
              Le faire seul peut vous coûter du temps, de l&apos;énergie&hellip;
              et parfois très cher.
            </p>
            <p className="text-base text-white/75 mb-10 leading-relaxed max-w-md">
              Nous vous accompagnons pour clarifier votre projet, sécuriser
              chaque étape et prendre la bonne décision — sans approximation.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-accent text-night font-bold
                  px-8 py-4 rounded-2xl text-sm tracking-wide hover:bg-accent-hover transition-all duration-200
                  shadow-xl shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5"
              >
                Faire le point sur mon projet
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center gap-2 text-white/50 hover:text-white
                  px-6 py-4 text-sm transition-colors duration-200 group"
              >
                Voir la méthode
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 pt-8 border-t border-white/8 grid grid-cols-3 gap-6 max-w-sm">
              {[
                { value: "100%", label: "côté acheteur" },
                { value: "A → Z", label: "accompagnement" },
                { value: "0", label: "conflit d'intérêt" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl font-black text-white">{stat.value}</div>
                  <div className="text-xs text-white/35 mt-1 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Glow behind illustration */}
              <div className="absolute inset-0 rounded-full bg-accent/5 blur-3xl scale-75" />
              <HeroIllustration />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-night to-transparent pointer-events-none" />
    </section>
  );
}
