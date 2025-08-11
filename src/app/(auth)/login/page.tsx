import HorizontalDivider from "@/components/reusable/HorizontalDivider";
import { smoochsans } from "@/styles/font";
import { Eye } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export const metadata: Metadata = {
  title: "My Account",
  description:
    "Discover the latest in fashion at Laivaly – your go-to destination for stylish, high-quality clothing for men, women, and kids. Enjoy fast delivery, secure checkout, and unbeatable prices.",
};

const LoginPage = () => {



  return (
    <main className="h-screen">
      <div className="flex h-full">
        {/* Image content */}
        <div className="w-[50%]">
          <div className="w-full h-full relative">
            <Image
              src="/images/categories/3.jpg"
              alt="signInBanner"
              fill
              quality={100}
              className="object-cover j"
            />
          </div>
        </div>

        <div className="w-[50%] h-full relative">
          {/* Header section */}
          <div className="absolute top-0 p-8">
            <div className="flex items-center gap-3">
              <div className="relative size-10">
                <Image src="/images/logo/logo.png" alt="logo" fill />
              </div>
              <h1 className={`${smoochsans.className} text-3xl font-bold`}>
                Laivaly
              </h1>
            </div>
          </div>

          {/* Main form section */}
          <div className="border h-full flex justify-center items-center">
            <div>
              <div>
                <h1 className="text-7xl font-extralight uppercase">
                  my laivaly account
                </h1>

                <div className="mt-10 space-y-3">
                  <button className="flex justify-center items-center gap-3 border rounded cursor-pointer active:scale-95 duration-500 text-xl w-96 mx-auto py-3 ">
                    <FcGoogle className="text-2xl" />{" "}
                    <span>Continue With Google</span>{" "}
                  </button>
                  <button className="flex justify-center items-center gap-3 border rounded cursor-pointer active:scale-95 duration-500 text-xl w-96 mx-auto py-3 ">
                    <FaApple className="text-2xl" />{" "}
                    <span>Continue With Apple</span>{" "}
                  </button>
                </div>
              </div>

              <HorizontalDivider title="OR" />

              <div>
                <h1 className="text-center uppercase font-medium text-3xl">
                  continue with your email and password
                </h1>

                <div className="mt-10 w-96 mx-auto">
                  <form className="space-y-3">
                    <div>
                      <input type="email" placeholder="Email *" className="w-full border rounded font-medium outline-none focus:border-black text-lg px-5 py-3" />
                    </div>
                    <div className="relative">
                      <input type="password" placeholder="Password" className="w-full border rounded font-medium outline-none focus:border-black text-lg px-5 py-3" />

                      <span className="absolute top-0 right-0 h-full rounded-r flex items-center cursor-pointer px-3"><Eye /></span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
