import styled, { css } from 'styled-components';

type StatValueProps = {
  $variant: 'default' | 'muted' | 'accent' | 'danger';
};

type TodoItemProps = {
  $overdue: boolean;
};

type TodoTextProps = {
  $completed: boolean;
};

type TodoMetaTextProps = {
  $overdue?: boolean;
};

type PriorityBadgeProps = {
  $priority: 'high' | 'medium' | 'low';
};

type StatusBadgeProps = {
  $status: '진행중' | '대기중' | '완료';
};

type ActionMenuItemProps = {
  $danger?: boolean;
};

const cardBase = css`
  border: 1px solid #e5e7eb;
  background: #ffffff;

  html.dark & {
    border-color: #262626;
    background: #1a1a1a;
  }
`;

export const PageWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
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
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const AddButton = styled.button`
  height: 44px;
  padding: 0 24px;
  border: none;
  border-radius: 10px;
  background: var(--color-accent, #2563eb);
  color: var(--color-accent-foreground, #ffffff);
  font-size: 14px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: default;

  .button-icon {
    width: 20px;
    height: 20px;
    margin-right: 0;
  }

  &:hover {
    opacity: 0.92;
  }
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
`;

export const StatLabel = styled.p`
  margin: 0 0 0.25rem;
  font-size: 0.875rem;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const StatValue = styled.p<StatValueProps>`
  margin: 0;
  font-size: 1.875rem;
  font-weight: 700;

  ${({ $variant, theme }) => {
    if ($variant === 'muted') {
      return css`
        color: #6b7280;

        html.dark & {
          color: #d1d5db;
        }
      `;
    }

    if ($variant === 'accent') {
      return css`
        color: ${theme.colors.accent};
      `;
    }

    if ($variant === 'danger') {
      return css`
        color: #dc2626;
      `;
    }

    return css`
      color: #111827;

      html.dark & {
        color: #ffffff;
      }
    `;
  }}
`;

export const FilterCard = styled.div`
  ${cardBase};
  padding: 1.5rem;
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;
`;

export const FilterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SearchWrapper = styled.div`
  position: relative;
  flex: 1;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);

  .search-icon {
    width: 1.25rem;
    height: 1.25rem;
    color: #6b7280;
  }

  html.dark & {
    .search-icon {
      color: #9ca3af;
    }
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 2.75rem;
  padding: 0 1rem 0 2.5rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-size: 0.9375rem;
  outline: none;

  &::placeholder {
    color: #9ca3af;
  }

  html.dark & {
    border-color: #262626;
    background: #0a0a0a;
    color: #ffffff;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  min-width: 180px;
`;

export const SelectIconBox = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;

  .select-icon {
    width: 1rem;
    height: 1rem;
    color: #6b7280;
  }

  html.dark & {
    .select-icon {
      color: #9ca3af;
    }
  }
`;

export const SelectElement = styled.select`
  width: 100%;
  height: 2.75rem;
  padding: 0 1rem 0 2.5rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-size: 0.9375rem;
  outline: none;

  html.dark & {
    border-color: #262626;
    background: #0a0a0a;
    color: #ffffff;
  }
`;

export const TodoListCard = styled.div`
  ${cardBase};
  border-radius: 0.75rem;
  overflow: visible;
`;

export const TodoList = styled.div``;

export const TodoItem = styled.div<TodoItemProps>`
  position: relative;
  padding: 1.25rem;
  transition: background-color 0.2s ease;

  & + &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: #e5e7eb;
  }

  &:hover {
    background: #f8fafc;
  }

  ${({ $overdue }) =>
    $overdue &&
    css`
      background: #fef2f2;
    `}

  html.dark & + &::before {
    background: #242428;
  }

  html.dark &:hover {
    background: #111827;
  }

  html.dark & {
    ${({ $overdue }) =>
      $overdue &&
      css`
        background: rgba(127, 29, 29, 0.12);
      `}
  }
`;

export const TodoMain = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const TodoCheckbox = styled.input`
  width: 1rem;
  height: 1rem;
  margin-top: 0.25rem;
  flex-shrink: 0;
`;

export const TodoContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const TodoTopRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

export const TodoText = styled.p<TodoTextProps>`
  margin: 0 0 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ $completed }) => ($completed ? '#6b7280' : '#111827')};
  text-decoration: ${({ $completed }) => ($completed ? 'line-through' : 'none')};

  html.dark & {
    color: ${({ $completed }) => ($completed ? '#9ca3af' : '#ffffff')};
  }
`;

export const TodoSource = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const TodoRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const BadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const PriorityBadge = styled.span<PriorityBadgeProps>`
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;

  ${({ $priority }) => {
    if ($priority === 'high') {
      return css`
        background: #fef2f2;
        color: #dc2626;
      `;
    }

    if ($priority === 'medium') {
      return css`
        background: #fefce8;
        color: #a16207;
      `;
    }

    return css`
      background: #f3f4f6;
      color: #6b7280;
    `;
  }}
`;

export const StatusBadge = styled.span<StatusBadgeProps>`
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;

  ${({ $status }) => {
    if ($status === '완료') {
      return css`
        background: #f3f4f6;
        color: #374151;

        html.dark & {
          background: #1f2937;
          color: #d1d5db;
        }
      `;
    }

    if ($status === '진행중') {
      return css`
        background: #eff6ff;
        color: #2563eb;
      `;
    }

    return css`
      background: #f3f4f6;
      color: #6b7280;
    `;
  }}
`;

export const ActionMenuWrapper = styled.div`
  position: relative;
`;

export const ActionMenuButton = styled.button`
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 0.5rem;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #f3f4f6;
  }

  .menu-icon {
    width: 1rem;
    height: 1rem;
    color: #6b7280;
  }

  html.dark & {
    &:hover {
      background: #1f2937;
    }

    .menu-icon {
      color: #9ca3af;
    }
  }
`;

export const ActionMenu = styled.div`
  position: absolute;
  top: calc(100% + 0.25rem);
  right: 0;
  min-width: 8rem;
  padding: 0.375rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  z-index: 10;

  html.dark & {
    border-color: #262626;
    background: #1a1a1a;
  }
`;

export const ActionMenuItem = styled.button<ActionMenuItemProps>`
  width: 100%;
  padding: 0.625rem 0.75rem;
  border: none;
  border-radius: 0.5rem;
  background: transparent;
  text-align: left;
  font-size: 0.875rem;
  color: ${({ $danger }) => ($danger ? '#dc2626' : '#111827')};

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

export const TodoMetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  color: #6b7280;
`;

export const TodoMetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .meta-icon {
    width: 1rem;
    height: 1rem;
  }

  html.dark & {
    color: #9ca3af;
  }
`;

export const TodoMetaText = styled.span<TodoMetaTextProps>`
  color: ${({ $overdue }) => ($overdue ? '#dc2626' : '#6b7280')};
  font-weight: ${({ $overdue }) => ($overdue ? 500 : 400)};

  html.dark & {
    color: ${({ $overdue }) => ($overdue ? '#f87171' : '#9ca3af')};
  }
`;

export const OverdueBadge = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  background: #fee2e2;
  color: #dc2626;
  font-size: 0.75rem;
  font-weight: 500;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;

export const ModalCard = styled.div`
  width: 100%;
  max-width: 42rem;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  box-shadow: 0 24px 64px rgba(15, 23, 42, 0.18);
  overflow: hidden;

  html.dark & {
    border-color: #262626;
    background: #1a1a1a;
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.45);
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.5rem 1rem;
  border-bottom: 1px solid #e5e7eb;

  html.dark & {
    border-bottom-color: #262626;
  }
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const ModalCloseButton = styled.button`
  width: 2.25rem;
  height: 2.25rem;
  border: none;
  border-radius: 9999px;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #f3f4f6;
  }

  .close-icon {
    width: 1rem;
    height: 1rem;
    color: #6b7280;
  }

  html.dark & {
    &:hover {
      background: #1f2937;
    }

    .close-icon {
      color: #9ca3af;
    }
  }
`;

export const ModalBody = styled.div`
  padding: 1.5rem;
`;

export const ModalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
`;

export const ModalField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:first-child,
  &:nth-child(5) {
    grid-column: span 2;
  }
`;

export const ModalLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const ModalInput = styled.input`
  width: 100%;
  height: 2.75rem;
  padding: 0 1rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-size: 0.9375rem;
  outline: none;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
  }

  html.dark & {
    border-color: #262626;
    background: #0a0a0a;
    color: #ffffff;
  }
`;

export const ModalSelect = styled.select`
  width: 100%;
  height: 2.75rem;
  padding: 0 1rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-size: 0.9375rem;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
  }

  html.dark & {
    border-color: #262626;
    background: #0a0a0a;
    color: #ffffff;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1rem 1.5rem 1.5rem;
`;

export const ModalCancelButton = styled.button`
  height: 2.75rem;
  padding: 0 1.25rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-size: 0.9375rem;
  font-weight: 500;

  &:hover {
    background: #f3f4f6;
  }

  html.dark & {
    border-color: #262626;
    background: #1a1a1a;
    color: #ffffff;

    &:hover {
      background: #1f2937;
    }
  }
`;

export const ModalSubmitButton = styled.button`
  height: 2.75rem;
  padding: 0 1.25rem;
  border: none;
  border-radius: 0.75rem;
  background: ${({ theme }) => theme.colors.accent};
  color: #ffffff;
  font-size: 0.9375rem;
  font-weight: 500;

  &:hover {
    background: color-mix(
      in srgb,
      ${({ theme }) => theme.colors.accent} 90%,
      transparent
    );
  }
`;