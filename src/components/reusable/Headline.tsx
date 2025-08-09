import { smoochsans } from "../styles/font";

const Headline = ({title, description}: {title: string, description?: string}) => {
  return (
    <>
      <span className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-1.5">
        <h1
          className={`${smoochsans.className} font-bold text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl`}
        >
          {title}
        </h1>
        <p className="lg:w-[70%] xl:w-[50%] 2xl:w-[35%] gray-text lg:text-end font-semibold">
          {description}
        </p>
      </span>
    </>
  );
};

export default Headline;
