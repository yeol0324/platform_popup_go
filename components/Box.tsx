'use client';
import { HTMLAttributes } from 'react';

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default Box;
