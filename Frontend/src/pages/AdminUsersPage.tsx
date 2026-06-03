import { useMemo, useState } from 'react';
import {
  Search,
  ChevronRight,
  Shield,
  UserX,
  CheckCircle2,
  Users,
  X,
  RotateCcw,
  AlertTriangle,
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
  RoleOptionList,
  RoleOptionButton,
  EmptyStateBox,
  EmptyStateText,
  SummaryRow,
  SummaryCard,
  SummaryLabel,
  SummaryValue,
  ToolbarActions,
  ToolbarButton,
  ResultMeta,
  WarningMessage,
  InfoMessage,
} from './AdminSubPage.styles';
import AdminActionToast from '../components/AdminActionToast';
import { useAuth } from '../contexts/useAuth';

type UserRole = 'admin' | 'user';
type UserStatus = '활성' | '대기' | '정지';
type UserSort =
  | 'joined-desc'
  | 'joined-asc'
  | 'nickname-asc'
  | 'meetings-desc';

type UserItem = {
  id: number;
  nickname: string;
  email: string;
  role: UserRole;
  joinedAt: string;
  status: UserStatus;
  meetings: number;
  todos: number;
};

export default function AdminUsersPage() {
  const { user } = useAuth();

  const [users, setUsers] = useState<UserItem[]>([
    {
      id: 1,
      nickname: '관리자',
      email: 'admin@acta.com',
      role: 'admin',
      joinedAt: '2026.05.10',
      status: '활성',
      meetings: 18,
      todos: 47,
    },
    {
      id: 2,
      nickname: '테스트 사용자',
      email: 'test@acta.com',
      role: 'admin',
      joinedAt: '2026.05.11',
      status: '활성',
      meetings: 9,
      todos: 16,
    },
    {
      id: 3,
      nickname: '민수',
      email: 'minsuu@acta.com',
      role: 'user',
      joinedAt: '2026.05.12',
      status: '활성',
      meetings: 12,
      todos: 22,
    },
    {
      id: 4,
      nickname: '지은',
      email: 'jieun@acta.com',
      role: 'user',
      joinedAt: '2026.05.12',
      status: '활성',
      meetings: 3,
      todos: 7,
    },
    {
      id: 5,
      nickname: '하린',
      email: 'harin@acta.com',
      role: 'user',
      joinedAt: '2026.05.13',
      status: '정지',
      meetings: 1,
      todos: 2,
    },
  ]);

  const [searchKeyword, setSearchKeyword] = useState('');
  const [roleFilter, setRoleFilter] = useState<'all' | UserRole>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | UserStatus>('all');
  const [sortBy, setSortBy] = useState<UserSort>('joined-desc');

  const [selectedUser, setSelectedUser] = useState<UserItem | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);

  const [pendingRole, setPendingRole] = useState<UserRole | null>(null);
  const [pendingStatus, setPendingStatus] = useState<UserStatus | null>(null);
  const [isRoleConfirmModalOpen, setIsRoleConfirmModalOpen] = useState(false);
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

  const filteredUsers = useMemo(() => {
    const result = users.filter((target) => {
      const matchesKeyword =
        target.nickname.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        target.email.toLowerCase().includes(searchKeyword.toLowerCase());

      const matchesRole = roleFilter === 'all' ? true : target.role === roleFilter;
      const matchesStatus =
        statusFilter === 'all' ? true : target.status === statusFilter;

      return matchesKeyword && matchesRole && matchesStatus;
    });

    return [...result].sort((a, b) => {
      if (sortBy === 'joined-desc') {
        return b.joinedAt.localeCompare(a.joinedAt);
      }

      if (sortBy === 'joined-asc') {
        return a.joinedAt.localeCompare(b.joinedAt);
      }

      if (sortBy === 'nickname-asc') {
        return a.nickname.localeCompare(b.nickname, 'ko');
      }

      return b.meetings - a.meetings;
    });
  }, [users, searchKeyword, roleFilter, statusFilter, sortBy]);

  const summary = useMemo(() => {
    return {
      total: users.length,
      admins: users.filter((item) => item.role === 'admin').length,
      active: users.filter((item) => item.status === '활성').length,
      pending: users.filter((item) => item.status === '대기').length,
    };
  }, [users]);

  const isSelf = selectedUser?.email === user?.email;
  const isTargetAdmin = selectedUser?.role === 'admin';
  const isTargetSuspended = selectedUser?.status === '정지';

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
    setRoleFilter('all');
    setStatusFilter('all');
    setSortBy('joined-desc');
    showToast('회원 관리 필터가 초기화되었습니다.', 'success');
  };

  const openDetailModal = (target: UserItem) => {
    setSelectedUser(target);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedUser(null);
  };

  const openRoleModal = (target: UserItem) => {
    setSelectedUser(target);
    setPendingRole(null);
    setIsRoleModalOpen(true);
  };

  const closeRoleModal = () => {
    setIsRoleModalOpen(false);
    setSelectedUser(null);
    setPendingRole(null);
  };

  const openStatusModal = (target: UserItem) => {
    setSelectedUser(target);
    setPendingStatus(null);
    setIsStatusModalOpen(true);
  };

  const closeStatusModal = () => {
    setIsStatusModalOpen(false);
    setSelectedUser(null);
    setPendingStatus(null);
  };

  const openRoleConfirmModal = (nextRole: UserRole) => {
    if (!selectedUser) return;
    if (selectedUser.role === nextRole) return;

    if (selectedUser.email === user?.email && nextRole !== 'admin') {
      showToast('현재 로그인한 관리자 자신의 권한은 일반 사용자로 변경할 수 없습니다.', 'error');
      closeRoleModal();
      return;
    }

    setPendingRole(nextRole);
    setIsRoleConfirmModalOpen(true);
  };

  const closeRoleConfirmModal = () => {
    setIsRoleConfirmModalOpen(false);
    setPendingRole(null);
  };

  const confirmRoleChange = () => {
    if (!selectedUser || !pendingRole) return;

    setUsers((prev) =>
      prev.map((target) =>
        target.id === selectedUser.id ? { ...target, role: pendingRole } : target
      )
    );

    showToast(
      `${selectedUser.nickname} 계정의 권한이 ${
        pendingRole === 'admin' ? '관리자' : '일반 사용자'
      }로 변경되었습니다.`,
      'success'
    );

    closeRoleConfirmModal();
    closeRoleModal();
  };

  const openStatusConfirmModal = (nextStatus: UserStatus) => {
    if (!selectedUser) return;
    if (selectedUser.status === nextStatus) return;

    if (selectedUser.email === user?.email && nextStatus === '정지') {
      showToast('현재 로그인한 관리자 자신의 계정은 정지할 수 없습니다.', 'error');
      closeStatusModal();
      return;
    }

    setPendingStatus(nextStatus);
    setIsStatusConfirmModalOpen(true);
  };

  const closeStatusConfirmModal = () => {
    setIsStatusConfirmModalOpen(false);
    setPendingStatus(null);
  };

  const confirmStatusChange = () => {
    if (!selectedUser || !pendingStatus) return;

    setUsers((prev) =>
      prev.map((target) =>
        target.id === selectedUser.id ? { ...target, status: pendingStatus } : target
      )
    );

    showToast(`${selectedUser.nickname} 계정의 상태가 ${pendingStatus}로 변경되었습니다.`, 'success');

    closeStatusConfirmModal();
    closeStatusModal();
  };

  return (
    <>
      <AdminSubPageWrapper>
        <SubPageHeader>
          <SubPageTopRow>
            <div>
              <SubPageTitle>회원 관리</SubPageTitle>
              <SubPageDescription>
                회원 목록과 권한, 상태를 관리합니다
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
            <SummaryLabel>전체 회원</SummaryLabel>
            <SummaryValue>{summary.total}</SummaryValue>
          </SummaryCard>
          <SummaryCard>
            <SummaryLabel>관리자</SummaryLabel>
            <SummaryValue>{summary.admins}</SummaryValue>
          </SummaryCard>
          <SummaryCard>
            <SummaryLabel>활성</SummaryLabel>
            <SummaryValue>{summary.active}</SummaryValue>
          </SummaryCard>
          <SummaryCard>
            <SummaryLabel>대기</SummaryLabel>
            <SummaryValue>{summary.pending}</SummaryValue>
          </SummaryCard>
        </SummaryRow>

        <SearchFilterRow>
          <SearchInputWrapper>
            <Search className = "search-icon" />
            <SearchInput
              value = {searchKeyword}
              onChange = {(e) => setSearchKeyword(e.target.value)}
              placeholder = "닉네임 또는 이메일 검색"
            />
          </SearchInputWrapper>

          <FilterSelect
            value = {roleFilter}
            onChange = {(e) => setRoleFilter(e.target.value as 'all' | UserRole)}
          >
            <option value = "all">전체 권한</option>
            <option value = "user">일반 사용자</option>
            <option value = "admin">관리자</option>
          </FilterSelect>

          <FilterSelect
            value = {statusFilter}
            onChange = {(e) => setStatusFilter(e.target.value as 'all' | UserStatus)}
          >
            <option value = "all">전체 상태</option>
            <option value = "활성">활성</option>
            <option value = "대기">대기</option>
            <option value = "정지">정지</option>
          </FilterSelect>

          <FilterSelect
            value = {sortBy}
            onChange = {(e) => setSortBy(e.target.value as UserSort)}
          >
            <option value = "joined-desc">최신 가입순</option>
            <option value = "joined-asc">오래된 가입순</option>
            <option value = "nickname-asc">닉네임순</option>
            <option value = "meetings-desc">회의 많은순</option>
          </FilterSelect>

          <ToolbarActions>
            <ToolbarButton type = "button" onClick = {resetToolbar}>
              <RotateCcw className = "toolbar-icon" />
              초기화
            </ToolbarButton>
          </ToolbarActions>
        </SearchFilterRow>

        <ResultMeta>현재 조건에 맞는 회원 {filteredUsers.length}명</ResultMeta>

        <DataCard>
          {filteredUsers.length === 0 ? (
            <EmptyStateBox>
              <Users className = "empty-icon" />
              <EmptyStateText>조건에 맞는 회원이 없습니다.</EmptyStateText>
            </EmptyStateBox>
          ) : (
            <DataTable>
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
                {filteredUsers.map((target) => (
                  <tr key = {target.id}>
                    <td>{target.nickname}</td>
                    <td>{target.email}</td>
                    <td>
                      <TableBadge $variant = {target.role === 'admin' ? 'admin' : 'default'}>
                        {target.role === 'admin' ? '관리자' : '일반'}
                      </TableBadge>
                    </td>
                    <td>{target.joinedAt}</td>
                    <td>
                      <TableBadge
                        $variant = {
                          target.status === '활성'
                            ? 'success'
                            : target.status === '대기'
                            ? 'pending'
                            : 'danger'
                        }
                      >
                        {target.status}
                      </TableBadge>
                    </td>
                    <td>
                      <TableActionRow>
                        <TableActionButton
                          type = "button"
                          onClick = {() => openDetailModal(target)}
                        >
                          상세 보기
                        </TableActionButton>

                        <TableActionButton
                          type = "button"
                          onClick = {() => openRoleModal(target)}
                        >
                          권한 변경
                        </TableActionButton>

                        <TableActionButton
                          type = "button"
                          onClick = {() => openStatusModal(target)}
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

      {isDetailModalOpen && selectedUser && (
        <ModalOverlay onClick = {closeDetailModal}>
          <ModalCard onClick = {(e) => e.stopPropagation()}>
            <ModalHeader>
              <div>
                <ModalTitle>회원 상세 정보</ModalTitle>
                <ModalDescription>
                  선택한 회원의 계정 정보와 활동 현황입니다
                </ModalDescription>
              </div>

              <ModalCloseButton type = "button" onClick = {closeDetailModal}>
                <X className = "close-icon" />
              </ModalCloseButton>
            </ModalHeader>

            <ModalBody>
              <InfoGrid>
                <InfoItem>
                  <InfoLabel>닉네임</InfoLabel>
                  <InfoValue>{selectedUser.nickname}</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>이메일</InfoLabel>
                  <InfoValue>{selectedUser.email}</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>권한</InfoLabel>
                  <InfoValue>
                    <TableBadge
                      $variant = {
                        selectedUser.role === 'admin' ? 'admin' : 'default'
                      }
                    >
                      {selectedUser.role === 'admin' ? '관리자' : '일반'}
                    </TableBadge>
                  </InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>상태</InfoLabel>
                  <InfoValue>
                    <TableBadge
                      $variant = {
                        selectedUser.status === '활성'
                          ? 'success'
                          : selectedUser.status === '대기'
                          ? 'pending'
                          : 'danger'
                      }
                    >
                      {selectedUser.status}
                    </TableBadge>
                  </InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>가입일</InfoLabel>
                  <InfoValue>{selectedUser.joinedAt}</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>생성 회의 수</InfoLabel>
                  <InfoValue>{selectedUser.meetings}</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>Todo 수</InfoLabel>
                  <InfoValue>{selectedUser.todos}</InfoValue>
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

      {isRoleModalOpen && selectedUser && (
        <ModalOverlay onClick = {closeRoleModal}>
          <ModalCard onClick = {(e) => e.stopPropagation()}>
            <ModalHeader>
              <div>
                <ModalTitle>회원 권한 변경</ModalTitle>
                <ModalDescription>
                  {selectedUser.nickname} 계정의 권한을 변경할 수 있습니다
                </ModalDescription>
              </div>

              <ModalCloseButton type = "button" onClick = {closeRoleModal}>
                <X className = "close-icon" />
              </ModalCloseButton>
            </ModalHeader>

            <ModalBody>
              <RoleOptionList>
                <RoleOptionButton
                  type = "button"
                  $selected = {selectedUser.role === 'user'}
                  disabled = {selectedUser.role === 'user'}
                  onClick = {() => openRoleConfirmModal('user')}
                >
                  <Users className = "role-icon" />
                  일반 사용자
                </RoleOptionButton>

                <RoleOptionButton
                  type = "button"
                  $selected = {selectedUser.role === 'admin'}
                  disabled = {selectedUser.role === 'admin'}
                  onClick = {() => openRoleConfirmModal('admin')}
                >
                  <Shield className = "role-icon" />
                  관리자
                </RoleOptionButton>
              </RoleOptionList>

              {isSelf && (
                <WarningMessage>
                  <AlertTriangle className = "warning-icon" />
                  <span>현재 로그인한 관리자 자신의 권한은 일반 사용자로 변경할 수 없습니다.</span>
                </WarningMessage>
              )}

              {isTargetAdmin && !isSelf && (
                <InfoMessage>
                  <Info className = "info-icon" />
                  <span>관리자 권한을 변경하면 해당 계정은 관리자 페이지 접근 권한을 잃을 수 있습니다.</span>
                </InfoMessage>
              )}
            </ModalBody>

            <ModalFooter>
              <ModalSecondaryButton type = "button" onClick = {closeRoleModal}>
                취소
              </ModalSecondaryButton>
            </ModalFooter>
          </ModalCard>
        </ModalOverlay>
      )}

      {isRoleConfirmModalOpen && selectedUser && pendingRole && (
        <ModalOverlay onClick = {closeRoleConfirmModal}>
          <ModalCard onClick = {(e) => e.stopPropagation()}>
            <ModalHeader>
              <div>
                <ModalTitle>권한을 변경하시겠습니까?</ModalTitle>
                <ModalDescription>
                  회원 권한 변경은 운영 범위에 직접 영향을 줄 수 있습니다.
                </ModalDescription>
              </div>

              <ModalCloseButton type = "button" onClick = {closeRoleConfirmModal}>
                <X className = "close-icon" />
              </ModalCloseButton>
            </ModalHeader>

            <ModalBody>
              <InfoGrid>
                <InfoItem>
                  <InfoLabel>대상 회원</InfoLabel>
                  <InfoValue>{selectedUser.nickname}</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>이메일</InfoLabel>
                  <InfoValue>{selectedUser.email}</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>현재 권한</InfoLabel>
                  <InfoValue>
                    {selectedUser.role === 'admin' ? '관리자' : '일반 사용자'}
                  </InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>변경 권한</InfoLabel>
                  <InfoValue>
                    {pendingRole === 'admin' ? '관리자' : '일반 사용자'}
                  </InfoValue>
                </InfoItem>
              </InfoGrid>

              <WarningMessage>
                <AlertTriangle className = "warning-icon" />
                <span>권한 변경 후에는 해당 계정의 접근 가능한 화면과 기능이 즉시 달라집니다.</span>
              </WarningMessage>
            </ModalBody>

            <ModalFooter>
              <ModalSecondaryButton type = "button" onClick = {closeRoleConfirmModal}>
                취소
              </ModalSecondaryButton>
              <ModalPrimaryButton type = "button" onClick = {confirmRoleChange}>
                변경하기
              </ModalPrimaryButton>
            </ModalFooter>
          </ModalCard>
        </ModalOverlay>
      )}

      {isStatusModalOpen && selectedUser && (
        <ModalOverlay onClick = {closeStatusModal}>
          <ModalCard onClick = {(e) => e.stopPropagation()}>
            <ModalHeader>
              <div>
                <ModalTitle>회원 상태 변경</ModalTitle>
                <ModalDescription>
                  {selectedUser.nickname} 계정의 상태를 변경할 수 있습니다
                </ModalDescription>
              </div>

              <ModalCloseButton type = "button" onClick = {closeStatusModal}>
                <X className = "close-icon" />
              </ModalCloseButton>
            </ModalHeader>

            <ModalBody>
              <RoleOptionList>
                <RoleOptionButton
                  type = "button"
                  $selected = {selectedUser.status === '활성'}
                  disabled = {selectedUser.status === '활성'}
                  onClick = {() => openStatusConfirmModal('활성')}
                >
                  <CheckCircle2 className = "role-icon" />
                  활성
                </RoleOptionButton>

                <RoleOptionButton
                  type = "button"
                  $selected = {selectedUser.status === '대기'}
                  disabled = {selectedUser.status === '대기'}
                  onClick = {() => openStatusConfirmModal('대기')}
                >
                  <Shield className = "role-icon" />
                  대기
                </RoleOptionButton>

                <RoleOptionButton
                  type = "button"
                  $selected = {selectedUser.status === '정지'}
                  disabled = {selectedUser.status === '정지'}
                  onClick = {() => openStatusConfirmModal('정지')}
                >
                  <UserX className = "role-icon" />
                  정지
                </RoleOptionButton>
              </RoleOptionList>

              {isSelf && (
                <WarningMessage>
                  <AlertTriangle className = "warning-icon" />
                  <span>현재 로그인한 관리자 자신의 계정은 정지할 수 없습니다.</span>
                </WarningMessage>
              )}

              {isTargetSuspended && (
                <InfoMessage>
                  <Info className = "info-icon" />
                  <span>정지된 계정을 활성 또는 대기 상태로 바꾸면 다시 서비스 접근이 가능해질 수 있습니다.</span>
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

      {isStatusConfirmModalOpen && selectedUser && pendingStatus && (
        <ModalOverlay onClick = {closeStatusConfirmModal}>
          <ModalCard onClick = {(e) => e.stopPropagation()}>
            <ModalHeader>
              <div>
                <ModalTitle>상태를 변경하시겠습니까?</ModalTitle>
                <ModalDescription>
                  회원 상태 변경은 계정 사용 가능 여부에 영향을 줍니다.
                </ModalDescription>
              </div>

              <ModalCloseButton type = "button" onClick = {closeStatusConfirmModal}>
                <X className = "close-icon" />
              </ModalCloseButton>
            </ModalHeader>

            <ModalBody>
              <InfoGrid>
                <InfoItem>
                  <InfoLabel>대상 회원</InfoLabel>
                  <InfoValue>{selectedUser.nickname}</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>이메일</InfoLabel>
                  <InfoValue>{selectedUser.email}</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>현재 상태</InfoLabel>
                  <InfoValue>{selectedUser.status}</InfoValue>
                </InfoItem>

                <InfoItem>
                  <InfoLabel>변경 상태</InfoLabel>
                  <InfoValue>{pendingStatus}</InfoValue>
                </InfoItem>
              </InfoGrid>

              <WarningMessage>
                <AlertTriangle className = "warning-icon" />
                <span>상태를 정지로 변경하면 해당 회원은 주요 기능을 더 이상 사용할 수 없습니다.</span>
              </WarningMessage>
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

      <AdminActionToast
        open = {toast.open}
        message = {toast.message}
        variant = {toast.variant}
        onClose = {closeToast}
      />
    </>
  );
}