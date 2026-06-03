import { useMemo, useState } from 'react';
import {
  Search,
  ChevronRight,
  FileText,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  X,
  RotateCcw,
  Trash2,
  Info,
} from 'lucide-react';
import {
  AdminSubPageWrapper,
  SubPageHeader,
  SubPageTitle,
  SubPageDescription,
  SubPageTopRow,
  SubPagePrimaryLink,
  SearchFilterRow,
  SearchInputWrapper,
  SearchInput,
  FilterSelect,
  DataCard,
  DataTable,
  TableBadge,
  TableActionRow,
  TableActionButton,
  SummaryRow,
  SummaryCard,
  SummaryLabel,
  SummaryValue,
  ModalOverlay,
  ModalCard,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalPrimaryButton,
  ModalSecondaryButton,
  InfoGrid,
  InfoItem,
  InfoLabel,
  InfoValue,
  OptionList,
  OptionButton,
  EmptyStateBox,
  EmptyStateText,
  ToolbarActions,
  ToolbarButton,
  ResultMeta,
  WarningMessage,
  InfoMessage,
} from './AdminSubPage.styles';
import AdminActionToast from '../components/AdminActionToast';

type MeetingStatus = '분석 완료' | '분석중' | '실패';
type MeetingSort =
  | 'created-desc'
  | 'created-asc'
  | 'title-asc'
  | 'todos-desc';

type MeetingItem = {
  id: number;
  title: string;
  owner: string;
  createdAt: string;
  status: MeetingStatus;
  todos: number;
  duration: string;
  participants: number;
  summary: string;
};

export default function AdminMeetingsPage() {
  const [meetings, setMeetings] = useState<MeetingItem[]>([
    {
      id: 1,
      title: '주간 마케팅 전략 회의',
      owner: '관리자',
      createdAt: '2026.05.12 09:40',
      status: '분석 완료',
      todos: 6,
      duration: '1시간 12분',
      participants: 5,
      summary:
        '캠페인 일정 조정, 예산 분배, 팀별 실행 항목 정리가 완료된 회의입니다.',
    },
    {
      id: 2,
      title: '제품 로드맵 리뷰',
      owner: '테스트 사용자',
      createdAt: '2026.05.12 08:20',
      status: '분석중',
      todos: 3,
      duration: '48분',
      participants: 4,
      summary:
        '분기별 기능 우선순위와 개발 일정 조율을 위한 회의입니다.',
    },
    {
      id: 3,
      title: '고객 피드백 세션',
      owner: '민수',
      createdAt: '2026.05.11 16:00',
      status: '분석 완료',
      todos: 4,
      duration: '36분',
      participants: 3,
      summary:
        '고객 불편 사항과 개선 요청을 정리하고 우선순위를 논의한 회의입니다.',
    },
    {
      id: 4,
      title: '실험용 실패 회의',
      owner: '지은',
      createdAt: '2026.05.11 11:10',
      status: '실패',
      todos: 0,
      duration: '15분',
      participants: 2,
      summary:
        '음성 처리 오류로 인해 분석이 실패한 테스트 회의입니다.',
    },
  ]);

  const [searchKeyword, setSearchKeyword] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | MeetingStatus>('all');
  const [sortBy, setSortBy] = useState<MeetingSort>('created-desc');

  const [selectedMeeting, setSelectedMeeting] = useState<MeetingItem | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [pendingStatus, setPendingStatus] = useState<MeetingStatus | null>(null);
  const [isStatusConfirmModalOpen, setIsStatusConfirmModalOpen] = useState(false);

  const [toast, setToast] = useState<{
    open: boolean;
    message: string;
    variant: 'success' | 'error';
  }>({
    open: false,
    message: '',
    variant: 'success',
  });

  const filteredMeetings = useMemo(() => {
    const result = meetings.filter((meeting) => {
      const keyword = searchKeyword.trim().toLowerCase();

      const matchesKeyword =
        keyword.length === 0
          ? true
          : meeting.title.toLowerCase().includes(keyword) ||
            meeting.owner.toLowerCase().includes(keyword);

      const matchesStatus =
        statusFilter === 'all' ? true : meeting.status === statusFilter;

      return matchesKeyword && matchesStatus;
    });

    return [...result].sort((a, b) => {
      if (sortBy === 'created-desc') {
        return b.createdAt.localeCompare(a.createdAt);
      }

      if (sortBy === 'created-asc') {
        return a.createdAt.localeCompare(b.createdAt);
      }

      if (sortBy === 'title-asc') {
        return a.title.localeCompare(b.title, 'ko');
      }

      return b.todos - a.todos;
    });
  }, [meetings, searchKeyword, statusFilter, sortBy]);

  const summary = useMemo(() => {
    return {
      total: meetings.length,
      completed: meetings.filter((item) => item.status === '분석 완료').length,
      analyzing: meetings.filter((item) => item.status === '분석중').length,
      failed: meetings.filter((item) => item.status === '실패').length,
    };
  }, [meetings]);

  const showToast = (message: string, variant: 'success' | 'error' = 'success') => {
    setToast({
      open: true,
      message,
      variant,
    });
  };

  const closeToast = () => {
    setToast((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const resetToolbar = () => {
    setSearchKeyword('');
    setStatusFilter('all');
    setSortBy('created-desc');
    showToast('회의 관리 필터가 초기화되었습니다.', 'success');
  };

  const openDetailModal = (meeting: MeetingItem) => {
    setSelectedMeeting(meeting);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedMeeting(null);
  };

  const openStatusModal = (meeting: MeetingItem) => {
    setSelectedMeeting(meeting);
    setPendingStatus(null);
    setIsStatusModalOpen(true);
  };

  const closeStatusModal = () => {
    setIsStatusModalOpen(false);
    setSelectedMeeting(null);
    setPendingStatus(null);
  };

  const openDeleteModal = (meeting: MeetingItem) => {
    setSelectedMeeting(meeting);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedMeeting(null);
  };

  const openStatusConfirmModal = (nextStatus: MeetingStatus) => {
    if (!selectedMeeting) return;
    if (selectedMeeting.status === nextStatus) return;

    setPendingStatus(nextStatus);
    setIsStatusConfirmModalOpen(true);
  };

  const closeStatusConfirmModal = () => {
    setIsStatusConfirmModalOpen(false);
    setPendingStatus(null);
  };

  const confirmStatusChange = () => {
    if (!selectedMeeting || !pendingStatus) return;

    setMeetings((prev) =>
      prev.map((meeting) =>
        meeting.id === selectedMeeting.id
          ? { ...meeting, status: pendingStatus }
          : meeting
      )
    );

    showToast(`${selectedMeeting.title} 회의의 상태가 ${pendingStatus}로 변경되었습니다.`, 'success');
    closeStatusConfirmModal();
    closeStatusModal();
  };

  const handleDeleteMeeting = () => {
    if (!selectedMeeting) return;

    setMeetings((prev) =>
      prev.filter((meeting) => meeting.id !== selectedMeeting.id)
    );

    showToast(`${selectedMeeting.title} 회의가 삭제되었습니다.`, 'success');
    closeDeleteModal();
  };

  return (
    <>
      <AdminSubPageWrapper>
        <SubPageHeader>
          <SubPageTopRow>
            <div>
              <SubPageTitle>회의 데이터 관리</SubPageTitle>
              <SubPageDescription>
                회의 목록과 분석 상태, 생성 데이터를 관리합니다
              </SubPageDescription>
            </div>

            <SubPagePrimaryLink to = "/admin">
              관리자 메인으로
              <ChevronRight className = "link-arrow" />
            </SubPagePrimaryLink>
          </SubPageTopRow>
        </SubPageHeader>

        <SummaryRow>
          <SummaryCard>
            <SummaryLabel>전체 회의</SummaryLabel>
            <SummaryValue>{summary.total}</SummaryValue>
          </SummaryCard>
          <SummaryCard>
            <SummaryLabel>분석 완료</SummaryLabel>
            <SummaryValue>{summary.completed}</SummaryValue>
          </SummaryCard>
          <SummaryCard>
            <SummaryLabel>분석중</SummaryLabel>
            <SummaryValue>{summary.analyzing}</SummaryValue>
          </SummaryCard>
          <SummaryCard>
            <SummaryLabel>실패</SummaryLabel>
            <SummaryValue>{summary.failed}</SummaryValue>
          </SummaryCard>
        </SummaryRow>

        <SearchFilterRow>
          <SearchInputWrapper>
            <Search className = "search-icon" />
            <SearchInput
              value = {searchKeyword}
              onChange = {(e) => setSearchKeyword(e.target.value)}
              placeholder = "회의 제목 또는 생성자 검색"
            />
          </SearchInputWrapper>

          <FilterSelect
            value = {statusFilter}
            onChange = {(e) =>
              setStatusFilter(e.target.value as 'all' | MeetingStatus)
            }
          >
            <option value = "all">전체 상태</option>
            <option value = "분석 완료">분석 완료</option>
            <option value = "분석중">분석중</option>
            <option value = "실패">실패</option>
          </FilterSelect>

          <FilterSelect
            value = {sortBy}
            onChange = {(e) => setSortBy(e.target.value as MeetingSort)}
          >
            <option value = "created-desc">최신 생성순</option>
            <option value = "created-asc">오래된 생성순</option>
            <option value = "title-asc">회의 제목순</option>
            <option value = "todos-desc">Todo 많은순</option>
          </FilterSelect>

          <ToolbarActions>
            <ToolbarButton type = "button" onClick = {resetToolbar}>
              <RotateCcw className = "toolbar-icon" />
              초기화
            </ToolbarButton>
          </ToolbarActions>
        </SearchFilterRow>

        <ResultMeta>현재 조건에 맞는 회의 {filteredMeetings.length}건</ResultMeta>

        <DataCard>
          {filteredMeetings.length === 0 ? (
            <EmptyStateBox>
              <FileText className = "empty-icon" />
              <EmptyStateText>조건에 맞는 회의가 없습니다.</EmptyStateText>
            </EmptyStateBox>
          ) : (
            <DataTable>
              <thead>
                <tr>
                  <th>회의 제목</th>
                  <th>생성자</th>
                  <th>생성일</th>
                  <th>분석 상태</th>
                  <th>Todo 수</th>
                  <th>관리</th>
                </tr>
              </thead>

              <tbody>
                {filteredMeetings.map((meeting) => (
                  <tr key = {meeting.id}>
                    <td>{meeting.title}</td>
                    <td>{meeting.owner}</td>
                    <td>{meeting.createdAt}</td>
                    <td>
                      <TableBadge
                        $variant = {
                          meeting.status === '분석 완료'
                            ? 'success'
                            : meeting.status === '분석중'
                            ? 'pending'
                            : 'danger'
                        }
                      >
                        {meeting.status}
                      </TableBadge>
                    </td>
                    <td>{meeting.todos}</td>
                    <td>
                      <TableActionRow>
                        <TableActionButton
                          type = "button"
                          onClick = {() => openDetailModal(meeting)}
                        >
                          상세 보기
                        </TableActionButton>

                        <TableActionButton
                          type = "button"
                          onClick = {() => openStatusModal(meeting)}
                        >
                          상태 변경
                        </TableActionButton>

                        <TableActionButton
                          type = "button"
                          onClick = {() => openDeleteModal(meeting)}
                        >
                          삭제
                        </TableActionButton>
                      </TableActionRow>
                    </td>
                  </tr>
                ))}
              </tbody>
            </DataTable>
          )}
        </DataCard>
      </AdminSubPageWrapper>

      {isDetailModalOpen && selectedMeeting && (
        <ModalOverlay onClick = {closeDetailModal}>
          <ModalCard onClick = {(e) => e.stopPropagation()}>
            <ModalHeader>
              <div>
                <ModalTitle>회의 상세 정보</ModalTitle>
                <ModalDescription>
                  선택한 회의의 기본 정보와 분석 현황입니다
                </ModalDescription>
              </div>

              <ModalCloseButton type = "button" onClick = {closeDetailModal}>
                <X className = "close-icon" />
              </ModalCloseButton>
            </ModalHeader>

            <ModalBody>
              <InfoGrid>
                <InfoItem>
                  <InfoLabel>회의 제목</InfoLabel>
                  <InfoValue>{selectedMeeting.title}</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>생성자</InfoLabel>
                  <InfoValue>{selectedMeeting.owner}</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>생성일</InfoLabel>
                  <InfoValue>{selectedMeeting.createdAt}</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>회의 시간</InfoLabel>
                  <InfoValue>{selectedMeeting.duration}</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>참여 인원</InfoLabel>
                  <InfoValue>{selectedMeeting.participants}명</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>Todo 수</InfoLabel>
                  <InfoValue>{selectedMeeting.todos}</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>분석 상태</InfoLabel>
                  <InfoValue>
                    <TableBadge
                      $variant = {
                        selectedMeeting.status === '분석 완료'
                          ? 'success'
                          : selectedMeeting.status === '분석중'
                          ? 'pending'
                          : 'danger'
                      }
                    >
                      {selectedMeeting.status}
                    </TableBadge>
                  </InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>요약</InfoLabel>
                  <InfoValue>{selectedMeeting.summary}</InfoValue>
                </InfoItem>
              </InfoGrid>
            </ModalBody>

            <ModalFooter>
              <ModalSecondaryButton type = "button" onClick = {closeDetailModal}>
                닫기
              </ModalSecondaryButton>
            </ModalFooter>
          </ModalCard>
        </ModalOverlay>
      )}

      {isStatusModalOpen && selectedMeeting && (
        <ModalOverlay onClick = {closeStatusModal}>
          <ModalCard onClick = {(e) => e.stopPropagation()}>
            <ModalHeader>
              <div>
                <ModalTitle>회의 상태 변경</ModalTitle>
                <ModalDescription>
                  {selectedMeeting.title} 회의의 분석 상태를 변경할 수 있습니다
                </ModalDescription>
              </div>

              <ModalCloseButton type = "button" onClick = {closeStatusModal}>
                <X className = "close-icon" />
              </ModalCloseButton>
            </ModalHeader>

            <ModalBody>
              <OptionList>
                <OptionButton
                  type = "button"
                  $selected = {selectedMeeting.status === '분석 완료'}
                  disabled = {selectedMeeting.status === '분석 완료'}
                  onClick = {() => openStatusConfirmModal('분석 완료')}
                >
                  <CheckCircle2 className = "option-icon" />
                  분석 완료
                </OptionButton>

                <OptionButton
                  type = "button"
                  $selected = {selectedMeeting.status === '분석중'}
                  disabled = {selectedMeeting.status === '분석중'}
                  onClick = {() => openStatusConfirmModal('분석중')}
                >
                  <RefreshCw className = "option-icon" />
                  분석중
                </OptionButton>

                <OptionButton
                  type = "button"
                  $selected = {selectedMeeting.status === '실패'}
                  disabled = {selectedMeeting.status === '실패'}
                  onClick = {() => openStatusConfirmModal('실패')}
                >
                  <AlertTriangle className = "option-icon" />
                  실패
                </OptionButton>
              </OptionList>

              {selectedMeeting.status === '실패' && (
                <InfoMessage>
                  <Info className = "info-icon" />
                  <span>실패 상태의 회의를 다시 분석중 또는 분석 완료 상태로 바꾸면 운영 화면상 복구된 것처럼 보일 수 있습니다.</span>
                </InfoMessage>
              )}
            </ModalBody>

            <ModalFooter>
              <ModalSecondaryButton type = "button" onClick = {closeStatusModal}>
                취소
              </ModalSecondaryButton>
            </ModalFooter>
          </ModalCard>
        </ModalOverlay>
      )}

      {isStatusConfirmModalOpen && selectedMeeting && pendingStatus && (
        <ModalOverlay onClick = {closeStatusConfirmModal}>
          <ModalCard onClick = {(e) => e.stopPropagation()}>
            <ModalHeader>
              <div>
                <ModalTitle>상태를 변경하시겠습니까?</ModalTitle>
                <ModalDescription>
                  회의 분석 상태 변경은 운영 상태 표시에 직접 반영됩니다.
                </ModalDescription>
              </div>

              <ModalCloseButton type = "button" onClick = {closeStatusConfirmModal}>
                <X className = "close-icon" />
              </ModalCloseButton>
            </ModalHeader>

            <ModalBody>
              <InfoGrid>
                <InfoItem>
                  <InfoLabel>회의 제목</InfoLabel>
                  <InfoValue>{selectedMeeting.title}</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>생성자</InfoLabel>
                  <InfoValue>{selectedMeeting.owner}</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>현재 상태</InfoLabel>
                  <InfoValue>{selectedMeeting.status}</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>변경 상태</InfoLabel>
                  <InfoValue>{pendingStatus}</InfoValue>
                </InfoItem>
              </InfoGrid>

              {pendingStatus === '실패' ? (
                <WarningMessage>
                  <AlertTriangle className = "warning-icon" />
                  <span>실패 상태로 변경하면 이 회의는 분석 오류가 있는 항목으로 보이게 됩니다.</span>
                </WarningMessage>
              ) : (
                <InfoMessage>
                  <Info className = "info-icon" />
                  <span>상태 변경 후 관리자 목록과 요약 카드 통계에 바로 반영됩니다.</span>
                </InfoMessage>
              )}
            </ModalBody>

            <ModalFooter>
              <ModalSecondaryButton type = "button" onClick = {closeStatusConfirmModal}>
                취소
              </ModalSecondaryButton>
              <ModalPrimaryButton type = "button" onClick = {confirmStatusChange}>
                변경하기
              </ModalPrimaryButton>
            </ModalFooter>
          </ModalCard>
        </ModalOverlay>
      )}

      {isDeleteModalOpen && selectedMeeting && (
        <ModalOverlay onClick = {closeDeleteModal}>
          <ModalCard onClick = {(e) => e.stopPropagation()}>
            <ModalHeader>
              <div>
                <ModalTitle>회의를 삭제하시겠습니까?</ModalTitle>
                <ModalDescription>
                  삭제한 회의는 목록에서 바로 사라지며 복구할 수 없습니다.
                </ModalDescription>
              </div>

              <ModalCloseButton type = "button" onClick = {closeDeleteModal}>
                <X className = "close-icon" />
              </ModalCloseButton>
            </ModalHeader>

            <ModalBody>
              <InfoGrid>
                <InfoItem>
                  <InfoLabel>회의 제목</InfoLabel>
                  <InfoValue>{selectedMeeting.title}</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>생성자</InfoLabel>
                  <InfoValue>{selectedMeeting.owner}</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>생성일</InfoLabel>
                  <InfoValue>{selectedMeeting.createdAt}</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>분석 상태</InfoLabel>
                  <InfoValue>{selectedMeeting.status}</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>참여 인원</InfoLabel>
                  <InfoValue>{selectedMeeting.participants}명</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>Todo 수</InfoLabel>
                  <InfoValue>{selectedMeeting.todos}</InfoValue>
                </InfoItem>
              </InfoGrid>

              <WarningMessage>
                <Trash2 className = "warning-icon" />
                <span>삭제 후에는 회의 상세 내용과 연결된 작업 흐름을 다시 확인할 수 없습니다.</span>
              </WarningMessage>

              {selectedMeeting.todos > 0 && (
                <InfoMessage>
                  <Info className = "info-icon" />
                  <span>이 회의에는 생성된 Todo가 {selectedMeeting.todos}건 있어 운영 확인 시 함께 영향이 있을 수 있습니다.</span>
                </InfoMessage>
              )}
            </ModalBody>

            <ModalFooter>
              <ModalSecondaryButton type = "button" onClick = {closeDeleteModal}>
                취소
              </ModalSecondaryButton>

              <ModalPrimaryButton type = "button" onClick = {handleDeleteMeeting}>
                삭제하기
              </ModalPrimaryButton>
            </ModalFooter>
          </ModalCard>
        </ModalOverlay>
      )}

      <AdminActionToast
        open = {toast.open}
        message = {toast.message}
        variant = {toast.variant}
        onClose = {closeToast}
      />
    </>
  );
}