/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import Searchbar from "../../shared/navbar/searchBar/Searchbar";
import { grateVibes, smoochsans } from "@/styles/font";

const Banner = () => {
  const [searchBarOpen, setSearchBarOpen] = useState<boolean>(false);

  return (
    <main>
      {/* Text and Image constent */}
      <div>
        <div className="px-2">
          <Searchbar
            searchBarOpen={searchBarOpen}
            setSearchBarOpen={setSearchBarOpen}
          >
            <div className="lg:hidden relative mb-3">
              <input
                disabled
                type="text"
                placeholder="Search for Pre Order"
                className="border rounded-full outline-none focus:border-black w-full px-3 py-2 text-sm"
              />
              <span className="absolute top-0 right-0 rounded-full w-full flex justify-end items-center h-full px-5">
                <Search />
              </span>
            </div>
          </Searchbar>
        </div>
        <div className="h-[70vh] lg:h-[100vh] relative">
          <img
            src="/images/banner/bg4.jpg"
            alt="banner"
            className="size-full object-cover object-top brightness-75"
          />
          <div className="absolute top-0 h-full w-full flex justify-center items-end py-16 text-white">
            <div className="text-center space-y-4 xl:space-y-10">
              <p className="text-xs md:text-base">MEN</p>
              <h1 className="text-2xl lg:text-3xl">
                Pre-order Now: Men&apos;s Spring-Summer 2026 Show
              </h1>
              <p className="text-xs md:text-base underline">
                Explore Collection
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Laivaly brand banner */}
      <div className="w-full bg-black text-white px-5 py-3 lg:mt-0">
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
        <div className="h-[400px] md:h-[600px] 2xl:h-[900px] overflow-hidden relative">
          <video
            src="/videos/banner2.mp4"
            loop
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 w-full h-full text-white bg-gradient-to-t from-[#000000cf] to-[#0000]">
            <div className="flex flex-col justify-end items-center gap-0.5 md:gap-2.5 xl:gap-5 h-full p-5 2xl:p-10">
              <p className="text-xs md:text-base">Men, Women</p>
              <h1 className="text-xl md:text-2xl xl:text-4xl">
                Fall Winter - 2025
              </h1>
              <p className="underline cursor-pointer text-xs md:text-sm xl:text-base">
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
