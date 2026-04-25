const alone = [
  "Vous cherchez",
  "Vous analysez",
  "Vous doutez",
  "Vous décidez",
  "Vous gérez tout",
];

const withMe = [
  "Vous êtes guidé",
  "Vous recevez des biens ciblés",
  "Vous analysez avec méthode",
  "Vous négociez avec stratégie",
  "Vous êtes accompagné jusqu'au bout",
];

export default function Comparison() {
  return (
    <section className="bg-beige section-pad">
      <div className="container-main">

        <div className="max-w-xl mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-accent" />
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">La différence</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-night leading-tight">
            Seul ou accompagné — ce n&apos;est pas le même parcours.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Seul */}
          <div className="bg-white rounded-2xl p-8 border border-beige-dark">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-text-light" />
              <h3 className="font-bold text-text-muted text-sm uppercase tracking-widest">Seul</h3>
            </div>
            <ul className="space-y-4">
              {alone.map((item, i) => (
                <li key={item} className="flex items-center gap-4">
                  <span className="text-xs text-text-light font-bold w-4 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="w-px h-4 bg-text-light/20 flex-shrink-0" />
                  <span className="text-text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Avec moi */}
          <div className="bg-night rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <h3 className="font-bold text-accent text-sm uppercase tracking-widest">Avec moi</h3>
            </div>
            <ul className="space-y-4">
              {withMe.map((item, i) => (
                <li key={item} className="flex items-center gap-4">
                  <span className="text-xs text-accent/60 font-bold w-4 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="w-px h-4 bg-accent/20 flex-shrink-0" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
