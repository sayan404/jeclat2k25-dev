'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: 'small' | 'large';
}

export default function StarField() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      const numSmallStars = 50;
      const numLargeStars = 10;

      // Generate small stars
      for (let i = 0; i < numSmallStars; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 2,
          type: 'small',
        });
      }

      // Generate large stars
      for (let i = 0; i < numLargeStars; i++) {
        newStars.push({
          id: numSmallStars + i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 2,
          duration: Math.random() * 4 + 3,
          delay: Math.random() * 2,
          type: 'large',
        });
      }

      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-non bg-blacke">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className={`absolute rounded-full ${
            star.type === 'large' 
              ? 'bg-purple-300' 
              : 'bg-white'
          }`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: star.type === 'large' 
              ? [0.4, 1, 0.4] 
              : [0.2, 1, 0.2],
            scale: star.type === 'large' 
              ? [1, 1.5, 1] 
              : [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
} 