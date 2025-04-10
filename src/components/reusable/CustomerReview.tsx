import { Rate } from "antd";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SlLike, SlDislike } from "react-icons/sl";

const CustomerReview = () => {
  return (
    <div className="py-6 md:py-8 border-b border-gray-300">
      <div className="flex items-center gap-2">
        <Avatar className="size-10 md:size-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-sm md:text-base font-bold">Mehedi Hasan</h1>
          <div>
            <Rate
              disabled
              allowHalf
              defaultValue={5}
              style={{ color: "#FFA534", fontSize: "16px" }}
            />
          </div>
        </div>
      </div>

      <div className="my-3 md:my-5 text-justify">
        <p className="font-medium text-gray-700 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed numquam
          exercitationem ipsam doloremque dolorum sunt tempora. Cum magnam id
          minima repellendus ipsa at voluptatum? Atque iure rerum exercitationem
          id minus!
        </p>
      </div>
      
      <div className="flex gap-5">
        <p className="font-medium text-[#016d2e] cursor-pointer">Reply</p>
        <div className="flex gap-1 items-center font-bold text-gray-600">
          <button className="cursor-pointer"><SlLike /></button>
          <p>20</p>
        </div>
        <div className="flex gap-1 items-center font-bold text-gray-600">
          <button className="cursor-pointer"><SlDislike /></button>
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
