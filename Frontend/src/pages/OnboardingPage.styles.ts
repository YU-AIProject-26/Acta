import styled, { css } from 'styled-components';

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const PageInner = styled.div`
  width: 100%;
  max-width: 42rem;
`;

export const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const BrandRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  cursor: default;
`;

export const BrandIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  ${BrandRow}:hover & {
    transform: scale(1.05);
  }

  span {
    color: ${({ theme }) => theme.colors.primaryForeground};
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1;
  }
`;

export const BrandText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
`;

export const ProgressRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-bottom: 1rem;
`;

export const StepText = styled.span`
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

export const ProgressTrack = styled.div`
  width: 12rem;
  height: 0.5rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.secondary};
  overflow: hidden;
`;

export const ProgressBar = styled.div<{ $width: number }>`
  width: ${({ $width }) => `${$width}%`};
  height: 100%;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primary};
  transition: width 0.2s ease;
`;

export const ContentCard = styled.div`
  padding: 3rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.card};
  text-align: center;
`;

export const FeatureIconBox = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 1rem;
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.colors.primary} 10%,
    transparent
  );
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FeatureTitle = styled.h2`
  margin: 0 0 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
`;

export const FeatureDescription = styled.p`
  margin: 0 auto 2rem;
  max-width: 28rem;
  font-size: 1rem;
  line-height: 1.625;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

export const RecordActionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const RecordActionChip = styled.div<{ $primary?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  ${({ $primary, theme }) =>
    $primary
      ? css`
          background: color-mix(
            in srgb,
            ${theme.colors.primary} 10%,
            transparent
          );
        `
      : css`
          background: ${theme.colors.secondary};
        `}

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${({ $primary, theme }) =>
      $primary ? theme.colors.primary : theme.colors.mutedForeground};
  }
`;

export const RecordActionText = styled.span<{ $primary?: boolean }>`
  font-size: 0.875rem;
  color: ${({ $primary, theme }) =>
    $primary ? theme.colors.primary : theme.colors.mutedForeground};
`;

export const AnalysisList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 28rem;
  margin: 0 auto;
`;

export const AnalysisItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.secondary};
  text-align: left;
`;

export const AnalysisDot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;
`;

export const AnalysisText = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.foreground};
`;

export const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 28rem;
  margin: 0 auto;
`;

export const TodoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.card};
  text-align: left;
`;

export const TodoCheckbox = styled.input`
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  flex-shrink: 0;
`;

export const TodoContent = styled.div`
  flex: 1;
`;

export const TodoTitle = styled.p`
  margin: 0 0 0.25rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.foreground};
`;

export const TodoMeta = styled.p`
  margin: 0;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

export const ScheduleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 28rem;
  margin: 0 auto;
`;

export const ScheduleItem = styled.div<{ $primary?: boolean }>`
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: left;
  border-left: 4px solid
    ${({ $primary, theme }) =>
      $primary ? theme.colors.primary : theme.colors.mutedForeground};
  background: ${({ $primary, theme }) =>
    $primary
      ? `color-mix(in srgb, ${theme.colors.primary} 10%, transparent)`
      : theme.colors.secondary};
`;

export const ScheduleTitle = styled.p`
  margin: 0 0 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.foreground};
`;

export const ScheduleMeta = styled.p`
  margin: 0;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

export const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 3rem;
`;

const baseButton = css`
  width: 6rem;
  height: 2.75rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  cursor: default;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
`;

export const OutlineButton = styled.button`
  ${baseButton};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.foreground};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.mutedForeground};
    cursor: not-allowed;
    opacity: 1;
  }
`;

export const PrimaryButton = styled.button`
  ${baseButton};
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryForeground};

  &:hover {
    background: color-mix(
      in srgb,
      ${({ theme }) => theme.colors.primary} 90%,
      transparent
    );
  }
`;