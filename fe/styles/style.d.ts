import '@emotion/react';

type ThemeId = 'theme01' | 'theme02';
declare module '@emotion/react' {
  export interface Theme {
    // TODO: key type 줄수 있는 법...
    [key: string]: {
      background: string;
      color: string;
      hoverBackground: string;
    };
  }
}
