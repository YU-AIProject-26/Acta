import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/useTheme';
import { ToggleButton } from './ThemeToggle.styles';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick = {toggleTheme} aria-label = "테마 변경" type="button">
      {theme === 'light' ? <Moon size = {20} /> : <Sun size = {20} />}
    </ToggleButton>
  );
}