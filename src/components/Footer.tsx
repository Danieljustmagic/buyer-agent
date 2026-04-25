import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-night border-t border-white/5 py-10 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo light />
        <p className="text-white/20 text-sm">
          © {new Date().getFullYear()} — Accompagnement acheteur immobilier
        </p>
        <p className="text-white/20 text-sm">Mentions légales</p>
      </div>
    </footer>
  );
}
