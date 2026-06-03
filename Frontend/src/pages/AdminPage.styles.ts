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

export const PageWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const HeaderSection = styled.div`
  margin-bottom: 2rem;
`;

export const HeaderTitle = styled.h1`
  margin: 0 0 0.5rem;
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const HeaderDescription = styled.p`
  margin: 0;
  font-size: 0.9375rem;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 1.25rem;
  margin-bottom: 1.5rem;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const StatCard = styled.div`
  ${cardBase};
  padding: 1.25rem;
  border-radius: 0.875rem;
`;

export const StatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.625rem;

  .stat-icon {
    width: 1.125rem;
    height: 1.125rem;
    color: #6b7280;
  }

  html.dark & {
    .stat-icon {
      color: #9ca3af;
    }
  }
`;

export const StatLabel = styled.span`
  font-size: 0.8125rem;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const StatValue = styled.p`
  margin: 0;
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const StatSubText = styled.p<{ $accent?: boolean }>`
  margin: 0.25rem 0 0;
  font-size: 0.75rem;
  color: ${({ $accent, theme }) => ($accent ? theme.colors.accent : '#6b7280')};

  html.dark & {
    color: ${({ $accent, theme }) =>
      $accent ? theme.colors.accent : '#9ca3af'};
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 1.5rem;
  align-items: stretch;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const WideSection = styled.div`
  min-width: 0;
  display: flex;
  grid-column: span 4;

  @media (max-width: 1100px) {
    grid-column: span 1;
  }
`;

export const SideSection = styled.div`
  min-width: 0;
  display: flex;
  grid-column: span 2;

  @media (max-width: 1100px) {
    grid-column: span 1;
  }
`;

export const SectionCard = styled.section`
  ${cardBase};
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const SectionDescription = styled.p`
  margin: 0.375rem 0 0;
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.5;

  html.dark & {
    color: #9ca3af;
  }
`;

export const SectionLinkButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;

  .link-arrow {
    width: 1rem;
    height: 1rem;
    margin-left: 0.25rem;
  }
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
`;

export const AdminTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 0.875rem 0.75rem;
    text-align: left;
    border-bottom: 1px solid #f3f4f6;
    vertical-align: middle;
  }

  th {
    font-size: 0.8125rem;
    font-weight: 600;
    color: #6b7280;
    white-space: nowrap;
  }

  td {
    font-size: 0.875rem;
    color: #111827;
  }

  html.dark & {
    th,
    td {
      border-bottom-color: #262626;
    }

    th {
      color: #9ca3af;
    }

    td {
      color: #ffffff;
    }
  }
`;

export const Badge = styled.span<{
  $variant?: 'default' | 'admin' | 'success' | 'pending' | 'warning' | 'danger';
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 3.5rem;
  height: 1.75rem;
  padding: 0 0.625rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;

  ${({ $variant, theme }) =>
    $variant === 'admin'
      ? css`
          background: rgba(37, 99, 235, 0.1);
          color: ${theme.colors.accent};

          html.dark & {
            background: rgba(37, 99, 235, 0.18);
          }
        `
      : $variant === 'success'
      ? css`
          background: rgba(34, 197, 94, 0.12);
          color: #16a34a;

          html.dark & {
            background: rgba(34, 197, 94, 0.18);
          }
        `
      : $variant === 'pending'
      ? css`
          background: rgba(245, 158, 11, 0.12);
          color: #d97706;

          html.dark & {
            background: rgba(245, 158, 11, 0.18);
          }
        `
      : $variant === 'warning'
      ? css`
          background: rgba(249, 115, 22, 0.12);
          color: #ea580c;

          html.dark & {
            background: rgba(249, 115, 22, 0.18);
          }
        `
      : $variant === 'danger'
      ? css`
          background: rgba(239, 68, 68, 0.12);
          color: #dc2626;

          html.dark & {
            background: rgba(239, 68, 68, 0.18);
          }
        `
      : css`
          background: #f3f4f6;
          color: #374151;

          html.dark & {
            background: #1f2937;
            color: #d1d5db;
          }
        `}
`;

export const ActionButtonRow = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const TableActionButton = styled.button`
  height: 2rem;
  padding: 0 0.75rem;
  border-radius: 0.625rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-size: 0.8125rem;
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

export const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  flex: 1;
`;

export const ActivityItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  padding: 0.875rem;
  border-radius: 0.875rem;
  background: #f9fafb;

  html.dark & {
    background: #0f0f0f;
  }
`;

export const ActivityIconBox = styled.div<{
  $variant: 'blue' | 'green' | 'purple' | 'orange';
}>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({ $variant }) =>
    $variant === 'blue' &&
    css`
      background: rgba(37, 99, 235, 0.1);
      color: #2563eb;
    `}

  ${({ $variant }) =>
    $variant === 'green' &&
    css`
      background: rgba(34, 197, 94, 0.12);
      color: #16a34a;
    `}

  ${({ $variant }) =>
    $variant === 'purple' &&
    css`
      background: rgba(168, 85, 247, 0.12);
      color: #9333ea;
    `}

  ${({ $variant }) =>
    $variant === 'orange' &&
    css`
      background: rgba(249, 115, 22, 0.12);
      color: #ea580c;
    `}

  .activity-icon {
    width: 1.125rem;
    height: 1.125rem;
  }
`;

export const ActivityContent = styled.div`
  min-width: 0;
`;

export const ActivityTitle = styled.p`
  margin: 0;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const ActivityMeta = styled.p`
  margin: 0.25rem 0 0;
  font-size: 0.8125rem;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const InquiryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

export const InquiryItem = styled.div`
  padding: 1rem;
  border-radius: 0.875rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;

  html.dark & {
    border-color: #262626;
    background: #0f0f0f;
  }
`;

export const InquiryTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

export const InquiryTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex-wrap: wrap;
`;

export const InquiryTitle = styled.h3`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const InquiryMeta = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.8125rem;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const InquiryStatusBadge = styled.span<{
  $variant: 'pending' | 'warning' | 'success';
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 4rem;
  height: 1.75rem;
  padding: 0 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;

  ${({ $variant }) =>
    $variant === 'pending'
      ? css`
          background: rgba(245, 158, 11, 0.12);
          color: #d97706;

          html.dark & {
            background: rgba(245, 158, 11, 0.18);
          }
        `
      : $variant === 'warning'
      ? css`
          background: rgba(249, 115, 22, 0.12);
          color: #ea580c;

          html.dark & {
            background: rgba(249, 115, 22, 0.18);
          }
        `
      : css`
          background: rgba(34, 197, 94, 0.12);
          color: #16a34a;

          html.dark & {
            background: rgba(34, 197, 94, 0.18);
          }
        `}
`;

export const InquiryDescription = styled.p`
  margin: 0.75rem 0 0;
  font-size: 0.875rem;
  line-height: 1.6;
  color: #4b5563;

  html.dark & {
    color: #d1d5db;
  }
`;

export const QuickActionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.875rem;
`;

export const QuickActionCard = styled(Link)`
  display: block;
  padding: 1rem;
  border-radius: 0.875rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  text-decoration: none;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    border-color: rgba(37, 99, 235, 0.35);
    background: #f9fafb;
    box-shadow: 0 10px 24px rgba(37, 99, 235, 0.06);
  }

  html.dark & {
    border-color: #262626;
    background: #0f0f0f;

    &:hover {
      border-color: rgba(59, 130, 246, 0.35);
      background: #141414;
      box-shadow: 0 10px 24px rgba(59, 130, 246, 0.08);
    }
  }
`;

export const QuickActionTitle = styled.h3`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const QuickActionDescription = styled.p`
  margin: 0.375rem 0 0;
  font-size: 0.8125rem;
  line-height: 1.6;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const QuickActionFooter = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 0.875rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};

  .quick-arrow {
    width: 1rem;
    height: 1rem;
    margin-left: 0.25rem;
  }
`;

export const SystemStatusCard = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 0.875rem;
  background: #f9fafb;
  border: 1px solid #e5e7eb;

  html.dark & {
    background: #0f0f0f;
    border-color: #262626;
  }
`;

export const SystemStatusHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.875rem;
`;

export const SystemStatusTitle = styled.h3`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const SystemStatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 1.75rem;
  padding: 0 0.75rem;
  border-radius: 9999px;
  background: rgba(34, 197, 94, 0.12);
  color: #16a34a;
  font-size: 0.75rem;
  font-weight: 700;

  html.dark & {
    background: rgba(34, 197, 94, 0.18);
  }
`;

export const SystemStatusList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const SystemStatusItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const SystemStatusLabel = styled.span`
  font-size: 0.8125rem;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const SystemStatusValue = styled.span<{ $accent?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${({ $accent, theme }) => ($accent ? theme.colors.accent : '#111827')};

  .status-mini-icon {
    width: 0.875rem;
    height: 0.875rem;
  }

  html.dark & {
    color: ${({ $accent, theme }) => ($accent ? theme.colors.accent : '#ffffff')};
  }
`;