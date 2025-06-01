import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TripCardProps {
  time: string;
  route: string;
  location: string;
  schedule: string;
}

const TripCard: React.FC<TripCardProps> = ({
  time,
  route,
  location,
  schedule,
}) => {
  return (
    <Card className="backdrop-blur-lg bg-gradient-to-b from-gray-800/80 to-gray-900/90 border-2 border-gray-600/50 hover:border-yellow-400/60 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 rounded-2xl group overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="text-white space-y-6 relative z-10">
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-pulse"></div>
          <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text font-roboto">
            Выезд в {time}
          </h3>
        </div>

        <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
          <div className="text-gray-200 text-base leading-relaxed font-roboto space-y-2">
            <p className="flex items-start space-x-2">
              <span className="text-yellow-400 mt-1">📍</span>
              <span>{route}</span>
            </p>
            <p className="flex items-start space-x-2">
              <span className="text-yellow-400 mt-1">🎯</span>
              <span>{location}</span>
            </p>
            {schedule && (
              <p className="flex items-start space-x-2">
                <span className="text-yellow-400 mt-1">📅</span>
                <span>{schedule}</span>
              </p>
            )}
          </div>
        </div>

        <Button className="w-full mt-6 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 hover:from-yellow-400 hover:to-yellow-600 text-black font-bold py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/30 font-roboto border-2 border-yellow-300/50 group">
          <span className="flex items-center justify-center space-x-2">
            <span>🎫</span>
            <span>Забронировать поездку</span>
          </span>
        </Button>
      </div>
    </Card>
  );
};

export default TripCard;
