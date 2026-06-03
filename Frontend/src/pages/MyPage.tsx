import { useMemo, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Shield,
  LogOut,
  Trash2,
  Crown,
  Check,
  Smartphone,
  KeyRound,
  CheckCircle2,
} from "lucide-react";
import {
  PageWrapper,
  HeaderSection,
  Title,
  Subtitle,
  Card,
  ProfileSection,
  ProfileAvatar,
  ProfileContent,
  ProfileTop,
  ProfileInfo,
  ProfileNameRow,
  ProfileName,
  ProfileEmail,
  AdminBadge,
  OutlineButton,
  StatsRow,
  StatItem,
  StatValue,
  StatLabel,
  SectionHeader,
  SectionTitle,
  SectionIcon,
  FormGroup,
  Label,
  Input,
  HelperText,
  InfoText,
  PlanRow,
  PrimaryButton,
  Separator,
  ActionStack,
  DangerButton,
  DeleteModalOverlay,
  DeleteModalCard,
  DeleteModalIconBox,
  DeleteModalTitle,
  DeleteModalDescription,
  DeleteModalButtonRow,
  DeleteModalCancelButton,
  DeleteModalConfirmButton,
  PlanModalOverlay,
  PlanModalCard,
  PlanModalIconBox,
  PlanModalTitle,
  PlanModalDescription,
  PlanOptionList,
  PlanOptionCard,
  PlanOptionBadge,
  PlanOptionTop,
  PlanOptionTitle,
  PlanOptionPrice,
  PlanFeatureList,
  PlanFeatureItem,
  PlanModalButtonRow,
  PlanModalCancelButton,
  PlanModalConfirmButton,
  TwoFactorModalOverlay,
  TwoFactorModalCard,
  TwoFactorModalIconBox,
  TwoFactorModalTitle,
  TwoFactorModalDescription,
  TwoFactorInfoBox,
  TwoFactorInfoRow,
  TwoFactorInfoTextGroup,
  TwoFactorInfoTitle,
  TwoFactorInfoDescription,
  TwoFactorFeatureList,
  TwoFactorFeatureItem,
  TwoFactorButtonRow,
  TwoFactorCancelButton,
  TwoFactorConfirmButton,
  SaveModalOverlay,
  SaveModalCard,
  SaveModalIconBox,
  SaveModalTitle,
  SaveModalDescription,
  SaveModalButtonRow,
  SaveModalConfirmButton,
} from "./MyPage.styles";
import { useAuth } from "../contexts/useAuth";
import { getMyInfo, updateNickname, deleteMyAccount } from "../api/mypage_api";
import { fetchMeetings } from "../api/meetings_api";
import { fetchSchedules } from "../api/schedule_api";
import { fetchTodos } from "../api/todo_api";

type UserInfo = {
  userId: number;
  nickname: string;
  email: string;
  role: string;
  admin: boolean;
  createdAt: string;
};

type UserStats = {
  meetings: number;
  todos: number;
  hours: number;
};

export default function MyPage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const initialNickname = user?.nickname ?? "사용자";

  const [savedNickname, setSavedNickname] = useState(initialNickname);
  const [nicknameInput, setNicknameInput] = useState(initialNickname);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [isTwoFactorModalOpen, setIsTwoFactorModalOpen] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);

  const [selectedPlan, setSelectedPlan] = useState<"free" | "pro">("free");
  const [savedPlan, setSavedPlan] = useState<"free" | "pro">("free");
  const [currentPlan, setCurrentPlan] = useState<"free" | "pro">("free");
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);

  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);

  const trimmedNickname = nicknameInput.trim();
  const isAdmin = userInfo?.role === "admin";

  const hasChanges = useMemo(() => {
    const nicknameChanged =
      trimmedNickname.length > 0 && trimmedNickname !== savedNickname;
    const planChanged = currentPlan !== savedPlan;

    return nicknameChanged || planChanged;
  }, [trimmedNickname, savedNickname, currentPlan, savedPlan]);

  const [stats, setStats] = useState<UserStats>({
    meetings: 0,
    todos: 0,
    hours: 0,
  });

  // 핸들러 함수 복구 및 API 연결
  const handleLogout = async () => {
    await logout();
    navigate("/landing");
  };

  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleConfirmDeleteAccount = async () => {
    try {
      await deleteMyAccount();
      await logout();
      navigate("/landing");
    } catch (e) {
      console.error(e);
      alert("계정 삭제 실패");
    } finally {
      setIsDeleteModalOpen(false);
    }
  };

  const handleOpenPlanModal = () => {
    setSelectedPlan(currentPlan);
    setIsPlanModalOpen(true);
  };

  const handleClosePlanModal = () => {
    setIsPlanModalOpen(false);
  };

  const handleConfirmPlanChange = () => {
    setCurrentPlan(selectedPlan);
    setIsPlanModalOpen(false);
  };

  const handleOpenTwoFactorModal = () => {
    setIsTwoFactorModalOpen(true);
  };

  const handleCloseTwoFactorModal = () => {
    setIsTwoFactorModalOpen(false);
  };

  const handleConfirmTwoFactor = () => {
    setIsTwoFactorEnabled(true);
    setIsTwoFactorModalOpen(false);
  };

  const handleSaveChanges = async () => {
    if (!hasChanges) return;

    try {
      // 닉네임이 변경된 경우에만 API 호출
      if (trimmedNickname.length > 0 && trimmedNickname !== savedNickname) {
        const res = await updateNickname({
          nickname: trimmedNickname,
        });
        setSavedNickname(res.data.nickname);
        setNicknameInput(res.data.nickname);
        setUserInfo((prev) =>
          prev ? { ...prev, nickname: res.data.nickname } : prev,
        );
      }

      setSavedPlan(currentPlan);
      setIsSaveModalOpen(true);
    } catch (e) {
      console.error(e);
      alert("변경사항 저장 실패");
    }
  };

  const handleCloseSaveModal = () => {
    setIsSaveModalOpen(false);
  };

  useEffect(() => {
    const loadMyPage = async () => {
      try {
        const [userRes, meetings, todos] = await Promise.all([
          getMyInfo(),
          fetchMeetings(),
          fetchTodos(),
          fetchSchedules(),
        ]);

        setUserInfo(userRes.data);
        setSavedNickname(userRes.data.nickname);
        setNicknameInput(userRes.data.nickname);

        const totalMinutes = meetings.reduce(
          (acc, cur) => acc + (cur.durationMinutes || 0),
          0,
        );

        setStats({
          meetings: meetings.length,
          todos: todos.completedCount ?? 0,
          hours: Math.round(totalMinutes / 60),
        });
      } catch {
        console.log("MyPage 로딩 실패 - fallback 유지");
      } finally {
        setLoading(false);
      }
    };

    loadMyPage();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (!userInfo) return <div>유저 정보 없음</div>;

  // 가입일 날짜 포맷팅
  const formattedJoinDate = userInfo.createdAt
    ? new Date(userInfo.createdAt).toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "정보 없음";

  return (
    <>
      <PageWrapper>
        <HeaderSection>
          <Title>내 정보</Title>
          <Subtitle>프로필과 계정 설정을 관리하세요</Subtitle>
        </HeaderSection>

        <Card>
          <ProfileSection>
            <ProfileAvatar>
              <span>{userInfo.nickname[0]}</span>
            </ProfileAvatar>

            <ProfileContent>
              <ProfileTop>
                <ProfileInfo>
                  <ProfileNameRow>
                    <ProfileName>{userInfo.nickname}</ProfileName>
                    {isAdmin && <AdminBadge>관리자</AdminBadge>}
                  </ProfileNameRow>
                  <ProfileEmail>{userInfo.email}</ProfileEmail>
                </ProfileInfo>
              </ProfileTop>

              <StatsRow>
                <StatItem>
                  <StatValue>{stats.meetings}</StatValue>
                  <StatLabel>회의</StatLabel>
                </StatItem>

                <StatItem>
                  <StatValue>{stats.todos}</StatValue>
                  <StatLabel>Todo</StatLabel>
                </StatItem>

                <StatItem>
                  <StatValue>{stats.hours}h</StatValue>
                  <StatLabel>회의 시간</StatLabel>
                </StatItem>
              </StatsRow>
            </ProfileContent>
          </ProfileSection>
        </Card>

        <Card>
          <SectionHeader>
            <SectionIcon>
              <Mail />
            </SectionIcon>
            <SectionTitle>계정 정보</SectionTitle>
          </SectionHeader>

          <FormGroup>
            <Label htmlFor="nickname">닉네임</Label>

            <Input
              id="nickname"
              value={nicknameInput}
              onChange={(e) => setNicknameInput(e.target.value)}
            />
            <HelperText>
              변경된 닉네임은 저장 후 바로 프로필에 반영됩니다.
            </HelperText>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" value={userInfo.email} disabled />
            <HelperText>
              로그인에 사용하는 이메일은 변경할 수 없습니다.
            </HelperText>
          </FormGroup>

          <FormGroup>
            <Label>가입일</Label>
            <InfoText>{formattedJoinDate}</InfoText>
          </FormGroup>

          <FormGroup>
            <Label>플랜</Label>
            <PlanRow>
              <InfoText>
                {currentPlan === "free" ? "무료 플랜" : "Pro 플랜"}
              </InfoText>
              <PrimaryButton type="button" onClick={handleOpenPlanModal}>
                플랜 업그레이드
              </PrimaryButton>
            </PlanRow>
          </FormGroup>

          <Separator />

          <PrimaryButton
            type="button"
            $fullWidth
            onClick={handleSaveChanges}
            disabled={!hasChanges}
          >
            변경사항 저장
          </PrimaryButton>
        </Card>

        <Card>
          <SectionHeader>
            <SectionIcon>
              <Shield />
            </SectionIcon>
            <SectionTitle>보안</SectionTitle>
          </SectionHeader>

          <ActionStack>
            <PlanRow>
              <div>
                <Label as="p">비밀번호</Label>
                <HelperText>
                  비밀번호 재설정 페이지에서 변경할 수 있습니다.
                </HelperText>
              </div>

              <Link to="/auth/reset-password">
                <OutlineButton type="button">비밀번호 변경</OutlineButton>
              </Link>
            </PlanRow>

            <Separator />

            <PlanRow>
              <div>
                <Label as="p">2단계 인증</Label>
                <HelperText>
                  {isTwoFactorEnabled
                    ? "2단계 인증이 활성화되어 있습니다."
                    : "계정 보안을 강화하세요."}
                </HelperText>
              </div>

              <OutlineButton type="button" onClick={handleOpenTwoFactorModal}>
                {isTwoFactorEnabled ? "관리하기" : "설정하기"}
              </OutlineButton>
            </PlanRow>
          </ActionStack>
        </Card>

        <Card>
          <SectionHeader>
            <SectionTitle>계정 관리</SectionTitle>
          </SectionHeader>

          <ActionStack>
            <OutlineButton
              type="button"
              $fullWidth
              $justifyStart
              onClick={handleLogout}
            >
              <LogOut className="button-icon" />
              로그아웃
            </OutlineButton>

            <DangerButton type="button" onClick={handleOpenDeleteModal}>
              <Trash2 className="button-icon" />
              계정 탈퇴
            </DangerButton>

            <HelperText>
              계정을 탈퇴하면 모든 데이터가 삭제되며 복구할 수 없습니다.
            </HelperText>
          </ActionStack>
        </Card>
      </PageWrapper>

      {isDeleteModalOpen && (
        <DeleteModalOverlay onClick={handleCloseDeleteModal}>
          <DeleteModalCard onClick={(e) => e.stopPropagation()}>
            <DeleteModalIconBox>
              <Trash2 />
            </DeleteModalIconBox>

            <DeleteModalTitle>정말 계정을 탈퇴하시겠습니까?</DeleteModalTitle>

            <DeleteModalDescription>
              계정을 탈퇴하면 모든 데이터가 삭제되며 복구할 수 없습니다.
              <br />한 번 더 확인한 뒤 진행해주세요.
            </DeleteModalDescription>

            <DeleteModalButtonRow>
              <DeleteModalCancelButton
                type="button"
                onClick={handleCloseDeleteModal}
              >
                취소
              </DeleteModalCancelButton>

              <DeleteModalConfirmButton
                type="button"
                onClick={handleConfirmDeleteAccount}
              >
                탈퇴하기
              </DeleteModalConfirmButton>
            </DeleteModalButtonRow>
          </DeleteModalCard>
        </DeleteModalOverlay>
      )}

      {isPlanModalOpen && (
        <PlanModalOverlay onClick={handleClosePlanModal}>
          <PlanModalCard onClick={(e) => e.stopPropagation()}>
            <PlanModalIconBox>
              <Crown />
            </PlanModalIconBox>

            <PlanModalTitle>플랜을 변경하시겠습니까?</PlanModalTitle>

            <PlanModalDescription>
              현재 사용 중인 플랜을 변경할 수 있습니다.
              <br />
              필요한 기능에 맞는 플랜을 선택해주세요.
            </PlanModalDescription>

            <PlanOptionList>
              <PlanOptionCard
                $selected={selectedPlan === "free"}
                onClick={() => setSelectedPlan("free")}
              >
                <PlanOptionTop>
                  <div>
                    <PlanOptionTitle>무료 플랜</PlanOptionTitle>
                    <PlanOptionPrice>₩0 / 월</PlanOptionPrice>
                  </div>
                  {currentPlan === "free" && (
                    <PlanOptionBadge>현재 플랜</PlanOptionBadge>
                  )}
                </PlanOptionTop>

                <PlanFeatureList>
                  <PlanFeatureItem>
                    <Check className="feature-icon" />
                    기본 회의 관리
                  </PlanFeatureItem>
                  <PlanFeatureItem>
                    <Check className="feature-icon" />
                    기본 Todo 생성
                  </PlanFeatureItem>
                  <PlanFeatureItem>
                    <Check className="feature-icon" />
                    기본 일정 연동
                  </PlanFeatureItem>
                </PlanFeatureList>
              </PlanOptionCard>

              <PlanOptionCard
                $selected={selectedPlan === "pro"}
                onClick={() => setSelectedPlan("pro")}
              >
                <PlanOptionTop>
                  <div>
                    <PlanOptionTitle>Pro 플랜</PlanOptionTitle>
                    <PlanOptionPrice>₩9,900 / 월</PlanOptionPrice>
                  </div>
                  {currentPlan === "pro" && (
                    <PlanOptionBadge>현재 플랜</PlanOptionBadge>
                  )}
                </PlanOptionTop>

                <PlanFeatureList>
                  <PlanFeatureItem>
                    <Check className="feature-icon" />
                    고급 AI 회의 분석
                  </PlanFeatureItem>
                  <PlanFeatureItem>
                    <Check className="feature-icon" />
                    무제한 Todo 생성
                  </PlanFeatureItem>
                  <PlanFeatureItem>
                    <Check className="feature-icon" />
                    외부 캘린더 확장 연동
                  </PlanFeatureItem>
                </PlanFeatureList>
              </PlanOptionCard>
            </PlanOptionList>

            <PlanModalButtonRow>
              <PlanModalCancelButton
                type="button"
                onClick={handleClosePlanModal}
              >
                취소
              </PlanModalCancelButton>

              <PlanModalConfirmButton
                type="button"
                onClick={handleConfirmPlanChange}
              >
                플랜 변경
              </PlanModalConfirmButton>
            </PlanModalButtonRow>
          </PlanModalCard>
        </PlanModalOverlay>
      )}

      {isTwoFactorModalOpen && (
        <TwoFactorModalOverlay onClick={handleCloseTwoFactorModal}>
          <TwoFactorModalCard onClick={(e) => e.stopPropagation()}>
            <TwoFactorModalIconBox>
              <Shield />
            </TwoFactorModalIconBox>

            <TwoFactorModalTitle>
              2단계 인증을 설정하시겠습니까?
            </TwoFactorModalTitle>

            <TwoFactorModalDescription>
              로그인 시 한 번 더 인증 단계를 거쳐 계정 보안을 강화합니다.
              <br />
              모바일 기기 또는 인증 코드를 통해 안전하게 보호할 수 있습니다.
            </TwoFactorModalDescription>

            <TwoFactorInfoBox>
              <TwoFactorInfoRow>
                <Smartphone className="info-icon" />
                <TwoFactorInfoTextGroup>
                  <TwoFactorInfoTitle>모바일 인증 지원</TwoFactorInfoTitle>
                  <TwoFactorInfoDescription>
                    휴대폰 인증 또는 인증 앱 기반으로 확장 가능한 구조입니다.
                  </TwoFactorInfoDescription>
                </TwoFactorInfoTextGroup>
              </TwoFactorInfoRow>

              <TwoFactorInfoRow>
                <KeyRound className="info-icon" />
                <TwoFactorInfoTextGroup>
                  <TwoFactorInfoTitle>추가 보안 코드 확인</TwoFactorInfoTitle>
                  <TwoFactorInfoDescription>
                    비밀번호 외에 한 번 더 확인 절차를 거쳐 계정을 보호합니다.
                  </TwoFactorInfoDescription>
                </TwoFactorInfoTextGroup>
              </TwoFactorInfoRow>
            </TwoFactorInfoBox>

            <TwoFactorFeatureList>
              <TwoFactorFeatureItem>
                <Check className="feature-icon" />
                계정 도용 위험 감소
              </TwoFactorFeatureItem>
              <TwoFactorFeatureItem>
                <Check className="feature-icon" />
                중요 정보 접근 보안 강화
              </TwoFactorFeatureItem>
              <TwoFactorFeatureItem>
                <Check className="feature-icon" />
                추후 인증 방식 확장 가능
              </TwoFactorFeatureItem>
            </TwoFactorFeatureList>

            <TwoFactorButtonRow>
              <TwoFactorCancelButton
                type="button"
                onClick={handleCloseTwoFactorModal}
              >
                취소
              </TwoFactorCancelButton>

              <TwoFactorConfirmButton
                type="button"
                onClick={handleConfirmTwoFactor}
              >
                {isTwoFactorEnabled ? "유지하기" : "활성화하기"}
              </TwoFactorConfirmButton>
            </TwoFactorButtonRow>
          </TwoFactorModalCard>
        </TwoFactorModalOverlay>
      )}

      {isSaveModalOpen && (
        <SaveModalOverlay onClick={handleCloseSaveModal}>
          <SaveModalCard onClick={(e) => e.stopPropagation()}>
            <SaveModalIconBox>
              <CheckCircle2 />
            </SaveModalIconBox>

            <SaveModalTitle>변경사항이 저장되었습니다</SaveModalTitle>

            <SaveModalDescription>
              프로필 정보가 정상적으로 반영되었습니다.
              <br />
              필요한 경우 다시 수정할 수 있습니다.
            </SaveModalDescription>

            <SaveModalButtonRow>
              <SaveModalConfirmButton
                type="button"
                onClick={handleCloseSaveModal}
              >
                확인
              </SaveModalConfirmButton>
            </SaveModalButtonRow>
          </SaveModalCard>
        </SaveModalOverlay>
      )}
    </>
  );
}
