type TFeaturedCardProps = {
  productImage: string;
  productCategory: string;
  description: string;
};

const FeaturedCard = ({
  productImage,
  productCategory,
  description,
}: TFeaturedCardProps) => {
  return (
    <div className="relative rounded-lg md:rounded-2xl overflow-hidden group cursor-pointer">
      {/* Product Image */}
      <img
        className="w-full h-full grayscale-100 group-hover:grayscale-0 brightness-75 group-hover:scale-110 duration-1000"
        src={productImage}
        alt=""
      />

      {/* Product category */}
      <div className="absolute top-0 w-full h-full flex justify-center items-center text-xl lg:text-3xl font-semibold text-white duration-1000">
        <h1>{productCategory}</h1>
      </div>

      {/* overlay effect */}
      <div className="absolute xl:top-[150px] 2xl:top-[215px] inset-0 flex justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded">
        <div className="transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000">
          <div className="text-2xl 2xl:w-[70%] mx-auto text-center space-y-1 2xl:space-y-3 text-white">
            <p className="text-sm font-semibold">{description}</p>
            <button className="bg-[#31473A] text-sm 2xl:text-base px-3 py-1 2xl:px-5 2xl:py-1.5 rounded-full">
              Explore Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
