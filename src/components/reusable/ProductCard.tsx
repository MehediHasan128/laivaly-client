import { currentUser } from "@/redux/features/auth/authSlice";
import {
  useAddWhislistMutation,
  useGetAllWhislistProductQuery,
} from "@/redux/features/wishlist/whislistApi";
import { useAppSelector } from "@/redux/hook";
import { TError, TProductData, TResponce } from "@/types";
import { IoMdHeartEmpty } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { toast } from "sonner";
import Spinner from "../ui/spinner";

const ProductCard = ({ data }: { data: TProductData }) => {
  // Calculte new arrival product
  const isNewArrival =
    (new Date().getTime() - new Date(data?.createdAt).getTime()) /
      (1000 * 60 * 60 * 24) <=
    1;
  const user = useAppSelector(currentUser);
  const userId = user?.userId;

  // get wishlist product
  const { data: favProducts, refetch } = useGetAllWhislistProductQuery(userId);
  const whislistProducts = favProducts?.data;

  const products = whislistProducts?.map(
    (product: { productId: string }) => product.productId
  );
  const favProductId = products?.map((item: { _id: string }) => item._id);

  // Handle add product whislist
  const [addWhislist, { isLoading }] = useAddWhislistMutation();
  const handleProductAddWishlist = async () => {
    const toastId = toast.loading(null);

    try {
      const res = (await addWhislist({
        userId: `${userId}`,
        productId: `${data?._id}`,
      }).unwrap()) as TResponce;
      refetch();
      toast.success(res?.message, { id: toastId, duration: 2000 });
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message, { id: toastId, duration: 3000 });
    }
  };

  return (
    <>
      <div className="rounded-lg overflow-hidden duration-1000">
        {/* Product image */}
        <div className="relative overflow-hidden">
          <NavLink to={`/productDetails/${data?._id}`}>
            <div className="relative group">
              <img
                className="rounded-t-lg lg:rounded-t-xl cursor-pointer transition-all duration-100"
                src={data?.thumbnail}
                alt=""
              />
              <img
                className="rounded-t-lg lg:rounded-t-xl cursor-pointer transition-all duration-1000 absolute top-0 left-0 w-full h-full opacity-0 group-hover:scale-105 group-hover:opacity-100"
                src={data?.images[1]}
                alt=""
              />
            </div>
          </NavLink>

          <div
            className={`${
              isNewArrival ? "block" : "hidden"
            } absolute top-5 left-2.5 text-sm font-medium bg-white/30 backdrop-blur-md px-2 rounded-full border border-white`}
          >
            <span>New Arrival</span>
          </div>

          <div className="text-sm lg:text-xl absolute top-5 right-5">
            {isLoading ? (
              <Spinner className="size-5" />
            ) : (
              <IoMdHeartEmpty
                onClick={handleProductAddWishlist}
                className={`${
                  favProductId?.includes(data?._id) && "text-red-700"
                } text-black text-2xl transition duration-300 cursor-pointer`}
              />
            )}
          </div>
        </div>

        {/* Product details */}
        <NavLink to={`/productDetails/${data?._id}`}>
          <div className="py-2 lg:py-3 px-2">
            <h1 className="text-base font-medium">{data?.title}</h1>

            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center text-gray-600">
              <h2 className="text-base font-medium">$ {data?.price}</h2>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default ProductCard;
