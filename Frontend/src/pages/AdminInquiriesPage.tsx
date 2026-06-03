import { useMemo, useState } from 'react';
import {
  Search,
  ChevronRight,
  MessageSquare,
  AlertTriangle,
  CheckCircle2,
  Clock3,
  X,
  RotateCcw,
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
  FormGroup,
  FormLabel,
  FormTextArea,
  ToolbarActions,
  ToolbarButton,
  ResultMeta,
  WarningMessage,
  InfoMessage,
} from './AdminSubPage.styles';
import AdminActionToast from '../components/AdminActionToast';

type InquiryType = '문의' | '신고' | '피드백';
type InquiryStatus = '대기' | '처리중' | '완료';
type InquirySort =
  | 'created-desc'
  | 'created-asc'
  | 'title-asc'
  | 'author-asc';

type InquiryItem = {
  id: number;
  type: InquiryType;
  title: string;
  author: string;
  status: InquiryStatus;
  createdAt: string;
  description: string;
  memo: string;
};

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<InquiryItem[]>([
    {
      id: 1,
      type: '문의',
      title: 'Google Calendar 연동이 되지 않습니다',
      author: 'jihye@acta.com',
      status: '대기',
      createdAt: '2026.05.12 14:20',
      description: '환경설정에서 연동 버튼을 눌러도 반응이 없습니다.',
      memo: '',
    },
    {
      id: 2,
      type: '신고',
      title: '회의 제목에 부적절한 내용이 포함되어 있습니다',
      author: 'report@acta.com',
      status: '처리중',
      createdAt: '2026.05.12 12:05',
      description: '공개된 회의 목록 중 부적절한 제목이 보입니다.',
      memo: '문제 회의 제목 확인 중',
    },
    {
      id: 3,
      type: '피드백',
      title: '회의 분석 결과 다운로드 기능이 있으면 좋겠습니다',
      author: 'sora@acta.com',
      status: '완료',
      createdAt: '2026.05.11 18:42',
      description: '회의 요약과 Todo를 문서로 내보내고 싶습니다.',
      memo: '추후 기능 검토 목록에 추가',
    },
    {
      id: 4,
      type: '문의',
      title: '로그인 후 대시보드가 비어 보입니다',
      author: 'minji@acta.com',
      status: '대기',
      createdAt: '2026.05.13 09:10',
      description: '처음 로그인 후 회의가 하나도 안 보이는데 정상인지 궁금합니다.',
      memo: '',
    },
  ]);

  const [searchKeyword, setSearchKeyword] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | InquiryType>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | InquiryStatus>('all');
  const [sortBy, setSortBy] = useState<InquirySort>('created-desc');

  const [selectedInquiry, setSelectedInquiry] = useState<InquiryItem | null>(null);
  const [memoInput, setMemoInput] = useState('');
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);

  const [pendingStatus, setPendingStatus] = useState<InquiryStatus | null>(null);
  const [isStatusConfirmModalOpen, setIsStatusConfirmModalOpen] = useState(false);

  const [isDiscardMemoModalOpen, setIsDiscardMemoModalOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState<'close' | 'status' | null>(null);

  const [toast, setToast] = useState<{
    open: boolean;
    message: string;
    variant: 'success' | 'error';
  }>({
    open: false,
    message: '',
    variant: 'success',
  });

  const filteredInquiries = useMemo(() => {
    const result = inquiries.filter((item) => {
      const keyword = searchKeyword.trim().toLowerCase();

      const matchesKeyword =
        keyword.length === 0
          ? true
          : item.title.toLowerCase().includes(keyword) ||
            item.author.toLowerCase().includes(keyword);

      const matchesType = typeFilter === 'all' ? true : item.type === typeFilter;
      const matchesStatus =
        statusFilter === 'all' ? true : item.status === statusFilter;

      return matchesKeyword && matchesType && matchesStatus;
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

      return a.author.localeCompare(b.author, 'ko');
    });
  }, [inquiries, searchKeyword, typeFilter, statusFilter, sortBy]);

  const summary = useMemo(() => {
    return {
      total: inquiries.length,
      pending: inquiries.filter((item) => item.status === '대기').length,
      processing: inquiries.filter((item) => item.status === '처리중').length,
      done: inquiries.filter((item) => item.status === '완료').length,
    };
  }, [inquiries]);

  const originalMemo = selectedInquiry?.memo ?? '';
  const isMemoChanged = memoInput !== originalMemo;

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
    setTypeFilter('all');
    setStatusFilter('all');
    setSortBy('created-desc');
    showToast('문의 관리 필터가 초기화되었습니다.', 'success');
  };

  const openDetailModal = (item: InquiryItem) => {
    setSelectedInquiry(item);
    setMemoInput(item.memo);
    setIsDetailModalOpen(true);
  };

  const closeDetailModalDirect = () => {
    setIsDetailModalOpen(false);
    setSelectedInquiry(null);
    setMemoInput('');
  };

  const requestCloseDetailModal = () => {
    if (isMemoChanged) {
      setPendingAction('close');
      setIsDiscardMemoModalOpen(true);
      return;
    }

    closeDetailModalDirect();
  };

  const openStatusModalDirect = () => {
    setIsDetailModalOpen(false);
    setIsStatusModalOpen(true);
  };

  const requestOpenStatusModal = (item: InquiryItem) => {
    setSelectedInquiry(item);
    setMemoInput(item.memo);

    if (isDetailModalOpen && isMemoChanged) {
      setPendingAction('status');
      setIsDiscardMemoModalOpen(true);
      return;
    }

    setPendingStatus(null);
    setIsStatusModalOpen(true);
  };

  const closeStatusModal = () => {
    setIsStatusModalOpen(false);
    setSelectedInquiry(null);
    setPendingStatus(null);
  };

  const closeDiscardMemoModal = () => {
    setIsDiscardMemoModalOpen(false);
    setPendingAction(null);
  };

  const confirmDiscardMemo = () => {
    if (pendingAction === 'close') {
      closeDetailModalDirect();
    }

    if (pendingAction === 'status') {
      openStatusModalDirect();
    }

    closeDiscardMemoModal();
  };

  const openStatusConfirmModal = (nextStatus: InquiryStatus) => {
    if (!selectedInquiry) return;
    if (selectedInquiry.status === nextStatus) return;

    setPendingStatus(nextStatus);
    setIsStatusConfirmModalOpen(true);
  };

  const closeStatusConfirmModal = () => {
    setIsStatusConfirmModalOpen(false);
    setPendingStatus(null);
  };

  const handleSaveMemo = () => {
    if (!selectedInquiry || !isMemoChanged) return;

    setInquiries((prev) =>
      prev.map((item) =>
        item.id === selectedInquiry.id ? { ...item, memo: memoInput } : item
      )
    );

    showToast('관리자 메모가 저장되었습니다.', 'success');
    closeDetailModalDirect();
  };

  const confirmStatusChange = () => {
    if (!selectedInquiry || !pendingStatus) return;

    setInquiries((prev) =>
      prev.map((item) =>
        item.id === selectedInquiry.id ? { ...item, status: pendingStatus } : item
      )
    );

    showToast(`${selectedInquiry.title} 항목의 상태가 ${pendingStatus}로 변경되었습니다.`, 'success');
    closeStatusConfirmModal();
    closeStatusModal();
  };

  return (
    <>
      <AdminSubPageWrapper>
        <SubPageHeader>
          <SubPageTopRow>
            <div>
              <SubPageTitle>문의 / 신고 관리</SubPageTitle>
              <SubPageDescription>
                접수된 문의, 신고, 피드백을 확인하고 처리합니다
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
            <SummaryLabel>전체 접수</SummaryLabel>
            <SummaryValue>{summary.total}</SummaryValue>
          </SummaryCard>
          <SummaryCard>
            <SummaryLabel>대기</SummaryLabel>
            <SummaryValue>{summary.pending}</SummaryValue>
          </SummaryCard>
          <SummaryCard>
            <SummaryLabel>처리중</SummaryLabel>
            <SummaryValue>{summary.processing}</SummaryValue>
          </SummaryCard>
          <SummaryCard>
            <SummaryLabel>완료</SummaryLabel>
            <SummaryValue>{summary.done}</SummaryValue>
          </SummaryCard>
        </SummaryRow>

        <SearchFilterRow>
          <SearchInputWrapper>
            <Search className = "search-icon" />
            <SearchInput
              value = {searchKeyword}
              onChange = {(e) => setSearchKeyword(e.target.value)}
              placeholder = "제목 또는 작성자 검색"
            />
          </SearchInputWrapper>

          <FilterSelect
            value = {typeFilter}
            onChange = {(e) => setTypeFilter(e.target.value as 'all' | InquiryType)}
          >
            <option value = "all">전체 유형</option>
            <option value = "문의">문의</option>
            <option value = "신고">신고</option>
            <option value = "피드백">피드백</option>
          </FilterSelect>

          <FilterSelect
            value = {statusFilter}
            onChange = {(e) => setStatusFilter(e.target.value as 'all' | InquiryStatus)}
          >
            <option value = "all">전체 상태</option>
            <option value = "대기">대기</option>
            <option value = "처리중">처리중</option>
            <option value = "완료">완료</option>
          </FilterSelect>

          <FilterSelect
            value = {sortBy}
            onChange = {(e) => setSortBy(e.target.value as InquirySort)}
          >
            <option value = "created-desc">최신 접수순</option>
            <option value = "created-asc">오래된 접수순</option>
            <option value = "title-asc">제목순</option>
            <option value = "author-asc">작성자순</option>
          </FilterSelect>

          <ToolbarActions>
            <ToolbarButton type = "button" onClick = {resetToolbar}>
              <RotateCcw className = "toolbar-icon" />
              초기화
            </ToolbarButton>
          </ToolbarActions>
        </SearchFilterRow>

        <ResultMeta>현재 조건에 맞는 문의 항목 {filteredInquiries.length}건</ResultMeta>

        <DataCard>
          {filteredInquiries.length === 0 ? (
            <EmptyStateBox>
              <MessageSquare className = "empty-icon" />
              <EmptyStateText>조건에 맞는 문의 항목이 없습니다.</EmptyStateText>
            </EmptyStateBox>
          ) : (
            <DataTable>
              <thead>
                <tr>
                  <th>유형</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>상태</th>
                  <th>접수일</th>
                  <th>관리</th>
                </tr>
              </thead>

              <tbody>
                {filteredInquiries.map((item) => (
                  <tr key = {item.id}>
                    <td>
                      <TableBadge
                        $variant = {
                          item.type === '문의'
                            ? 'default'
                            : item.type === '신고'
                            ? 'danger'
                            : 'success'
                        }
                      >
                        {item.type}
                      </TableBadge>
                    </td>
                    <td>{item.title}</td>
                    <td>{item.author}</td>
                    <td>
                      <TableBadge
                        $variant = {
                          item.status === '대기'
                            ? 'pending'
                            : item.status === '처리중'
                            ? 'warning'
                            : 'success'
                        }
                      >
                        {item.status}
                      </TableBadge>
                    </td>
                    <td>{item.createdAt}</td>
                    <td>
                      <TableActionRow>
                        <TableActionButton
                          type = "button"
                          onClick = {() => openDetailModal(item)}
                        >
                          상세 보기
                        </TableActionButton>

                        <TableActionButton
                          type = "button"
                          onClick = {() => requestOpenStatusModal(item)}
                        >
                          상태 변경
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

      {isDetailModalOpen && selectedInquiry && (
        <ModalOverlay onClick = {requestCloseDetailModal}>
          <ModalCard onClick = {(e) => e.stopPropagation()}>
            <ModalHeader>
              <div>
                <ModalTitle>문의 상세 정보</ModalTitle>
                <ModalDescription>
                  접수된 내용과 관리자 메모를 확인하고 저장할 수 있습니다
                </ModalDescription>
              </div>

              <ModalCloseButton type = "button" onClick = {requestCloseDetailModal}>
                <X className = "close-icon" />
              </ModalCloseButton>
            </ModalHeader>

            <ModalBody>
              <InfoGrid>
                <InfoItem>
                  <InfoLabel>유형</InfoLabel>
                  <InfoValue>
                    <TableBadge
                      $variant = {
                        selectedInquiry.type === '문의'
                          ? 'default'
                          : selectedInquiry.type === '신고'
                          ? 'danger'
                          : 'success'
                      }
                    >
                      {selectedInquiry.type}
                    </TableBadge>
                  </InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>상태</InfoLabel>
                  <InfoValue>
                    <TableBadge
                      $variant = {
                        selectedInquiry.status === '대기'
                          ? 'pending'
                          : selectedInquiry.status === '처리중'
                          ? 'warning'
                          : 'success'
                      }
                    >
                      {selectedInquiry.status}
                    </TableBadge>
                  </InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>작성자</InfoLabel>
                  <InfoValue>{selectedInquiry.author}</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>접수일</InfoLabel>
                  <InfoValue>{selectedInquiry.createdAt}</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>제목</InfoLabel>
                  <InfoValue>{selectedInquiry.title}</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>내용</InfoLabel>
                  <InfoValue>{selectedInquiry.description}</InfoValue>
                </InfoItem>
              </InfoGrid>

              <FormGroup>
                <FormLabel htmlFor = "admin-memo">관리자 메모</FormLabel>
                <FormTextArea
                  id = "admin-memo"
                  value = {memoInput}
                  onChange = {(e) => setMemoInput(e.target.value)}
                  placeholder = "처리 내용이나 확인 메모를 입력하세요"
                />
              </FormGroup>

              {isMemoChanged && (
                <InfoMessage>
                  <Info className = "info-icon" />
                  <span>현재 메모가 수정되었습니다. 저장하지 않고 닫거나 다른 작업으로 이동하면 변경 내용이 사라집니다.</span>
                </InfoMessage>
              )}
            </ModalBody>

            <ModalFooter>
              <ModalSecondaryButton type = "button" onClick = {requestCloseDetailModal}>
                취소
              </ModalSecondaryButton>

              <ModalPrimaryButton
                type = "button"
                onClick = {handleSaveMemo}
                disabled = {!isMemoChanged}
              >
                메모 저장
              </ModalPrimaryButton>
            </ModalFooter>
          </ModalCard>
        </ModalOverlay>
      )}

      {isStatusModalOpen && selectedInquiry && (
        <ModalOverlay onClick = {closeStatusModal}>
          <ModalCard onClick = {(e) => e.stopPropagation()}>
            <ModalHeader>
              <div>
                <ModalTitle>문의 상태 변경</ModalTitle>
                <ModalDescription>
                  {selectedInquiry.title} 항목의 처리 상태를 변경할 수 있습니다
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
                  $selected = {selectedInquiry.status === '대기'}
                  disabled = {selectedInquiry.status === '대기'}
                  onClick = {() => openStatusConfirmModal('대기')}
                >
                  <Clock3 className = "option-icon" />
                  대기
                </OptionButton>

                <OptionButton
                  type = "button"
                  $selected = {selectedInquiry.status === '처리중'}
                  disabled = {selectedInquiry.status === '처리중'}
                  onClick = {() => openStatusConfirmModal('처리중')}
                >
                  <AlertTriangle className = "option-icon" />
                  처리중
                </OptionButton>

                <OptionButton
                  type = "button"
                  $selected = {selectedInquiry.status === '완료'}
                  disabled = {selectedInquiry.status === '완료'}
                  onClick = {() => openStatusConfirmModal('완료')}
                >
                  <CheckCircle2 className = "option-icon" />
                  완료
                </OptionButton>
              </OptionList>

              {selectedInquiry.status === '완료' && (
                <InfoMessage>
                  <Info className = "info-icon" />
                  <span>완료된 문의를 다시 변경하면 처리 상태 이력이 바뀐 것처럼 보일 수 있습니다.</span>
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

      {isStatusConfirmModalOpen && selectedInquiry && pendingStatus && (
        <ModalOverlay onClick = {closeStatusConfirmModal}>
          <ModalCard onClick = {(e) => e.stopPropagation()}>
            <ModalHeader>
              <div>
                <ModalTitle>상태를 변경하시겠습니까?</ModalTitle>
                <ModalDescription>
                  문의 처리 상태 변경은 운영 흐름과 응답 우선순위에 반영됩니다.
                </ModalDescription>
              </div>

              <ModalCloseButton type = "button" onClick = {closeStatusConfirmModal}>
                <X className = "close-icon" />
              </ModalCloseButton>
            </ModalHeader>

            <ModalBody>
              <InfoGrid>
                <InfoItem>
                  <InfoLabel>문의 제목</InfoLabel>
                  <InfoValue>{selectedInquiry.title}</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>작성자</InfoLabel>
                  <InfoValue>{selectedInquiry.author}</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>현재 상태</InfoLabel>
                  <InfoValue>{selectedInquiry.status}</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>변경 상태</InfoLabel>
                  <InfoValue>{pendingStatus}</InfoValue>
                </InfoItem>
              </InfoGrid>

              {pendingStatus === '완료' ? (
                <InfoMessage>
                  <Info className = "info-icon" />
                  <span>완료로 변경하면 운영 화면에서 해당 문의는 처리 완료 항목으로 보입니다.</span>
                </InfoMessage>
              ) : (
                <WarningMessage>
                  <AlertTriangle className = "warning-icon" />
                  <span>대기 또는 처리중 상태로 바꾸면 다시 후속 확인이 필요한 항목으로 분류됩니다.</span>
                </WarningMessage>
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

      {isDiscardMemoModalOpen && (
        <ModalOverlay onClick = {closeDiscardMemoModal}>
          <ModalCard onClick = {(e) => e.stopPropagation()}>
            <ModalHeader>
              <div>
                <ModalTitle>저장하지 않은 메모가 있습니다</ModalTitle>
                <ModalDescription>
                  현재 입력한 관리자 메모는 아직 저장되지 않았습니다.
                </ModalDescription>
              </div>

              <ModalCloseButton type = "button" onClick = {closeDiscardMemoModal}>
                <X className = "close-icon" />
              </ModalCloseButton>
            </ModalHeader>

            <ModalBody>
              <WarningMessage>
                <AlertTriangle className = "warning-icon" />
                <span>저장하지 않고 이동하면 현재 메모 수정 내용은 사라집니다.</span>
              </WarningMessage>
            </ModalBody>

            <ModalFooter>
              <ModalSecondaryButton type = "button" onClick = {closeDiscardMemoModal}>
                취소
              </ModalSecondaryButton>
              <ModalPrimaryButton type = "button" onClick = {confirmDiscardMemo}>
                이동하기
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