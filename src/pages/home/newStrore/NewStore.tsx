import Container from "@/components/reusable/Container";
import shop from "../../../assets/images/shop/shop5.jpg";

const NewStore = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row justify-between gap-3 md:gap-5">
        <div className="xl:w-[60%] overflow-hidden rounded-2xl">
          <img className="w-full h-full object-cover" src={shop} alt="" />
        </div>
        <div className="xl:w-[40%]">
          <div>
            <h1 className="text-4xl md:text-5xl xl:text-4xl 2xl:text-6xl leading-12 xl:leading-12 2xl:leading-20">
              Find your perfect look at Laivaly new on{" "}
              <span className="text-[#31473A] font-bold text-5xl md:text-6xl 2xl:text-7xl">
                Singapore
              </span>
            </h1>
          </div>
          <div className="text-justify text-gray-600 font-medium my-4 md:my-5 2xl:my-10 text-sm md:text-lg xl:text-base 2xl:text-lg">
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
          <div className="space-y-3 md:space-y-4 xl:space-y-3">
            <h2 className="text-lg md:text-2xl xl:text-xl 2xl:text-2xl font-medium">Come and Enjoy</h2>
            <h1 className="font-bold text-7xl md:text-8xl xl:text-8xl 2xl:text-9xl">50%</h1>
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
