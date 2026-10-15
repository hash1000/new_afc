export interface MenuItem {
  id: string;
  name: string;
  description: string;
  /** Per-item image, overrides the section's shared/fallback image when set. */
  image?: string;
  price?: number;
  /** Whole-pizza price when the same recipe is also sold by the slice. */
  pizzaPrice?: number;
  /** Purchasable portion choices, each with its own price and cart identity. */
  sizeOptions?: { id: string; label: string; price: number }[];
  rating?: number;
  ratingCount?: string;
  /** Size options badge shown on the card, e.g. "Regular | Large". */
  sizeLabel?: string;
}

export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
}

// Fry Chicks names, portions, and prices follow the supplied menu reference.
// Both Chili/Chilli entries remain as printed; placeholder copy is replaced with a short description.
const rawBrandMenus: Record<string, MenuSection[]> = {
  // Names, descriptions, and prices transcribed from the supplied Wrap it Habibi menu.
  wrapithabibi: [
    {
      id: "shawarmas",
      title: "Shawarmas",
      items: [
        {
          id: "wrapithabibi-original-chicken-shawarma",
          name: "Original Chicken Shawarma",
          description: "Tender chicken, crisp vegetables, garlic sauce, and hummus in pita.",
          price: 9.99,
          image: "/images/menu/wrap-it-habibi/chicken-shawarma.png"
        },
        {
          id: "wrapithabibi-original-lamb-shawarma",
          name: "Original Lamb Shawarma",
          description: "Succulent lamb, fresh vegetables, garlic sauce, and hummus in pita.",
          price: 11.49,
          image: "/images/menu/wrap-it-habibi/lamb-shawarma.png"
        },
        {
          id: "wrapithabibi-special-chicken-shawarma",
          name: "Special Chicken Shawarma",
          description: "Chicken, pickled turnip, vegetables, garlic sauce, and hummus in pita.",
          price: 11.49,
          image: "/images/menu/wrap-it-habibi/special-chicken-shawarma.png"
        },
        {
          id: "wrapithabibi-special-lamb-shawarma",
          name: "Special Lamb Shawarma",
          description: "Lamb, pickled turnip, vegetables, garlic sauce, and hummus in pita.",
          price: 12.99,
          image: "/images/menu/wrap-it-habibi/special-lamb-shawarma.png"
        },
        {
          id: "wrapithabibi-cheesy-chicken-shawarma",
          name: "Cheesy Chicken Shawarma",
          description: "Chicken, melted mozzarella, vegetables, and creamy garlic sauce in pita.",
          price: 9.99,
          image: "/images/menu/wrap-it-habibi/cheesy-chicken-shawarma.png"
        },
        {
          id: "wrapithabibi-cheesy-lamb-shawarma",
          name: "Cheesy Lamb Shawarma",
          description: "Lamb, melted mozzarella, vegetables, and creamy garlic sauce in pita.",
          price: 11.49,
          image: "/images/menu/wrap-it-habibi/cheese-lamb-shawarma.png"
        }
      ]
    },
    {
      id: "sandwiches",
      title: "Sandwiches",
      items: [
        {
          id: "wrapithabibi-falafel-pita-sandwich",
          name: "Falafel Pita Sandwich",
          description: "Crispy falafel, fresh vegetables, hummus, and garlic sauce in pita.",
          price: 7.99,
          image: "/images/menu/wrap-it-habibi/falafel-pita-sandwich.png"
        },
        {
          id: "wrapithabibi-veggie-pita-sandwich",
          name: "Veggie Pita Sandwich",
          description: "Fresh vegetables, olives, feta, hummus, and garlic sauce in pita.",
          price: 7.99,
          image: "/images/menu/wrap-it-habibi/veggie-pita-sandwich.png"
        }
      ]
    },
    {
      id: "bowls",
      title: "Bowls",
      items: [
        {
          id: "wrapithabibi-chicken-shawarma-bowl",
          name: "Chicken Shawarma Bowl",
          description: "Chicken shawarma over rice with garlic sauce, hummus, and pita.",
          price: 13.99,
          image: "/images/menu/wrap-it-habibi/chicken-shawarma-bowl.png"
        },
        {
          id: "wrapithabibi-lamb-shawarma-bowl",
          name: "Lamb Shawarma Bowl",
          description: "Lamb shawarma over rice with garlic sauce, hummus, and pita.",
          price: 15.49,
          image: "/images/menu/wrap-it-habibi/lamb-shawarma-bowl.png"
        },
        {
          id: "wrapithabibi-falafel-bowl",
          name: "Falafel Bowl",
          description: "Crispy falafel over rice with garlic sauce, hummus, and pita.",
          price: 14.99,
          image: "/images/menu/wrap-it-habibi/falafel-bowl.png"
        }
      ]
    }
  ],
  "fry-chicks": [
    {
      id: "breakfast",
      title: "Breakfast Items",
      items: [
        {
          id: "fry-chicks-classic-breakfast-sandwich",
          name: "Classic Breakfast Sandwich",
          description: "Egg, bacon, cheddar sauce, and Classic sauce in English muffin.",
          image: "/images/menu/fry-chicks/classic-or-spicy-breakfasy-sandwich.png",
          price: 5.99
        },
        {
          id: "fry-chicks-spicy-breakfast-sandwich",
          name: "Spicy Breakfast Sandwich",
          description: "Egg, bacon, cheddar sauce, and spicy sauce in English muffin.",
          image: "/images/menu/fry-chicks/classic-or-spicy-breakfasy-sandwich.png",
          price: 5.99
        },
        {
          id: "fry-chicks-sausage-breakfast-sandwich",
          name: "Sausage Breakfast Sandwich",
          description: "Sausage, egg, and cheddar sauce in croissant or English muffin.",
          image: "/images/menu/fry-chicks/sausage-breakfast-sandwich.png",
          price: 5.99
        },
        {
          id: "fry-chicks-french-toast-bites",
          name: "French Toast Sticks",
          description: "Crispy French toast sticks with powdered sugar and maple syrup.",
          image: "/images/menu/fry-chicks/french-toast-sticks---5.png",
          price: 4.49
        },
        {
          id: "fry-chicks-hash-brown",
          name: "Hash Brown",
          description: "Golden potato hash browns with crispy edges and soft centers.",
          image: "/images/menu/fry-chicks/hash-brown.png",
          price: 1.99
        },
        {
          id: "fry-chicks-apple-juice",
          name: "Apple Juice",
          description: "Pure apple juice poured over ice for crisp, refreshing sweetness.",
          image: "/images/menu/fry-chicks/apple-juice.png",
          price: 1.99
        }
      ]
    },
    {
      id: "chicken-sides",
      title: "Chicken Sides",
      items: [
        {
          id: "fry-chicks-chicken-nuggets-6-pieces",
          name: "Chicken Nuggets",
          description: "Golden chicken nuggets with crispy coatings and tender centers.",
          image: "/images/menu/fry-chicks/chicken-nuggets.png",
          price: 4.49,
          sizeLabel: "6 Pieces"
        },
        {
          id: "fry-chicks-chicken-nuggets-12-pieces",
          name: "Chicken Nuggets",
          description: "Golden chicken nuggets with crispy coatings and tender centers.",
          image: "/images/menu/fry-chicks/12-nuggets.png",
          price: 5.99,
          sizeLabel: "12 Pieces"
        },
        {
          id: "fry-chicks-chicken-wings-6-pieces",
          name: "Chicken Wings",
          description: "Fried chicken wings with crispy skin and juicy meat.",
          image: "/images/menu/fry-chicks/6-wings.png",
          price: 8.99,
          sizeLabel: "6 Pieces"
        },
        {
          id: "fry-chicks-chicken-wings-12-pieces",
          name: "Chicken Wings",
          description: "Fried chicken wings with crispy skin and juicy meat.",
          image: "/images/menu/fry-chicks/6-wings.png",
          price: 17.49,
          sizeLabel: "12 Pieces"
        },
        {
          id: "fry-chicks-chicken-wings-18-pieces",
          name: "Chicken Wings",
          description: "Fried chicken wings with crispy skin and juicy meat.",
          image: "/images/menu/fry-chicks/18-wings.png",
          price: 24.99,
          sizeLabel: "18 Pieces"
        },
        {
          id: "fry-chicks-1-tenders",
          name: "Chicken Tenders",
          description: "Golden chicken tenders with crispy coating and juicy center.",
          image: "/images/menu/fry-chicks/1-tender.png",
          price: 5.49,
          sizeLabel: "1 Tender"
        },
        {
          id: "fry-chicks-2-tenders",
          name: "Chicken Tenders",
          description: "Golden chicken tenders with crispy coating and juicy center.",
          image: "/images/menu/fry-chicks/2-tender.png",
          price: 6.99,
          sizeLabel: "2 Tenders"
        },
        {
          id: "fry-chicks-3-tenders",
          name: "Chicken Tenders",
          description: "Golden chicken tenders with crispy coating and juicy center.",
          image: "/images/menu/fry-chicks/3-tender.png",
          price: 8.49,
          sizeLabel: "3 Tenders"
        },
        {
          id: "fry-chicks-4-tenders",
          name: "Chicken Tenders",
          description: "Golden chicken tenders with crispy coating and juicy center.",
          image: "/images/menu/fry-chicks/4-tender.png",
          price: 6.99,
          sizeLabel: "4 Tenders"
        },
        {
          id: "fry-chicks-5-tenders",
          name: "Chicken Tenders",
          description: "Golden chicken tenders with crispy coating and juicy center.",
          image: "/images/menu/fry-chicks/5-tender.png",
          price: 8.49,
          sizeLabel: "5 Tenders"
        }
      ]
    },
    {
      id: "chicken-sandwiches",
      title: "Chicken Sandwiches",
      items: [
        {
          id: "fry-chicks-classic-chicken",
          name: "Classic Chicken",
          description: "Crispy chicken, lettuce, cheese, pickles, and savory sauce in brioche.",
          image: "/images/menu/fry-chicks/classic-crispy-chicken-sandwich.png",
          price: 6.49
        },
        {
          id: "fry-chicks-spicy-chicken",
          name: "Spicy Chicken",
          description: "Crispy chicken, cheese, lettuce, jalapeños, and spicy sauce in brioche.",
          image: "/images/menu/fry-chicks/premium-crispy-chicken-sandwich-with-jalapenos.png",
          price: 6.49
        },
        {
          id: "fry-chicks-chilli-chicken-crunch",
          name: "Chilli Chicken Crunch",
          description: "Crispy chicken, lettuce, and cheese with jalapeños or tangy pickles.",
          image: "/images/menu/fry-chicks/chili-chicken-crunch-sandwich.png",
          price: 6.49
        },
        {
          id: "fry-chicks-bbq-bacon",
          name: "BBQ Bacon Ranch",
          description: "Crispy chicken, bacon, cheese, lettuce, and cool ranch in brioche.",
          image: "/images/menu/fry-chicks/crispy-bbq-bacon-chicken-sandwich.png",
          price: 7.99
        },
        {
          id: "fry-chicks-chicken-bacon-ranch",
          name: "Chicken Bacon Ranch",
          description: "Crispy chicken with bacon and ranch.",
          image: "/images/menu/fry-chicks/crispy-bacon-ranch-chicken-sandwich.png",
          price: 6.49
        },
        {
          id: "fry-chicks-club-deluxe",
          name: "Club Deluxe",
          description: "Crispy chicken, bacon, lettuce, tomato, cheese, and sauce in brioche.",
          image: "/images/menu/fry-chicks/club-deluxe-crispy-chicken-sandwich.png",
          price: 6.49
        },
        {
          id: "fry-chicks-chili-chicken-crunch",
          name: "Chili Chicken Crunch",
          description: "Crispy chicken, bacon, lettuce, cheese, and sauce in soft brioche.",
          image: "/images/menu/fry-chicks/chili-chicken-crunch-sandwich.png",
          price: 6.49
        },
        {
          id: "fry-chicks-buffalo-ranch",
          name: "Buffalo Ranch",
          description: "Crispy chicken, lettuce, cheese, Buffalo ranch, and pickles or jalapeños.",
          image: "/images/menu/fry-chicks/crispy-buffalo-ranch-chicken-sandwich.png",
          price: 7.99
        }
      ]
    },
    {
      id: "buckets",
      title: "Buckets",
      items: [
        {
          id: "fry-chicks-28-boneless",
          name: "28 Boneless",
          description: "Crispy boneless chicken pieces with tender, juicy meat inside.",
          image: "/images/menu/fry-chicks/boneless-bucket.png",
          price: 1.99,
          sizeLabel: "28 Pieces"
        },
        {
          id: "fry-chicks-28-bone-in",
          name: "28 Bone-In",
          description: "Crispy chicken pieces with juicy meat on the bone.",
          image: "/images/menu/fry-chicks/bone-in-bucket.png",
          price: 2.79,
          sizeLabel: "28 Pieces"
        },
        {
          id: "fry-chicks-42-boneless",
          name: "42 Boneless",
          description: "Crispy boneless chicken pieces with tender, juicy meat inside.",
          image: "/images/menu/fry-chicks/boneless-bucket.png",
          price: 5.99,
          sizeLabel: "42 Pieces"
        },
        {
          id: "fry-chicks-42-bone-in",
          name: "42 Bone-In",
          description: "Crispy chicken pieces with juicy meat on the bone.",
          image: "/images/menu/fry-chicks/bone-in-bucket.png",
          price: 5.99,
          sizeLabel: "42 Pieces"
        },
        {
          id: "fry-chicks-18-pc-tenders",
          name: "18 PC Tenders",
          description: "Golden chicken tenders with crispy coatings and tender centers.",
          image: "/images/menu/fry-chicks/chicken-tenders.png",
          price: 0,
          sizeLabel: "18 Pieces"
        },
        {
          id: "fry-chicks-26-pc-tenders",
          name: "26 PC Tenders",
          description: "Golden chicken tenders with crispy coatings and tender centers.",
          image: "/images/menu/fry-chicks/chicken-tenders.png",
          price: 5.99,
          sizeLabel: "26 Pieces"
        },
        {
          id: "fry-chicks-36-pc-nugget",
          name: "36 PC Nugget",
          description: "Golden chicken nuggets with crispy coatings and tender centers.",
          image: "/images/menu/fry-chicks/nuggets-bucket.png",
          price: 0,
          sizeLabel: "36 Pieces"
        }
      ]
    }
  ],

  mrbeast: [
    {
      id: "combos",
      title: "Combos",
      items: [
        {
          id: "beast-style-burger-combo",
          name: "Beast Style Burger Combo",
          description:
            "Smashed crispy beef patties with Holor seasoning, American cheese, pickles, diced onion, mayo, ketchup and mustard on a toasted bun, served with your choice of crinkle fries and a drink.",
          image: "/images/menu/mr-beast/beast-style-burger-combo.jpg",
          price: 0,
          rating: 4.9,
          ratingCount: "10K+",
        },
        {
          id: "chicken-sandwich-combo",
          name: "Chicken Sandwich Combo",
          description:
            "A crispy chicken tender sandwich or Nashville hot chicken tender sandwich with your choice of crinkle fries, Beast Style fries and a drink.",
          image: "/images/menu/mr-beast/chicken-sandwich-combo.jpg",
          price: 0,
          rating: 4.8,
          ratingCount: "10K+",
        },
      ],
    },
    {
      id: "burgers",
      title: "Burgers",
      items: [
        {
          id: "beast-style",
          name: "Beast Style",
          description:
            "Smashed crispy beef patties with Holor seasoning, American cheese, pickles, diced onion, mayo, ketchup and mustard on a toasted bun.",
          image: "/images/menu/mr-beast/beast-style.jpg",
          price: 0,
          rating: 4.8,
          ratingCount: "10K+",
        },
        {
          id: "chandler-style",
          name: "Chandler Style",
          description:
            "Two smashed crispy beef patties with house seasoning, served with American cheese on a toasted bun.",
          image: "/images/menu/mr-beast/chandler-style.jpg",
          price: 0,
          rating: 4.8,
          ratingCount: "10K+",
        },
        {
          id: "nolan-style",
          name: "Nolan Style",
          description:
            "Two smashed crispy beef patties with house seasoning, American cheese, bacon, topped with crinkle fries on a toasted bun.",
          image: "/images/menu/mr-beast/nolan-style.jpg",
          price: 0,
          rating: 4.8,
          ratingCount: "10K+",
        },
        {
          id: "karls-deluxe",
          name: "Karl's Deluxe",
          description:
            "A patty melt styled Karl's style with a crispy seasoned beef patty, caramelized onions and cheese on a toasted inverted bun.",
          image: "/images/menu/mr-beast/karls-deluxe.jpg",
          price: 0,
          rating: 4.8,
          ratingCount: "10K+",
        },
      ],
    },
    {
      id: "sandwiches",
      title: "Sandwiches",
      items: [
        {
          id: "karls-grilled-cheese",
          name: "Karl's Grilled Cheese",
          description: "3 slices of American cheese griddled crisp on an inverted bun.",
          image: "/images/menu/mr-beast/karls-grilled-cheese.jpg",
          price: 0,
          rating: 4.8,
          ratingCount: "10K+",
        },
        {
          id: "crispy-chicken-tender-sandwich",
          name: "Crispy Chicken Tender Sandwich",
          description: "With mayo, shredded lettuce and pickles on a toasted bun.",
          image: "/images/menu/mr-beast/crispy-chicken-tender-sandwich.jpg",
          price: 0,
          rating: 4.8,
          ratingCount: "10K+",
        },
        {
          id: "nashville-hot-chicken-tender-sandwich",
          name: "Nashville Hot Chicken Tender Sandwich",
          description:
            "Two smashed crispy beef patties with house seasoning, American cheese, bacon, topped with crinkle fries on a toasted bun.",
          image: "/images/menu/mr-beast/nashville-hot-chicken-tender-sandwich.jpg",
          price: 0,
          rating: 4.8,
          ratingCount: "10K+",
        },
      ],
    },
    {
      id: "sides",
      title: "Sides",
      items: [
        {
          id: "crinkle-fries",
          name: "Crinkle Fries",
          description: "Crinkle fries lightly seasoned with salt.",
          image: "/images/menu/mr-beast/crinkle-fries.jpg",
          price: 0,
          rating: 4.8,
          ratingCount: "10K+",
        },
        {
          id: "signature-crinkle-fries",
          name: "Signature Crinkle Fries",
          description: "Crinkle fries seasoned with spicy red pepper, garlic, paprika, sugar and a hint of lime.",
          image: "/images/menu/mr-beast/signature-crinkle-fries.jpg",
          price: 0,
          rating: 4.8,
          ratingCount: "10K+",
        },
        {
          id: "beast-style-fries",
          name: "Beast Style Fries",
          description:
            "Seasoned crinkle fries loaded with caramelized onions, American cheese, pickles, mayo, ketchup and mustard.",
          image: "/images/menu/mr-beast/beast-style-fries.jpg",
          price: 0,
          rating: 4.8,
          ratingCount: "10K+",
        },
      ],
    },
    {
      id: "desserts",
      title: "Desserts",
      items: [
        {
          id: "chocolate-chip-cookie",
          name: "Chocolate Chip Cookie",
          description: "Freshly baked chocolate chip cookie.",
          image: "/images/menu/mr-beast/chocolate-chip-cookie.jpg",
          price: 0,
          rating: 4.8,
          ratingCount: "10K+",
        },
      ],
    },
    {
      id: "beverages",
      title: "Beverages",
      items: [
        {
          id: "canned-soda",
          name: "Canned Soda",
          description: "Ice-cold canned soda of your choice.",
          image: "/images/menu/mr-beast/canned-soda.jpg",
          price: 0,
          rating: 4.8,
          ratingCount: "10K+",
        },
        {
          id: "bottled-water",
          name: "Bottled Water",
          description: "Chilled bottled water.",
          image: "/images/menu/mr-beast/bottled-water.jpg",
          price: 0,
          rating: 4.8,
          ratingCount: "10K+",
        },
      ],
    },
  ],

  // California Pizza Kitchen content follows the supplied eight-item menu.
  cpk: [
    {
      id: "cpk-original-pizza",
      title: "CPK Original Pizza",
      items: [
        {
          id: "the-original-bbq-chicken-pizza",
          name: "BBQ Chicken",
          description: "Grilled chicken, smoky Gouda, red onions, cilantro, and BBQ sauce.",
          price: 19.69,
          image: "/images/menu/california-pizza/the-original-bbq-chicken-pizza.jpg"
        },
        {
          id: "pepperoni",
          name: "Pepperoni",
          description: "Spicy rustic pepperoni with fresh mozzarella and wild Greek oregano.",
          price: 19.69,
          image: "/images/menu/california-pizza/pepperoni.jpg"
        },
        {
          id: "mupesa",
          name: "Mupesa",
          description: "Broccolini, zucchini, mushrooms, roasted tomatoes, corn, onions, and melted mozzarella.",
          price: 20.69,
          image: "/images/menu/california-pizza/california-veggie.jpg"
        },
        {
          id: "traditional-cheese",
          name: "Traditional Cheese",
          description: "Mozzarella pizza topped with broccolini, zucchini, mushrooms, tomatoes, and corn.",
          price: 18.69,
          image: "/images/menu/california-pizza/california-logo.png"
        },
        {
          id: "wild-mushroom",
          name: "Wild Mushroom",
          description: "Cremini mushrooms, garlic, Romano, mozzarella, and scallions with olive oil.",
          price: 20.19,
          image: "/images/menu/california-pizza/wild-mushroom.jpg"
        },
        {
          id: "margherita",
          name: "Margherita",
          description: "Italian tomatoes, fresh mozzarella, basil, and Parmesan for classic flavor.",
          price: 17.69,
          image: "/images/menu/california-pizza/margherita.jpg"
        },
        {
          id: "hawaiian",
          name: "Hawaiian",
          description: "Fresh pineapple, applewood smoked ham, and scallions on golden crust.",
          price: 20.69,
          image: "/images/menu/california-pizza/hawaiian.jpg"
        },
        {
          id: "the-works",
          name: "The Works",
          description: "Italian sausage, pepperoni, mushrooms, mozzarella, onions, peppers, olives, and oregano.",
          price: 20.69,
          image: "/images/menu/california-pizza/the-works.jpg"
        }
      ]
    }
  ],

  // Cheesecake Factory Bakery content follows the supplied five-dessert menu.
  cheesecake: [
    {
      id: "desserts",
      title: "Desserts",
      items: [
        {
          id: "godiva-chocolate-cheesecake",
          name: "Cheesecake Chocolate Double Godiva",
          description: "Flourless Godiva cake layered with chocolate cheesecake and silky mousse.",
          image: "/images/menu/chees-cake/godiva-chocolate-cheesecake.jpg",
          price: 11.95
        },
        {
          id: "cheesecake-mousse-tuxedo",
          name: "Cheesecake Mousse Tuxedo",
          description: "Fudge cake, chocolate cheesecake, vanilla mascarpone mousse, and rich chocolate.",
          image: "/images/menu/chees-cake/cheescake-logo.png",
          price: 11.95
        },
        {
          id: "bananas-foster-cheesecake",
          name: "Bananas Foster Cheesecake",
          description: "Creamy banana cheesecake topped with Bavarian cream and fresh banana.",
          image: "/images/menu/chees-cake/cheescake-logo.png",
          price: 11.95
        },
        {
          id: "fresh-strawberry",
          name: "Cheesecake Strawberry Wild & Cream",
          description: "Original cheesecake topped with glazed fresh strawberries for fruity indulgence.",
          image: "/images/menu/chees-cake/fresh-strawberry.jpg",
          price: 11.95
        },
        {
          id: "original-cheesecake",
          name: "Cheesecake Original",
          description: "Creamy cheesecake with graham cracker crust and sour cream topping.",
          image: "/images/menu/chees-cake/Cheesecake-original.jpg",
          price: 9.95
        }
      ]
    }
  ],

  oneslice: [
    {
      id: "signature-slices",
      title: "Signature Slices",
      items: [
        {
          id: "cheese-slice",
          name: "Cheese Slice",
          description: "Five melted cheeses, signature sauce, and a golden crust.",
          image: "/images/menu/one-more-slice/cheese-slice.jpg",
          price: 3.49,
          pizzaPrice: 15.49
        },
        {
          id: "pepperoni-slice",
          name: "Pepperoni Slice",
          description: "Crispy pepperoni layered over our delicious blend of five cheeses.",
          image: "/images/menu/one-more-slice/pepperoni-slice.jpg",
          price: 4.49,
          pizzaPrice: 20.99
        },
        {
          id: "pepperoni-slice-halal",
          name: "Pepperoni Slice (Halal)",
          description: "Crispy halal pepperoni layered over our blend of five cheeses.",
          image: "/images/menu/one-more-slice/pepperoni-slice.jpg",
          price: 4.49,
          pizzaPrice: 21.99
        },
        {
          id: "sausage-slice",
          name: "Sausage Slice",
          description: "Savory Italian sausage crumbles with rich sauce and melted cheese.",
          image: "/images/menu/one-more-slice/sausage-slice.jpg",
          price: 4.49,
          pizzaPrice: 20.99
        },
        {
          id: "sausage-slice-halal",
          name: "Sausage Slice (Halal)",
          description: "Halal Italian sausage crumbles with rich sauce and melted cheese.",
          image: "/images/menu/one-more-slice/sausage-slice.jpg",
          price: 4.49,
          pizzaPrice: 21.99
        },
        {
          id: "meat-lover-slice",
          name: "Meat Lover Slice",
          description: "Pepperoni, Italian sausage, smoky bacon, and five delicious melted cheeses.",
          image: "/images/menu/one-more-slice/meat-lover-slice.jpg",
          price: 5.49,
          pizzaPrice: 25.99
        },
        {
          id: "meat-lover-slice-halal",
          name: "Meat Lover Slice (Halal)",
          description: "Halal pepperoni, sausage, and smoky bacon over five melted cheeses.",
          image: "/images/menu/one-more-slice/meat-lover-slice.jpg",
          price: 5.49,
          pizzaPrice: 26.99
        },
        {
          id: "bbq-chicken-slice",
          name: "BBQ Chicken Slice",
          description: "Grilled chicken and red onions with sweet, smoky barbecue sauce.",
          image: "/images/menu/one-more-slice/bbq-chicken-slice.jpg",
          price: 4.49,
          pizzaPrice: 20.99
        },
        {
          id: "bbq-chicken-slice-halal",
          name: "BBQ Chicken Slice (Halal)",
          description: "Grilled halal chicken, red onions, and a sweet, smoky barbecue sauce.",
          image: "/images/menu/one-more-slice/bbq-chicken-slice.jpg",
          price: 5.49,
          pizzaPrice: 21.99
        },
        {
          id: "buffalo-ranch-slice",
          name: "Buffalo Ranch Slice",
          description: "Grilled chicken, spicy buffalo sauce, and a cool ranch drizzle.",
          image: "/images/menu/one-more-slice/buffalo-ranch-slice.jpg",
          price: 4.49,
          pizzaPrice: 20.99
        },
        {
          id: "buffalo-ranch-slice-halal",
          name: "Buffalo Ranch Slice (Halal)",
          description: "Grilled halal chicken, spicy buffalo sauce, and a cool ranch drizzle.",
          image: "/images/menu/one-more-slice/buffalo-ranch-slice.jpg",
          price: 5.49,
          pizzaPrice: 21.99
        },
        {
          id: "chicken-supreme-slice",
          name: "Chicken Supreme Slice",
          description: "Grilled chicken, mushrooms, bell peppers, red onions, and classic sauce.",
          image: "/images/menu/one-more-slice/chicken-supreme-slice.jpg",
          price: 3.33,
          pizzaPrice: 19.99
        },
        {
          id: "chicken-supreme-slice-halal",
          name: "Chicken Supreme Slice (Halal)",
          description: "Halal chicken, mushrooms, bell peppers, red onions, and classic sauce.",
          image: "/images/menu/one-more-slice/chicken-supreme-slice.jpg",
          price: 4.49,
          pizzaPrice: 20.99
        },
        {
          id: "veggie-slice",
          name: "Veggie Slice",
          description: "Colorful vegetables and melted cheese atop a delicious golden crust.",
          image: "/images/menu/one-more-slice/veggie-slice.jpg",
          price: 5.49,
          pizzaPrice: 21.99
        }
      ]
    },
    {
      id: "breakfast-slices",
      title: "Breakfast Slices",
      items: [
        {
          id: "egg-cheese-slice",
          name: "Egg & Cheese Slice",
          description: "Fluffy scrambled eggs, creamy cheddar sauce, and five melted cheeses.",
          image: "/images/menu/one-more-slice/egg&cheese-slice.jpg",
          price: 3.49,
          pizzaPrice: 14.99
        },
        {
          id: "egg-n-sausage-slice",
          name: "Egg N Sausage Slice",
          description: "Scrambled eggs and savory sausage crumbles over creamy cheddar sauce.",
          image: "/images/menu/one-more-slice/egg-sausage-slice.jpg",
          price: 3.99,
          pizzaPrice: 17.99
        },
        {
          id: "egg-n-sausage-slice-halal",
          name: "Egg N Sausage Slice (Halal)",
          description: "Scrambled eggs and halal sausage crumbles over creamy cheddar sauce.",
          image: "/images/menu/one-more-slice/egg-sausage-slice.jpg",
          price: 4.99,
          pizzaPrice: 17.99
        },
        {
          id: "egg-n-bacon-slice",
          name: "Egg N Bacon Slice",
          description: "Scrambled eggs and crispy bacon over creamy cheddar cheese sauce.",
          image: "/images/menu/one-more-slice/egg-bacon-slice.jpg",
          price: 4.49,
          pizzaPrice: 19.99
        },
        {
          id: "egg-n-bacon-slice-halal",
          name: "Egg N Bacon Slice (Halal)",
          description: "Scrambled eggs and crispy halal bacon over creamy cheddar sauce.",
          image: "/images/menu/one-more-slice/egg-bacon-slice.jpg",
          price: 4.49,
          pizzaPrice: 19.99
        }
      ]
    },
    {
      id: "sweet-slices",
      title: "Sweet Slices",
      items: [
        {
          id: "caramel-apple-slice",
          name: "Caramel Apple Slice",
          description: "Warm apple filling topped with cream cheese icing and caramel.",
          image: "/images/menu/one-more-slice/caramel-apple-slice.jpg",
          price: 3.49
        },
        {
          id: "churro-supreme-slice",
          name: "Churro Supreme Slice",
          description: "Caramelized cinnamon sugar crust with cream cheese icing and caramel.",
          image: "/images/menu/one-more-slice/churro-supreme-slice.jpg",
          price: 3.49
        },
        {
          id: "chocolate-bliss-slice",
          name: "Chocolate Bliss Slice",
          description: "Chocolate hazelnut spread, toasted marshmallows, chocolate chips, and powdered sugar.",
          image: "/images/menu/one-more-slice/chocolate-bliss-slice.jpg",
          price: 3.49
        }
      ]
    },
    {
      id: "snacks-and-sides",
      title: "Snacks & Sides",
      items: [
        {
          id: "cheesy-garlic-dippers",
          name: "Cheesy Garlic Dippers",
          description: "Twelve cheesy garlic dippers baked golden, served with dipping sauce.",
          image: "/images/menu/one-more-slice/cheesy-garlic-dippers.jpg",
          price: 3.99
        }
      ]
    }
  ],

  // Dog It Up content and portion prices follow the supplied eleven-item menu.
  dogitup: [
    {
      id: "signature-dogs",
      title: "Signature Dogs",
      items: [
        {
          id: "classic-american",
          name: "Classic American",
          description: "All beef hot dog topped with ketchup, mustard, and relish.",
          image: "/images/menu/dog-it-up/classic-american.jpg",
          price: 3.49
        },
        {
          id: "nashville-hot",
          name: "Nashville Hot",
          description: "Beef hot dog with Nashville hot sauce, cheddar, and pickles.",
          image: "/images/menu/dog-it-up/nashville-hot.jpg",
          price: 3.99
        },
        {
          id: "kansas-city-smokehouse",
          name: "Kansas City Smokehouse",
          description: "Beef hot dog with Nashville sauce, cheddar, bacon, and pickles.",
          image: "/images/menu/dog-it-up/kansas-city-smokehouse.jpg",
          price: 4.49
        },
        {
          id: "midwest-mac-daddy",
          name: "Midwest Mac Daddy",
          description: "Beef hot dog with mac and cheese, cheddar, and bacon.",
          image: "/images/menu/dog-it-up/midwest-mac-daddy.jpg",
          price: 4.99
        },
        {
          id: "texas-chili-cheese",
          name: "Texas Chili Cheese",
          description: "Beef hot dog with chili, cheddar sauce, and diced onions.",
          image: "/images/menu/dog-it-up/texas-chili-cheese.jpg",
          price: 4.49
        },
        {
          id: "chicago-dog",
          name: "Chicago Dog",
          description: "Mustard, onions, pickles, tomato, sweet relish, and spicy sport pepper.",
          image: "/images/menu/dog-it-up/chicago-dog.jpg",
          price: 4.49
        }
      ]
    },
    {
      id: "sides",
      title: "Sides",
      items: [
        {
          id: "crinkle-fries",
          name: "Crinkle Fries",
          description: "Golden crinkle fries with extra ridges and irresistible crispy crunch.",
          image: "/images/menu/dog-it-up/crinkle-fries.jpg",
          price: 1.99,
          sizeOptions: [
            {
              id: "regular",
              label: "Regular",
              price: 1.99
            },
            {
              id: "large",
              label: "Large",
              price: 2.99
            }
          ]
        },
        {
          id: "onion-rings",
          name: "Onion Rings",
          description: "Golden onion rings with a crispy coating and satisfying crunch.",
          image: "/images/menu/dog-it-up/onion-rings.jpg",
          price: 1.99,
          sizeOptions: [
            {
              id: "regular",
              label: "Regular",
              price: 1.99
            },
            {
              id: "large",
              label: "Large",
              price: 2.99
            }
          ]
        },
        {
          id: "mac-n-cheese",
          name: "Mac N Cheese",
          description: "Creamy macaroni and cheese for a rich, comforting side dish.",
          image: "/images/menu/dog-it-up/mac-n-cheese.jpg",
          price: 2.99,
          sizeOptions: [
            {
              id: "regular",
              label: "Regular",
              price: 2.99
            },
            {
              id: "large",
              label: "Large",
              price: 4.99
            }
          ]
        },
        {
          id: "frings",
          name: "Frings",
          description: "Crispy fries and golden onion rings together in one serving.",
          image: "/images/menu/dog-it-up/frings.jpg",
          price: 2.99
        },
        {
          id: "loaded-chili-cheese-fries",
          name: "Loaded Chili Cheese Fries",
          description: "Crispy fries with chili, cheddar sauce, bacon, and diced onions.",
          image: "/images/menu/dog-it-up/loaded-chili-cheese-fries.jpg",
          price: 4.99
        }
      ]
    }
  ],

  // Man vs Fries content and protein prices follow the supplied eleven-item menu.
  manvsfries: [
    {
      id: "loaded-fries",
      title: "Loaded Fries",
      items: [
        {
          id: "norcal-asada-fries",
          name: "NorCal Asada Fries",
          description: "Crispy fries topped with Chicken/Steak and savory toppings worth craving.",
          image: "/images/menu/menvsfries/asada-fries.jpg",
          price: 20.59,
          sizeOptions: [
            {
              id: "chicken",
              label: "Chicken",
              price: 20.59
            },
            {
              id: "steak",
              label: "Steak",
              price: 24.71
            }
          ]
        },
        {
          id: "socal-asada-fries",
          name: "SoCal Asada Fries",
          description: "Crispy fries loaded with Chicken/Steak and savory toppings worth craving.",
          image: "/images/menu/menvsfries/asada-fries.jpg",
          price: 21.62,
          sizeOptions: [
            {
              id: "chicken",
              label: "Chicken",
              price: 21.62
            },
            {
              id: "steak",
              label: "Steak",
              price: 25.74
            }
          ]
        },
        {
          id: "cbr-fries",
          name: "CBR Fries",
          description: "Crispy fries loaded with savory toppings for a satisfying crunch.",
          image: "/images/menu/menvsfries/manvsfries-logo.png",
          price: 22.65
        }
      ]
    },
    {
      id: "crunch-wraps",
      title: "Crunch Wraps",
      items: [
        {
          id: "cali-crunch",
          name: "Cali Crunch",
          description: "Chicken/Steak, fries, cheese, guacamole, sour cream, and Flamin’ Hot Cheetos.",
          image: "/images/menu/menvsfries/cali-crunch.jpg",
          price: 16.44,
          sizeOptions: [
            {
              id: "chicken",
              label: "Chicken",
              price: 16.44
            },
            {
              id: "steak",
              label: "Steak",
              price: 20.56
            }
          ]
        },
        {
          id: "flamin-cali-crunch",
          name: "Flamin' Cali Crunch",
          description: "Chicken/Steak, tostada, vegetables, cheese, guacamole, ranch, and Flamin’ Hot Cheetos.",
          image: "/images/menu/menvsfries/cali-crunch.jpg",
          price: 16.47,
          sizeOptions: [
            {
              id: "chicken",
              label: "Chicken",
              price: 16.47
            },
            {
              id: "steak",
              label: "Steak",
              price: 20.59
            }
          ]
        }
      ]
    },
    {
      id: "burritos",
      title: "Burritos",
      items: [
        {
          id: "norcal-burrito",
          name: "NorCal Burrito",
          description: "Chicken/Steak, fries, cheese, guacamole, sour cream, and Flamin’ Hot Cheetos.",
          image: "/images/menu/menvsfries/norcal-burrito.jpg",
          price: 20.59,
          sizeOptions: [
            {
              id: "chicken",
              label: "Chicken",
              price: 20.59
            },
            {
              id: "steak",
              label: "Steak",
              price: 24.71
            }
          ]
        },
        {
          id: "socal-burrito",
          name: "SoCal Burrito",
          description: "Chicken/Steak, fries, cheese, sour cream, guacamole, and savory secret sauce.",
          image: "/images/menu/menvsfries/socal-burrito.jpg",
          price: 21.62,
          sizeOptions: [
            {
              id: "chicken",
              label: "Chicken",
              price: 21.62
            },
            {
              id: "steak",
              label: "Steak",
              price: 25.74
            }
          ]
        },
        {
          id: "cowgirl-burrito",
          name: "Cowgirl Burrito",
          description: "Meat, fries, onion rings, bacon, cheese, and smoky BBQ sauce.",
          image: "/images/menu/menvsfries/cowgirl-burrito.jpg",
          price: 21.62,
          sizeOptions: [
            {
              id: "chicken",
              label: "Chicken",
              price: 21.62
            },
            {
              id: "steak",
              label: "Steak",
              price: 25.74
            }
          ]
        },
        {
          id: "cbr-burrito",
          name: "CBR Burrito",
          description: "Chicken, bacon, ranch, fries, cheese, and guacamole in flour tortilla.",
          image: "/images/menu/menvsfries/cbr-burrito.jpg",
          price: 21.62
        }
      ]
    },
    {
      id: "quesadillas",
      title: "Quesadillas",
      items: [
        {
          id: "hella-dilla",
          name: "Hella-Dilla",
          description: "Chicken quesadilla with cheese, fries, sour cream, guacamole, and ranch.",
          image: "/images/menu/menvsfries/hella-dilla.jpg",
          price: 17.49,
          sizeOptions: [
            {
              id: "chicken",
              label: "Chicken",
              price: 17.49
            },
            {
              id: "steak",
              label: "Steak",
              price: 21.61
            }
          ]
        }
      ]
    },
    {
      id: "desserts",
      title: "Desserts",
      items: [
        {
          id: "omg-cookies",
          name: "OMG Cookies",
          description: "Four battered Oreo cookies with powdered sugar and rich chocolate.",
          image: "/images/menu/menvsfries/omg-cookies.jpg",
          price: 8.23
        }
      ]
    }
  ],

};

const APPROVED_MENU_PRICES: Record<string, Record<string, number>> = {
  // Preserve the supplied menu prices, including its explicitly listed $0.00 buckets.
  "fry-chicks": {
    "fry-chicks-classic-breakfast-sandwich": 5.99,
    "fry-chicks-spicy-breakfast-sandwich": 5.99,
    "fry-chicks-sausage-breakfast-sandwich": 5.99,
    "fry-chicks-french-toast-bites": 4.49,
    "fry-chicks-hash-brown": 1.99,
    "fry-chicks-apple-juice": 1.99,
    "fry-chicks-chicken-nuggets-6-pieces": 4.49,
    "fry-chicks-chicken-nuggets-12-pieces": 5.99,
    "fry-chicks-chicken-wings-6-pieces": 8.99,
    "fry-chicks-chicken-wings-12-pieces": 17.49,
    "fry-chicks-chicken-wings-18-pieces": 24.99,
    "fry-chicks-1-tenders": 5.49,
    "fry-chicks-2-tenders": 6.99,
    "fry-chicks-3-tenders": 8.49,
    "fry-chicks-4-tenders": 6.99,
    "fry-chicks-5-tenders": 8.49,
    "fry-chicks-classic-chicken": 6.49,
    "fry-chicks-spicy-chicken": 6.49,
    "fry-chicks-chilli-chicken-crunch": 6.49,
    "fry-chicks-bbq-bacon": 7.99,
    "fry-chicks-chicken-bacon-ranch": 6.49,
    "fry-chicks-club-deluxe": 6.49,
    "fry-chicks-chili-chicken-crunch": 6.49,
    "fry-chicks-buffalo-ranch": 7.99,
    "fry-chicks-28-boneless": 1.99,
    "fry-chicks-28-bone-in": 2.79,
    "fry-chicks-42-boneless": 5.99,
    "fry-chicks-42-bone-in": 5.99,
    "fry-chicks-18-pc-tenders": 0,
    "fry-chicks-26-pc-tenders": 5.99,
    "fry-chicks-36-pc-nugget": 0
  },
  oneslice: {
    "cheese-slice": 3.49,
    "pepperoni-slice": 4.49,
    "pepperoni-slice-halal": 4.49,
    "sausage-slice": 4.49,
    "sausage-slice-halal": 4.49,
    "meat-lover-slice": 5.49,
    "meat-lover-slice-halal": 5.49,
    "bbq-chicken-slice": 4.49,
    "bbq-chicken-slice-halal": 5.49,
    "buffalo-ranch-slice": 4.49,
    "buffalo-ranch-slice-halal": 5.49,
    "chicken-supreme-slice": 3.33,
    "chicken-supreme-slice-halal": 4.49,
    "veggie-slice": 5.49,
    "egg-cheese-slice": 3.49,
    "egg-n-sausage-slice": 3.99,
    "egg-n-sausage-slice-halal": 4.99,
    "egg-n-bacon-slice": 4.49,
    "egg-n-bacon-slice-halal": 4.49,
    "caramel-apple-slice": 3.49,
    "churro-supreme-slice": 3.49,
    "chocolate-bliss-slice": 3.49,
    "cheesy-garlic-dippers": 3.99
  },
  mrbeast: {
    "beast-style-burger-combo": 9.99,
    "chicken-sandwich-combo": 10,
    "beast-style": 10,
    "chandler-style": 9.99,
    "nolan-style": 11.99,
    "karls-deluxe": 8.49,
    "karls-grilled-cheese": 8.49,
    "crispy-chicken-tender-sandwich": 8.49,
    "nashville-hot-chicken-tender-sandwich": 8.49,
    "crinkle-fries": 8.49,
    "signature-crinkle-fries": 8.49,
    "beast-style-fries": 8.49,
    "chocolate-chip-cookie": 10,
    "canned-soda": 10,
    "bottled-water": 10,
  },
  manvsfries: {
    "norcal-asada-fries": 20.59,
    "socal-asada-fries": 21.62,
    "cbr-fries": 22.65,
    "cali-crunch": 16.44,
    "flamin-cali-crunch": 16.47,
    "norcal-burrito": 20.59,
    "socal-burrito": 21.62,
    "cowgirl-burrito": 21.62,
    "cbr-burrito": 21.62,
    "hella-dilla": 17.49,
    "omg-cookies": 8.23
  },
  dogitup: {
    "classic-american": 3.49,
    "nashville-hot": 3.99,
    "kansas-city-smokehouse": 4.49,
    "midwest-mac-daddy": 4.99,
    "texas-chili-cheese": 4.49,
    "chicago-dog": 4.49,
    "crinkle-fries": 1.99,
    "onion-rings": 1.99,
    "mac-n-cheese": 2.99,
    frings: 2.99,
    "loaded-chili-cheese-fries": 4.99
  },
  cpk: {
    "the-original-bbq-chicken-pizza": 19.69,
    pepperoni: 19.69,
    mupesa: 20.69,
    "traditional-cheese": 18.69,
    "wild-mushroom": 20.19,
    margherita: 17.69,
    hawaiian: 20.69,
    "the-works": 20.69
  },
  cheesecake: {
    "godiva-chocolate-cheesecake": 11.95,
    "cheesecake-mousse-tuxedo": 11.95,
    "bananas-foster-cheesecake": 11.95,
    "fresh-strawberry": 11.95,
    "original-cheesecake": 9.95
  },
};

/** Client-provided prices, with $10 reserved for items explicitly lacking real pricing. */
export const brandMenus: Record<string, MenuSection[]> = Object.fromEntries(
  Object.entries(rawBrandMenus).map(([brandId, sections]) => [
    brandId,
    sections.map((section) => ({
      ...section,
      items: section.items.map((item) => ({
        ...item,
        price:
          APPROVED_MENU_PRICES[brandId]?.[item.id] ??
          (item.price && item.price > 0 ? item.price : 10),
      })),
    })),
  ]),
);
