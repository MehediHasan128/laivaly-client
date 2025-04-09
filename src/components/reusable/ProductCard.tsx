import { useState } from "react";
import product from "../../assets/images/product/product4.jpg";
import { IoMdHeart } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { RiInformation2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const ProductCard = () => {
  const [fav, setFav] = useState(false);

  return (
    <div className="rounded-lg lg:rounded-xl overflow-hidden shadow p-1 bg-white duration-1000">
      {/* Product image */}
      <div className="relative overflow-hidden">
        <img
          className="rounded-t-lg lg:rounded-t-xl cursor-pointer hover:scale-125 duration-1000"
          src={product}
          alt=""
        />
        <div className="absolute top-1.5 md:top-3 w-full px-2 flex justify-between items-center">
          <div className="bg-white border px-3 lg:px-4 py-0.5 rounded-full text-[#436350] text-xs md:text-sm lg:text-base">
            <p>New Arrival</p>
          </div>
          <div
            onClick={() => setFav(!fav)}
            className={`bg-[#436350] text-xl ${
              fav ? "text-red-600" : "text-white"
            } p-1 flex justify-center items-center size-6 lg:size-8 rounded-full cursor-pointer`}
          >
            <IoMdHeart />
          </div>
        </div>
      </div>

      {/* Product details */}
      <div className="py-2 lg:py-3 px-0.5 lg:px-2 bg-white">
        <h1 className="font-bold">Shoes for men 1 pair</h1>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-2">
          <h2 className="text-base lg:text-lg font-bold">
            $ 25.00{" "}
            <span className="text-gray-500 text-sm font-medium line-through">
              $ 50.00
            </span>
          </h2>
          <p className="flex items-center gap-2 text-sm md:text-base lg:text-lg font-semibold">
            <FaStar className="text-yellow-600" />
            <span>4.8</span>{" "}
            <span className="text-xs md:text-sm text-gray-600 font-medium">
              (220 reviews)
            </span>
          </p>
        </div>
      </div>

      {/* Add to cart and details button */}
      <div className="flex flex-col lg:flex-row gap-2">

        {/* Details button */}
        <NavLink to={"/productDetails/1526"} className="relative overflow-hidden w-full py-1 lg:py-2 text-white lg:text-[#436350] bg-[#436350] lg:bg-transparent hover:text-white border border-[#436350] lg:font-bold rounded-lg lg:rounded-xl group cursor-pointer">
          <span className="flex justify-center gap-2 relative z-10 text-sm lg:taxt-base">
            <RiInformation2Line className="text-lg lg:text-2xl" /> Details
          </span>
          <span className="absolute right-0 top-0 h-full w-0 bg-[#436350] transition-all duration-1000 ease-in-out group-hover:w-full rounded-lg"></span>
        </NavLink>

        {/* Cart button */}
        <button className="relative overflow-hidden w-full py-1 lg:py-2 text-white lg:text-[#436350] bg-[#436350] lg:bg-transparent hover:text-white border border-[#436350] lg:font-bold rounded-lg lg:rounded-xl group cursor-pointer">
          <span className="flex justify-center gap-2 relative z-10 text-sm lg:taxt-base">
            <IoBagHandleOutline className="text-lg lg:text-2xl" /> Add to Cart
          </span>
          <span className="absolute left-0 top-0 h-full w-0 bg-[#436350] transition-all duration-1000 ease-in-out group-hover:w-full rounded-lg"></span>
        </button>
        
      </div>
    </div>
  );
};

export default ProductCard;
