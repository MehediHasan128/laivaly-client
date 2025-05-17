/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/reusable/Container";
import banner from "../../assets/images/tShirt/shirt1.jpg";
import promoCode from "../../assets/images/others/promoCode.png";
import CollectionBanner from "@/components/reusable/CollectionBanner";
import CollectionFilter from "@/components/reusable/CollectionFilter";
import ProductCard from "@/components/reusable/ProductCard";
import PaginationWrapper from "@/components/reusable/PaginationWrapper";
import { useState } from "react";
import { useGetAllProductQuery } from "@/redux/features/product/productApi";
import { TProductData, TSearch } from "@/types";

const title = {
  title1: "Get 25% Cash back",
  title2: "On $150",
};



const NewCollection = () => {

  const [searchText, setSearchText] = useState<TSearch[]>([]);
  const [priceRange, setPriceRange] = useState<string | null>(null);

  console.log(priceRange);
  
    const { data: products } = useGetAllProductQuery([searchText]);
    const productData = products?.data;

  return (
    <div className="min-h-screen py-5 md:py-7 lg:py-8 bg-gray-50">
      <Container>
        <div>

          <div>
            <CollectionBanner
              bannerImage={banner}
              title={title}
              promoCodeIcon={promoCode}
              message="Shopping is a bit of relaxing hobby for me, which is
            sometimes troubling for the bank balance."
            />
          </div>

          <div className="hidden lg:flex my-10">
            <CollectionFilter setPriceRange={setPriceRange} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 md:gap-5">
            {
              productData?.map((product: TProductData) => <ProductCard key={product?._id} data={product}/>)
            }
          </div>

          <div>
            <PaginationWrapper />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewCollection;
