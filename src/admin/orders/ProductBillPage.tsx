import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import logo from "../../assets/images/logo/logo.png";
import product from "../../assets/images/product/product1.jpg";
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

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
];

const ProductBillPage = ({ btn }: { btn: string }) => {
  const pdfRef = useRef<HTMLInputElement>(null);

  const downloadBillPDF = () => {
    const input = pdfRef.current;

    if (!input) return;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
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

      <DialogContent className="p-0 2xl:max-w-[40%]">
        <div ref={pdfRef}>
          <DialogHeader className=" py-4 px-4">
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

          <div className="px-5 my-4">
            <img className="w-24 rounded-lg" src={product} alt="" />
            <div className="flex justify-between mt-3">
              <div>
                <h1 className="font-medium">Invoice from Laivaly</h1>
                <p className="text-sm font-medium text-gray-600">
                  <span className="font-bold">Order ID: </span>
                  #507f191e810c19729de860ea
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

          <div className="flex gap-20 px-5 my-4">
            <div>
              <p className="font-medium text-gray-600">Bill from:</p>
              <h1 className="text-xl font-bold ">Laivaly</h1>
              <h2 className="text-lg font-medium">
                House: 10, Road: 2/B, Sector: 4, <br /> Uttara Dhaka-1230
              </h2>
            </div>
            <div>
              <p className="font-medium text-gray-600">Bill to:</p>
              <h1 className="text-xl font-bold ">Mehedi Hasan</h1>
              <p className="text-sm font-medium text-gray-600">
                #507f191e810c19729de860ea
              </p>
              <h2 className="text-lg font-medium">
                House: 10, Road: 2/B, Sector: 4, <br /> Uttara Dhaka-1230
              </h2>
            </div>
          </div>

          <div className="border-t border-gray-300 my-4"></div>

          <div className="px-5 my-4">
            <Table className="font-medium">
              <TableHeader className="bg-gray-300">
                <TableRow className="border-gray-400">
                  <TableHead>Items</TableHead>
                  <TableHead className="text-center">Quantity</TableHead>
                  <TableHead className="text-center">Price</TableHead>
                  <TableHead className="text-end">Total Price</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice} className="border-gray-200">
                    <TableCell>
                      <p>Royal Perfume 25ml</p>
                    </TableCell>

                    <TableCell className="text-center">
                      <p>2</p>
                    </TableCell>

                    <TableCell className="text-center">
                      <p>$10.00</p>
                    </TableCell>

                    <TableCell className="text-end">
                      <p>$10.00</p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex justify-end px-7 font-medium">
            <div className="space-y-1.5 w-[40%]">
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

          <div className="border-t border-gray-300 my-3"></div>

          <div className="flex justify-end px-7 font-medium">
            <div className="w-[40%]">
              <div className="flex justify-between text-lg">
                <span className="text-gray-600">Total:</span>{" "}
                <span>$ 30.00</span>
              </div>
            </div>
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
