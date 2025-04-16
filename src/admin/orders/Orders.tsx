import Container from "@/components/reusable/Container";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import OrdersTable from "./OrdersTable";

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  console.log(searchTerm);

  return (
    <Container>
      {/* Header */}
      <div className="flex justify-between items-center my-8 lg:my-3">
        {/* left side content */}
        <div>
          <h1 className="text-sm md:text-lg font-bold">
            All order from Laivaly
          </h1>
          <p className="text-xs md:text-base font-medium text-gray-600">
            Total 210 order
          </p>
        </div>

        {/* srearchbar */}
        <div className="w-[30%] relative">
          <Input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            name="searchproduct"
            placeholder="Search product by code"
            className="font-medium pr-14"
          />
          <div className="absolute top-0 right-0 h-full flex justify-center items-center px-5 text-xl text-gray-600">
            <FiSearch />
          </div>
        </div>
      </div>

      {/* Table container */}
      <div className="mt-5">
        <OrdersTable />
      </div>
    </Container>
  );
};

export default Orders;
