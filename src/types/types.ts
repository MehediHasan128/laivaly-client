export interface TProduct {
  _id: string;
  title: string;
  thumbnail: string;
  images: string[];
  price: number;
}

export interface TCardProductProps {
  id: number;
  url: string;
  title: string;
  price: number;
  isLarge: boolean;
}

export interface GridItem {
  id: number;
  url: string;
  title: string;
  price: number;
  isLarge: boolean;
  row: number;
  colStart: number;
  colSpan: number;
}
