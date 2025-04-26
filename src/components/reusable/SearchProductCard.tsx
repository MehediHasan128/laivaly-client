import product from '../../assets/images/product/product6.jpg';

const SearchProductCard = () => {
  return (
    <div className="cursor-pointer">
      <img className="w-full" src={product} alt="" />
      <div className="hidden xl:flex justify-between font-medium my-1">
        <span>Winter Jacket</span>
        <span className='pr-5'>$ 50.25</span>
      </div>
    </div>
  );
};

export default SearchProductCard;
