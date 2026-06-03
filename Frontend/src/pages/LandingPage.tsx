import {
  ArrowRight,
  Play,
  Mic,
  Brain,
  Calendar,
  CheckCircle,
  Users,
  Zap,
} from 'lucide-react';
import Footer from '../components/Footer';
import {
  PageWrapper,
  Header,
  HeaderInner,
  BrandLink,
  BrandIcon,
  BrandText,
  HeaderActions,
  HeaderGhostButton,
  HeaderPrimaryButton,
  Main,
  HeroSection,
  HeroGlow,
  HeroContent,
  HeroTitle,
  HeroGradientText,
  HeroDescription,
  HeroButtons,
  HeroPrimaryButton,
  HeroGhostButton,
  PreviewSection,
  PreviewCard,
  PreviewGlowTop,
  PreviewGlowBottom,
  PreviewScreen,
  PreviewContent,
  PreviewIconWrap,
  PreviewLabel,
  GridPattern,
  FeaturesSection,
  SectionContainer,
  SectionHeading,
  SectionTitle,
  SectionDescription,
  FeaturesGrid,
  FeatureCard,
  FeatureIconWrap,
  FeatureTitle,
  FeatureDescription,
  DetailsSection,
  DetailRow,
  DetailText,
  DetailBadge,
  DetailTitle,
  DetailDescription,
  DetailList,
  DetailListItem,
  DetailListCheck,
  DetailVisualWrap,
  DetailVisualGlow,
  DetailVisualCard,
  DetailVisualScreen,
  WorkflowSection,
  WorkflowGrid,
  WorkflowCard,
  WorkflowNumber,
  WorkflowTitle,
  WorkflowDescription,
  CTASection,
  CTAGlowLeft,
  CTAGlowRight,
  CTAContent,
  CTATitle,
  CTADescription,
  CTAButton,
} from './LandingPage.styles';

export default function LandingPage() {
  return (
    <PageWrapper>
      <Header>
        <HeaderInner>
          <BrandLink href = "/landing">
            <BrandIcon>
              <span>A</span>
            </BrandIcon>
            <BrandText>Acta</BrandText>
          </BrandLink>

          <HeaderActions>
            <a href = "/auth/login">
              <HeaderGhostButton variant = "ghost">로그인</HeaderGhostButton>
            </a>
            <a href = "/auth/signup">
              <HeaderPrimaryButton>시작하기</HeaderPrimaryButton>
            </a>
          </HeaderActions>
        </HeaderInner>
      </Header>

      <Main>
        <HeroSection>
          <HeroGlow />

          <HeroContent>
            <HeroTitle>
              회의를 기록에서
              <br />
              <HeroGradientText>실행으로</HeroGradientText>
            </HeroTitle>

            <HeroDescription>
              음성을 텍스트로, 텍스트를 인사이트로.
              <br />
              AI가 회의 내용을 분석하고 실행 항목을 만듭니다.
            </HeroDescription>

            <HeroButtons>
              <a href = "/auth/signup">
                <HeroPrimaryButton size = "lg">
                  무료로 시작하기
                  <ArrowRight />
                </HeroPrimaryButton>
              </a>

              <HeroGhostButton size = "lg" variant = "ghost">
                <Play />
                데모 보기
              </HeroGhostButton>
            </HeroButtons>
          </HeroContent>
        </HeroSection>

        <PreviewSection>
          <PreviewCard>
            <PreviewGlowTop />
            <PreviewGlowBottom />

            <PreviewScreen>
              <PreviewContent>
                <PreviewIconWrap>
                  <Play size = {32} />
                </PreviewIconWrap>
                <PreviewLabel>제품 데모 영상</PreviewLabel>
              </PreviewContent>
              <GridPattern />
            </PreviewScreen>
          </PreviewCard>
        </PreviewSection>

        <FeaturesSection>
          <SectionContainer>
            <SectionHeading>
              <SectionTitle>모든 것을 한 곳에서</SectionTitle>
              <SectionDescription>
                회의 기록부터 실행까지, Acta가 함께합니다
              </SectionDescription>
            </SectionHeading>

            <FeaturesGrid>
              <FeatureCard>
                <FeatureIconWrap>
                  <Mic size = {24} />
                </FeatureIconWrap>
                <FeatureTitle>실시간 녹음</FeatureTitle>
                <FeatureDescription>
                  음성을 실시간으로 텍스트로 변환하고 화자를 자동 구분합니다
                </FeatureDescription>
              </FeatureCard>

              <FeatureCard>
                <FeatureIconWrap>
                  <Brain size = {24} />
                </FeatureIconWrap>
                <FeatureTitle>AI 분석</FeatureTitle>
                <FeatureDescription>
                  핵심 내용 요약, 결정사항 추출, 액션 아이템 자동 생성
                </FeatureDescription>
              </FeatureCard>

              <FeatureCard>
                <FeatureIconWrap>
                  <CheckCircle size = {24} />
                </FeatureIconWrap>
                <FeatureTitle>Todo 관리</FeatureTitle>
                <FeatureDescription>
                  담당자별 할 일을 자동으로 생성하고 진행 상황을 추적합니다
                </FeatureDescription>
              </FeatureCard>

              <FeatureCard>
                <FeatureIconWrap>
                  <Calendar size = {24} />
                </FeatureIconWrap>
                <FeatureTitle>일정 연동</FeatureTitle>
                <FeatureDescription>
                  마감일과 일정을 자동으로 캘린더에 등록하고 알림을 받습니다
                </FeatureDescription>
              </FeatureCard>

              <FeatureCard>
                <FeatureIconWrap>
                  <Users size = {24} />
                </FeatureIconWrap>
                <FeatureTitle>팀 협업</FeatureTitle>
                <FeatureDescription>
                  회의 내용과 Todo를 팀원들과 실시간으로 공유하고 협업합니다
                </FeatureDescription>
              </FeatureCard>

              <FeatureCard>
                <FeatureIconWrap>
                  <Zap size = {24} />
                </FeatureIconWrap>
                <FeatureTitle>빠른 검색</FeatureTitle>
                <FeatureDescription>
                  과거 회의 내용을 키워드로 검색하고 즉시 찾아볼 수 있습니다
                </FeatureDescription>
              </FeatureCard>
            </FeaturesGrid>
          </SectionContainer>
        </FeaturesSection>

        <DetailsSection>
          <SectionContainer>
            <DetailRow>
              <DetailText>
                <DetailBadge>실시간 기록</DetailBadge>
                <DetailTitle>회의 중 놓치는 것 없이</DetailTitle>
                <DetailDescription>
                  음성 녹음과 동시에 텍스트로 변환됩니다.
                  회의에 집중하는 동안 Acta가 모든 내용을 기록합니다.
                </DetailDescription>

                <DetailList>
                  <DetailListItem>
                    <DetailListCheck>✓</DetailListCheck>
                    <span>실시간 음성 인식 및 텍스트 변환</span>
                  </DetailListItem>
                  <DetailListItem>
                    <DetailListCheck>✓</DetailListCheck>
                    <span>화자 구분 및 타임스탬프 자동 생성</span>
                  </DetailListItem>
                  <DetailListItem>
                    <DetailListCheck>✓</DetailListCheck>
                    <span>녹음 파일과 텍스트 동시 저장</span>
                  </DetailListItem>
                </DetailList>
              </DetailText>

              <DetailVisualWrap>
                <DetailVisualGlow />
                <DetailVisualCard>
                  <DetailVisualScreen>
                    <PreviewContent>
                      <PreviewIconWrap>
                        <Mic size = {32} />
                      </PreviewIconWrap>
                      <PreviewLabel>녹음 UI 프리뷰</PreviewLabel>
                    </PreviewContent>
                  </DetailVisualScreen>
                </DetailVisualCard>
              </DetailVisualWrap>
            </DetailRow>

            <DetailRow>
              <DetailVisualWrap>
                <DetailVisualGlow $reverse />
                <DetailVisualCard>
                  <DetailVisualScreen>
                    <PreviewContent>
                      <PreviewIconWrap>
                        <Brain size = {32} />
                      </PreviewIconWrap>
                      <PreviewLabel>AI 분석 결과 프리뷰</PreviewLabel>
                    </PreviewContent>
                  </DetailVisualScreen>
                </DetailVisualCard>
              </DetailVisualWrap>

              <DetailText>
                <DetailBadge>AI 분석</DetailBadge>
                <DetailTitle>
                  핵심만 남기고
                  <br />
                  나머지는 정리
                </DetailTitle>
                <DetailDescription>
                  회의 내용을 분석해 요약본, 액션 아이템, 일정을 자동으로 추출합니다.
                  긴 회의록을 읽는 시간을 절약하세요.
                </DetailDescription>

                <DetailList>
                  <DetailListItem>
                    <DetailListCheck>✓</DetailListCheck>
                    <span>회의 핵심 요약 및 주요 결정사항 추출</span>
                  </DetailListItem>
                  <DetailListItem>
                    <DetailListCheck>✓</DetailListCheck>
                    <span>담당자별 Todo 자동 생성 및 배정</span>
                  </DetailListItem>
                  <DetailListItem>
                    <DetailListCheck>✓</DetailListCheck>
                    <span>일정 및 마감일 자동 캘린더 등록</span>
                  </DetailListItem>
                </DetailList>
              </DetailText>
            </DetailRow>
          </SectionContainer>
        </DetailsSection>

        <WorkflowSection>
          <SectionContainer>
            <SectionHeading>
              <SectionTitle>간단한 프로세스</SectionTitle>
              <SectionDescription>
                복잡한 설정 없이 바로 시작할 수 있습니다
              </SectionDescription>
            </SectionHeading>

            <WorkflowGrid>
              <WorkflowCard>
                <WorkflowNumber>1</WorkflowNumber>
                <WorkflowTitle>녹음</WorkflowTitle>
                <WorkflowDescription>
                  회의 시작 시 녹음 버튼을 누르세요
                </WorkflowDescription>
              </WorkflowCard>

              <WorkflowCard>
                <WorkflowNumber>2</WorkflowNumber>
                <WorkflowTitle>분석</WorkflowTitle>
                <WorkflowDescription>
                  AI가 회의 내용을 실시간 분석합니다
                </WorkflowDescription>
              </WorkflowCard>

              <WorkflowCard>
                <WorkflowNumber>3</WorkflowNumber>
                <WorkflowTitle>정리</WorkflowTitle>
                <WorkflowDescription>
                  요약, Todo, 일정이 자동 생성됩니다
                </WorkflowDescription>
              </WorkflowCard>

              <WorkflowCard>
                <WorkflowNumber>4</WorkflowNumber>
                <WorkflowTitle>실행</WorkflowTitle>
                <WorkflowDescription>
                  팀원들과 공유하고 바로 실행하세요
                </WorkflowDescription>
              </WorkflowCard>
            </WorkflowGrid>
          </SectionContainer>
        </WorkflowSection>

        <CTASection>
          <CTAGlowLeft />
          <CTAGlowRight />

          <CTAContent>
            <CTATitle>오늘부터 시작하세요</CTATitle>
            <CTADescription>
              무료로 시작하고, 언제든지 업그레이드할 수 있습니다
            </CTADescription>

            <a href = "/auth/signup">
              <CTAButton size = "lg" variant = "white">
                무료로 시작하기
                <ArrowRight />
              </CTAButton>
            </a>
          </CTAContent>
        </CTASection>
      </Main>

      <Footer />
    </PageWrapper>
  );
}