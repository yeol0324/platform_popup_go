'use client';
import { ThemeId } from '@/styles/style';
import theme from '@/styles/theme';
import styled from '@emotion/styled';
interface Props {
  size?: 'small' | 'default' | 'large';
  isBorder?: boolean;
  themeId: ThemeId;
  children: React.ReactNode;
}
const RoundButton = ({ size = 'default', themeId, isBorder, children }: Props) => {
  const Button = styled.button({
    background: theme[themeId].background,
    color: theme[themeId].color,
    border: '0px',
    fontSize: '2rem',
  });
  return (
    <Button
      onClick={() => {
        alert();
      }}
    >
      {children}
    </Button>
  );
};
export default RoundButton;
