
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';

interface StepCounterProps {
  steps: number;
  goal: number;
}

const StepCounter = ({ steps, goal }: StepCounterProps) => {
  const [progressPercentage, setProgressPercentage] = useState(0);
  
  useEffect(() => {
    setProgressPercentage(Math.min((steps / goal) * 100, 100));
  }, [steps, goal]);

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48 mb-4">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="block text-4xl font-bold text-blue-600">{steps.toLocaleString()}</span>
                <span className="text-sm text-gray-500">steps</span>
              </div>
            </div>
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                fill="none" 
                stroke="#EEF2FF" 
                strokeWidth="10" 
              />
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                fill="none" 
                stroke="#3B82F6" 
                strokeWidth="10" 
                strokeDasharray={`${progressPercentage * 2.83} 283`}
                strokeDashoffset="0" 
                transform="rotate(-90 50 50)" 
              />
            </svg>
          </div>
          <div className="w-full mt-2">
            <div className="flex justify-between text-sm mb-1">
              <span>{steps.toLocaleString()} steps</span>
              <span>{goal.toLocaleString()} goal</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StepCounter;
