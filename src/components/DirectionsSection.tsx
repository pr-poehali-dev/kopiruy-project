import React from "react";
import TripCard from "./TripCard";

const DirectionsSection: React.FC = () => {
  const trips = [
    {
      time: "06:00",
      route: 'Место выезда: ДК "Строитель", ул. Республики 179',
      location: "Прибытие в Петропавловск до ж/д вокзала в 12:00-13:00",
      schedule: "",
    },
    {
      time: "06:00",
      route: 'Место выезда: ж/д вокзал, маг. "Магнум"',
      location:
        'Прибытие в Тюмень до ДК "Строитель", ул. Республики 179, в 12:00-13:00',
      schedule: "",
    },
    {
      time: "14:00",
      route: 'Место выезда: ДК "Строитель", ул. Республики 179',
      location: "Прибытие в Петропавловск до ж/д вокзала в 20:00-21:00",
      schedule: "",
    },
    {
      time: "14:00",
      route: 'Место выезда: ж/д вокзал, маг. "Магнум"',
      location:
        'Прибытие в Тюмень до ДК "Строитель", ул. Республики 179, в 20:00',
      schedule: "",
    },
    {
      time: "16:00",
      route: 'Место выезда: ж/д вокзал, маг. "Магнум"',
      location:
        'Прибытие в Тюмень до ДК "Строитель", ул. Республики 179, в 20:00',
      schedule: "",
    },
  ];

  return (
    <div className="text-white animate-fade-in">
      <div className="text-center mb-12">
        <div className="backdrop-blur-lg bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 mb-12 shadow-2xl">
          <h2 className="text-6xl font-bold mb-8 text-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text font-roboto drop-shadow-lg">
            Направления
          </h2>

          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-12 text-xl font-roboto">
            <div className="backdrop-blur-sm bg-white/10 border border-yellow-400/30 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <p className="text-yellow-300 font-medium">
                🚌 Тюмень - Петропавловск
              </p>
              <p className="text-white/80 text-sm mt-1">(ежедневно)</p>
            </div>
            <div className="backdrop-blur-sm bg-white/10 border border-yellow-400/30 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <p className="text-yellow-300 font-medium">
                🚌 Петропавловск - Тюмень
              </p>
              <p className="text-white/80 text-sm mt-1">(ежедневно)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {trips.map((trip, index) => (
          <div
            key={index}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <TripCard
              time={trip.time}
              route={trip.route}
              location={trip.location}
              schedule={trip.schedule}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectionsSection;
