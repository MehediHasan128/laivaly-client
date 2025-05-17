import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import logo from "../../assets/images/logo/logo.png";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HiOutlineDownload } from "react-icons/hi";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import { useRef } from "react";
import { TOrder } from "@/types";

const ProductBillPage = ({ btn, data }: { btn: string; data: TOrder }) => {
  const pdfRef = useRef<HTMLInputElement>(null);

  const downloadBillPDF = () => {
    const input = pdfRef.current;

    if (!input) return;

    html2canvas(input, {
      scale: window.devicePixelRatio || 2,
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 5;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("invoice.pdf");
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-blue-700 cursor-pointer">{btn}</button>
      </DialogTrigger>

      <DialogContent className="p-0 xl:max-w-[60%] 2xl:max-w-[50%]">
        <div ref={pdfRef}>
          <DialogHeader className="xl:py-2 2xl:py-4 px-4">
            <DialogTitle className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img className="w-8" src={logo} alt={logo} />
                <h1 id="logo" className="text-2xl">
                  Laivaly
                </h1>
              </div>
              <div className="text-base text-gray-600">
                <h1>Dhaka, Bangladesh</h1>
              </div>
            </DialogTitle>
          </DialogHeader>

          <div className="border-t border-gray-300"></div>

          <div className="px-5 xl:my-2 2xl:my-4">
            <img
              className="xl:w-20 2xl:w-24 rounded-lg"
              src={data.userId.profileImage}
              alt=""
            />
            <div className="flex justify-between xl:mt-1.5 2xl:mt-3">
              <div>
                <h1 className="font-medium">Invoice from Laivaly</h1>
                <p className="text-sm font-medium text-gray-600">
                  <span className="font-bold">Order ID: </span>
                  {data._id}
                </p>
              </div>
              <div>
                <h1 className="font-medium text-gray-600">
                  Issue Date: <span className="text-black">25 July, 2025</span>
                </h1>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300"></div>

          <div className="flex gap-28 px-5 xl:my-2 2xl:my-4">
            <div className="font-medium">
              <p className="font-bold text-gray-600">Bill from:</p>
              <h1 className="text-xl">Laivaly</h1>
              <h2>
                House: 10, Road: 2/B, Sector: 4, <br /> Uttara Dhaka-1230
              </h2>
            </div>
            <div className="font-medium">
              <p className="font-bold text-gray-600">Bill to:</p>
              <h1 className="text-xl">
                {data.userId.userName.firstName} {data.userId.userName.lastName}
              </h1>
              <p className="text-sm text-gray-600">{data.userId._id}</p>
              <h2>
                {data.shippingAddress.street} {data.shippingAddress.city},{" "}
                <br /> {data.shippingAddress.state}-{data.shippingAddress.zip}{" "}
                {data.shippingAddress.country}
              </h2>
            </div>
          </div>

          <div className="border-t border-gray-300 xl:my-2 2xl:my-4"></div>

          <div className="px-5 2xl:my-4">
            <Table className="font-medium">
              <TableHeader className="bg-gray-300">
                <TableRow className="border-gray-400">
                  <TableHead>Items</TableHead>
                  <TableHead className="text-center">Product Code</TableHead>
                  <TableHead className="text-center">Color Code</TableHead>
                  <TableHead className="text-center">Size</TableHead>
                  <TableHead className="text-center">Quantity</TableHead>
                  <TableHead className="text-center">Price</TableHead>
                  <TableHead className="text-end">Total Price</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {data.products.map((product, index) => (
                  <TableRow key={index} className="border-gray-200">
                    <TableCell>
                      <p>{product.productId.title}</p>
                    </TableCell>

                    <TableCell className="text-center">
                      <p>{product.productId.SKU}</p>
                    </TableCell>

                    <TableCell className="text-center">
                      <p>{product.color}</p>
                    </TableCell>

                    <TableCell className="text-center">
                      <p>{product.size}</p>
                    </TableCell>

                    <TableCell className="text-center">
                      <p>{product.quantity}</p>
                    </TableCell>

                    <TableCell className="text-center">
                      <p>${product.productId.price}</p>
                    </TableCell>

                    <TableCell className="text-end">
                      <p>
                        $
                        {(product.productId.price * product.quantity).toFixed(
                          2
                        )}
                      </p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex justify-end px-7 font-medium mt-2.5 2xl:mt-5">
            <div className="space-y-1 2xl:space-y-1.5 text-sm w-[40%]">
              <div className="flex justify-between">
                <span className="text-gray-600">Sub Total:</span>{" "}
                <span>$ 30.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Shipping:</span>{" "}
                <span>$ 30.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Tax:</span>{" "}
                <span>$ 30.00</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 xl:my-2 2xl:my-3"></div>

          <div className="flex justify-end px-7 font-medium text-base 2xl:text-lg">
            <div className="w-[40%]">
              <div className="flex justify-between">
                <span className="text-gray-600">Total:</span>{" "}
                <span>$ 30.00</span>
              </div>
            </div>
          </div>

          <div className="xl:mt-3 2xl:mt-10 text-center font-medium text-gray-600">
            <h1>Thank you for shopping with Laivaly!</h1>
          </div>
        </div>

        <DialogFooter className="p-5">
          <button
            onClick={downloadBillPDF}
            className="border rounded px-4 py-1.5 font-medium cursor-pointer flex items-center gap-1.5"
          >
            <HiOutlineDownload className="text-xl" />
            Download
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProductBillPage;
