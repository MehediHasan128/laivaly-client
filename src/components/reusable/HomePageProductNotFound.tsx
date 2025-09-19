import { smoochsans } from "@/styles/font";
import Image from "next/image";

const HomePageProductNotFound = () => {
  return (
    <div className="py-5">
      <div className="relative size-36 mx-auto">
        <Image
          src="/images/icon/pendingBag.png"
          alt="icon"
          quality={100}
          fill
        />
      </div>
      <div className="text-center mt-5">
        <h1 className={`${smoochsans.className} text-4xl font-extrabold`}>
          Sorry, no new arrivals here at the moment. <br /> Stay tuned! Fresh
          styles are dropping soon.
        </h1>
        <p className="mt-10 text-xl font-semibold">
          Check out other categories
        </p>
      </div>
    </div>
  );
};

export default HomePageProductNotFound;
