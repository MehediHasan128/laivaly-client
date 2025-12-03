import { ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import Image from "next/image";
import LVForm from "../../LVForm/LVForm";
import Ratings from "../../reusable/Ratings";
import LVTextArea from "../../LVForm/LVTextArea";
import { Label } from "../../ui/label";
import LVInput from "../../LVForm/LVInput";
import { FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { addProductReview } from "@/lib/api/review/review";
import { TError, TResponce } from "@/types/types";
import Spinner from "@/components/reusable/Spinner";

const WriteProductReviewDialog = ({
  children,
  productTitle,
  productImage,
  userId,
  productReviewId,
}: {
  children: ReactNode;
  productTitle: string;
  productImage: string;
  userId: string;
  productReviewId: string;
}) => {
  const [rating, setRating] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const router = useRouter();

  const handleAddReview = async (data: FieldValues) => {
    setLoading(true)
    const reviewData = {
      userId,
      rating,
      comment: data?.comment,
    };

    const formData = new FormData();
    formData.append('data', JSON.stringify(reviewData))

    try {
      const res = (await addProductReview({
        reviewId: productReviewId,
        formData,
      })) as TResponce;
      if (res.success) {
        router.refresh();
        setOpenDialog(false)
      }
      setLoading(false);
    } catch (err) {
      const toastId = toast.loading("Loading");
      const error = err as TError;
      toast.error(error?.data?.message, { id: toastId });
      setLoading(false);
    }
  };

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="md:max-w-2xl lg:max-w-3xl xl:max-w-4xl h-[80vh] md:h-[90vh] overflow-scroll scrollbar-hide">
        <DialogHeader>
          <DialogTitle>Please share your experience</DialogTitle>

          <h1 className="text-sm font-medium">{productTitle}</h1>

          <DialogDescription>
            Your feedback will help other shoppers make good choices, and well
            use it to improve our products.
          </DialogDescription>

          <div className="relative mt-5 mx-auto md:mx-0 h-64 md:h-80 w-[80%] md:w-[50%] lg:w-[45%] xl:w-[40%] border rounded-md overflow-hidden">
            <Image src={productImage} alt="product" quality={100} fill />
          </div>
        </DialogHeader>

        <div className="my-10">
          <LVForm onSubmit={handleAddReview}>
            <div className="space-y-10">
              <div className="space-y-2">
                <Label className="text-sm md:text-base">Rating</Label>
                <Ratings size={170} setRating={setRating} value={rating} />
              </div>

              <div className="space-y-1">
                <Label className="text-sm md:text-base">Review</Label>
                <LVTextArea
                  name="comment"
                  placeholder="Type your experience"
                  className="min-h-32 md:min-h-42"
                />
                <p className="text-xs md:text-sm font-medium">
                  Make your review great: Describe what you liked, what you
                  didn’t like, and other key things shoppers should know
                </p>
              </div>

              <div>
                <Label className="text-sm md:text-base">Photo</Label>
                <LVInput type="file" name="image" />
              </div>

              <div>
                <button className="bg-black text-white rounded cursor-pointer w-full md:w-[30%] py-3 flex justify-center">
                  {
                    loading ? <Spinner /> : "Submit"
                  }
                </button>
              </div>
            </div>
          </LVForm>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WriteProductReviewDialog;
