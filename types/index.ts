import { ReactNode } from "react";

export interface NavItem {
  name: string;
  icon: ReactNode;
  path: string;
}

declare module "*.png" {
  const value: string;
  export default value;
} 