import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { StyledButton } from './Button.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'white';
  size?: 'default' | 'lg';
  className?: string;
}

export default function Button({
  children,
  variant = 'default',
  size = 'default',
  className,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <StyledButton
      type = "button"
      $variant = {variant}
      $size = {size}
      className = {className}
      {...props}
    >
      {children}
    </StyledButton>
  );
}