// components/ui/svgicon.tsx

import React from 'react';

export const AboutIcon = () => (
  <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="25" r="20" fill="none" stroke="url(#grad1)" strokeWidth="2.5"/>
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'rgb(255,0,0)', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'rgb(0,0,255)', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
  </svg>
);

export const EventsIcon = () => (
  <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 5 Q35 10, 25 15 T25 25 T25 35 T25 45" fill="none" stroke="url(#grad2)" strokeWidth="2.5"/>
    <defs>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'rgb(255,0,255)', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'rgb(0,255,255)', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
  </svg>
);

export const SocialIcon = () => (
  <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="15" r="10" fill="none" stroke="blue" strokeWidth="2.5"/>
    <circle cx="35" cy="35" r="10" fill="none" stroke="red" strokeWidth="2.5"/>
    <line x1="15" y1="15" x2="35" y2="35" stroke="green" strokeWidth="2.5"/>
  </svg>
);

export const ArchiveIcon = () => (
  <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="archiveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'rgb(255,165,0)', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'rgb(75,0,130)', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <polygon points="25,5 35,20 25,35 15,20" fill="none" stroke="url(#archiveGrad)" strokeWidth="2.5"/>
    <line x1="25" y1="5" x2="25" y2="35" stroke="url(#archiveGrad)" strokeWidth="2.5"/>
  </svg>
);

export const TeamIcon = () => (
  <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="teamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'rgb(255,105,180)', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'rgb(65,105,225)', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <circle cx="25" cy="25" r="20" fill="none" stroke="url(#teamGrad)" strokeWidth="2.5"/>
    <path d="M15 25 Q25 15, 35 25 Q25 35, 15 25" fill="none" stroke="url(#teamGrad)" strokeWidth="2.5"/>
    <circle cx="25" cy="25" r="5" fill="url(#teamGrad)" />
  </svg>
);

export const ContactIcon = () => (
  <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="15" width="20" height="20" fill="none" stroke="purple" strokeWidth="2.5"/>
    <line x1="15" y1="15" x2="35" y2="35" stroke="purple" strokeWidth="2.5"/>
  </svg>
);

export const MerchandiseIcon = () => (
  <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="30" height="20" fill="none" stroke="orange" strokeWidth="2.5"/>
    <circle cx="25" cy="35" r="5" fill="none" stroke="orange" strokeWidth="2.5"/>
  </svg>
);