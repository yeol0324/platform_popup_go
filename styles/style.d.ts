/// <reference types="@emotion/react/types/css-prop" />
import '@emotion/react';

type palette =
  | 'teal0'
  | 'teal1'
  | 'gray0'
  | 'gray1'
  | 'red0'
  | 'red1'
  | 'black'
  | 'dark'
  | 'primary'
  | 'secondary'
  | 'sun'
  | 'sat';
type typography = 'title1' | 'title2' | 'title3' | 'body1' | 'body2' | 'caption' | 'small';

declare module '@emotion/react' {
  export interface Theme {
    palette: {
      [key in palette]: string;
    };
    typography: {
      [key in typography]: {
        fontFamily?: string;
        fontStyle?: string;
        fontWeight?: number;
        fontSize?: string;
        lineHeight?: string;
      };
    };
  }
}
