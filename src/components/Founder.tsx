import Logo from "./Logo";

export default function Founder() {
  return (
    <section className="bg-night section-pad overflow-hidden">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <div className="relative flex justify-center lg:justify-start" data-reveal>

            {/* Halo accent derrière la photo */}
            <div
              className="absolute -bottom-10 -left-10 w-72 h-72 opacity-15 pointer-events-none"
              style={{ background: "radial-gradient(circle, #C8A96A 0%, transparent 70%)" }}
            />

            {/* Cadre décoratif accent */}
            <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-accent/40 rounded-tl-2xl" />
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-accent/40 rounded-br-2xl" />

            {/* Conteneur photo */}
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/daniel_2.png"
                alt="Daniel Invernon — Fondateur KAP"
                className="w-full h-full object-cover object-top"
                style={{ display: "block" }}
              />
              {/* Gradient bas — fond clair → night */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 50%, rgba(15,23,42,0.55) 85%, rgba(15,23,42,0.85) 100%)",
                }}
              />
              {/* Gradient latéraux subtils */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, rgba(15,23,42,0.15) 0%, transparent 20%, transparent 80%, rgba(15,23,42,0.15) 100%)",
                }}
              />
              {/* Ligne accent en bas */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
            </div>
          </div>

          {/* Texte */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-3 mb-8" data-reveal data-reveal-delay="80">
              <div className="w-6 h-px bg-accent" />
              <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
                Le fondateur
              </span>
            </div>

            {/* Titre */}
            <h2
              className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-10"
              data-reveal
              data-reveal-delay="130"
            >
              Trois côtés de la table.<br />
              Un seul camp.
            </h2>

            {/* Corps */}
            <div className="space-y-5" data-reveal data-reveal-delay="180">
              <p className="text-white/65 text-lg leading-relaxed">
                Après 25 ans dans le secteur bancaire, j&apos;ai eu une conviction
                qui ne m&apos;a plus quitté : dans toute transaction immobilière,
                tout le monde est représenté — sauf l&apos;acheteur.
              </p>
              <p className="text-white/65 text-lg leading-relaxed">
                Le vendeur a son agent. La banque a ses intérêts. Le notaire
                instrumente l&apos;acte. L&apos;acheteur, lui, navigue seul dans
                un environnement que les autres connaissent mieux que lui.
              </p>
              <p className="text-white/65 text-lg leading-relaxed">
                J&apos;ai exercé comme agent immobilier. J&apos;ai vu de
                l&apos;intérieur comment les transactions se construisent du côté
                vendeur. Quand on a vu le jeu de l&apos;intérieur, on ne peut
                plus regarder un acheteur avancer seul sans vouloir changer
                quelque chose.{" "}
                <span className="text-white font-medium">
                  C&apos;est pour ça que KAP existe.
                </span>
              </p>
            </div>

            {/* Signature */}
            <div
              className="mt-10 pt-8 border-t border-white/10"
              data-reveal
              data-reveal-delay="240"
            >
              <p className="text-white font-semibold text-base">Daniel Invernon</p>
              <p className="text-accent/70 text-sm mt-1 tracking-wide">
                Fondateur — KAP
              </p>
              <div className="mt-6" style={{ mixBlendMode: "screen", opacity: 0.6 }}>
                <Logo height={52} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
