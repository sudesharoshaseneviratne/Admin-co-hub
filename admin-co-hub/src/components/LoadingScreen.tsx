'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show loading screen on initial page load, not on hash navigation
    const isInitialLoad = !sessionStorage.getItem('hasVisited');
    
    if (isInitialLoad) {
      setIsVisible(true);
      sessionStorage.setItem('hasVisited', 'true');
      
      // Show loading screen for 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500">
      {/* Transparent blurred background */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-md"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Animated Logo */}
        <div className="relative mb-6">
          <div className="w-20 h-20 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-blue-600/20 rounded-full animate-ping"></div>
            <div className="absolute inset-2 bg-blue-600/40 rounded-full animate-pulse"></div>
            <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Image 
                src="/logo-transparent.png" 
                alt="Admin & Co. Hub Logo" 
                width={48} 
                height={48}
                className="object-contain"
              />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2 animate-fade-in">
            Admin & Co Hub
          </h1>
          <p className="text-gray-600 animate-fade-in-delay">
            Streamlined Outsourcing Solutions
          </p>
        </div>

        {/* Simple loading dots instead of progress bar */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
}