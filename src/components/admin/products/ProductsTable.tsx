import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { capitalizeFirstLetter } from "@/utils";
import Image from "next/image";

const tableColoums = [
  "Thumbnail",
  "product",
  "product for",
  "category",
  "season",
  "price",
  "discount",
  "action",
];

const productData = [
    {
        productThumbnail: "https://res.cloudinary.com/dn6pn2fld/image/upload/v1757447361/file-1757447356339-655378391.jpg",
        parentProductId: "LP-CTC-7EFC4E",
        title: "Argyle Pattern Crop Sweater",
        productFor: "women",
        productCategory: "tops",
        season: "winter",
        price: 49.99,
        discount: 20
    },
    {
        productThumbnail: "https://res.cloudinary.com/dn6pn2fld/image/upload/v1757448151/file-1757448147733-439326401.jpg",
        parentProductId: "LP-CTG-265A7C",
        title: "Black Oversized Graphic T-Shirt",
        productFor: "men",
        productCategory: "tops",
        season: "all-season",
        price: 50.50,
        discount: 0
    },
    {
        productThumbnail: "https://res.cloudinary.com/dn6pn2fld/image/upload/v1757448287/file-1757448284161-734912818.jpg",
        parentProductId: "LP-CTH-C8DE4C",
        title: "Purple Snoopy Graphic Hoodie",
        productFor: "women",
        productCategory: "tops",
        season: "winter",
        price: 65.50,
        discount: 50
    },
    {
        productThumbnail: "https://res.cloudinary.com/dn6pn2fld/image/upload/v1757448536/file-1757448532135-856153703.jpg",
        parentProductId: "LP-CTF-DA7339",
        title: "Men's Checkered Flannel Shirt",
        productFor: "men",
        productCategory: "tops",
        season: "winter",
        price: 69.99,
        discount: 30
    },
    {
        productThumbnail: "https://res.cloudinary.com/dn6pn2fld/image/upload/v1758276465/file-1758276461326-831592293.jpg",
        parentProductId: "LP-CBT-446545",
        title: "Women's White Floral Printed Palazzo Pants",
        productFor: "women",
        productCategory: "bottoms",
        season: "summer",
        price: 35.99,
        discount: 10
    },
    {
        productThumbnail: "https://res.cloudinary.com/dn6pn2fld/image/upload/v1758282964/file-1758282961380-263099697.jpg",
        parentProductId: "LP-CBJ-1DA445",
        title: "Kids' Star Embroidered Jeans",
        productFor: "kids",
        productCategory: "bottoms",
        season: "all-season",
        price: 35.00,
        discount: 0
    },
]

const ProductsTable = () => {
  return (
    <Table>
      <TableCaption>A list of your Laivaly Customers.</TableCaption>
      <TableHeader>
        <TableRow>
          {tableColoums.map((coloum, indx) => (
            <TableHead
              key={indx}
              className="text-gray-500 font-semibold uppercase"
            >
              {coloum}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {productData?.map((product) => (
          <TableRow key={product.parentProductId} className="font-semibold">
            <TableCell>
                <div className="relative h-24 w-20">
                  <Image src={product.productThumbnail} alt="" fill quality={100} />
                </div>
            </TableCell>
            <TableCell>
                <div className="space-y-1">
                  <Label className="font-bold">{product.title}</Label>
                  <Label className="text-sm text-gray-500 font-semibold">{product.parentProductId}</Label>
                </div>
            </TableCell>
            <TableCell>
                <div className="space-y-1">
                  <Label className="font-bold">{capitalizeFirstLetter(product.productFor)}</Label>
                </div>
            </TableCell>
            <TableCell>
                <div className="space-y-1">
                  <Label className="font-bold">{capitalizeFirstLetter(product.productCategory)}</Label>
                </div>
            </TableCell>
            <TableCell>
                <div className="space-y-1">
                  <Label className="font-bold">{capitalizeFirstLetter(product.season)}</Label>
                </div>
            </TableCell>
            <TableCell>
                <div className="space-y-1">
                  <Label className="font-bold">${(product.price).toFixed(2)}</Label>
                </div>
            </TableCell>
            <TableCell>
                <div className="space-y-1">
                  <Label className="font-bold">{product.discount}%</Label>
                </div>
            </TableCell>
            <TableCell>
                <div className="space-y-1.5">
                  <button className="btn py-2.5 border">Details</button>
                  <button className="btn bg-transparent text-black border py-2.5">Delete</button>
                </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductsTable;
