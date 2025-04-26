import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { NavLink } from "react-router-dom";

const ProductCard = ({ data }) => {
  const [like, setLike] = useState(false);

  return (
    <>
      <div className="rounded-lg overflow-hidden duration-1000">
        {/* Product image */}
        <div className="relative overflow-hidden">
          <NavLink to={`/productDetails/${data?._id}`}>
            <div className="relative group">
              <img
                className="rounded-t-lg lg:rounded-t-xl cursor-pointer transition-all duration-100"
                src={data?.thumbnail}
                alt=""
              />
              <img
                className="rounded-t-lg lg:rounded-t-xl cursor-pointer transition-all duration-1000 absolute top-0 left-0 w-full h-full opacity-0 group-hover:scale-105 group-hover:opacity-100"
                src={data?.images[1]}
                alt=""
              />
            </div>
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
        <NavLink to={`/productDetails/${data?._id}`}>
          <div className="py-2 lg:py-3 px-2">
            <h1 className="text-base font-medium">{data?.title}</h1>

            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center text-gray-600">
              <h2 className="text-base font-medium">$ {data?.price}</h2>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default ProductCard;
