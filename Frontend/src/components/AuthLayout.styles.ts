import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  position: relative;

  html.dark & {
    background: #0a0a0a;
  }
`;

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

export const HeaderInner = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  display: flex;
  align-items: center;
`;

export const LogoLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LogoIcon = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  background: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  ${LogoLink}:hover & {
    transform: scale(1.05);
  }

  span {
    color: #ffffff;
    font-weight: 700;
    line-height: 1;
  }
`;

export const LogoText = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.5;

  html.dark & {
    color: #f9fafb;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1.5rem 2rem;
`;