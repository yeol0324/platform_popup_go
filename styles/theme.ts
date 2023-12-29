import { Theme } from '@emotion/react';

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
  // TODO: 정리
  black: '#000',
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
