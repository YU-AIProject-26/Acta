import styled, { css } from 'styled-components';

const cardBase = css`
  border: 1px solid #e5e7eb;
  background: #ffffff;

  html.dark & {
    border-color: rgba(55, 65, 81, 0.5);
    background: #1a1a1a;
  }
`;

type ButtonBaseProps = {
  $fullWidth?: boolean;
  $justifyStart?: boolean;
};

const buttonBase = css<ButtonBaseProps>`
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  height: 2.75rem;
  padding: 0 1rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: ${({ $justifyStart }) =>
    $justifyStart ? 'flex-start' : 'center'};
  gap: 0.75rem;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;

  .button-icon {
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
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

export const HeaderTitle = styled.h1`
  margin: 0 0 2rem;
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const SectionStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Card = styled.section`
  ${cardBase};
  padding: 1.5rem;
  border-radius: 1rem;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

export const IconBox = styled.div<{ $danger?: boolean }>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  background: ${({ $danger }) =>
    $danger ? 'rgba(239, 68, 68, 0.1)' : 'rgba(37, 99, 235, 0.1)'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${({ $danger, theme }) =>
      $danger ? '#ef4444' : theme.colors.accent};
  }

  html.dark & {
    background: ${({ $danger }) =>
      $danger ? 'rgba(239, 68, 68, 0.18)' : 'rgba(37, 99, 235, 0.18)'};
  }
`;

export const HeaderTextGroup = styled.div``;

export const CardTitle = styled.h2`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const CardDescription = styled.p`
  margin: 0.25rem 0 0;
  font-size: 0.875rem;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const SettingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SettingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  transition: background-color 0.2s ease;

  &:hover {
    background: #f9fafb;
  }

  html.dark & {
    border-color: #262626;

    &:hover {
      background: #0a0a0a;
    }
  }
`;

export const SettingLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .setting-icon {
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
  }

  .setting-icon-green {
    color: #22c55e;
  }

  .setting-icon-orange {
    color: #f97316;
  }

  .setting-icon-blue {
    color: #3b82f6;
  }

  .setting-icon-purple {
    color: #a855f7;
  }
`;

export const SettingTextGroup = styled.div``;

export const SettingLabel = styled.p`
  margin: 0;
  font-size: 0.9375rem;
  font-weight: 500;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const SettingHint = styled.p`
  margin: 0.125rem 0 0;
  font-size: 0.75rem;
  color: #6b7280;
  line-height: 1.5;

  html.dark & {
    color: #9ca3af;
  }
`;

export const SwitchButton = styled.button<{ $checked: boolean }>`
  position: relative;
  width: 2.75rem;
  height: 1.5rem;
  border: none;
  border-radius: 9999px;
  background: ${({ $checked, theme }) =>
    $checked ? theme.colors.accent : '#d1d5db'};
  transition: background-color 0.2s ease;
  flex-shrink: 0;

  span {
    position: absolute;
    top: 0.125rem;
    left: ${({ $checked }) => ($checked ? '1.375rem' : '0.125rem')};
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 9999px;
    background: #ffffff;
    transition: left 0.2s ease;
  }

  html.dark & {
    background: ${({ $checked, theme }) =>
      $checked ? theme.colors.accent : '#404040'};
  }
`;

export const IntegrationRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;

  html.dark & {
    border-color: #262626;
  }
`;

export const IntegrationLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const IntegrationIconBox = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  html.dark & {
    background: #111827;
    border-color: #262626;
  }
`;

export const IntegrationInfo = styled.div``;

export const IntegrationTitle = styled.p`
  margin: 0;
  font-size: 0.9375rem;
  font-weight: 500;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const IntegrationStatus = styled.p`
  margin: 0.125rem 0 0;
  font-size: 0.75rem;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const PrimaryButton = styled.button<ButtonBaseProps>`
  ${buttonBase};
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
`;

export const OutlineButton = styled.button<ButtonBaseProps>`
  ${buttonBase};
  border: 1px solid #e5e7eb;
  background: transparent;
  color: #111827;

  &:hover {
    background: #f9fafb;
  }

  html.dark & {
    border-color: #262626;
    color: #ffffff;

    &:hover {
      background: #0a0a0a;
    }
  }
`;