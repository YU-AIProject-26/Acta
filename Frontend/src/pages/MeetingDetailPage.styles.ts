import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const cardBase = css`
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    background: #1a1a1a;
  }
`;

const outlineButtonBase = css`
  height: 2.5rem;
  padding: 0 1rem;
  border-radius: 0.625rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  .button-icon {
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    background: #f8fafc;
  }

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    background: #0a0a0a;
    color: #ffffff;

    &:hover {
      background: #141414;
    }
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
  max-width: 1600px;
  margin: 0 auto;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: #6b7280;
  font-size: 0.875rem;
  text-decoration: none;

  .back-icon {
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    color: #2563eb;
  }
`;

export const HeaderSection = styled.div`
  margin-bottom: 1.5rem;
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

export const HeaderLeft = styled.div`
  flex: 1;
  min-width: 0;
`;

export const HeaderTitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
`;

export const PageTitle = styled.h1`
  margin: 0;
  flex: 0 1 auto;
  max-width: 100%;
  font-size: 1.875rem;
  line-height: 1.2;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #ffffff;
  }
`;

export const HeaderInlineTitleInput = styled.input`
  flex: 0 1 auto;
  min-width: 20rem;
  max-width: 100%;
  height: auto;
  padding: 0 0 0.125rem;
  border: none;
  border-bottom: 2px solid rgba(37, 99, 235, 0.18);
  background: transparent;
  color: #111827;
  font-size: 1.875rem;
  line-height: 1.2;
  font-weight: 700;

  &::placeholder {
    color: #9ca3af;
  }

  &:hover {
    border-bottom-color: rgba(37, 99, 235, 0.3);
  }

  &:focus {
    outline: none;
    border-bottom-color: #2563eb;
  }

  html.dark & {
    color: #ffffff;
    border-bottom-color: rgba(96, 165, 250, 0.28);

    &::placeholder {
      color: #6b7280;
    }

    &:hover {
      border-bottom-color: rgba(96, 165, 250, 0.42);
    }

    &:focus {
      border-bottom-color: #60a5fa;
    }
  }
`;

export const StatusBadge = styled.span`
  flex-shrink: 0;
  align-self: center;
  height: 1.75rem;
  padding: 0 0.75rem;
  border-radius: 9999px;
  background: #f3f4f6;
  color: #374151;
  font-size: 0.75rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  html.dark & {
    background: #1f2937;
    color: #d1d5db;
  }
`;

export const HeaderMetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #6b7280;
  font-size: 0.875rem;
  flex-wrap: wrap;
`;

export const HeaderMetaItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  .meta-icon {
    width: 1rem;
    height: 1rem;
  }
`;

export const HeaderEditActionRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

export const HeaderInlineDateInput = styled.input`
  height: 2rem;
  padding: 0 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background: #ffffff;
  color: #111827;
  font-size: 0.875rem;

  &:focus {
    outline: none;
    border-color: #d1d5db;
  }

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    background: #0a0a0a;
    color: #ffffff;
  }
`;

export const HeaderInlineTimeInput = styled.input`
  height: 2rem;
  padding: 0 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background: #ffffff;
  color: #111827;
  font-size: 0.875rem;

  &:focus {
    outline: none;
    border-color: #d1d5db;
  }

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    background: #0a0a0a;
    color: #ffffff;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
`;

export const OutlineButton = styled.button`
  ${outlineButtonBase};
`;

export const IconButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.625rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  .button-icon {
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    background: #f8fafc;
  }

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    background: #0a0a0a;
    color: #ffffff;

    &:hover {
      background: #141414;
    }
  }
`;

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  min-width: 9rem;
  padding: 0.5rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  z-index: 20;

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    background: #1a1a1a;
  }
`;

export const DropdownMenuItem = styled.button<{ $danger?: boolean }>`
  width: 100%;
  height: 2.25rem;
  padding: 0 0.75rem;
  border: none;
  border-radius: 0.5rem;
  background: transparent;
  color: ${({ $danger }) => ($danger ? '#dc2626' : '#111827')};
  text-align: left;
  font-size: 0.875rem;

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

export const HeaderTagsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

export const HeaderTagEditRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

export const TagBadge = styled.span`
  height: 1.75rem;
  padding: 0 0.75rem;
  border-radius: 9999px;
  border: 1px solid #e5e7eb;
  color: #6b7280;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;

  .tag-icon {
    width: 0.75rem;
    height: 0.75rem;
  }

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    color: #9ca3af;
  }
`;

export const HeaderEditableTag = styled.div`
  height: 1.875rem;
  padding: 0 0.625rem;
  border-radius: 9999px;
  border: 1px solid #e5e7eb;
  color: #6b7280;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;

  .tag-icon {
    width: 0.75rem;
    height: 0.75rem;
  }

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    color: #d1d5db;
    background: #111111;
  }
`;

export const HeaderTagDeleteButton = styled.button`
  width: 1rem;
  height: 1rem;
  padding: 0;
  border: none;
  border-radius: 9999px;
  background: transparent;
  color: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  .remove-icon {
    width: 0.75rem;
    height: 0.75rem;
  }
`;

export const HeaderTagAddForm = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

export const HeaderTagAddInput = styled.input`
  width: 9rem;
  height: 2rem;
  padding: 0 0.625rem;
  border-radius: 9999px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-size: 0.75rem;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #d1d5db;
  }

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    background: #0a0a0a;
    color: #ffffff;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Card = styled.section`
  ${cardBase};
`;

export const ScoreCard = styled.section`
  ${cardBase};
  background: linear-gradient(135deg, #eff6ff 0%, #ffffff 100%);

  html.dark & {
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.12) 0%, #1a1a1a 100%);
  }
`;

export const CardHeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const CardTitle = styled.h3`
  margin: 0;
  color: #111827;
  font-size: 1rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  .title-icon {
    width: 1.25rem;
    height: 1.25rem;
  }

  .blue {
    color: #2563eb;
  }

  .green {
    color: #22c55e;
  }

  html.dark & {
    color: #ffffff;
  }
`;

export const EmptyButton = styled.button`
  border: none;
  background: transparent;
  color: #6b7280;
  font-size: 0.875rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  .button-icon {
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    color: #111827;
  }

  html.dark & {
    color: #9ca3af;

    &:hover {
      color: #ffffff;
    }
  }
`;

export const AudioPlayerBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AudioPlayerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AudioControlButton = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  border: none;
  background: ${({ theme }) => theme.colors.accent};
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  .play-icon {
    width: 1.25rem;
    height: 1.25rem;
  }

  .play-offset {
    margin-left: 0.125rem;
  }

  &:hover {
    background: color-mix(
      in srgb,
      ${({ theme }) => theme.colors.accent} 90%,
      transparent
    );
  }
`;

export const AudioProgressArea = styled.div`
  flex: 1;
`;

export const AudioTimeRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;

  html.dark & {
    color: #9ca3af;
  }
`;

export const ProgressTrack = styled.div`
  width: 100%;
  height: 0.5rem;
  border-radius: 9999px;
  background: #e5e7eb;
  overflow: hidden;

  html.dark & {
    background: #262626;
  }
`;

export const ProgressFill = styled.div`
  height: 100%;
  background: #2563eb;
  border-radius: inherit;
`;

export const TranscriptList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 37.5rem;
  overflow-y: auto;
`;

export const TranscriptItem = styled.div<{ $highlight?: boolean }>`
  padding: 1rem;
  border-radius: 0.75rem;
  background: ${({ $highlight }) => ($highlight ? '#fffbeb' : '#f8fafc')};
  border: ${({ $highlight }) =>
    $highlight ? '1px solid #fde68a' : '1px solid transparent'};

  html.dark & {
    background: ${({ $highlight }) =>
      $highlight ? 'rgba(245, 158, 11, 0.12)' : '#111111'};
    border-color: ${({ $highlight }) =>
      $highlight ? 'rgba(245, 158, 11, 0.24)' : 'transparent'};
  }
`;

export const TranscriptEditItem = styled.div`
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #f8fafc;

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    background: #111111;
  }
`;

export const TranscriptEditTopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
`;

export const TranscriptEditInput = styled.input`
  height: 2.25rem;
  padding: 0 0.75rem;
  border-radius: 0.625rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-size: 0.875rem;

  &:focus {
    outline: none;
    border-color: #d1d5db;
  }

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    background: #0a0a0a;
    color: #ffffff;
  }
`;

export const TranscriptEditTimeInput = styled.input`
  width: 7rem;
  height: 2.25rem;
  padding: 0 0.75rem;
  border-radius: 0.625rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-size: 0.875rem;

  &:focus {
    outline: none;
    border-color: #d1d5db;
  }

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    background: #0a0a0a;
    color: #ffffff;
  }
`;

export const TranscriptEditTextarea = styled.textarea`
  width: 100%;
  min-height: 6rem;
  resize: vertical;
  padding: 0.875rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-size: 0.875rem;
  line-height: 1.65;

  &:focus {
    outline: none;
    border-color: #d1d5db;
  }

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    background: #0a0a0a;
    color: #ffffff;
  }
`;

export const TranscriptEditActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const TranscriptHighlightToggle = styled.button<{ $active?: boolean }>`
  height: 2.25rem;
  padding: 0 0.75rem;
  border-radius: 9999px;
  border: 1px solid ${({ $active }) => ($active ? '#fde68a' : '#e5e7eb')};
  background: ${({ $active }) => ($active ? '#fef3c7' : '#ffffff')};
  color: ${({ $active }) => ($active ? '#b45309' : '#6b7280')};
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;

  .toggle-icon {
    width: 0.75rem;
    height: 0.75rem;
  }

  html.dark & {
    border-color: ${({ $active }) =>
      $active ? 'rgba(245, 158, 11, 0.24)' : 'rgba(255, 255, 255, 0.08)'};
    background: ${({ $active }) =>
      $active ? 'rgba(245, 158, 11, 0.16)' : '#0a0a0a'};
    color: ${({ $active }) => ($active ? '#fbbf24' : '#d1d5db')};
  }
`;

export const TranscriptAddButton = styled.button`
  ${outlineButtonBase};
  width: 100%;
`;

export const TranscriptSpeakerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
`;

export const SpeakerAvatar = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background: ${({ theme }) => theme.colors.accent};
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const SpeakerName = styled.span`
  color: #111827;
  font-size: 0.875rem;
  font-weight: 500;

  html.dark & {
    color: #ffffff;
  }
`;

export const SpeakerTime = styled.span`
  color: #6b7280;
  font-size: 0.75rem;

  html.dark & {
    color: #9ca3af;
  }
`;

export const HighlightBadge = styled.span`
  height: 1.5rem;
  padding: 0 0.5rem;
  border-radius: 9999px;
  background: #fef3c7;
  color: #b45309;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;

  .highlight-icon {
    width: 0.75rem;
    height: 0.75rem;
  }

  html.dark & {
    background: rgba(245, 158, 11, 0.16);
    color: #fbbf24;
  }
`;

export const TranscriptText = styled.p`
  margin: 0;
  padding-left: 2.75rem;
  color: #111827;
  font-size: 0.875rem;
  line-height: 1.65;

  html.dark & {
    color: #e5e7eb;
  }
`;

export const TabsWrapper = styled.div``;

export const TabsHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.5rem;
  padding: 0.25rem;
  border-radius: 0.75rem;
  background: #f3f4f6;

  html.dark & {
    background: #111111;
  }
`;

export const TabButton = styled.button<{ $active?: boolean }>`
  height: 2.5rem;
  border: none;
  border-radius: 0.625rem;
  background: ${({ $active }) => ($active ? '#ffffff' : 'transparent')};
  color: ${({ $active }) => ($active ? '#111827' : '#6b7280')};
  font-size: 0.875rem;
  font-weight: 500;
  box-shadow: ${({ $active }) =>
    $active ? '0 1px 2px rgba(15, 23, 42, 0.06)' : 'none'};

  html.dark & {
    background: ${({ $active }) => ($active ? '#1a1a1a' : 'transparent')};
    color: ${({ $active }) => ($active ? '#ffffff' : '#9ca3af')};
  }
`;

export const ChartSection = styled.div`
  margin-top: 1.5rem;
`;

export const ParticipationLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const ParticipationLegend = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ParticipationLegendItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ParticipationLegendLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ColorDot = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
`;

export const LegendName = styled.span`
  color: #111827;
  font-size: 0.875rem;

  html.dark & {
    color: #ffffff;
  }
`;

export const LegendValue = styled.span`
  color: #111827;
  font-size: 0.875rem;
  font-weight: 500;

  html.dark & {
    color: #ffffff;
  }
`;

export const InsightText = styled.p`
  margin: 1rem 0 0;
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.6;

  html.dark & {
    color: #9ca3af;
  }
`;

export const SummaryText = styled.p`
  margin: 0 0 1rem;
  color: #111827;
  font-size: 0.875rem;
  line-height: 1.7;

  html.dark & {
    color: #e5e7eb;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: #e5e7eb;
  margin: 1rem 0;

  html.dark & {
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const SectionSubTitle = styled.h4`
  margin: 0 0 0.75rem;
  color: #111827;
  font-size: 0.875rem;
  font-weight: 600;

  html.dark & {
    color: #ffffff;
  }
`;

export const BulletList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const BulletItem = styled.li`
  color: #111827;
  font-size: 0.875rem;
  line-height: 1.6;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  &::before {
    content: '•';
    color: #2563eb;
    margin-top: 0.0625rem;
  }

  html.dark & {
    color: #e5e7eb;
  }
`;

export const ScoreHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const ScoreValue = styled.div`
  color: #2563eb;
  font-size: 1.875rem;
  line-height: 1;
  font-weight: 700;
`;

export const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const TodoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.75rem;

  &:hover {
    background: #f8fafc;
  }

  html.dark &:hover {
    background: #111111;
  }
`;

export const TodoCheckbox = styled.input.attrs({ type: 'checkbox' })`
  margin-top: 0.25rem;
  width: 1rem;
  height: 1rem;
  accent-color: #2563eb;
`;

export const TodoContent = styled.div`
  flex: 1;
`;

export const TodoText = styled.p<{ $completed?: boolean }>`
  margin: 0;
  color: ${({ $completed }) => ($completed ? '#6b7280' : '#111827')};
  font-size: 0.875rem;
  text-decoration: ${({ $completed }) => ($completed ? 'line-through' : 'none')};

  html.dark & {
    color: ${({ $completed }) => ($completed ? '#9ca3af' : '#ffffff')};
  }
`;

export const TodoMetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
`;

export const TodoMetaText = styled.span`
  color: #6b7280;
  font-size: 0.75rem;

  html.dark & {
    color: #9ca3af;
  }
`;

export const PriorityBadge = styled.span`
  height: 1.25rem;
  padding: 0 0.5rem;
  border-radius: 9999px;
  background: #fef2f2;
  color: #dc2626;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;

  html.dark & {
    background: rgba(239, 68, 68, 0.14);
    color: #f87171;
  }
`;

export const ScheduleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ScheduleItem = styled.div`
  padding: 1rem;
  border-radius: 0.75rem;
  border-left: 4px solid #2563eb;
  background: #eff6ff;

  .schedule-title {
    margin: 0 0 0.25rem;
    color: #111827;
    font-size: 0.875rem;
    font-weight: 500;
  }

  .schedule-date,
  .schedule-attendees {
    margin: 0;
    color: #6b7280;
    font-size: 0.75rem;
  }

  .schedule-date {
    margin-bottom: 0.5rem;
  }

  html.dark & {
    background: rgba(37, 99, 235, 0.12);

    .schedule-title {
      color: #ffffff;
    }

    .schedule-date,
    .schedule-attendees {
      color: #9ca3af;
    }
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
    background: #1a1a1a;
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
  color: #111827;
  font-size: 1.125rem;
  font-weight: 700;

  html.dark & {
    color: #ffffff;
  }
`;

export const ModalDescription = styled.p`
  margin: 0.375rem 0 0;
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;

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

export const ModalField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ModalLabel = styled.label`
  color: #111827;
  font-size: 0.875rem;
  font-weight: 600;

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

  &:focus {
    outline: none;
    border-color: #d1d5db;
    box-shadow: none;
  }

  html.dark & {
    border-color: rgba(255, 255, 255, 0.08);
    background: #0a0a0a;
    color: #ffffff;
  }
`;

export const ModalHelperText = styled.p`
  margin: 0;
  color: #6b7280;
  font-size: 0.8125rem;
  line-height: 1.5;

  html.dark & {
    color: #9ca3af;
  }
`;

export const ModalPrimaryButton = styled.button`
  ${modalButtonBase};
  border: none;
  background: ${({ theme }) => theme.colors.accent};
  color: #ffffff;

  &:hover {
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
    background: #0a0a0a;
    color: #ffffff;

    &:hover {
      background: #141414;
    }
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