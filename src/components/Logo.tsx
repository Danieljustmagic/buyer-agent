/* eslint-disable @next/next/no-img-element */

export default function Logo({
  height = 52,
  light,
  withTagline,
}: {
  height?: number;
  light?: boolean;
  withTagline?: boolean;
}) {
  return (
    <img
      src="/logo-kap.png"
      alt="KAP — Le bon cap pour votre projet"
      style={{ height: `${height}px`, width: "auto", display: "block" }}
    />
  );
}
