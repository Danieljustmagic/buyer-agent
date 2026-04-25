import Image from "next/image";

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
    <Image
      src="/logo-kap.png"
      alt="KAP — Le bon cap pour votre projet"
      width={0}
      height={0}
      sizes="200px"
      style={{ width: "auto", height: `${height}px` }}
      priority
    />
  );
}
