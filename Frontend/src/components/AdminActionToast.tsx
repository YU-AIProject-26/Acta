import { useEffect } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import styled, { css } from 'styled-components';

type AdminActionToastProps = {
  open: boolean;
  message: string;
  onClose: () => void;
  variant?: 'success' | 'error';
};

export default function AdminActionToast({
  open,
  message,
  onClose,
  variant = 'success',
}: AdminActionToastProps) {
  useEffect(() => {
    if (!open) return;

    const timer = window.setTimeout(() => {
      onClose();
    }, 2200);

    return () => window.clearTimeout(timer);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <ToastWrapper>
      <ToastCard $variant = {variant}>
        {variant === 'success' ? (
          <CheckCircle2 className = "toast-icon" />
        ) : (
          <AlertCircle className = "toast-icon" />
        )}
        <ToastText>{message}</ToastText>
      </ToastCard>
    </ToastWrapper>
  );
}

const ToastWrapper = styled.div`
  position: fixed;
  left: 50%;
  bottom: 1.5rem;
  transform: translateX(-50%);
  z-index: 2000;
  pointer-events: none;
`;

const ToastCard = styled.div<{ $variant: 'success' | 'error' }>`
  min-width: 240px;
  max-width: calc(100vw - 2rem);
  padding: 0.875rem 1rem;
  border-radius: 0.875rem;
  font-size: 0.875rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.12);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  white-space: nowrap;

  .toast-icon {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }

  ${({ $variant }) =>
    $variant === 'success'
      ? css`
          border: 1px solid rgba(34, 197, 94, 0.24);
          background: rgba(34, 197, 94, 0.12);
          color: #166534;

          html.dark & {
            border-color: rgba(34, 197, 94, 0.22);
            background: rgba(34, 197, 94, 0.16);
            color: #bbf7d0;
          }
        `
      : css`
          border: 1px solid rgba(239, 68, 68, 0.24);
          background: rgba(239, 68, 68, 0.12);
          color: #b91c1c;

          html.dark & {
            border-color: rgba(239, 68, 68, 0.24);
            background: rgba(239, 68, 68, 0.16);
            color: #fecaca;
          }
        `}
`;

const ToastText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;