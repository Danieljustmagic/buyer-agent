import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-night border-t border-white/6 pt-14 pb-10 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">

        {/* Corps du footer */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 pb-10 border-b border-white/8">

          {/* Identité */}
          <div>
            <Logo height={80} />
            <p className="text-white/35 text-sm mt-5 max-w-xs leading-relaxed">
              Accompagnement stratégique pour l&apos;achat immobilier.
              Une méthode, une expertise, un cap.
            </p>
          </div>

          {/* Vignette fondateur + contact */}
          <div className="flex flex-col items-end gap-5">

            {/* Photo + identité */}
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-white text-sm font-semibold">Daniel Invernon</p>
                <p className="text-accent/70 text-xs mt-0.5 tracking-wide">Fondateur — KAP</p>
              </div>
              <div className="relative flex-shrink-0">
                {/* Halo accent */}
                <div className="absolute inset-0 rounded-full bg-accent/20 blur-md scale-110 pointer-events-none" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/daniel_2.png"
                  alt="Daniel Invernon — Fondateur KAP"
                  className="relative w-14 h-14 rounded-full object-cover object-top border-2 border-accent/40"
                />
              </div>
            </div>

            {/* Liens */}
            <div className="flex flex-col gap-3 text-right">
              <a
                href="/#contact"
                className="text-accent text-sm font-semibold hover:text-accent-hover
                  transition-colors duration-200"
              >
                Prendre rendez-vous →
              </a>
              <Link
                href="/blog"
                className="text-white/35 text-sm hover:text-white/60 transition-colors duration-200"
              >
                Décryptages
              </Link>
              <a
                href="mailto:contact@kap-immo.fr"
                className="text-white/35 text-sm hover:text-white/60 transition-colors duration-200"
              >
                contact@kap-immo.fr
              </a>
            </div>
          </div>
        </div>

        {/* Bas */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8">
          <p className="text-white/22 text-xs">
            © {new Date().getFullYear()} KAP · Tous droits réservés
          </p>
          <p className="text-white/22 text-xs hover:text-white/40 transition-colors duration-200 cursor-pointer">
            Mentions légales
          </p>
        </div>

      </div>
    </footer>
  );
}
