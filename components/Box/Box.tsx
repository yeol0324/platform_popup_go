'use client';
import { HTMLAttributes } from 'react';
import styles from './Box.module.scss';

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: 'column' | 'row';
}

export function Box({ children, ...props }: BoxProps) {
  return <div {...props}>{children}</div>;
}
export function FlexBox({ children, direction, ...props }: BoxProps) {
  return (
    <div style={{ display: 'flex', flexDirection: direction }} {...props}>
      {children}
    </div>
  );
}
