import Banner from "@/components/home/Banner";
import FeaturedCategories from "@/components/home/FeaturedCategories";
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
        </main>
    );
};

export default HomePage;