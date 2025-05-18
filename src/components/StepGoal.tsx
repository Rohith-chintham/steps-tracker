
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { toast } from 'sonner';

interface StepGoalProps {
  currentGoal: number;
  onUpdateGoal: (goal: number) => void;
}

const StepGoal = ({ currentGoal, onUpdateGoal }: StepGoalProps) => {
  const [newGoal, setNewGoal] = useState(currentGoal);
  
  const handleSaveGoal = () => {
    onUpdateGoal(newGoal);
    toast.success(`Daily step goal updated to ${newGoal.toLocaleString()} steps`);
  };

  const presetGoals = [5000, 7500, 10000, 12500, 15000];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Daily Step Goal</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center mb-6">
          <span className="text-3xl font-bold text-blue-600">{newGoal.toLocaleString()}</span>
          <span className="text-gray-500 ml-2">steps</span>
        </div>
        
        <Slider
          value={[newGoal]}
          min={1000}
          max={20000}
          step={500}
          onValueChange={(values) => setNewGoal(values[0])}
          className="mb-6"
        />
        
        <div className="grid grid-cols-5 gap-2 mb-6">
          {presetGoals.map(goal => (
            <Button 
              key={goal}
              variant={newGoal === goal ? "default" : "outline"} 
              size="sm"
              className="w-full"
              onClick={() => setNewGoal(goal)}
            >
              {(goal / 1000).toFixed(0)}K
            </Button>
          ))}
        </div>
        
        <Button 
          className="w-full" 
          onClick={handleSaveGoal}
          disabled={newGoal === currentGoal}
        >
          Save Goal
        </Button>
      </CardContent>
    </Card>
  );
};

export default StepGoal;
