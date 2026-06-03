import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ResetCard = styled.div`
  width: 100%;
  max-width: 28rem;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;

  html.dark & {
    border-color: #262626;
    background: #141414;
  }
`;

export const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.5rem;

  html.dark & {
    color: #f9fafb;
  }
`;

export const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.625;

  html.dark & {
    color: #9ca3af;
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

export const TextInput = styled.input`
  width: 100%;
  height: 2.75rem;
  padding: 0 0.75rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
  color: #111827;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  outline: none;
  transition:
    color 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease,
    opacity 0.2s ease;

  &::placeholder {
    color: #6b7280;
  }

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  html.dark & {
    background: #141414;
    border-color: #262626;
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

export const OutlineButton = styled.button`
  width: 100%;
  height: 2.75rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  cursor: default;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    opacity 0.2s ease;

  &:hover:not(:disabled) {
    background: #f3f4f6;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  html.dark & {
    border-color: #262626;
    background: rgba(38, 38, 38, 0.3);
    color: #f9fafb;

    &:hover:not(:disabled) {
      background: rgba(38, 38, 38, 0.5);
    }
  }
`;

export const CodeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const CodeInputWrapper = styled.div`
  flex: 1;
`;

export const CodeCheckButton = styled.button`
  width: 5.5rem;
  height: 2.75rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  flex-shrink: 0;
  cursor: default;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    opacity 0.2s ease;

  &:hover:not(:disabled) {
    background: #f3f4f6;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  html.dark & {
    border-color: #262626;
    background: rgba(38, 38, 38, 0.3);
    color: #f9fafb;

    &:hover:not(:disabled) {
      background: rgba(38, 38, 38, 0.5);
    }
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 2.75rem;
  border: none;
  border-radius: 0.75rem;
  background: #2563eb;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  cursor: default;
  transition:
    background-color 0.2s ease,
    opacity 0.2s ease;

  &:hover:not(:disabled) {
    background: rgba(37, 99, 235, 0.9);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  html.dark & {
    background: #3b82f6;

    &:hover:not(:disabled) {
      background: rgba(59, 130, 246, 0.9);
    }
  }
`;

export const BottomSection = styled.div`
  margin-top: 1.5rem;
  text-align: center;
`;

export const BottomLink = styled(Link)`
  font-size: 0.875rem;
  color: #6b7280;
  transition: color 0.2s ease;

  &:hover {
    color: #2563eb;
  }

  html.dark & {
    color: #9ca3af;

    &:hover {
      color: #3b82f6;
    }
  }
`;

export const HelperText = styled.p<{ $state?: 'default' | 'success' | 'error' }>`
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.4;
  color: ${({ $state }) => {
    if ($state === 'success') return '#16a34a';
    if ($state === 'error') return '#dc2626';
    return '#6b7280';
  }};

  html.dark & {
    color: ${({ $state }) => {
      if ($state === 'success') return '#4ade80';
      if ($state === 'error') return '#f87171';
      return '#9ca3af';
    }};
  }
`;

export const TimerText = styled.p`
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.4;
  color: #2563eb;

  html.dark & {
    color: #60a5fa;
  }
`;