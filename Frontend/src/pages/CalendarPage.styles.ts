import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  gap: 16px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 0 0 8px 0;
  font-size: 24px;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #f9fafb;
  }
`;

export const Description = styled.p`
  margin: 0;
  font-size: 14px;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ViewSelect = styled.select`
  width: 120px;
  height: 44px;
  padding: 0 14px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  background: #ffffff;
  color: #111827;
  font-size: 14px;
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: #d1d5db;
  }

  html.dark & {
    background: #0a0a0a;
    border-color: rgba(255, 255, 255, 0.08);
    color: #f9fafb;
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
  gap: 8px;
  cursor: default;

  .button-icon {
    width: 20px;
    height: 20px;
  }

  &:hover {
    opacity: 0.92;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  align-items: stretch;
`;

export const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const SideColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const baseCard = `
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #E5E7EB;
  background: #FFFFFF;
`;

export const MainCard = styled.div<{ $isMonthView: boolean }>`
  ${baseCard}
  height: ${({ $isMonthView }) => ($isMonthView ? '520px' : '964px')};
  display: flex;
  flex-direction: column;
  overflow: hidden;

  html.dark & {
    background: #1a1a1a;
    border-color: rgba(255, 255, 255, 0.08);
  }
`;

export const TodayCard = styled.div`
  ${baseCard}
  margin-top: 24px;
  height: 420px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  html.dark & {
    background: #1a1a1a;
    border-color: rgba(255, 255, 255, 0.08);
  }
`;

export const UpcomingCard = styled.div<{ $isMonthView: boolean }>`
  ${baseCard}
  height: ${({ $isMonthView }) => ($isMonthView ? '964px' : '964px')};
  display: flex;
  flex-direction: column;
  overflow: hidden;

  html.dark & {
    background: #1a1a1a;
    border-color: rgba(255, 255, 255, 0.08);
  }
`;

export const SectionTitle = styled.h3`
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  flex-shrink: 0;

  html.dark & {
    color: #f9fafb;
  }
`;

export const CalendarWrapper = styled.div`
  .calendar-page-calendar {
    width: 100%;
  }

  .rdp {
    --rdp-cell-size: 48px;
    margin: 0;
    width: 100%;
    color: #111827;
  }

  .rdp-months {
    justify-content: center;
    width: 100%;
  }

  .rdp-month {
    width: 100%;
  }

  .rdp-caption {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0 40px;
    margin-bottom: 20px;
  }

  .rdp-caption_label {
    font-size: 16px;
    font-weight: 600;
    color: #111827;
  }

  .rdp-nav {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    pointer-events: none;
  }

  .rdp-button_previous,
  .rdp-button_next {
    pointer-events: auto;
    width: 32px;
    height: 32px;
    border: none;
    background: transparent;
    color: #9ca3af;
    cursor: pointer;
  }

  .rdp-weekday {
    font-size: 14px;
    font-weight: 500;
    color: #9ca3af;
  }

  .rdp-day {
    color: #6b7280;
    font-size: 15px;
    border-radius: 10px;
  }

  .rdp-day_today:not(.rdp-day_selected) {
    color: #2563eb;
    font-weight: 600;
  }

  .rdp-selected .rdp-day_button,
  .rdp-day_selected .rdp-day_button {
    background: #3b82f6;
    color: #ffffff;
    border: none;
  }

  .rdp-day_button:hover {
    background: #eff6ff;
  }

  html.dark & .rdp {
    color: #f9fafb;
  }

  html.dark & .rdp-caption_label {
    color: #f9fafb;
  }

  html.dark & .rdp-weekday {
    color: #9ca3af;
  }

  html.dark & .rdp-day {
    color: #d1d5db;
  }

  html.dark & .rdp-button_previous,
  html.dark & .rdp-button_next {
    color: #9ca3af;
  }

  html.dark & .rdp-day_button:hover {
    background: #141414;
  }

  html.dark & .rdp-day_today:not(.rdp-day_selected) {
    color: #60a5fa;
  }

  html.dark & .rdp-selected .rdp-day_button,
  html.dark & .rdp-day_selected .rdp-day_button {
    background: #2563eb;
    color: #ffffff;
  }

  html.dark & .rdp-day_outside {
    color: #6b7280;
  }
`;

export const MonthViewWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const WeekViewWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const WeekHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  flex-shrink: 0;
`;

export const WeekDayCell = styled.button<{ $active: boolean }>`
  height: 72px;
  border-radius: 10px;
  border: 1px solid ${({ $active }) => ($active ? '#2563EB' : '#E5E7EB')};
  background: ${({ $active }) => ($active ? '#EFF6FF' : '#FFFFFF')};
  color: #111827;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;

  strong {
    font-size: 14px;
    font-weight: 600;
  }

  span {
    font-size: 13px;
    color: #6b7280;
  }

  html.dark & {
    background: ${({ $active }) => ($active ? '#141414' : '#1A1A1A')};
    border-color: ${({ $active }) =>
      $active ? '#2563EB' : 'rgba(255, 255, 255, 0.08)'};
    color: #f9fafb;

    span {
      color: #9ca3af;
    }
  }
`;

export const WeekEventList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const WeekEventItem = styled.button<{
  $borderColor: string;
  $lightBg: string;
  $darkBg: string;
}>`
  width: 100%;
  padding: 16px;
  border: none;
  border-left: 4px solid ${({ $borderColor }) => $borderColor};
  border-radius: 10px;
  background: ${({ $lightBg }) => $lightBg};
  text-align: left;
  cursor: pointer;

  div {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  strong {
    font-size: 15px;
    font-weight: 600;
    color: #111827;
  }

  span {
    font-size: 13px;
    color: #6b7280;
  }

  html.dark & {
    background: ${({ $darkBg }) => $darkBg};

    strong {
      color: #f9fafb;
    }

    span {
      color: #9ca3af;
    }
  }
`;

export const DayViewWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DayViewEmpty = styled.div`
  padding: 24px 0;
  font-size: 14px;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const EventList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const EventCard = styled.div<{
  $borderColor: string;
  $lightBg: string;
  $darkBg: string;
}>`
  padding: 16px;
  border-radius: 10px;
  border-left: 4px solid ${({ $borderColor }) => $borderColor};
  background: ${({ $lightBg }) => $lightBg};

  html.dark & {
    background: ${({ $darkBg }) => $darkBg};
  }
`;

export const EventTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
`;

export const EventTitle = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: #111827;

  html.dark & {
    color: #f9fafb;
  }
`;

export const EventTypeBadge = styled.span`
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 10px;
  border: 1px solid #e5e7eb;
  border-radius: 999px;
  font-size: 12px;
  color: #374151;
  background: #ffffff;
  flex-shrink: 0;

  html.dark & {
    background: #0a0a0a;
    border-color: rgba(255, 255, 255, 0.08);
    color: #d1d5db;
  }
`;

export const EventMetaList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;

export const EventMetaItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  font-size: 14px;
  color: #6b7280;
  line-height: 1.4;

  .meta-icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  html.dark & {
    color: #9ca3af;
  }
`;

export const UpcomingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding-right: 4px;
`;

export const UpcomingItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const UpcomingTop = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UpcomingDateBox = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: var(--color-accent, #2563eb);
  color: var(--color-accent-foreground, #ffffff);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const UpcomingMonth = styled.span`
  font-size: 12px;
  line-height: 1;
`;

export const UpcomingDay = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.1;
`;

export const UpcomingContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const UpcomingEventTitle = styled.p`
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 500;
  color: #111827;

  html.dark & {
    color: #f9fafb;
  }
`;

export const UpcomingEventTime = styled.p`
  margin: 0;
  font-size: 12px;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const UpcomingMeta = styled.div`
  padding-left: 60px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const UpcomingMetaItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #6b7280;

  .meta-icon.small {
    width: 12px;
    height: 12px;
    flex-shrink: 0;
  }

  html.dark & {
    color: #9ca3af;
  }
`;

export const Divider = styled.div`
  padding-top: 8px;
  border-bottom: 1px solid #e5e7eb;

  html.dark & {
    border-bottom-color: rgba(255, 255, 255, 0.08);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.42);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
`;

export const ModalCard = styled.div`
  width: 100%;
  max-width: 560px;
  border-radius: 16px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0 24px 48px rgba(15, 23, 42, 0.18);
  overflow: hidden;

  html.dark & {
    background: #1a1a1a;
    border-color: rgba(255, 255, 255, 0.08);
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.32);
  }
`;

export const ModalHeader = styled.div`
  padding: 24px 24px 16px 24px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`;

export const ModalTitle = styled.h3`
  margin: 0 0 6px 0;
  font-size: 18px;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #f9fafb;
  }
`;

export const ModalDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;

  html.dark & {
    color: #9ca3af;
  }
`;

export const ModalCloseButton = styled.button`
  width: 36px;
  height: 36px;
  border: none;
  background: transparent;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  cursor: pointer;
  flex-shrink: 0;

  .close-icon {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background: #f3f4f6;
    color: #111827;
  }

  html.dark & {
    color: #9ca3af;

    &:hover {
      background: #141414;
      color: #f9fafb;
    }
  }
`;

export const ModalBody = styled.div`
  padding: 0 24px 24px 24px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ModalField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ModalLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #111827;

  html.dark & {
    color: #f9fafb;
  }
`;

export const ModalInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 14px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #cbd5e1;
  }

  html.dark & {
    background: #0a0a0a;
    border-color: rgba(255, 255, 255, 0.08);
    color: #f9fafb;
  }
`;

export const ModalFooter = styled.div`
  padding: 16px 24px 24px 24px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

export const ModalSecondaryButton = styled.button`
  height: 42px;
  padding: 0 18px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #f8fafc;
  }

  html.dark & {
    background: #0a0a0a;
    border-color: rgba(255, 255, 255, 0.08);
    color: #f9fafb;

    &:hover {
      background: #141414;
    }
  }
`;

export const ModalPrimaryButton = styled.button`
  height: 42px;
  padding: 0 18px;
  border: none;
  border-radius: 10px;
  background: #2563eb;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.92;
  }
`;

export const ScrollArea = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding-right: 4px;
`;