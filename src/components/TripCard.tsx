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
    <Card className="bg-gray-800 border-gray-700 p-6 hover:bg-gray-750 transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="text-white space-y-4">
        <h3 className="text-xl font-semibold text-yellow-400 font-roboto">
          Выезд в {time}
        </h3>

        <div className="text-gray-300 text-sm space-y-1 leading-relaxed font-roboto">
          <p>{route}</p>
          <p>{location}</p>
          <p>{schedule}</p>
        </div>

        <Button className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition-all duration-300 font-roboto">
          Забронировать поездку
        </Button>
      </div>
    </Card>
  );
};

export default TripCard;
