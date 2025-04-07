import { IoBagAddOutline } from "react-icons/io5";

type TArrivalCardProps = {
    productId: string;
    productImage: string;
    productTitle: string;
    productPrice: string;
}

const ArrivalCard = ({productId, productImage, productTitle, productPrice}: TArrivalCardProps) => {


    const handleAddToCart = (id: string) => {
        console.log(id);
    }


  return (
    <div>
      {/* Card image */}
      <div className="overflow-hidden rounded-xl shadow">
        <img className="" src={productImage} alt="" />
      </div>
      {/* Card title */}
      <div className="p-2 flex justify-between items-center">
        <div>
          <h2 className="text-lg">{productTitle}</h2>
          <h1 className="text-xl font-bold">$ {productPrice}</h1>
        </div>
        <button onClick={() => handleAddToCart(productId)} className="border-[2px] text-gray-600 w-fit flex justify-center items-center p-2 text-xl rounded-full cursor-pointer">
          <IoBagAddOutline />
        </button>
      </div>
    </div>
  );
};

export default ArrivalCard;
