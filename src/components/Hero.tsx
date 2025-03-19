import React from "react";
import { ChevronDown } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Innovation Meets Excellence
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Transform your business with cutting-edge solutions that drive growth
          and success
        </p>
        <a
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          href="#users"
        >
          Get Started
        </a>
      </div>

      <a
        href="#users"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="text-white w-8 h-8" />
      </a>
    </div>
  );
};
