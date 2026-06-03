import { useMemo, useState, useEffect } from "react";
import Calendar from "../components/Calendar";
import { Plus, Clock, MapPin, Users, Video, X } from "lucide-react";
import {
  PageWrapper,
  Header,
  HeaderLeft,
  Title,
  Description,
  HeaderRight,
  ViewSelect,
  AddButton,
  ContentGrid,
  MainColumn,
  SideColumn,
  MainCard,
  TodayCard,
  UpcomingCard,
  SectionTitle,
  EventList,
  EventCard,
  EventTop,
  EventTitle,
  EventTypeBadge,
  EventMetaList,
  EventMetaItem,
  UpcomingList,
  UpcomingItem,
  UpcomingTop,
  UpcomingDateBox,
  UpcomingMonth,
  UpcomingDay,
  UpcomingContent,
  UpcomingEventTitle,
  UpcomingEventTime,
  UpcomingMeta,
  UpcomingMetaItem,
  Divider,
  CalendarWrapper,
  MonthViewWrapper,
  WeekViewWrapper,
  WeekHeader,
  WeekDayCell,
  WeekEventList,
  WeekEventItem,
  DayViewWrapper,
  DayViewEmpty,
  ModalOverlay,
  ModalCard,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalField,
  ModalLabel,
  ModalInput,
  ModalPrimaryButton,
  ModalSecondaryButton,
  ScrollArea,
} from "./CalendarPage.styles";

type ViewType = "month" | "week" | "day";

type EventType = {
  id: number;
  title: string;
  date: string;
  time: string;
  duration: string;
  type: string;
  location: string;
  attendees: number;
  color: string;
};

type EventFormType = {
  title: string;
  date: string;
  time: string;
  duration: string;
  type: string;
  location: string;
  attendees: string;
  color: string;
};

const initialEvents: EventType[] = [
  {
    id: 1,
    title: "주간 마케팅 회의",
    date: "2026-04-08",
    time: "10:00",
    duration: "1시간",
    type: "meeting",
    location: "회의실 A",
    attendees: 5,
    color: "blue",
  },
  {
    id: 2,
    title: "제품 로드맵 리뷰",
    date: "2026-04-10",
    time: "14:00",
    duration: "2시간",
    type: "review",
    location: "온라인",
    attendees: 8,
    color: "green",
  },
  {
    id: 3,
    title: "1:1 미팅 - 김철수",
    date: "2026-04-12",
    time: "15:00",
    duration: "30분",
    type: "one-on-one",
    location: "회의실 B",
    attendees: 2,
    color: "purple",
  },
  {
    id: 4,
    title: "고객 피드백 세션",
    date: "2026-04-15",
    time: "16:00",
    duration: "1시간",
    type: "meeting",
    location: "온라인",
    attendees: 12,
    color: "orange",
  },
  {
    id: 5,
    title: "월간 전체 회의",
    date: "2026-04-17",
    time: "09:00",
    duration: "2시간",
    type: "all-hands",
    location: "대회의실",
    attendees: 30,
    color: "red",
  },
];

const initialForm: EventFormType = {
  title: "",
  date: "2026-04-08",
  time: "09:00",
  duration: "1시간",
  type: "meeting",
  location: "회의실 A",
  attendees: "4",
  color: "blue",
};

import { fetchSchedules, createSchedule } from "../api/schedule_api";

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  const [view, setView] = useState<ViewType>("month");
  const [events, setEvents] = useState<EventType[]>(initialEvents);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [form, setForm] = useState<EventFormType>(initialForm);

  const selectedDate = date ?? new Date("2026-04-08");
  const isMonthView = view === "month";

  const todayEvents = useMemo(() => {
    return events
      .filter(
        (event) =>
          new Date(event.date).toDateString() === selectedDate.toDateString(),
      )
      .sort((a, b) => a.time.localeCompare(b.time));
  }, [events, selectedDate]);

  const upcomingEvents = useMemo(() => {
    return events
      .filter((event) => new Date(event.date) >= selectedDate)
      .sort((a, b) => {
        const aDate = new Date(`${a.date}T${a.time}`).getTime();
        const bDate = new Date(`${b.date}T${b.time}`).getTime();
        return aDate - bDate;
      });
  }, [events, selectedDate]);

  const weekDates = useMemo(() => {
    const base = new Date(selectedDate);
    const day = base.getDay();
    const sunday = new Date(base);
    sunday.setDate(base.getDate() - day);

    return Array.from({ length: 7 }, (_, index) => {
      const target = new Date(sunday);
      target.setDate(sunday.getDate() + index);
      return target;
    });
  }, [selectedDate]);

  const weekEvents = useMemo(() => {
    return weekDates.map((weekDate) => ({
      date: weekDate,
      events: events
        .filter(
          (event) =>
            new Date(event.date).toDateString() === weekDate.toDateString(),
        )
        .sort((a, b) => a.time.localeCompare(b.time)),
    }));
  }, [events, weekDates]);

  const dayEvents = useMemo(() => {
    return events
      .filter(
        (event) =>
          new Date(event.date).toDateString() === selectedDate.toDateString(),
      )
      .sort((a, b) => a.time.localeCompare(b.time));
  }, [events, selectedDate]);

  const getEventColor = (color: string) => {
    const colors: Record<
      string,
      {
        border: string;
        lightBg: string;
        darkBg: string;
      }
    > = {
      blue: {
        border: "#2563EB",
        lightBg: "#EFF6FF",
        darkBg: "rgba(37, 99, 235, 0.14)",
      },
      green: {
        border: "#22C55E",
        lightBg: "#F0FDF4",
        darkBg: "rgba(34, 197, 94, 0.14)",
      },
      purple: {
        border: "#8B5CF6",
        lightBg: "#F5F3FF",
        darkBg: "rgba(139, 92, 246, 0.14)",
      },
      orange: {
        border: "#F59E0B",
        lightBg: "#FFFBEB",
        darkBg: "rgba(245, 158, 11, 0.14)",
      },
      red: {
        border: "#EF4444",
        lightBg: "#FEF2F2",
        darkBg: "rgba(239, 68, 68, 0.14)",
      },
    };

    return colors[color] || colors.blue;
  };

  const formatMonthLabel = (targetDate: Date) => {
    return `${targetDate.getMonth() + 1}월`;
  };

  const formatDayLabel = (targetDate: Date) => {
    return `${targetDate.getMonth() + 1}월 ${targetDate.getDate()}일`;
  };

  const handleOpenAddModal = () => {
    setForm({
      ...initialForm,
      date: dateToInputValue(selectedDate),
    });
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleAddEvent = async () => {
    if (
      !form.title.trim() ||
      !form.date ||
      !form.time ||
      !form.duration.trim() ||
      !form.type.trim() ||
      !form.location.trim() ||
      !form.attendees.trim()
    ) {
      return;
    }

    const request = {
      meetingId: 1,
      title: form.title.trim(),
      startsAt: `${form.date}T${form.time}:00`,
      location: form.location,
      participantCount: Number(form.attendees) || 0,
    };

    try {
      const res = await createSchedule(request);

      const newEvent = {
        id: res.id,
        title: res.title,
        date: res.startsAt.split("T")[0],
        time: res.startsAt.split("T")[1].slice(0, 5),
        duration: form.duration,
        type: form.type,
        location: res.location,
        attendees: res.participantCount,
        color: form.color,
      };

      setEvents((prev) =>
        [...prev, newEvent].sort((a, b) => {
          const aDate = new Date(`${a.date}T${a.time}`).getTime();
          const bDate = new Date(`${b.date}T${b.time}`).getTime();
          return aDate - bDate;
        }),
      );
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log("POST 실패 → 로컬만 반영", err.message);
      } else {
        console.log("POST 실패 → 알 수 없는 에러");
      }

      const nextId =
        events.length > 0 ? Math.max(...events.map((e) => e.id)) + 1 : 1;

      setEvents((prev) => [
        ...prev,
        {
          id: nextId,
          title: form.title.trim(),
          date: form.date,
          time: form.time,
          duration: form.duration,
          type: form.type,
          location: form.location,
          attendees: Number(form.attendees),
          color: form.color,
        },
      ]);
    }

    setIsAddModalOpen(false);
  };

  const renderMonthView = () => {
    return (
      <MonthViewWrapper>
        <CalendarWrapper>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            month={currentMonth}
            onMonthChange={setCurrentMonth}
            className="calendar-page-calendar"
          />
        </CalendarWrapper>
      </MonthViewWrapper>
    );
  };

  const renderWeekView = () => {
    return (
      <WeekViewWrapper>
        <SectionTitle>{formatMonthLabel(selectedDate)} 주간 일정</SectionTitle>

        <WeekHeader>
          {weekDates.map((weekDate) => (
            <WeekDayCell
              key={weekDate.toISOString()}
              $active={weekDate.toDateString() === selectedDate.toDateString()}
              onClick={() => setDate(new Date(weekDate))}
            >
              <strong>
                {["일", "월", "화", "수", "목", "금", "토"][weekDate.getDay()]}
              </strong>
              <span>{weekDate.getDate()}</span>
            </WeekDayCell>
          ))}
        </WeekHeader>

        <ScrollArea>
          <WeekEventList>
            {weekEvents.map((item) => (
              <div key={item.date.toISOString()}>
                <SectionTitle>
                  {item.date.getMonth() + 1}월 {item.date.getDate()}일
                </SectionTitle>

                {item.events.length > 0 ? (
                  item.events.map((event) => {
                    const color = getEventColor(event.color);

                    return (
                      <WeekEventItem
                        key={event.id}
                        $borderColor={color.border}
                        $lightBg={color.lightBg}
                        $darkBg={color.darkBg}
                        onClick={() => setDate(new Date(event.date))}
                      >
                        <div>
                          <strong>{event.title}</strong>
                          <span>
                            {event.time} · {event.duration}
                          </span>
                        </div>
                      </WeekEventItem>
                    );
                  })
                ) : (
                  <DayViewEmpty>등록된 일정이 없습니다.</DayViewEmpty>
                )}
              </div>
            ))}
          </WeekEventList>
        </ScrollArea>
      </WeekViewWrapper>
    );
  };

  const renderDayView = () => {
    return (
      <DayViewWrapper>
        <SectionTitle>{formatDayLabel(selectedDate)} 일정</SectionTitle>

        <ScrollArea>
          {dayEvents.length > 0 ? (
            <WeekEventList>
              {dayEvents.map((event) => {
                const color = getEventColor(event.color);

                return (
                  <WeekEventItem
                    key={event.id}
                    $borderColor={color.border}
                    $lightBg={color.lightBg}
                    $darkBg={color.darkBg}
                  >
                    <div>
                      <strong>{event.title}</strong>
                      <span>
                        {event.time} · {event.duration} · {event.location}
                      </span>
                    </div>
                  </WeekEventItem>
                );
              })}
            </WeekEventList>
          ) : (
            <DayViewEmpty>이 날짜에는 일정이 없습니다.</DayViewEmpty>
          )}
        </ScrollArea>
      </DayViewWrapper>
    );
  };

  useEffect(() => {
    const load = async () => {
      try {
        const apiData = await fetchSchedules();

        setEvents(apiData);
      } catch (err: unknown) {
        console.log(
          "API 실패 → 더미 유지",
          err instanceof Error ? err.message : err,
        );

        setEvents(initialEvents);
      }
    };

    load();
  }, []);

  return (
    <>
      <PageWrapper>
        <Header>
          <HeaderLeft>
            <Title>일정</Title>
            <Description>회의와 일정을 관리하세요</Description>
          </HeaderLeft>

          <HeaderRight>
            <ViewSelect
              value={view}
              onChange={(e) => setView(e.target.value as ViewType)}
            >
              <option value="month">월</option>
              <option value="week">주</option>
              <option value="day">일</option>
            </ViewSelect>

            <AddButton type="button" onClick={handleOpenAddModal}>
              <Plus className="button-icon" />
              일정 추가
            </AddButton>
          </HeaderRight>
        </Header>

        <ContentGrid>
          <MainColumn>
            <MainCard $isMonthView={isMonthView}>
              {view === "month" && renderMonthView()}
              {view === "week" && renderWeekView()}
              {view === "day" && renderDayView()}
            </MainCard>

            {isMonthView && (
              <TodayCard>
                <SectionTitle>오늘의 일정</SectionTitle>

                <ScrollArea>
                  {todayEvents.length > 0 ? (
                    <EventList>
                      {todayEvents.map((event) => {
                        const color = getEventColor(event.color);

                        return (
                          <EventCard
                            key={event.id}
                            $borderColor={color.border}
                            $lightBg={color.lightBg}
                            $darkBg={color.darkBg}
                          >
                            <EventTop>
                              <EventTitle>{event.title}</EventTitle>
                              <EventTypeBadge>{event.type}</EventTypeBadge>
                            </EventTop>

                            <EventMetaList>
                              <EventMetaItem>
                                <Clock className="meta-icon" />
                                <span>
                                  {event.time} ({event.duration})
                                </span>
                              </EventMetaItem>

                              <EventMetaItem>
                                {event.location === "온라인" ? (
                                  <>
                                    <Video className="meta-icon" />
                                    <span>{event.location}</span>
                                  </>
                                ) : (
                                  <>
                                    <MapPin className="meta-icon" />
                                    <span>{event.location}</span>
                                  </>
                                )}
                              </EventMetaItem>

                              <EventMetaItem>
                                <Users className="meta-icon" />
                                <span>{event.attendees}명</span>
                              </EventMetaItem>
                            </EventMetaList>
                          </EventCard>
                        );
                      })}
                    </EventList>
                  ) : (
                    <DayViewEmpty>선택한 날짜에 일정이 없습니다.</DayViewEmpty>
                  )}
                </ScrollArea>
              </TodayCard>
            )}
          </MainColumn>

          <SideColumn>
            <UpcomingCard $isMonthView={isMonthView}>
              <SectionTitle>다가오는 일정</SectionTitle>

              <UpcomingList>
                {upcomingEvents.map((event, index) => (
                  <div key={event.id}>
                    <UpcomingItem>
                      <UpcomingTop>
                        <UpcomingDateBox>
                          <UpcomingMonth>
                            {new Date(event.date).getMonth() + 1}월
                          </UpcomingMonth>
                          <UpcomingDay>
                            {new Date(event.date).getDate()}
                          </UpcomingDay>
                        </UpcomingDateBox>

                        <UpcomingContent>
                          <UpcomingEventTitle>{event.title}</UpcomingEventTitle>
                          <UpcomingEventTime>{event.time}</UpcomingEventTime>
                        </UpcomingContent>
                      </UpcomingTop>

                      <UpcomingMeta>
                        <UpcomingMetaItem>
                          {event.location === "온라인" ? (
                            <>
                              <Video className="meta-icon small" />
                              <span>{event.location}</span>
                            </>
                          ) : (
                            <>
                              <MapPin className="meta-icon small" />
                              <span>{event.location}</span>
                            </>
                          )}
                        </UpcomingMetaItem>

                        <UpcomingMetaItem>
                          <Users className="meta-icon small" />
                          <span>{event.attendees}명 참석</span>
                        </UpcomingMetaItem>
                      </UpcomingMeta>
                    </UpcomingItem>

                    {index !== upcomingEvents.length - 1 && <Divider />}
                  </div>
                ))}
              </UpcomingList>
            </UpcomingCard>
          </SideColumn>
        </ContentGrid>
      </PageWrapper>

      {isAddModalOpen && (
        <ModalOverlay onClick={handleCloseAddModal}>
          <ModalCard onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <div>
                <ModalTitle>일정 추가</ModalTitle>
                <ModalDescription>
                  제목, 날짜, 시간 등을 입력해 일정을 추가할 수 있습니다.
                </ModalDescription>
              </div>

              <ModalCloseButton type="button" onClick={handleCloseAddModal}>
                <X className="close-icon" />
              </ModalCloseButton>
            </ModalHeader>

            <ModalBody>
              <ModalField>
                <ModalLabel>일정 제목</ModalLabel>
                <ModalInput
                  value={form.title}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                  placeholder="예: 주간 팀 회의"
                />
              </ModalField>

              <ModalField>
                <ModalLabel>날짜</ModalLabel>
                <ModalInput
                  type="date"
                  value={form.date}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      date: e.target.value,
                    }))
                  }
                />
              </ModalField>

              <ModalField>
                <ModalLabel>시간</ModalLabel>
                <ModalInput
                  type="time"
                  value={form.time}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      time: e.target.value,
                    }))
                  }
                />
              </ModalField>

              <ModalField>
                <ModalLabel>소요 시간</ModalLabel>
                <ModalInput
                  value={form.duration}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      duration: e.target.value,
                    }))
                  }
                  placeholder="예: 1시간"
                />
              </ModalField>

              <ModalField>
                <ModalLabel>유형</ModalLabel>
                <ModalInput
                  as="select"
                  value={form.type}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      type: e.target.value,
                    }))
                  }
                >
                  <option value="meeting">meeting</option>
                  <option value="review">review</option>
                  <option value="one-on-one">one-on-one</option>
                  <option value="all-hands">all-hands</option>
                </ModalInput>
              </ModalField>

              <ModalField>
                <ModalLabel>장소</ModalLabel>
                <ModalInput
                  value={form.location}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      location: e.target.value,
                    }))
                  }
                  placeholder="예: 회의실 A 또는 온라인"
                />
              </ModalField>

              <ModalField>
                <ModalLabel>참석 인원</ModalLabel>
                <ModalInput
                  type="number"
                  min="1"
                  value={form.attendees}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      attendees: e.target.value,
                    }))
                  }
                />
              </ModalField>

              <ModalField>
                <ModalLabel>색상</ModalLabel>
                <ModalInput
                  as="select"
                  value={form.color}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      color: e.target.value,
                    }))
                  }
                >
                  <option value="blue">blue</option>
                  <option value="green">green</option>
                  <option value="purple">purple</option>
                  <option value="orange">orange</option>
                  <option value="red">red</option>
                </ModalInput>
              </ModalField>
            </ModalBody>

            <ModalFooter>
              <ModalSecondaryButton type="button" onClick={handleCloseAddModal}>
                취소
              </ModalSecondaryButton>

              <ModalPrimaryButton type="button" onClick={handleAddEvent}>
                추가하기
              </ModalPrimaryButton>
            </ModalFooter>
          </ModalCard>
        </ModalOverlay>
      )}
    </>
  );
}

function dateToInputValue(targetDate: Date) {
  const year = targetDate.getFullYear();
  const month = `${targetDate.getMonth() + 1}`.padStart(2, "0");
  const day = `${targetDate.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}
