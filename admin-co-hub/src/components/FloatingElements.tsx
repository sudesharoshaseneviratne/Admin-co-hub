'use client';

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-200 rounded-full animate-float-slow opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-indigo-200 rounded-full animate-float-medium opacity-40"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-purple-200 rounded-full animate-float-fast opacity-50"></div>
      <div className="absolute bottom-20 right-40 w-5 h-5 bg-blue-300 rounded-full animate-float-slow opacity-30"></div>
      
      {/* Geometric Shapes */}
      <div className="absolute top-60 left-1/4 w-8 h-8 border-2 border-blue-200 rotate-45 animate-spin-slow opacity-20"></div>
      <div className="absolute bottom-60 right-1/4 w-6 h-6 border-2 border-indigo-200 animate-pulse opacity-30"></div>
      
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(90deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}