import React from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DirectionsSection from "@/components/DirectionsSection";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-yellow-400">
      <div className="container mx-auto px-6 py-8">
        <Navigation />
        <HeroSection />
        <DirectionsSection />
      </div>
    </div>
  );
};

export default Index;
