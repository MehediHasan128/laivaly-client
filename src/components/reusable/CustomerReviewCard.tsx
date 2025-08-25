import Image from "next/image";
import { RiDoubleQuotesR } from "react-icons/ri";

interface TCustomerReviewCardProps {
  imageURL: string;
  name: string;
  comment: string;
  active?: boolean;
}

const CustomerReviewCard = ({
  imageURL,
  name,
  comment,
  active,
}: TCustomerReviewCardProps) => {
  return (
    <div
      className={`border-l-4 lg:border-l-8 ${
        active ? "border-black" : "border-gray-300"
      } bg-accent p-5 md:px-10 md:py-8`}
    >
      <div className="flex flex-row items-center gap-5 lg:gap-10">
        <div className="relative size-20 lg:size-28 2xl:size-32 mx-auto rounded-full overflow-hidden">
          <Image
            src={imageURL}
            alt={name}
            quality={100}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 space-y-1 md:space-y-2">
          <span className="text-sm md:text-xl font-bold flex gap-2">
            <h1>{name}</h1>
            <span className="text-xl md:text-3xl">
              <RiDoubleQuotesR />
            </span>
          </span>
          <p className="font-medium text-gray-700 text-justify text-xs md:text-sm">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewCard;
