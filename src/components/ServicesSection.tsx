import React from "react";
import { Button } from "@/components/ui/button";

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: "🚗",
      title: "ЦЕНА ПОЕЗДКИ 2500 РУБ",
      description: [
        "○ Расчет в любой валюте",
        "○ Оплата наличными либо переводом на карту Kaspi, Сбербанк, Тинькофф, ВТБ",
      ],
      buttonText: "ЗАБРОНИРОВАТЬ ПОЕЗДКУ",
    },
    {
      icon: "📱",
      title: "ДОСТАВКА ПОСЫЛОК",
      description: [
        "С нами Вы можете надежно отправить посылку в Тюмень или в Петропавловск. Стоимость посылки зависит от размера.",
      ],
      buttonText: "ОТПРАВИТЬ ПОСЫЛКУ",
    },
    {
      icon: "🎩",
      title: "ВСТРЕЧА И ТРАНСФЕР",
      description: [
        "Вы можете забронировать индивидуальный трансфер и встречу с ж/д вокзала или аэропорта за дополнительную плату.",
      ],
      buttonText: "УЗНАТЬ ЦЕНУ",
    },
  ];

  return (
    <div className="text-white animate-fade-in mt-20">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold mb-8 text-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text font-roboto drop-shadow-lg">
          Наши услуги
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="backdrop-blur-lg bg-gradient-to-b from-yellow-500/20 to-yellow-600/10 border border-yellow-400/30 rounded-3xl p-8 shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-yellow-300 font-roboto mb-4">
                {service.title}
              </h3>
            </div>

            <div className="space-y-3 mb-8 text-white/90 text-sm font-roboto">
              {service.description.map((line, lineIndex) => (
                <p key={lineIndex} className="leading-relaxed">
                  {line}
                </p>
              ))}
            </div>

            <Button className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-bold py-4 text-sm rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/30 font-roboto border border-gray-600">
              {service.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
