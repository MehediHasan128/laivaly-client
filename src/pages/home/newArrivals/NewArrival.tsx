import ArrivalCard from "@/components/reusable/ArrivalCard";
import Container from "@/components/reusable/Container";
import HeaderTitle from "@/components/reusable/HeaderTitle";
import { useGetAllProductQuery } from "@/redux/features/product/productApi";
import { TProductData } from "@/types";
import { NavLink } from "react-router-dom";

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
        {productData?.slice(0, 8).map((product: TProductData) => (
          <ArrivalCard key={product._id} data={product} />
        ))}
      </div>

      <div className="w-fit mx-auto mt-20">
        <NavLink to='/newIn' className="border border-[#31473A] px-8 py-3 rounded-md font-medium text-white bg-[#31473A] active:scale-95 duration-1000">See More</NavLink>
      </div>
    </Container>
  );
};

export default NewArrival;
