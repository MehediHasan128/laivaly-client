import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "../ui/table";
import { Checkbox } from "../ui/checkbox";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";
import { TCartProduct } from "@/types";
import { useUpdateProductQuantityMutation } from "@/redux/features/cart/cartApi";
import { Dispatch, SetStateAction } from "react";

const CartCard = ({product, refetch, productSeleted, setSelectedProductId}: {product: TCartProduct; refetch: () => void; setSelectedProductId: Dispatch<SetStateAction<string | null>>; productSeleted: Dispatch<SetStateAction<TCartProduct[]>>}) => {

  const setProduct = (checked: boolean, productData: TCartProduct, cartId: string) => {

    if(checked){
      productSeleted((prev) => [...prev, productData])
    };

    if(!checked){
      setSelectedProductId(cartId);
    }
    
  }

  const handleRemoveProductFromCart = (id: string) => {
    console.log(id);
  };

  const [updateProductQuantity] = useUpdateProductQuantityMutation();
  const handleProductIncreseOrDecrese = (id: string, method: string) => {
    const updatedInfo = {
      _id: id,
      color: product?.color,
      size: product?.size,
      method
    };
    updateProductQuantity(updatedInfo);
    refetch();
  }

  return (
    <>
      <Table className="font-medium">
        <TableBody className="border-b border-gray-200">
          <TableRow>
            <TableCell className="text-center w-[20%]">
              <div className="flex items-center gap-2.5 w-[40%]">
                <Checkbox onCheckedChange={(checked) => setProduct(checked as boolean, product, product._id)} id="item" className="cursor-pointer" />
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
                <button disabled={product?.quantity === 0} onClick={() => handleProductIncreseOrDecrese(product?._id, 'remove')} className="bg-gray-300 w-fit p-1 rounded hover:bg-gray-400 active:scale-90 transition transform duration-400 cursor-pointer"><FaMinus /></button>
                <span className="w-20 text-xl font-semibold">{product?.quantity}</span>
                <button onClick={() => handleProductIncreseOrDecrese(product?._id, 'add')} className="bg-gray-300 w-fit p-1 rounded hover:bg-gray-400 active:scale-90 transition transform duration-400 cursor-pointer"><FaPlus /></button>
              </div>
            </TableCell>
            <TableCell className="text-center w-[20%]">
              <h1 className="text-xl font-bold">${((product?.productId.price)*(product?.quantity)).toFixed(2)}</h1>
            </TableCell>
            <TableCell className="text-center w-[20%]">
              <button onClick={() => handleRemoveProductFromCart(product?._id)} className="w-fit mx-auto bg-gray-200 p-2 text-2xl rounded-full text-red-600 active:scale-90 transition transform duration-500 cursor-pointer">
              <MdOutlineDelete />
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default CartCard;