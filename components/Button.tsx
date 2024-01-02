'use client';
import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'default' | 'large';
  isBorder?: boolean;
  children: React.ReactNode;
}
const Button = styled.button({
  background: theme.palette.primary,
});
const RoundButton = ({ size = 'default', isBorder, children, ...props }: Props) => {
  return (
    <Button {...props}>
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

// import colors from '_tosslib/constants/colors';
// import { ButtonHTMLAttributes } from 'react';

// interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: 'primary' | 'secondary';
//   size?: 'medium' | 'large';
// }

// export function Button({ variant = 'primary', size = 'medium', ...props }: Props) {
//   return (
//     <button
//       css={{
//         outline: 'none',
//         border: '0 solid transparent',
//         borderRadius: '7px',
//         cursor: 'pointer',
//         transition: 'background .2s ease,color .1s ease',
//         fontWeight: 600,
//         lineHeight: '26px',
//         ...TYPE_VARIANTS[variant],
//         ...SIZE_VARIANTS[size],
//       }}
//       {...props}
//     />
//   );
// }

// const TYPE_VARIANTS = {
//   primary: {
//     color: colors.grey50,
//     backgroundColor: colors.blue500,
//     '&:hover': {
//       backgroundColor: colors.blue600,
//     },
//   },
//   secondary: {
//     color: colors.grey700,
//     backgroundColor: colors.grey100,
//     '&:hover': {
//       backgroundColor: colors.grey300,
//     },
//   },
// };

// const SIZE_VARIANTS = {
//   medium: {
//     fontSize: '15px',
//     padding: '11px 16px',
//   },
//   large: {
//     fontSize: '17px',
//     padding: '11px 22px',
//   },
// };
