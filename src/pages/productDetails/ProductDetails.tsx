import Container from "@/components/reusable/Container";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { GoDotFill, GoShareAndroid } from "react-icons/go";
import { IoBagHandleOutline } from "react-icons/io5";
import { PiChats } from "react-icons/pi";
import { useEffect, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import { Rate } from "antd";
import { Progress } from "@/components/ui/progress";
import CustomerReview from "@/components/reusable/CustomerReview";
import ProductCard from "@/components/reusable/ProductCard";
import { FiMinus, FiPlus } from "react-icons/fi";
import {
  useGetSimillerProductQuery,
  useGetSingleProductQuery,
} from "@/redux/features/product/productApi";
import { TError, TProductData, TResponce, TUserReview } from "@/types";
import { useAppSelector } from "@/redux/hook";
import { currentUser } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
import {
  useAddWhislistMutation,
  useGetSingleProductFromWhislistQuery,
} from "@/redux/features/wishlist/whislistApi";
import { Textarea } from "@/components/ui/textarea";
import {
  useAddUserCommentMutation,
  useGetAllUserReviewQuery,
} from "@/redux/features/reviews/reviewApi";
import Spinner from "@/components/ui/spinner";

const ProductDetails = () => {
  // get product id use params
  const id = useParams();

  // Get product data
  const { data: product } = useGetSingleProductQuery(id?.productId);
  const productData = product?.data;

  // Manage ratings, comment, color, product size, quantity or main image state
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [color, setColor] = useState("green");
  const [productSize, setProductSize] = useState(productData?.sizes[0]);
  const [quantity, setQuantity] = useState(0);
  const [mainImg, setMainImg] = useState<string | undefined>(undefined);

  // Get all similer data
  const { data: allSimillerProduct } = useGetSimillerProductQuery([
    productData?.targetAudience,
    productData?.subCategory,
    productData?._id,
  ]);
  const simillerProducts = allSimillerProduct?.data;

  // Get main thumbnail image
  useEffect(() => {
    if (productData?.thumbnail) {
      setMainImg(productData?.thumbnail);
    }
  }, [productData]);

  // Get user id
  const user = useAppSelector(currentUser);
  const userId = user?.userId;

  // Product add to whislist
  const [addWhislist] = useAddWhislistMutation();
  const { data: WhislistProduct } = useGetSingleProductFromWhislistQuery([
    userId,
    productData?._id,
  ]);
  const isProductAddToWhislist = WhislistProduct?.data;
  const handleAddToWhishList = async () => {
    const whislistInfo = {
      userId,
      productId: productData?._id,
    };

    const toastId = toast.loading(null);

    try {
      const res = (await addWhislist(whislistInfo).unwrap()) as TResponce;
      toast.success(res?.message, { id: toastId, duration: 2000 });
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message, { id: toastId, duration: 3000 });
    }
  };

  // Get all user reviews
  const { data: customerReviews, refetch } = useGetAllUserReviewQuery(
    productData?._id
  );
  const resviews = customerReviews?.data;
  const ratings = resviews?.ratings;
  const allUserReview = resviews?.reviews;

  // Add user review
  const [addUserComment, { isLoading: cmntLoading }] =
    useAddUserCommentMutation();
  const handleAddComment = async () => {
    const reviews = {
      customerId: userId,
      rating,
      comment,
    };
    const toastId = toast.loading(null);
    try {
      const res = (await addUserComment([
        reviews,
        productData?._id,
      ]).unwrap()) as TResponce;
      refetch();
      toast.success(res?.message, { id: toastId, duration: 2000 });
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message, { id: toastId, duration: 3000 });
    }
  };

  return (
    <div className="min-h-screen pb-8 md:pt-12 bg-gray-100">
      {/* Details container */}
      <Container>
        {/* Main comtainer */}
        <div className="flex flex-col md:flex-row items-start gap-5 xl:gap-10">
          {/* Image section */}
          <div className="md:w-[35%]">
            <div className="flex flex-col lg:flex-row-reverse gap-2 ">
              <div className="relative xl:w-[80%]">
                <img
                  className="h-[450px] md:h-[430px] lg:h-full w-full"
                  src={mainImg}
                />
                <div className="md:hidden flex justify-between items-center text-2xl px-3 absolute top-3 w-full">
                  <FaArrowLeft />
                  <div className="flex items-center gap-3.5">
                    <IoMdHeartEmpty />
                    <GoShareAndroid />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 lg:flex flex-row lg:flex-col gap-2 xl:w-[20%]">
                {productData?.images?.map((img: string, idx: number) => (
                  <img
                    key={idx}
                    onClick={() => setMainImg(img)}
                    className={`object-cover cursor-pointer border-2 ${
                      mainImg === img ? "border-[#31473A]" : "border-gray-200"
                    }`}
                    src={img}
                    alt=""
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Details section */}
          <div className="md:w-[60%]">
            <div>
              {/* Product Title */}
              <h1 className="font-semibold text-xl md:text-2xl 2xl:text-3xl">
                {productData?.title}
              </h1>

              {/* Product Description */}
              <div className="text-gray-600 font-medium text-justify text-sm md:text-base 2xl:text-lg my-2 2xl:my-5">
                <p>
                  {productData?.description}
                  <span className="text-blue-700 ml-3 cursor-pointer">
                    Read More.
                  </span>
                </p>
              </div>

              {/* Product review */}
              <div className="flex gap-3 my-3">
                <h1 className="flex items-end gap-1.5 text-base lg:text-xl font-bold">
                  5K{" "}
                  <span className="text-base font-medium text-gray-700">
                    (Sold)
                  </span>{" "}
                  <span className="text-xs lg:text-xs">
                    <GoDotFill />
                  </span>
                </h1>
                <h1 className="flex items-end gap-1.5">
                  <span className="flex items-center gap-1.5 text-base lg:text-xl font-bold">
                    <FaStar className="text-yellow-600" /> 4.8
                  </span>
                  <span className="text-base font-medium text-gray-700">
                    (255 reviews)
                  </span>
                </h1>
              </div>

              {/* Product Price */}
              <div className="my-5">
                <h1 className="font-bold text-2xl 2xl:text-4xl">
                  $
                  {(
                    productData?.price -
                    productData?.price * (productData?.discount / 100)
                  ).toFixed(2)}{" "}
                  <sub className="line-through font-medium text-red-800 2xl:text-2xl">
                    ${productData?.price}
                  </sub>
                </h1>
              </div>

              {/* Product color */}
              <div className="">
                <h1 className="hidden 2xl:block text-lg font-medium mb-1.5">
                  Color:
                </h1>

                <div className="flex gap-2">
                  <div
                    onClick={() => setColor("red")}
                    className={`${
                      color === "red" ? "border-black" : "border-transparent"
                    } w-fit p-0.5 rounded-full border-2 cursor-pointer`}
                  >
                    <div className="bg-red-800 size-6 lg:size-8 rounded-full"></div>
                  </div>
                  <div
                    onClick={() => setColor("green")}
                    className={`${
                      color === "green" ? "border-black" : "border-transparent"
                    } w-fit p-0.5 rounded-full border-2 cursor-pointer`}
                  >
                    <div className="bg-green-800 size-6 lg:size-8 rounded-full"></div>
                  </div>
                  <div
                    onClick={() => setColor("blue")}
                    className={`${
                      color === "blue" ? "border-black" : "border-transparent"
                    } w-fit p-0.5 rounded-full border-2 cursor-pointer`}
                  >
                    <div className="bg-blue-800 size-6 lg:size-8 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Product size */}
              <div className="my-5">
                <h1 className="hidden 2xl:block text-lg font-medium mb-1.5">
                  Size:
                </h1>

                <div className="flex gap-3 text-xs font-medium">
                  {productData?.sizes.map((size: string, idx: number) => (
                    <div
                    key={idx}
                      onClick={() => setProductSize(size)}
                      className="border border-gray-500 rounded overflow-hidden cursor-pointer"
                    >
                      <div
                        className={`${
                          productSize === size
                            ? "bg-[#31473A] text-white"
                            : "bg-transparent"
                        } size-6 lg:size-8 flex justify-center items-center`}
                      >
                        {size}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product quantity */}
              <div className="">
                <h1 className="hidden lg:flex text-lg font-medium mb-1.5">
                  Quantity
                </h1>

                <div className="flex items-center gap-2">
                  <span
                    onClick={() => quantity > 0 && setQuantity(quantity - 1)}
                    className="bg-gray-200 font-semibold p-2 rounded active:scale-95 transition transform duration-100 cursor-pointer text-sm md:text-base"
                  >
                    <FiMinus />
                  </span>
                  <span className="w-16 text-center text-lg lg:text-xl font-semibold">
                    {quantity}
                  </span>
                  <span
                    onClick={() => setQuantity(quantity + 1)}
                    className="bg-gray-200 font-semibold p-2 rounded active:scale-95 transition transform duration-100 cursor-pointer text-sm  md:text-base"
                  >
                    <FiPlus />
                  </span>
                </div>
              </div>

              {/* Cart or buy button */}
              <div className="flex gap-3 font-medium my-5 2xl:my-10">
                <button className="bg-[#31473A] hover:bg-[#1d2c23] border border-[#31473A] w-full flex justify-center items-center gap-2 rounded text-white text-sm 2xl:text-base py-2 xl:py-2.5 2xl:py-3">
                  <IoBagHandleOutline className="text-xl 2xl:text-2xl" /> Add to
                  Cart
                </button>

                <button className="border border-[#31473A] w-full flex justify-center items-center gap-2 rounded text-[#31473A] text-sm 2xl:text-base py-2 xl:py-2.5 2xl:py-3">
                  Buy Now
                </button>
              </div>

              <div className="flex justify-around items-center">
                <div className="lg:text-xl flex items-center gap-1.5">
                  <PiChats className="text-xl lg:text-2xl" />
                  <h1>Chat</h1>
                </div>

                <div className="border-l h-10 border-gray-300"></div>

                <button
                  onClick={handleAddToWhishList}
                  className={`${
                    isProductAddToWhislist?.productId === productData?._id &&
                    "text-red-800"
                  } lg:text-xl flex items-center gap-1.5 cursor-pointer`}
                >
                  <IoMdHeartEmpty className="text-xl lg:text-2xl" />
                  <h1>Whislist</h1>
                </button>

                <div className="border-l h-10 border-gray-300"></div>

                <div className="lg:text-xl flex items-center gap-1.5">
                  <GoShareAndroid className="text-xl lg:text-2xl" />
                  <h1>Share</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-b border-gray-300 my-8 md:my-10 lg:my-20"></div>

      {/* Customer review container */}
      <Container>
        <div className="mb-16">
          <div className="w-[40%]">
            <div>
              <Rate
                defaultValue={rating}
                onChange={setRating}
                style={{ color: "#FFA534" }}
              />
            </div>

            <Textarea
              onChange={(e) => setComment(e.target.value)}
              className="my-3"
              placeholder="Type your comment here."
            />

            <button
              onClick={handleAddComment}
              className="text-sm font-medium w-20 py-1.5 rounded-lg cursor-pointer bg-[#31473A] text-white active:scale-95 transition transform duration-300"
            >
              {cmntLoading ? <Spinner className="size-5" /> : "Submit"}
            </button>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-6 md:gap-20">
          <div className="lg:w-[60%]">
            <h1 className="text-xl font-semibold">Reviews</h1>
            <p className="text-sm font-medium text-gray-600">
              {`Showing 3 from ${allUserReview?.length} reviews`}
            </p>

            {/* Customer reviews */}
            <div className="mb-10">
              {allUserReview?.map((review: TUserReview, idx: number) => (
                <CustomerReview key={idx} userReview={review} />
              ))}
              <div className="my-4 md:my-8 font-bold w-fit cursor-pointer">
                <p>Show more</p>
              </div>
            </div>
          </div>

          <div className="lg:w-[40%]">
            <div className="border border-gray-300 rounded-xl overflow-hidden">
              <div className="px-10 py-3 flex justify-between items-center">
                <Rate
                  disabled
                  allowHalf
                  value={resviews?.overAllRating}
                  style={{ color: "#FFA534" }}
                />
                <h1 className="text-2xl font-bold">
                  {resviews?.overAllRating}
                </h1>
              </div>

              <div className="border-b border-gray-300"></div>

              <div className="my-5 px-5 md:px-10 space-y-1.5 md:space-y-3 text-gray-600">
                <div className="flex items-center gap-3.5 font-semibold">
                  <h1>5</h1>
                  <Progress value={ratings?.fiveStar} className="" />
                  <h1>{ratings?.fiveStar}</h1>
                </div>
                <div className="flex items-center gap-3.5 font-semibold">
                  <h1>4</h1>
                  <Progress value={ratings?.fourStar} className="" />
                  <h1>{ratings?.fourStar}</h1>
                </div>
                <div className="flex items-center gap-3.5 font-semibold">
                  <h1>3</h1>
                  <Progress value={ratings?.threeStar} className="" />
                  <h1>{ratings?.threeStar}</h1>
                </div>
                <div className="flex items-center gap-3.5 font-semibold">
                  <h1>2</h1>
                  <Progress value={ratings?.twoStar} className="" />
                  <h1>{ratings?.twoStar}</h1>
                </div>
                <div className="flex items-center gap-3.5 font-semibold">
                  <h1>1</h1>
                  <Progress value={ratings?.oneStar} className="" />
                  <h1>{ratings?.oneStar}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-b border-gray-300 my-5 md:my-10"></div>

      <Container>
        <h1 className="text-2xl font-semibold">Similer Product</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-8 mb-16">
          {simillerProducts?.map((product: TProductData) => (
            <ProductCard key={product?._id} data={product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
