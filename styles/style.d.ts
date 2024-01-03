/// <reference types="@emotion/react/types/css-prop" />
import '@emotion/react';

type palette =
  | main
  | sub
  | gray0
  | gray1
  | gray2
  | navy
  | sky0
  | sky1
  | yellow
  | black
  | gray10
  | gray11
  | teal10
  | teal11
  | red10
  | red11
  | dark
  | primary
  | secondary
  | sun
  | sat;
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
