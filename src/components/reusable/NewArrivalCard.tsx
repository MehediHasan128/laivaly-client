import Image from "next/image";

const NewArrivalCard = () => {
  return (
    <div className="rounded-lg overflow-hidden">
      
      {/* Product Image */}
      <div className="h-64 xl:h-72 2xl:h-96">
          <div className="relative h-full">
            <Image src="/images/products/1.jpg" alt="productImage" fill className="object-cover rounded-lg" />
          </div>
      </div>

      {/* Product Info */}
      <div className="p-2 font-semibold flex justify-between items-start text-xs md:text-sm lg:text-xs xl:text-base">
        <h1>Exclusive Jacket</h1>
        <h1>$59.00</h1>
      </div>

    </div>
  );
};

export default NewArrivalCard;
