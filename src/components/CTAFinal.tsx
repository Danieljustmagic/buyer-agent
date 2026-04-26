"use client";

import { ArrowRight, Calendar } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";

export default function CTAFinal() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // silently fail — user can email directly
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-beige section-pad">
      <div className="container-main">
        <div className="bg-night rounded-3xl px-8 py-14 md:px-14 md:py-16 relative overflow-hidden">

          {/* Halo ambre */}
          <div
            className="absolute -bottom-20 -right-20 w-80 h-80 opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle, #C8A96A 0%, transparent 70%)" }}
          />

          {/* Ligne signature */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/25 to-transparent hidden md:block" />


          {/* Logo cachet */}
          <div className="relative mb-10" style={{ mixBlendMode: "screen", opacity: 0.55 }}>
            <Logo height={40} />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-14 items-start">

            {/* Gauche — texte émotionnel */}
            <div>
              <div className="flex items-center gap-3 mb-8" data-reveal>
                <div className="w-6 h-px bg-accent" />
                <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
                  La vraie question
                </span>
              </div>

              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-3"
                data-reveal
                data-reveal-delay="80"
              >
                Faisons le point sur votre projet.
              </h2>

              <p
                className="text-accent/70 text-xs font-semibold tracking-[0.18em] uppercase mb-8"
                data-reveal
                data-reveal-delay="130"
              >
                Le bon cap pour votre projet
              </p>

              <blockquote
                className="font-serif italic text-xl text-white/80 mb-10 leading-relaxed border-l-2 border-accent pl-6"
                data-reveal
                data-reveal-delay="180"
              >
                &ldquo;Le sujet n&apos;est pas de savoir si vous allez acheter. Le sujet est de savoir si vous allez acheter dans les bonnes conditions.&rdquo;
              </blockquote>

              <a
                href="mailto:contact@kap-immo.fr"
                className="inline-flex items-center gap-2 text-white/50
                  hover:text-white text-base transition-colors duration-200"
                data-reveal
                data-reveal-delay="220"
              >
                Écrire directement <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Droite — formulaire */}
            <div
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
              data-reveal
              data-reveal-delay="150"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-8">
                  <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/40
                    flex items-center justify-center mb-4">
                    <span className="text-accent text-xl">✓</span>
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">Message envoyé</p>
                  <p className="text-white/55 text-base">
                    Nous vous répondons sous 24h.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-white/60 text-sm uppercase tracking-widest font-semibold mb-6">
                    Nous contacter
                  </p>

                  {/* Prénom + Nom */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/50 text-xs font-medium mb-1.5 tracking-wide">
                        Prénom
                      </label>
                      <input
                        type="text"
                        name="prenom"
                        required
                        className="w-full bg-white/8 border border-white/12 rounded-xl px-4 py-3
                          text-white text-sm placeholder-white/25 focus:outline-none
                          focus:border-accent/50 focus:bg-white/10 transition-all duration-200"
                        placeholder="Jean"
                      />
                    </div>
                    <div>
                      <label className="block text-white/50 text-xs font-medium mb-1.5 tracking-wide">
                        Nom
                      </label>
                      <input
                        type="text"
                        name="nom"
                        required
                        className="w-full bg-white/8 border border-white/12 rounded-xl px-4 py-3
                          text-white text-sm placeholder-white/25 focus:outline-none
                          focus:border-accent/50 focus:bg-white/10 transition-all duration-200"
                        placeholder="Dupont"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-white/50 text-xs font-medium mb-1.5 tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-white/8 border border-white/12 rounded-xl px-4 py-3
                        text-white text-sm placeholder-white/25 focus:outline-none
                        focus:border-accent/50 focus:bg-white/10 transition-all duration-200"
                      placeholder="jean@exemple.fr"
                    />
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label className="block text-white/50 text-xs font-medium mb-1.5 tracking-wide">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      className="w-full bg-white/8 border border-white/12 rounded-xl px-4 py-3
                        text-white text-sm placeholder-white/25 focus:outline-none
                        focus:border-accent/50 focus:bg-white/10 transition-all duration-200"
                      placeholder="+33 6 00 00 00 00"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 bg-accent text-night
                      font-bold px-8 py-4 rounded-xl text-sm tracking-wide hover:bg-accent-hover
                      transition-all duration-200 shadow-lg shadow-accent/20 hover:-translate-y-0.5
                      disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                  >
                    <Calendar className="w-4 h-4" />
                    {loading ? "Envoi en cours…" : "Clarifier mon projet (30 min)"}
                  </button>

                  <p className="text-white/30 text-xs text-center pt-1">
                    Offert · Sans engagement · Réponse sous 24h
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
