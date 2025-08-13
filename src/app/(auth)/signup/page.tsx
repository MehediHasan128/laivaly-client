import SignupForm from "@/components/auth/SignupForm";
import HorizontalDivider from "@/components/reusable/HorizontalDivider";
import { smoochsans } from "@/styles/font";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export const metadata: Metadata = {
  title: "Create Your Account",
  description:
    "Join Laivaly today and enjoy exclusive access to the latest fashion trends for men, women, and kids. Sign up now for fast delivery, secure checkout, and unbeatable prices.",
  keywords: [
    "Laivaly signup",
    "create Laivaly account",
    "join Laivaly",
    "fashion sign up",
    "Laivaly register",
    "online clothing store registration",
  ],
  robots: {
    index: false,
    follow: true,
  },
};

const SignupPage = () => {
  return (
    <main className="h-screen flex">
      <section className="lg:w-[50%] h-full relative hidden lg:block">
        <Image
          src="/images/categories/10.jpg"
          alt="banner"
          quality={100}
          fill
          className="object-cover object-[50%_0%]"
        />
        <div className="absolute bg-gradient-to-t from-[#000a] to-transparent w-full h-full flex items-end">
          <div className="text-white text-5xl xl:text-6xl  p-5 font-semibold">
            <h1>
              Get <br />
              <span className="text-[130px] xl:text-[180px]">10%</span> <br />
              OFF on your first order <br />{" "}
              <span className="text-6xl xl:text-7xl">Sign in now!</span>
            </h1>
          </div>
        </div>
      </section>
      <section className="w-full lg:w-[50%]">
        {/* Form Container */}
        <div className="h-screen flex flex-col">
          {/* Heading */}
          <Link href="/">
            <div className="flex justify-center items-center gap-3 p-5">
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
          </Link>

          {/* Form */}
          <div className="flex-1 flex justify-center items-center text-center pb-10 lg:pb-0">
            <div>
              <h1 className="uppercase text-4xl md:text-6xl lg:text-5xl xl:text-6xl font-light">
                create an account
              </h1>

              {/* Dignup form */}
              <div className="mt-10 w-80 md:w-auto">
                <SignupForm />

                <h1 className="mt-3">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-semibold underline cursor-pointer"
                  >
                    Login.
                  </Link>
                </h1>
              </div>

              {/* Horizontal divider */}
              <div className="my-10">
                <HorizontalDivider title="Access Quickly" />
              </div>

              {/* Login in with google and apple id button */}
              <div className="mt-5 md:mt-10 space-y-3">
                {/* Google button */}
                <button className="flex justify-center items-center gap-3 font-semibold cursor-pointer rounded border border-black mx-auto py-3 w-full hover:bg-black hover:text-white duration-700 md:text-lg">
                  <FcGoogle className="text-2xl md:text-3xl" />
                  <span>Continue with Google</span>
                </button>
                {/* Apple button */}
                <button className="flex justify-center items-center gap-3 font-semibold cursor-pointer rounded border border-black mx-auto py-3 w-full hover:bg-black hover:text-white duration-700 md:text-lg">
                  <FaApple className="text-2xl md:text-3xl" />
                  <span>Continue with Apple</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignupPage;
