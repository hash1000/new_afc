import { Clock3, MapPin, Navigation, Phone } from "lucide-react";
import type { Location } from "@/lib/locations";

interface LocationCardProps {
  location: Location;
  active: boolean;
  onSelect: () => void;
}

export default function LocationCard({ location, active, onSelect }: LocationCardProps) {
  return (
    <article
      className={`rounded-2xl border bg-white p-5 shadow-sm transition-all sm:p-6 ${
        active
          ? "border-brand-red ring-brand-red/15 shadow-md ring-4"
          : "border-gray-200 hover:border-brand-red/40 hover:shadow-md"
      }`}
      onMouseEnter={onSelect}
    >
      <button type="button" onClick={onSelect} className="w-full text-left" aria-pressed={active}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-brand-red text-xs font-bold uppercase tracking-[0.16em]">Americas Food Court</p>
            <h2 className="font-display text-brand-navy mt-1 text-2xl leading-tight sm:text-3xl">
              {location.name}
            </h2>
          </div>
          <MapPin className="text-brand-red mt-1 h-6 w-6 shrink-0" aria-hidden="true" />
        </div>
      </button>

      <div className="mt-5 flex flex-col gap-3 text-sm text-black/75">
        <div className="flex gap-3">
          <MapPin className="text-brand-red mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <address className="not-italic">
            {location.address}
            <br />
            {location.cityStateZip}
          </address>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="text-brand-red mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <span>{location.phone ?? "Phone details coming soon"}</span>
        </div>
        <div className="flex items-start gap-3">
          <Clock3 className="text-brand-red mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <span>{location.hours ?? "Hours will be posted soon"}</span>
        </div>
      </div>

      <a
        href={location.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-brand-red mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red/90"
      >
        <Navigation className="h-4 w-4" aria-hidden="true" />
        Get Directions
      </a>
    </article>
  );
}