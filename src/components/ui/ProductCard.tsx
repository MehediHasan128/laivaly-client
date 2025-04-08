import { useState } from "react";
import product from "../../assets/images/product/product7.jpg";
import { IoMdHeart } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";

const ProductCard = () => {
  const [fav, setFav] = useState(false);

  return (
    <div className="rounded-xl overflow-hidden shadow p-1 duration-1000">
      {/* Product image */}
      <div className="relative">
        <img className="rounded-t-xl cursor-pointer" src={product} alt="" />
        <div
          onClick={() => setFav(!fav)}
          className={`absolute top-5 right-5 bg-[#436350] text-xl ${
            fav ? "text-red-600" : "text-white"
          } p-1 flex justify-center items-center size-8 rounded-full cursor-pointer`}
        >
          <IoMdHeart />
        </div>
        <div className="absolute top-5 left-5 bg-white border px-4 py-0.5 rounded-full text-[#436350]">
          <p>New Arrival</p>
        </div>
      </div>

      {/* Product details */}
      <div className="py-3 px-2 bg-white">
        <h1 className="">Shoes for men 1 pair</h1>

        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            $ 25.00{" "}
            <span className="text-gray-500 text-sm font-light line-through">
              $ 50.00
            </span>
          </h2>
          <p className="flex items-center gap-2 text-lg font-semibold">
            <FaStar className="text-yellow-600" />
            <span>4.8</span>{" "}
            <span className="text-sm text-gray-600">(220 reviews)</span>
          </p>
        </div>
      </div>

      {/* Add to cart button */}
      <div>
        <button className="relative overflow-hidden w-full py-2 text-[#436350] hover:text-white border border-[#436350] font-semibold rounded-xl group cursor-pointer">
          <span className="flex justify-center gap-2 relative z-10"><IoBagHandleOutline className="text-2xl" /> Add to Cart</span>
          <span className="absolute left-0 top-0 h-full w-0 bg-[#436350] transition-all duration-1000 ease-in-out group-hover:w-full"></span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
