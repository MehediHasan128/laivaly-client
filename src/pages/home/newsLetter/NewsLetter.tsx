import { Input } from "@/components/ui/input";

const NewsLetter = () => {
  return (
    <div id="fixedBackground" className="flex justify-center items-center py-24 md:py-32 lg:py-42 bg-amber-100 bg-fixed">
      <div className="px-5 md:px-0">
        <div className="text-center space-y-3 text-white">
          <h1 className="text-3xl md:text-4xl font-semibold">Sign Up to Our Newsletter</h1>
          <p className="text-xs md:text-xl">
            Get the Latest Beauty Secrets and Trends, Sign Up for Our Newsletter
            and Stay Informed About All Things Beauty
          </p>
        </div>
        <div className="md:w-[60%] mx-auto mt-10">
          <form>
            <div className="flex flex-col md:flex-row gap-3">
              <Input
                type="email"
                name="userEmail"
                placeholder="Your email"
                className="rounded-full px-5 border border-[#31473A] focus:border bg-white/10 backdrop-blur-md text-white"
              />
              <button className="border border-[#31473A] px-5 py-2 rounded-full bg-[#31473A] text-white w-[40%] md:w-auto mx-auto md:mx-0 cursor-pointer">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
