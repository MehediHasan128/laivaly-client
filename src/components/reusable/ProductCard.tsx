import { currentUser } from "@/redux/features/auth/authSlice";
import { useAddWhislistMutation } from "@/redux/features/wishlist/whislistApi";
import { useAppSelector } from "@/redux/hook";
import { TError, TResponce } from "@/types";
import { IoMdHeartEmpty } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { toast } from "sonner";

const ProductCard = ({ data }) => {
  // Calculte new arrival product
  const isNewArrival =
    (new Date().getTime() - new Date(data?.createdAt).getTime()) /
      (1000 * 60 * 60 * 24) <=
    1;

  // Handle add product whislist
  const user = useAppSelector(currentUser);
  const userId = user?.userId;
  const [addWhislist, { isLoading }] =
    useAddWhislistMutation();
  const handleProductAddWishlist = async () => {
    const toastId = toast.loading(null);

    try {

      const res = (await addWhislist({
        userId: `${userId}`,
        productId: `${data?._id}`,
      }).unwrap()) as TResponce;
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
            <IoMdHeartEmpty
              onClick={handleProductAddWishlist}
              className={`text-black text-2xl transition duration-300 cursor-pointer`}
            />
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
