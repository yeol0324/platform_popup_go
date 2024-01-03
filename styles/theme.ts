import { Theme } from '@emotion/react';

const palette = {
  // platform theme color
  main: '#5a5adc',
  sub: '#3a3ab4',
  gray0: '#c4c4c4',
  gray1: '#b7c1c8',
  gray2: '#333333',
  navy: '#2d5fc3',
  sky0: '#dff5fe',
  sky1: '#afdae9',
  yellow: '#fff100',
  black: '#000',

  //   gray
  gray10: '#F8F9FA',
  gray11: '#F1F3F5',
  // teal
  teal10: '#F3FFFB',
  teal11: '#C3FAE8',
  // red
  red10: '#FFF5F5',
  red11: '#FFE3E3',
  // rest
  dark: '#191a20',
  primary: '#3f4150',
  secondary: '#8c8d96',
  // calendar
  sun: 'red',
  sat: 'blue',
};
const typography = {
  title1: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '24px',
  },
  title2: {},
  title3: {},
  body1: {},
  body2: {},
  caption: {},
  small: {},
};
const theme: Theme = {
  palette,
  typography,
};

export default theme;
