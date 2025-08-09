import Container from "../reusable/Container";
import Headline from "../reusable/Headline";

const NewArrival = () => {
  return (
    <section>
      <Container>
        <div>
          <Headline
            title="New Arrivals – Fresh Styles Just For You"
            description="Step into the season with our latest collection of fashion-forward
          styles, curated to bring you the perfect blend of trend and comfort.
          From everyday essentials to statement pieces, discover outfits that
          let you express your personality and stay ahead in style."
          />
        </div>
      </Container>
    </section>
  );
};

export default NewArrival;
