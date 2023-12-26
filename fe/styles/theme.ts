import { Theme } from '@emotion/react';

const color = {
  primary: '#FFC600',
  'primary-light': '#fdf4da',
  'primary-dark': '#b39e00',
};
const palette = {
  // teal
  teal0: '#F3FFFB',
  teal1: '#C3FAE8',
  //   gray
  gray0: '#F8F9FA',
  gray1: '#F1F3F5',
  // red
  red0: '#FFF5F5',
  red1: '#FFE3E3',
};
const theme: Theme = {
  theme01: {
    background: palette.gray1,
    color: palette.red0,
    hoverBackground: palette.gray0,
  },
  theme02: {
    background: palette.teal0,
    color: palette.red1,
    hoverBackground: palette.teal1,
  },
};

export default theme;
