import { smoochsans } from "@/styles/font";
import Image from "next/image";

const loading = () => {
    return (
        <div className="flex justify-center items-center h-[100vh]">
        <div>
          <div className="relative size-42 mx-auto">
            <Image src="/images/logo/logo.png" alt="logo" fill />
          </div>
          <h1
            className={`${smoochsans.className} text-center font-bold text-8xl mt-5`}
          >
            Laivaly
          </h1>
          <div className="flex justify-center mt-10">
            
          </div>
        </div>
      </div>
    );
};

export default loading;