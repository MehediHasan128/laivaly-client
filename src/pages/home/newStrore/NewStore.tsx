import Container from "@/components/reusable/Container";
import shop from "../../../assets/images/shop/shop5.jpg";

const NewStore = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-10">
        <div className="lg:w-[60%] overflow-hidden rounded-2xl">
          <img className="w-full object-cover" src={shop} alt="" />
        </div>
        <div className="lg:w-[40%]">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-14 md:leading-16 lg:leading-20">
              Find your perfect look at Laivaly new on{" "}
              <span className="font-semibold text-[#31473A] text-5xl md:text-6xl lg:text-7xl">
                Singapore
              </span>
            </h1>
          </div>
          <div className="my-4 md:my-6 lg:my-10 text-sm md:text-lg text-justify text-gray-600 font-medium">
            <p>
              Laivaly is now open in Singapore, and we’re beyond excited to
              welcome you! Located in the heart of the city, our new outlet
              offers a fresh and stylish shopping experience. Explore exclusive
              collections and enjoy special launch discounts available only
              in-store. Our friendly team is here to help you find your perfect
              look with personalized service. Come celebrate fashion, style, and
              savings—only at Laivaly Singapore!
            </p>
          </div>
          <div className="space-y-3 lg:space-y-5">
            <h2 className="text-2xl font-semibold">Come and Enjoy</h2>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold">50%</h1>
            <button className="border-2 border-[#31473A] hover:bg-[#31473A] hover:text-white duration-1000 cursor-pointer px-5 py-2 rounded-full text-balance lg:text-lg font-semibold">
              See on Map
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewStore;
