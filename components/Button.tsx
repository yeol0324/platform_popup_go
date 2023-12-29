'use client';
import theme from '@/styles/theme';
import styled from '@emotion/styled';
interface Props {
  size?: 'small' | 'default' | 'large';
  isBorder?: boolean;
  children: React.ReactNode;
}
const RoundButton = ({ size = 'default', isBorder, children }: Props) => {
  const Button = styled.button({
    background: theme.palette.primary,
  });
  return (
    <Button
      onClick={() => {
        alert();
      }}
    >
      <div
        css={theme => ({
          backgroundColor: theme.palette.sat,
        })}
      >
        hh
      </div>
      {children}
    </Button>
  );
};
export default RoundButton;
