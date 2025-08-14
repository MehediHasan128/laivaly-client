import Image from "next/image";

interface TCategoryBannerProps {
  bannerImage: string;
  imageAlt: string;
  sectionTitle: string;
  sectionSubtitle: string;
}

const CategoryBanner = ({bannerImage, imageAlt, sectionTitle, sectionSubtitle}: TCategoryBannerProps) => {
  return (
    <div className="relative h-[250px] md:h-[500px] lg:h-[600px] 2xl:h-[700px] w-full">
      <Image
        src={bannerImage}
        alt={imageAlt}
        quality={100}
        fill
        className="object-cover object-top"
      />
      <div className="absolute top-0 w-full h-full flex justify-center items-end bg-gradient-to-t from-[#00000058] to-[#00000058]">
        <div className="text-center text-sm md:text-base xl:text-lg font-light space-y-1 xl:space-y-3 2xl:space-y-5 text-white py-5 xl:py-10">
          <p>New In</p>
          <h1 className="text-2xl md:text-4xl xl:text-6xl font-semibold">
            {sectionTitle}
          </h1>
          <p>{sectionSubtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
