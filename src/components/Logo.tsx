export default function Logo({ light = false }: { light?: boolean }) {
  const color = light ? "#FFFFFF" : "#0F172A";
  const accent = "#C8A96A";

  return (
    <div className="flex items-center gap-3">
      {/* Mark — trajectoire stylisée */}
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Ligne de parcours verticale */}
        <line x1="13" y1="2" x2="13" y2="24" stroke={color} strokeWidth="1" strokeOpacity="0.2" />
        {/* Jalons */}
        <circle cx="13" cy="4" r="2" fill={accent} />
        <circle cx="13" cy="13" r="1.5" fill={color} fillOpacity="0.4" />
        <circle cx="13" cy="22" r="1.5" fill={color} fillOpacity="0.3" />
        {/* Flèche direction */}
        <path d="M10 7L13 4L16 7" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Trait horizontal accent */}
        <line x1="7" y1="13" x2="19" y2="13" stroke={accent} strokeWidth="0.75" strokeOpacity="0.4" />
      </svg>

      {/* Wordmark */}
      <span
        className="font-bold text-base tracking-tight leading-none"
        style={{ color: color }}
      >
        accompagner<span style={{ color: accent }}>.</span>
      </span>
    </div>
  );
}
