"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useMemo } from "react";
import { Label, Pie, PieChart } from "recharts";

export const description = "A donut chart with text";
const chartData = [
  { orderStatus: "pending", orders: 150, fill: "#fb722d" },
  { orderStatus: "processing", orders: 100, fill: "#3db47d" },
  { orderStatus: "shipped", orders: 350, fill: "#867ffb" },
  { orderStatus: "delivered", orders: 300, fill: "#2d89fa" },
];
const chartConfig = {
  orders: {
    label: "Orders",
  },
  pending: {
    label: "Pending",
    color: "var(--chart-1)",
  },
  processing: {
    label: "Processing",
    color: "var(--chart-2)",
  },
  shipped: {
    label: "Shipped",
    color: "var(--chart-3)",
  },
  delivered: {
    label: "Delivered",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

const OrderStatusSummary = () => {
  const totalOrders = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.orders, 0);
  }, []);

  return (
    <Card className="flex flex-col rounded-md shadow">
      <CardHeader className="items-center pb-0">
        <CardTitle>Order Status Summary</CardTitle>
        <CardDescription>June 2026</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="orders"
              nameKey="orderStatus"
              innerRadius={60}
              strokeWidth={5}
              paddingAngle={2}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalOrders}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Orders
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>

            <ChartLegend
              content={<ChartLegendContent nameKey="orderStatus" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center font-semibold"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default OrderStatusSummary;
