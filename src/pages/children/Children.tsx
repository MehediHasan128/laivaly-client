import CollectionBanner from "@/components/reusable/CollectionBanner";
import CollectionFilter from "@/components/reusable/CollectionFilter";
import Container from "@/components/reusable/Container";
import PaginationWrapper from "@/components/reusable/PaginationWrapper";
import ProductCard from "@/components/reusable/ProductCard";
import { useGetAllProductQuery } from "@/redux/features/product/productApi";
import { TProductData } from "@/types";
import { useEffect, useState } from "react";
import banner from "../../assets/images/tShirt/shirt1.jpg";
import promoCode from "../../assets/images/others/promoCode.png";

const title = {
  title1: "Get 25% Cash back",
  title2: "On $150",
};

const Children = () => {
  const [filter, setFilter] = useState([
    { field: "targetAudience", value: "children" },
  ]);

  const [priceSort, setPriceSort] = useState<string | null>(null);

  useEffect(() => {
    if (!priceSort) return;

    setFilter((prevFilter) => {
      const fixedField = { field: "targetAudience", value: "children" };
      const sortField = { field: "sort", value: priceSort };

      const otherFilters = prevFilter.filter(
        f => f.field !== "targetAudience" && f.field !== "sort"
      );

      return [fixedField, sortField, ...otherFilters];
    });
  }, [priceSort]);

  const { data: products } = useGetAllProductQuery([filter]);
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
            <CollectionFilter setPriceRange={setPriceSort} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 md:gap-5">
            {productData?.map((product: TProductData) => (
              <ProductCard key={product?._id} data={product} />
            ))}
          </div>

          <div>
            <PaginationWrapper />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Children;
