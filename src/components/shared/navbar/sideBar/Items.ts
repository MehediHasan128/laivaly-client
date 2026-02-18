export type TNavItemsChildren = {
  id: string;
  label: string;
  type: "mega-menu" | "link";
  items: { label: string; href: string }[];
}[];

export type TNavItems = {
  id: string;
  label: string;
  type: "mega-menu" | "link";
  img?: string;
  children?: TNavItemsChildren;
}[];

export const navItems: TNavItems = [
  {
    id: "men",
    label: "Men",
    type: "mega-menu",
    img: "https://res.cloudinary.com/dpcrmxq9c/image/upload/v1771332227/men_risny3.jpg",
    children: [
      {
        id: "men-clothing",
        label: "Ready to Wear",
        type: "mega-menu",
        items: [
          {
            label: "All Ready to Wear",
            href: "productFor=men",
          },
          {
            label: "T-shirts and Polos",
            href: "productFor=men&category=tops&subCategory=t-shirts&subCategory=polos",
          },
          {
            label: "Outerwear and Coats",
            href: "productFor=men&category=outerwear&subCategory=coats",
          },
          {
            label: "Shirts",
            href: "productFor=men&category=tops&subCategory=shirts",
          },
          {
            label: "Pants",
            href: "productFor=men&category=bottoms",
          },
        ],
      },
    ],
  },
  {
    id: "women",
    label: "Women",
    type: "mega-menu",
    img: "https://res.cloudinary.com/dpcrmxq9c/image/upload/v1771419826/female_mbrz09.jpg",
    children: [
      {
        id: "women-clothing",
        label: "Ready to Wear",
        type: "mega-menu",
        items: [
          {
            label: "All Ready to Wear",
            href: "productFor=women",
          },
          {
            label: "Tops",
            href: "productFor=women&category=tops",
          },
          {
            label: "Coats and Jackets",
            href: "productFor=women&category=outerwear&subCategory=coats",
          },
          {
            label: "Skirts and Shorts",
            href: "productFor=women&category=bottoms&subCategory=skirts&subCategory=shorts",
          },
          {
            label: "Pants",
            href: "productFor=men&category=bottoms",
          },
        ],
      },
    ],
  },
];
