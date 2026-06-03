import styled, { css } from 'styled-components';

type FilterButtonProps = {
  $active: boolean;
};

type NotificationCardProps = {
  $unread: boolean;
};

type NotificationIconBoxProps = {
  $variant: 'meeting' | 'todo' | 'calendar' | 'system';
};

const cardBase = css`
  background: #ffffff;
  border: 1px solid #e5e7eb;

  html.dark & {
    background: #1a1a1a;
    border-color: #262626;
  }
`;

const filterInactive = css`
  background: #ffffff;
  color: #111827;
  border: 1px solid #e5e7eb;

  &:hover {
    background: #f3f4f6;
  }

  html.dark & {
    background: #1a1a1a;
    color: #ffffff;
    border-color: #262626;

    &:hover {
      background: #1f2937;
    }
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

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const HeaderTextGroup = styled.div``;

export const Title = styled.h1`
  margin: 0;
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const UnreadText = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.875rem;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const OutlineButton = styled.button`
  height: 2.25rem;
  padding: 0 0.875rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background: #f3f4f6;
  }

  .button-icon {
    width: 1rem;
    height: 1rem;
    color: #22c55e;
  }

  html.dark & {
    background: #1a1a1a;
    color: #ffffff;
    border-color: #262626;

    &:hover {
      background: #1f2937;
    }
  }
`;

export const FilterRow = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const FilterButton = styled.button<FilterButtonProps>`
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  font-size: 0.9375rem;
  font-weight: 500;
  transition: all 0.2s ease;

  ${({ $active, theme }) =>
    $active
      ? css`
          background: ${theme.colors.accent};
          color: #ffffff;
          border: 1px solid transparent;
        `
      : filterInactive}
`;

export const NotificationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const NotificationCard = styled.div<NotificationCardProps>`
  ${cardBase};
  padding: 1.25rem;
  border-radius: 1rem;
  transition:
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  ${({ $unread }) =>
    $unread &&
    css`
      border-color: rgba(37, 99, 235, 0.3);

      html.dark & {
        border-color: rgba(37, 99, 235, 0.3);
      }
    `}

  &:hover {
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
  }
`;

export const NotificationInner = styled.div`
  display: flex;
  gap: 1rem;
`;

export const NotificationIconBox = styled.div<NotificationIconBoxProps>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({ $variant }) =>
    $variant === 'meeting' &&
    css`
      background: rgba(59, 130, 246, 0.1);

      html.dark & {
        background: rgba(59, 130, 246, 0.2);
      }
    `}

  ${({ $variant }) =>
    $variant === 'todo' &&
    css`
      background: rgba(34, 197, 94, 0.1);

      html.dark & {
        background: rgba(34, 197, 94, 0.2);
      }
    `}

  ${({ $variant }) =>
    $variant === 'calendar' &&
    css`
      background: rgba(168, 85, 247, 0.1);

      html.dark & {
        background: rgba(168, 85, 247, 0.2);
      }
    `}

  ${({ $variant }) =>
    $variant === 'system' &&
    css`
      background: rgba(107, 114, 128, 0.1);

      html.dark & {
        background: rgba(107, 114, 128, 0.2);
      }
    `}

  .notification-type-icon {
    width: 1.25rem;
    height: 1.25rem;
  }

  .meeting {
    color: #3b82f6;
  }

  .todo {
    color: #22c55e;
  }

  .calendar {
    color: #a855f7;
  }

  .system {
    color: #6b7280;

    html.dark & {
      color: #9ca3af;
    }
  }
`;

export const NotificationContent = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`;

export const NotificationTopRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const NotificationTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1.4;

  html.dark & {
    color: #ffffff;
  }
`;

export const UnreadDot = styled.span`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background: ${({ theme }) => theme.colors.accent};
  flex-shrink: 0;
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0;
  transition: opacity 0.2s ease;

  ${NotificationCard}:hover & {
    opacity: 1;
  }
`;

export const IconActionButton = styled.button`
  width: 1.9375rem;
  height: 1.9375rem;
  border-radius: 0.5rem;
  border: none;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  &:hover {
    background: #f3f4f6;
  }

  .action-icon {
    width: 1rem;
    height: 1rem;
  }

  .read {
    color: #22c55e;
  }

  .delete {
    color: #ef4444;
  }

  html.dark & {
    &:hover {
      background: #1f2937;
    }
  }
`;

export const NotificationMessage = styled.p`
  margin: 0.375rem 0 0;
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.5;

  html.dark & {
    color: #9ca3af;
  }
`;

export const NotificationTime = styled.span`
  margin-top: 1rem;
  font-size: 0.8125rem;
  line-height: 1;
  color: #6b7280;
  align-self: flex-end;
  text-align: right;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;

  .time-icon {
    width: 0.75rem;
    height: 0.75rem;
  }

  html.dark & {
    color: #9ca3af;
  }
`;

export const EmptyCard = styled.div`
  ${cardBase};
  padding: 3rem;
  border-radius: 1rem;
  text-align: center;
`;

export const EmptyIconBox = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;

  svg {
    width: 2rem;
    height: 2rem;
    color: #9ca3af;
  }

  html.dark & {
    background: #1f2937;

    svg {
      color: #52525b;
    }
  }
`;

export const EmptyTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const EmptyDescription = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;