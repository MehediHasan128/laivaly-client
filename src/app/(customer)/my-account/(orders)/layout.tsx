import OrderNavbar from "@/components/customer/OrderNavbar";
import React, { ReactNode } from "react";

const OrdersLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <OrderNavbar />
      {children}
    </div>
  );
};

export default OrdersLayout;
