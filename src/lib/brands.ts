export interface Brand {
  id: string;
  name: string;
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
  foodImage: string;
  category: string[];
  orderUrl: string;
  /** Full-bleed banner image for the brand menu page hero, replaces the default logo+foodImage layout when set. */
  menuBanner?: string;
  /** Intrinsic pixel dimensions of menuBanner, used to preserve its native aspect ratio. */
  menuBannerWidth?: number;
  menuBannerHeight?: number;
  /** Crisp logo (SVG/PNG with transparency) overlaid top-left on menuBanner, used instead of any logo baked into the banner image. */
  menuBannerLogo?: string;
  menuBannerLogoWidth?: number;
  menuBannerLogoHeight?: number;
  /** Cream-card hero variant: logo top-left over a plated food cutout bottom-right, used instead of menuBanner. */
  menuHeroImage?: string;
  /** Logo shown on the left side of the cream-card menu hero. */
  menuHeroLogo?: string;
  menuHeroLogoWidth?: number;
  menuHeroLogoHeight?: number;
  /** Intrinsic dimensions for the food image shown on the right side of the menu hero. */
  menuHeroImageWidth?: number;
  menuHeroImageHeight?: number;
  /** Background color for the logo-and-food menu hero banner. */
  menuHeroColor?: string;
  comingSoon?: boolean;
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
    menuHeroLogo: "/images/menu/mr-beast/mr-beast-header-logo.svg",
    menuHeroImage: "/images/menu/mr-beast/mrbeast-img.png",
    menuHeroImageWidth: 0,
    menuHeroImageHeight: 0,
    menuHeroColor: "#32c1fc",
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
    menuHeroLogo: "/images/menu/california-pizza/california-logo.png",
    menuHeroImage: "/images/menu/california-pizza/california-img.png",
    menuHeroImageWidth: 0,
    menuHeroImageHeight: 0,
    menuHeroColor: "#fef8e3",
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
    menuHeroLogo: "/images/menu/chees-cake/cheescake-logo.png",
    menuHeroImage: "/images/menu/chees-cake/cheesecake-img.png",
    menuHeroImageWidth: 0,
    menuHeroImageHeight: 0,
    menuHeroColor: "#fef8e3",
    menuAccentColor: "#aa903d",
  },
  {
    id: "chickchick",
    name: "Chick Chick Eats",
    foodImage: "/images/brands/chick-chick.jpg",
    category: ["chicken", "chicken-sandwiches"],
    orderUrl: "/food-menu/chickchick",
    comingSoon: true,
  },
  {
    id: "oneslice",
    name: "One More Slice Pizza",
    logo: "/images/menu/one-more-slice/one-more-slice-header-logo.png",
    logoWidth: 256,
    logoHeight: 120,
    foodImage: "/images/brands/one-more-slice.jpg",
    category: ["pizza"],
    orderUrl: "/food-menu/oneslice",
    menuHeroLogo: "/images/menu/one-more-slice/one-more-slice-header-logo.png",
    menuHeroImage: "/images/menu/one-more-slice/onemoreslice-img.png",
    menuHeroImageWidth: 0,
    menuHeroImageHeight: 0,
    menuHeroColor: "#f95d0b",
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
    menuHeroLogo: "/images/menu/dog-it-up/dog-it-up-logo.png",
    menuHeroImage: "/images/menu/dog-it-up/dog-it-up-img.png",
    menuHeroImageWidth: 0,
    menuHeroImageHeight: 0,
    menuHeroColor: "#fef8e3",
  },
  {
    id: "empanadas",
    name: "Empanadas United",
    foodImage: "/images/brands/empanda.jpg",
    category: ["empanadas", "mexican"],
    orderUrl: "/food-menu/empanadas",
    comingSoon: true,
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
    menuHeroLogo: "/images/menu/menvsfries/manvsfries-logo.png",
    menuHeroImage: "/images/menu/menvsfries/manvsfries-img.png",
    menuHeroImageWidth: 0,
    menuHeroImageHeight: 0,
    menuHeroColor: "#ff76b1",
  },
  {
    id: "chickaroo",
    name: "Chickaroo Chicken",
    foodImage: "/images/brands/chickaroo.jpg",
    category: ["chicken"],
    orderUrl: "/food-menu/chickaroo",
    comingSoon: true,
  },
  {
    id: "sweetwaves",
    name: "Sweet Waves Kitchen",
    foodImage: "/images/brands/sweet-waves.jpg",
    category: ["desserts", "breakfast"],
    orderUrl: "/food-menu/sweetwaves",
    comingSoon: true,
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
