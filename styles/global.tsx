'use client';
import { Global, css } from '@emotion/react';

const style = css`
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    width: 100vw;
    height: 100vh;
    a {
      background-color: transparent;
      text-decoration: none;
      outline: none;
      color: inherit;
      &:active,
      &:hover {
        text-decoration: none;
        color: inherit;
        outline: 0;
      }
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      border: none;
      background: none;
      padding: 0;
      user-select: none;
      cursor: pointer;
      white-space: nowrap;
      letter-spacing: inherit;
      font: inherit;
      color: inherit;
    }
    input {
      outline: none;
    }
    .fc-day-sun a {
      color: red;
    }
    .fc-day-sat a {
      color: blue;
    }
  }
`;

const GlobalStyle = () => <Global styles={style} />;

export default GlobalStyle;
