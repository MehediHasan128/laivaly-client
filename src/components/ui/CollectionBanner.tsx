type TCollectionBannerProps = {
    bannerImage: string;
    promoCodeIcon: string;
    title?: {
        title1: string; 
        title2: string; 
    };
    message: string;
}

const CollectionBanner = ({bannerImage, promoCodeIcon, title, message}: TCollectionBannerProps) => {
  return (
    <div className="relative">
      <img className="h-46 md:h-52 lg:h-72 w-full brightness-75 rounded-2xl" src={bannerImage} alt="" />

      <div className="absolute top-0 w-full h-full px-5 md:px-10 lg:px-16 flex items-center text-white">
        <div className="md:space-y-2">
          <div className="flex items-center gap-2 lg:text-lg">
            <img
              src={promoCodeIcon}
              className="size-6 lg:size-8 invert brightness-0"
              alt=""
            />
            <h2>Use Promo Code</h2>
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold md:leading-10 lg:leading-14">
            {title?.title1} <br /> {title?.title2}
          </h1>

          <p className="text-sm text-gray-100 md:w-[70%]">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollectionBanner;
