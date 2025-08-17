"use client";

import { useState } from "react";
import { Rating as ReactRating, ThinStar } from "@smastrom/react-rating";

interface TratingProps {
  value: number;
  transition?: "none" | "zoom" | "colors" | "opacity" | "position";
  readonly?: boolean;
};

const myStyles = {
  itemShapes: ThinStar,
  itemStrokeWidth: 1,
  activeFillColor: '#FFB400',
  activeStrokeColor: '#d89816',
  inactiveFillColor: '#fce2a7',
  inactiveStrokeColor: '#d89816'
}

const Ratings = ({ value, transition, readonly }: TratingProps) => {
  const [rating, setRating] = useState(3.6);

  return (
    <ReactRating
      style={{ maxWidth: 100 }}
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
