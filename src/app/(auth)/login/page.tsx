import LoginForm from "@/components/auth/LoginForm";
import HorizontalDivider from "@/components/reusable/HorizontalDivider";
import { smoochsans } from "@/styles/font";
import { Metadata } from "next";
import Image from "next/image";
import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export const metadata: Metadata = {
  title: "My Account",
  description:
    "Discover the latest in fashion at Laivaly – your go-to destination for stylish, high-quality clothing for men, women, and kids. Enjoy fast delivery, secure checkout, and unbeatable prices.",
};

const handleCustomerLogin = async(formData: FormData) => {
  "use server"
  console.log(formData);
}

const LoginPage = () => {
  return (
    <main className="h-screen flex">
      {/* Main Container */}
      <section className="w-full lg:w-[50%] xl:w-[40%]">
        {/* Form Container */}
        <div className="relative">
          {/* Header Section */}
          <div className="absolute w-full flex justify-center items-center gap-3 p-5">
            <div className="relative size-10">
              <Image
                src="/images/logo/logo.png"
                alt="logo"
                quality={100}
                fill
              />
            </div>
            <h1 className={`${smoochsans.className} font-bold text-4xl`}>
              Laivaly
            </h1>
          </div>

          {/* Form Section */}
          <div className="flex justify-center items-center h-screen">
            <div className="text-center mt-5 md:mt-10">
              <h1 className="uppercase text-4xl md:text-6xl lg:text-5xl xl:text-6xl font-light">
                my laivaly account
              </h1>

              {/* Login in with google and apple id button */}
              <div className="mt-5 md:mt-10 space-y-3">
                {/* Google button */}
                <button className="flex justify-center items-center gap-3 font-semibold cursor-pointer rounded border border-black mx-auto py-3 w-72 md:w-96 md:text-lg">
                  <FcGoogle className="text-2xl md:text-3xl" />
                  <span>Continue with Google</span>
                </button>
                {/* Apple button */}
                <button className="flex justify-center items-center gap-3 font-semibold cursor-pointer rounded border border-black mx-auto py-3 w-72 md:w-96 md:text-lg">
                  <FaApple className="text-2xl md:text-3xl" />
                  <span>Continue with Apple</span>
                </button>
              </div>

              {/* Horizontal divider */}
              <div className="my-10">
                <HorizontalDivider title="OR" />
              </div>

              {/* Main form */}
              <div>
                <h1 className="uppercase font-medium text-xl">
                  continue with your emai and password
                </h1>

                <div className="mx-auto w-72 md:w-96 mt-10">
                  <LoginForm formActions={handleCustomerLogin} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Image container */}
      <section className="lg:w-[50%] xl:w-[60%] hidden lg:block">
        <div className="relative h-full">
          <Image
            src="/images/categories/3.jpg"
            alt="banner"
            quality={100}
            fill
            className="object-cover object-center"
          />

          <div className="absolute top-0 size-full bg-gradient-to-t from-[#000000c3] to-transparent">
            <div className={`${smoochsans.className} h-full flex items-end p-10`}>
              <h1 className="text-white font-bold text-5xl xl:text-6xl"><span>Shop with confidence </span> <br /> <span className="text-7xl xl:text-9xl"><span className="text-8xl xl:text-[150px] font-extrabold">100%</span> purchase protection.</span></h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
