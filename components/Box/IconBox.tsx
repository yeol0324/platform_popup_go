'use client';
import { HTMLAttributes } from 'react';
import styles from './Box.module.scss';
interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  iconName: string;
}

export function IconBox({ iconName, ...props }: BoxProps) {
  return <div className={`icon--${iconName}`} {...props}></div>;
}
