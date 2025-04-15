import Container from "@/components/reusable/Container";
import ProductsTable from "./ProductsTable";

const Products = () => {
  return (
    <Container>
      {/* Header */}
      <div className="flex justify-between items-center my-8 lg:my-3">
        {/* left side content */}
        <div>
          <h1 className="text-sm md:text-lg font-bold">
            All User from Laivaly
          </h1>
          <p className="text-xs md:text-base font-medium text-gray-600">
            Total 210 user
          </p>
        </div>

        {/* right side filter options */}
        
      </div>

      {/* Table container */}
      <div>
        <ProductsTable />
      </div>
    </Container>
  );
};

export default Products;
