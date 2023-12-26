'use client';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  const Div = styled.div({ backgroundColor: 'pink', fontSize: '4rem' });
  return <Div>{children}</Div>;
};

export default Box;
