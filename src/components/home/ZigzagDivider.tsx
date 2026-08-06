export default function ZigzagDivider() {
  const teeth = Array.from({ length: 22 });

  return (
    <div
      className="flex w-full max-w-md items-center gap-[6px]"
      aria-hidden="true"
    >
      {teeth.map((_, i) => (
        <span
          key={i}
          className={`bg-brand-red inline-block h-[9px] w-[9px] shrink-0 ${
            i % 2 === 0 ? "translate-y-0" : "translate-y-[7px]"
          }`}
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        />
      ))}
    </div>
  );
}
