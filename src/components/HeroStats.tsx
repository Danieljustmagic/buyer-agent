"use client";

import { useEffect, useRef, useState } from "react";

function useCountTo(
  target: number,
  from: number,
  duration: number,
  active: boolean
) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!active) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.round(from + (target - from) * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [active, target, from, duration]);

  return value;
}

function useTypewriter(text: string, duration: number, active: boolean) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!active) return;
    setDisplayed("");
    const charDelay = duration / text.length;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, charDelay);
    return () => clearInterval(interval);
  }, [active, text, duration]);

  return displayed;
}

export default function HeroStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const count100 = useCountTo(100, 0, 1400, active);
  const count0 = useCountTo(0, 10, 1000, active);
  const typeAZ = useTypewriter("A → Z", 600, active);

  const stats = [
    { value: typeAZ || "\u00A0", suffix: "", label: "accompagnement complet" },
    { value: count100, suffix: "%", label: "dans votre camp" },
    { value: count0, suffix: "", label: "conflit d'intérêt" },
  ];

  return (
    <div
      ref={ref}
      className="mt-24 pt-8 border-t border-white/10 grid grid-cols-3 gap-8 max-w-md"
    >
      {stats.map((s) => (
        <div key={s.label} className="group/stat">
          <div className="text-xl font-black text-white group-hover/stat:text-accent transition-colors duration-200 tabular-nums">
            {s.value}{s.suffix}
          </div>
          <div className="text-xs text-white/55 mt-1 leading-snug">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
