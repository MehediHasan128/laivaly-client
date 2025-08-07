

const FeaturedCategories = () => {
  return (
    <div>
      <div className="2xl:h-[800px] overflow-hidden relative">
        <video src="/videos/banner.mp4" loop autoPlay muted playsInline />
        <div className="absolute top-0 w-full h-full text-white bg-gradient-to-t from-[#000000] to-[#0000]">
            <div className="flex flex-col justify-end items-center gap-0.5 2xl:gap-5 h-full p-2 2xl:p-10">
                <p className="text-[8px] 2xl:text-sm">Men, Women</p>
                <h1 className="2xl:text-4xl font-light">Fall Winter - 2025</h1>
                <p className="underline cursor-pointer text-[10px] 2xl:text-base">Discover All Collection</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
