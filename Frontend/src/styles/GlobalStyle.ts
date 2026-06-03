import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;
    color-scheme: light;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    min-width: 320px;
    min-height: 100vh;
    line-height: 1;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};
    font-family:
      Inter,
      Pretendard,
      'Noto Sans KR',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition:
      background-color 0.2s ease,
      color 0.2s ease;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
  }

  #root {
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  button {
    background: none;
    border: none;
    padding: 0;
  }

  img,
  svg,
  video,
  canvas {
    display: block;
    max-width: 100%;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.5;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.5;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.5;
  }

  h4 {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
  }

  p {
    line-height: 1.5;
  }

  label {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
  }

  button {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
  }

  input,
  textarea,
  select {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }

  html.dark {
    color-scheme: dark;
  }
`;

export default GlobalStyle;