import ArrivalCard from "@/components/reusable/ArrivalCard";
import Container from "@/components/reusable/Container";
import HeaderTitle from "@/components/reusable/HeaderTitle";
import { useGetAllProductQuery } from "@/redux/features/product/productApi";
import { TProductData } from "@/types";

const NewArrival = () => {
  const { data: products } = useGetAllProductQuery([[]]);
  const productData = products?.data;
  console.log(productData);

  return (
    <Container>
      {/* Arrival header */}
      <div>
        <HeaderTitle
          title="New"
          colorTitle="Arrivals"
          subTitle="Discover the latest additions to our collection — where timeless design meets modern trends. From everyday essentials to bold statement pieces, our newest arrivals are here to elevate your style."
        />
      </div>

      {/* Arrival card */}
      <div className="mt-10 lg:mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 lg:w-[80%] mx-auto">
        {productData?.slice(0, 7).map((product: TProductData) => (
          <ArrivalCard key={product._id} data={product} />
        ))}
      </div>
    </Container>
  );
};

export default NewArrival;
