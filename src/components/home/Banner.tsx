/* eslint-disable @next/next/no-img-element */
import { Great_Vibes, Smooch_Sans } from "next/font/google";
import React from "react";
import Button from "../reusable/Button";
import { ArrowRight, Search } from "lucide-react";

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
    <main>
      {/* Text and Image constent */}
      <div className="px-2 lg:px-5 pt-2 lg:pt-5">
        {/* Main div */}
        <div className="flex flex-col-reverse lg:flex-row gap-5">
          {/* Text Content */}
          <div className="flex justify-center items-center lg:w-[40%]">
            <div>
              <div className="lg:relative">
                <h1
                  className={`${smoochsans.className} font-extrabold text-7xl md:text-9xl lg:text-7xl xl:text-8xl 2xl:text-9xl`}
                >
                  <span>Unleash Fashion</span> <br />
                  <span className="flex items-start gap-5 lg:absolute md:left-[10%] xl:left-[8%] 2xl:left-[10%]">
                    <span className="text-4xl md:text-6xl lg:text-4xl xl:text-6xl">With</span>
                    <span className="text-9xl md:text-[240px] lg:text-[130px] xl:text-[180px] 2xl:text-[240px]">Laivaly</span>
                  </span>
                </h1>
              </div>
              <div className="xl:px-10 mt-5 lg:mt-36 xl:mt-48 2xl:mt-64">
                <p className="gray-text text-justify w-[95%] lg:w-[100%] 2xl:w-[80%] lg:text-sm xl:text-base mb-5 md:mb-10 lg:mb-8 xl:mb-7 2xl:mb-10">
                  Step into elegance with our latest fashion collections,
                  crafted to empower your everyday look. From casual wear to
                  statement pieces, Laivaly brings you trend-forward designs
                  without compromising comfort. Style that speaks – only at
                  Laivaly.
                </p>
                <div className="flex gap-3 md:gap-5">
                  <button className="bg-black text-white text-xs md:text-base lg:text-sm  cursor-pointer border border-black rounded-full flex items-center gap-5 lg:gap-3 xl:gap-5 pl-5 pr-1 py-1 md:py-1.5 lg:py-1">
                    Shop Now
                    <div className="bg-white w-fit rounded-full text-black p-1.5 md:p-2.5 lg:p-1.5 xl:p-2.5">
                      <ArrowRight size={16} />
                    </div>
                  </button>
                  <button className="text-xs bg-accent md:text-base lg:text-sm  cursor-pointer border border-black rounded-full flex items-center gap-5 lg:gap-3 xl:gap-5 pl-5 pr-1 py-1 md:py-1.5 lg:py-1">
                    Explore Collection
                    <div className="bg-black w-fit rounded-full text-white p-1.5 md:p-2.5 lg:p-1.5 xl:p-2.5">
                      <ArrowRight size={16} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="bg-gray-100 rounded-t-2xl lg:w-[60%]">
            {/* Banner image */}
            <div className="overflow-hidden mx-auto lg:w-[90%] xl:w-[80%] mt-10">
              <img src="/images/banner/banner.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Laivaly brand banner */}
      <div className="w-full bg-black text-white px-5 py-3 mt-5 lg:mt-0">
        <div className="flex gap-4 md:gap-8 lg:gap-5 xl:gap-8 overflow-hidden">
          {
            Array.from({length: 20}).map((_, index) => (
              <div key={index} className="flex gap-4 md:gap-8 lg:gap-5 xl:gap-8 md:text-2xl lg:text-xl xl:text-3xl font-bold">
                <h1 className={`${grateVibes.className} text-xl md:text-3xl lg:text-xl xl:text-3xl`}>L</h1>
                <p className={`${smoochsans.className}`}>Laivaly</p>
              </div>
            ))
          }
        </div>
      </div>
    </main>
  );
};

export default Banner;
