import { TProduct } from "@/types/types";
import { Heart } from "lucide-react";
import Image from "next/image";

const ProductCard = ({product}: {product: Pick<TProduct, "_id" | "title" | "price" | "thumbnail" | "isLarge">}) => {
    return (
        <div className="group">
          <div className={`relative h-[200px] md:h-[400px] 2xl:h-[500px]`}>
            <Image
              src={product.thumbnail}
              alt={product.title}
              quality={100}
              fill
              className="object-cover object-top w-full h-full hover:scale-110 duration-500"
            />
            <div className={`absolute top-0 right-0 ${product.isLarge ? "text-white" : "text-gray-500"} p-3`}>
              <Heart className="size-5" />
            </div>
          <div className={`xl:absolute bottom-0 w-full p-5 xl:border-t xl:translate-y-24 bg-accent group-hover:translate-y-0 duration-500`}>
            <span className="flex justify-between items-center font-medium">
                <h1>{product.title}</h1>
                <h1>${product.price}</h1>
            </span>
          </div>
          </div>
        </div>
    );
};

export default ProductCard;