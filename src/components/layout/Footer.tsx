
import { useEffect, useState } from "react";

const Footer = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <footer className="bg-white border-t border-gray-200 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-500 mb-2 md:mb-0">
          {currentDate.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
        <div className="text-sm text-gray-500">
          © {currentDate.getFullYear()} StepTrack App
        </div>
      </div>
    </footer>
  );
};

export default Footer;
