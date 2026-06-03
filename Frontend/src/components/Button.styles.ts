import styled, { css } from 'styled-components';

interface StyledButtonProps {
  $variant: 'default' | 'ghost' | 'white';
  $size: 'default' | 'lg';
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
  flex-shrink: 0;

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  svg {
    pointer-events: none;
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
  }

  ${({ $size }) =>
    $size === 'lg'
      ? css`
          height: 3rem;
          padding: 0 1.5rem;
          font-size: 1rem;
        `
      : css`
          height: 2.25rem;
          padding: 0 1rem;
          font-size: 0.875rem;
        `}

  ${({ theme, $variant }) => {
    if ($variant === 'ghost') {
      return css`
        background: transparent;
        color: ${theme.colors.foreground};

        &:hover {
          background: ${theme.colors.secondary};
          color: ${theme.colors.foreground};
        }
      `;
    }

    if ($variant === 'white') {
      return css`
        background: #ffffff;
        color: #000000;
        box-shadow: ${theme.shadows.ctaButton};

        &:hover {
          background: #e5e7eb;
        }
      `;
    }

    return css`
      background: ${theme.colors.primary};
      color: ${theme.colors.primaryForeground};

      &:hover {
        background: rgba(37, 99, 235, 0.9);
      }
    `;
  }}
`;