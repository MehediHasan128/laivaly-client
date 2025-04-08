import ArrivalCard from "@/components/reusable/ArrivalCard";
import Container from "@/components/reusable/Container";
import HeaderTitle from "@/components/reusable/HeaderTitle";
import product1 from "../../../assets/images/product/product1.jpg";
import product2 from "../../../assets/images/product/product2.jpg";
import product3 from "../../../assets/images/product/product3.jpg";
import product4 from "../../../assets/images/product/product4.jpg";
import product5 from "../../../assets/images/product/product5.jpg";
import product6 from "../../../assets/images/product/product6.jpg";
import product7 from "../../../assets/images/product/product7.jpg";
import product8 from "../../../assets/images/product/product8.jpg";

const NewArrival = () => {
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
        <ArrivalCard
          productId="01"
          productImage={product1}
          productTitle="Royal Perfume 25ml"
          productPrice="25.99"
        />
        <ArrivalCard
          productId="02"
          productImage={product2}
          productTitle="Boys Cargo Pant"
          productPrice="45.50"
        />
        <ArrivalCard
          productId="03"
          productImage={product3}
          productTitle="Glossy Lipstick"
          productPrice="5.00"
        />
        <ArrivalCard
          productId="04"
          productImage={product4}
          productTitle="Sweet Night Perfume 20ml"
          productPrice="20.99"
        />
        <ArrivalCard
          productId="05"
          productImage={product5}
          productTitle="Laivaly Cap"
          productPrice="25.99"
        />
        <ArrivalCard
          productId="06"
          productImage={product6}
          productTitle="Winter Jacket"
          productPrice="50.00"
        />
        <ArrivalCard
          productId="07"
          productImage={product7}
          productTitle="Casual Shoes"
          productPrice="15.60"
        />
        <ArrivalCard
          productId="08"
          productImage={product8}
          productTitle="Leather hand bag"
          productPrice="35.99"
        />
      </div>
    </Container>
  );
};

export default NewArrival;
