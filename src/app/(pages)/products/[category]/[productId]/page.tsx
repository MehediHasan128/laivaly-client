import Image from "next/image";

const images = [
  "/images/products/6.jpg",
  "/images/products/6.jpg",
  "/images/products/6.jpg",
  "/images/products/6.jpg",
];

const ProductDetailsPage = () => {
  return (
    <main>
      <section className="flex flex-col lg:flex-row">
        {/* Product image */}
        <div className="flex flex-col md:flex-row lg:flex-col gap-1.5 w-full h-[70vh] lg:h-[80vh] xl:h-[100vh] lg:w-[50%] xl:w-[50%]">
          {/* Thumbnail Image */}
          <div className="h-[80%] md:h-full md:w-[80%] lg:w-full lg:h-[80%]">
            <div className="relative size-full">
              <Image
                src="/images/products/6.jpg"
                alt="img"
                quality={100}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* All Images */}
          <div className="h-[20%] md:h-full md:w-[20%] lg:w-full lg:h-[20%]">
            <div className="h-full flex md:flex-col lg:flex-row gap-1.5">
              {images.map((img, index) => (
                <div key={index} className="relative size-full cursor-pointer">
                  <Image
                    src={img}
                    alt="img"
                    quality={100}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product info */}
        <div className="lg:w-[50%] xl:w-[50%]"></div>
      </section>
    </main>
  );
};

export default ProductDetailsPage;
