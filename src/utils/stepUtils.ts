
// Utility functions for step tracking calculations

// Convert steps to approximate distance in kilometers
// Average step length is about 0.76 meters
export const calculateDistance = (steps: number): number => {
  const averageStepLengthInMeters = 0.76;
  return (steps * averageStepLengthInMeters) / 1000; // Convert to kilometers
};

// Calculate approximate calories burned based on steps
// A rough estimate is 0.04 calories per step for an average person
export const calculateCalories = (steps: number): number => {
  const caloriesPerStep = 0.04;
  return Math.round(steps * caloriesPerStep);
};

// Calculate active minutes based on steps
// Assuming average pace of 100 steps per minute during active time
export const calculateActiveMinutes = (steps: number): number => {
  const averageStepsPerMinute = 100;
  return Math.round(steps / averageStepsPerMinute);
};

// Generate mock data for the history charts
export const generateMockWeeklyData = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return days.map(day => ({
    name: day,
    steps: Math.floor(Math.random() * 5000) + 3000, // Random steps between 3000-8000
  }));
};

export const generateMockMonthlyData = () => {
  return Array.from({ length: 30 }, (_, i) => ({
    name: `${i + 1}`,
    steps: Math.floor(Math.random() * 6000) + 2000, // Random steps between 2000-8000
  }));
};
