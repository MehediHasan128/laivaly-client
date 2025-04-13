import { FiMinus, FiPlus } from "react-icons/fi";
import product from "../../assets/images/product/product4.jpg";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";

const CartCard = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="border-b border-gray-300 py-3 flex justify-between items-center select-none">
      <div className="w-20 lg:w-42 flex items-center gap-0.5 md:gap-1.5 lg:gap-2.5">
        <Checkbox id="remember" />
        <img src={product} alt="" />
      </div>
      <div>
        <h1 className="text-base lg:text-xl font-semibold">
          Royal Perfume 25ml
        </h1>
        <p className="text-sm lg:text-lg font-medium text-gray-600">Perfume</p>
      </div>
      <div className="flex items-center md:gap-1.5 lg:gap-3">
        <span
          onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          className="bg-gray-200 font-semibold md:p-0.5 lg:p-1 rounded active:scale-95 transition transform duration-100 cursor-pointer text-sm lg:text-base"
        >
          <FiMinus />
        </span>
        <span className="w-16 text-center text-base lg:text-xl font-semibold">
          {quantity}
        </span>
        <span
          onClick={() => setQuantity(quantity + 1)}
          className="bg-gray-200 font-semibold md:p-0.5 lg:p-1 rounded active:scale-95 transition transform duration-100 cursor-pointer text-sm lg:text-base"
        >
          <FiPlus />
        </span>
      </div>
      <div>
        <h1 className="text-lg lg:text-2xl font-bold">$25.00</h1>
      </div>
      <div className="text-lg lg:text-2xl bg-gray-200 p-2 rounded-full active:scale-95 transition transform duration-100 cursor-pointer">
        <RxCross2 />
      </div>
    </div>
  );
};

export default CartCard;

// F8407189r**
