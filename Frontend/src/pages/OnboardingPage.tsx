import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mic,
  Upload,
  FileText,
  CheckSquare,
  Calendar,
} from 'lucide-react';
import {
  PageWrapper,
  PageInner,
  HeaderSection,
  BrandRow,
  BrandIcon,
  BrandText,
  ProgressRow,
  StepText,
  ProgressTrack,
  ProgressBar,
  ContentCard,
  FeatureIconBox,
  FeatureTitle,
  FeatureDescription,
  RecordActionRow,
  RecordActionChip,
  RecordActionText,
  AnalysisList,
  AnalysisItem,
  AnalysisDot,
  AnalysisText,
  TodoList,
  TodoItem,
  TodoCheckbox,
  TodoContent,
  TodoTitle,
  TodoMeta,
  ScheduleList,
  ScheduleItem,
  ScheduleTitle,
  ScheduleMeta,
  ButtonRow,
  OutlineButton,
  PrimaryButton,
} from './OnboardingPage.styles';
import { useAuth } from '../contexts/useAuth';

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { completeOnboarding } = useAuth();

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      completeOnboarding();
      navigate('/dashboard');
    }
  };

  const handleSkip = () => {
    completeOnboarding();
    navigate('/dashboard');
  };

  return (
    <PageWrapper>
      <PageInner>
        <HeaderSection>
          <BrandRow>
            <BrandIcon>
              <span>A</span>
            </BrandIcon>
            <BrandText>Acta</BrandText>
          </BrandRow>

          <ProgressRow>
            <StepText>
              {step} / {totalSteps}
            </StepText>
            <ProgressTrack>
              <ProgressBar $width = {progress} />
            </ProgressTrack>
          </ProgressRow>
        </HeaderSection>

        <ContentCard>
          {step === 1 && (
            <>
              <FeatureIconBox>
                <Mic />
              </FeatureIconBox>

              <FeatureTitle>회의 녹음 및 업로드</FeatureTitle>

              <FeatureDescription>
                회의 중 실시간으로 녹음하거나, 녹음된 파일을 업로드할 수
                있습니다. 모든 형식의 음성 파일을 지원합니다.
              </FeatureDescription>

              <RecordActionRow>
                <RecordActionChip $primary>
                  <Mic />
                  <RecordActionText $primary>실시간 녹음</RecordActionText>
                </RecordActionChip>

                <RecordActionChip>
                  <Upload />
                  <RecordActionText>파일 업로드</RecordActionText>
                </RecordActionChip>
              </RecordActionRow>
            </>
          )}

          {step === 2 && (
            <>
              <FeatureIconBox>
                <FileText />
              </FeatureIconBox>

              <FeatureTitle>AI 회의 분석</FeatureTitle>

              <FeatureDescription>
                업로드된 회의는 AI가 자동으로 분석합니다. 발언 내용을 텍스트로
                변환하고, 핵심 내용을 요약하며, 참여자별 발언 분석을
                제공합니다.
              </FeatureDescription>

              <AnalysisList>
                <AnalysisItem>
                  <AnalysisDot />
                  <AnalysisText>음성 → 텍스트 변환</AnalysisText>
                </AnalysisItem>

                <AnalysisItem>
                  <AnalysisDot />
                  <AnalysisText>핵심 내용 요약</AnalysisText>
                </AnalysisItem>

                <AnalysisItem>
                  <AnalysisDot />
                  <AnalysisText>참여도 및 발언 분석</AnalysisText>
                </AnalysisItem>
              </AnalysisList>
            </>
          )}

          {step === 3 && (
            <>
              <FeatureIconBox>
                <CheckSquare />
              </FeatureIconBox>

              <FeatureTitle>Todo 자동 생성</FeatureTitle>

              <FeatureDescription>
                회의 내용에서 실행이 필요한 항목을 자동으로 추출하여 Todo
                리스트를 만듭니다. 담당자와 마감일까지 함께 정리됩니다.
              </FeatureDescription>

              <TodoList>
                <TodoItem>
                  <TodoCheckbox type = "checkbox" />
                  <TodoContent>
                    <TodoTitle>마케팅 자료 준비하기</TodoTitle>
                    <TodoMeta>담당: 김철수 | 마감: 4월 10일</TodoMeta>
                  </TodoContent>
                </TodoItem>

                <TodoItem>
                  <TodoCheckbox type = "checkbox" />
                  <TodoContent>
                    <TodoTitle>예산안 검토</TodoTitle>
                    <TodoMeta>담당: 이영희 | 마감: 4월 8일</TodoMeta>
                  </TodoContent>
                </TodoItem>
              </TodoList>
            </>
          )}

          {step === 4 && (
            <>
              <FeatureIconBox>
                <Calendar />
              </FeatureIconBox>

              <FeatureTitle>일정 자동 생성</FeatureTitle>

              <FeatureDescription>
                회의에서 언급된 일정을 자동으로 캘린더에 추가합니다. 다음 회의
                일정이나 중요한 날짜를 놓치지 마세요.
              </FeatureDescription>

              <ScheduleList>
                <ScheduleItem $primary>
                  <ScheduleTitle>다음 주 월요일 팀 미팅</ScheduleTitle>
                  <ScheduleMeta>4월 14일 오전 10:00 | 회의실 A</ScheduleMeta>
                </ScheduleItem>

                <ScheduleItem>
                  <ScheduleTitle>최종 발표 준비</ScheduleTitle>
                  <ScheduleMeta>4월 17일 오후 3:00 | 온라인</ScheduleMeta>
                </ScheduleItem>
              </ScheduleList>
            </>
          )}

          <ButtonRow>
            <OutlineButton type = "button" onClick = {handleSkip}>
              건너뛰기
            </OutlineButton>

            <OutlineButton
              type = "button"
              onClick = {handlePrev}
              disabled = {step === 1}
            >
              이전
            </OutlineButton>

            <PrimaryButton type = "button" onClick = {handleNext}>
              {step === totalSteps ? '시작하기' : '다음'}
            </PrimaryButton>
          </ButtonRow>
        </ContentCard>
      </PageInner>
    </PageWrapper>
  );
}