import AdminSidebar from "@/components/admin/AdminSidebar";
import { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <div className="flex h-screen">
        <div className="w-[15%] h-full">
          <AdminSidebar />
        </div>
        <div className="w-full p-10">{children}</div>
      </div>
    </main>
  );
};

export default AdminLayout;
