import { TProductData } from "@/types";
import { NavLink } from "react-router-dom";

const ArrivalCard = ({ data }: { data: TProductData }) => {
  return (
    <div>
      {/* Card image */}
      <NavLink to={`/productDetails/${data?._id}`}>
        <div className="relative group">
        <img
          className="rounded-t-lg lg:rounded-t-xl cursor-pointer transition-all duration-1000 group-hover:-translate-y-3"
          src={data.thumbnail}
          alt=""
        />
        <img
          className="rounded-t-lg lg:rounded-t-xl cursor-pointer transition-all duration-1000 absolute top-0 left-0 w-full h-full opacity-0 group-hover:-translate-y-3 group-hover:opacity-100"
          src={data.images[1]}
          alt=""
        />
      </div>
      </NavLink>

      {/* Card title */}
      <div className="py-2 lg:p-2 flex justify-between items-center font-medium">
        <div>
          <h2 className="text-xs lg:text-base">{data.title}</h2>
          <h1 className="text-sm lg:text-lg">$ {data.price}</h1>
        </div>
      </div>
    </div>
  );
};

export default ArrivalCard;
