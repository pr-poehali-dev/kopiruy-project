import React from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DirectionsSection from "@/components/DirectionsSection";

const Index: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "url(https://cdn.poehali.dev/files/0a1afa8b-a0d8-4272-a230-db010042fc5a.png)",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-6 py-8 relative z-10">
        <Navigation />
        <HeroSection />
        <DirectionsSection />
      </div>
    </div>
  );
};

export default Index;
