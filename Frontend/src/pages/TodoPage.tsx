import { useEffect, useMemo, useState } from "react";
import {
  Plus,
  Search,
  Filter,
  MoreVertical,
  Calendar,
  User,
  X,
} from "lucide-react";
import {
  PageWrapper,
  HeaderSection,
  HeaderLeft,
  HeaderTitle,
  HeaderDescription,
  AddButton,
  StatsGrid,
  StatCard,
  StatLabel,
  StatValue,
  FilterCard,
  FilterRow,
  SearchWrapper,
  SearchIcon,
  SearchInput,
  SelectWrapper,
  SelectIconBox,
  SelectElement,
  TodoListCard,
  TodoList,
  TodoItem,
  TodoMain,
  TodoCheckbox,
  TodoContent,
  TodoTopRow,
  TodoText,
  TodoSource,
  TodoRight,
  BadgeRow,
  PriorityBadge,
  StatusBadge,
  ActionMenuWrapper,
  ActionMenuButton,
  ActionMenu,
  ActionMenuItem,
  TodoMetaRow,
  TodoMetaItem,
  TodoMetaText,
  OverdueBadge,
  ModalOverlay,
  ModalCard,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  ModalBody,
  ModalGrid,
  ModalField,
  ModalLabel,
  ModalInput,
  ModalSelect,
  ModalActions,
  ModalCancelButton,
  ModalSubmitButton,
} from "./TodoPage.styles";
import {
  fetchTodos,
  mapApiTodoToViewItem,
  createTodo,
  updateTodo,
  deleteTodo,
  uiPriorityToApi,
  uiStatusToApi,
} from "../api/todo_api";
type FilterType = "all" | "pending" | "completed";
type SortType = "due-date" | "priority" | "status" | "recent";
type TodoStatus = "진행중" | "대기중" | "완료";

type Todo = {
  id: number;
  text: string;
  assignee: string;
  dueDate: string;
  priority: "high" | "medium" | "low";
  completed: boolean;
  source: string;
  status: TodoStatus;
  previousStatus?: Exclude<TodoStatus, "완료">;
};

const priorityOrder: Record<Todo["priority"], number> = {
  high: 0,
  medium: 1,
  low: 2,
};

const statusOrder: Record<Todo["status"], number> = {
  진행중: 0,
  대기중: 1,
  완료: 2,
};

export default function TodoPage() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [assigneeFilter, setAssigneeFilter] = useState("all-assignee");
  const [sortType, setSortType] = useState<SortType>("due-date");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);

  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: "Q2 마케팅 캠페인 상세 기획안 작성",
      assignee: "김철수",
      dueDate: "2026-04-15",
      priority: "high",
      completed: false,
      source: "주간 마케팅 전략 회의",
      status: "진행중",
      previousStatus: "진행중",
    },
    {
      id: 2,
      text: "인플루언서 섭외 리스트 작성 및 컨택",
      assignee: "이영희",
      dueDate: "2026-04-12",
      priority: "high",
      completed: false,
      source: "주간 마케팅 전략 회의",
      status: "대기중",
      previousStatus: "대기중",
    },
    {
      id: 3,
      text: "디지털 광고 예산 배분 시뮬레이션",
      assignee: "박민수",
      dueDate: "2026-04-10",
      priority: "medium",
      completed: true,
      source: "주간 마케팅 전략 회의",
      status: "완료",
      previousStatus: "진행중",
    },
    {
      id: 4,
      text: "로열티 프로그램 개선안 검토",
      assignee: "최지은",
      dueDate: "2026-04-18",
      priority: "medium",
      completed: false,
      source: "주간 마케팅 전략 회의",
      status: "진행중",
      previousStatus: "진행중",
    },
    {
      id: 5,
      text: "경쟁사 마케팅 전략 분석 리포트",
      assignee: "정현우",
      dueDate: "2026-04-14",
      priority: "high",
      completed: false,
      source: "주간 마케팅 전략 회의",
      status: "대기중",
      previousStatus: "대기중",
    },
    {
      id: 6,
      text: "제품 로드맵 문서 업데이트",
      assignee: "이영희",
      dueDate: "2026-04-20",
      priority: "medium",
      completed: false,
      source: "제품 로드맵 리뷰",
      status: "대기중",
      previousStatus: "대기중",
    },
    {
      id: 7,
      text: "고객 피드백 리포트 작성",
      assignee: "박민수",
      dueDate: "2026-04-08",
      priority: "high",
      completed: true,
      source: "고객 피드백 세션",
      status: "완료",
      previousStatus: "진행중",
    },
    {
      id: 8,
      text: "디자인 시스템 가이드 업데이트",
      assignee: "최지은",
      dueDate: "2026-04-16",
      priority: "low",
      completed: false,
      source: "디자인 시스템 리뷰",
      status: "대기중",
      previousStatus: "대기중",
    },
  ]);

  const emptyTodoForm = {
    text: "",
    assignee: "",
    dueDate: "",
    priority: "medium" as "high" | "medium" | "low",
    source: "",
    status: "대기중" as Exclude<TodoStatus, "완료">,
  };

  const [newTodo, setNewTodo] = useState(emptyTodoForm);
  const [editTodo, setEditTodo] = useState(emptyTodoForm);
  useEffect(() => {
    let isMounted = true;

    fetchTodos().then((response) => {
      if (!isMounted) return;
      setTodos(response.items.map(mapApiTodoToViewItem));
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const assigneeOptions = useMemo(() => {
    const uniqueAssignees = Array.from(
      new Set(
        todos
          .map((todo) => todo.assignee.trim())
          .filter((assignee) => assignee.length > 0),
      ),
    ).sort((a, b) => a.localeCompare(b, "ko-KR"));

    return ["all-assignee", ...uniqueAssignees];
  }, [todos]);

  const openAddModal = () => {
    setNewTodo(emptyTodoForm);
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const openEditModal = (todo: Todo) => {
    setEditingTodoId(todo.id);
    setEditTodo({
      text: todo.text,
      assignee: todo.assignee,
      dueDate: todo.dueDate,
      priority: todo.priority,
      source: todo.source,
      status:
        todo.status === "완료"
          ? (todo.previousStatus ?? "진행중")
          : todo.status,
    });
    setOpenMenuId(null);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditingTodoId(null);
  };

  const handleAddTodo = async () => {
    if (
      !newTodo.text.trim() ||
      !newTodo.assignee.trim() ||
      !newTodo.dueDate ||
      !newTodo.source.trim()
    ) {
      return;
    }

    try {
      const createdTodo = await createTodo({
        meetingId: 0,
        title: newTodo.text.trim(),
        sourceTitle: newTodo.source.trim(),
        createdByName: newTodo.assignee.trim(),
        assigneeName: newTodo.assignee.trim(),
        dueDate: newTodo.dueDate,
        status: uiStatusToApi[newTodo.status],
        priority: uiPriorityToApi[newTodo.priority],
      });

      setTodos((prev) => [mapApiTodoToViewItem(createdTodo), ...prev]);

      closeAddModal();
    } catch (error) {
      console.error("Todo 생성 실패:", error);
    }
  };

  const handleEditTodo = async () => {
    if (
      editingTodoId === null ||
      !editTodo.text.trim() ||
      !editTodo.assignee.trim() ||
      !editTodo.dueDate ||
      !editTodo.source.trim()
    ) {
      return;
    }

    try {
      const updatedTodo = await updateTodo(editingTodoId, {
        title: editTodo.text.trim(),
        sourceTitle: editTodo.source.trim(),
        createdByName: editTodo.assignee.trim(),
        assigneeName: editTodo.assignee.trim(),
        dueDate: editTodo.dueDate,
        status: uiStatusToApi[editTodo.status],
        priority: uiPriorityToApi[editTodo.priority],
      });

      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editingTodoId ? mapApiTodoToViewItem(updatedTodo) : todo,
        ),
      );

      closeEditModal();
    } catch (error) {
      console.error("Todo 수정 실패:", error);
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id);

      setTodos((prev) => prev.filter((todo) => todo.id !== id));

      setOpenMenuId(null);
    } catch (error) {
      console.error("Todo 삭제 실패:", error);
    }
  };

  const toggleTodoCompleted = async (id: number) => {
    const target = todos.find((t) => t.id === id);
    if (!target) return;

    const newStatus = target.status === "완료" ? "PENDING" : "COMPLETED";

    try {
      const updated = await updateTodo(id, {
        status: newStatus,
      });

      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? mapApiTodoToViewItem(updated) : todo,
        ),
      );
    } catch (err) {
      console.error("todo 상태 업데이트 실패:", err);
    }
  };

  const stats = {
    total: todos.length,
    completed: todos.filter((todo) => todo.completed).length,
    pending: todos.filter((todo) => !todo.completed).length,
    highPriority: todos.filter(
      (todo) => todo.priority === "high" && !todo.completed,
    ).length,
  };

  const isOverdue = (dueDate: string, completed: boolean) => {
    if (completed) return false;
    return new Date(dueDate) < new Date();
  };

  const formatKoreanDate = (dueDate: string) => {
    return new Date(dueDate).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const filteredTodos = useMemo(() => {
    let result = [...todos];

    if (filter === "completed") {
      result = result.filter((todo) => todo.completed);
    } else if (filter === "pending") {
      result = result.filter((todo) => !todo.completed);
    }

    if (assigneeFilter !== "all-assignee") {
      result = result.filter((todo) => todo.assignee === assigneeFilter);
    }

    const trimmedKeyword = searchKeyword.trim().toLowerCase();
    if (trimmedKeyword) {
      result = result.filter((todo) => {
        return (
          todo.text.toLowerCase().includes(trimmedKeyword) ||
          todo.assignee.toLowerCase().includes(trimmedKeyword) ||
          todo.source.toLowerCase().includes(trimmedKeyword) ||
          todo.status.toLowerCase().includes(trimmedKeyword)
        );
      });
    }

    result.sort((a, b) => {
      if (sortType === "due-date") {
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      }

      if (sortType === "priority") {
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }

      if (sortType === "status") {
        return statusOrder[a.status] - statusOrder[b.status];
      }

      return b.id - a.id;
    });

    return result;
  }, [todos, filter, assigneeFilter, sortType, searchKeyword]);

  return (
    <>
      <PageWrapper>
        <HeaderSection>
          <HeaderLeft>
            <HeaderTitle>Todo</HeaderTitle>
            <HeaderDescription>
              회의에서 생성된 실행 항목을 관리하세요
            </HeaderDescription>
          </HeaderLeft>

          <AddButton type="button" onClick={openAddModal}>
            <Plus className="button-icon" />
            Todo 추가
          </AddButton>
        </HeaderSection>

        <StatsGrid>
          <StatCard>
            <StatLabel>전체 Todo</StatLabel>
            <StatValue $variant="default">{stats.total}</StatValue>
          </StatCard>

          <StatCard>
            <StatLabel>완료</StatLabel>
            <StatValue $variant="muted">{stats.completed}</StatValue>
          </StatCard>

          <StatCard>
            <StatLabel>진행중</StatLabel>
            <StatValue $variant="accent">{stats.pending}</StatValue>
          </StatCard>

          <StatCard>
            <StatLabel>긴급</StatLabel>
            <StatValue $variant="danger">{stats.highPriority}</StatValue>
          </StatCard>
        </StatsGrid>

        <FilterCard>
          <FilterRow>
            <SearchWrapper>
              <SearchIcon>
                <Search className="search-icon" />
              </SearchIcon>
              <SearchInput
                placeholder="Todo 검색..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
            </SearchWrapper>

            <SelectWrapper>
              <SelectIconBox>
                <Filter className="select-icon" />
              </SelectIconBox>
              <SelectElement
                value={filter}
                onChange={(e) => setFilter(e.target.value as FilterType)}
              >
                <option value="all">전체</option>
                <option value="pending">진행중</option>
                <option value="completed">완료</option>
              </SelectElement>
            </SelectWrapper>

            <SelectWrapper>
              <SelectIconBox>
                <User className="select-icon" />
              </SelectIconBox>
              <SelectElement
                value={assigneeFilter}
                onChange={(e) => setAssigneeFilter(e.target.value)}
              >
                {assigneeOptions.map((assignee) => (
                  <option key={assignee} value={assignee}>
                    {assignee === "all-assignee" ? "모든 담당자" : assignee}
                  </option>
                ))}
              </SelectElement>
            </SelectWrapper>

            <SelectWrapper>
              <SelectElement
                value={sortType}
                onChange={(e) => setSortType(e.target.value as SortType)}
              >
                <option value="due-date">마감일순</option>
                <option value="priority">우선순위순</option>
                <option value="status">상태순</option>
                <option value="recent">최신순</option>
              </SelectElement>
            </SelectWrapper>
          </FilterRow>
        </FilterCard>

        <TodoListCard>
          <TodoList>
            {filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                $overdue={isOverdue(todo.dueDate, todo.completed)}
              >
                <TodoMain>
                  <TodoCheckbox
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodoCompleted(todo.id)}
                  />

                  <TodoContent>
                    <TodoTopRow>
                      <div>
                        <TodoText $completed={todo.completed}>
                          {todo.text}
                        </TodoText>
                        <TodoSource>출처: {todo.source}</TodoSource>
                      </div>

                      <TodoRight>
                        <BadgeRow>
                          <PriorityBadge $priority={todo.priority}>
                            {todo.priority === "high"
                              ? "긴급"
                              : todo.priority === "medium"
                                ? "보통"
                                : "낮음"}
                          </PriorityBadge>

                          <StatusBadge $status={todo.status}>
                            {todo.status}
                          </StatusBadge>
                        </BadgeRow>

                        <ActionMenuWrapper>
                          <ActionMenuButton
                            type="button"
                            onClick={() =>
                              setOpenMenuId((prev) =>
                                prev === todo.id ? null : todo.id,
                              )
                            }
                          >
                            <MoreVertical className="menu-icon" />
                          </ActionMenuButton>

                          {openMenuId === todo.id && (
                            <ActionMenu>
                              <ActionMenuItem
                                onClick={() => openEditModal(todo)}
                              >
                                수정하기
                              </ActionMenuItem>
                              <ActionMenuItem
                                $danger
                                onClick={() => handleDeleteTodo(todo.id)}
                              >
                                삭제하기
                              </ActionMenuItem>
                            </ActionMenu>
                          )}
                        </ActionMenuWrapper>
                      </TodoRight>
                    </TodoTopRow>

                    <TodoMetaRow>
                      <TodoMetaItem>
                        <User className="meta-icon" />
                        <TodoMetaText>{todo.assignee}</TodoMetaText>
                      </TodoMetaItem>

                      <TodoMetaItem>
                        <Calendar className="meta-icon" />
                        <TodoMetaText
                          $overdue={isOverdue(todo.dueDate, todo.completed)}
                        >
                          {formatKoreanDate(todo.dueDate)}
                        </TodoMetaText>

                        {isOverdue(todo.dueDate, todo.completed) && (
                          <OverdueBadge>기한 초과</OverdueBadge>
                        )}
                      </TodoMetaItem>
                    </TodoMetaRow>
                  </TodoContent>
                </TodoMain>
              </TodoItem>
            ))}
          </TodoList>
        </TodoListCard>
      </PageWrapper>

      {isAddModalOpen && (
        <ModalOverlay onClick={closeAddModal}>
          <ModalCard onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>Todo 추가</ModalTitle>
              <ModalCloseButton type="button" onClick={closeAddModal}>
                <X className="close-icon" />
              </ModalCloseButton>
            </ModalHeader>

            <ModalBody>
              <ModalGrid>
                <ModalField>
                  <ModalLabel>Todo 내용</ModalLabel>
                  <ModalInput
                    value={newTodo.text}
                    onChange={(e) =>
                      setNewTodo((prev) => ({
                        ...prev,
                        text: e.target.value,
                      }))
                    }
                    placeholder="해야 할 작업 내용을 입력하세요"
                  />
                </ModalField>

                <ModalField>
                  <ModalLabel>담당자</ModalLabel>
                  <ModalInput
                    value={newTodo.assignee}
                    onChange={(e) =>
                      setNewTodo((prev) => ({
                        ...prev,
                        assignee: e.target.value,
                      }))
                    }
                    placeholder="담당자 이름을 입력하세요"
                  />
                </ModalField>

                <ModalField>
                  <ModalLabel>마감일</ModalLabel>
                  <ModalInput
                    type="date"
                    value={newTodo.dueDate}
                    onChange={(e) =>
                      setNewTodo((prev) => ({
                        ...prev,
                        dueDate: e.target.value,
                      }))
                    }
                  />
                </ModalField>

                <ModalField>
                  <ModalLabel>우선순위</ModalLabel>
                  <ModalSelect
                    value={newTodo.priority}
                    onChange={(e) =>
                      setNewTodo((prev) => ({
                        ...prev,
                        priority: e.target.value as "high" | "medium" | "low",
                      }))
                    }
                  >
                    <option value="high">긴급</option>
                    <option value="medium">보통</option>
                    <option value="low">낮음</option>
                  </ModalSelect>
                </ModalField>

                <ModalField>
                  <ModalLabel>출처</ModalLabel>
                  <ModalInput
                    value={newTodo.source}
                    onChange={(e) =>
                      setNewTodo((prev) => ({
                        ...prev,
                        source: e.target.value,
                      }))
                    }
                    placeholder="예: 주간 마케팅 전략 회의"
                  />
                </ModalField>

                <ModalField>
                  <ModalLabel>상태</ModalLabel>
                  <ModalSelect
                    value={newTodo.status}
                    onChange={(e) =>
                      setNewTodo((prev) => ({
                        ...prev,
                        status: e.target.value as Exclude<TodoStatus, "완료">,
                      }))
                    }
                  >
                    <option value="진행중">진행중</option>
                    <option value="대기중">대기중</option>
                  </ModalSelect>
                </ModalField>
              </ModalGrid>
            </ModalBody>

            <ModalActions>
              <ModalCancelButton type="button" onClick={closeAddModal}>
                취소
              </ModalCancelButton>
              <ModalSubmitButton type="button" onClick={handleAddTodo}>
                추가
              </ModalSubmitButton>
            </ModalActions>
          </ModalCard>
        </ModalOverlay>
      )}

      {isEditModalOpen && (
        <ModalOverlay onClick={closeEditModal}>
          <ModalCard onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>Todo 수정</ModalTitle>
              <ModalCloseButton type="button" onClick={closeEditModal}>
                <X className="close-icon" />
              </ModalCloseButton>
            </ModalHeader>

            <ModalBody>
              <ModalGrid>
                <ModalField>
                  <ModalLabel>Todo 내용</ModalLabel>
                  <ModalInput
                    value={editTodo.text}
                    onChange={(e) =>
                      setEditTodo((prev) => ({
                        ...prev,
                        text: e.target.value,
                      }))
                    }
                    placeholder="해야 할 작업 내용을 입력하세요"
                  />
                </ModalField>

                <ModalField>
                  <ModalLabel>담당자</ModalLabel>
                  <ModalInput
                    value={editTodo.assignee}
                    onChange={(e) =>
                      setEditTodo((prev) => ({
                        ...prev,
                        assignee: e.target.value,
                      }))
                    }
                    placeholder="담당자 이름을 입력하세요"
                  />
                </ModalField>

                <ModalField>
                  <ModalLabel>마감일</ModalLabel>
                  <ModalInput
                    type="date"
                    value={editTodo.dueDate}
                    onChange={(e) =>
                      setEditTodo((prev) => ({
                        ...prev,
                        dueDate: e.target.value,
                      }))
                    }
                  />
                </ModalField>

                <ModalField>
                  <ModalLabel>우선순위</ModalLabel>
                  <ModalSelect
                    value={editTodo.priority}
                    onChange={(e) =>
                      setEditTodo((prev) => ({
                        ...prev,
                        priority: e.target.value as "high" | "medium" | "low",
                      }))
                    }
                  >
                    <option value="high">긴급</option>
                    <option value="medium">보통</option>
                    <option value="low">낮음</option>
                  </ModalSelect>
                </ModalField>

                <ModalField>
                  <ModalLabel>출처</ModalLabel>
                  <ModalInput
                    value={editTodo.source}
                    onChange={(e) =>
                      setEditTodo((prev) => ({
                        ...prev,
                        source: e.target.value,
                      }))
                    }
                    placeholder="예: 주간 마케팅 전략 회의"
                  />
                </ModalField>

                <ModalField>
                  <ModalLabel>상태</ModalLabel>
                  <ModalSelect
                    value={editTodo.status}
                    onChange={(e) =>
                      setEditTodo((prev) => ({
                        ...prev,
                        status: e.target.value as Exclude<TodoStatus, "완료">,
                      }))
                    }
                  >
                    <option value="진행중">진행중</option>
                    <option value="대기중">대기중</option>
                  </ModalSelect>
                </ModalField>
              </ModalGrid>
            </ModalBody>

            <ModalActions>
              <ModalCancelButton type="button" onClick={closeEditModal}>
                취소
              </ModalCancelButton>
              <ModalSubmitButton type="button" onClick={handleEditTodo}>
                저장
              </ModalSubmitButton>
            </ModalActions>
          </ModalCard>
        </ModalOverlay>
      )}
    </>
  );
}
