import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker, type DayPickerProps } from 'react-day-picker';
import { CalendarWrapper } from './Calendar.styles';
import 'react-day-picker/dist/style.css';

type CalendarProps = DayPickerProps;

export default function Calendar({
  className,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <CalendarWrapper className = {className}>
      <DayPicker
        showOutsideDays = {showOutsideDays}
        components = {{
          Chevron: ({ orientation }) =>
            orientation === 'left' ? (
              <ChevronLeft className="rdp-nav-icon" />
            ) : (
              <ChevronRight className="rdp-nav-icon" />
            ),
        }}
        {...props}
      />
    </CalendarWrapper>
  );
}