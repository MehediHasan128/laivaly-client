import Container from "@/components/reusable/Container";
import ProductsTable from "./ProductsTable";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";
import { FiPlus, FiSearch } from "react-icons/fi";
import { TSearch } from "@/types";
import { useGetAllProductQuery } from "@/redux/features/product/productApi";
import AddProductModal from "./AddProductModal";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState<TSearch[]>([]);

  const { data: Products } = useGetAllProductQuery([searchTerm, "all"]);
  const allProducts = Products?.data;

  return (
    <Container>
      {/* Header */}
      <div className="flex justify-between items-center my-8 lg:my-3">
        {/* left side content */}
        <div>
          <h1 className="text-sm md:text-lg font-bold">
            All product from Laivaly
          </h1>
          <p className="text-xs md:text-base font-medium text-gray-600">
            Total {allProducts?.length} product
          </p>
        </div>

        {/* srearchbar */}
        <div className="w-[30%] relative">
          <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchTerm([{ field: "searchTerm", value: e.target.value }])
            }
            type="text"
            name="searchproduct"
            placeholder="Search product by code"
            className="font-medium pr-14"
          />
          <div className="absolute top-0 right-0 h-full flex justify-center items-center px-5 text-xl text-gray-600">
            <FiSearch />
          </div>
        </div>

        <AddProductModal>
          <div className="border border-gray-300 px-8 py-3 rounded-lg text-sm font-medium flex items-center gap-2 active:scale-95 transition transform duration-500 cursor-pointer">
            <FiPlus className="text-xl" /> <span>Add Product</span>
          </div>
        </AddProductModal>
      </div>

      {/* Table container */}
      <div>
        <ProductsTable allProducts={allProducts} />
      </div>
    </Container>
  );
};

export default Products;
