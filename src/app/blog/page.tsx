import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Décryptages — Conseils achat immobilier | KAP",
  description:
    "Négociation, financement, compromis de vente, stratégie d'achat… Tous les décryptages de KAP pour acheter un bien immobilier dans les meilleures conditions.",
  openGraph: {
    title: "Décryptages — Conseils achat immobilier | KAP",
    description:
      "Nos conseils pour acheter un bien immobilier dans les meilleures conditions.",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-night pt-32 pb-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px bg-accent" />
              <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
                Décryptages
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
              Décryptages
            </h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              Négociation, financement, compromis de vente, stratégie d&apos;achat…
              Des articles concrets pour acheter dans les meilleures conditions,
              accompagné à chaque étape.
            </p>
          </div>
        </section>

        {/* Liste des articles */}
        <section className="bg-beige py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            {posts.length === 0 ? (
              <p className="text-text-muted text-center py-20">
                Les premiers articles arrivent bientôt.
              </p>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block bg-white border border-beige-dark rounded-2xl p-8
                      hover:border-accent/40 hover:shadow-lg hover:-translate-y-1
                      transition-all duration-300"
                  >
                    {/* Catégorie + temps de lecture */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-text-light text-xs">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readingTime} min
                      </span>
                    </div>

                    {/* Titre */}
                    <h2
                      className="text-xl font-extrabold text-night leading-snug mb-3
                        group-hover:text-accent transition-colors duration-200"
                    >
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p className="text-text-muted text-base leading-relaxed mb-6 line-clamp-3">
                      {post.description}
                    </p>

                    {/* Footer carte */}
                    <div className="flex items-center justify-between">
                      <span className="text-text-light text-sm">
                        {formatDate(post.date)}
                      </span>
                      <span
                        className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold
                          group-hover:gap-2.5 transition-all duration-200"
                      >
                        Lire l&apos;article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA bas de page */}
        <section className="bg-night py-20 px-6 md:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-white/50 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Votre projet
            </p>
            <h2 className="text-3xl font-extrabold text-white mb-5">
              Un article ne suffit pas ?
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Faisons le point sur votre situation en 30 minutes.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-accent text-night font-bold
                px-8 py-4 rounded-xl text-sm tracking-wide hover:bg-accent-hover
                transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-accent/20"
            >
              Clarifier mon projet (30 min)
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
