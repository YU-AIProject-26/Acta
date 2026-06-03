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
import { TERMS_DOCUMENT } from '../utils/legalContent';

export default function TermsPage() {
  return (
    <PageWrapper>
      <PageInner>
        <HeaderSection>
          <Title>{TERMS_DOCUMENT.title}</Title>
          <Description>
            Acta 서비스 이용과 관련된 권리, 의무 및 책임사항을 안내합니다.
          </Description>
          <Meta>
            시행일: {TERMS_DOCUMENT.effectiveDate} · 최종 수정일:{' '}
            {TERMS_DOCUMENT.revisionDate}
          </Meta>
        </HeaderSection>

        <ContentCard>
          {TERMS_DOCUMENT.sections.map((section) => (
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