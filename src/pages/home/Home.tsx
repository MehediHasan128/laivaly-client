import Banner from "./banner/Banner";
import FeaturedCollection from "./featuredCollection/FeaturedCollection";
import NewArrival from "./newArrivals/NewArrival";
import NewStore from "./newStrore/NewStore";

const Home = () => {
  return (
    <>
      <Banner />

      <div className="mt-16 md:mt-20 mb-24 lg:mb-72">
        <NewArrival />
      </div>

      <NewStore />

      <div className="mt-20 lg:mt-72 mb-20">
        <FeaturedCollection />
      </div>

    </>
  );
};

export default Home;
