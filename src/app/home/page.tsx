import Banner from "@/components/home/Banner";
import CustomerReview from "@/components/home/CustomerReview";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import NewArrival from "@/components/home/NewArrival";
import SesonalCollection from "@/components/home/SesonalCollection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Livaly-Home | Trendy & Affordable Fashion for Everyone",
  description: "Discover the latest in fashion at Laivaly – your go-to destination for stylish, high-quality clothing for men, women, and kids. Enjoy fast delivery, secure checkout, and unbeatable prices."
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