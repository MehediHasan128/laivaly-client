import { smoochsans } from "@/styles/font";
import Image from "next/image";

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">

      <div className="flex justify-center md:justify-between items-center md:px-10 lg:px-20 py-3 lg:py-5 border-b">
        <div className="flex items-center gap-3">
            <div className="relative size-9 lg:size-11">
              <Image src="/images/logo/logo.png" alt="logo" fill quality={100} />
            </div>
            <h1 className={`${smoochsans.className} text-4xl font-bold hidden md:block`}>Laivaly</h1>
        </div>
        <div className="text-xs lg:text-sm hidden md:flex font-semibold text-gray-600 gap-3">
            <p>Need help with your orders?</p>
            <h1 className="text-black font-bold">Email Us</h1> |
            <h1 className="text-black font-bold">Call us at +88012345678900</h1>
        </div>
      </div>

      {children}
    </main>
  );
}