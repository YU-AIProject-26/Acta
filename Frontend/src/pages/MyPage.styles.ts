import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const cardBase = css`
  border: 1px solid #e5e7eb;
  background: #ffffff;

  html.dark & {
    border-color: rgba(55, 65, 81, 0.5);
    background: #1a1a1a;
  }
`;

const buttonBase = css`
  height: 2.75rem;
  padding: 0 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;

  .button-icon {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
`;

export const PageWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const HeaderSection = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const Card = styled.section`
  ${cardBase};
  padding: 2rem;
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
`;

export const ProfileAvatar = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 9999px;
  background: ${({ theme }) => theme.colors.accent};
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  span {
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 1;
  }
`;

export const ProfileContent = styled.div`
  flex: 1;
`;

export const ProfileTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const ProfileInfo = styled.div``;

export const ProfileName = styled.h2`
  margin: 0 0 0.25rem;
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const ProfileEmail = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const OutlineButton = styled.button<{
  $fullWidth?: boolean;
  $justifyStart?: boolean;
}>`
  ${buttonBase};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  justify-content: ${({ $justifyStart }) =>
    $justifyStart ? 'flex-start' : 'center'};
  border: 1px solid #e5e7eb;
  background: transparent;
  color: #111827;

  &:hover {
    background: #f3f4f6;
  }

  html.dark & {
    border-color: #374151;
    color: #ffffff;

    &:hover {
      background: #1f2937;
    }
  }
`;

export const PrimaryButton = styled.button<{ $fullWidth?: boolean }>`
  ${buttonBase};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
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

  &:disabled {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.mutedForeground};
    cursor: not-allowed;
    opacity: 1;
  }
`;

export const StatsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const StatItem = styled.div``;

export const StatValue = styled.span`
  display: block;
  margin-bottom: 0.25rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const StatLabel = styled.span`
  font-size: 0.875rem;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const SectionIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const SectionTitle = styled.h3`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  margin: 0;
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 2.75rem;
  margin-top: 0.5rem;
  padding: 0 1rem;
  border: 1px solid transparent;
  border-radius: 0.75rem;
  background: #f3f4f6;
  color: #111827;
  font-size: 0.9375rem;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
  }

  &:disabled {
    opacity: 1;
    cursor: not-allowed;
  }

  html.dark & {
    background: #191919;
    color: #ffffff;

    &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
    }
  }
`;

export const HelperText = styled.p`
  margin: 0.375rem 0 0;
  font-size: 0.75rem;
  color: #6b7280;
  line-height: 1.5;

  html.dark & {
    color: #9ca3af;
  }
`;

export const InfoText = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.875rem;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const PlanRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.125rem 0;
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  margin: 0.875rem 0;
  background: #e5e7eb;

  html.dark & {
    background: #374151;
  }
`;

export const ActionStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const DangerButton = styled.button`
  ${buttonBase};
  width: 100%;
  justify-content: flex-start;
  border: 1px solid #fecaca;
  background: transparent;
  color: #dc2626;

  &:hover {
    background: #fef2f2;
  }

  html.dark & {
    border-color: rgba(220, 38, 38, 0.45);
    color: #f87171;

    &:hover {
      background: rgba(127, 29, 29, 0.2);
    }
  }
`;

export const FullWidthLink = styled(Link)`
  width: 100%;
  text-decoration: none;
`;

export const DeleteModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.32);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  z-index: 1000;
`;

export const DeleteModalCard = styled.div`
  width: 100%;
  max-width: 28rem;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  box-shadow: 0 20px 48px rgba(15, 23, 42, 0.18);
  text-align: center;

  html.dark & {
    border-color: #262626;
    background: #111827;
  }
`;

export const DeleteModalIconBox = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  margin: 0 auto 1rem;
  border-radius: 9999px;
  background: rgba(239, 68, 68, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: #ef4444;
  }

  html.dark & {
    background: rgba(239, 68, 68, 0.18);
  }
`;

export const DeleteModalTitle = styled.h3`
  margin: 0 0 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const DeleteModalDescription = styled.p`
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const DeleteModalButtonRow = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
`;

export const DeleteModalCancelButton = styled.button`
  flex: 1;
  height: 2.75rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-size: 0.9375rem;
  font-weight: 500;

  &:hover {
    background: #f9fafb;
  }

  html.dark & {
    border-color: #262626;
    background: #111827;
    color: #ffffff;

    &:hover {
      background: #0a0a0a;
    }
  }
`;

export const DeleteModalConfirmButton = styled.button`
  flex: 1;
  height: 2.75rem;
  border-radius: 0.75rem;
  border: none;
  background: #ef4444;
  color: #ffffff;
  font-size: 0.9375rem;
  font-weight: 600;

  &:hover {
    background: #dc2626;
  }
`;

export const PlanModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.28);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  z-index: 1000;
`;

export const PlanModalCard = styled.div`
  width: 100%;
  max-width: 36rem;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  box-shadow: 0 20px 48px rgba(15, 23, 42, 0.18);

  html.dark & {
    border-color: #262626;
    background: #111827;
  }
`;

export const PlanModalIconBox = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  margin: 0 auto 1rem;
  border-radius: 9999px;
  background: rgba(37, 99, 235, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme.colors.accent};
  }

  html.dark & {
    background: rgba(37, 99, 235, 0.18);
  }
`;

export const PlanModalTitle = styled.h3`
  margin: 0 0 0.75rem;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const PlanModalDescription = styled.p`
  margin: 0;
  text-align: center;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const PlanOptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const PlanOptionCard = styled.button<{ $selected?: boolean }>`
  width: 100%;
  padding: 1.25rem;
  border-radius: 1rem;
  border: 1px solid
    ${({ $selected, theme }) =>
      $selected ? theme.colors.accent : '#e5e7eb'};
  background: ${({ $selected }) => ($selected ? 'rgba(37, 99, 235, 0.05)' : '#ffffff')};
  text-align: left;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    background: rgba(37, 99, 235, 0.05);
  }

  html.dark & {
    border-color: ${({ $selected, theme }) =>
      $selected ? theme.colors.accent : '#262626'};
    background: ${({ $selected }) =>
      $selected ? 'rgba(37, 99, 235, 0.12)' : '#111827'};

    &:hover {
      border-color: ${({ theme }) => theme.colors.accent};
      background: rgba(37, 99, 235, 0.12);
    }
  }
`;

export const PlanOptionTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

export const PlanOptionTitle = styled.h4`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const PlanOptionPrice = styled.p`
  margin: 0.25rem 0 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
`;

export const PlanOptionBadge = styled.span`
  display: inline-flex;
  align-items: center;
  height: 1.75rem;
  padding: 0 0.75rem;
  border-radius: 9999px;
  background: rgba(37, 99, 235, 0.1);
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;

  html.dark & {
    background: rgba(37, 99, 235, 0.18);
  }
`;

export const PlanFeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  margin-top: 1rem;
`;

export const PlanFeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #4b5563;

  .feature-icon {
    width: 1rem;
    height: 1rem;
    color: #22c55e;
    flex-shrink: 0;
  }

  html.dark & {
    color: #d1d5db;
  }
`;

export const PlanModalButtonRow = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
`;

export const PlanModalCancelButton = styled.button`
  flex: 1;
  height: 2.75rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-size: 0.9375rem;
  font-weight: 500;

  &:hover {
    background: #f9fafb;
  }

  html.dark & {
    border-color: #262626;
    background: #111827;
    color: #ffffff;

    &:hover {
      background: #0a0a0a;
    }
  }
`;

export const PlanModalConfirmButton = styled.button`
  flex: 1;
  height: 2.75rem;
  border-radius: 0.75rem;
  border: none;
  background: ${({ theme }) => theme.colors.accent};
  color: #ffffff;
  font-size: 0.9375rem;
  font-weight: 600;

  &:hover {
    background: color-mix(
      in srgb,
      ${({ theme }) => theme.colors.accent} 90%,
      transparent
    );
  }
`;

export const TwoFactorModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.28);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  z-index: 1000;
`;

export const TwoFactorModalCard = styled.div`
  width: 100%;
  max-width: 34rem;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  box-shadow: 0 20px 48px rgba(15, 23, 42, 0.18);

  html.dark & {
    border-color: #262626;
    background: #111827;
  }
`;

export const TwoFactorModalIconBox = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  margin: 0 auto 1rem;
  border-radius: 9999px;
  background: rgba(37, 99, 235, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme.colors.accent};
  }

  html.dark & {
    background: rgba(37, 99, 235, 0.18);
  }
`;

export const TwoFactorModalTitle = styled.h3`
  margin: 0 0 0.75rem;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const TwoFactorModalDescription = styled.p`
  margin: 0;
  text-align: center;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const TwoFactorInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background: #f8fafc;
  border: 1px solid #e5e7eb;

  html.dark & {
    background: #0f172a;
    border-color: #262626;
  }
`;

export const TwoFactorInfoRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  .info-icon {
    width: 1.125rem;
    height: 1.125rem;
    color: ${({ theme }) => theme.colors.accent};
    flex-shrink: 0;
    margin-top: 0.125rem;
  }
`;

export const TwoFactorInfoTextGroup = styled.div`
  min-width: 0;
`;

export const TwoFactorInfoTitle = styled.p`
  margin: 0;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const TwoFactorInfoDescription = styled.p`
  margin: 0.25rem 0 0;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const TwoFactorFeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  margin-top: 1.25rem;
`;

export const TwoFactorFeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #4b5563;

  .feature-icon {
    width: 1rem;
    height: 1rem;
    color: #22c55e;
    flex-shrink: 0;
  }

  html.dark & {
    color: #d1d5db;
  }
`;

export const TwoFactorButtonRow = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
`;

export const TwoFactorCancelButton = styled.button`
  flex: 1;
  height: 2.75rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-size: 0.9375rem;
  font-weight: 500;

  &:hover {
    background: #f9fafb;
  }

  html.dark & {
    border-color: #262626;
    background: #111827;
    color: #ffffff;

    &:hover {
      background: #0a0a0a;
    }
  }
`;

export const TwoFactorConfirmButton = styled.button`
  flex: 1;
  height: 2.75rem;
  border-radius: 0.75rem;
  border: none;
  background: ${({ theme }) => theme.colors.accent};
  color: #ffffff;
  font-size: 0.9375rem;
  font-weight: 600;

  &:hover {
    background: color-mix(
      in srgb,
      ${({ theme }) => theme.colors.accent} 90%,
      transparent
    );
  }
`;

export const SaveModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.28);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  z-index: 1000;
`;

export const SaveModalCard = styled.div`
  width: 100%;
  max-width: 28rem;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  box-shadow: 0 20px 48px rgba(15, 23, 42, 0.18);
  text-align: center;

  html.dark & {
    border-color: #262626;
    background: #111827;
  }
`;

export const SaveModalIconBox = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  margin: 0 auto 1rem;
  border-radius: 9999px;
  background: rgba(34, 197, 94, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: #22c55e;
  }

  html.dark & {
    background: rgba(34, 197, 94, 0.18);
  }
`;

export const SaveModalTitle = styled.h3`
  margin: 0 0 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const SaveModalDescription = styled.p`
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const SaveModalButtonRow = styled.div`
  display: flex;
  margin-top: 1.5rem;
`;

export const SaveModalConfirmButton = styled.button`
  width: 100%;
  height: 2.75rem;
  border-radius: 0.75rem;
  border: none;
  background: ${({ theme }) => theme.colors.accent};
  color: #ffffff;
  font-size: 0.9375rem;
  font-weight: 600;

  &:hover {
    background: color-mix(
      in srgb,
      ${({ theme }) => theme.colors.accent} 90%,
      transparent
    );
  }
`;

export const ProfileNameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const AdminBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 1.75rem;
  padding: 0 0.75rem;
  border-radius: 9999px;
  background: rgba(37, 99, 235, 0.1);
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.75rem;
  font-weight: 700;
  white-space: nowrap;

  html.dark & {
    background: rgba(37, 99, 235, 0.18);
  }
`;