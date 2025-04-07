type TFeaturedCardProps = {
  productImage: string;
  productCategory: string;
  description: string;
};

const FeaturedCard = ({ productImage, productCategory, description }: TFeaturedCardProps) => {
  return (
    <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
      <img className="w-full h-full" src={productImage} alt="" />

      <div className="absolute inset-0 flex items-center justify-center bg-[#00000060] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded">
        <div className="transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
          <div className="text-2xl font-semibold text-white w-[70%] mx-auto text-center space-y-3">
            <h1>{productCategory}</h1>
            <p className="text-xs font-medium text-gray-200">
              {description}
            </p>
            <button className="border border-[#5b8f70] text-sm font-medium px-3 py-1.5 rounded-full cursor-pointer hover:bg-[#5b8f70] hover:text-black hover:border-[#5b8f70] duration-500">Explore Collection</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
