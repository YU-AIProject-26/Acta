import { AUTH_TOKEN_STORAGE_KEY } from "../api/auth_api";

export type TodoStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED";
export type TodoPriority = "LOW" | "MEDIUM" | "URGENT";
export type TodoSortBy = "dueDate" | "priority" | "createdAt";

export interface TodoListRequestParams {
  q?: string;
  status?: TodoStatus;
  priority?: TodoPriority;
  assigneeName?: string;
  sortBy?: TodoSortBy;
}

export interface TodoItem {
  id: number;
  meetingId: number;
  title: string;
  sourceTitle: string;
  createdByName: string;
  assigneeName: string;
  dueDate: string;
  status: TodoStatus;
  priority: TodoPriority;
}

export interface TodoListResponse {
  totalCount: number;
  completedCount: number;
  inProgressCount: number;
  urgentCount: number;
  items: TodoItem[];
}

export interface TodoCreateRequest {
  meetingId: number;
  title: string;
  sourceTitle: string;
  createdByName: string;
  assigneeName: string;
  dueDate: string;
  status: TodoStatus;
  priority: TodoPriority;
}

export type TodoUpdateRequest = Partial<{
  title: string;
  sourceTitle: string;
  createdByName: string;
  assigneeName: string;
  dueDate: string;
  status: TodoStatus;
  priority: TodoPriority;
}>;

export type TodoFilterType = "all" | "pending" | "completed";
export type TodoUiSortType = "due-date" | "priority" | "status" | "recent";
export type TodoUiStatus = "진행중" | "대기중" | "완료";
export type TodoUiPriority = "high" | "medium" | "low";

export interface TodoViewItem {
  id: number;
  meetingId: number;
  createdByName: string;
  text: string;
  assignee: string;
  dueDate: string;
  priority: TodoUiPriority;
  completed: boolean;
  source: string;
  status: TodoUiStatus;
  previousStatus?: Exclude<TodoUiStatus, "완료">;
}

export interface TodoFormState {
  text: string;
  assignee: string;
  dueDate: string;
  priority: TodoUiPriority;
  source: string;
  status: Exclude<TodoUiStatus, "완료">;
}

export const todoPriorityOrder: Record<TodoUiPriority, number> = {
  high: 0,
  medium: 1,
  low: 2,
};

export const todoStatusOrder: Record<TodoUiStatus, number> = {
  진행중: 0,
  대기중: 1,
  완료: 2,
};

export const apiPriorityToUi: Record<TodoPriority, TodoUiPriority> = {
  URGENT: "high",
  MEDIUM: "medium",
  LOW: "low",
};

export const uiPriorityToApi: Record<TodoUiPriority, TodoPriority> = {
  high: "URGENT",
  medium: "MEDIUM",
  low: "LOW",
};

export const apiStatusToUi: Record<TodoStatus, TodoUiStatus> = {
  IN_PROGRESS: "진행중",
  PENDING: "대기중",
  COMPLETED: "완료",
};

export const uiStatusToApi: Record<TodoUiStatus, TodoStatus> = {
  진행중: "IN_PROGRESS",
  대기중: "PENDING",
  완료: "COMPLETED",
};

export const todoUiSortToApiSortBy: Partial<
  Record<TodoUiSortType, TodoSortBy>
> = {
  "due-date": "dueDate",
  priority: "priority",
  recent: "createdAt",
};

export const mapApiTodoToViewItem = (todo: TodoItem): TodoViewItem => {
  const status = apiStatusToUi[todo.status];

  return {
    id: todo.id,
    meetingId: todo.meetingId,
    createdByName: todo.createdByName,
    text: todo.title,
    assignee: todo.assigneeName,
    dueDate: todo.dueDate,
    priority: apiPriorityToUi[todo.priority],
    completed: todo.status === "COMPLETED",
    source: todo.sourceTitle,
    status,
    previousStatus: status === "완료" ? "진행중" : status,
  };
};

export const getTodoListStatusParam = (
  filter: TodoFilterType,
): TodoStatus | undefined => {
  if (filter === "completed") return "COMPLETED";
  return undefined;
};

const getAuthHeaders = () => {
  const token = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);

  return {
    Accept: "application/json",
    ...(token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {}),
  };
};

const fallbackTodos: TodoItem[] = [
  {
    id: 1,
    meetingId: 1,
    title: "Q2 마케팅 캠페인 상세 기획안 작성",
    sourceTitle: "주간 마케팅 전략 회의",
    createdByName: "김철수",
    assigneeName: "김철수",
    dueDate: "2026-04-15",
    status: "IN_PROGRESS",
    priority: "URGENT",
  },
  {
    id: 2,
    meetingId: 1,
    title: "인플루언서 섭외 리스트 작성 및 컨택",
    sourceTitle: "주간 마케팅 전략 회의",
    createdByName: "이영희",
    assigneeName: "이영희",
    dueDate: "2026-04-12",
    status: "PENDING",
    priority: "URGENT",
  },
  {
    id: 3,
    meetingId: 1,
    title: "디지털 광고 예산 배분 시뮬레이션",
    sourceTitle: "주간 마케팅 전략 회의",
    createdByName: "박민수",
    assigneeName: "박민수",
    dueDate: "2026-04-10",
    status: "COMPLETED",
    priority: "MEDIUM",
  },
  {
    id: 4,
    meetingId: 1,
    title: "로열티 프로그램 개선안 검토",
    sourceTitle: "주간 마케팅 전략 회의",
    createdByName: "최지은",
    assigneeName: "최지은",
    dueDate: "2026-04-18",
    status: "IN_PROGRESS",
    priority: "MEDIUM",
  },
  {
    id: 5,
    meetingId: 1,
    title: "경쟁사 마케팅 전략 분석 리포트",
    sourceTitle: "주간 마케팅 전략 회의",
    createdByName: "정현우",
    assigneeName: "정현우",
    dueDate: "2026-04-14",
    status: "PENDING",
    priority: "URGENT",
  },
  {
    id: 6,
    meetingId: 2,
    title: "제품 로드맵 문서 업데이트",
    sourceTitle: "제품 로드맵 리뷰",
    createdByName: "이영희",
    assigneeName: "이영희",
    dueDate: "2026-04-20",
    status: "PENDING",
    priority: "MEDIUM",
  },
  {
    id: 7,
    meetingId: 3,
    title: "고객 피드백 리포트 작성",
    sourceTitle: "고객 피드백 세션",
    createdByName: "박민수",
    assigneeName: "박민수",
    dueDate: "2026-04-08",
    status: "COMPLETED",
    priority: "URGENT",
  },
  {
    id: 8,
    meetingId: 4,
    title: "디자인 시스템 가이드 업데이트",
    sourceTitle: "디자인 시스템 리뷰",
    createdByName: "최지은",
    assigneeName: "최지은",
    dueDate: "2026-04-16",
    status: "PENDING",
    priority: "LOW",
  },
];

const buildTodoListResponse = (items: TodoItem[]): TodoListResponse => ({
  totalCount: items.length,
  completedCount: items.filter((todo) => todo.status === "COMPLETED").length,
  inProgressCount: items.filter((todo) => todo.status === "IN_PROGRESS").length,
  urgentCount: items.filter((todo) => todo.priority === "URGENT").length,
  items,
});

export async function fetchTodos(
  params?: TodoListRequestParams,
): Promise<TodoListResponse> {
  try {
    const query = new URLSearchParams();
    if (params?.q) query.append("q", params.q);
    if (params?.status) query.append("status", params.status);
    if (params?.priority) query.append("priority", params.priority);
    if (params?.assigneeName) query.append("assigneeName", params.assigneeName);
    if (params?.sortBy) query.append("sortBy", params.sortBy);

    const response = await fetch(`/api/todos?${query.toString()}`, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Todo list request failed (${response.status})`);
    }

    return response.json();
  } catch {
    return buildTodoListResponse(fallbackTodos);
  }
}

export async function createTodo(
  request: TodoCreateRequest,
): Promise<TodoItem> {
  const response = await fetch("/api/todos", {
    method: "POST",
    headers: {
      ...getAuthHeaders(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (response.status === 404) {
    throw new Error("Meeting not found");
  }

  if (!response.ok) {
    throw new Error(`Todo create request failed (${response.status})`);
  }

  return response.json();
}

export async function updateTodo(
  todoId: number,
  request: TodoUpdateRequest,
): Promise<TodoItem> {
  const response = await fetch(`/api/todos/${todoId}`, {
    method: "PATCH",
    headers: {
      ...getAuthHeaders(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (response.status === 404) {
    throw new Error("Todo not found");
  }

  if (!response.ok) {
    throw new Error(`Todo update request failed (${response.status})`);
  }

  return response.json();
}

export async function deleteTodo(todoId: number): Promise<void> {
  const response = await fetch(`/api/todos/${todoId}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });

  if (response.status === 404) {
    throw new Error("Todo not found");
  }

  if (response.status !== 204) {
    throw new Error(`Todo delete request failed (${response.status})`);
  }
}
