import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | KAP`,
    description: post.description,
    openGraph: {
      title: `${post.title} | KAP`,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main>
        {/* Header sombre */}
        <section className="bg-night pt-32 pb-16 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            {/* Retour */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white/80
                text-sm transition-colors duration-200 mb-10"
            >
              <ArrowLeft className="w-4 h-4" /> Tous les articles
            </Link>

            {/* Catégorie */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-accent" />
              <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
                {post.category}
              </span>
            </div>

            {/* Titre */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-white/65 text-lg leading-relaxed mb-8">
              {post.description}
            </p>

            {/* Métadonnées */}
            <div className="flex items-center gap-6 text-white/35 text-sm">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readingTime} min de lecture
              </span>
            </div>
          </div>
        </section>

        {/* Séparateur */}
        <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        {/* Contenu */}
        <section className="bg-beige py-16 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <article className="prose-kap">
              <MDXRemote source={post.content} />
            </article>
          </div>
        </section>

        {/* CTA fin d'article */}
        <section className="bg-night py-20 px-6 md:px-12">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-6 h-px bg-accent" />
                <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
                  La prochaine étape
                </span>
                <div className="w-6 h-px bg-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-tight">
                Votre situation mérite une analyse personnalisée.
              </h2>
              <p className="text-white/55 text-base leading-relaxed mb-8">
                Un échange de 30 minutes pour faire le point sur votre projet
                et définir la meilleure stratégie.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-accent text-night font-bold
                  px-8 py-4 rounded-xl text-sm tracking-wide hover:bg-accent-hover
                  transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-accent/20"
              >
                Clarifier mon projet (30 min)
              </Link>
              <p className="text-white/25 text-xs mt-4">
                Offert · Sans engagement · Réponse sous 24h
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
