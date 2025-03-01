import React from "react";

const AnimatedCosmicInterface = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
        <rect width="800" height="800" fill="black" />
        <radialGradient id="bgGrad" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#252550" />
          <stop offset="100%" stopColor="#121235" />
        </radialGradient>
        <rect width="800" height="800" />

        <polygon
          points="400,150 600,250 600,550 400,650 200,550 200,250"
          fill="none"
          stroke="rgba(120, 210, 255, 0.2)"
          strokeWidth="2"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 400 400"
            to="360 400 400"
            dur="20s"
            repeatCount="indefinite"
          />
        </polygon>
        <polygon
          points="400,180 570,270 570,530 400,620 230,530 230,270"
          fill="none"
          stroke="rgba(120, 210, 255, 0.15)"
          strokeWidth="1.5"
        />

        <circle
          cx="400"
          cy="400"
          r="200"
          fill="none"
          stroke="rgba(100, 200, 255, 0.2)"
          strokeWidth="1"
        >
          <animate
            attributeName="r"
            values="200;220;200"
            dur="5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="400"
          cy="400"
          r="150"
          fill="none"
          stroke="rgba(100, 200, 255, 0.3)"
          strokeWidth="1.5"
        >
          <animate
            attributeName="r"
            values="150;170;150"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="400"
          cy="400"
          r="100"
          fill="none"
          stroke="rgba(100, 200, 255, 0.4)"
          strokeWidth="2"
        >
          <animate
            attributeName="r"
            values="100;120;100"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>

        <circle
          cx="400"
          cy="400"
          r="85"
          fill="rgba(30, 40, 80, 0.6)"
          stroke="rgba(120, 210, 255, 0.7)"
          strokeWidth="3"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 400 400"
            to="360 400 400"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="400"
          cy="400"
          r="80"
          fill="none"
          stroke="rgba(255, 170, 80, 0.7)"
          strokeWidth="5"
          strokeDasharray="400 520"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 400 400"
            to="360 400 400"
            dur="15s"
            repeatCount="indefinite"
          />
        </circle>
        <image href="/logo.png" x="300" y="300" width="200" height="200" />
        <circle
          cx="220"
          cy="300"
          r="60"
          fill="rgba(40, 70, 110, 0.5)"
          stroke="rgba(100, 200, 255, 0.5)"
          strokeWidth="1.5"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 10 10; 0 0"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>
        <ellipse
          cx="220"
          cy="300"
          rx="70"
          ry="20"
          fill="none"
          stroke="rgba(100, 200, 255, 0.3)"
          strokeWidth="1"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; -10 -10; 0 0"
            dur="6s"
            repeatCount="indefinite"
          />
        </ellipse>
        <path
          d="M180 290 Q 220 270, 260 290 Q 240 320, 220 330 Q 200 320, 180 290"
          fill="rgba(100, 220, 255, 0.3)"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 5 5; 0 0"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>

        <circle cx="580" cy="320" r="50" fill="rgba(60, 50, 100, 0.4)">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; -5 5; 0 0"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>
        <path
          d="M550 310 Q 580 280, 610 310 Q 620 340, 590 350 Q 560 340, 550 310"
          fill="rgba(180, 120, 255, 0.2)"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 5 -5; 0 0"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M560 320 Q 580 300, 600 320 Q 605 335, 590 340 Q 570 335, 560 320"
          fill="rgba(180, 120, 255, 0.3)"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; -5 5; 0 0"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>

        <circle
          cx="300"
          cy="200"
          r="20"
          fill="rgba(50, 80, 120, 0.5)"
          stroke="rgba(100, 200, 255, 0.4)"
          strokeWidth="1"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 5 -5; 0 0"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="500"
          cy="200"
          r="15"
          fill="rgba(40, 70, 110, 0.5)"
          stroke="rgba(100, 200, 255, 0.4)"
          strokeWidth="1"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; -5 5; 0 0"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="500"
          cy="550"
          r="25"
          fill="rgba(40, 60, 100, 0.5)"
          stroke="rgba(100, 200, 255, 0.4)"
          strokeWidth="1"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 5 5; 0 0"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="300"
          cy="550"
          r="18"
          fill="rgba(50, 90, 130, 0.5)"
          stroke="rgba(100, 200, 255, 0.4)"
          strokeWidth="1"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; -5 -5; 0 0"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>

        <rect
          x="350"
          y="550"
          width="100"
          height="120"
          rx="10"
          fill="rgba(30, 45, 80, 0.5)"
          stroke="rgba(100, 200, 255, 0.5)"
          strokeWidth="1.5"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 5 -5; 0 0"
            dur="6s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="360"
          y="560"
          width="80"
          height="100"
          rx="5"
          fill="none"
          stroke="rgba(100, 200, 255, 0.3)"
          strokeWidth="1"
        />
        <path
          d="M370 650 L430 650 L420 570 L380 570 Z"
          fill="rgba(80, 180, 255, 0.3)"
        />
        <rect
          x="390"
          y="570"
          width="20"
          height="70"
          fill="rgba(100, 220, 255, 0.5)"
        />

        <ellipse
          cx="650"
          cy="450"
          rx="50"
          ry="15"
          fill="rgba(60, 100, 150, 0.3)"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; -5 5; 0 0"
            dur="6s"
            repeatCount="indefinite"
          />
        </ellipse>
        <rect
          x="630"
          y="435"
          width="40"
          height="30"
          rx="5"
          fill="rgba(40, 70, 110, 0.6)"
          stroke="rgba(100, 200, 255, 0.4)"
          strokeWidth="1"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 5 -5; 0 0"
            dur="6s"
            repeatCount="indefinite"
          />
        </rect>
        <line
          x1="600"
          y1="450"
          x2="700"
          y2="450"
          stroke="rgba(100, 200, 255, 0.7)"
          strokeWidth="1"
        >
          <animate
            attributeName="opacity"
            values="0;0.6;0"
            dur="3s"
            repeatCount="indefinite"
          />
        </line>
        <line
          x1="630"
          y1="430"
          x2="630"
          y2="470"
          stroke="rgba(100, 200, 255, 0.7)"
          strokeWidth="1"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; -5 5; 0 0"
            dur="6s"
            repeatCount="indefinite"
          />
        </line>
        <line
          x1="670"
          y1="430"
          x2="670"
          y2="470"
          stroke="rgba(100, 200, 255, 0.7)"
          strokeWidth="1"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 5 -5; 0 0"
            dur="6s"
            repeatCount="indefinite"
          />
        </line>

        <rect
          x="150"
          y="400"
          width="60"
          height="40"
          rx="5"
          fill="rgba(30, 45, 80, 0.5)"
          stroke="rgba(100, 200, 255, 0.5)"
          strokeWidth="1"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 5 5; 0 0"
            dur="6s"
            repeatCount="indefinite"
          />
        </rect>
        <line
          x1="160"
          y1="410"
          x2="200"
          y2="410"
          stroke="rgba(100, 220, 255, 0.7)"
          strokeWidth="1"
        />
        <line
          x1="160"
          y1="420"
          x2="190"
          y2="420"
          stroke="rgba(100, 220, 255, 0.6)"
          strokeWidth="1"
        />
        <line
          x1="160"
          y1="430"
          x2="195"
          y2="430"
          stroke="rgba(100, 220, 255, 0.5)"
          strokeWidth="1"
        />

        <circle
          cx="150"
          cy="530"
          r="45"
          fill="rgba(30, 45, 80, 0.5)"
          stroke="rgba(100, 200, 255, 0.5)"
          strokeWidth="1.5"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; -5 -5; 0 0"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>
        <path
          d="M120 520 Q 150 500, 180 520 Q 170 540, 150 550 Q 130 540, 120 520"
          fill="rgba(80, 180, 255, 0.2)"
        />
        <path
          d="M125 530 Q 150 515, 175 530 Q 165 545, 150 550 Q 135 545, 125 530"
          fill="rgba(80, 180, 255, 0.3)"
        />
        <line
          x1="150"
          y1="490"
          x2="150"
          y2="570"
          stroke="rgba(100, 200, 255, 0.5)"
          strokeWidth="1"
          strokeDasharray="2 3"
        />
        <line
          x1="110"
          y1="530"
          x2="190"
          y2="530"
          stroke="rgba(100, 200, 255, 0.5)"
          strokeWidth="1"
          strokeDasharray="2 3"
        />

        <text
          x="220"
          y="260"
          fontFamily="Arial, sans-serif"
          fontSize="12"
          fill="rgba(255, 255, 255, 0.8)"
        >
          PROXIMA
        </text>
        <text
          x="580"
          y="290"
          fontFamily="Arial, sans-serif"
          fontSize="12"
          fill="rgba(255, 255, 255, 0.8)"
        >
          HELIOS
        </text>
        <text
          x="150"
          y="380"
          fontFamily="Arial, sans-serif"
          fontSize="10"
          fill="rgba(255, 255, 255, 0.7)"
        >
          TELEMETRY
        </text>
        <text
          x="650"
          y="430"
          fontFamily="Arial, sans-serif"
          fontSize="10"
          fill="rgba(255, 255, 255, 0.7)"
        >
          OUTPOST
        </text>
        <text
          x="400"
          y="540"
          fontFamily="Arial, sans-serif"
          fontSize="10"
          fill="rgba(255, 255, 255, 0.7)"
        >
          CORE
        </text>

        <text
          x="510"
          y="180"
          fontFamily="Arial, sans-serif"
          fontSize="14"
          fill="rgba(255, 155, 155, 0.8)"
        >
          32/97
        </text>
        <text
          x="300"
          y="180"
          fontFamily="Arial, sans-serif"
          fontSize="14"
          fill="rgba(155, 255, 155, 0.8)"
        >
          15:4
        </text>

        <circle cx="550" cy="250" r="4" fill="rgba(255, 200, 50, 0.9)" />
        <circle cx="270" cy="250" r="4" fill="rgba(255, 200, 50, 0.9)" />
        <circle cx="400" cy="520" r="4" fill="rgba(255, 200, 50, 0.9)" />
        <circle cx="400" cy="280" r="4" fill="rgba(255, 200, 50, 0.9)" />
        <circle cx="620" cy="400" r="4" fill="rgba(100, 255, 150, 0.9)" />
        <circle cx="180" cy="400" r="4" fill="rgba(100, 255, 150, 0.9)" />

        <ellipse
          cx="400"
          cy="400"
          rx="320"
          ry="150"
          fill="none"
          stroke="rgba(255, 180, 100, 0.2)"
          strokeWidth="1"
          transform="rotate(15 400 400)"
        />
        <ellipse
          cx="400"
          cy="400"
          rx="280"
          ry="200"
          fill="none"
          stroke="rgba(180, 130, 255, 0.2)"
          strokeWidth="1"
          transform="rotate(-20 400 400)"
        />

        <circle cx="120" cy="120" r="1" fill="white" />
        <circle cx="220" cy="170" r="1" fill="white" />
        <circle cx="620" cy="120" r="1" fill="white" />
        <circle cx="720" cy="220" r="1" fill="white" />
        <circle cx="320" cy="720" r="1" fill="white" />
        <circle cx="520" cy="670" r="1" fill="white" />
        <circle cx="770" cy="570" r="1" fill="white" />
        <circle cx="170" cy="220" r="0.8" fill="white" />
        <circle cx="670" cy="320" r="0.8" fill="white" />
        <circle cx="370" cy="120" r="0.8" fill="white" />
        <circle cx="720" cy="620" r="0.8" fill="white" />

        <line
          x1="650"
          y1="100"
          x2="700"
          y2="150"
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth="1"
        >
          <animate
            attributeName="opacity"
            values="0;0.6;0"
            dur="3s"
            repeatCount="indefinite"
          />
        </line>
      </svg>
    </>
  );
};

export default AnimatedCosmicInterface;
