'use client';
import { HTMLAttributes } from 'react';

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function IconBox({ children, ...props }: BoxProps) {
  return <div {...props}>{children}</div>;
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
  return <div>{children}</div>;
};
IconBox.Label = Label;
