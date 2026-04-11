export default function Footer() {
  return (
    <footer className="bg-night border-t border-white/5 py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-white/40 font-semibold text-lg tracking-tight">
          Buyer<span className="text-accent">.</span>
        </span>
        <p className="text-white/20 text-sm">
          © {new Date().getFullYear()} Buyer Agent — Accompagnement acheteur immobilier
        </p>
        <p className="text-white/20 text-sm">
          Mentions légales
        </p>
      </div>
    </footer>
  );
}
