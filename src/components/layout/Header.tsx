
import { MenuIcon, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="mr-2 md:hidden">
            <MenuIcon size={24} />
          </Button>
          <h1 className="text-xl font-bold text-blue-600">StepTrack</h1>
        </div>
        <div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <User size={24} className="text-blue-600" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
