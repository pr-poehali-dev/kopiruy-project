import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <div className="text-center text-white mb-16">
      <h1 className="text-6xl font-bold mb-2 text-yellow-400 font-roboto tracking-wide">
        Земляки
      </h1>

      <div className="mb-12">
        <h2 className="text-4xl font-light mb-8 leading-tight font-roboto">
          Междугородное
          <br />
          такси
        </h2>

        <div className="space-y-4 max-w-sm mx-auto">
          <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 font-roboto">
            ЗАКАЗАТЬ ПОЕЗДКУ
          </Button>

          <Button
            variant="outline"
            className="w-full border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 font-roboto"
          >
            ОТПРАВИТЬ ПОСЫЛКУ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
