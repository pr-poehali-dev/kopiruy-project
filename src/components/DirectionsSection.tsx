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
    <div className="text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-8 text-yellow-400 font-roboto">
          Направления
        </h2>

        <div className="flex justify-center space-x-8 mb-8 text-lg font-roboto">
          <div className="text-center">
            <p className="text-white">Тюмень - Петропавловск (ежедневно)</p>
          </div>
          <div className="text-center">
            <p className="text-white">Петропавловск - Тюмень (ежедневно)</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {trips.map((trip, index) => (
          <TripCard
            key={index}
            time={trip.time}
            route={trip.route}
            location={trip.location}
            schedule={trip.schedule}
          />
        ))}
      </div>
    </div>
  );
};

export default DirectionsSection;
