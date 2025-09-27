import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { canceledOrder } from "@/lib/api/orders/orders";
import { TError, TResponce } from "@/types/types";
import Spinner from "../reusable/Spinner";

interface TAlertProps {
  _id: string;
  orderId: string;
  orderDate: string;
  grandTotal: number;
}

const CancelOrderAlert = ({ alertProps }: { alertProps: TAlertProps }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const cancelOrderIntoDB = async (orderId: string) => {
    setLoading(true);
    const toastId = toast.loading("Loading");
    try {
      const res = (await canceledOrder(orderId)) as TResponce;
      toast.success(res?.message, { id: toastId });
      setLoading(false);
      router.refresh();
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message, { id: toastId });
      setLoading(false);
    }
    setDialogOpen(false);
  };

  return (
    <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <AlertDialogTrigger asChild>
        <button className="btn py-2.5 bg-white border text-black">
          Cancel Order
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to cancel this order?
          </AlertDialogTitle>
          <AlertDialogDescription className="font-semibold text-gray-800 leading-6 mt-3">
            OrderId: {alertProps.orderId} <br />
            Date: {alertProps.orderDate} <br />
            Total: ${alertProps.grandTotal}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => setDialogOpen(false)}
            className="cursor-pointer"
          >
            Keep Order
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={() => cancelOrderIntoDB(alertProps?._id)}
            className="bg-black hover:bg-black cursor-pointer"
          >
            {
                loading ? <Spinner /> : "Yes, Cancel Order"
            }
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CancelOrderAlert;
