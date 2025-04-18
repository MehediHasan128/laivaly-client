import Container from "@/components/reusable/Container";
import { useParams } from "react-router-dom";
import product4 from "../../assets/images/product/product4.jpg";
import product5 from "../../assets/images/product/product5.jpg";
import product3 from "../../assets/images/product/product3.jpg";
import product1 from "../../assets/images/product/product1.jpg";
import { FaStar } from "react-icons/fa6";
import { GoDotFill, GoShareAndroid } from "react-icons/go";
import { IoBagHandleOutline } from "react-icons/io5";
import { PiChats } from "react-icons/pi";
import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import { Rate } from "antd";
import { Progress } from "@/components/ui/progress";
import CustomerReview from "@/components/reusable/CustomerReview";
import ProductCard from "@/components/reusable/ProductCard";
import { FiMinus, FiPlus } from "react-icons/fi";

const ProductDetails = () => {
  const [color, setColor] = useState("green");
  const [size, setSize] = useState("XS");
  const [quantity, setQuantity] = useState(0);
  const [mainImg, setMainImg] = useState(product1);

  const id = useParams();
  console.log(id?.productId);

  return (
    <div className="min-h-screen pb-8 md:pt-12 bg-gray-100">
      {/* Details container */}
      <Container>
        {/* Main comtainer */}
        <div className="flex flex-col md:flex-row items-start gap-5 xl:gap-10">
          {/* Image section */}
          <div className="md:w-[50%]">
            <div className="flex flex-col lg:flex-row-reverse gap-2 w-full">
              <div className="relative xl:w-[80%]">
                <img
                  className="h-[400px] md:h-[430px] lg:h-full w-full object-cover"
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
                <img
                  onClick={() => setMainImg(product1)}
                  className={`object-cover cursor-pointer border-2 ${
                    mainImg === product1
                      ? "border-[#31473A]"
                      : "border-gray-200"
                  }`}
                  src={product1}
                  alt=""
                />
                <img
                  onClick={() => setMainImg(product3)}
                  className={`object-cover cursor-pointer border-2 ${
                    mainImg === product3
                      ? "border-[#31473A]"
                      : "border-gray-200"
                  }`}
                  src={product3}
                  alt=""
                />
                <img
                  onClick={() => setMainImg(product4)}
                  className={`object-cover cursor-pointer border-2 ${
                    mainImg === product4
                      ? "border-[#31473A]"
                      : "border-gray-200"
                  }`}
                  src={product4}
                  alt=""
                />
                <img
                  onClick={() => setMainImg(product5)}
                  className={`object-cover cursor-pointer border-2 ${
                    mainImg === product5
                      ? "border-[#31473A]"
                      : "border-gray-200"
                  }`}
                  src={product5}
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Details section */}
          <div className="md:w-[50%]">
            <div>
              {/* Product Title */}
              <h1 className="font-semibold text-xl md:text-2xl 2xl:text-3xl">
                Artificial Leather Fashionable hand Bag for Women
              </h1>

              {/* Product Description */}
              <div className="text-gray-600 font-medium text-justify text-sm md:text-base 2xl:text-lg my-2 2xl:my-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque distinctio perferendis provident odio at nostrum
                  ipsa quo quis! Saepe consectetur facere accusamus quasi
                  voluptates ullam illo earum asperiores, nisi qui.
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
                  $25.00{" "}
                  <sub className="line-through font-medium text-red-800 2xl:text-2xl">
                    $50.00
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
                  <div
                    onClick={() => setSize("XS")}
                    className="border border-gray-500 rounded overflow-hidden cursor-pointer"
                  >
                    <div
                      className={`${
                        size === "XS"
                          ? "bg-[#31473A] text-white"
                          : "bg-transparent"
                      } size-6 lg:size-8 flex justify-center items-center`}
                    >
                      XS
                    </div>
                  </div>
                  <div
                    onClick={() => setSize("S")}
                    className="border border-gray-500 rounded overflow-hidden cursor-pointer"
                  >
                    <div
                      className={`${
                        size === "S"
                          ? "bg-[#31473A] text-white"
                          : "bg-transparent"
                      } size-6 lg:size-8 flex justify-center items-center`}
                    >
                      S
                    </div>
                  </div>
                  <div
                    onClick={() => setSize("M")}
                    className="border border-gray-500 rounded overflow-hidden cursor-pointer"
                  >
                    <div
                      className={`${
                        size === "M"
                          ? "bg-[#31473A] text-white"
                          : "bg-transparent"
                      } size-6 lg:size-8 flex justify-center items-center`}
                    >
                      M
                    </div>
                  </div>
                  <div
                    onClick={() => setSize("L")}
                    className="border border-gray-500 rounded overflow-hidden cursor-pointer"
                  >
                    <div
                      className={`${
                        size === "L"
                          ? "bg-[#31473A] text-white"
                          : "bg-transparent"
                      } size-6 lg:size-8 flex justify-center items-center`}
                    >
                      L
                    </div>
                  </div>
                  <div
                    onClick={() => setSize("XL")}
                    className="border border-gray-500 rounded overflow-hidden cursor-pointer"
                  >
                    <div
                      className={`${
                        size === "XL"
                          ? "bg-[#31473A] text-white"
                          : "bg-transparent"
                      } size-6 lg:size-8 flex justify-center items-center`}
                    >
                      XL
                    </div>
                  </div>
                  <div
                    onClick={() => setSize("XXL")}
                    className="border border-gray-500 rounded overflow-hidden cursor-pointer"
                  >
                    <div
                      className={`${
                        size === "XXL"
                          ? "bg-[#31473A] text-white"
                          : "bg-transparent"
                      } size-6 lg:size-8 flex justify-center items-center`}
                    >
                      XXL
                    </div>
                  </div>
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

                <div className="lg:text-xl flex items-center gap-1.5">
                  <IoMdHeartEmpty className="text-xl lg:text-2xl" />
                  <h1>Whislist</h1>
                </div>

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
        <div className="flex flex-col-reverse lg:flex-row gap-6 md:gap-20">
          <div className="lg:w-[60%]">
            <h1 className="text-xl font-semibold">Reviews</h1>
            <p className="text-sm font-medium text-gray-600">
              Showing 5 from 225 reviews
            </p>

            {/* Customer reviews */}
            <div className="mb-10">
              <CustomerReview />
              <CustomerReview />
              <CustomerReview />
              <CustomerReview />
              <CustomerReview />

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
                  defaultValue={4.5}
                  style={{ color: "#FFA534" }}
                />
                <h1 className="text-2xl font-bold">4.5</h1>
              </div>

              <div className="border-b border-gray-300"></div>

              <div className="my-5 px-5 md:px-10 space-y-1.5 md:space-y-3 text-gray-600">
                <div className="flex items-center gap-3.5 font-semibold">
                  <h1>5</h1>
                  <Progress value={90} className="" />
                  <h1>256</h1>
                </div>
                <div className="flex items-center gap-3.5 font-semibold">
                  <h1>4</h1>
                  <Progress value={75} className="" />
                  <h1>150</h1>
                </div>
                <div className="flex items-center gap-3.5 font-semibold">
                  <h1>3</h1>
                  <Progress value={65} className="" />
                  <h1>120</h1>
                </div>
                <div className="flex items-center gap-3.5 font-semibold">
                  <h1>2</h1>
                  <Progress value={55} className="" />
                  <h1>80</h1>
                </div>
                <div className="flex items-center gap-3.5 font-semibold">
                  <h1>1</h1>
                  <Progress value={30} className="" />
                  <h1>15</h1>
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
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
