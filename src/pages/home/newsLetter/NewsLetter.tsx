import { Input } from "@/components/ui/input";

const NewsLetter = () => {
  return (
    <div id="newsLetterBackground" className="flex justify-center items-center py-42 bg-amber-100 mb-96 bg-fixed">
      <div>
        <div className="text-center space-y-3 text-white">
          <h1 className="text-4xl font-semibold">Sign Up yo Our Newsletter</h1>
          <p className="text-xl">
            Get the Latest Beauty Secrets and Trends, Sign Up for Our Newsletter
            and Stay Informed About All Things Beauty
          </p>
        </div>
        <div className="w-[60%] mx-auto mt-10">
          <form>
            <div className="flex gap-3">
              <Input
                type="email"
                name="userEmail"
                placeholder="Your email"
                className="rounded-full px-5 border-0 focus:border bg-white/10 backdrop-blur-md border-white/30 text-white"
              />
              <button className="border border-[#31473A] px-5 py-2 rounded-full bg-[#31473A] text-white">
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
