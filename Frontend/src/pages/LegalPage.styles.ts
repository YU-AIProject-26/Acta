import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: #ffffff;
  padding: 6rem 1.5rem 4rem;

  html.dark & {
    background: #0a0a0a;
  }
`;

export const PageInner = styled.div`
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;
`;

export const HeaderSection = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  margin: 0 0 0.75rem;
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.2;

  html.dark & {
    color: #f9fafb;
  }
`;

export const Description = styled.p`
  margin: 0 0 0.75rem;
  font-size: 1rem;
  line-height: 1.7;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const Meta = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const ContentCard = styled.div`
  width: 100%;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  padding: 2rem;

  html.dark & {
    border-color: #262626;
    background: #141414;
  }
`;

export const Section = styled.section`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h2`
  margin: 0 0 0.875rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.4;

  html.dark & {
    color: #f9fafb;
  }
`;

export const Paragraph = styled.p`
  margin: 0 0 0.75rem;
  font-size: 0.95rem;
  line-height: 1.8;
  color: #374151;
  white-space: pre-line;

  &:last-child {
    margin-bottom: 0;
  }

  html.dark & {
    color: #d1d5db;
  }
`;

export const BottomSection = styled.div`
  margin-top: 1.5rem;
  text-align: center;
`;

export const BackLink = styled(Link)`
  font-size: 0.875rem;
  color: #6b7280;

  &:hover {
    color: #2563eb;
    text-decoration: underline;
  }

  html.dark & {
    color: #9ca3af;

    &:hover {
      color: #3b82f6;
    }
  }
`;