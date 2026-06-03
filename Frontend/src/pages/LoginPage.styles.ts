import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginCard = styled.div`
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

export const FieldHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const PasswordLink = styled(Link)`
  font-size: 0.875rem;
  color: #2563eb;

  &:hover {
    text-decoration: underline;
  }

  html.dark & {
    color: #3b82f6;
  }
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