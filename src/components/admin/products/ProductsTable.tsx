import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllProducts } from "@/lib/api/products/products";
import { TProduct } from "@/types/product.type";
import { TResponce } from "@/types/types";
import { capitalizeFirstLetter } from "@/utils";
import Image from "next/image";

const tableColoums = [
  "Thumbnail",
  "Product",
  "Category",
  "Price",
  "Discount",
  "Status",
  "Actions",
];

const ProductsTable = async() => {

  const getProducts = await getAllProducts() as TResponce;
  const products = getProducts.data;

  return (
    <Table>
      <TableCaption>A list of your Laivaly Customers.</TableCaption>
      <TableHeader>
        <TableRow>
          {tableColoums.map((coloum, indx) => (
            <TableHead
              key={indx}
              className="text-gray-500 font-semibold first:text-start last:text-center"
            >
              {coloum}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.map((product: TProduct) => (
          <TableRow key={product._id} className="font-semibold">
            <TableCell>
              <div className="relative h-24 w-20">
                <Image
                  src={product.productThumbnail}
                  alt=""
                  fill
                  quality={100}
                />
              </div>
            </TableCell>
            <TableCell>
              <div className="space-y-1">
                <Label className="font-bold">{product.title}</Label>
                <Label className="text-sm text-gray-500 font-semibold">
                  {product.parentProductId}
                </Label>
              </div>
            </TableCell>
            <TableCell>
              <div className="space-y-1">
                <Label className="font-bold">
                  {capitalizeFirstLetter(product.subCategory)}
                </Label>
              </div>
            </TableCell>
            <TableCell>
              <div className="space-y-1">
                <Label className="font-bold">${product.price.toFixed(2)}</Label>
              </div>
            </TableCell>
            <TableCell>
              <div className="space-y-1">
                <Label className="font-bold">{product.discount}%</Label>
              </div>
            </TableCell>
            <TableCell>
              <div className="space-y-1">
                <Label className="font-bold">
                  {capitalizeFirstLetter(product.status)}
                </Label>
              </div>
            </TableCell>
            <TableCell>
              <div className="space-y-1.5">
                <button className="btn py-2.5 border">Details</button>
                <button className="btn bg-transparent text-black border py-2.5">
                  Delete
                </button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductsTable;
