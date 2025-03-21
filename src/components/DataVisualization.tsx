
import { useState } from "react";
import { 
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, 
  Legend, ResponsiveContainer 
} from "recharts";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChartIcon, PieChartIcon, TrendingUpIcon } from "lucide-react";

// Sample data for charts
const monthlyData = [
  { name: "Jan", processed: 4000, ingested: 2400, errors: 240 },
  { name: "Feb", processed: 3000, ingested: 1398, errors: 139 },
  { name: "Mar", processed: 2000, ingested: 9800, errors: 980 },
  { name: "Apr", processed: 2780, ingested: 3908, errors: 390 },
  { name: "May", processed: 1890, ingested: 4800, errors: 480 },
  { name: "Jun", processed: 2390, ingested: 3800, errors: 380 },
  { name: "Jul", processed: 3490, ingested: 4300, errors: 430 },
];

const storageData = [
  { name: "S3", value: 400, color: "#8884d8" },
  { name: "Redshift", value: 300, color: "#82ca9d" },
  { name: "Snowflake", value: 300, color: "#ffc658" },
  { name: "Local", value: 200, color: "#ff8042" },
];

const pipelinePerformanceData = [
  { name: "ETL 1", success: 85, failure: 15 },
  { name: "ETL 2", success: 70, failure: 30 },
  { name: "ETL 3", success: 95, failure: 5 },
  { name: "ETL 4", success: 60, failure: 40 },
  { name: "ETL 5", success: 80, failure: 20 },
];

const chartConfig = {
  processed: {
    label: "Processed Data (GB)",
    color: "hsl(252, 95%, 70%)" // primary
  },
  ingested: {
    label: "Ingested Data (GB)",
    color: "hsl(217, 76%, 83%)" // secondary
  },
  errors: {
    label: "Errors (Count)",
    color: "hsl(0, 84%, 60%)" // destructive
  },
  success: {
    label: "Success (%)",
    color: "hsl(142, 76%, 45%)" // success green
  },
  failure: {
    label: "Failure (%)",
    color: "hsl(0, 84%, 60%)" // destructive
  }
};

export function DataVisualization() {
  const [activeTab, setActiveTab] = useState("data-flow");

  return (
    <section id="data-visualization" className="py-20 md:py-32 relative overflow-hidden bg-card/50">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-block mb-3">
            <span className="text-sm text-primary font-medium">Data Insights</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Interactive Data Visualization</h2>
          <p className="text-muted-foreground text-lg">
            Explore key metrics and insights from our data processing pipeline.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="data-flow" className="flex items-center gap-2">
                <TrendingUpIcon className="w-4 h-4" />
                <span>Data Flow</span>
              </TabsTrigger>
              <TabsTrigger value="pipeline-performance" className="flex items-center gap-2">
                <BarChartIcon className="w-4 h-4" />
                <span>Pipeline</span>
              </TabsTrigger>
              <TabsTrigger value="storage-distribution" className="flex items-center gap-2">
                <PieChartIcon className="w-4 h-4" />
                <span>Storage</span>
              </TabsTrigger>
            </TabsList>
            
            <div className="bg-card rounded-lg border border-border p-1 shadow-lg cyberpunk-border">
              <TabsContent value="data-flow" className="mt-0">
                <Card className="border-none shadow-none bg-transparent">
                  <CardHeader className="px-6">
                    <CardTitle>Monthly Data Processing</CardTitle>
                    <CardDescription>
                      Volume of data processed through our ETL pipeline
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="h-[400px] p-6">
                      <ChartContainer config={chartConfig} className="h-full">
                        <AreaChart
                          data={monthlyData}
                          margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Area
                            type="monotone"
                            dataKey="processed"
                            stackId="1"
                            stroke="hsl(252, 95%, 70%)"
                            fill="hsla(252, 95%, 70%, 0.5)"
                          />
                          <Area
                            type="monotone"
                            dataKey="ingested"
                            stackId="1"
                            stroke="hsl(217, 76%, 83%)"
                            fill="hsla(217, 76%, 83%, 0.5)"
                          />
                          <Area
                            type="monotone"
                            dataKey="errors"
                            stackId="1"
                            stroke="hsl(0, 84%, 60%)"
                            fill="hsla(0, 84%, 60%, 0.5)"
                          />
                        </AreaChart>
                      </ChartContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="pipeline-performance" className="mt-0">
                <Card className="border-none shadow-none bg-transparent">
                  <CardHeader className="px-6">
                    <CardTitle>ETL Pipeline Performance</CardTitle>
                    <CardDescription>
                      Success and failure rates across different ETL pipelines
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="h-[400px] p-6">
                      <ChartContainer config={chartConfig} className="h-full">
                        <BarChart
                          data={pipelinePerformanceData}
                          margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend />
                          <Bar dataKey="success" fill="hsl(142, 76%, 45%)" />
                          <Bar dataKey="failure" fill="hsl(0, 84%, 60%)" />
                        </BarChart>
                      </ChartContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="storage-distribution" className="mt-0">
                <Card className="border-none shadow-none bg-transparent">
                  <CardHeader className="px-6">
                    <CardTitle>Data Storage Distribution</CardTitle>
                    <CardDescription>
                      How data is distributed across different storage solutions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="h-[400px] p-6">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={storageData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {storageData.map((entry, index) => (
                              <Cell 
                                key={`cell-${index}`} 
                                fill={entry.color} 
                                className="hover:opacity-80 transition-opacity"
                              />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
