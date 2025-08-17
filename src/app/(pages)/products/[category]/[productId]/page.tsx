import ProductColorSizeAndQuantity from "@/components/productDetail/ProductColorSizeAndQuantity";
import ProductDescription from "@/components/productDetail/ProductDescription";
import ProductImages from "@/components/productDetail/ProductImages";
import Button from "@/components/reusable/Button";
import Container from "@/components/reusable/Container";
import { CalculateAvgRatingAndPercentages } from "@/utils";
import { Heart } from "lucide-react";
import { IoStar } from "react-icons/io5";

const images = [
  "/images/products/10.jpg",
  "/images/products/11.jpg",
  "/images/products/12.jpg",
  "/images/products/13.jpg",
];

const colors = ["#FF7F50", "#1E3A8A", "#8B4513", "#000000"];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const ratingData = [
  { rating: 5, totalRating: 800 },
  { rating: 4, totalRating: 300 },
  { rating: 3, totalRating: 120 },
  { rating: 2, totalRating: 80 },
  { rating: 1, totalRating: 50 },
];

const { avarageRating, ratingPercentages } = CalculateAvgRatingAndPercentages(ratingData);

const ProductDetailsPage = () => {
  return (
    <main>
      <section className="flex flex-col lg:flex-row">
        {/* Product Image */}
        <ProductImages images={images} />

        {/* Product Info */}
        <div className="h-[10%] lg:h-full p-3 md:p-5 lg:w-[45%] xl:w-[50vw] space-y-3 xl:space-y-5">
          <div className="space-y-2 md:space-y-3 xl:space-y-5">
            <div className="border rounded-full w-fit gray-text px-5 py-0.5">
              Coat
            </div>
            <h1 className="font-semibold text-xl md:font-bold md:text-2xl lg:text-xl 2xl:text-3xl">
              Premium Breathable Linen Button-Down Shirt
            </h1>
            <h1 className="text-xl md:text-2xl font-bold">
              $19.99{" "}
              <span className="font-light line-through text-gray-500">
                $39.99
              </span>{" "}
              <sub className="text-red-700">20% off</sub>
            </h1>
          </div>

          {/* Product Description */}
          <ProductDescription />

          <ProductColorSizeAndQuantity colors={colors} sizes={sizes} />

          <div className="mt-10 flex gap-3">
            <Button
              buttonTitle="Buy It Now"
              className="border w-full flex justify-center bg-black text-white rounded-full"
            />
            <Button
              buttonTitle="Add To Cart"
              className="border w-full flex justify-center rounded-full"
            />
            <Button
              buttonTitle=""
              buttonIcon={<Heart className="size-5" />}
              className="rounded-full"
            />
          </div>
        </div>
      </section>

      <section className="mt-10">
        <Container>
          <div className="flex flex-col md:flex-row">
            {/* Rating */}
            <div className="md:w-[60%] lg:w-[50%]">
              <div className="flex items-center md:items-start gap-5 lg:gap-10 xl:gap-20">
                {/* Rating Avg */}
                <div>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
                    {avarageRating}
                    <sub className="2xl:text-2xl gray-text">/5</sub>
                  </h1>
                  <p className="gray-text text-xs md:text-sm">(250 Reviews)</p>
                </div>

                {/* Rating Percent */}
                <div className="w-full xl:w-[60%] space-y-0.5 md:space-y-2">
                  {ratingPercentages.map((percent, index) => (
                    <div key={index} className="flex items-center gap-2.5">
                      <IoStar className="text-[#FFB400] text-xl md:text-2xl" />
                      <h1 className="font-semibold">{percent.rating}</h1>
                      <div className="h-[6px] md:h-2 w-full bg-gray-300 rounded-full">
                        <div className={`rounded-full bg-black h-full`} style={{width: percent.percent}} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Review */}
            <div className="md:w-[40%] lg:w-[50%]"></div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ProductDetailsPage;
