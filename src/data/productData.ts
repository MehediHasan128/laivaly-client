interface DataType {
    [key: string]: {label: string; value: string}[]
}

export const seasonOptions = [
  { label: "All Season", value: "all-season" },
  { label: "Summer", value: "summer" },
  { label: "Winter", value: "winter" },
];
export const productForOptions = [
  { label: "Men", value: "men" },
  { label: "Women", value: "women" },
  { label: "Kids", value: "kids" },
];

export const productGroupOtions = [
  { label: "Cloth", value: "cloth" },
  { label: "Accessories", value: "accessories" },
  { label: "Footwear", value: "footwear" },
  { label: "Fragrance", value: "fragrance" },
];

export const Category: DataType = {
  cloth: [
    { label: "Tops", value: "tops" },
    { label: "Bottoms", value: "bottoms" },
    { label: "Outerwear", value: "outerwear" },
  ],
  accessories: [
    { label: "Bags", value: "bags" },
  ],
  footwear: [
    { label: "Sneakers", value: "sneakers" },
    { label: "Boots", value: "boots" },
    { label: "Heels", value: "heels" },
    { label: "Sandals", value: "sandals" },
    { label: "Flats", value: "flats" },
    { label: "Slippers", value: "slippers" },
  ],
  fragrance: [
    { label: "Perfume", value: "perfume" },
  ],
};

export const subCategory: DataType = {
   tops: [
    { label: "Graphic T-Shirts", value: "Graphic T-Shirts" },
    { label: "Plain T-Shirts", value: "Plain T-Shirts" },
    { label: "Oversized T-Shirts", value: "Oversized T-Shirts" },
    { label: "Slim fit T-Shirts", value: "Slim fit T-Shirts" },
    { label: "Polo T-Shirts", value: "Polo T-Shirts" },
    { label: "Long sleeve T-Shirts", value: "Long sleeve T-Shirts" },
    { label: "Short sleeve T-Shirts", value: "Short sleeve T-Shirts" }
  ],

  bottoms: [
    { label: "Jeans", value: "Jeans" },
    { label: "Trousers", value: "Trousers" },
    { label: "Chinos", value: "Chinos" },
    { label: "Cargo Pants", value: "Cargo Pants" },
    { label: "Joggers", value: "Joggers" },
    { label: "Sweatpants", value: "Sweatpants" },
    { label: "Formal Pants", value: "Formal Pants" }
  ],

  outerwear: [
    { label: "Jacket", value: "Jacket" },
    { label: "Coat", value: "Coat" },
    { label: "Hoodie", value: "Hoodie" },
    { label: "Blazer", value: "Blazer" },
    { label: "Cardigan", value: "Cardigan" }
  ],

  bags: [
    { label: "Backpack", value: "Backpack" },
    { label: "Wallet", value: "Wallet" },
    { label: "Handbag", value: "Handbag" }
  ],

  sneakers: [
    { label: "Running Sneakers", value: "Running Sneakers" },
    { label: "Casual Sneakers", value: "Casual Sneakers" },
    { label: "High-top Sneakers", value: "High-top Sneakers" }
  ],

  boots: [
    { label: "Ankle Boots", value: "Ankle Boots" },
    { label: "Chelsea Boots", value: "Chelsea Boots" },
    { label: "Knee-high Boots", value: "Knee-high Boots" }
  ],

  heels: [], // আপনি পরে চাইলে add করতে পারবেন

  sandals: [
    { label: "Flat Sandals", value: "Flat Sandals" },
    { label: "Slide Sandals", value: "Slide Sandals" },
    { label: "Sport Sandals", value: "Sport Sandals" },
    { label: "Wedge Sandals", value: "Wedge Sandals" },
    { label: "Gladiator Sandals", value: "Gladiator Sandals" },
    { label: "Heeled Sandals", value: "Heeled Sandals" }
  ],

  flats: [], // future expansion

  slippers: [
    { label: "Indoor Slippers", value: "Indoor Slippers" },
    { label: "Outdoor Slippers", value: "Outdoor Slippers" },
    { label: "Slide Slippers", value: "Slide Slippers" },
    { label: "Flip Flops", value: "Flip Flops" }
  ],

  perfume: [
    { label: "Eau de parfum", value: "Eau de parfum" },
    { label: "Eau de toilette", value: "Eau de toilette" },
    { label: "Body Mists", value: "Body Mists" },
    { label: "Roll-ons", value: "Roll-ons" }
  ]
};