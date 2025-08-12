const HorizontalDivider = ({title}: {title: string}) => {
  return (
    <div className="flex justify-center items-center gap-5">
      <div className="h-[1px] w-36 sm:w-42 lg:w-64 bg-gradient-to-l from-[#000] to-transparent" />
      <h1 className="font-bold">{title}</h1>
      <div className="h-[1px] w-36 sm:w-42 lg:w-64 bg-gradient-to-r from-[#000] to-transparent" />
    </div>
  );
};

export default HorizontalDivider;
