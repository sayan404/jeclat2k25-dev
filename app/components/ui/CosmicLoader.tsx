"use client";
import React from "react";

interface CosmicLoaderProps {
  isVisible?: boolean;
}

const CosmicLoader = ({ isVisible = false }: CosmicLoaderProps) => {
  if (!isVisible) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      <div className="relative">
        {/* Glowing background effect */}
        <div className="absolute inset-0 blur-xl">
          <div className="w-32 h-32 bg-blue-500/20 rounded-full animate-pulse" />
          <div className="w-32 h-32 bg-purple-500/20 rounded-full animate-pulse delay-75" />
        </div>

        {/* Multiple orbital rings */}
        <div className="relative w-32 h-32">
          {/* Outer orbital rings */}
          <div
            className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-spin duration-3000"
            style={{ transform: "rotate(30deg)" }}
          />
          <div
            className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-spin duration-2500"
            style={{ transform: "rotate(60deg)" }}
          />
          <div
            className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-spin duration-2000"
            style={{ transform: "rotate(90deg)" }}
          />

          {/* Inner rotating rings */}
          <div className="absolute inset-4 rounded-full border-t-2 border-r-2 border-blue-500 animate-spin" />
          <div className="absolute inset-8 rounded-full border-b-2 border-l-2 border-purple-500 animate-spin-slow" />

          {/* Center cosmic core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-6 h-6">
              <div className="absolute inset-0 bg-white rounded-full animate-pulse" />
              <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75" />
              <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping delay-100 opacity-75" />
            </div>
          </div>

          {/* Orbiting particles */}
          <div className="absolute w-full h-full animate-spin-slow">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${i * 45}deg) translateX(${48}px)`,
                }}
              >
                <div className="w-full h-full bg-white rounded-full animate-pulse" />
              </div>
            ))}
          </div>

          {/* Shooting stars */}
          <div className="absolute -inset-1/2 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `shooting-star 1.5s linear infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Loading text */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-blue-300 font-light tracking-wider text-sm">
          <span className="animate-pulse">Loading</span>
          <span className="animate-bounce delay-100">.</span>
          <span className="animate-bounce delay-200">.</span>
          <span className="animate-bounce delay-300">.</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes shooting-star {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
            opacity: 1;
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CosmicLoader;
