'use client';
import { ButtonHTMLAttributes } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'default' | 'large';
  isBorder?: boolean;
  children: React.ReactNode;
}
export function Button({ size = 'default', isBorder, children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}
interface RoundButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'default' | 'large';
  isBorder?: boolean;
  children: React.ReactNode;
}
export function RoundButton({ size = 'default', isBorder, children, ...props }: RoundButtonProps) {
  return <button {...props}>{children}</button>;
}
