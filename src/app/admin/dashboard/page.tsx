import { BiSolidDollarCircle } from "react-icons/bi";
import { IoShirtOutline } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";
import SalesOverviewChart from "@/components/admin/dashboard/SalesOverviewChart";
import ChartAreaInteractive from "@/components/admin/dashboard/ChartAreaInteractive";
import MonthlyTargetChart from "@/components/admin/dashboard/MonthlyTargetChart";
import { TOrderData } from "@/types/order.type";
import { getAllOrderFromDB } from "@/lib/api/orders/orders";
import { TResponce } from "@/types/types";
import LatestOrder from "@/components/admin/dashboard/LatestOrder";
import TopSellingProducts from "@/components/admin/dashboard/TopSellingProducts";
import LowStockProducts from "@/components/admin/dashboard/LowStockProducts";
import OrderStatusSummary from "@/components/admin/dashboard/OrderStatusSummary";
import RecentCustomer from "@/components/admin/dashboard/RecentCustomer";

const DashboardPage = async () => {
  const getAllOrdersFromDB = (await getAllOrderFromDB([
    { field: "limit", value: "5" },
  ])) as TResponce;
  const ordersData = getAllOrdersFromDB.data as TOrderData[];

  return (
    <main>
      <div className="grid grid-cols-4 gap-2">
        <div className="border bg-white shadow w-full col-span-1 rounded-md p-5">
          <div className="flex justify-between items-end">
            <div className="flex items-center gap-5">
              <div className="text-3xl bg-[#8b8efc] text-white p-5 rounded-full w-fit">
                <BiSolidDollarCircle />
              </div>
              <div className="font-bold">
                <p className="text-sm">Total Sales</p>
                <h1 className="text-2xl">$39.99</h1>
              </div>
            </div>
            <div className="text-xs font-extrabold">
              <p className="text-green-500">+3.38%</p>
              <p>vs last week</p>
            </div>
          </div>
        </div>
        <div className="border bg-white shadow w-full col-span-1 rounded-md p-5">
          <div className="flex justify-between items-end">
            <div className="flex items-center gap-5">
              <div className="text-3xl bg-[#75cd9d] p-5 rounded-full w-fit">
                <IoShirtOutline />
              </div>
              <div className="font-bold">
                <p className="text-sm">Total Products</p>
                <h1 className="text-2xl">120</h1>
              </div>
            </div>
            <div className="text-xs font-extrabold">
              <p className="text-red-500">-3.38%</p>
              <p>vs last week</p>
            </div>
          </div>
        </div>
        <div className="border bg-white shadow w-full col-span-1 rounded-md p-5">
          <div className="flex justify-between items-end">
            <div className="flex items-center gap-5">
              <div className="text-3xl bg-[#fca96f] p-5 rounded-full w-fit">
                <GiShoppingCart />
              </div>
              <div className="font-bold">
                <p className="text-sm">Total Orders</p>
                <h1 className="text-2xl">50</h1>
              </div>
            </div>
            <div className="text-xs font-extrabold">
              <p className="text-green-500">+5.38%</p>
              <p>vs last week</p>
            </div>
          </div>
        </div>
        <div className="border bg-white shadow w-full col-span-1 rounded-md p-5">
          <div className="flex justify-between items-end">
            <div className="flex items-center gap-5">
              <div className="text-3xl bg-[#8cbcfc] text-white p-5 rounded-full w-fit">
                <FiUsers />
              </div>
              <div className="font-bold">
                <p className="text-sm">Total Customers</p>
                <h1 className="text-2xl">100</h1>
              </div>
            </div>
            <div className="text-xs font-extrabold">
              <p className="text-green-500">+8.38%</p>
              <p>vs last week</p>
            </div>
          </div>
        </div>
        <div className="w-full col-span-3">
          <div className="grid grid-cols-2 h-full gap-2">
            <SalesOverviewChart />
            <ChartAreaInteractive />
          </div>
        </div>
        <div className="w-full col-span-1">
          <MonthlyTargetChart />
        </div>
        <div className="w-full col-span-3">
          <div className="grid grid-cols-5 h-full gap-2">
            <div className="w-full col-span-3">
              <LatestOrder orders={ordersData} />
            </div>
            <div className="w-full col-span-2">
              <TopSellingProducts />
            </div>
          </div>
        </div>
        <div className="w-full col-span-1">
          <LowStockProducts />
        </div>
        <div className="w-full">
          <OrderStatusSummary />
        </div>
        <div className="w-full">
          <RecentCustomer />
        </div>
        <div className="border w-full rounded-md p-5">13</div>
        <div className="border w-full rounded-md p-5">14</div>
      </div>
    </main>
  );
};

export default DashboardPage;
