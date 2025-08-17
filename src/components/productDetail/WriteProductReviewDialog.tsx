import { ReactNode } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Image from "next/image";
import LVForm from "../LVForm/LVForm";
import Ratings from "../reusable/Ratings";

const WriteProductReviewDialog = ({ children }: { children: ReactNode }) => {
  const handleAddReview = async () => {};

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="">Please share your experience</DialogTitle>

          <h1 className="text-sm font-medium">
            Solid Oxford Classic Button-Down Shirt
          </h1>

          <DialogDescription>
            Your feedback will help other shoppers make good choices, and well
            use it to improve our products.
          </DialogDescription>

          <div className="relative size-42 md:size-64 mx-auto mt-5">
            <Image
              src="/images/products/10.jpg"
              alt="product"
              quality={100}
              fill
            />
          </div>
        </DialogHeader>

        <div className="my-10">
          <LVForm onSubmit={handleAddReview}>
            <div>
              <div className="space-y-2">
                <h1>Ratings</h1>
                <Ratings value={0} size={180} />
              </div>
            </div>
          </LVForm>
        </div>

        <DialogFooter>
          <DialogClose asChild></DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WriteProductReviewDialog;
