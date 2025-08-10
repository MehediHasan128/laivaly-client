import Container from "../reusable/Container";
import CustomerReviewCard from "../reusable/CustomerReviewCard";

const CustomerReview = () => {
  return (
    <section className=" my-10 md:my-20">
      <Container>
        <div className="flex flex-col xl:flex-row items-center gap-10 xl:gap-0">
          <div className="xl:w-[45%] 2xl:w-[50%] space-y-5">
            <h1 className="text-5xl xl:text-7xl font-extrabold xl:leading-20">
              What Our
              <br className="hidden xl:block" /> Customer Says
            </h1>
            <p className="md:w-[85%] text-justify font-medium">
              See what our customers are saying about their favorite purchases.
              From cozy winter layers to timeless statement pieces, they’ve felt
              the style and comfort firsthand. Join the community that chooses
              us for quality, elegance, and a touch of seasonal charm.
            </p>
          </div>

          <div className="xl:w-[55%] 2xl:w-[50%] flex flex-col gap-3 md:gap-5">
            <div className="flex md:justify-end">
              <div className="md:w-[90%] md:scale-90">
                <CustomerReviewCard
                  imageURL="/images/users/2.jpg"
                  name="Mohammad Mahfuz"
                  comment="Absolutely love the quality of the winter collection!
The coat I bought is both stylish and incredibly warm.
Will definitely shop here again!"
                />
              </div>
            </div>
            <div className="md:w-[90%]">
              <CustomerReviewCard
                imageURL="/images/users/1.jpg"
                name="Sumaiya Akter"
                comment="Perfect fit and premium fabric quality.
The sweater kept me cozy during my entire trip.
Highly recommend this brand to everyone."
active
              />
            </div>
            <div className="flex md:justify-end">
              <div className="md:w-[90%] md:scale-90">
                <CustomerReviewCard
                  imageURL="/images/users/3.jpg"
                  name="Maya Rahman"
                  comment="Beautiful designs and excellent stitching.
The puffer jacket feels light yet very warm.
Customer service was also very responsive."
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CustomerReview;
