export default function Logo({
  light = false,
  withTagline = false,
}: {
  light?: boolean;
  withTagline?: boolean;
}) {
  const color = light ? "#FFFFFF" : "#0F172A";
  const accent = "#C8A96A";
  const muted = light ? "rgba(255,255,255,0.42)" : "rgba(15,23,42,0.42)";

  return (
    <div className="flex items-center gap-3">
      {/* Mark — cap / trajectoire */}
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Ligne de parcours verticale */}
        <line x1="14" y1="2" x2="14" y2="26" stroke={color} strokeWidth="1" strokeOpacity="0.18" />
        {/* Point de départ — ambre */}
        <circle cx="14" cy="5" r="2.5" fill={accent} />
        {/* Jalons intermédiaires */}
        <circle cx="14" cy="14" r="1.5" fill={color} fillOpacity="0.35" />
        <circle cx="14" cy="23" r="1.5" fill={color} fillOpacity="0.22" />
        {/* Flèche cap — direction */}
        <path d="M11 8.5L14 5L17 8.5" stroke={accent} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Trait horizontal — équilibre */}
        <line x1="8" y1="14" x2="20" y2="14" stroke={accent} strokeWidth="0.75" strokeOpacity="0.35" />
      </svg>

      {/* Wordmark + tagline */}
      <div className="flex flex-col justify-center">
        <span
          className="font-extrabold text-[1.15rem] tracking-widest leading-none uppercase"
          style={{ color }}
        >
          KAP<span style={{ color: accent }}>.</span>
        </span>
        {withTagline && (
          <span
            className="text-[9.5px] font-semibold tracking-[0.16em] uppercase mt-[3px] leading-none"
            style={{ color: muted }}
          >
            Le bon cap pour votre projet
          </span>
        )}
      </div>
    </div>
  );
}
