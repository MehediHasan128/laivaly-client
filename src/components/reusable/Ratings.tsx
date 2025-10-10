"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Rating as ReactRating, ThinStar } from "@smastrom/react-rating";

interface TratingProps {
  value?: number | undefined;
  transition?: "none" | "zoom" | "colors" | "opacity" | "position";
  readonly?: boolean;
  size?:number;
  setRating?: Dispatch<SetStateAction<number>>
};

const myStyles = {
  itemShapes: ThinStar,
  itemStrokeWidth: 1,
  activeFillColor: '#FFB400',
  activeStrokeColor: '#d89816',
  inactiveFillColor: '#f2f2f2',
  inactiveStrokeColor: '#d89816'
}

const Ratings = ({ value, transition, readonly, size = 100, setRating }: TratingProps) => {

  return (
    <ReactRating
      style={{ maxWidth: size }}
      value={value as number}
      onChange={setRating}
      halfFillMode="svg"
      transition={transition}
      readOnly={readonly}
      itemStyles={myStyles}
    />
  );
};

export default Ratings;
