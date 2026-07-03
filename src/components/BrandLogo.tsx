type BrandLogoProps = {
  size?: "nav" | "hero" | "footer";
  className?: string;
};

export function BrandLogo({ size = "nav", className = "" }: BrandLogoProps) {
  const sizeClass =
    size === "hero" ? "text-4xl sm:text-5xl" : "text-lg";
  const logicClass = size === "hero" ? "text-white" : "text-[#C8D6E5]";
  const tmClass =
    size === "hero"
      ? "text-[0.45em] text-[#d97706] ml-0.5 align-super font-normal"
      : "text-[0.55em] text-[#d97706] ml-0.5 align-super font-normal";

  return (
    <span className={`font-bold tracking-tight ${sizeClass} ${className}`}>
      <span className="text-[#d97706] font-mono">TB</span>
      <span className={logicClass}> Logic</span>
      <sup className={tmClass}>™</sup>
    </span>
  );
}
