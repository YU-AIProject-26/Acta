import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0;

  .rdp {
    width: 100%;
    max-width: 360px;
    margin: 0 auto;
  }

  .rdp-months {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .rdp-month {
    width: 100%;
  }

  .rdp-month_caption {
    position: relative;
    width: 100%;
    min-height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .rdp-caption_label {
    font-size: 1rem;
    font-weight: 700;
    color: #111827;
    line-height: 1;
    pointer-events: none;
  }

  .rdp-nav {
    position: absolute;
    inset: 0;
    width: 100%;
    z-index: 2;
  }

  .rdp-button_previous,
  .rdp-button_next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 1.875rem;
    height: 1.875rem;
    border: none;
    background: transparent;
    border-radius: 9999px;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition:
      background-color 0.2s ease,
      color 0.2s ease;
    z-index: 3;
  }

  .rdp-button_previous {
    left: 0;
  }

  .rdp-button_next {
    right: 0;
  }

  .rdp-button_previous:hover,
  .rdp-button_next:hover {
    background: #f3f4f6;
  }

  .rdp-button_previous:disabled,
  .rdp-button_next:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .rdp-nav-icon {
    width: 1.25rem;
    height: 1.25rem;
    color: #6b7280;
    stroke-width: 2.25;
    pointer-events: none;
  }

  .rdp-month_grid {
    width: 100%;
    border-collapse: collapse;
  }

  .rdp-weekdays {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.375rem;
  }

  .rdp-weekday {
    width: 3rem;
    height: 3rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: #9ca3af;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .rdp-weeks {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .rdp-week {
    display: flex;
    justify-content: space-between;
  }

  .rdp-day {
    width: 3rem;
    height: 3rem;
    text-align: center;
  }

  .rdp-day_button {
    width: 3rem;
    height: 3rem;
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    border-radius: 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: #111827;
    cursor: pointer;
    transition:
      background-color 0.2s ease,
      color 0.2s ease,
      box-shadow 0.2s ease;
  }

  .rdp-day_button:hover {
    background: #f3f4f6;
  }

  .rdp-today .rdp-day_button {
    color: ${({ theme }) => theme.colors.accent};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.accent};
    background: transparent;
  }

  .rdp-today .rdp-day_button:hover {
    background: rgba(37, 99, 235, 0.08);
  }

  .rdp-selected .rdp-day_button,
  .rdp-day_button[aria-selected='true'] {
    background: ${({ theme }) => theme.colors.accent} !important;
    color: #ffffff !important;
    box-shadow: none !important;
    border-radius: 1rem !important;
  }

  .rdp-selected .rdp-day_button:hover,
  .rdp-day_button[aria-selected='true']:hover {
    background: ${({ theme }) => theme.colors.accent} !important;
    color: #ffffff !important;
  }

  .rdp-selected.rdp-today .rdp-day_button {
    background: ${({ theme }) => theme.colors.accent} !important;
    color: #ffffff !important;
    box-shadow: none !important;
  }

  .rdp-outside .rdp-day_button {
    color: #d1d5db;
  }

  .rdp-outside .rdp-day_button:hover {
    background: transparent;
  }

  .rdp-disabled .rdp-day_button {
    color: #d1d5db;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .rdp-hidden {
    visibility: hidden;
  }

  html.dark & {
    .rdp-caption_label {
      color: #ffffff;
    }

    .rdp-button_previous:hover,
    .rdp-button_next:hover {
      background: #1f2937;
    }

    .rdp-nav-icon {
      color: #9ca3af;
    }

    .rdp-weekday {
      color: #9ca3af;
    }

    .rdp-day_button {
      color: #ffffff;
    }

    .rdp-day_button:hover {
      background: #1f2937;
    }

    .rdp-today .rdp-day_button {
      color: #60a5fa;
      box-shadow: inset 0 0 0 1px #2563eb;
      background: transparent;
    }

    .rdp-today .rdp-day_button:hover {
      background: rgba(37, 99, 235, 0.18);
    }

    .rdp-selected .rdp-day_button,
    .rdp-day_button[aria-selected='true'] {
      background: ${({ theme }) => theme.colors.accent} !important;
      color: #ffffff !important;
      box-shadow: none !important;
    }

    .rdp-selected .rdp-day_button:hover,
    .rdp-day_button[aria-selected='true']:hover {
      background: ${({ theme }) => theme.colors.accent} !important;
      color: #ffffff !important;
    }

    .rdp-selected.rdp-today .rdp-day_button {
      background: ${({ theme }) => theme.colors.accent} !important;
      color: #ffffff !important;
      box-shadow: none !important;
    }

    .rdp-outside .rdp-day_button {
      color: #6b7280;
    }

    .rdp-outside .rdp-day_button:hover {
      background: transparent;
    }
  }
`;