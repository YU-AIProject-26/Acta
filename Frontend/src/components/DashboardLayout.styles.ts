import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  background: #ffffff;

  html.dark & {
    background: linear-gradient(
      to bottom,
      #0f0f0f 0%,
      #0a0a0a 50%,
      #0f0f0f 100%
    );
  }
`;

export const MainContent = styled.main`
  max-width: 1920px;
  margin: 0 auto;
  padding: 2rem 2rem;
`;