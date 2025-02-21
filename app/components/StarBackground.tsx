"use client";
import React from 'react';

export default function StarBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <svg className="w-full h-full">
        <rect width="100%" height="100%" fill="#000" />
        
        {/* Small stars */}
        {[...Array(100)].map((_, i) => (
          <g key={i}>
            <circle 
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r={Math.random() * 1.5 + 0.5}
              fill="white"
            >
              <animate
                attributeName="opacity"
                values={`${Math.random() * 0.5};1;${Math.random() * 0.5}`}
                dur={`${Math.random() * 4 + 2}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}

        {/* Larger stars */}
        {[...Array(30)].map((_, i) => (
          <g key={`large-star-${i}`}>
            <circle 
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r={Math.random() * 2 + 1}
              fill="white"
            >
              <animate
                attributeName="opacity"
                values="0.2;0.8;0.2"
                dur={`${Math.random() * 6 + 3}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values={`${Math.random() * 1 + 1};${Math.random() * 2 + 1.5};${Math.random() * 1 + 1}`}
                dur={`${Math.random() * 4 + 2}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}

        {/* Star clusters */}
        {[...Array(8)].map((_, i) => {
          const centerX = `${Math.random() * 100}%`;
          const centerY = `${Math.random() * 100}%`;
          return (
            <g key={`cluster-${i}`}>
              {[...Array(6)].map((_, j) => (
                <circle
                  key={`cluster-star-${j}`}
                  cx={`calc(${centerX} + ${(Math.random() - 0.5) * 5}%)`}
                  cy={`calc(${centerY} + ${(Math.random() - 0.5) * 5}%)`}
                  r={Math.random() * 1 + 0.3}
                  fill="white"
                  opacity={Math.random() * 0.5 + 0.3}
                >
                  <animate
                    attributeName="opacity"
                    values={`${Math.random() * 0.3};${Math.random() * 0.7};${Math.random() * 0.3}`}
                    dur={`${Math.random() * 5 + 2}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
} 