"use client";

import { ChevronDown, Map } from "lucide-react";
import { useState } from "react";
import LocationCard from "@/components/locations/LocationCard";
import { locations } from "@/lib/locations";

function mapUrl(location: (typeof locations)[number]) {
  const query = [location.address, location.cityStateZip].join(", ");
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

export default function LocationLocator() {
  const [selectedSlug, setSelectedSlug] = useState(locations[0].slug);
  const [mapOpen, setMapOpen] = useState(false);
  const selectedLocation = locations.find(({ slug }) => slug === selectedSlug) ?? locations[0];

  return (
    <section className="container-page mx-auto w-full flex-1 py-10 sm:py-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-brand-red text-xs font-bold uppercase tracking-[0.18em]">Choose your craving</p>
          <h2 className="text-brand-navy mt-2 text-2xl font-bold sm:text-3xl">Find your favourite food court near you</h2>
        </div>
        <button type="button" onClick={() => setMapOpen((open) => !open)} className="border-brand-navy text-brand-navy inline-flex items-center gap-2 rounded-full border-2 px-4 py-2.5 text-sm font-semibold lg:hidden">
          <Map className="h-4 w-4" aria-hidden="true" />
          {mapOpen ? "Hide map" : "Show map"}
          <ChevronDown className={`h-4 w-4 transition-transform ${mapOpen ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(320px,0.85fr)_minmax(0,1.5fr)] lg:items-start lg:gap-8">
        <div className="flex flex-col gap-4 lg:max-h-[calc(100vh-13rem)] lg:overflow-y-auto lg:pr-2">
          {locations.map((location) => (
            <LocationCard
              key={location.slug}
              location={location}
              active={location.slug === selectedSlug}
              onSelect={() => setSelectedSlug(location.slug)}
            />
          ))}
        </div>

        <div className={`${mapOpen ? "block" : "hidden"} lg:sticky lg:top-6 lg:block`}>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm">
            <div className="flex items-center justify-between gap-4 bg-brand-navy px-5 py-4 text-white">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow">Selected location</p>
                <p className="mt-1 font-semibold">{selectedLocation.name}</p>
              </div>
              <Map className="h-5 w-5 text-brand-yellow" aria-hidden="true" />
            </div>
            <iframe
              key={selectedLocation.slug}
              title={`${selectedLocation.name} map`}
              src={mapUrl(selectedLocation)}
              className="h-[min(62vh,520px)] w-full border-0 sm:h-130"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-3 text-xs text-black/50">Select a location to update the map.</p>
        </div>
      </div>
    </section>
  );
}