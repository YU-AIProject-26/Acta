import {
  Users,
  UserPlus,
  FileText,
  CheckSquare,
  MessageSquare,
  Activity,
  ChevronRight,
  Clock3,
  AlertTriangle,
} from 'lucide-react';
import {
  PageWrapper,
  HeaderSection,
  HeaderTitle,
  HeaderDescription,
  StatsGrid,
  StatCard,
  StatHeader,
  StatLabel,
  StatValue,
  StatSubText,
  ContentGrid,
  WideSection,
  SideSection,
  SectionCard,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  SectionLinkButton,
  TableWrapper,
  AdminTable,
  Badge,
  ActionButtonRow,
  TableActionButton,
  ActivityList,
  ActivityItem,
  ActivityIconBox,
  ActivityContent,
  ActivityTitle,
  ActivityMeta,
  InquiryList,
  InquiryItem,
  InquiryTop,
  InquiryTitleRow,
  InquiryTitle,
  InquiryMeta,
  InquiryStatusBadge,
  InquiryDescription,
  QuickActionGrid,
  QuickActionCard,
  QuickActionTitle,
  QuickActionDescription,
  QuickActionFooter,
  SystemStatusCard,
  SystemStatusHeader,
  SystemStatusTitle,
  SystemStatusBadge,
  SystemStatusList,
  SystemStatusItem,
  SystemStatusLabel,
  SystemStatusValue,
} from './AdminPage.styles';

export default function AdminPage() {
  const users = [
    {
      id: 1,
      nickname: '관리자',
      email: 'admin@acta.com',
      role: 'admin',
      joinedAt: '2026.05.10',
      status: '활성',
    },
    {
      id: 2,
      nickname: '테스트 사용자',
      email: 'test@acta.com',
      role: 'user',
      joinedAt: '2026.05.11',
      status: '활성',
    },
    {
      id: 3,
      nickname: '민수',
      email: 'minsuu@acta.com',
      role: 'user',
      joinedAt: '2026.05.12',
      status: '활성',
    },
    {
      id: 4,
      nickname: '지은',
      email: 'jieun@acta.com',
      role: 'user',
      joinedAt: '2026.05.12',
      status: '대기',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      icon: 'meeting',
      title: '새 회의가 생성되었습니다',
      meta: '주간 마케팅 전략 회의 · 5분 전',
    },
    {
      id: 2,
      icon: 'user',
      title: '신규 회원이 가입했습니다',
      meta: 'minsuu@acta.com · 18분 전',
    },
    {
      id: 3,
      icon: 'todo',
      title: 'Todo 6건이 자동 생성되었습니다',
      meta: '제품 로드맵 리뷰 · 34분 전',
    },
    {
      id: 4,
      icon: 'warning',
      title: '문의 1건이 접수되었습니다',
      meta: '서비스 이용 문의 · 1시간 전',
    },
  ];

  const inquiries = [
    {
      id: 1,
      type: '문의',
      title: 'Google Calendar 연동이 되지 않습니다',
      author: 'jihye@acta.com',
      status: '대기',
      createdAt: '2026.05.12 14:20',
      description: '환경설정에서 연동 버튼을 눌러도 반응이 없습니다.',
    },
    {
      id: 2,
      type: '신고',
      title: '회의 제목에 부적절한 내용이 포함되어 있습니다',
      author: 'report@acta.com',
      status: '처리중',
      createdAt: '2026.05.12 12:05',
      description: '공개된 회의 목록 중 부적절한 제목이 보입니다.',
    },
    {
      id: 3,
      type: '피드백',
      title: '회의 분석 결과 다운로드 기능이 있으면 좋겠습니다',
      author: 'sora@acta.com',
      status: '완료',
      createdAt: '2026.05.11 18:42',
      description: '회의 요약과 Todo를 문서로 내보내고 싶습니다.',
    },
  ];

  return (
    <PageWrapper>
      <HeaderSection>
        <HeaderTitle>관리자 페이지</HeaderTitle>
        <HeaderDescription>
          서비스 운영 현황과 주요 데이터를 관리하세요
        </HeaderDescription>
      </HeaderSection>

      <StatsGrid>
        <StatCard>
          <StatHeader>
            <StatLabel>전체 회원</StatLabel>
            <Users className = "stat-icon" />
          </StatHeader>
          <StatValue>1,248</StatValue>
          <StatSubText $accent = {true}>이번 주 +38명</StatSubText>
        </StatCard>

        <StatCard>
          <StatHeader>
            <StatLabel>오늘 가입</StatLabel>
            <UserPlus className = "stat-icon" />
          </StatHeader>
          <StatValue>14</StatValue>
          <StatSubText>어제 대비 +4명</StatSubText>
        </StatCard>

        <StatCard>
          <StatHeader>
            <StatLabel>전체 회의</StatLabel>
            <FileText className = "stat-icon" />
          </StatHeader>
          <StatValue>3,892</StatValue>
          <StatSubText $accent = {true}>분석 완료 3,601건</StatSubText>
        </StatCard>

        <StatCard>
          <StatHeader>
            <StatLabel>전체 Todo</StatLabel>
            <CheckSquare className = "stat-icon" />
          </StatHeader>
          <StatValue>12,409</StatValue>
          <StatSubText>진행중 2,184건</StatSubText>
        </StatCard>

        <StatCard>
          <StatHeader>
            <StatLabel>문의 대기</StatLabel>
            <MessageSquare className = "stat-icon" />
          </StatHeader>
          <StatValue>7</StatValue>
          <StatSubText $accent = {true}>신고 포함 11건</StatSubText>
        </StatCard>

        <StatCard>
          <StatHeader>
            <StatLabel>시스템 상태</StatLabel>
            <Activity className = "stat-icon" />
          </StatHeader>
          <StatValue>정상</StatValue>
          <StatSubText>AI 서버/DB 연결 양호</StatSubText>
        </StatCard>
      </StatsGrid>

      <ContentGrid>
        <WideSection>
          <SectionCard>
            <SectionHeader>
              <div>
                <SectionTitle>회원 관리</SectionTitle>
                <SectionDescription>
                  회원 정보와 권한을 확인하고 관리할 수 있습니다
                </SectionDescription>
              </div>

              <SectionLinkButton to = "/admin/users">
                전체 보기
                <ChevronRight className = "link-arrow" />
              </SectionLinkButton>
            </SectionHeader>

            <TableWrapper>
              <AdminTable>
                <thead>
                  <tr>
                    <th>닉네임</th>
                    <th>이메일</th>
                    <th>권한</th>
                    <th>가입일</th>
                    <th>상태</th>
                    <th>관리</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((item) => (
                    <tr key = {item.id}>
                      <td>{item.nickname}</td>
                      <td>{item.email}</td>
                      <td>
                        <Badge $variant = {item.role === 'admin' ? 'admin' : 'default'}>
                          {item.role === 'admin' ? '관리자' : '일반'}
                        </Badge>
                      </td>
                      <td>{item.joinedAt}</td>
                      <td>
                        <Badge $variant = {item.status === '활성' ? 'success' : 'pending'}>
                          {item.status}
                        </Badge>
                      </td>
                      <td>
                        <ActionButtonRow>
                          <TableActionButton type = "button">
                            상세
                          </TableActionButton>
                          <TableActionButton type = "button">
                            권한 변경
                          </TableActionButton>
                        </ActionButtonRow>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </AdminTable>
            </TableWrapper>
          </SectionCard>
        </WideSection>

        <SideSection>
          <SectionCard>
            <SectionHeader>
              <div>
                <SectionTitle>최근 활동</SectionTitle>
                <SectionDescription>
                  서비스에서 방금 발생한 주요 활동입니다
                </SectionDescription>
              </div>
            </SectionHeader>

            <ActivityList>
              {recentActivities.map((item) => (
                <ActivityItem key = {item.id}>
                  <ActivityIconBox
                    $variant = {
                      item.icon === 'meeting'
                        ? 'blue'
                        : item.icon === 'user'
                        ? 'green'
                        : item.icon === 'todo'
                        ? 'purple'
                        : 'orange'
                    }
                  >
                    {item.icon === 'meeting' && <FileText className = "activity-icon" />}
                    {item.icon === 'user' && <Users className = "activity-icon" />}
                    {item.icon === 'todo' && <CheckSquare className = "activity-icon" />}
                    {item.icon === 'warning' && <AlertTriangle className = "activity-icon" />}
                  </ActivityIconBox>

                  <ActivityContent>
                    <ActivityTitle>{item.title}</ActivityTitle>
                    <ActivityMeta>{item.meta}</ActivityMeta>
                  </ActivityContent>
                </ActivityItem>
              ))}
            </ActivityList>
          </SectionCard>
        </SideSection>

        <WideSection>
          <SectionCard>
            <SectionHeader>
              <div>
                <SectionTitle>문의 / 신고 관리</SectionTitle>
                <SectionDescription>
                  접수된 문의와 신고, 사용자 피드백을 확인합니다
                </SectionDescription>
              </div>

              <SectionLinkButton to = "/admin/inquiries">
                전체 보기
                <ChevronRight className = "link-arrow" />
              </SectionLinkButton>
            </SectionHeader>

            <InquiryList>
              {inquiries.map((item) => (
                <InquiryItem key = {item.id}>
                  <InquiryTop>
                    <InquiryTitleRow>
                      <Badge
                        $variant = {
                          item.type === '문의'
                            ? 'default'
                            : item.type === '신고'
                            ? 'danger'
                            : 'success'
                        }
                      >
                        {item.type}
                      </Badge>
                      <InquiryTitle>{item.title}</InquiryTitle>
                    </InquiryTitleRow>

                    <InquiryStatusBadge
                      $variant = {
                        item.status === '대기'
                          ? 'pending'
                          : item.status === '처리중'
                          ? 'warning'
                          : 'success'
                      }
                    >
                      {item.status}
                    </InquiryStatusBadge>
                  </InquiryTop>

                  <InquiryMeta>
                    {item.author} · {item.createdAt}
                  </InquiryMeta>

                  <InquiryDescription>{item.description}</InquiryDescription>
                </InquiryItem>
              ))}
            </InquiryList>
          </SectionCard>
        </WideSection>

        <SideSection>
          <SectionCard>
            <SectionHeader>
              <div>
                <SectionTitle>빠른 작업</SectionTitle>
                <SectionDescription>
                  자주 사용하는 관리 작업으로 빠르게 이동합니다
                </SectionDescription>
              </div>
            </SectionHeader>

            <QuickActionGrid>
              <QuickActionCard to = "/admin/users">
                <QuickActionTitle>회원 관리 바로가기</QuickActionTitle>
                <QuickActionDescription>
                  회원 목록, 권한, 상태를 확인하고 관리합니다
                </QuickActionDescription>
                <QuickActionFooter>
                  이동
                  <ChevronRight className = "quick-arrow" />
                </QuickActionFooter>
              </QuickActionCard>

              <QuickActionCard to = "/admin/meetings">
                <QuickActionTitle>회의 데이터 관리</QuickActionTitle>
                <QuickActionDescription>
                  회의 목록, 분석 상태, 생성 데이터를 관리합니다
                </QuickActionDescription>
                <QuickActionFooter>
                  이동
                  <ChevronRight className = "quick-arrow" />
                </QuickActionFooter>
              </QuickActionCard>

              <QuickActionCard to = "/admin/inquiries">
                <QuickActionTitle>문의 / 신고 관리</QuickActionTitle>
                <QuickActionDescription>
                  문의, 신고, 피드백 항목을 확인하고 처리합니다
                </QuickActionDescription>
                <QuickActionFooter>
                  이동
                  <ChevronRight className = "quick-arrow" />
                </QuickActionFooter>
              </QuickActionCard>

              <QuickActionCard to = "/admin/notices">
                <QuickActionTitle>공지사항 관리</QuickActionTitle>
                <QuickActionDescription>
                  공지 등록, 수정, 삭제 기능을 관리합니다
                </QuickActionDescription>
                <QuickActionFooter>
                  이동
                  <ChevronRight className = "quick-arrow" />
                </QuickActionFooter>
              </QuickActionCard>
            </QuickActionGrid>

            <SystemStatusCard>
              <SystemStatusHeader>
                <SystemStatusTitle>시스템 상태</SystemStatusTitle>
                <SystemStatusBadge>정상</SystemStatusBadge>
              </SystemStatusHeader>

              <SystemStatusList>
                <SystemStatusItem>
                  <SystemStatusLabel>AI 분석 서버</SystemStatusLabel>
                  <SystemStatusValue $accent = {true}>Online</SystemStatusValue>
                </SystemStatusItem>

                <SystemStatusItem>
                  <SystemStatusLabel>DB 연결 상태</SystemStatusLabel>
                  <SystemStatusValue $accent = {true}>Connected</SystemStatusValue>
                </SystemStatusItem>

                <SystemStatusItem>
                  <SystemStatusLabel>최근 배포</SystemStatusLabel>
                  <SystemStatusValue>2026.05.12 10:30</SystemStatusValue>
                </SystemStatusItem>

                <SystemStatusItem>
                  <SystemStatusLabel>서비스 버전</SystemStatusLabel>
                  <SystemStatusValue>v0.1.0-admin</SystemStatusValue>
                </SystemStatusItem>

                <SystemStatusItem>
                  <SystemStatusLabel>문의 응답 평균</SystemStatusLabel>
                  <SystemStatusValue>2시간 14분</SystemStatusValue>
                </SystemStatusItem>

                <SystemStatusItem>
                  <SystemStatusLabel>점검 예정</SystemStatusLabel>
                  <SystemStatusValue>
                    <Clock3 className = "status-mini-icon" />
                    없음
                  </SystemStatusValue>
                </SystemStatusItem>
              </SystemStatusList>
            </SystemStatusCard>
          </SectionCard>
        </SideSection>
      </ContentGrid>
    </PageWrapper>
  );
}