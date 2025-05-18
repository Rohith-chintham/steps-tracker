
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StepCounter from '@/components/StepCounter';
import StepGoal from '@/components/StepGoal';
import StepHistory from '@/components/StepHistory';
import StepStats from '@/components/StepStats';

const Index = () => {
  const [steps, setSteps] = useState(0);
  const [goal, setGoal] = useState(10000);
  
  // Simulate step counting - in a real app, this would use device sensors
  useEffect(() => {
    const interval = setInterval(() => {
      // Random step increment between 5-15 steps every few seconds
      // This is just for demo purposes
      if (Math.random() > 0.7) {
        setSteps(prev => prev + Math.floor(Math.random() * 10) + 5);
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Today's Progress</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StepCounter steps={steps} goal={goal} />
            <StepGoal currentGoal={goal} onUpdateGoal={setGoal} />
          </div>
        </div>
        
        <Tabs defaultValue="history" className="w-full">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="stats">Statistics</TabsTrigger>
          </TabsList>
          <TabsContent value="history">
            <Card className="p-6">
              <StepHistory />
            </Card>
          </TabsContent>
          <TabsContent value="stats">
            <Card className="p-6">
              <StepStats steps={steps} goal={goal} />
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
