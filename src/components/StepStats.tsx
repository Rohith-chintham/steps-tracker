
import { Card, CardContent } from '@/components/ui/card';
import { calculateCalories, calculateDistance, calculateActiveMinutes } from '@/utils/stepUtils';

interface StepStatsProps {
  steps: number;
  goal: number;
}

const StepStats = ({ steps, goal }: StepStatsProps) => {
  const calories = calculateCalories(steps);
  const distance = calculateDistance(steps);
  const activeMinutes = calculateActiveMinutes(steps);
  const goalPercentage = Math.min(Math.round((steps / goal) * 100), 100);

  const stats = [
    { 
      label: 'Distance', 
      value: `${distance.toFixed(2)} km`,
      icon: '🚶',
      color: 'bg-blue-100 text-blue-600'
    },
    { 
      label: 'Calories', 
      value: `${calories} kcal`,
      icon: '🔥',
      color: 'bg-orange-100 text-orange-600'
    },
    { 
      label: 'Active Minutes', 
      value: `${activeMinutes} mins`,
      icon: '⏱️',
      color: 'bg-green-100 text-green-600'
    },
    { 
      label: 'Goal Completion', 
      value: `${goalPercentage}%`,
      icon: '🎯',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Statistics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4 flex items-center">
              <div className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center mr-3`}>
                <span className="text-xl">{stat.icon}</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                <p className="text-xl font-bold">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StepStats;
