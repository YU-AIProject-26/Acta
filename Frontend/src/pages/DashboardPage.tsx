import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import {
  Mic,
  Upload,
  FileText,
  Clock,
  CheckCircle2,
  XCircle,
  Loader2,
  ArrowRight,
  CalendarDays,
  MoreVertical,
} from "lucide-react";
import Calendar from "../components/Calendar";
import {
  PageWrapper,
  EmptyStateWrapper,
  EmptyActionRow,
  HeaderSection,
  HeaderLeft,
  HeaderTitle,
  HeaderDescription,
  PrimaryActionButton,
  OutlineActionButton,
  EmptyCard,
  EmptyIconBox,
  EmptyTitle,
  EmptyDescription,
  EmptyButtonRow,
  StatsGrid,
  StatCard,
  StatHeader,
  StatLabel,
  StatValue,
  StatSubText,
  MainCard,
  SectionHeader,
  SectionTitle,
  SectionLinkButton,
  MeetingsList,
  MeetingLink,
  MeetingCard,
  MeetingTop,
  MeetingLeft,
  MeetingTitle,
  MeetingMeta,
  MeetingSummary,
  MeetingActions,
  MeetingMenuWrapper,
  MeetingMenuButton,
  MeetingMenu,
  MeetingMenuItem,
  StatusBadge,
  TodoCalendarGrid,
  TodoListCard,
  CalendarSideCard,
  TodoList,
  TodoItem,
  TodoCheck,
  TodoContent,
  TodoText,
  TodoMetaRow,
  TodoMetaText,
  CalendarSectionHeader,
  CalendarTop,
  CalendarBlock,
  UpcomingSection,
  UpcomingTitle,
  UpcomingList,
  UpcomingItem,
  UpcomingDateBox,
  UpcomingMonth,
  UpcomingDay,
  UpcomingContent,
  UpcomingEventTitle,
  UpcomingEventTime,
} from "./DashboardPage.styles";

import { fetchSchedules } from "../api/schedule_api";
import { fetchTodos, updateTodo } from "../api/todo_api";
import { fetchMeetings } from "../api/meetings_api";

type MeetingStatus = "completed" | "analyzing" | "failed";

type MeetingItem = {
  id: number;
  title: string;
  date: string;
  status: MeetingStatus;
  summary: string;
  duration: string;
};

type TodoItemType = {
  id: number;
  text: string;
  assignee: string;
  dueDate: string;
  completed: boolean;
};

const FALLBACK_MEETINGS: MeetingItem[] = [
  {
    id: 1,
    title: "주간 마케팅 전략 회의",
    date: "2026년 4월 7일 14:00",
    status: "completed",
    summary: "Q2 마케팅 캠페인 전략 수립 및 예산 논의",
    duration: "1시간 23분",
  },
  {
    id: 2,
    title: "제품 로드맵 리뷰",
    date: "2026년 4월 6일 10:00",
    status: "analyzing",
    summary: "분석 중...",
    duration: "2시간 15분",
  },
  {
    id: 3,
    title: "고객 피드백 세션",
    date: "2026년 4월 5일 16:00",
    status: "completed",
    summary: "주요 고객 요청사항 수집 및 우선순위 결정",
    duration: "45분",
  },
];

const FALLBACK_TODOS: TodoItemType[] = [
  {
    id: 1,
    text: "마케팅 캠페인 예산안 작성",
    assignee: "김철수",
    dueDate: "4월 10일",
    completed: false,
  },
  {
    id: 2,
    text: "Q2 제품 로드맵 문서화",
    assignee: "이영희",
    dueDate: "4월 12일",
    completed: false,
  },
  {
    id: 3,
    text: "고객 피드백 리포트 공유",
    assignee: "박민수",
    dueDate: "4월 8일",
    completed: true,
  },
  {
    id: 4,
    text: "다음 주 회의 일정 조율",
    assignee: "최지은",
    dueDate: "4월 9일",
    completed: false,
  },
];

const FALLBACK_EVENTS = [
  { date: "4월 8일", time: "10:00", title: "팀 스탠드업" },
  { date: "4월 10일", time: "14:00", title: "월간 리뷰" },
  { date: "4월 12일", time: "15:00", title: "1:1 미팅" },
];

export default function DashboardPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const meetingsSectionRef = useRef<HTMLDivElement | null>(null);
  const todoSectionRef = useRef<HTMLDivElement | null>(null);
  const calendarSectionRef = useRef<HTMLDivElement | null>(null);

  const [recentMeetings, setRecentMeetings] = useState<MeetingItem[]>([]);
  const [todos, setTodos] = useState<TodoItemType[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<
    { date: string; time: string; title: string }[]
  >([]);

  const [totalMeetingsCount, setTotalMeetingsCount] = useState(0);
  const [completedTodosCount, setCompletedTodosCount] = useState(0);
  const [activeTodosCount, setActiveTodosCount] = useState(0);
  const [totalSchedulesCount, setTotalSchedulesCount] = useState(0);
  const [totalDurationHours, setTotalDurationHours] = useState(0);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const mapStatus = (status: string): MeetingStatus => {
    switch (status) {
      case "COMPLETED":
        return "completed";
      case "PROCESSING":
      case "UPLOADED":
        return "analyzing";
      case "FAILED":
        return "failed";
      default:
        return "analyzing";
    }
  };

  const toggleTodoCompleted = async (id: number) => {
    const targetTodo = todos.find((t) => t.id === id);
    if (!targetTodo) return;

    const nextCompleted = !targetTodo.completed;

    try {
      await updateTodo(id, {
        status: nextCompleted ? "COMPLETED" : "PENDING",
      });

      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, completed: nextCompleted } : todo,
        ),
      );
    } catch (error) {
      console.error("Todo 대시보드 업데이트 실패:", error);
    }
  };

  const handleDeleteMeeting = (id: number) => {
    setRecentMeetings((prev) => prev.filter((meeting) => meeting.id !== id));
    setOpenMenuId(null);
  };

  const toggleMeetingMenu = (id: number) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  const closeMeetingMenu = () => {
    setOpenMenuId(null);
  };

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const meetings = await fetchMeetings();
        if (meetings) {
          setTotalMeetingsCount(meetings.length);

          const totalMinutes = meetings.reduce(
            (acc, cur) => acc + (cur.durationMinutes || 0),
            0,
          );
          setTotalDurationHours(Math.round(totalMinutes / 60));

          setRecentMeetings(
            meetings.slice(0, 3).map((m) => ({
              id: m.id,
              title: m.title,
              date: new Date(m.meetingAt).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }),
              status: mapStatus(m.status),
              summary: m.oneLineSummary || "회의 요약이 없습니다.",
              duration: `${m.durationMinutes}분`,
            })),
          );
        }
      } catch {
        console.log(
          "meetings 서버 연결 실패 - 미리 심어둔 fallback 데이터 유지",
        );
        setTotalMeetingsCount(FALLBACK_MEETINGS.length);
        setTotalDurationHours(32);
        setRecentMeetings(FALLBACK_MEETINGS);
      }

      try {
        const todoRes = await fetchTodos();
        if (todoRes) {
          setCompletedTodosCount(todoRes.completedCount || 0);
          setActiveTodosCount(
            todoRes.inProgressCount ||
              (todoRes.totalCount ?? 0) - (todoRes.completedCount ?? 0) ||
              0,
          );

          setTodos(
            (todoRes.items || []).slice(0, 5).map((t) => ({
              id: t.id,
              text: t.title,
              assignee: t.assigneeName || "미정",
              dueDate: t.dueDate,
              completed: t.status === "COMPLETED",
            })),
          );
        }
      } catch {
        console.log("todos 서버 연결 실패 - 미리 심어둔 fallback 데이터 유지");
        setCompletedTodosCount(
          FALLBACK_TODOS.filter((t) => t.completed).length,
        );
        setActiveTodosCount(FALLBACK_TODOS.filter((t) => !t.completed).length);
        setTodos(FALLBACK_TODOS);
      }

      // 3. Schedules API 처리
      try {
        const schedules = await fetchSchedules();
        if (schedules) {
          setTotalSchedulesCount(schedules.length);

          setUpcomingEvents(
            schedules
              .slice(0, 3)
              .map((s: { title: string; date: string; time: string }) => {
                let formattedDate = s.date;
                if (s.date && s.date.includes("-")) {
                  const targetDate = new Date(s.date);
                  if (!Number.isNaN(targetDate.getTime())) {
                    formattedDate = `${targetDate.getMonth() + 1}월 ${targetDate.getDate()}일`;
                  }
                }
                return {
                  date: formattedDate,
                  time: s.time || "시간 미정",
                  title: s.title,
                };
              }),
          );
        }
      } catch {
        console.log(
          "schedules 서버 연결 실패 - 미리 심어둔 fallback 데이터 유지",
        );
        setTotalSchedulesCount(FALLBACK_EVENTS.length);
        setUpcomingEvents(FALLBACK_EVENTS);
      }
    };

    loadDashboard();
  }, []);

  const getStatusBadge = (status: MeetingStatus) => {
    switch (status) {
      case "completed":
        return (
          <StatusBadge $variant="completed">
            <CheckCircle2 className="status-icon" />
            완료
          </StatusBadge>
        );
      case "analyzing":
        return (
          <StatusBadge $variant="analyzing">
            <Loader2 className="status-icon status-spin" />
            분석중
          </StatusBadge>
        );
      case "failed":
        return (
          <StatusBadge $variant="failed">
            <XCircle className="status-icon" />
            실패
          </StatusBadge>
        );
      default:
        return null;
    }
  };

  const isDashboardEmpty =
    totalMeetingsCount === 0 && todos.length === 0 && totalSchedulesCount === 0;

  if (isDashboardEmpty) {
    return (
      <PageWrapper>
        <EmptyStateWrapper>
          <EmptyActionRow>
            <PrimaryActionButton type="button">
              <Mic className="action-icon" />
              녹음하기
            </PrimaryActionButton>
            <OutlineActionButton type="button">
              <Upload className="action-icon" />
              파일 업로드
            </OutlineActionButton>
          </EmptyActionRow>

          <EmptyCard>
            <EmptyIconBox>
              <FileText />
            </EmptyIconBox>
            <EmptyTitle>아직 회의가 없습니다</EmptyTitle>
            <EmptyDescription>
              첫 회의를 녹음하거나 파일을 업로드하여 AI 분석을 시작해보세요
            </EmptyDescription>
            <EmptyButtonRow>
              <PrimaryActionButton type="button">
                <Mic className="action-icon" />
                녹음 시작
              </PrimaryActionButton>
              <OutlineActionButton type="button">
                <Upload className="action-icon" />
                파일 업로드
              </OutlineActionButton>
            </EmptyButtonRow>
          </EmptyCard>
        </EmptyStateWrapper>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <HeaderSection>
        <HeaderLeft>
          <HeaderTitle>대시보드</HeaderTitle>
          <HeaderDescription>
            회의 분석과 Todo를 한눈에 확인하세요
          </HeaderDescription>
        </HeaderLeft>
      </HeaderSection>

      <StatsGrid>
        <StatCard onClick={() => scrollToSection(meetingsSectionRef)}>
          <StatHeader>
            <StatLabel>전체 회의</StatLabel>
            <FileText className="stat-icon" />
          </StatHeader>
          <StatValue>{totalMeetingsCount}</StatValue>
          <StatSubText $accent={true}>+3 이번 주</StatSubText>
        </StatCard>

        <StatCard onClick={() => scrollToSection(todoSectionRef)}>
          <StatHeader>
            <StatLabel>완료된 Todo</StatLabel>
            <CheckCircle2 className="stat-icon" />
          </StatHeader>
          <StatValue>{completedTodosCount}</StatValue>
          <StatSubText>진행중 {activeTodosCount} 개</StatSubText>
        </StatCard>

        <StatCard onClick={() => scrollToSection(calendarSectionRef)}>
          <StatHeader>
            <StatLabel>예정된 일정</StatLabel>
            <CalendarDays className="stat-icon" />
          </StatHeader>
          <StatValue>{totalSchedulesCount}</StatValue>
          <StatSubText $accent={true}>이번 주 3개</StatSubText>
        </StatCard>

        <StatCard onClick={() => scrollToSection(meetingsSectionRef)}>
          <StatHeader>
            <StatLabel>총 회의 시간</StatLabel>
            <Clock className="stat-icon" />
          </StatHeader>
          <StatValue>{totalDurationHours}h</StatValue>
          <StatSubText>이번 달</StatSubText>
        </StatCard>
      </StatsGrid>

      <MainCard ref={meetingsSectionRef}>
        <SectionHeader>
          <SectionTitle>최근 회의</SectionTitle>
          <SectionLinkButton to="/meetings">
            모두 보기
            <ArrowRight className="link-arrow" />
          </SectionLinkButton>
        </SectionHeader>

        {recentMeetings.length === 0 ? (
          <div
            style={{ padding: "40px 0", textAlign: "center", color: "#888" }}
          >
            등록된 최근 회의가 없습니다.
          </div>
        ) : (
          <MeetingsList>
            {recentMeetings.map((meeting) => (
              <MeetingCard key={meeting.id}>
                <MeetingTop>
                  <MeetingLeft>
                    <MeetingLink to={`/meetings/${meeting.id}`}>
                      <MeetingTitle>{meeting.title}</MeetingTitle>
                    </MeetingLink>

                    <MeetingMeta>
                      <span className="meeting-meta-item">
                        <Clock className="meeting-meta-icon" />
                        {meeting.date}
                      </span>
                      <span>•</span>
                      <span>{meeting.duration}</span>
                    </MeetingMeta>
                  </MeetingLeft>

                  <MeetingActions>
                    {getStatusBadge(meeting.status)}

                    <MeetingMenuWrapper>
                      <MeetingMenuButton
                        type="button"
                        aria-label="meeting-menu"
                        onClick={() => toggleMeetingMenu(meeting.id)}
                      >
                        <MoreVertical className="meeting-more-icon" />
                      </MeetingMenuButton>

                      {openMenuId === meeting.id && (
                        <MeetingMenu>
                          <MeetingMenuItem
                            as={Link}
                            to={`/meetings/${meeting.id}/edit`}
                            onClick={closeMeetingMenu}
                          >
                            수정하기
                          </MeetingMenuItem>

                          <MeetingMenuItem
                            type="button"
                            $danger={true}
                            onClick={() => handleDeleteMeeting(meeting.id)}
                          >
                            삭제하기
                          </MeetingMenuItem>
                        </MeetingMenu>
                      )}
                    </MeetingMenuWrapper>
                  </MeetingActions>
                </MeetingTop>

                <MeetingLink to={`/meetings/${meeting.id}`}>
                  <MeetingSummary>{meeting.summary}</MeetingSummary>
                </MeetingLink>
              </MeetingCard>
            ))}
          </MeetingsList>
        )}
      </MainCard>

      <TodoCalendarGrid>
        <TodoListCard ref={todoSectionRef}>
          <SectionHeader>
            <SectionTitle>오늘의 Todo</SectionTitle>
            <SectionLinkButton to="/todo">
              모두 보기
              <ArrowRight className="link-arrow" />
            </SectionLinkButton>
          </SectionHeader>

          {todos.length === 0 ? (
            <div
              style={{ padding: "40px 0", textAlign: "center", color: "#888" }}
            >
              오늘 할 일이 없습니다. 새로운 Todo를 생성해 보세요!
            </div>
          ) : (
            <TodoList>
              {todos.map((todo) => (
                <TodoItem key={todo.id}>
                  <TodoCheck
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodoCompleted(todo.id)}
                  />
                  <TodoContent>
                    <TodoText $completed={todo.completed}>{todo.text}</TodoText>
                    <TodoMetaRow>
                      <TodoMetaText>{todo.assignee}</TodoMetaText>
                      <TodoMetaText>•</TodoMetaText>
                      <TodoMetaText>{todo.dueDate}</TodoMetaText>
                    </TodoMetaRow>
                  </TodoContent>
                </TodoItem>
              ))}
            </TodoList>
          )}
        </TodoListCard>

        <CalendarSideCard ref={calendarSectionRef}>
          <CalendarSectionHeader>
            <SectionTitle>일정 캘린더</SectionTitle>
            <SectionLinkButton to="/calendar">
              모두 보기
              <ArrowRight className="link-arrow" />
            </SectionLinkButton>
          </CalendarSectionHeader>

          <CalendarTop>
            <CalendarBlock>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="dashboard-calendar"
              />
            </CalendarBlock>
          </CalendarTop>

          <UpcomingSection>
            <UpcomingTitle>다가오는 일정</UpcomingTitle>

            {upcomingEvents.length === 0 ? (
              <div
                style={{
                  padding: "20px 0",
                  textAlign: "center",
                  color: "#888",
                  fontSize: "14px",
                }}
              >
                예정된 일정이 없습니다.
              </div>
            ) : (
              <UpcomingList>
                {upcomingEvents.map((event, index) => {
                  const dayText =
                    event.date && event.date.includes("월 ")
                      ? event.date.split("월 ")[1]?.replace("일", "")
                      : event.date;
                  const monthText =
                    event.date && event.date.includes("월 ")
                      ? event.date.split("월 ")[0] + "월"
                      : "일정";

                  return (
                    <UpcomingItem key={index}>
                      <UpcomingDateBox>
                        <UpcomingMonth>{monthText}</UpcomingMonth>
                        <UpcomingDay>{dayText}</UpcomingDay>
                      </UpcomingDateBox>

                      <UpcomingContent>
                        <UpcomingEventTitle>{event.title}</UpcomingEventTitle>
                        <UpcomingEventTime>{event.time}</UpcomingEventTime>
                      </UpcomingContent>
                    </UpcomingItem>
                  );
                })}
              </UpcomingList>
            )}
          </UpcomingSection>
        </CalendarSideCard>
      </TodoCalendarGrid>
    </PageWrapper>
  );
}
