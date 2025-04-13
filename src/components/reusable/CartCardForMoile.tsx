import { FiMinus, FiPlus } from "react-icons/fi";
import product from "../../assets/images/product/product4.jpg";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const CartCardForMoile = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="border-b border-gray-300 py-3 flex items-center gap-3">
      <Checkbox id="remember" />

      <div className="w-[30%]">
        <div className="flex items-center gap-2">
          <img src={product} alt="" />
        </div>
      </div>

      <div className="w-[70%]">
        <div className="flex justify-between items-center">
          <div className="space-y-1.5">
            <div>
              <h1 className="text-sm font-semibold">Royal Perfume 25ml</h1>
              <p className="text-xs font-medium text-gray-600">Perfume</p>
            </div>
            <div className="flex items-center md:gap-1.5 lg:gap-3">
              <span
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="bg-gray-200 font-semibold p-1 rounded active:scale-95 transition transform duration-100 cursor-pointer text-sm lg:text-base"
              >
                <FiMinus />
              </span>
              <span className="w-16 text-center text-base font-semibold">
                {quantity}
              </span>
              <span
                onClick={() => setQuantity(quantity + 1)}
                className="bg-gray-200 font-semibold p-1 rounded active:scale-95 transition transform duration-100 cursor-pointer text-sm lg:text-base"
              >
                <FiPlus />
              </span>
            </div>
            <h1 className="text-lg font-bold">$25.00</h1>
          </div>

          <div className="text-lg lg:text-2xl bg-gray-200 h-fit p-2 rounded-full active:scale-95 transition transform duration-100 cursor-pointer mr-2">
            <RxCross2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCardForMoile;
