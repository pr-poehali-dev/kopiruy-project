import React from "react";

const Navigation: React.FC = () => {
  return (
    <nav className="text-white/70 text-sm mb-8 font-roboto">
      <span className="hover:text-white transition-colors cursor-pointer">
        Тюмень
      </span>
      <span className="mx-2">↔</span>
      <span className="hover:text-white transition-colors cursor-pointer">
        Петропавловск
      </span>
    </nav>
  );
};

export default Navigation;
