"use client"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart"

const chartData = [
  { month: "JavaScript", desktop: 10 },
  { month: "React.js", desktop: 9 },
  { month: "Next.js", desktop: 9 },
  { month: "TypeScript", desktop: 8 },
  { month: "HTML", desktop: 10 },
  { month: "CSS", desktop: 10 },
]

const chartConfig = {
  desktop: {
    label: "Skill",
    color: "#6e77b0",
  }
} satisfies ChartConfig

export const Expertise = ({ id }: { id: string }) => {
  return (
    <div id={id} className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-extrabold lg:text-5xl text-center">Programming Services</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              layout="vertical"
              margin={{
                right: 16,
              }}
            >
              <CartesianGrid horizontal={false} />
              <YAxis
                dataKey="month"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
                hide
              />
              <XAxis dataKey="desktop" type="number" hide />
              <Bar
                dataKey="desktop"
                layout="vertical"
                fill="var(--color-desktop)"
                radius={4}
              >
                <LabelList
                  dataKey="month"
                  position="insideLeft"
                  offset={8}
                  className="fill-background"
                  fontSize={16}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
