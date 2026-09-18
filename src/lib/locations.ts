export interface Location {
  slug: string;
  name: string;
  address: string;
  cityStateZip: string;
  phone: string | null;
  hours: string | null;
  lat: number | null;
  lng: number | null;
  mapsUrl: string;
}

export const locations: Location[] = [
  {
    slug: "palos-heights",
    name: "Palos Heights",
    address: "6400 W 127th St",
    cityStateZip: "Palos Heights, IL 60463",
    // TODO: Add the verified public phone, hours, and coordinates for this location.
    phone: null,
    hours: null,
    lat: null,
    lng: null,
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=6400+W+127th+St+Palos+Heights+IL+60463",
  },
  {
    slug: "chicago-roosevelt",
    name: "Roosevelt",
    address: "1549 W Roosevelt Rd",
    cityStateZip: "Chicago, IL 60608",
    // TODO: Add the verified public phone, hours, and coordinates for this location.
    phone: null,
    hours: null,
    lat: null,
    lng: null,
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=1549+W+Roosevelt+Rd+Chicago+IL+60608",
  },
  {
    slug: "rosenberg",
    name: "Rosenberg",
    address: "5400 Avenue I",
    cityStateZip: "Rosenberg, TX 77471",
    // TODO: Add the verified public phone, hours, and coordinates for this location.
    phone: null,
    hours: null,
    lat: null,
    lng: null,
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=5400+Avenue+I+Rosenberg+TX+77471",
  },
];