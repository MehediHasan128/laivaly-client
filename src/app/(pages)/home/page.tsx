import Banner from "@/components/pages/home/Banner";
import FeaturedCategories from "@/components/pages/home/FeaturedCategories";
import SesonalCollection from "@/components/pages/home/FeaturedProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laivaly | Fashion for Men, Women & Kids",
  description:
    "Discover the latest in fashion at Laivaly – your go-to destination for stylish, high-quality clothing for men, women, and kids. Enjoy fast delivery, secure checkout, and unbeatable prices.",
  openGraph: {
    title: "Laivaly – Shop the Latest Fashion Trends",
    description:
      "Explore Laivaly's trending collections for men, women, and kids. High-quality clothing, unbeatable prices, and fast delivery.",
    url: "https://laivaly.vercel.app/home",
    images: [
      {
        url: "/images/meta/home.png",
        width: 1200,
        height: 630,
        alt: "Laivaly Home Page",
      },
    ],
  },
  alternates: {
    canonical: "https://laivaly.vercel.app/home",
  },
};

const HomePage = async() => {

  // const [winterProducts] = await Promise.all([
  //   getAllProducts([
  //     {field: 'season', value: 'summer'},
  //     {field: 'season', value: 'all-season'},
  //     {field: 'limit', value: '15'},
  //   ]),
  //   getAllProducts([
  //     {field: 'season', value: 'winter'},
  //     {field: 'limit', value: '15'},
  //   ]),
  // ]) as TResponce[];

  return (
    <main>
      <Banner />
      <FeaturedCategories />
      <SesonalCollection />
    </main>
  );
};

export default HomePage;
