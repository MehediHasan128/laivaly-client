import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const topSellingProducts = [
  {
    image: "/images/featureProducts/1.png",
    title: "Premium Bag",
    stock: 5,
  },
  {
    image: "/images/featureProducts/8.png",
    title: "Men's Shose",
    stock: 10,
  },
  {
    image: "/images/featureProducts/6.png",
    title: "Leather Moneybag",
    stock: 18,
  },
  {
    image: "/images/featureProducts/5.png",
    title: "Hand Bag",
    stock: 22,
  },
  {
    image: "/images/featureProducts/7.png",
    title: "Premium Sunglass",
    stock: 25,
  },
];

const LowStockProducts = () => {
  return (
    <Card className="rounded-md shadow h-full">
      <CardHeader>
        <CardTitle>Low Stock Products</CardTitle>
        <CardAction className="border rounded-md px-3 py-1.5 text-xs font-semibold cursor-pointer">
          View All
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {topSellingProducts.map((product, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="relative h-12 w-9 rounded overflow-hidden">
                <Image src={product.image} alt="product" fill />
              </div>
              <div className="w-full space-y-1.5">
                <div className="text-xs font-semibold flex justify-between">
                  <p>{product.title}</p>
                  <p className="border border-red-600 bg-red-50 text-red-700 rounded-full w-16 text-center py-0.5">{product.stock} Left</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LowStockProducts;
