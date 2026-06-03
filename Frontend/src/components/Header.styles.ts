import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;

  html.dark & {
    background: #1a1a1a;
    border-bottom-color: #1f2937;
  }
`;

export const HeaderInner = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
`;

export const LogoIcon = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  ${LogoLink}:hover & {
    transform: scale(1.05);
  }

  span {
    color: #ffffff;
    font-weight: 700;
    line-height: 1;
  }
`;

export const LogoText = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const NavItemLink = styled(Link)`
  text-decoration: none;
`;

export const GhostButton = styled.button`
  height: 2.25rem;
  padding: 0 1rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
  cursor: default;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  &:hover {
    background: #f3f4f6;
  }

  html.dark & {
    color: #ffffff;

    &:hover {
      background: #1f2937;
    }
  }
`;

export const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const IconButton = styled.button<{ $rounded?: boolean; $filled?: boolean }>`
  position: relative;
  width: 2.25rem;
  height: 2.25rem;
  border: none;
  border-radius: ${({ $rounded }) => ($rounded ? '9999px' : '0.375rem')};
  background: ${({ $filled }) => ($filled ? '#f3f4f6' : 'transparent')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  transition: background-color 0.2s ease;

  &:hover {
    background: ${({ $filled }) => ($filled ? '#e5e7eb' : '#f3f4f6')};
  }

  .icon {
    width: 1.25rem;
    height: 1.25rem;
    color: #4b5563;
  }

  html.dark & {
    background: ${({ $filled }) => ($filled ? '#1f2937' : 'transparent')};

    &:hover {
      background: ${({ $filled }) => ($filled ? '#374151' : '#1f2937')};
    }

    .icon {
      color: #9ca3af;
    }
  }
`;

export const BadgeBubble = styled.span`
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  width: 1.25rem;
  height: 1.25rem;
  padding: 0;
  border-radius: 9999px;
  background: ${({ theme }) => theme.colors.accent};
  color: #ffffff;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const DropdownPanel = styled.div<{ $type: 'notification' | 'profile' }>`
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  z-index: 60;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08);
  overflow: hidden;

  ${({ $type }) =>
    $type === 'notification'
      ? css`
          width: 420px;
          padding: 0;
          border-radius: 0.375rem;
        `
      : css`
          width: 16rem;
          padding: 0;
          border-radius: 0.375rem;
        `}

  html.dark & {
    background: #1a1a1a;
    border-color: #374151;
  }
`;

export const DropdownHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;

  display: flex;
  align-items: center;
  justify-content: space-between;

  html.dark & {
    border-bottom-color: #374151;
  }
`;

export const DropdownTitle = styled.h3`
  margin: 0;
  font-weight: 600;
  color: #111827;
  font-size: 1rem;

  html.dark & {
    color: #ffffff;
  }
`;

export const DropdownHeaderButton = styled.button`
  height: 1.75rem;
  padding: 0 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.accent};
  cursor: default;

  &:hover {
    background: rgba(37, 99, 235, 0.1);
  }
`;

export const NotificationList = styled.div`
  max-height: 480px;
  overflow-y: auto;
`;

export const NotificationItem = styled.div`
  padding: 1rem;
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  cursor: default;
  border-bottom: 1px solid #f3f4f6;

  &:hover {
    background: #f9fafb;
  }

  &:last-child {
    border-bottom: none;
  }

  html.dark & {
    border-bottom-color: #1f2937;

    &:hover {
      background: rgba(31, 41, 55, 0.5);
    }
  }
`;

const variantStyles = {
  blue: css`
    background: rgba(59, 130, 246, 0.1);

    .notify-icon {
      color: #3b82f6;
    }

    html.dark & {
      background: rgba(59, 130, 246, 0.2);
    }
  `,
  green: css`
    background: rgba(34, 197, 94, 0.1);

    .notify-icon {
      color: #22c55e;
    }

    html.dark & {
      background: rgba(34, 197, 94, 0.2);
    }
  `,
  purple: css`
    background: rgba(168, 85, 247, 0.1);

    .notify-icon {
      color: #a855f7;
    }

    html.dark & {
      background: rgba(168, 85, 247, 0.2);
    }
  `,
  orange: css`
    background: rgba(249, 115, 22, 0.1);

    .notify-icon {
      color: #f97316;
    }

    html.dark & {
      background: rgba(249, 115, 22, 0.2);
    }
  `,
  gray: css`
    background: rgba(107, 114, 128, 0.1);

    .notify-icon {
      color: #6b7280;
    }

    html.dark & {
      background: rgba(107, 114, 128, 0.2);

      .notify-icon {
        color: #9ca3af;
      }
    }
  `,
};

export const NotificationIconBox = styled.div<{
  $variant: keyof typeof variantStyles;
}>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  .notify-icon {
    width: 1.25rem;
    height: 1.25rem;
  }

  ${({ $variant }) => variantStyles[$variant]}
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
  margin-bottom: 0.25rem;
`;

export const NotificationTitle = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 0.875rem;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const NotificationUnreadDot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background: #3b82f6;
  flex-shrink: 0;
  margin-top: 0.375rem;
`;

export const NotificationDescription = styled.p`
  margin: 0.375rem 0 0;
  font-size: 0.9375rem;
  line-height: 1.5;
  color: #4b5563;

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

  html.dark & {
    color: #9ca3af;
  }
`;

export const DropdownFooter = styled.div`
  padding: 0.75rem;
  border-top: 1px solid #e5e7eb;
  text-align: center;

  html.dark & {
    border-top-color: #374151;
  }
`;

export const FooterButtonLink = styled(Link)`
  width: 100%;
  height: 2rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.accent};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(37, 99, 235, 0.1);
  }
`;

export const ProfileInfo = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;

  html.dark & {
    border-bottom-color: #374151;
  }
`;

export const ProfileName = styled.p`
  margin: 0;
  font-weight: 600;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const ProfileEmail = styled.p`
  margin: 0.25rem 0 0;
  font-size: 0.875rem;
  color: #4b5563;

  html.dark & {
    color: #9ca3af;
  }
`;

export const ProfileMenuList = styled.div`
  padding: 0.25rem;
`;

export const ProfileMenuLink = styled(Link)<{ $danger?: boolean }>`
  width: 100%;
  min-height: 2rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.25rem;
  text-decoration: none;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  color: ${({ $danger }) => ($danger ? '#dc2626' : '#111827')};

  &:hover {
    background: #f3f4f6;
  }

  html.dark & {
    color: ${({ $danger }) => ($danger ? '#ef4444' : '#ffffff')};

    &:hover {
      background: #1f2937;
    }
  }
`;