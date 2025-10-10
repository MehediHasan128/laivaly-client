import { SlDislike, SlLike } from "react-icons/sl";
import Ratings from "../../reusable/Ratings";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { TReviewData } from "@/types/review.type";
import { TUser } from "@/types/user";

const ProductReview = ({ review }: { review: TReviewData }) => {
  const { userId, rating, comment } = review;
  const { userName, userProfileURL } = userId as TUser;
  return (
    <div className="py-5 md:px-10 md:py-12 border-b space-y-2.5">
      <div className="flex items-center gap-2.5">
        <Avatar className="size-8 md:size-12">
          <AvatarImage src={userProfileURL} className="object-cover" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-sm md:text-base font-semibold">
            {userName?.firstName} {userName?.lastName}
          </h1>
          <Ratings value={rating} readonly />
        </div>
      </div>

      <div>
        <p className="text-xs md:text-sm text-gray-600 text-justify">
          {comment}
        </p>
      </div>

      <div className="flex items-center gap-5 font-semibold text-gray-600">
        <span className="flex items-center gap-1.5 cursor-pointer">
          <SlLike />
          <span>20</span>
        </span>
        <span className="flex items-center gap-1.5 cursor-pointer">
          <SlDislike />
          <span>0</span>
        </span>
      </div>
    </div>
  );
};

export default ProductReview;
