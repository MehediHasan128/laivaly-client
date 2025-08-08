/* eslint-disable @next/next/no-img-element */
"use client";

import { Great_Vibes, Smooch_Sans } from "next/font/google";
import React, { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import Searchbar from "../shared/navbar/searchBar/Searchbar";

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
  const [searchBarOpen, setSearchBarOpen] = useState<boolean>(false);

  return (
    <main>
      {/* Text and Image constent */}
      <div className="px-2 lg:px-5 pt-2 lg:pt-5">
        {/* Main div */}
        <div className="flex flex-col-reverse lg:flex-row">
          {/* Text Content */}
          <div className="flex justify-center items-center lg:w-[40%]">
            <div>
              <div className="lg:relative">
                <h1
                  className={`${smoochsans.className} font-extrabold text-7xl md:text-9xl lg:text-7xl xl:text-8xl 2xl:text-9xl`}
                >
                  <span>Unleash Fashion</span> <br />
                  <span className="flex items-start gap-5 lg:absolute md:left-[10%] xl:left-[8%] 2xl:left-[10%]">
                    <span className="text-4xl md:text-6xl lg:text-4xl xl:text-6xl">
                      With
                    </span>
                    <span className="text-9xl md:text-[240px] lg:text-[130px] xl:text-[180px] 2xl:text-[240px]">
                      Laivaly
                    </span>
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
          <div className="lg:w-[60%]">
            {/* Small device search input */}
            <Searchbar
              searchBarOpen={searchBarOpen}
              setSearchBarOpen={setSearchBarOpen}
            >
              <div className="lg:hidden mb-2 relative">
                <input
                  disabled
                  type="text"
                  placeholder="Search for Pre Order"
                  className="border rounded-full outline-none focus:border-black w-full p-3 text-sm"
                />
                <span className="absolute top-0 right-0 rounded-full w-full flex justify-end items-center h-full px-5 size-16">
                  <Search />
                </span>
              </div>
            </Searchbar>

            {/* Banner image */}
            <div className="overflow-hidden bg-gray-100 rounded-t-2xl">
              <div className="mx-auto lg:w-[90%] xl:w-[80%] mt-10">
                <img src="/images/banner/banner.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Laivaly brand banner */}
      <div className="w-full bg-black text-white px-5 py-3 mt-5 lg:mt-0">
        <div className="flex gap-4 md:gap-8 lg:gap-5 xl:gap-8 overflow-hidden">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="flex gap-4 md:gap-8 lg:gap-5 xl:gap-8 md:text-2xl lg:text-xl xl:text-3xl font-bold"
            >
              <h1
                className={`${grateVibes.className} text-xl md:text-3xl lg:text-xl xl:text-3xl`}
              >
                L
              </h1>
              <p className={`${smoochsans.className}`}>Laivaly</p>
            </div>
          ))}
        </div>
      </div>

      {/* Video banner */}
      <div>
        <div className="2xl:h-[800px] overflow-hidden relative">
          <video src="/videos/banner.mp4" loop autoPlay muted playsInline />
          <div className="absolute top-0 w-full h-full text-white bg-gradient-to-t from-[#000000] to-[#0000]">
            <div className="flex flex-col justify-end items-center gap-0.5 2xl:gap-5 h-full p-2 2xl:p-10">
              <p className="text-[8px] 2xl:text-sm">Men, Women</p>
              <h1 className="2xl:text-4xl font-light">Fall Winter - 2025</h1>
              <p className="underline cursor-pointer text-[10px] 2xl:text-base">
                Discover All Collection
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
