import { TProductData } from "@/types";

const ArrivalCard = ({ data }: { data: TProductData }) => {

  return (
    <div>
      {/* Card image */}
      <div className="overflow-hidden rounded-lg md:rounded-xl shadow cursor-pointer">
        <img
          className="hover:scale-110 duration-700"
          src={data.thumbnail}
          alt=""
        />
      </div>

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
