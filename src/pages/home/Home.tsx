import Banner from "./banner/Banner";
import NewArrival from "./newArrivals/NewArrival";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="my-20">
        <NewArrival />
      </div>
    </>
  );
};

export default Home;
