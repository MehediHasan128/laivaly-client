/* eslint-disable @next/next/no-img-element */
import { Great_Vibes, Smooch_Sans } from "next/font/google";
import React from "react";
import Button from "../reusable/Button";
import { Search } from "lucide-react";

const smoochsans = Smooch_Sans({
  subsets: ["latin"],
  variable: "--font-smoochsans",
});

const grateVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-grateVibes",
});

const Banner = () => {
  return (
    <main className="mt-5 xl:mt-10">
      {/* Text and image content */}
      <div className="md:px-5 flex flex-col-reverse xl:flex-row md:gap-5 xl:gap-0">
        {/* Main Content */}
        <div className="xl:w-[40%] xl:relative px-3 md:px-0">
          <h1
            className={`${smoochsans.className} text-7xl md:text-[120px] xl:text-[100px] 2xl:text-9xl font-extrabold md:leading-24 xl:leading-0`}
          >
            <span className="xl:absolute xl:top-[20%] left-[5%]">
              Unleash Fashion
            </span>{" "}
            <br />
            <span className="xl:absolute text-4xl md:text-5xl xl:text-4xl top-[30%] xl:top-[30%] left-[25%] 2xl:left-[30%]">
              With
            </span>
            <span className="xl:absolute xl:top-[35%] left-[40%] ml-3 md:ml-5 xl:ml-0">
              Laivaly.
            </span>
          </h1>
          <p className="gray-text xl:text-sm xl:absolute xl:top-[50%] left-[10%] w-[90%] xl:w-[80%] text-justify my-3 md:my-5 xl:my-0">
            Step into elegance with our latest fashion collections, crafted to
            empower your everyday look. From casual wear to statement pieces,
            Laivaly brings you trend-forward designs without compromising
            comfort. Style that speaks – only at Laivaly.
          </p>

          <div className="xl:absolute xl:top-[70%] 2xl:top-[65%] left-[10%] flex gap-5">
            <Button buttonTitle="Buy Products" className="rounded-lg" />
            <Button
              buttonTitle="See Products"
              className="rounded-lg bg-white text-black hover:text-white hover:bg-black"
            />
          </div>
        </div>

        {/* Image Content */}
        <div className="xl:w-[60%] bg-gray-100 rounded-2xl relative xl:block">
          <img
            className="w-[80%] mx-auto"
            src="/images/banner/banner.png"
            alt="bannerImage"
          />
          <div className="lg:hidden absolute top-0 w-full h-full flex justify-center items-center md:items-start py-10 ">
            <div className="w-[80%] md:w-[70%] relative">
              <input
                type="text"
                placeholder="Search for Pre Order"
                className="search-input bg-gray-200 w-full shadow-xl py-1.5 md:py-3 text-sm md:text-base px-5"
              />
              <div className="cursor-pointer absolute top-0 right-0 px-5 h-full item-flex">
                <Search width={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Laivaly marquee content */}
      <div className="w-full bg-black text-white px-3 md:px-5 py-2.5 md:py-3 2xl:py-5 mt-5 xl:mt-0">
        <div className="flex gap-3 md:gap-10 items-center overflow-hidden text-xs md:text-xl 2xl:text-2xl font-semibold">
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className="flex items-center gap-3 md:gap-10">
              <h1 className={`${grateVibes.className} text-lg md:text-3xl`}>L</h1>
              <p>Laivaly</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Banner;
