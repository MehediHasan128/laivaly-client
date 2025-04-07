import ArrivalCard from "@/components/ui/ArrivalCard";
import Container from "@/components/ui/Container";
import HeaderTitle from "@/components/ui/HeaderTitle";
import product1 from '../../../assets/images/product/product1.jpg';
import product2 from '../../../assets/images/product/product2.jpg';
import product3 from '../../../assets/images/product/product3.jpg';
import product4 from '../../../assets/images/product/product4.jpg';
import product5 from '../../../assets/images/product/product5.jpg';
import product6 from '../../../assets/images/product/product6.jpg';
import product7 from '../../../assets/images/product/product7.jpg';
import product8 from '../../../assets/images/product/product8.jpg';

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
      <div className="mt-20 grid grid-cols-4 gap-8 w-[80%] mx-auto">
          <ArrivalCard productId="01" productImage={product1} productTitle="Perfume 25ml" productPrice="25.99" />
          <ArrivalCard productId="01" productImage={product2} productTitle="Perfume 25ml" productPrice="25.99" />
          <ArrivalCard productId="01" productImage={product3} productTitle="Perfume 25ml" productPrice="25.99" />
          <ArrivalCard productId="01" productImage={product4} productTitle="Perfume 25ml" productPrice="25.99" />
          <ArrivalCard productId="01" productImage={product5} productTitle="Perfume 25ml" productPrice="25.99" />
          <ArrivalCard productId="01" productImage={product6} productTitle="Perfume 25ml" productPrice="25.99" />
          <ArrivalCard productId="01" productImage={product7} productTitle="Perfume 25ml" productPrice="25.99" />
          <ArrivalCard productId="01" productImage={product8} productTitle="Perfume 25ml" productPrice="25.99" />
      </div>
    </Container>
  );
};

export default NewArrival;
