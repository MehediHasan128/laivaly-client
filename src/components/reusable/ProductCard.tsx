import { useState } from "react";
import product from "../../assets/images/product/product4.jpg";
import { IoMdHeartEmpty } from "react-icons/io";
import { NavLink } from "react-router-dom";

const ProductCard = () => {
  const [like, setLike] = useState(false);

  return (
    <>
      <div className="rounded-lg overflow-hidden duration-1000">
        {/* Product image */}
        <div className="relative overflow-hidden">
          <NavLink to={"/productDetails/1526"}>
            <img
              className="rounded-t-lg lg:rounded-t-xl cursor-pointer hover:scale-110 duration-1000"
              src={product}
              alt=""
            />
          </NavLink>
          <div className="absolute top-1.5 md:top-3 w-full flex justify-between items-center px-2 lg:p-2">
            <div className="bg-white border px-2 rounded-full text-[#436350] text-xs">
              <p>New Arrival</p>
            </div>

            <div className="text-sm lg:text-xl">
              <IoMdHeartEmpty
              onClick={() => setLike(!like)}
                className={`${
                  like ? "text-red-500" : "text-black"
                } text-2xl transition duration-300 cursor-pointer`}
              />
            </div>
          </div>
        </div>

        {/* Product details */}
        <NavLink to={"/productDetails/1526"}>
          <div className="py-2 lg:py-3 px-2">
            <h1 className="text-base font-medium">Shoes for men 1 pair</h1>

            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center text-gray-600">
              <h2 className="text-base font-medium">
                $ 25.00 
              </h2>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default ProductCard;
