import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.card};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: auto;
`;

export const FooterInner = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 2rem 2rem;
`;

export const FooterTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BrandLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const BrandIcon = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  ${BrandLink}:hover & {
    transform: scale(1.05);
  }

  span {
    color: #ffffff;
    font-weight: 700;
    line-height: 1;
  }
`;

export const BrandText = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
`;

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.foreground};
  opacity: 0.7;
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.foreground};
  opacity: 0.7;
  transition:
    color 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    opacity: 1;
  }
`;

export const FooterBottom = styled.div`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.foreground};
  opacity: 0.7;
`;