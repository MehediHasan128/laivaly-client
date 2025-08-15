import Image from "next/image";

interface TProductDetailsPageProps {
  params: {
    category: string;
    productId: string;
  };
}

const ProductDetailsPage = ({ params }: TProductDetailsPageProps) => {
  const { category, productId } = params;

  return (
    <main>
      <section className="flex flex-col">
        {/* Product image */}
        <div>
          <div className="relative h-[45vh]">
            <Image src="/images/products/6.jpg" alt="" quality={100} fill className="object-cover" />
          </div>

          <div className="flex gap-1.5 mt-1.5">
            <div className="relative h-20 w-full">
              <Image src="/images/products/6.jpg" alt="" quality={100} fill className="object-cover" />
            </div>
            <div className="relative h-20 w-full">
              <Image src="/images/products/6.jpg" alt="" quality={100} fill className="object-cover" />
            </div>
            <div className="relative h-20 w-full">
              <Image src="/images/products/6.jpg" alt="" quality={100} fill className="object-cover" />
            </div>
            <div className="relative h-20 w-full">
              <Image src="/images/products/6.jpg" alt="" quality={100} fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Product info */}
        <div className=""></div>
      </section>
    </main>
  );
};

export default ProductDetailsPage;
