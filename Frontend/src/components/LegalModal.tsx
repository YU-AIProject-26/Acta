import {
  Backdrop,
  ModalCard,
  ModalHeader,
  ModalTitleWrap,
  ModalTitle,
  ModalMeta,
  CloseButton,
  ModalBody,
  Section,
  SectionTitle,
  SectionParagraph,
} from './LegalModal.styles';
import type { LegalDocument } from '../utils/legalContent';

interface LegalModalProps {
  open: boolean;
  document: LegalDocument | null;
  onClose: () => void;
}

export default function LegalModal({
  open,
  document,
  onClose,
}: LegalModalProps) {
  if (!open || !document) return null;

  return (
    <Backdrop onClick = {onClose}>
      <ModalCard onClick = {(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitleWrap>
            <ModalTitle>{document.title}</ModalTitle>
            <ModalMeta>
              시행일: {document.effectiveDate} · 최종 수정일: {document.revisionDate}
            </ModalMeta>
          </ModalTitleWrap>
          <CloseButton type = "button" onClick = {onClose} aria-label = "모달 닫기">
            ×
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          {document.sections.map((section) => (
            <Section key = {section.title}>
              <SectionTitle>{section.title}</SectionTitle>
              {section.body.map((paragraph, index) => (
                <SectionParagraph key = {`${section.title}-${index}`}>
                  {paragraph}
                </SectionParagraph>
              ))}
            </Section>
          ))}
        </ModalBody>
      </ModalCard>
    </Backdrop>
  );
}