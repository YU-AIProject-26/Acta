import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignupCard = styled.div`
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
  line-height: 1.5;
  color: #111827;

  html.dark & {
    color: #f9fafb;
  }
`;

export const InlineRow = styled.div`
  display: flex;
  align-items: stretch;
  gap: 0.5rem;
`;

export const InlineInputWrap = styled.div`
  flex: 1;
  min-width: 0;
`;

export const TextInput = styled.input`
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

export const InlineActionButton = styled.button`
  width: 92px;
  height: 3rem;
  padding: 0 0.875rem;
  border-radius: 0.75rem;
  border: 1px solid #d1d5db;
  background: #ffffff;
  color: #374151;
  font-size: 0.875rem;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  flex-shrink: 0;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    opacity 0.2s ease,
    transform 0.2s ease;

  &:hover:not(:disabled) {
    background: #f9fafb;
    border-color: #cbd5e1;
    color: #111827;
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  html.dark & {
    border-color: #262626;
    background: #0f0f0f;
    color: #f9fafb;

    &:hover:not(:disabled) {
      background: #161616;
      border-color: #333333;
      color: #ffffff;
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

export const TermsRow = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-top: 0.5rem;
  cursor: default;
`;

export const TermsCheckbox = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 1rem;
  height: 1rem;
  margin: 0;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  outline: none;
  position: relative;
  cursor: default;

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

  &:focus-visible {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
  }

  html.dark & {
    border-color: #262626;
    background: rgba(38, 38, 38, 0.3);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);

    &:checked {
      background: #3b82f6;
      border-color: #3b82f6;
    }

    &:focus-visible {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
    }
  }
`;

export const TermsLabel = styled.span`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: #6b7280;

  html.dark & {
    color: #a3a3a3;
  }
`;

export const TermsLinkButton = styled.button`
  border: none;
  padding: 0;
  background: transparent;
  color: #2563eb;
  font-size: inherit;
  font-weight: 500;
  line-height: inherit;
  cursor: default;

  &:hover {
    text-decoration: underline;
  }

  html.dark & {
    color: #3b82f6;
  }
`;

export const SubmitButton = styled.button`
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
  margin-top: 0.5rem;

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

export const DividerWrapper = styled.div`
  position: relative;
  margin: 2rem 0;
`;

export const DividerLine = styled.div`
  width: 100%;
  height: 1px;
  background: #e5e7eb;

  html.dark & {
    background: #262626;
  }
`;

export const DividerText = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0 0.5rem;
  background: #ffffff;
  font-size: 0.875rem;
  color: #6b7280;

  html.dark & {
    background: #141414;
    color: #9ca3af;
  }
`;

export const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const SocialButton = styled.button`
  width: 100%;
  height: 2.75rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: #f3f4f6;
  }

  html.dark & {
    border-color: #262626;
    background: #191919;
    color: #f9fafb;

    &:hover {
      background: #262626;
    }
  }
`;

export const SocialImage = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
  object-fit: contain;
`;

export const BottomText = styled.p`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const BottomLink = styled(Link)`
  color: #2563eb;

  &:hover {
    text-decoration: underline;
  }

  html.dark & {
    color: #3b82f6;
  }
`;