"use client";

import { useState } from "react";
import { Rating as ReactRating, ThinStar } from "@smastrom/react-rating";

interface TratingProps {
  value: number;
  transition?: "none" | "zoom" | "colors" | "opacity" | "position";
  readonly?: boolean;
  size?:number;
};

const myStyles = {
  itemShapes: ThinStar,
  itemStrokeWidth: 1,
  activeFillColor: '#FFB400',
  activeStrokeColor: '#d89816',
  inactiveFillColor: '#f2f2f2',
  inactiveStrokeColor: '#d89816'
}

const Ratings = ({ value, transition, readonly, size = 100 }: TratingProps) => {

  const [rating, setRating] = useState(3.6);

  console.log(rating);

  return (
    <ReactRating
      style={{ maxWidth: size }}
      value={value}
      onChange={setRating}
      halfFillMode="svg"
      transition={transition}
      readOnly={readonly}
      itemStyles={myStyles}
    />
  );
};

export default Ratings;
