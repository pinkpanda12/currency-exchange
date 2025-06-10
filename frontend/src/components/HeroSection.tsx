import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  // Replace these with your own image URLs
  const images = [
    "/exchnage.jpg",
    "/coins.jpg",
    "/note.jpg",
    "/oldc.jpg",

  ];

  const scrollToForm = () => {
    const element = document.getElementById('request-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('trust-indicators');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotate images every 5 seconds (pauses when hovered)
  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isHovering, images.length]);

  return (
    <section className={cn("py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white", className)}>
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium border border-blue-200 shadow-sm">
                <span className="mr-2">🏛️</span>
                <span>Government Authorized Service</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Exchange Your 
                <span className="block text-blue-600 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Old Indian Currency
                </span>
                <span className="block text-lg md:text-xl font-normal text-slate-600 mt-4">
                  Safe • Legal • Hassle-Free
                </span>
              </h1>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Convert your old, discontinued, or damaged Indian currency notes through our secure, 
              government-approved exchange process. Fast and reliable service across India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToForm}
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Exchange Process
              </Button>
              <Button 
                variant="outline"
                onClick={scrollToServices}
                className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-md"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div 
              className="bg-white p-6 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative group"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Image Carousel */}
              <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <img
                      src={image}
                      alt={`Currency exchange ${index + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                ))}
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  aria-label="Previous image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  aria-label="Next image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Image Navigation Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center space-x-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Currency Badge */}
              {/*<div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-blue-500 p-4 rounded-xl shadow-xl border border-blue-300 transform hover:scale-110 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">₹</div>
                  <div className="text-xs text-white/90">Secure Exchange</div>
                </div> 
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;