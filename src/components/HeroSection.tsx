import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <div className="text-center text-white mb-20 animate-fade-in">
      <div className="backdrop-blur-lg bg-gradient-to-b from-white/15 to-white/5 border border-white/20 rounded-3xl p-12 shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500">
        <h1 className="text-7xl font-bold mb-6 text-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text font-roboto tracking-wide drop-shadow-2xl animate-scale-in">
          Земляки
        </h1>

        <div className="mb-12">
          <h2 className="text-5xl font-light mb-10 leading-tight font-roboto text-white/95 drop-shadow-lg">
            Междугородное
            <br />
            <span className="text-yellow-300">такси</span>
          </h2>

          <div className="space-y-6 max-w-md mx-auto">
            <Button className="w-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 hover:from-yellow-400 hover:to-yellow-600 text-black font-bold py-6 text-xl rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30 font-roboto border-2 border-yellow-300/50">
              🚗 ЗАКАЗАТЬ ПОЕЗДКУ
            </Button>

            <Button
              variant="outline"
              className="w-full border-2 border-yellow-400/80 bg-yellow-400/10 backdrop-blur-sm text-yellow-300 hover:bg-yellow-400 hover:text-black py-6 text-xl rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/30 font-roboto"
            >
              📦 ОТПРАВИТЬ ПОСЫЛКУ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
