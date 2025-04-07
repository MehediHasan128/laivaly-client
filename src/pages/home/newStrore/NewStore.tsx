import Container from "@/components/ui/Container";
import shop from "../../../assets/images/shop/shop5.jpg";

const NewStore = () => {
  return (
    <Container>
      <div className="flex justify-between items-center gap-10 mb-64">
        <div className="w-[60%] overflow-hidden rounded-2xl">
          <img className="w-full object-cover" src={shop} alt="" />
        </div>
        <div className="w-[40%]">
          <div>
            <h1 className="text-6xl leading-20">Find your perfect look at Laivaly new on <span className="font-semibold text-[#31473A] text-7xl">Singapore</span></h1>
          </div>
          <div className="my-10 text-lg text-justify text-gray-600 font-medium">
            <p>Laivaly is now open in Singapore, and we’re beyond excited to welcome you! Located in the heart of the city, our new outlet offers a fresh and stylish shopping experience. Explore exclusive collections and enjoy special launch discounts available only in-store. Our friendly team is here to help you find your perfect look with personalized service. Come celebrate fashion, style, and savings—only at Laivaly Singapore!</p>
          </div>
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">Come and Enjoy</h2>
            <h1 className="text-9xl font-bold">50%</h1>
            <button className="border-2 border-[#31473A] hover:bg-[#31473A] hover:text-white duration-700 cursor-pointer px-5 py-2 rounded-full text-lg font-semibold">See on Map</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewStore;
