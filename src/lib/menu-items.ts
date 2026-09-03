export interface MenuItem {
  id: string;
  name: string;
  description: string;
}

export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
}

export const brandMenus: Record<string, MenuSection[]> = {
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
        },
        {
          id: "chicken-sandwich-combo",
          name: "Chicken Sandwich Combo",
          description:
            "A crispy chicken tender sandwich or Nashville hot chicken tender sandwich with your choice of crinkle fries, Beast Style fries and a drink.",
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
        },
        {
          id: "chandler-style",
          name: "Chandler Style",
          description:
            "Two smashed crispy beef patties with house seasoning, served with American cheese on a toasted bun.",
        },
        {
          id: "nolan-style",
          name: "Nolan Style",
          description:
            "Two smashed crispy beef patties with house seasoning, American cheese, bacon, topped with crinkle fries on a toasted bun.",
        },
        {
          id: "karls-deluxe",
          name: "Karl's Deluxe",
          description:
            "A patty melt styled Karl's style with a crispy seasoned beef patty, caramelized onions and cheese on a toasted inverted bun.",
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
        },
        {
          id: "crispy-chicken-tender-sandwich",
          name: "Crispy Chicken Tender Sandwich",
          description: "With mayo, shredded lettuce and pickles on a toasted bun.",
        },
        {
          id: "nashville-hot-chicken-tender-sandwich",
          name: "Nashville Hot Chicken Tender Sandwich",
          description:
            "Two smashed crispy beef patties with house seasoning, American cheese, bacon, topped with crinkle fries on a toasted bun.",
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
        },
        {
          id: "signature-crinkle-fries",
          name: "Signature Crinkle Fries",
          description: "Crinkle fries seasoned with spicy red pepper, garlic, paprika, sugar and a hint of lime.",
        },
        {
          id: "beast-style-fries",
          name: "Beast Style Fries",
          description:
            "Seasoned crinkle fries loaded with caramelized onions, American cheese, pickles, mayo, ketchup and mustard.",
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
        },
      ],
    },
    {
      id: "beverages",
      title: "Beverages",
      items: [
        { id: "canned-soda", name: "Canned Soda", description: "Ice-cold canned soda of your choice." },
        { id: "bottled-water", name: "Bottled Water", description: "Chilled bottled water." },
      ],
    },
  ],

  cpk: [
    {
      id: "combos",
      title: "Combos",
      items: [
        {
          id: "personal-pizza-combo",
          name: "Personal Pizza Combo",
          description: "Any personal-size signature pizza served with a side salad and a drink.",
        },
      ],
    },
    {
      id: "signature-pizzas",
      title: "Signature Pizzas",
      items: [
        { id: "bbq-chicken-pizza", name: "BBQ Chicken Pizza", description: "Grilled chicken, smoked gouda, cilantro and BBQ sauce." },
        { id: "margherita-pizza", name: "Margherita Pizza", description: "Fresh mozzarella, vine-ripened tomatoes and basil." },
        { id: "spicy-jalapeno-pizza", name: "Spicy Jalapeño Pizza", description: "Mozzarella, red onion and fresh jalapeños." },
        { id: "pepperoni-pizza", name: "Pepperoni Pizza", description: "Classic mozzarella and double pepperoni." },
      ],
    },
    {
      id: "sides",
      title: "Sides",
      items: [
        { id: "garlic-bread", name: "Garlic Bread", description: "Toasted flatbread with garlic butter and herbs." },
        { id: "side-salad", name: "Side Salad", description: "Mixed greens with house vinaigrette." },
      ],
    },
    {
      id: "desserts",
      title: "Desserts",
      items: [{ id: "cheesecake-slice", name: "Cheesecake Slice", description: "A classic New York style cheesecake slice." }],
    },
    {
      id: "beverages",
      title: "Beverages",
      items: [
        { id: "canned-soda", name: "Canned Soda", description: "Ice-cold canned soda of your choice." },
        { id: "bottled-water", name: "Bottled Water", description: "Chilled bottled water." },
      ],
    },
  ],

  cheesecake: [
    {
      id: "cheesecakes",
      title: "Cheesecakes",
      items: [
        { id: "original-cheesecake", name: "Original Cheesecake", description: "The classic creamy New York style cheesecake." },
        { id: "strawberry-cheesecake", name: "Strawberry Cheesecake", description: "Topped with fresh strawberries and glaze." },
        { id: "chocolate-mousse-cheesecake", name: "Chocolate Mousse Cheesecake", description: "Layers of chocolate mousse and cheesecake." },
      ],
    },
    {
      id: "bakery",
      title: "Bakery",
      items: [
        { id: "carrot-cake-slice", name: "Carrot Cake Slice", description: "Spiced carrot cake with cream cheese frosting." },
        { id: "brownie", name: "Fudge Brownie", description: "Rich chocolate fudge brownie." },
      ],
    },
    {
      id: "beverages",
      title: "Beverages",
      items: [
        { id: "coffee", name: "Coffee", description: "Freshly brewed coffee." },
        { id: "bottled-water", name: "Bottled Water", description: "Chilled bottled water." },
      ],
    },
  ],

  chickchick: [
    {
      id: "combos",
      title: "Combos",
      items: [
        {
          id: "chick-chick-combo",
          name: "Chick Chick Combo",
          description: "Crispy chicken sandwich with seasoned fries and a drink.",
        },
      ],
    },
    {
      id: "chicken-sandwiches",
      title: "Chicken Sandwiches",
      items: [
        { id: "classic-crispy-sandwich", name: "Classic Crispy Sandwich", description: "Crispy chicken breast, pickles and mayo on a toasted bun." },
        { id: "spicy-chick-sandwich", name: "Spicy Chick Sandwich", description: "Crispy chicken breast tossed in spicy sauce with slaw." },
      ],
    },
    {
      id: "chicken",
      title: "Chicken",
      items: [
        { id: "chicken-wings", name: "Chicken Wings", description: "Crispy fried wings tossed in your choice of sauce." },
        { id: "chicken-tenders", name: "Chicken Tenders", description: "Hand-breaded crispy chicken tenders." },
      ],
    },
    {
      id: "sides",
      title: "Sides",
      items: [{ id: "seasoned-fries", name: "Seasoned Fries", description: "Crinkle fries with signature seasoning." }],
    },
    {
      id: "beverages",
      title: "Beverages",
      items: [
        { id: "canned-soda", name: "Canned Soda", description: "Ice-cold canned soda of your choice." },
        { id: "bottled-water", name: "Bottled Water", description: "Chilled bottled water." },
      ],
    },
  ],

  oneslice: [
    {
      id: "combos",
      title: "Combos",
      items: [
        { id: "slice-and-drink-combo", name: "Slice & Drink Combo", description: "One giant pepperoni slice with a fountain drink." },
      ],
    },
    {
      id: "pizza-by-the-slice",
      title: "Pizza by the Slice",
      items: [
        { id: "pepperoni-slice", name: "Pepperoni Slice", description: "New York style giant slice loaded with pepperoni." },
        { id: "cheese-slice", name: "Cheese Slice", description: "Classic mozzarella cheese slice." },
        { id: "veggie-slice", name: "Veggie Slice", description: "Bell peppers, onions, mushrooms and olives." },
      ],
    },
    {
      id: "whole-pizzas",
      title: "Whole Pizzas",
      items: [{ id: "one-more-pepperoni-pie", name: "One More Pepperoni Pie", description: "A full pie loaded with pepperoni and mozzarella." }],
    },
    {
      id: "sides",
      title: "Sides",
      items: [{ id: "garlic-knots", name: "Garlic Knots", description: "Warm garlic knots with marinara dip." }],
    },
    {
      id: "beverages",
      title: "Beverages",
      items: [
        { id: "canned-soda", name: "Canned Soda", description: "Ice-cold canned soda of your choice." },
        { id: "bottled-water", name: "Bottled Water", description: "Chilled bottled water." },
      ],
    },
  ],

  dogitup: [
    {
      id: "combos",
      title: "Combos",
      items: [
        { id: "classic-dog-combo", name: "Classic Dog Combo", description: "Classic hot dog with fries and a drink." },
      ],
    },
    {
      id: "hot-dogs",
      title: "Hot Dogs",
      items: [
        { id: "classic-dog", name: "Classic Dog", description: "All-beef hot dog with mustard, ketchup and onions." },
        { id: "chili-cheese-dog", name: "Chili Cheese Dog", description: "All-beef hot dog loaded with chili and melted cheese." },
        { id: "loaded-dog", name: "Loaded Dog", description: "All-beef hot dog with relish, onions and jalapeños." },
      ],
    },
    {
      id: "sides",
      title: "Sides",
      items: [
        { id: "crinkle-fries", name: "Crinkle Fries", description: "Crinkle fries lightly seasoned with salt." },
        { id: "onion-rings", name: "Onion Rings", description: "Crispy battered onion rings." },
      ],
    },
    {
      id: "beverages",
      title: "Beverages",
      items: [
        { id: "canned-soda", name: "Canned Soda", description: "Ice-cold canned soda of your choice." },
        { id: "bottled-water", name: "Bottled Water", description: "Chilled bottled water." },
      ],
    },
  ],

  empanadas: [
    {
      id: "combos",
      title: "Combos",
      items: [
        { id: "empanada-duo-combo", name: "Empanada Duo Combo", description: "Two empanadas of your choice with a drink." },
      ],
    },
    {
      id: "empanadas",
      title: "Empanadas",
      items: [
        { id: "beef-empanada", name: "Beef Empanada", description: "Seasoned ground beef folded in a golden, flaky crust." },
        { id: "chicken-empanada", name: "Chicken Empanada", description: "Shredded chicken with peppers and onions in a flaky crust." },
        { id: "cheese-empanada", name: "Cheese Empanada", description: "Melted mozzarella and cheddar in a flaky crust." },
      ],
    },
    {
      id: "mexican",
      title: "Mexican",
      items: [{ id: "street-tacos", name: "Street Tacos", description: "Corn tortillas with seasoned meat, onion and cilantro." }],
    },
    {
      id: "sides",
      title: "Sides",
      items: [{ id: "chimichurri-rice", name: "Chimichurri Rice", description: "Rice tossed with fresh chimichurri sauce." }],
    },
    {
      id: "beverages",
      title: "Beverages",
      items: [
        { id: "canned-soda", name: "Canned Soda", description: "Ice-cold canned soda of your choice." },
        { id: "bottled-water", name: "Bottled Water", description: "Chilled bottled water." },
      ],
    },
  ],

  manvsfries: [
    {
      id: "combos",
      title: "Combos",
      items: [
        { id: "loaded-fries-combo", name: "Loaded Fries Combo", description: "A loaded fries basket with a drink." },
      ],
    },
    {
      id: "burgers",
      title: "Burgers",
      items: [{ id: "man-vs-burger", name: "Man vs Burger", description: "A stacked smash burger with all the fixings." }],
    },
    {
      id: "loaded-fries",
      title: "Loaded Fries",
      items: [
        { id: "loaded-cheese-fries", name: "Loaded Cheese Fries", description: "Crispy fries loaded with melted cheese and toppings." },
        { id: "loaded-guac-fries", name: "Loaded Guac Fries", description: "Crispy fries loaded with beef, guacamole and salsa." },
      ],
    },
    {
      id: "sides",
      title: "Sides",
      items: [{ id: "classic-fries", name: "Classic Fries", description: "Golden crispy classic fries." }],
    },
    {
      id: "beverages",
      title: "Beverages",
      items: [
        { id: "canned-soda", name: "Canned Soda", description: "Ice-cold canned soda of your choice." },
        { id: "bottled-water", name: "Bottled Water", description: "Chilled bottled water." },
      ],
    },
  ],

  chickaroo: [
    {
      id: "combos",
      title: "Combos",
      items: [
        { id: "chickaroo-combo", name: "Chickaroo Combo", description: "Crispy chicken sandwich with fries, nuggets and a drink." },
      ],
    },
    {
      id: "chicken-sandwiches",
      title: "Chicken Sandwiches",
      items: [{ id: "chickaroo-sandwich", name: "Chickaroo Sandwich", description: "Crispy chicken breast with lettuce, tomato and mayo on a brioche bun." }],
    },
    {
      id: "chicken",
      title: "Chicken",
      items: [
        { id: "chicken-nuggets", name: "Chicken Nuggets", description: "Bite-sized crispy chicken nuggets." },
        { id: "chicken-tenders", name: "Chicken Tenders", description: "Hand-breaded crispy chicken tenders." },
      ],
    },
    {
      id: "sides",
      title: "Sides",
      items: [
        { id: "crinkle-fries", name: "Crinkle Fries", description: "Crinkle fries lightly seasoned with salt." },
        { id: "coleslaw", name: "Coleslaw", description: "Creamy house-made coleslaw." },
      ],
    },
    {
      id: "beverages",
      title: "Beverages",
      items: [
        { id: "canned-soda", name: "Canned Soda", description: "Ice-cold canned soda of your choice." },
        { id: "bottled-water", name: "Bottled Water", description: "Chilled bottled water." },
      ],
    },
  ],

  sweetwaves: [
    {
      id: "combos",
      title: "Combos",
      items: [
        { id: "breakfast-combo", name: "Breakfast Combo", description: "Breakfast sandwich with a milkshake." },
      ],
    },
    {
      id: "breakfast",
      title: "Breakfast",
      items: [
        { id: "bacon-egg-cheese-sandwich", name: "Bacon, Egg & Cheese Sandwich", description: "Crispy bacon, egg and cheese on a toasted brioche bun." },
        { id: "glazed-donut", name: "Glazed Donut", description: "Soft glazed donut with a sweet drizzle." },
      ],
    },
    {
      id: "desserts",
      title: "Desserts",
      items: [
        { id: "milkshake", name: "Milkshake", description: "Creamy milkshake topped with whipped cream and cookie crumble." },
        { id: "soft-serve", name: "Soft Serve", description: "Classic soft serve ice cream." },
      ],
    },
    {
      id: "beverages",
      title: "Beverages",
      items: [
        { id: "iced-coffee", name: "Iced Coffee", description: "Chilled coffee over ice." },
        { id: "bottled-water", name: "Bottled Water", description: "Chilled bottled water." },
      ],
    },
  ],
};
