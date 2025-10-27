"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";
import { RadialBar, RadialBarChart } from "recharts";

export const description = "A radial chart with stacked sections";
const chartData = [{ name: "Completed", value: 68 }];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const MonthlyTargetChart = () => {
  return (
    <Card className="border-0 shadow-none bg-transparent">
      <CardHeader className="items-center pb-0">
        <CardTitle>Monthly Target</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="h-fit p-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto w-full h-36 p-0"
        >
          <RadialBarChart
            cx="50%"
            cy="80%"
            innerRadius={70}
            outerRadius={220}
            data={chartData}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar
              className="hidden"
              data={[{ value: 100 }]}
              dataKey="value"
            />

            <RadialBar
              data={chartData}
              dataKey="value"
              cornerRadius={5}
              fill="#7393B3"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};

export default MonthlyTargetChart;
