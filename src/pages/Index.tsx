import React from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DirectionsSection from "@/components/DirectionsSection";
import ServicesSection from "@/components/ServicesSection";

const Index: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "url(https://cdn.poehali.dev/files/43329680-9143-4b95-a1d1-0e92cb3523db.png)",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-6 py-8 relative z-10">
        <Navigation />
        <HeroSection />
        <DirectionsSection />
        <ServicesSection />
      </div>
    </div>
  );
};

export default Index;
