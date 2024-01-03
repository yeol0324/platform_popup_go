'use client';
import { HTMLAttributes } from 'react';
import styles from './IconBox.module.scss';
interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function IconBox({ children, ...props }: BoxProps) {
  return (
    <div className={styles.box} {...props}>
      {children}
    </div>
  );
}

interface IconProps {
  name: string;
}
const Icon = ({ name }: IconProps) => {
  return <img src={`/images/icon/${name}.png`} />;
};
IconBox.Icon = Icon;
interface LabelProps {
  children: React.ReactNode;
}
const Label = ({ children }: LabelProps) => {
  return <div className={styles.label}>{children}</div>;
};
IconBox.Label = Label;
