export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      {/* Icon mark */}
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer ring */}
        <circle cx="14" cy="14" r="13" stroke={dark ? "#0F172A" : "white"} strokeWidth="1.5" strokeOpacity="0.3" />
        {/* Inner compass cross */}
        <line x1="14" y1="4" x2="14" y2="10" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" />
        <line x1="14" y1="18" x2="14" y2="24" stroke={dark ? "#0F172A" : "white"} strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4" />
        <line x1="4" y1="14" x2="10" y2="14" stroke={dark ? "#0F172A" : "white"} strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4" />
        <line x1="18" y1="14" x2="24" y2="14" stroke={dark ? "#0F172A" : "white"} strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4" />
        {/* Center dot */}
        <circle cx="14" cy="14" r="2.5" fill="#FACC15" />
        {/* Direction tick */}
        <path d="M14 8L15.5 11H12.5L14 8Z" fill="#FACC15" />
      </svg>

      {/* Wordmark */}
      <span className={`font-bold text-lg tracking-tight ${dark ? "text-night" : "text-white"}`}>
        buyer<span className="text-accent font-black">.</span>
      </span>
    </div>
  );
}
