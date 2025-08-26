import CustomerSidebar from "@/components/customer/CustomerSidebar";
import Container from "@/components/reusable/Container";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import Image from "next/image";
import { ReactNode } from "react";

const CustomerLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />

      <div className="w-full h-[200px] md:h-[300px] xl:h-[500px]">
        <div className="relative w-full h-full">
          <Image
            src="/images/categories/background.jpg"
            alt="background"
            quality={100}
            fill
            className="object-cover"
          />
        </div>

        <div className="relative ">
          <div className="absolute border bg-white -top-6 md:-top-8 xl:-top-10 left-1/2 transform -translate-x-1/2 size-12 md:size-16 xl:size-20 rotate-45" />
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 size-20 flex justify-center items-center">
            <div className="relative size-6 md:size-8 xl:size-10">
              <Image
                src="/images/logo/logo.png"
                alt="logo"
                quality={100}
                fill
              />
            </div>
          </div>
        </div>
      </div>

      <Container>
        <div className="flex flex-col md:flex-row gap-10 lg:gap-20 py-10">
          <div className="relative md:w-[40%] lg:w-[30%] xl:px-20 2xl:px-36">
            <div className="sticky top-10">
              <CustomerSidebar />
            </div>
          </div>
          <div className="md:w-[60%] lg:w-[50%]">
            <div>{children}</div>
            <div className="md:w-[80%] mt-10 md:mt-20 font-medium">
              <p className="text-sm text-gray-700 text-justify">
                Please contact Customer Service if you have questions about your
                account, or if you are not seeing transactions that should have
                been posted.
              </p>

              <div>
                <h1 className="text-lg md:text-xl font-semibold my-3 md:my-5">Need Help?</h1>
                <div className="text-gray-700 text-sm space-y-3 md:space-y-5">
                  <button className="hover:underline duration-500 cursor-pointer block">Shipping And Delivery</button>
                  <button className="hover:underline duration-500 cursor-pointer block">Return Policy</button>
                  <button className="hover:underline duration-500 cursor-pointer block">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  );
};

export default CustomerLayout;
