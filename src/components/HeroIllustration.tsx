export default function HeroIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-lg opacity-90"
      >
        {/* Outer ring - large */}
        <circle cx="240" cy="240" r="220" stroke="white" strokeOpacity="0.04" strokeWidth="1" />
        <circle cx="240" cy="240" r="180" stroke="white" strokeOpacity="0.06" strokeWidth="1" />
        <circle cx="240" cy="240" r="140" stroke="white" strokeOpacity="0.08" strokeWidth="1" />

        {/* Center glow */}
        <circle cx="240" cy="240" r="60" fill="#FACC15" fillOpacity="0.06" />
        <circle cx="240" cy="240" r="40" fill="#FACC15" fillOpacity="0.10" />

        {/* Main nodes - outer ring */}
        {/* Top node - Clarté */}
        <circle cx="240" cy="60" r="8" fill="#FACC15" fillOpacity="0.9" />
        <circle cx="240" cy="60" r="14" stroke="#FACC15" strokeOpacity="0.3" strokeWidth="1" />

        {/* Right node */}
        <circle cx="420" cy="240" r="6" fill="white" fillOpacity="0.3" />
        <circle cx="420" cy="240" r="12" stroke="white" strokeOpacity="0.1" strokeWidth="1" />

        {/* Bottom-right node */}
        <circle cx="367" cy="367" r="6" fill="white" fillOpacity="0.25" />

        {/* Bottom node */}
        <circle cx="240" cy="420" r="6" fill="white" fillOpacity="0.2" />

        {/* Bottom-left node */}
        <circle cx="113" cy="367" r="5" fill="white" fillOpacity="0.2" />

        {/* Left node */}
        <circle cx="60" cy="240" r="6" fill="white" fillOpacity="0.25" />

        {/* Top-left node */}
        <circle cx="113" cy="113" r="5" fill="white" fillOpacity="0.2" />

        {/* Top-right node */}
        <circle cx="367" cy="113" r="5" fill="white" fillOpacity="0.2" />

        {/* Connection lines from center to outer nodes */}
        <line x1="240" y1="200" x2="240" y2="74" stroke="#FACC15" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="275" y1="218" x2="408" y2="240" stroke="white" strokeOpacity="0.12" strokeWidth="1" />
        <line x1="262" y1="272" x2="356" y2="356" stroke="white" strokeOpacity="0.10" strokeWidth="1" />
        <line x1="240" y1="280" x2="240" y2="408" stroke="white" strokeOpacity="0.10" strokeWidth="1" />
        <line x1="218" y1="272" x2="124" y2="356" stroke="white" strokeOpacity="0.10" strokeWidth="1" />
        <line x1="205" y1="218" x2="72" y2="240" stroke="white" strokeOpacity="0.10" strokeWidth="1" />
        <line x1="218" y1="208" x2="124" y2="124" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
        <line x1="262" y1="208" x2="356" y2="124" stroke="white" strokeOpacity="0.08" strokeWidth="1" />

        {/* Inner structure - hexagon */}
        <polygon
          points="240,150 306,190 306,270 240,310 174,270 174,190"
          stroke="white"
          strokeOpacity="0.08"
          strokeWidth="1"
          fill="none"
        />

        {/* Inner nodes - middle ring */}
        <circle cx="240" cy="150" r="5" fill="white" fillOpacity="0.4" />
        <circle cx="306" cy="190" r="4" fill="white" fillOpacity="0.3" />
        <circle cx="306" cy="270" r="4" fill="white" fillOpacity="0.3" />
        <circle cx="240" cy="310" r="5" fill="#FACC15" fillOpacity="0.5" />
        <circle cx="174" cy="270" r="4" fill="white" fillOpacity="0.3" />
        <circle cx="174" cy="190" r="4" fill="white" fillOpacity="0.3" />

        {/* Center mark */}
        <circle cx="240" cy="240" r="16" fill="#FACC15" fillOpacity="0.15" />
        <circle cx="240" cy="240" r="8" fill="#FACC15" fillOpacity="0.8" />
        <circle cx="240" cy="240" r="3" fill="white" />

        {/* Trajectory arrow going up */}
        <path
          d="M240 195 L240 80"
          stroke="#FACC15"
          strokeOpacity="0.6"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M235 88 L240 74 L245 88"
          stroke="#FACC15"
          strokeOpacity="0.8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Label - Clarté */}
        <rect x="190" y="32" width="100" height="20" rx="10" fill="#FACC15" fillOpacity="0.15" />
        <text x="240" y="46" textAnchor="middle" fill="#FACC15" fontSize="10" fontWeight="600" letterSpacing="2" opacity="0.9">
          CLARTÉ
        </text>

        {/* Floating data points */}
        <rect x="320" y="130" width="80" height="28" rx="6" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
        <text x="360" y="148" textAnchor="middle" fill="white" fontSize="9" opacity="0.5" letterSpacing="1">
          MÉTHODE
        </text>

        <rect x="80" y="140" width="80" height="28" rx="6" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
        <text x="120" y="158" textAnchor="middle" fill="white" fontSize="9" opacity="0.5" letterSpacing="1">
          ANALYSE
        </text>

        <rect x="340" y="330" width="80" height="28" rx="6" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
        <text x="380" y="348" textAnchor="middle" fill="white" fontSize="9" opacity="0.5" letterSpacing="1">
          DÉCISION
        </text>

        {/* Pulse rings around center */}
        <circle cx="240" cy="240" r="24" stroke="#FACC15" strokeOpacity="0.15" strokeWidth="1" />
        <circle cx="240" cy="240" r="32" stroke="#FACC15" strokeOpacity="0.08" strokeWidth="1" />
      </svg>
    </div>
  );
}
