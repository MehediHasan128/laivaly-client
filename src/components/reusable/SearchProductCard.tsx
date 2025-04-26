type TProductDataProps = {
  thumbnail: string;
  title: string;
  price: string;
};

const SearchProductCard = ({thumbnail, title, price}: TProductDataProps) => {
  return (
    <div className="cursor-pointer">
      <img className="w-full" src={thumbnail} alt="" />
      <div className="hidden xl:flex justify-between font-medium my-1">
        <span>{title}</span>
        <span className="pr-5">$ {price}</span>
      </div>
    </div>
  );
};

export default SearchProductCard;
