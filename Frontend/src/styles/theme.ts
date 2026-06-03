export interface AppTheme {
  mode: 'light' | 'dark';
  colors: {
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
    popover: string;
    popoverForeground: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    destructive: string;
    destructiveForeground: string;
    border: string;
    input: string;
    ring: string;
  };
  shadows: {
    ctaButton: string;
  };
}

export const lightTheme: AppTheme = {
  mode: 'light',
  colors: {
    background: '#FFFFFF',
    foreground: '#111827',
    card: '#FFFFFF',
    cardForeground: '#111827',
    popover: '#FFFFFF',
    popoverForeground: '#111827',
    primary: '#2563EB',
    primaryForeground: '#FFFFFF',
    secondary: '#F3F4F6',
    secondaryForeground: '#111827',
    muted: '#F9FAFB',
    mutedForeground: '#6B7280',
    accent: '#2563EB',
    accentForeground: '#FFFFFF',
    destructive: '#DC2626',
    destructiveForeground: '#FFFFFF',
    border: '#E5E7EB',
    input: '#E5E7EB',
    ring: '#2563EB',
  },
  shadows: {
    ctaButton: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
};

export const darkTheme: AppTheme = {
  mode: 'dark',
  colors: {
    background: '#0A0A0A',
    foreground: '#F9FAFB',
    card: '#141414',
    cardForeground: '#F9FAFB',
    popover: '#141414',
    popoverForeground: '#F9FAFB',
    primary: '#3B82F6',
    primaryForeground: '#FFFFFF',
    secondary: '#1F2937',
    secondaryForeground: '#F9FAFB',
    muted: '#171717',
    mutedForeground: '#9CA3AF',
    accent: '#3B82F6',
    accentForeground: '#FFFFFF',
    destructive: '#EF4444',
    destructiveForeground: '#FFFFFF',
    border: '#262626',
    input: '#262626',
    ring: '#3B82F6',
  },
  shadows: {
    ctaButton: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
};