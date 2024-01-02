'use client';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function IconBox({ children, ...props }: BoxProps) {
  const Div = styled.div({ backgroundColor: 'pink', fontSize: '1rem' });
  return <Div {...props}>{children}</Div>;
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
  const Div = styled.div({ backgroundColor: 'pink', fontSize: '1rem' });

  return <Div>{children}</Div>;
};
IconBox.Label = Label;
