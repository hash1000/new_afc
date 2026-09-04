export default function ComingSoonPlaceholder({
  className = "",
  brandName,
}: {
  className?: string;
  brandName?: string;
}) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-[repeating-linear-gradient(135deg,#fff8ea_0,#fff8ea_12px,#f8edd8_12px,#f8edd8_24px)] ${className}`}
      role="img"
      aria-label="Coming Soon"
    >
      <div className="flex max-w-[85%] flex-col items-center gap-1.5 text-center">
        <span className="rounded-full border border-brand-red/20 bg-white/90 px-3 py-1.5 font-display text-xs text-brand-red shadow-sm sm:px-4 sm:py-2 sm:text-base">
          Coming Soon
        </span>
        <span className="text-[10px] font-semibold text-brand-navy/70 sm:text-xs">
          {brandName ? `${brandName} menu is on the way` : "Fresh menu coming soon"}
        </span>
      </div>
    </div>
  );
}