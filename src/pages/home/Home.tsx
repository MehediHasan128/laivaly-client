import Banner from "./banner/Banner";
import FeaturedCollection from "./featuredCollection/FeaturedCollection";
import NewArrival from "./newArrivals/NewArrival";
import NewsLetter from "./newsLetter/NewsLetter";
import NewStore from "./newStrore/NewStore";

const Home = () => {
  return (
    <>
      <Banner />

      <div className="mt-14 mb-32 xl:mt-20 xl:mb-42">
        <NewArrival />
      </div>

      <NewStore />

      <div className="mt-24 md:mt-32 mb-20 md:mb-24 xl:mb-32">
        <FeaturedCollection />
      </div>

      <NewsLetter />

    </>
  );
};

export default Home;
