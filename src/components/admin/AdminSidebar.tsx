import { smoochsans } from "@/styles/font";
import { LayoutDashboard, Package2, PackageOpen, Users } from "lucide-react";
import Image from "next/image";

const sidebarItems = [
    {
        icon: <LayoutDashboard />,
        label: 'Dashboard',
        path: '/dashboard'
    },
    {
        icon: <Users />,
        label: 'User',
        path: '/user'
    },
    {
        icon: <PackageOpen />,
        label: 'Products',
        path: '/product'
    },
    {
        icon: <Package2 />,
        label: 'Orders',
        path: '/product'
    },
]

const AdminSidebar = () => {
  return (
    <div className="border h-full">
      <div className="flex justify-center gap-2 py-5">
        <div className="relative size-10">
          <Image src="/images/logo/logo.png" alt="" quality={100} fill />
        </div>
        <h1 className={`${smoochsans.className} text-4xl font-bold`}>Laivaly</h1>
      </div>

      <div className="mt-5">
        {
            sidebarItems.map((item) => (
                <div key={item.label} className="py-3 px-4 mx-2 cursor-pointer hover:scale-105 duration-500">
                    <span className="flex gap-2 font-semibold">
                        {item.icon}
                        <h1>{item.label}</h1>
                    </span>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default AdminSidebar;
