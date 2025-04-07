import Banner from "./banner/Banner";
import NewArrival from "./newArrivals/NewArrival";
import NewStore from "./newStrore/NewStore";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="mt-20 mb-42">
        <NewArrival />
      </div>
      <NewStore />
    </>
  );
};

export default Home;
