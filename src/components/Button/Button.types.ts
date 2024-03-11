// src/components/Button/Button.types.ts

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  theme?:  'nav' | 'img'; 
  disabled?: boolean;
}
