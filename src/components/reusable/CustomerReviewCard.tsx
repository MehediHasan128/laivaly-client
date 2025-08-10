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
      className={`border-l-8 ${
        active ? "border-black" : "border-gray-300"
      } bg-accent rounded-md px-10 py-8`}
    >
      <div className="flex gap-10">
        <div className="relative size-32 rounded-full overflow-hidden">
          <Image
            src={imageURL}
            alt={name}
            quality={100}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 space-y-2">
          <span className="text-2xl font-bold flex gap-2">
            <h1>{name}</h1>
            <span className="text-3xl">
              <RiDoubleQuotesR />
            </span>
          </span>
          <p className="font-medium text-justify">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewCard;
