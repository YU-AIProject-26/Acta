import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

type UploadAreaProps = {
  $dragging: boolean;
  $selected: boolean;
  $disabled: boolean;
};

type ButtonProps = {
  $fullWidth?: boolean;
};

type WaveBarProps = {
  $height: number;
  $paused?: boolean;
  $delay?: number;
};

type IconCircleButtonProps = {
  $danger?: boolean;
};

const cardBase = css`
  background: #ffffff;
  border: 1px solid #e5e7eb;

  html.dark & {
    background: #1a1a1a;
    border-color: #262626;
  }
`;

const buttonBase = css<ButtonProps>`
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  height: 3rem;
  padding: 0 1.25rem;
  border-radius: 0.75rem;
  font-size: 0.9375rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    opacity 0.2s ease;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .button-icon {
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
  }
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
`;

const progressPulse = keyframes`
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
`;

const waveMotion = keyframes`
  0%, 100% {
    transform: scaleY(0.75);
    opacity: 0.7;
  }
  50% {
    transform: scaleY(1.1);
    opacity: 1;
  }
`;

export const PageWrapper = styled.div`
  min-height: calc(100vh - 4rem);
  padding: 2rem 0;
  background: transparent;
`;

export const Inner = styled.div`
  max-width: 56rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  color: #6b7280;

  .breadcrumb-icon {
    width: 1rem;
    height: 1rem;
  }

  html.dark & {
    color: #9ca3af;
  }
`;

export const BreadcrumbLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const BreadcrumbCurrent = styled.span`
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const PageTitle = styled.h1`
  margin: 0 0 2rem;
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const MainCard = styled.div`
  ${cardBase};
  padding: 2rem;
  border-radius: 1rem;
`;

export const Section = styled.section`
  margin-bottom: 2rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h2`
  margin: 0 0 1rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const UploadArea = styled.div<UploadAreaProps>`
  position: relative;
  border: 2px dashed;
  border-radius: 1rem;
  padding: 3rem;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    opacity 0.2s ease;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};

  ${({ $dragging, $selected, $disabled, theme }) => {
    if ($disabled) {
      return css`
        border-color: #d1d5db;
        background: #f3f4f6;

        html.dark & {
          border-color: #374151;
          background: rgba(255, 255, 255, 0.03);
        }
      `;
    }

    if ($dragging) {
      return css`
        border-color: ${theme.colors.accent};
        background: rgba(37, 99, 235, 0.05);

        html.dark & {
          background: rgba(37, 99, 235, 0.1);
        }
      `;
    }

    if ($selected) {
      return css`
        border-color: #22c55e;
        background: #f0fdf4;

        html.dark & {
          background: rgba(20, 83, 45, 0.2);
        }
      `;
    }

    return css`
      border-color: #d1d5db;
      background: transparent;

      &:hover {
        border-color: ${theme.colors.accent};
        background: #f9fafb;
      }

      html.dark & {
        border-color: #374151;

        &:hover {
          background: rgba(17, 24, 39, 0.5);
        }
      }
    `;
  }}
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const UploadContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .upload-main-icon {
    width: 3rem;
    height: 3rem;
    color: #9ca3af;
    margin-bottom: 1rem;
  }

  .selected {
    color: #22c55e;
  }

  html.dark & {
    .upload-main-icon {
      color: #52525b;
    }

    .selected {
      color: #22c55e;
    }
  }
`;

export const UploadTitle = styled.p`
  margin: 0 0 0.5rem;
  font-size: 0.9375rem;
  font-weight: 500;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const UploadDescription = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const SelectedFileCloseButton = styled.button`
  position: absolute;
  top: 0.875rem;
  right: 0.875rem;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  border: 1px solid #d1d5db;
  background: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
  z-index: 1;

  &:hover {
    background: #f3f4f6;
    transform: scale(1.04);
  }

  .close-icon {
    width: 1rem;
    height: 1rem;
    color: #6b7280;
  }

  html.dark & {
    background: #1a1a1a;
    border-color: #374151;

    &:hover {
      background: #111827;
    }

    .close-icon {
      color: #9ca3af;
    }
  }
`;

export const ErrorText = styled.p`
  margin: 0.75rem 0 0;
  font-size: 0.875rem;
  color: #dc2626;
  line-height: 1.5;

  html.dark & {
    color: #f87171;
  }
`;

export const DividerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const DividerLine = styled.div`
  flex: 1;
  height: 1px;
  background: #e5e7eb;

  html.dark & {
    background: #262626;
  }
`;

export const DividerText = styled.span`
  font-size: 0.875rem;
  color: #6b7280;

  html.dark & {
    color: #6b7280;
  }
`;

export const RecordingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const PrimaryButton = styled.button<ButtonProps>`
  ${buttonBase};
  border: none;
  background: ${({ theme }) => theme.colors.accent};
  color: #ffffff;

  &:hover:not(:disabled) {
    background: color-mix(
      in srgb,
      ${({ theme }) => theme.colors.accent} 90%,
      transparent
    );
  }
`;

export const DangerButton = styled.button<ButtonProps>`
  ${buttonBase};
  border: none;
  background: #dc2626;
  color: #ffffff;

  &:hover:not(:disabled) {
    background: #b91c1c;
  }
`;

export const RecordingStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const RecordingDot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background: #ef4444;
  animation: ${pulse} 1.2s infinite;
`;

export const RecordingTime = styled.span`
  font-family: monospace;
  font-size: 1rem;
  font-weight: 600;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const RecordingText = styled.span`
  font-size: 0.875rem;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const RecordingControlCard = styled.div`
  ${cardBase};
  padding: 1.25rem;
  border-radius: 1rem;
  background: #f9fafb;

  html.dark & {
    background: #111111;
  }
`;

export const WaveformBox = styled.div`
  height: 5rem;
  border-radius: 0.875rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  overflow: hidden;
  margin-bottom: 1rem;

  html.dark & {
    background: #0a0a0a;
    border-color: #262626;
  }
`;

export const WaveBar = styled.div<WaveBarProps>`
  width: 0.3125rem;
  height: ${({ $height }) => `${$height}px`};
  border-radius: 9999px;
  background: ${({ theme }) => theme.colors.accent};
  opacity: ${({ $paused }) => ($paused ? 0.55 : 1)};
  animation: ${({ $paused }) => ($paused ? 'none' : waveMotion)} 1.2s ease-in-out infinite;
  animation-delay: ${({ $delay = 0 }) => `${$delay}s`};
  transform-origin: center;
`;

export const RecordingActionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

export const IconCircleButton = styled.button<IconCircleButtonProps>`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 9999px;
  border: 1px solid ${({ $danger }) => ($danger ? '#fecaca' : '#e5e7eb')};
  background: ${({ $danger }) => ($danger ? '#fff5f5' : '#ffffff')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({ $danger }) => ($danger ? '#fee2e2' : '#f3f4f6')};
  }

  .control-icon {
    width: 1.125rem;
    height: 1.125rem;
    color: ${({ $danger }) => ($danger ? '#dc2626' : '#111827')};
  }

  html.dark & {
    border-color: ${({ $danger }) => ($danger ? 'rgba(127, 29, 29, 0.55)' : '#262626')};
    background: ${({ $danger }) => ($danger ? 'rgba(127, 29, 29, 0.14)' : '#1a1a1a')};

    &:hover {
      background: ${({ $danger }) => ($danger ? 'rgba(127, 29, 29, 0.22)' : '#222222')};
    }

    .control-icon {
      color: ${({ $danger }) => ($danger ? '#f87171' : '#ffffff')};
    }
  }
`;

export const FormSection = styled.div`
  margin-bottom: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;

  html.dark & {
    border-top-color: #262626;
  }
`;

export const FormGroup = styled.div`
  & + & {
    margin-top: 1.5rem;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9375rem;
  font-weight: 500;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const TextInput = styled.input`
  width: 100%;
  height: 2.75rem;
  padding: 0 1rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-size: 0.9375rem;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
  }

  html.dark & {
    background: #0a0a0a;
    border-color: #262626;
    color: #ffffff;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
`;

export const SelectElement = styled.select`
  width: 100%;
  height: 2.75rem;
  padding: 0 1rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-size: 0.9375rem;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
  }

  html.dark & {
    background: #0a0a0a;
    border-color: #262626;
    color: #ffffff;
  }
`;

export const StatusCard = styled.div`
  ${cardBase};
  padding: 1.5rem;
  border-radius: 1rem;
  background: #f9fafb;
  margin-bottom: 2rem;

  html.dark & {
    background: #0a0a0a;
  }
`;

export const StatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .status-icon {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
  }

  .spinning {
    animation: ${spin} 1s linear infinite;
  }

  .accent {
    color: ${({ theme }) => theme.colors.accent};
  }

  .success {
    color: #22c55e;
  }

  .error {
    color: #ef4444;
  }
`;

export const StatusContent = styled.div`
  flex: 1;

  &.error-layout {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .error-left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const StatusTitle = styled.p`
  margin: 0 0 0.25rem;
  font-size: 0.9375rem;
  font-weight: 500;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const StatusDescription = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const ProgressTrack = styled.div`
  width: 100%;
  height: 0.5rem;
  margin-top: 0.75rem;
  border-radius: 9999px;
  background: #e5e7eb;
  overflow: hidden;

  html.dark & {
    background: #262626;
  }
`;

export const ProgressBar = styled.div`
  width: 66%;
  height: 100%;
  border-radius: 9999px;
  background: ${({ theme }) => theme.colors.accent};
  animation: ${progressPulse} 1.2s infinite;
`;

export const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const SecondaryButton = styled.button<ButtonProps>`
  ${buttonBase};
  border: 1px solid #e5e7eb;
  background: transparent;
  color: #111827;

  &:hover:not(:disabled) {
    background: #f9fafb;
  }

  html.dark & {
    border-color: #262626;
    color: #ffffff;

    &:hover:not(:disabled) {
      background: #0a0a0a;
    }
  }
`;