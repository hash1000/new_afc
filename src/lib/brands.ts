export interface Brand {
  id: string;
  name: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  foodImage: string;
  category: string[];
  orderUrl: string;
}

export const brands: Brand[] = [
  {
    id: "mrbeast",
    name: "MrBeast Burger",
    logo: "/images/brands/mrbeast-logo.png",
    logoWidth: 256,
    logoHeight: 120,
    foodImage: "/images/brands/mrbeast.jpg",
    category: ["burgers"],
    orderUrl: "#",
  },
  {
    id: "cpk",
    name: "California Pizza Kitchen",
    logo: "/images/brands/cpk-logo.png",
    logoWidth: 280,
    logoHeight: 132,
    foodImage: "/images/brands/california.jpg",
    category: ["pizza"],
    orderUrl: "#",
  },
  {
    id: "cheesecake",
    name: "The Cheesecake Factory Bakery",
    logo: "/images/brands/cheesecake-logo.png",
    logoWidth: 244,
    logoHeight: 116,
    foodImage: "/images/brands/cheescake.jpg",
    category: ["desserts"],
    orderUrl: "#",
  },
  {
    id: "chickchick",
    name: "Chick Chick Eats",
    logo: "/images/brands/chickchick-logo.png",
    logoWidth: 269,
    logoHeight: 88,
    foodImage: "/images/brands/chick-chick.jpg",
    category: ["chicken", "chicken-sandwiches"],
    orderUrl: "#",
  },
  {
    id: "oneslice",
    name: "One More Slice Pizza",
    logo: "/images/brands/oneslice-logo.png",
    logoWidth: 256,
    logoHeight: 120,
    foodImage: "/images/brands/one-more-slice.jpg",
    category: ["pizza"],
    orderUrl: "#",
  },
  {
    id: "dogitup",
    name: "Dog It Up",
    logo: "/images/brands/dogitup-logo.png",
    logoWidth: 200,
    logoHeight: 132,
    foodImage: "/images/brands/dog-it-up.jpg",
    category: ["hot-dogs"],
    orderUrl: "#",
  },
  {
    id: "empanadas",
    name: "Empanadas United",
    logo: "/images/brands/empanadas-logo.png",
    logoWidth: 308,
    logoHeight: 144,
    foodImage: "/images/brands/empanda.jpg",
    category: ["empanadas", "mexican"],
    orderUrl: "#",
  },
  {
    id: "manvsfries",
    name: "Man vs Fries",
    logo: "/images/brands/manvsfries-logo.png",
    logoWidth: 204,
    logoHeight: 136,
    foodImage: "/images/brands/man-vs-fries.jpg",
    category: ["burgers"],
    orderUrl: "#",
  },
  {
    id: "chickaroo",
    name: "Chickaroo Chicken",
    logo: "/images/brands/chickaroo-logo.png",
    logoWidth: 292,
    logoHeight: 96,
    foodImage: "/images/brands/chickaroo.jpg",
    category: ["chicken"],
    orderUrl: "#",
  },
  {
    id: "sweetwaves",
    name: "Sweet Waves Kitchen",
    logo: "/images/brands/sweetwaves-logo.png",
    logoWidth: 256,
    logoHeight: 120,
    foodImage: "/images/brands/sweet-waves.jpg",
    category: ["desserts", "breakfast"],
    orderUrl: "#",
  },
];

export interface Category {
  id: string;
  label: string;
  emoji: string;
}

export const categories: Category[] = [
  { id: "burgers", label: "Burgers", emoji: "🍔" },
  { id: "pizza", label: "Pizza", emoji: "🍕" },
  { id: "chicken-sandwiches", label: "Chicken Sandwiches", emoji: "🥪" },
  { id: "hot-dogs", label: "Hot Dogs", emoji: "🌭" },
  { id: "chicken", label: "Chicken", emoji: "🍗" },
  { id: "empanadas", label: "Empanadas", emoji: "🥟" },
  { id: "mexican", label: "Mexican", emoji: "🌮" },
  { id: "desserts", label: "Desserts", emoji: "🎂" },
  { id: "breakfast", label: "Breakfast", emoji: "🥞" },
];
