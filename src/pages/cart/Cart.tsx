import CartCard from "@/components/reusable/CartCard";
import Container from "@/components/reusable/Container";

const Cart = () => {
  return (
    <div className="min-h-screen">
      <Container>
        <div className="flex gap-10 py-10">
          <div className="w-[75%] min-h-screen">

              <h1 className="text-3xl font-bold">Shopping Cart</h1>

              {/* Card container */}
              <div className="mt-10">
                <CartCard />
              </div>

          </div>
          <div className="w-[25%] border min-h-screen"></div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
