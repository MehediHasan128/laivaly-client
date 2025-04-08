import Container from "@/components/reusable/Container";
import banner from "../../assets/images/tShirt/shirt1.jpg";
import promoCode from "../../assets/images/others/promoCode.png";
import CollectionBanner from "@/components/reusable/CollectionBanner";
import CollectionFilter from "@/components/reusable/CollectionFilter";
import ProductCard from "@/components/reusable/ProductCard";
import PaginationWrapper from "@/components/reusable/PaginationWrapper";

const title = {
  title1: "Get 25% Cash back",
  title2: "On $150",
};

const NewCollection = () => {
  return (
    <div className="min-h-screen py-5 md:py-7 lg:py-10">
      <Container>
        <div>
          <h1 className="text-xl md:text-2xl font-[600]">
            New In{" "}
            <span className="text-gray-600 text-sm md:text-lg">(230)</span>
          </h1>

          <div className="my-5">
            <CollectionBanner
              bannerImage={banner}
              title={title}
              promoCodeIcon={promoCode}
              message="Shopping is a bit of relaxing hobby for me, which is
            sometimes troubling for the bank balance."
            />
          </div>

          <div className="hidden">
            <CollectionFilter />
          </div>

          <div className="my-5 lg:my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
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
