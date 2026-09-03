export interface Brand {
  id: string;
  name: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  foodImage: string;
  category: string[];
  orderUrl: string;
  /** Full-bleed banner image for the brand menu page hero, replaces the default logo+foodImage layout when set. */
  menuBanner?: string;
  /** Cream-card hero variant: logo top-left over a plated food cutout bottom-right, used instead of menuBanner. */
  menuHeroImage?: string;
  /** Hex color for menu item titles on the brand's menu page. Defaults to the site red accent. */
  menuAccentColor?: string;
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
    orderUrl: "/food-menu/mrbeast",
    menuBanner: "/images/menu/mr-beast/mr-beast-header.jpg",
  },
  {
    id: "cpk",
    name: "California Pizza Kitchen",
    logo: "/images/brands/cpk-logo.png",
    logoWidth: 280,
    logoHeight: 132,
    foodImage: "/images/brands/california.jpg",
    category: ["pizza"],
    orderUrl: "/food-menu/cpk",
    menuBanner: "/images/menu/california-pizza/california-pizza-header.jpg",
  },
  {
    id: "cheesecake",
    name: "The Cheesecake Factory Bakery",
    logo: "/images/brands/cheesecake-logo.png",
    logoWidth: 244,
    logoHeight: 116,
    foodImage: "/images/brands/cheescake.jpg",
    category: ["desserts"],
    orderUrl: "/food-menu/cheesecake",
    menuHeroImage: "/images/menu/chees-cake/cheesecake-img.jpg",
    menuAccentColor: "#aa903d",
  },
  {
    id: "chickchick",
    name: "Chick Chick Eats",
    logo: "/images/brands/chickchick-logo.png",
    logoWidth: 269,
    logoHeight: 88,
    foodImage: "/images/brands/chick-chick.jpg",
    category: ["chicken", "chicken-sandwiches"],
    orderUrl: "/food-menu/chickchick",
  },
  {
    id: "oneslice",
    name: "One More Slice Pizza",
    logo: "/images/brands/oneslice-logo.png",
    logoWidth: 256,
    logoHeight: 120,
    foodImage: "/images/brands/one-more-slice.jpg",
    category: ["pizza"],
    orderUrl: "/food-menu/oneslice",
    menuBanner: "/images/menu/one-more-slice/herder.jpg",
  },
  {
    id: "dogitup",
    name: "Dog It Up",
    logo: "/images/brands/dogitup-logo.png",
    logoWidth: 200,
    logoHeight: 132,
    foodImage: "/images/brands/dog-it-up.jpg",
    category: ["hot-dogs"],
    orderUrl: "/food-menu/dogitup",
    menuBanner: "/images/menu/dog-it-up/dog-it-up-header.jpg",
  },
  {
    id: "empanadas",
    name: "Empanadas United",
    logo: "/images/brands/empanadas-logo.png",
    logoWidth: 308,
    logoHeight: 144,
    foodImage: "/images/brands/empanda.jpg",
    category: ["empanadas", "mexican"],
    orderUrl: "/food-menu/empanadas",
  },
  {
    id: "manvsfries",
    name: "Man vs Fries",
    logo: "/images/brands/manvsfries-logo.png",
    logoWidth: 204,
    logoHeight: 136,
    foodImage: "/images/brands/man-vs-fries.jpg",
    category: ["burgers"],
    orderUrl: "/food-menu/manvsfries",
    menuBanner: "/images/menu/menvsfries/manvsfries-header.jpg",
  },
  {
    id: "chickaroo",
    name: "Chickaroo Chicken",
    logo: "/images/brands/chickaroo-logo.png",
    logoWidth: 292,
    logoHeight: 96,
    foodImage: "/images/brands/chickaroo.jpg",
    category: ["chicken"],
    orderUrl: "/food-menu/chickaroo",
  },
  {
    id: "sweetwaves",
    name: "Sweet Waves Kitchen",
    logo: "/images/brands/sweetwaves-logo.png",
    logoWidth: 256,
    logoHeight: 120,
    foodImage: "/images/brands/sweet-waves.jpg",
    category: ["desserts", "breakfast"],
    orderUrl: "/food-menu/sweetwaves",
  },
];

export interface Category {
  id: string;
  label: string;
  emoji: string;
}

export const categories: Category[] = [
  { id: "all", label: "All", emoji: "" },
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
