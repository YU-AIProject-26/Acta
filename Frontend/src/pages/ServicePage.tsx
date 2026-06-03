import {
  PageWrapper,
  PageInner,
  HeaderSection,
  Title,
  Description,
  Meta,
  ContentGrid,
  MainCard,
  SideCard,
  Section,
  SectionTitle,
  Paragraph,
  BulletList,
  BulletItem,
  HighlightBox,
  HighlightText,
  InfoLabel,
  InfoValue,
  BottomSection,
  BackLink,
} from './InfoPage.styles';

export default function ServicePage() {
  return (
    <PageWrapper>
      <PageInner>
        <HeaderSection>
          <Title>서비스 소개</Title>
          <Description>
            Acta는 회의 내용을 단순히 기록하는 데서 멈추지 않고, 회의 결과를
            실제 실행 가능한 업무와 일정으로 연결하는 AI 회의 비서 서비스입니다.
          </Description>
          <Meta>Acta 프로젝트 소개 페이지</Meta>
        </HeaderSection>

        <ContentGrid>
          <MainCard>
            <Section>
              <SectionTitle>Acta가 해결하려는 문제</SectionTitle>
              <Paragraph>
                많은 회의는 중요한 논의가 오갔음에도 불구하고, 회의 직후
                “누가 무엇을 언제까지 해야 하는지”가 흐려지는 경우가 많습니다.
                회의 중 기록에 집중하면 대화에 몰입하기 어렵고, 회의 후 다시
                녹음을 듣거나 회의록을 정리하는 데에도 큰 시간이 듭니다.
              </Paragraph>
              <HighlightBox>
                <HighlightText>
                  Acta는 회의의 핵심 내용을 자동으로 정리하고, 후속 실행 항목까지
                  구조화하여 “회의 → 실행”의 흐름을 더 자연스럽게 만듭니다.
                </HighlightText>
              </HighlightBox>
            </Section>

            <Section>
              <SectionTitle>핵심 기능</SectionTitle>
              <BulletList>
                <BulletItem>
                  음성 녹음 또는 파일 업로드를 통해 회의를 생성하고 텍스트로
                  변환합니다.
                </BulletItem>
                <BulletItem>
                  화자 분리를 통해 누가 어떤 발언을 했는지 구조적으로 정리합니다.
                </BulletItem>
                <BulletItem>
                  회의 전체 요약과 핵심 요약을 제공해 긴 회의 내용을 빠르게
                  파악할 수 있도록 돕습니다.
                </BulletItem>
                <BulletItem>
                  액션 아이템을 추출하여 담당자, 업무 내용, 마감일 형태로
                  정리합니다.
                </BulletItem>
                <BulletItem>
                  Todo와 일정 데이터를 자동 생성해 후속 업무를 놓치지 않도록
                  설계합니다.
                </BulletItem>
                <BulletItem>
                  참여도 분석, 핵심 발언 강조, 자동 태깅을 통해 회의 흐름을 더
                  직관적으로 보여줍니다.
                </BulletItem>
              </BulletList>
            </Section>

            <Section>
              <SectionTitle>누구를 위한 서비스인가요?</SectionTitle>
              <BulletList>
                <BulletItem>조별 활동과 스터디를 자주 하는 대학생</BulletItem>
                <BulletItem>회의 결과를 빠르게 정리해야 하는 교수 및 연구팀</BulletItem>
                <BulletItem>업무 분담과 일정 관리가 중요한 실무자와 프로젝트 매니저</BulletItem>
                <BulletItem>회의 내용을 문서화하고 실행까지 연결하고 싶은 팀</BulletItem>
              </BulletList>
            </Section>

            <Section>
              <SectionTitle>기대 효과</SectionTitle>
              <Paragraph>
                Acta는 회의 중 기록 부담을 줄이고, 회의 직후 바로 정리된 결과를
                확인할 수 있도록 하여 협업 속도를 높이는 것을 목표로 합니다.
                또한 액션 아이템과 일정 생성을 통해 업무 누락 가능성을 줄이고,
                참여도 분석과 핵심 발언 하이라이트를 통해 팀 내 소통 품질도 함께
                개선할 수 있도록 설계했습니다.
              </Paragraph>
            </Section>
          </MainCard>

          <SideCard>
            <InfoLabel>서비스 방향</InfoLabel>
            <InfoValue>
              단순 기록 도구가 아니라, 회의 내용을 실제 업무 흐름으로 연결하는
              실행 중심 협업 서비스
            </InfoValue>

            <InfoLabel>주요 사용자 경험</InfoLabel>
            <InfoValue>
              대화에 집중한 뒤, 회의 직후 요약·할 일·일정을 한 번에 확인하는
              흐름
            </InfoValue>

            <InfoLabel>Acta의 차별점</InfoLabel>
            <InfoValue>
              화자 분리, 요약, 액션 아이템 추출, 일정 생성, 참여도 분석을 하나의
              흐름으로 제공
            </InfoValue>

            <InfoLabel>활용 예시</InfoLabel>
            <InfoValue>
              팀 프로젝트 회의, 연구실 미팅, 스크럼 회의, 원격 협업 미팅, 상담 및
              인터뷰 기록 정리
            </InfoValue>
          </SideCard>
        </ContentGrid>

        <BottomSection>
          <BackLink to = "/landing">랜딩페이지로 돌아가기</BackLink>
        </BottomSection>
      </PageInner>
    </PageWrapper>
  );
}