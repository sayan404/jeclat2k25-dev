import { ReactNode, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const CosmicLoader = dynamic(() => import('./ui/CosmicLoader'), {
  ssr: false
});

interface PerformanceWrapperProps {
  children: ReactNode;
  loadingTime?: number;
}

export default function PerformanceWrapper({
  children,
  loadingTime = 1000
}: PerformanceWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), loadingTime);
    return () => clearTimeout(timer);
  }, [loadingTime]);

  return (
    <>
      <CosmicLoader isVisible={isLoading} />
      <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  );
} 