import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const cardBase = css`
  border: 1px solid #e5e7eb;
  background: #ffffff;
  border-radius: 0.75rem;

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    background: #1A1A1A;
  }
`;


const modalButtonBase = css`
  height: 2.75rem;
  padding: 0 1rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
  gap: 1rem;
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

export const HeaderActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const PrimaryActionButton = styled.button`
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

  .action-icon {
    width: 20px;
    height: 20px;
  }

  &:hover {
    opacity: 0.92;
  }
`;

export const FilterCard = styled.div`
  border: 1px solid #e5e7eb;
  background: #ffffff;
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    background: #1A1A1A;
  }
`;

export const FilterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SearchField = styled.div`
  position: relative;
  flex: 1;
`;

export const SearchIconBox = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #4b5563;

  .search-icon {
    width: 1.25rem;
    height: 1.25rem;
  }

  html.dark & {
    color: #9ca3af;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 2.75rem;
  padding: 0 1rem 0 2.625rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-size: 0.9375rem;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #d1d5db;
    box-shadow: none;
  }

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    background: #0A0A0A;
    color: #ffffff;

    &::placeholder {
      color: #6b7280;
    }

    &:focus {
      border-color: rgba(255, 255, 255, 0.16);
      box-shadow: none;
    }
  }
`;

export const FilterSelect = styled.select`
  width: 180px;
  height: 2.75rem;
  padding: 0 0.875rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-size: 0.9375rem;

  &:focus {
    outline: none;
    border-color: #d1d5db;
    box-shadow: none;
  }

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    background: #0A0A0A;
    color: #ffffff;

    &:focus {
      border-color: rgba(255, 255, 255, 0.16);
      box-shadow: none;
    }
  }
`;

export const FolderFilterWrapper = styled.div`
  position: relative;
`;

export const FolderFilterButton = styled.button`
  height: 2.75rem;
  padding: 0 1rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-size: 0.9375rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  .button-icon {
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    background: #f3f4f6;
  }

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    background: #0A0A0A;
    color: #ffffff;

    &:hover {
      background: #141414;
    }
  }
`;

export const FolderFilterMenu = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  min-width: 180px;
  padding: 0.5rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  z-index: 20;

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    background: #1A1A1A;
  }
`;

export const FolderFilterMenuItem = styled.button`
  width: 100%;
  height: 2.25rem;
  padding: 0 0.75rem;
  border: none;
  border-radius: 0.5rem;
  background: transparent;
  color: #111827;
  font-size: 0.875rem;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .menu-icon {
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    background: #f3f4f6;
  }

  html.dark & {
    color: #ffffff;

    &:hover {
      background: #141414;
    }
  }
`;

export const MeetingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
`;

export const MeetingLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const MeetingCard = styled.div`
  ${cardBase};
  padding: 1.5rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  height: 100%;

  &:hover {
    border-color: color-mix(
      in srgb,
      ${({ theme }) => theme.colors.accent} 50%,
      transparent
    );
    box-shadow: 0 10px 24px
      color-mix(in srgb, ${({ theme }) => theme.colors.accent} 5%, transparent);
  }
`;

export const MeetingTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
  gap: 1rem;
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
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 0.75rem;

  .meeting-meta-icon {
    width: 1rem;
    height: 1rem;
  }

  html.dark & {
    color: #d1d5db;
  }
`;

export const MeetingSummary = styled.p`
  margin: 0 0 1rem;
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  html.dark & {
    color: #d1d5db;
  }
`;

export const MeetingBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const MeetingTags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const TagBadge = styled.span`
  height: 1.625rem;
  padding: 0 0.625rem;
  border-radius: 9999px;
  border: 1px solid #e5e7eb;
  font-size: 0.75rem;
  color: #374151;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    color: #d1d5db;
  }
`;

export const StatusBadge = styled.span<{
  $variant: 'completed' | 'analyzing' | 'failed' | 'uploaded';
}>`
  height: 1.75rem;
  padding: 0 0.625rem;
  border-radius: 9999px;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;

  .status-icon {
    width: 0.75rem;
    height: 0.75rem;
  }

  .status-spin {
    animation: ${spin} 1s linear infinite;
  }

  ${({ $variant, theme }) =>
    $variant === 'completed'
      ? css`
          background: #f3f4f6;
          color: #374151;

          html.dark & {
            background: #1f2937;
            color: #d1d5db;
          }
        `
      : $variant === 'analyzing'
      ? css`
          background: #eff6ff;
          color: ${theme.colors.accent};

          html.dark & {
            background: #172554;
            color: #60a5fa;
          }
        `
      : css`
          background: #fef2f2;
          color: #dc2626;

          html.dark & {
            background: rgba(127, 29, 29, 0.35);
            color: #f87171;
          }
        `}
`;

export const MeetingFooter = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;

  html.dark & {
    border-top-color: rgba(255, 255, 255, 0.08);
  }
`;

export const MeetingFolderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #4b5563;

  .folder-icon {
    width: 1rem;
    height: 1rem;
  }

  html.dark & {
    color: #9ca3af;
  }
`;

export const MeetingMenuWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
`;

export const MeetingMenuButton = styled.button`
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 0.5rem;
  background: transparent;
  color: #4b5563;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  .meeting-more-icon {
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    background: #f3f4f6;
  }

  html.dark & {
    color: #9ca3af;

    &:hover {
      background: #141414;
    }
  }
`;

export const MeetingMenu = styled.div<{ $alignRight?: boolean }>`
  position: absolute;
  top: calc(100% + 0.375rem);
  ${({ $alignRight }) => ($alignRight ? 'right: 0;' : 'right: 0;')}
  min-width: 140px;
  padding: 0.5rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  z-index: 30;

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    background: #1A1A1A;
  }
`;

export const MeetingMenuItem = styled.button<{ $danger?: boolean }>`
  width: 100%;
  height: 2.25rem;
  padding: 0 0.75rem;
  border: none;
  border-radius: 0.5rem;
  background: transparent;
  color: ${({ $danger }) => ($danger ? '#dc2626' : '#111827')};
  font-size: 0.875rem;
  text-align: left;

  &:hover {
    background: #f3f4f6;
  }

  html.dark & {
    color: ${({ $danger }) => ($danger ? '#f87171' : '#ffffff')};

    &:hover {
      background: #141414;
    }
  }
`;

export const ListCard = styled.div`
  ${cardBase};
  overflow: hidden;
`;

export const ListTableWrapper = styled.div`
  overflow-x: auto;
`;

export const ListTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead tr {
    border-bottom: 1px solid #e5e7eb;
    background: #f9fafb;

    html.dark & {
      border-bottom-color: rgba(255, 255, 255, 0.08);
      background: #0A0A0A;
    }
  }

  th {
    text-align: left;
    padding: 1rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: #111827;
  }

  td {
    padding: 1rem;
    font-size: 0.875rem;
    color: #4b5563;
    border-bottom: 1px solid #e5e7eb;
    vertical-align: middle;
  }

  tbody tr:hover {
    background: #f9fafb;

    html.dark & {
      background: #141414;
    }
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  html.dark & {
    th {
      color: #ffffff;
    }

    td {
      color: #d1d5db;
      border-bottom-color: rgba(255, 255, 255, 0.08);
    }
  }

  th:last-child,
  td:last-child {
    text-align: right;
  }
`;

export const TableMeetingLink = styled(Link)`
  font-weight: 500;
  color: #111827;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  html.dark & {
    color: #ffffff;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1200;
  background: rgba(15, 23, 42, 0.42);
  backdrop-filter: blur(14px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;

export const ModalCard = styled.div`
  width: 100%;
  max-width: 32rem;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.16);
  overflow: hidden;

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    background: #1A1A1A;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 1.25rem 0;
`;

export const ModalTitle = styled.h3`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const ModalDescription = styled.p`
  margin: 0.375rem 0 0;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const ModalCloseButton = styled.button`
  width: 2rem;
  height: 2rem;
  padding: 0;
  border: none;
  border-radius: 9999px;
  background: transparent;
  color: #9ca3af;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  align-self: flex-start;

  .close-icon {
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    background: rgba(15, 23, 42, 0.06);
    color: #6b7280;
  }

  html.dark & {
    color: #9ca3af;

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      color: #ffffff;
    }
  }
`;

export const ModalBody = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 0 1.25rem 1.25rem;
`;

export const ModalPrimaryButton = styled.button`
  ${modalButtonBase};
  border: none;
  background: ${({ theme }) => theme.colors.accent};
  color: #ffffff;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: color-mix(
      in srgb,
      ${({ theme }) => theme.colors.accent} 90%,
      transparent
    );
  }
`;

export const ModalSecondaryButton = styled.button`
  ${modalButtonBase};
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;

  &:hover {
    background: #f3f4f6;
  }

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    background: #0A0A0A;
    color: #ffffff;

    &:hover {
      background: #141414;
    }
  }
`;

export const ModalField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ModalLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const ModalInput = styled.input`
  width: 100%;
  height: 2.875rem;
  padding: 0 0.875rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-size: 0.9375rem;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #d1d5db;
    box-shadow: none;
  }

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    background: #0A0A0A;
    color: #ffffff;

    &::placeholder {
      color: #6b7280;
    }

    &:focus {
      border-color: rgba(255, 255, 255, 0.16);
    }
  }
`;

export const ModalHelperText = styled.p`
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const ShareLinkBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ShareLinkText = styled.div`
  flex: 1;
  min-height: 2.875rem;
  padding: 0.75rem 0.875rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
  color: #111827;
  font-size: 0.875rem;
  line-height: 1.5;
  word-break: break-all;

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    background: #0A0A0A;
    color: #ffffff;
  }
`;

export const ShareOptionGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

export const ShareOptionButton = styled.button`
  height: 2.75rem;
  padding: 0 1rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  .share-option-icon {
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    background: #f3f4f6;
  }

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    background: #0A0A0A;
    color: #ffffff;

    &:hover {
      background: #141414;
    }
  }
`;

export const EmptyStateCard = styled.div`
  ${cardBase};
  min-height: 22rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const EmptyStateIconWrap = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  background: #f3f4f6;
  color: #6b7280;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  .empty-icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  html.dark & {
    background: #0A0A0A;
    color: #9ca3af;
  }
`;

export const EmptyStateTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const EmptyStateDescription = styled.p`
  margin: 0 0 1.25rem;
  font-size: 0.875rem;
  line-height: 1.6;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const EmptyStateActionButton = styled.button`
  ${modalButtonBase};
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;

  &:hover {
    background: #f3f4f6;
  }

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    background: #0A0A0A;
    color: #ffffff;

    &:hover {
      background: #141414;
    }
  }
`;

export const WarningMessage = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-top: 0.25rem;
  padding: 0.875rem 1rem;
  border-radius: 0.875rem;
  background: rgba(245, 158, 11, 0.1);
  color: #b45309;
  font-size: 0.875rem;
  line-height: 1.5;

  .warning-icon {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    margin-top: 0.125rem;
  }

  html.dark & {
    background: rgba(245, 158, 11, 0.16);
    color: #fbbf24;
  }
`;

export const ToastContainer = styled.div`
  position: fixed;
  left: 50%;
  bottom: 2rem;
  transform: translateX(-50%);
  z-index: 1300;
`;

export const ToastBox = styled.div<{ $variant: 'success' | 'error' }>`
  min-width: 18rem;
  max-width: 28rem;
  min-height: 3rem;
  padding: 0.75rem 0.875rem 0.75rem 1rem;
  border-radius: 0.875rem;
  border: 1px solid
    ${({ $variant }) =>
      $variant === 'success' ? 'rgba(34, 197, 94, 0.25)' : 'rgba(239, 68, 68, 0.25)'};
  background: ${({ $variant }) =>
    $variant === 'success' ? 'rgba(34, 197, 94, 0.12)' : 'rgba(239, 68, 68, 0.12)'};
  color: ${({ $variant }) => ($variant === 'success' ? '#166534' : '#dc2626')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.12);
  backdrop-filter: blur(14px);
  font-size: 0.875rem;
  font-weight: 600;

  html.dark & {
    color: ${({ $variant }) => ($variant === 'success' ? '#86efac' : '#fca5a5')};
    background: ${({ $variant }) =>
      $variant === 'success'
        ? 'rgba(34, 197, 94, 0.14)'
        : 'rgba(239, 68, 68, 0.14)'};
    border-color: ${({ $variant }) =>
      $variant === 'success'
        ? 'rgba(34, 197, 94, 0.2)'
        : 'rgba(239, 68, 68, 0.2)'};
  }
`;

export const ToastCloseButton = styled.button`
  width: 1.75rem;
  height: 1.75rem;
  padding: 0;
  border: none;
  border-radius: 9999px;
  background: transparent;
  color: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  .toast-close-icon {
    width: 0.875rem;
    height: 0.875rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }
`;
