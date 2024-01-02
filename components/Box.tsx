'use client';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  const Div = styled.div({ backgroundColor: 'pink', fontSize: '4rem' });
  return <Div {...props}>{children}</Div>;
};

export default Box;
