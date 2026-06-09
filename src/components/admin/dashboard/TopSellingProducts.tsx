import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

const topSellingProducts = [
  {
    image: "/images/featureProducts/1.png",
    title: "Premium Bag",
    quantity: 250,
  },
  {
    image: "/images/featureProducts/8.png",
    title: "Men's Shose",
    quantity: 200,
  },
  {
    image: "/images/featureProducts/6.png",
    title: "Leather Moneybag",
    quantity: 180,
  },
  {
    image: "/images/featureProducts/5.png",
    title: "Hand Bag",
    quantity: 120,
  },
  {
    image: "/images/featureProducts/7.png",
    title: "Premium Sunglass",
    quantity: 50,
  },
];

const TopSellingProducts = () => {
  return (
    <Card className="rounded-md shadow h-full">
      <CardHeader>
        <CardTitle>Top Selling Products</CardTitle>
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
                  <p className="text-gray-600">{product.quantity} Sold</p>
                </div>
                <Progress value={product.quantity} />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopSellingProducts;
