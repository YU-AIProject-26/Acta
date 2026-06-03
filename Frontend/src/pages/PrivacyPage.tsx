import {
  PageWrapper,
  PageInner,
  HeaderSection,
  Title,
  Description,
  Meta,
  ContentCard,
  Section,
  SectionTitle,
  Paragraph,
  BottomSection,
  BackLink,
} from './LegalPage.styles';
import { PRIVACY_DOCUMENT } from '../utils/legalContent';

export default function PrivacyPage() {
  return (
    <PageWrapper>
      <PageInner>
        <HeaderSection>
          <Title>{PRIVACY_DOCUMENT.title}</Title>
          <Description>
            Acta 서비스 이용 과정에서 처리되는 개인정보의 항목, 목적, 보관기간 및
            권리행사 방법을 안내합니다.
          </Description>
          <Meta>
            시행일: {PRIVACY_DOCUMENT.effectiveDate} · 최종 수정일:{' '}
            {PRIVACY_DOCUMENT.revisionDate}
          </Meta>
        </HeaderSection>

        <ContentCard>
          {PRIVACY_DOCUMENT.sections.map((section) => (
            <Section key = {section.title}>
              <SectionTitle>{section.title}</SectionTitle>
              {section.body.map((paragraph, index) => (
                <Paragraph key = {`${section.title}-${index}`}>
                  {paragraph}
                </Paragraph>
              ))}
            </Section>
          ))}
        </ContentCard>

        <BottomSection>
          <BackLink to = "/landing">랜딩페이지로 돌아가기</BackLink>
        </BottomSection>
      </PageInner>
    </PageWrapper>
  );
}