
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { generateMockWeeklyData, generateMockMonthlyData } from '@/utils/stepUtils';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const StepHistory = () => {
  const [weeklyData] = useState(() => generateMockWeeklyData());
  const [monthlyData] = useState(() => generateMockMonthlyData());

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-sm rounded-md">
          <p className="font-medium">{label}</p>
          <p className="text-blue-600">{`${payload[0].value.toLocaleString()} steps`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step History</h2>
      <Tabs defaultValue="weekly">
        <TabsList className="mb-4">
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
        </TabsList>
        
        <TabsContent value="weekly">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <XAxis dataKey="name" />
                <YAxis hide />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="steps" 
                  fill="#3B82F6" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>
        
        <TabsContent value="monthly">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <XAxis dataKey="name" />
                <YAxis hide />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="steps" 
                  fill="#10B981" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StepHistory;
