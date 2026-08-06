import Image from "next/image";

export default function ZigzagDivider() {
  const teeth = Array.from({ length: 22 });
  return (
    <div
      className="flex w-full max-w-md items-center gap-[6px]"
      aria-hidden="true"
    >
      {teeth.map((_, i) => {
        const isUp = i % 2 === 0;

        return (
          <Image
            key={i}
            src={isUp ? "/images/hero/upword-arrow.svg" : "/images/hero/down-arrow.svg"}
            alt=""
            width={9}
            height={8}
            className="shrink-0"
          />
        );
      })}
    </div>
  );
}
