import React from 'react';
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToForm = () => {
    const element = document.getElementById('request-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={cn(
      "w-full py-3 px-4 md:px-6 bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50",
      className
    )}>
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:gap-0">
        
        {/* Logo & Title + Mobile Button */}
        <div className="flex w-full items-center justify-between md:w-auto md:justify-start">
          
          {/* Logo and Title */}
          <div className="flex items-center gap-2 text-sm sm:text-base md:text-xl">
            <div className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-base sm:text-lg md:text-xl">₹</span>
            </div>
            <div className="font-bold text-slate-800 whitespace-nowrap leading-none">
              <span className="text-blue-600">Rupee</span>
              <span className="text-slate-700">Exchange</span>
            </div>
          </div>

          {/* Mobile Exchange Now Button */}
          <div className="md:hidden">
            <button 
              onClick={scrollToForm}
              className="px-3 py-1 text-xs sm:text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Exchange Now
            </button>
          </div>
        </div>

        {/* Navigation Links (Desktop Only) */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('trust-indicators')} 
            className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('request-form')} 
            className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
          >
            Process
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')} 
            className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
          >
            Reviews
          </button>
        </nav>

        {/* Desktop Exchange Now Button */}
        <div className="hidden md:block">
          <button 
            onClick={scrollToForm}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Exchange Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
