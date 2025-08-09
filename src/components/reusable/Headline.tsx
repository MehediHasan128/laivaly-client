import { Smooch_Sans } from "next/font/google";

const smoochsans = Smooch_Sans({
  subsets: ["latin"],
  variable: "--font-smoochsans",
});

const Headline = ({title, description}: {title: string, description?: string}) => {
  return (
    <>
      <span className="flex flex-col md:flex-row justify-between items-center gap-1.5">
        <h1
          className={`${smoochsans.className} font-bold text-4xl md:text-7xl`}
        >
          {title}
        </h1>
        <p className="md:w-[35%] text-[10px] md:text-sm gray-text md:text-end font-bold md:font-normal">
          {description}
        </p>
      </span>
    </>
  );
};

export default Headline;
