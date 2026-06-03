import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.56);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;

export const ModalCard = styled.div`
  width: 100%;
  max-width: 52rem;
  max-height: calc(100vh - 3rem);
  overflow: hidden;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.28);

  html.dark & {
    border-color: #262626;
    background: #141414;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;

  html.dark & {
    border-bottom-color: #262626;
  }
`;

export const ModalTitleWrap = styled.div`
  min-width: 0;
`;

export const ModalTitle = styled.h2`
  margin: 0 0 0.25rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #f9fafb;
  }
`;

export const ModalMeta = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #6b7280;

  html.dark & {
    color: #9ca3af;
  }
`;

export const CloseButton = styled.button`
  width: 2.25rem;
  height: 2.25rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  background: #ffffff;
  color: #111827;
  font-size: 1.25rem;
  line-height: 1;
  cursor: default;
  flex-shrink: 0;

  &:hover {
    background: #f3f4f6;
  }

  html.dark & {
    border-color: #262626;
    background: #191919;
    color: #f9fafb;

    &:hover {
      background: #262626;
    }
  }
`;

export const ModalBody = styled.div`
  max-height: calc(100vh - 9rem);
  overflow-y: auto;
  padding: 1.5rem;
`;

export const Section = styled.section`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h3`
  margin: 0 0 0.75rem;
  font-size: 1rem;
  font-weight: 700;
  color: #111827;

  html.dark & {
    color: #f9fafb;
  }
`;

export const SectionParagraph = styled.p`
  margin: 0 0 0.625rem;
  font-size: 0.9375rem;
  line-height: 1.75;
  color: #374151;
  white-space: pre-line;

  &:last-child {
    margin-bottom: 0;
  }

  html.dark & {
    color: #d1d5db;
  }
`;