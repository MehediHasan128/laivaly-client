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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

const chartData = [
  { date: "2024-04-01", sell: 222, revenue: 150 },
  { date: "2024-04-02", sell: 97, revenue: 180 },
  { date: "2024-04-03", sell: 167, revenue: 120 },
  { date: "2024-04-04", sell: 242, revenue: 260 },
  { date: "2024-04-05", sell: 373, revenue: 290 },
  { date: "2024-04-06", sell: 301, revenue: 340 },
  { date: "2024-04-07", sell: 245, revenue: 180 },
  { date: "2024-04-08", sell: 409, revenue: 320 },
  { date: "2024-04-09", sell: 59, revenue: 110 },
  { date: "2024-04-10", sell: 261, revenue: 190 },
  { date: "2024-04-11", sell: 327, revenue: 350 },
  { date: "2024-04-12", sell: 292, revenue: 210 },
  { date: "2024-04-13", sell: 342, revenue: 380 },
  { date: "2024-04-14", sell: 137, revenue: 220 },
  { date: "2024-04-15", sell: 120, revenue: 170 },
  { date: "2024-04-16", sell: 138, revenue: 190 },
  { date: "2024-04-17", sell: 446, revenue: 360 },
  { date: "2024-04-18", sell: 364, revenue: 410 },
  { date: "2024-04-19", sell: 243, revenue: 180 },
  { date: "2024-04-20", sell: 89, revenue: 150 },
  { date: "2024-04-21", sell: 137, revenue: 200 },
  { date: "2024-04-22", sell: 224, revenue: 170 },
  { date: "2024-04-23", sell: 138, revenue: 230 },
  { date: "2024-04-24", sell: 387, revenue: 290 },
  { date: "2024-04-25", sell: 215, revenue: 250 },
  { date: "2024-04-26", sell: 75, revenue: 130 },
  { date: "2024-04-27", sell: 383, revenue: 420 },
  { date: "2024-04-28", sell: 122, revenue: 180 },
  { date: "2024-04-29", sell: 315, revenue: 240 },
  { date: "2024-04-30", sell: 454, revenue: 380 },
  { date: "2024-05-01", sell: 165, revenue: 220 },
  { date: "2024-05-02", sell: 293, revenue: 310 },
  { date: "2024-05-03", sell: 247, revenue: 190 },
  { date: "2024-05-04", sell: 385, revenue: 420 },
  { date: "2024-05-05", sell: 481, revenue: 390 },
  { date: "2024-05-06", sell: 498, revenue: 520 },
  { date: "2024-05-07", sell: 388, revenue: 300 },
  { date: "2024-05-08", sell: 149, revenue: 210 },
  { date: "2024-05-09", sell: 227, revenue: 180 },
  { date: "2024-05-10", sell: 293, revenue: 330 },
  { date: "2024-05-11", sell: 335, revenue: 270 },
  { date: "2024-05-12", sell: 197, revenue: 240 },
  { date: "2024-05-13", sell: 197, revenue: 160 },
  { date: "2024-05-14", sell: 448, revenue: 490 },
  { date: "2024-05-15", sell: 473, revenue: 380 },
  { date: "2024-05-16", sell: 338, revenue: 400 },
  { date: "2024-05-17", sell: 499, revenue: 420 },
  { date: "2024-05-18", sell: 315, revenue: 350 },
  { date: "2024-05-19", sell: 235, revenue: 180 },
  { date: "2024-05-20", sell: 177, revenue: 230 },
  { date: "2024-05-21", sell: 82, revenue: 140 },
  { date: "2024-05-22", sell: 81, revenue: 120 },
  { date: "2024-05-23", sell: 252, revenue: 290 },
  { date: "2024-05-24", sell: 294, revenue: 220 },
  { date: "2024-05-25", sell: 201, revenue: 250 },
  { date: "2024-05-26", sell: 213, revenue: 170 },
  { date: "2024-05-27", sell: 420, revenue: 460 },
  { date: "2024-05-28", sell: 233, revenue: 190 },
  { date: "2024-05-29", sell: 78, revenue: 130 },
  { date: "2024-05-30", sell: 340, revenue: 280 },
  { date: "2024-05-31", sell: 178, revenue: 230 },
  { date: "2024-06-01", sell: 178, revenue: 200 },
  { date: "2024-06-02", sell: 470, revenue: 410 },
  { date: "2024-06-03", sell: 103, revenue: 160 },
  { date: "2024-06-04", sell: 439, revenue: 380 },
  { date: "2024-06-05", sell: 88, revenue: 140 },
  { date: "2024-06-06", sell: 294, revenue: 250 },
  { date: "2024-06-07", sell: 323, revenue: 370 },
  { date: "2024-06-08", sell: 385, revenue: 320 },
  { date: "2024-06-09", sell: 438, revenue: 480 },
  { date: "2024-06-10", sell: 155, revenue: 200 },
  { date: "2024-06-11", sell: 92, revenue: 150 },
  { date: "2024-06-12", sell: 492, revenue: 420 },
  { date: "2024-06-13", sell: 81, revenue: 130 },
  { date: "2024-06-14", sell: 426, revenue: 380 },
  { date: "2024-06-15", sell: 307, revenue: 350 },
  { date: "2024-06-16", sell: 371, revenue: 310 },
  { date: "2024-06-17", sell: 475, revenue: 520 },
  { date: "2024-06-18", sell: 107, revenue: 170 },
  { date: "2024-06-19", sell: 341, revenue: 290 },
  { date: "2024-06-20", sell: 408, revenue: 450 },
  { date: "2024-06-21", sell: 169, revenue: 210 },
  { date: "2024-06-22", sell: 317, revenue: 270 },
  { date: "2024-06-23", sell: 480, revenue: 530 },
  { date: "2024-06-24", sell: 132, revenue: 180 },
  { date: "2024-06-25", sell: 141, revenue: 190 },
  { date: "2024-06-26", sell: 434, revenue: 380 },
  { date: "2024-06-27", sell: 448, revenue: 490 },
  { date: "2024-06-28", sell: 149, revenue: 200 },
  { date: "2024-06-29", sell: 103, revenue: 160 },
  { date: "2024-06-30", sell: 446, revenue: 400 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "revenue",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "sell",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const ChartAreaInteractive = () => {
  const [timeRange, setTimeRange] = useState("7d");
  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });
  return (
    <Card className="bg-transparent border-0 shadow-none">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b">
        <div className="grid flex-1 gap-1">
          <CardTitle>Revenue Analytics</CardTitle>
          <CardDescription>
            Tracks total revenue from the past 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] px-4 py-0 rounded-lg"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="h-[200px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="sell"
              type="natural"
              fill="#7393B3"
              stroke="#5076AF"
              stackId="a"
            />
            <Area
              dataKey="revenue"
              type="natural"
              fill="#B2BEB5"
              stroke="#758A7A"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ChartAreaInteractive;
