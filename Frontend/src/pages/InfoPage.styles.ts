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
  max-width: 72rem;
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
  line-height: 1.75;
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

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 1.5rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const MainCard = styled.div`
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  padding: 2rem;

  html.dark & {
    border-color: #262626;
    background: #141414;
  }
`;

export const SideCard = styled.div`
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  padding: 1.5rem;

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

export const BulletList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const BulletItem = styled.li`
  position: relative;
  padding-left: 1rem;
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
  line-height: 1.8;
  color: #374151;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.85rem;
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 999px;
    background: #2563eb;
    transform: translateY(-50%);
  }

  &:last-child {
    margin-bottom: 0;
  }

  html.dark & {
    color: #d1d5db;
  }
`;

export const HighlightBox = styled.div`
  border-radius: 0.875rem;
  background: #f8fafc;
  border: 1px solid #e5e7eb;
  padding: 1rem;

  html.dark & {
    background: #191919;
    border-color: #262626;
  }
`;

export const HighlightText = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.8;
  color: #111827;

  html.dark & {
    color: #f9fafb;
  }
`;

export const InfoLabel = styled.p`
  margin: 0 0 0.375rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;

  html.dark & {
    color: #9ca3af;
  }
`;

export const InfoValue = styled.p`
  margin: 0 0 1rem;
  font-size: 0.95rem;
  line-height: 1.7;
  color: #111827;

  &:last-child {
    margin-bottom: 0;
  }

  html.dark & {
    color: #f9fafb;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: #111827;
  line-height: 1.5;

  html.dark & {
    color: #f9fafb;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  border-radius: 0.75rem;
  border: 1px solid transparent;
  background: #f3f4f6;
  color: #111827;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;

  &::placeholder {
    color: #6b7280;
  }

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
  }

  html.dark & {
    background: #191919;
    color: #f9fafb;

    &::placeholder {
      color: #9ca3af;
    }

    &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
    }
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  border-radius: 0.75rem;
  border: 1px solid transparent;
  background: #f3f4f6;
  color: #111827;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
  }

  html.dark & {
    background: #191919;
    color: #f9fafb;

    &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
    }
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 10rem;
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid transparent;
  background: #f3f4f6;
  color: #111827;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
  resize: vertical;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;

  &::placeholder {
    color: #6b7280;
  }

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
  }

  html.dark & {
    background: #191919;
    color: #f9fafb;

    &::placeholder {
      color: #9ca3af;
    }

    &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
    }
  }
`;

export const CheckboxRow = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: default;
`;

export const Checkbox = styled.input`
  appearance: none;
  -webkit-appearance: none;
  width: 1rem;
  height: 1rem;
  margin: 0;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
  position: relative;

  &:checked {
    background: #2563eb;
    border-color: #2563eb;
  }

  &:checked::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 45%;
    width: 0.22rem;
    height: 0.45rem;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  html.dark & {
    border-color: #262626;
    background: rgba(38, 38, 38, 0.3);

    &:checked {
      background: #3b82f6;
      border-color: #3b82f6;
    }
  }
`;

export const CheckboxText = styled.span`
  font-size: 0.875rem;
  line-height: 1.7;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const PrimaryButton = styled.button`
  width: 100%;
  height: 3rem;
  border: none;
  border-radius: 0.75rem;
  background: #2563eb;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  cursor: default;
  transition: background-color 0.2s ease;

  &:hover {
    background: rgba(37, 99, 235, 0.9);
  }

  html.dark & {
    background: #3b82f6;

    &:hover {
      background: rgba(59, 130, 246, 0.9);
    }
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