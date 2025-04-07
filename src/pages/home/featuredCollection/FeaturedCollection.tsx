import Container from "@/components/ui/Container";
import FeaturedCard from "@/components/ui/FeaturedCard";
import HeaderTitle from "@/components/ui/HeaderTitle";
import product1 from "../../../assets/images/featuredProduct/product1.png";
import product2 from "../../../assets/images/featuredProduct/product2.png";
import product3 from "../../../assets/images/featuredProduct/product3.png";
import product4 from "../../../assets/images/featuredProduct/product4.png";
import product5 from "../../../assets/images/featuredProduct/product5.png";
import product6 from "../../../assets/images/featuredProduct/product6.jpg";

const FeaturedCollection = () => {
  return (
    <Container>
      <div>
        <div>
          <HeaderTitle
            title="Featured"
            colorTitle="Collections"
            subTitle="Dare to mix and match! Check our collection to level up your fashion game"
          />
        </div>
        <div className="mt-20 grid grid-cols-3 gap-5 w-[80%] mx-auto">
          <FeaturedCard productImage={product1} productCategory="Footwear" description="Step up your style with our latest range of sneakers, boots, and more." />
          <FeaturedCard productImage={product2} productCategory="Jacket" description="Stay warm and stylish with our premium selection of jackets for every season." />
          <FeaturedCard productImage={product3} productCategory="Bottoms" description="From jeans to joggers, find the perfect fit for any vibe." />
          <FeaturedCard productImage={product4} productCategory="Accesories" description="Complete your look with trendy accessories that make a statement." />
          <FeaturedCard productImage={product5} productCategory="Headwear" description="Top off your outfit with caps, beanies, and more head-turning styles." />
          <FeaturedCard productImage={product6} productCategory="Bags" description="Carry confidence with our stylish and functional bags for every occasion." />
        </div>
      </div>
    </Container>
  );
};

export default FeaturedCollection;
