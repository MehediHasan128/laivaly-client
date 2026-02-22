import Container from "../../reusable/Container";
import img1 from "/public/images/featureProducts/1.png";
import img2 from "/public/images/featureProducts/2.png";
import img3 from "/public/images/featureProducts/3.png";
import img4 from "/public/images/featureProducts/4.png";
import img5 from "/public/images/featureProducts/5.png";
import img6 from "/public/images/featureProducts/6.png";
import img7 from "/public/images/featureProducts/7.png";
import img8 from "/public/images/featureProducts/8.png";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    image: img1,
    label: "Women's Handbags",
    path: "",
  },
  {
    image: img2,
    label: "Women's Wallets and Small Leather Goods",
    path: "",
  },
  {
    image: img3,
    label: "Women's Accessories",
    path: "",
  },
  {
    image: img4,
    label: "Perfume",
    path: "",
  },
  {
    image: img5,
    label: "Men's Handbags",
    path: "",
  },
  {
    image: img6,
    label: "Men's Wallets and Small Leather Goods",
    path: "",
  },
  {
    image: img7,
    label: "Men's Accessories",
    path: "",
  },
  {
    image: img8,
    label: "Men's Shoes",
    path: "",
  },
];

const FeaturedProducts = () => {
  return (
    <section>
      <div
        style={{ backgroundImage: `url('/images/categories/9.jpg')` }}
        className="h-[600px] md:h-[900px] bg-cover bg-center md:bg-fixed bg-scroll"
      />
      <Container>
        <div className="space-y-10">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-medium">Redefining Your Style</h1>
            <p className="text-gray-600">
              Every creation holds a touch of innovation. Explore our latest
              curation.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 xl:gap-3 xl:w-[90%] 2xl:w-[80%] mx-auto">
            {features?.map((feature, idx) => (
              <Link
                href={feature.path}
                key={idx}
                className="hover:-translate-y-2 duration-500"
              >
                <div className="relative h-64 lg:h-80 xl:h-[400px] 2xl:h-[450px]">
                  <Image src={feature.image} alt={feature.label} fill />
                </div>
                <div className="text-center py-3 text-xs xl:text-sm text-gray-700 font-medium">
                  <h1>{feature.label}</h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
