import ChartAreaInteractive from "@/components/admin/dashboard/ChartAreaInteractive";
import LatestOrder from "@/components/admin/dashboard/LatestOrder";
import MonthlyTargetChart from "@/components/admin/dashboard/MonthlyTargetChart";
import RecentOrders from "@/components/admin/dashboard/RecentOrders";
import { CircleDollarSign, Shirt, ShoppingBasket, Users } from "lucide-react";
import React from "react";

const DashboardPage = () => {
  return (
    <main>
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-4 grid-rows-5 gap-2">
          {/* Total sell */}
          <div className="bg-gray-50 h-full rounded-xl py-5 px-8 border">
            <div className="flex flex-col h-full justify-between">
              <div className="flex justify-between items-center">
                <h1 className="font-semibold">Total Sales</h1>
                <CircleDollarSign className="size-8" />
              </div>
              <div className="flex justify-between items-end">
                <h1 className="text-2xl font-bold">$ 983,410.00</h1>
                <div className="text-sm font-semibold text-end">
                  <h2 className="text-green-600">+3.38%</h2>
                  <p>vs last week</p>
                </div>
              </div>
            </div>
          </div>
          {/* Total Products */}
          <div className="bg-gray-50 h-full rounded-xl py-5 px-8 border">
            <div className="flex flex-col h-full justify-between">
              <div className="flex justify-between items-center">
                <h1 className="font-semibold">Total Products</h1>
                <Shirt className="size-8" />
              </div>
              <div className="flex justify-between items-end">
                <h1 className="text-2xl font-bold">58,375</h1>
                <div className="text-sm font-semibold text-end">
                  <h2 className="text-red-600">-3.38%</h2>
                  <p>vs last week</p>
                </div>
              </div>
            </div>
          </div>
          {/* Total orders */}
          <div className="bg-gray-50 h-full rounded-xl py-5 px-8 border">
            <div className="flex flex-col h-full justify-between">
              <div className="flex justify-between items-center">
                <h1 className="font-semibold">Total Orders</h1>
                <ShoppingBasket className="size-8" />
              </div>
              <div className="flex justify-between items-end">
                <h1 className="text-2xl font-bold">58,375</h1>
                <div className="text-sm font-semibold text-end">
                  <h2 className="text-red-600">-3.38%</h2>
                  <p>vs last week</p>
                </div>
              </div>
            </div>
          </div>
          {/* Total customers */}
          <div className="bg-gray-50 h-full rounded-xl py-5 px-8 border">
            <div className="flex flex-col h-full justify-between">
              <div className="flex justify-between items-center">
                <h1 className="font-semibold">Total Customers</h1>
                <Users className="size-8" />
              </div>
              <div className="flex justify-between items-end">
                <h1 className="text-2xl font-bold">237,782</h1>
                <div className="text-sm font-semibold text-end">
                  <h2 className="text-green-600">+8.38%</h2>
                  <p>vs last week</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row-span-2 bg-gray-50 h-full rounded-xl p-5 border">
            5
          </div>
          <div className=" col-span-2 row-span-2 bg-gray-50 h-full rounded-xl border">
            <ChartAreaInteractive />
          </div>
          <div className="row-span-2 bg-gray-50 h-full rounded-xl border">
            <MonthlyTargetChart />
          </div>
          <div className="col-span-2 row-span-2 bg-gray-50 h-full rounded-xl border overflow-scroll scrollbar-hide">
            <LatestOrder />
          </div>
          <div className="row-span-2 bg-gray-50 h-full rounded-xl border overflow-hidden">
            2
          </div>
          <div className="row-span-2 bg-gray-50 h-full rounded-xl p-5 border">1</div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
