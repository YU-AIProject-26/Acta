import styled from 'styled-components';

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  html.dark & {
    background: #0a0a0a;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 28rem;
  padding: 3.5rem 3rem;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  text-align: center;

  html.dark & {
    border-color: #1f2937;
    background: #1a1a1a;
  }
`;

export const IconBox = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 1rem;
  background: #fef2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.75rem;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: #dc2626;
  }

  html.dark & {
    background: rgba(127, 29, 29, 0.3);

    svg {
      color: #ef4444;
    }
  }
`;

export const ErrorCode = styled.h1`
  margin: 0 0 1rem;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const Title = styled.h2`
  margin: 0 0 0.875rem;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.4;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const Description = styled.p`
  margin: 0 0 2.5rem;
  font-size: 1rem;
  line-height: 1.625;
  color: #4b5563;

  html.dark & {
    color: #9ca3af;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;

const baseLinkButton = `
  width: 100%;
  height: 2.75rem;
  border-radius: 0.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  text-decoration: none;
  cursor: default;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
`;

export const PrimaryLinkButton = styled.a`
  ${baseLinkButton}
  border: none;
  background: ${({ theme }) => theme.colors.accent};
  color: #ffffff;

  &:hover {
    background: color-mix(
      in srgb,
      ${({ theme }) => theme.colors.accent} 90%,
      transparent
    );
  }

  svg {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
`;

export const OutlineLinkButton = styled.a`
  ${baseLinkButton}
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;

  &:hover {
    background: #f3f4f6;
  }

  html.dark & {
    border-color: #374151;
    background: transparent;
    color: #ffffff;

    &:hover {
      background: #1f2937;
    }
  }
`;