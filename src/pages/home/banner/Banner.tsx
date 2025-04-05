import { BsTwitterX } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import Container from "@/components/ui/Container";
import { FaInstagram, FaMeta } from "react-icons/fa6";
import banner from "../../../assets/images/banner/Banner2.png";

const Banner = () => {
  return (
    <div className="bg-[#EDF4F2]">
      <Container>
        <div className="flex justify-between items-center pt-10">
          <div className="flex-grow space-y-3 pl-32">
            {/* Main title */}
            <div>
              <h2 className="text-4xl ">Welcome to,</h2>
              <h1 className="text-9xl font-bold text-[#31473A]">LAIVALY</h1>
              <h2 className="text-3xl leading-10">
                Where style meets simplicity. Discovere minimalistic <br />{" "}
                designs for every occasion.
              </h2>
            </div>

            {/* Social media icon */}
            <div className="my-10 flex gap-5">
              <div className="border-2 border-[#31473A] text-[#31473A] p-2 text-2xl w-fit rounded-full hover:-translate-y-2 duration-700 cursor-pointer">
                <FaMeta />
              </div>
              <div className="border-2 border-[#31473A] text-[#31473A] p-2 text-2xl w-fit rounded-full hover:-translate-y-2 duration-700 cursor-pointer">
                <FaInstagram />
              </div>
              <div className="border-2 border-[#31473A] text-[#31473A] p-2 text-2xl w-fit rounded-full hover:-translate-y-2 duration-700 cursor-pointer">
                <BsTwitterX />
              </div>
            </div>

            {/* Shop Now button */}
            <button className="bg-[#31473A] px-6 py-3 rounded-full text-white flex items-center gap-2 hover:translate-x-2 duration-700 cursor-pointer">Shop Now <BsArrowRight className="text-xl" /></button>
          </div>

          <div className="w-[40%] mx-auto">
            <img className="w-full h-full" src={banner} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
