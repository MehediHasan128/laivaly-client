import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "../ui/table";
import { Checkbox } from "../ui/checkbox";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { TCartProduct } from "@/types";

const CartCard = ({product}: {product: TCartProduct}) => {

  const [quantity, setQuantity] = useState(1)

  return (
    <>
      <Table className="font-medium">
        <TableBody>
          <TableRow>
            <TableCell className="text-center w-[20%]">
              <div className="flex items-center gap-2.5 w-[40%]">
                <Checkbox id="terms" />
                <img className="rounded-md" src={product?.productId.thumbnail} alt="" />
              </div>
            </TableCell>
            <TableCell className="text-center w-[20%]">
              <div className="text-start font-medium">
                <h1 className="text-base">{product?.productId.title}</h1>
                <p className="text-gray-600">{product?.productId.SKU}</p>
                <p className="text-gray-600">{product?.productId.category}</p>
              </div>
            </TableCell>
            <TableCell className="text-center w-[20%]">
              <div className="flex justify-center items-center">
                <button disabled={quantity === 0} onClick={() => setQuantity(quantity-1)} className="bg-gray-300 w-fit p-1 rounded hover:bg-gray-400 active:scale-90 transition transform duration-400 cursor-pointer"><FaMinus /></button>
                <span className="w-20 text-xl font-semibold">{product?.quantity}</span>
                <button onClick={() => setQuantity(quantity+1)} className="bg-gray-300 w-fit p-1 rounded hover:bg-gray-400 active:scale-90 transition transform duration-400 cursor-pointer"><FaPlus /></button>
              </div>
            </TableCell>
            <TableCell className="text-center w-[20%]">
              <h1 className="text-xl font-bold">${(product?.productId.price)*(product?.quantity)}</h1>
            </TableCell>
            <TableCell className="text-center w-[20%]">
              <div className="w-fit mx-auto bg-gray-200 p-2 text-2xl rounded-full text-red-600 active:scale-90 transition transform duration-500 cursor-pointer">
              <MdOutlineDelete />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default CartCard;

// F8407189r**
