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

const actionButtonBase = css`
  width: 9rem;
  min-width: 9rem;
  height: 2.75rem;
  padding: 0 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
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

  .action-icon {
    width: 1.125rem;
    height: 1.125rem;
    margin-right: 0.5rem;
    flex-shrink: 0;
  }
`;

export const PageWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const EmptyStateWrapper = styled.div`
  width: 100%;
`;

export const EmptyActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const HeaderLeft = styled.div``;

export const HeaderTitle = styled.h1`
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const HeaderDescription = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #4b5563;

  html.dark & {
    color: #d1d5db;
  }
`;

export const PrimaryActionButton = styled.button`
  ${actionButtonBase};
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

export const OutlineActionButton = styled.button`
  ${actionButtonBase};
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

export const EmptyCard = styled.div`
  ${cardBase};
  padding: 4rem;
  border-radius: 1rem;
  text-align: center;
`;

export const EmptyIconBox = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 1rem;
  background: rgba(37, 99, 235, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: ${({ theme }) => theme.colors.accent};
  }

  html.dark & {
    background: rgba(37, 99, 235, 0.2);
  }
`;

export const EmptyTitle = styled.h2`
  margin: 0 0 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const EmptyDescription = styled.p`
  margin: 0 auto 2rem;
  max-width: 28rem;
  color: #4b5563;
  line-height: 1.625;

  html.dark & {
    color: #d1d5db;
  }
`;

export const EmptyButtonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const StatCard = styled.div`
  ${cardBase};
  padding: 1.5rem;
  border-radius: 0.75rem;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    border-color: rgba(37, 99, 235, 0.35);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.06);
  }

  html.dark & {
    &:hover {
      border-color: rgba(59, 130, 246, 0.35);
      box-shadow: 0 8px 20px rgba(59, 130, 246, 0.08);
    }
  }
`;

export const StatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  .stat-icon {
    width: 1.25rem;
    height: 1.25rem;
    color: #4b5563;
  }

  html.dark & {
    .stat-icon {
      color: #9ca3af;
    }
  }
`;

export const StatLabel = styled.span`
  font-size: 0.875rem;
  color: #4b5563;

  html.dark & {
    color: #d1d5db;
  }
`;

export const StatValue = styled.p`
  margin: 0;
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const StatSubText = styled.p<{ $accent?: boolean }>`
  margin: 0.25rem 0 0;
  font-size: 0.75rem;
  color: ${({ $accent, theme }) => ($accent ? theme.colors.accent : '#4b5563')};

  html.dark & {
    color: ${({ $accent, theme }) =>
      $accent ? theme.colors.accent : '#9ca3af'};
  }
`;

export const MainCard = styled.div`
  ${cardBase};
  padding: 1.5rem;
  border-radius: 0.75rem;
  margin-bottom: 2rem;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const SectionLinkButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.accent};
  padding: 0;
  border-radius: 0.375rem;
  font-size: 0.875rem;

  .link-arrow {
    width: 1rem;
    height: 1rem;
    margin-left: 0.25rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const MeetingsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const MeetingLink = styled(Link)`
  display: block;
  text-decoration: none;
`;

export const MeetingCard = styled.div`
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    border-color: rgba(37, 99, 235, 0.5);
    box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.05);
  }

  html.dark & {
    border-color: rgba(55, 65, 81, 0.5);
    background: #0f0f0f;

    &:hover {
      border-color: rgba(37, 99, 235, 0.5);
    }
  }
`;

export const MeetingTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.875rem;
`;

export const MeetingLeft = styled.div`
  flex: 1;
  min-width: 0;
`;

export const MeetingTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const MeetingMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: #4b5563;

  .meeting-meta-item {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
  }

  .meeting-meta-icon {
    width: 1rem;
    height: 1rem;
  }

  html.dark & {
    color: #d1d5db;
  }
`;

export const MeetingSummary = styled.p`
  margin: 0.625rem 0 0;
  font-size: 0.875rem;
  color: #4b5563;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.5;

  html.dark & {
    color: #d1d5db;
  }
`;

export const MeetingActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const MeetingMenuWrapper = styled.div`
  position: relative;
`;

export const MeetingMenuButton = styled.button`
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: #f3f4f6;
  }

  .meeting-more-icon {
    width: 1rem;
    height: 1rem;
    color: #4b5563;
  }

  html.dark & {
    &:hover {
      background: #1f2937;
    }

    .meeting-more-icon {
      color: #9ca3af;
    }
  }
`;

export const MeetingMenu = styled.div`
  position: absolute;
  top: calc(100% + 0.375rem);
  right: 0;
  min-width: 8rem;
  padding: 0.375rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  z-index: 20;

  html.dark & {
    border-color: #262626;
    background: #1a1a1a;
  }
`;

export const MeetingMenuItem = styled.button<{ $danger?: boolean }>`
  width: 100%;
  display: block;
  padding: 0.625rem 0.75rem;
  border: none;
  border-radius: 0.5rem;
  background: transparent;
  text-align: left;
  text-decoration: none;
  font-size: 0.875rem;
  color: ${({ $danger }) => ($danger ? '#dc2626' : '#111827')};
  cursor: pointer;

  &:hover {
    background: #f3f4f6;
  }

  html.dark & {
    color: ${({ $danger }) => ($danger ? '#f87171' : '#ffffff')};

    &:hover {
      background: #1f2937;
    }
  }
`;

export const StatusBadge = styled.span<{
  $variant: 'completed' | 'analyzing' | 'failed';
}>`
  display: inline-flex;
  align-items: center;
  padding: 0.125rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 500;

  .status-icon {
    width: 0.75rem;
    height: 0.75rem;
    margin-right: 0.25rem;
  }

  .status-spin {
    animation: spin 1s linear infinite;
  }

  ${({ $variant }) =>
    $variant === 'completed' &&
    css`
      background: #f3f4f6;
      color: #374151;

      html.dark & {
        background: #1f2937;
        color: #d1d5db;
      }
    `}

  ${({ $variant, theme }) =>
    $variant === 'analyzing' &&
    css`
      background: #eff6ff;
      color: ${theme.colors.accent};

      html.dark & {
        background: #172554;
        color: #3b82f6;
      }
    `}

  ${({ $variant }) =>
    $variant === 'failed' &&
    css`
      background: #fef2f2;
      color: #dc2626;
    `}

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const TodoCalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  align-items: stretch;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const TodoListCard = styled.div`
  ${cardBase};
  padding: 1.5rem;
  border-radius: 0.75rem;
  min-width: 0;
  height: 640px;
  overflow-y: auto;
`;

export const CalendarSideCard = styled.div`
  ${cardBase};
  padding: 1.5rem;
  border-radius: 0.75rem;
  min-width: 0;
  height: 640px;
  overflow-y: auto;
`;

export const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const TodoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;

  &:hover {
    background: #f9fafb;
  }

  html.dark & {
    &:hover {
      background: #0f0f0f;
    }
  }
`;

export const TodoCheck = styled.input`
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
`;

export const TodoContent = styled.div`
  flex: 1;
`;

export const TodoText = styled.p<{ $completed?: boolean }>`
  margin: 0;
  font-size: 0.875rem;
  color: ${({ $completed }) => ($completed ? '#6b7280' : '#111827')};
  text-decoration: ${({ $completed }) => ($completed ? 'line-through' : 'none')};

  html.dark & {
    color: ${({ $completed }) => ($completed ? '#6b7280' : '#ffffff')};
  }
`;

export const TodoMetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
`;

export const TodoMetaText = styled.span`
  font-size: 0.75rem;
  color: #4b5563;

  html.dark & {
    color: #9ca3af;
  }
`;

export const CalendarSectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const CalendarTop = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
`;

export const CalendarBlock = styled.div`
  width: 100%;
  max-width: 360px;
  margin: 0 auto;

  .dashboard-calendar {
    width: 100%;
  }
`;

export const UpcomingSection = styled.div`
  margin-top: 0;
`;

export const UpcomingTitle = styled.h3`
  margin: 0 0 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const UpcomingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const UpcomingItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  border-radius: 0.75rem;
  background: #f9fafb;

  html.dark & {
    background: #0f0f0f;
  }
`;

export const UpcomingDateBox = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 0.75rem;
  background: ${({ theme }) => theme.colors.accent};
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const UpcomingMonth = styled.span`
  font-size: 0.75rem;
  line-height: 1;
`;

export const UpcomingDay = styled.span`
  font-size: 1.375rem;
  font-weight: 700;
  line-height: 1.1;
`;

export const UpcomingContent = styled.div`
  flex: 1;
`;

export const UpcomingEventTitle = styled.p`
  margin: 0 0 0.375rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const UpcomingEventTime = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #4b5563;

  html.dark & {
    color: #9ca3af;
  }
`;