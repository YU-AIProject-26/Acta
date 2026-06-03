import { authenticatedFetch } from "./authenticatedFetch";

export type MeetingStatus = "PROCESSING" | "COMPLETED" | "FAILED" | "UPLOADED";

export interface MeetingListRequestParams {
  q?: string;
  status?: MeetingStatus;
}

export interface MeetingListItem {
  id: number;
  title: string;
  oneLineSummary: string;
  meetingAt: string;
  durationMinutes: number;
  folderName: string;
  status: MeetingStatus;
  tags: string[];
  audioUrl: string;
}

export interface MeetingDetailResponse {
  id: number;
  title: string;
  description: string;
  oneLineSummary: string;
  meetingAt: string;
  durationMinutes: number;
  participantCount: number;
  folderName: string;
  tags: string[];
  status: MeetingStatus;
  audioUrl: string;
}

export type MeetingUpdateRequest = Partial<{
  title: string;
  description: string;
  oneLineSummary: string;
  meetingAt: string;
  durationMinutes: number;
  participantCount: number;
  folderName: string;
  tags: string[];
  status: MeetingStatus;
}>;

const dummyMeetingList: MeetingListItem[] = [
  {
    id: 1,
    title: "주간 마케팅 전략 회의",
    oneLineSummary: "Q2 마케팅 캠페인 전략 수립 및 예산 심의",
    meetingAt: "2026-04-07T14:00:00Z",
    durationMinutes: 83,
    folderName: "마케팅팀",
    status: "COMPLETED",
    tags: ["마케팅", "전략"],
    audioUrl: "/audio/meeting-1.mp3",
  },
  {
    id: 2,
    title: "제품 로드맵 리뷰",
    oneLineSummary: "신규 기능 우선순위와 출시 일정을 점검합니다.",
    meetingAt: "2026-04-06T10:00:00Z",
    durationMinutes: 135,
    folderName: "제품팀",
    status: "PROCESSING",
    tags: ["제품", "개발"],
    audioUrl: "/audio/meeting-2.mp3",
  },
  {
    id: 3,
    title: "고객 피드백 세션",
    oneLineSummary: "주요 고객 요청사항을 수집하고 우선순위를 결정합니다.",
    meetingAt: "2026-04-05T16:00:00Z",
    durationMinutes: 45,
    folderName: "고객지원",
    status: "COMPLETED",
    tags: ["고객", "피드백"],
    audioUrl: "/audio/meeting-3.mp3",
  },
  {
    id: 4,
    title: "디자인 시스템 리뷰",
    oneLineSummary: "새로운 디자인 컴포넌트를 검토하고 승인합니다.",
    meetingAt: "2026-04-04T11:00:00Z",
    durationMinutes: 60,
    folderName: "디자인팀",
    status: "UPLOADED",
    tags: ["디자인", "UI/UX"],
    audioUrl: "/audio/meeting-4.mp3",
  },
  {
    id: 5,
    title: "주간 전체 회의",
    oneLineSummary:
      "회의 분석 중 오류가 발생했습니다. 파일을 다시 업로드해주세요.",
    meetingAt: "2026-04-03T15:00:00Z",
    durationMinutes: 30,
    folderName: "전체",
    status: "FAILED",
    tags: ["전체"],
    audioUrl: "/audio/meeting-5.mp3",
  },
];

const dummyMeetingDetail: MeetingDetailResponse = {
  id: 1,
  title: "주간 마케팅 전략 회의",
  description: "Q2 마케팅 캠페인 전략 수립 및 예산 심의를 진행했습니다.",
  oneLineSummary: "Q2 마케팅 캠페인 전략 수립 및 예산 심의",
  meetingAt: "2026-04-07T14:00:00Z",
  durationMinutes: 83,
  participantCount: 5,
  folderName: "마케팅팀",
  tags: ["마케팅", "전략"],
  status: "COMPLETED",
  audioUrl: "/audio/meeting-1.mp3",
};

// --- Extended types for meeting detail and analysis (from backend spec) ---
export interface TranscriptSegment {
  id: number;
  speakerName: string;
  startedAtSeconds: number;
  text: string;
  keyStatement?: boolean;
}

export interface ParticipationStat {
  speakerName: string;
  percentage: number;
}

export interface FocusMetric {
  timeRange: string;
  score: number;
}

export interface TodoApiItem {
  id: number;
  meetingId: number;
  title: string;
  sourceTitle?: string;
  createdByName?: string;
  assigneeName?: string;
  dueDate?: string;
  status?: string;
  priority?: string;
}

export interface ScheduleApiItem {
  title: string;
  startsAt: string;
}

export interface MeetingFullDetail extends MeetingDetailResponse {
  summary?: string;
  efficiencyScore?: number;
  efficiencyFeedback?: string;
  keyPoints?: string[];
  transcripts?: TranscriptSegment[];
  participationStats?: ParticipationStat[];
  focusMetrics?: FocusMetric[];
  todos?: TodoApiItem[];
  schedules?: ScheduleApiItem[];
  participantSummary?: string;
}

const dummyFullDetail: MeetingFullDetail = {
  ...dummyMeetingDetail,
  summary: "Q2 마케팅 캠페인 전략 수립 및 예산 심의를 진행했습니다.",
  efficiencyScore: 82,
  efficiencyFeedback: "회의가 효율적으로 진행되었습니다.",
  keyPoints: [
    "Q2 목표: 신규 고객 5,000명 확보",
    "디지털 마케팅 예산 1.8억원 배정",
  ],
  transcripts: [
    {
      id: 1,
      speakerName: "김철수",
      startedAtSeconds: 135,
      text: "안녕하세요..",
      keyStatement: true,
    },
    {
      id: 2,
      speakerName: "이영희",
      startedAtSeconds: 332,
      text: "지난 분기 데이터..",
      keyStatement: false,
    },
  ],
  participationStats: [
    { speakerName: "김철수", percentage: 28 },
    { speakerName: "이영희", percentage: 22 },
  ],
  focusMetrics: [
    { timeRange: "0-15분", score: 85 },
    { timeRange: "15-30분", score: 92 },
  ],
  todos: [
    {
      id: 1,
      meetingId: 1,
      title: "Q2 마케팅 캠페인 상세 기획안 작성",
      createdByName: "김철수",
      assigneeName: "김철수",
      dueDate: "2026-04-15",
      status: "open",
      priority: "high",
    },
  ],
  schedules: [
    { title: "인플루언서 대행사 미팅", startsAt: "2026-04-20T14:00:00" },
  ],
  participantSummary: "김철수, 이영희, 박민수",
};

export async function fetchMeetings(
  params?: MeetingListRequestParams,
): Promise<MeetingListItem[]> {
  try {
    const query = new URLSearchParams();
    if (params?.q) query.append("q", params.q);
    if (params?.status) query.append("status", params.status);

    const response = await authenticatedFetch(
      `/api/meetings?${query.toString()}`,
      {
        method: "GET",
      },
    );

    if (response.ok) {
      return await response.json();
    }
    console.warn(
      `회의 목록 조회 API 오류 (${response.status}), 기존 더미 로직으로 우회합니다.`,
    );
  } catch (error) {
    console.warn(
      "백엔드 서버가 꺼져있어 기존 더미 회의 목록으로 대체합니다.",
      error,
    );
  }

  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(dummyMeetingList);
    }, 600);
  });
}

export async function createMeeting(
  formData: FormData,
): Promise<MeetingDetailResponse> {
  try {
    const response = await authenticatedFetch("/api/meetings", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      return await response.json();
    }
    console.warn(
      `회의 생성 API 오류 (${response.status}), 기존 더미 생성 데이터로 우회합니다.`,
    );
  } catch (error) {
    console.warn(
      "백엔드 서버가 꺼져있어 기존 더미 생성 로직으로 대체합니다.",
      error,
    );
  }

  // 기존 반환 방식 100% 동일 유지
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(dummyMeetingDetail);
    }, 900);
  });
}

export async function updateMeeting(
  meetingId: number,
  update: MeetingUpdateRequest,
): Promise<MeetingDetailResponse> {
  try {
    const response = await authenticatedFetch(`/api/meetings/${meetingId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update),
    });
    if (response.ok) {
      return await response.json();
    }
    console.warn(
      `회의 수정 API 오류 (${response.status}), 기존 더미 수정 데이터로 우회합니다.`,
    );
  } catch (error) {
    console.warn(
      "백엔드 서버가 꺼져있어 기존 더미 수정 로직으로 대체합니다.",
      error,
    );
  }

  // 기존 반환 방식 100% 동일 유지
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({
        ...dummyMeetingDetail,
        ...update,
      });
    }, 700);
  });
}

export async function fetchMeetingDetail(
  meetingId: number,
): Promise<MeetingFullDetail> {
  try {
    const response = await authenticatedFetch(`/api/meetings/${meetingId}`, {
      method: "GET",
    });

    if (response.ok) {
      return await response.json();
    }
    console.warn(
      `회의 상세 조회 API 오류 (${response.status}), 기존 더미 상세 데이터로 우회합니다.`,
    );
  } catch (error) {
    console.warn(
      "백엔드 서버가 꺼져있어 기존 더미 상세 로직으로 대체합니다.",
      error,
    );
  }

  // 기존 반환 방식 100% 동일 유지
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(dummyFullDetail), 600);
  });
}

export async function patchTranscript(
  meetingId: number,
  segmentId: number,
  update: { speakerName?: string; text?: string; keyStatement?: boolean },
): Promise<TranscriptSegment> {
  try {
    const response = await authenticatedFetch(
      `/api/meetings/${meetingId}/transcripts/${segmentId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(update),
      },
    );

    if (response.ok) {
      return await response.json();
    }
    console.warn(
      `대화 수정 API 오류 (${response.status}), 기존 더미 대화 수정 데이터로 우회합니다.`,
    );
  } catch (error) {
    console.warn(
      "백엔드 서버가 꺼져있어 기존 더미 대화 수정 로직으로 대체합니다.",
      error,
    );
  }

  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({
        id: segmentId,
        speakerName: update.speakerName ?? "unknown",
        startedAtSeconds: 0,
        text: update.text ?? "",
        keyStatement: !!update.keyStatement,
      });
    }, 300);
  });
}

// --- 아래 UI 데이터 포맷 로직 및 가공 함수 역시 원본과 100% 동일하게 보존됨 ---

export interface MeetingDetailPageMeeting {
  id: number;
  title: string;
  date: string;
  time: string;
  duration: string;
  totalSeconds: number;
  status: "completed";
  tags: string[];
}

export interface MeetingDetailPageTranscriptItem {
  id: number;
  speaker: string;
  time: string;
  text: string;
  highlight: boolean;
}

export interface MeetingDetailPageTodoItem {
  id: number;
  text: string;
  assignee: string;
  dueDate: string;
  priority: "high" | "medium";
  completed: boolean;
}

export interface MeetingDetailPageScheduleItem {
  id: number;
  title: string;
  date: string;
  time: string;
  attendees: string;
}

export interface MeetingDetailPageSummary {
  main: string;
  keyPoints: string[];
  insights: string;
  score: number;
}

export interface MeetingDetailPageEngagementItem {
  time: string;
  score: number;
}

export interface MeetingDetailPageData {
  meeting: MeetingDetailPageMeeting;
  participantCount: number;
  analysisLabel: string;
  audioUrl: string;
  summary: MeetingDetailPageSummary;
  transcriptItems: MeetingDetailPageTranscriptItem[];
  engagementData: MeetingDetailPageEngagementItem[];
  todoItems: MeetingDetailPageTodoItem[];
  schedules: MeetingDetailPageScheduleItem[];
}

function formatSecondsToTranscriptTime(seconds: number): string {
  const safeSeconds = Math.max(0, Math.floor(seconds));
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const secs = safeSeconds % 60;

  const padH = hours.toString().padStart(2, "0");
  const padM = minutes.toString().padStart(2, "0");
  const padS = secs.toString().padStart(2, "0");

  return `${padH}:${padM}:${padS}`;
}

function formatDuration(durationMinutes: number): string {
  const safeMinutes = Math.max(0, Math.floor(durationMinutes));
  const hours = Math.floor(safeMinutes / 60);
  const minutes = safeMinutes % 60;

  if (hours <= 0) {
    return `${minutes}분`;
  }
  if (minutes === 0) {
    return `${hours}시간`;
  }
  return `${hours}시간 ${minutes}분`;
}

function formatDatePart(input: string): string {
  const date = new Date(input);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  return date.toISOString().slice(0, 10);
}

function formatTimePart(input: string): string {
  const date = new Date(input);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  return `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
}

function mapAnalysisLabel(status: MeetingStatus): string {
  switch (status) {
    case "COMPLETED":
      return "분석완료";
    case "PROCESSING":
      return "분석중";
    case "FAILED":
      return "분석실패";
    case "UPLOADED":
      return "업로드됨";
    default:
      return "상태확인";
  }
}

export function formatMeetingDetailForPage(
  detail: MeetingFullDetail,
): MeetingDetailPageData {
  const transcriptItems = (detail.transcripts ?? []).map((transcript) => ({
    id: transcript.id,
    speaker: transcript.speakerName,
    time: formatSecondsToTranscriptTime(transcript.startedAtSeconds),
    text: transcript.text,
    highlight: !!transcript.keyStatement,
  }));

  const engagementData = (detail.focusMetrics ?? []).map((item) => ({
    time: item.timeRange,
    score: item.score,
  }));

  const todoItems = (detail.todos ?? []).map((todo) => ({
    id: todo.id,
    text: todo.title || todo.sourceTitle || "할 일",
    assignee: todo.assigneeName || todo.createdByName || "미정",
    dueDate: todo.dueDate ? formatDatePart(todo.dueDate) : "",
    priority:
      todo.priority?.toLowerCase() === "high" ||
      todo.priority?.toLowerCase() === "urgent"
        ? "high"
        : ("medium" as "high" | "medium"),
    completed: ["done", "completed", "closed"].includes(
      (todo.status ?? "").toLowerCase(),
    ),
  }));

  const schedules = (detail.schedules ?? []).map((schedule, index) => ({
    id: index + 1,
    title: schedule.title,
    date: formatDatePart(schedule.startsAt),
    time: formatTimePart(schedule.startsAt),
    attendees: detail.participantSummary || "참여자 정보 없음",
  }));

  const meetingAt = detail.meetingAt || new Date().toISOString();

  return {
    meeting: {
      id: detail.id,
      title: detail.title,
      date: formatDatePart(meetingAt),
      time: formatTimePart(meetingAt),
      duration: formatDuration(detail.durationMinutes),
      totalSeconds: Math.max(0, detail.durationMinutes * 60),
      status: "completed",
      tags: detail.tags ?? [],
    },
    participantCount: detail.participantCount,
    analysisLabel: mapAnalysisLabel(detail.status),
    audioUrl: detail.audioUrl,
    summary: {
      main: detail.summary || detail.oneLineSummary || detail.description || "",
      keyPoints: detail.keyPoints ?? [],
      insights: detail.efficiencyFeedback || "",
      score: detail.efficiencyScore ?? 0,
    },
    transcriptItems,
    engagementData,
    todoItems,
    schedules,
  };
}
export async function deleteMeeting(meetingId: number): Promise<void> {
  try {
    const response = await authenticatedFetch(`/api/meetings/${meetingId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      return;
    }

    console.warn(
      `회의 삭제 API 오류 (${response.status}), 더미 처리로 우회합니다.`,
    );
  } catch (error) {
    console.warn(
      "백엔드 서버가 꺼져있어 더미 삭제 로직으로 대체합니다.",
      error,
    );
  }

  // 더미 fallback (UI용)
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve();
    }, 300);
  });
}
