import React from "react";

const Navigation: React.FC = () => {
  return (
    <nav className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-6 py-4 mb-8 shadow-2xl animate-fade-in">
      <div className="flex items-center justify-center space-x-4 text-white/90 text-lg font-medium font-roboto">
        <span className="hover:text-yellow-400 transition-all duration-300 cursor-pointer hover:scale-110 relative group">
          Тюмень
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300"></div>
        </span>
        <div className="text-yellow-400 animate-pulse text-2xl">⟷</div>
        <span className="hover:text-yellow-400 transition-all duration-300 cursor-pointer hover:scale-110 relative group">
          Петропавловск
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300"></div>
        </span>
      </div>
    </nav>
  );
};

export default Navigation;
