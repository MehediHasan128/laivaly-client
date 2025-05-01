import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TProductData } from "@/types";
import { HiDotsVertical } from "react-icons/hi";

const ProductsTable = ({allProducts}: {allProducts: TProductData[]}) => {

  return (
    <Table className="font-medium">
      <TableCaption>A list of all users.</TableCaption>

      <TableHeader className="bg-gray-300">
        <TableRow className="border-gray-400">
          <TableHead>Product</TableHead>
          <TableHead className="text-center">Category</TableHead>
          <TableHead className="text-center">SKU</TableHead>
          <TableHead className="text-center">Price</TableHead>
          <TableHead className="text-center">Discount</TableHead>
          <TableHead className="text-end">Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {allProducts?.length > 0 ? (
          <>
            {allProducts.map((product: TProductData) => (
              <TableRow key={product?._id} className="border-gray-200">
                <TableCell className="w-[16.6%] flex items-center gap-2">
                  <Avatar className="w-16 h-20 rounded-lg">
                    <AvatarImage
                      src={product?.thumbnail}
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="text-sm lg:text-base">
                    <h1>{product?.title}</h1>
                    <p className="text-xs text-gray-600">
                      {product?._id}
                    </p>
                  </div>
                </TableCell>

                <TableCell className="w-[16.6%] text-xs lg:text-base text-center">
                  <p>{(product?.category)?.toUpperCase()}</p>
                </TableCell>

                <TableCell className="w-[16.6%] text-xs lg:text-base text-center">
                  <p>{product?.SKU}</p>
                </TableCell>

                <TableCell className="w-[16.6%] text-sm lg:text-base text-center">
                  <p>${product?.price}</p>
                </TableCell>

                <TableCell className="w-[16.6%] text-sm lg:text-base text-center">
                  <p>{product?.discount}%</p>
                </TableCell>

                <TableCell className="w-[16.6%]">
                  <div className="flex justify-end text-xl">
                    <span className="p-3 rounded-lg hover:bg-gray-200 duration-300 cursor-pointer">
                      <HiDotsVertical />
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </>
        ) : (
          <>
            <TableRow>
              <TableCell colSpan={6} className="p-20 text-center bg-gray-100">
                <div>
                  <h1>No Data found!</h1>
                </div>
              </TableCell>
            </TableRow>
          </>
        )}
      </TableBody>
    </Table>
  );
};

export default ProductsTable;
