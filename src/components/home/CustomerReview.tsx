import Container from "../reusable/Container";
import CustomerReviewCard from "../reusable/CustomerReviewCard";

const CustomerReview = () => {
  return (
    <section className="my-20">
      <Container>
        <div className="flex items-center">
          <div className="w-[50%] space-y-5">
            <h1 className="text-7xl font-extrabold leading-20">
              What Our
              <br /> Customer Says
            </h1>
            <p className="w-[85%] text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio cupiditate non, maxime quia consequatur rerum maiores
              molestiae repudiandae ab dolorum ipsam nihil consequuntur nulla
              earum quae illum repellendus eos quis perferendis laudantium! Eius
              dolore, non, alias laudantium corrupti ipsum totam soluta dolorum
              numquam a ullam, minus esse. Nobis, iure repellat!
            </p>
          </div>

          <div className="w-[50%] flex flex-col gap-5">
            <div className="flex justify-end">
              <div className="w-[90%] scale-90">
                <CustomerReviewCard
                  imageURL="/images/users/2.jpg"
                  name="Mohammad Mahfuz"
                  comment="Absolutely love the quality of the winter collection!
The coat I bought is both stylish and incredibly warm.
Will definitely shop here again!"
                />
              </div>
            </div>
            <div className="w-[90%]">
              <CustomerReviewCard
                imageURL="/images/users/1.jpg"
                name="Sumaiya Akter"
                comment="Perfect fit and premium fabric quality.
The sweater kept me cozy during my entire trip.
Highly recommend this brand to everyone."
active
              />
            </div>
            <div className="flex justify-end">
              <div className="w-[90%] scale-90">
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
