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
    <div className="mt-10 rounded-2xl overflow-hidden relative">
      <img className="h-72 w-full brightness-75" src={bannerImage} alt="" />

      <div className="absolute top-0 w-full h-full px-16 flex items-center text-white">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-lg">
            <img
              src={promoCodeIcon}
              className="size-8 invert brightness-0"
              alt=""
            />
            <h2>Use Promo Code</h2>
          </div>

          <h1 className="text-5xl font-bold leading-14">
            {title?.title1} <br /> {title?.title2}
          </h1>

          <p className="text-sm text-gray-100 w-[70%]">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollectionBanner;
