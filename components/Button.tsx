'use client';
import styled from '@emotion/styled';
import theme from '@/styles/theme';
interface Props {
  size?: 'small' | 'default' | 'large';
  isBorder?: boolean;
  children: React.ReactNode;
}
const Button = styled.button({
  background: theme.palette.primary,
});
const RoundButton = ({ size = 'default', isBorder, children }: Props) => {
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
