import CustomerSidebar from "@/components/customer/CustomerSidebar";
import Container from "@/components/reusable/Container";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import { ReactNode } from "react";

const CustomerLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />
      <Container>
        <div className="flex min-h-screen">
          <div className="w-[30%] px-36">
            <CustomerSidebar />
          </div>
          <div className="w-[70%]">{children}</div>
        </div>
      </Container>
      <Footer />
    </main>
  );
};

export default CustomerLayout;
