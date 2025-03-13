import { useEffect, useCallback, useState } from 'react';

export function useOptimizedAnimation(
  animationFunction: () => void,
  dependencies: any[] = []
) {
  const [isAnimating, setIsAnimating] = useState(false);

  const optimizedAnimation = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      requestAnimationFrame(() => {
        animationFunction();
        setIsAnimating(false);
      });
    }
  }, [isAnimating, animationFunction]);

  useEffect(() => {
    optimizedAnimation();
  }, dependencies);

  return optimizedAnimation;
} 