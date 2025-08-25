import Banner from "@/components/pages/home/Banner";
import CustomerReview from "@/components/pages/home/CustomerReview";
import FeaturedCategories from "@/components/pages/home/FeaturedCategories";
import NewArrival from "@/components/pages/home/NewArrival";
import SesonalCollection from "@/components/pages/home/SesonalCollection";
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

const HomePage = () => {
  return (
    <main>
      <Banner />
      <FeaturedCategories />
      <NewArrival />
      <SesonalCollection />
      <CustomerReview />
    </main>
  );
};

export default HomePage;
