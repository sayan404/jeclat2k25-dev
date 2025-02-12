/// <reference types="next/image-types/global" />

declare module '*.svg' {
  import { FC, SVGProps } from 'react';
  const content: FC<SVGProps<SVGSVGElement>>;
  export default content;
}

// No need to declare these as they're already declared in next/image-types/global
// declare module '*.png'
// declare module '*.jpg'
// declare module '*.jpeg'
// declare module '*.gif'
// declare module '*.webp'

declare module '*.mp4' {
  const src: string;
  export default src;
} 