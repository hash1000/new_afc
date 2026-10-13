import Image from "next/image";

export default function ComingSoonPlaceholder({
  className = "",
  brandName,
  logo,
}: {
  className?: string;
  brandName?: string;
  logo?: string;
}) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-[repeating-linear-gradient(135deg,#fff8ea_0,#fff8ea_12px,#f8edd8_12px,#f8edd8_24px)] ${className}`}
      role="img"
      aria-label={brandName ? `${brandName} — Coming Soon` : "Coming Soon"}
    >
      <div className={`flex max-w-[85%] flex-col items-center gap-1.5 text-center ${logo ? "pb-10" : ""}`}>
        {logo && (
          <Image
            src={logo}
            alt={brandName ?? "Upcoming brand"}
            width={2869}
            height={1463}
            sizes="(min-width: 1024px) 15vw, 35vw"
            className="h-auto w-[48%] max-w-44 object-contain"
          />
        )}
        <span className="rounded-full border border-brand-red/20 bg-white/90 px-3 py-1.5 font-display text-xs text-brand-red shadow-sm sm:px-4 sm:py-2 sm:text-base">
          Coming Soon
        </span>
      </div>
    </div>
  );
}
