import Container from "@/components/ui/Container";
import banner from "../../assets/images/tShirt/shirt1.jpg";
import promoCode from "../../assets/images/others/promoCode.png";
import CollectionBanner from "@/components/ui/CollectionBanner";
import CollectionFilter from "@/components/ui/CollectionFilter";

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

          <CollectionBanner
            bannerImage={banner}
            title={title}
            promoCodeIcon={promoCode}
            message="Shopping is a bit of relaxing hobby for me, which is
            sometimes troubling for the bank balance."
          />

          <CollectionFilter />
        </div>
      </Container>
    </div>
  );
};

export default NewCollection;
