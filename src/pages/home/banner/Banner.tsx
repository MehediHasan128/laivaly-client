import { BsTwitterX } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import Container from "@/components/reusable/Container";
import { FaInstagram, FaMeta } from "react-icons/fa6";
import banner from "../../../assets/images/banner/banner1.png";

const Banner = () => {
  return (
    <div className="bg-[#EDF4F2]">
      {/* Main Container */}
      <Container>
        <div className="flex justify-between items-center pt-10 md:pt-24 lg:pt-10">
          {/* Text Content */}
          <div className="hidden lg:flex space-y-3 xl:pl-10 2xl:pl-42">
            <div>
              {/* Main title */}
              <div className="space-y-2">
                <h1 className="xl:text-xl 2xl:text-3xl font-bold text-gray-900 leading-tight">
                  Elevate Your Style with
                </h1>
                <h1 className="xl:text-8xl 2xl:text-9xl font-bold text-[#31473A]">LAIVALY</h1>
                <p className="xl:text-lg 2xl:text-xl text-gray-600 xl:w-full 2xl:w-[80%] text-justify">
                  Discover trendsetting fashion made for confidence, comfort,
                  and culture. From streetwear to elegant fits — Laivaly
                  redefines everyday wear.
                </p>
              </div>

              {/* Social media icon */}
              <div className="xl:my-5 2xl:my-10 flex gap-5">
                {/* Meta ison */}
                <div className="border-2 border-[#31473A] text-[#31473A] p-2 text-2xl w-fit rounded-full hover:-translate-y-1 duration-700 cursor-pointer">
                  <FaMeta />
                </div>
                {/* Instagram ison */}
                <div className="border-2 border-[#31473A] text-[#31473A] p-2 text-2xl w-fit rounded-full hover:-translate-y-1 duration-700 cursor-pointer">
                  <FaInstagram />
                </div>
                {/* X ison */}
                <div className="border-2 border-[#31473A] text-[#31473A] p-2 text-2xl w-fit rounded-full hover:-translate-y-1 duration-700 cursor-pointer">
                  <BsTwitterX />
                </div>
              </div>

              {/* Shop Now button */}
              <button className="bg-[#31473A] px-6 xl:py-3 2xl:py-4 rounded-full text-white font-medium flex items-center gap-2 hover:translate-x-2 duration-700 cursor-pointer">
                Explore the Collection <BsArrowRight className="text-xl" />
              </button>
            </div>
          </div>

          {/* Image content */}
          <div className="md:w-[80%] xl:w-full 2xl:w-[61%] mx-auto">
            <img className="w-full h-full" src={banner} alt="bannerImage" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
