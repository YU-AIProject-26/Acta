import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Folder,
  Plus,
  MoreVertical,
  Clock,
  CheckCircle2,
  Loader2,
  XCircle,
  X,
  Share2,
  Copy,
  FileText,
  AlertTriangle,
} from "lucide-react";
import { fetchMeetings, type MeetingListItem } from "../api/meetings_api";
import {
  PageWrapper,
  HeaderSection,
  HeaderLeft,
  HeaderTitle,
  HeaderDescription,
  HeaderActionRow,
  PrimaryActionButton,
  FilterCard,
  FilterRow,
  SearchField,
  SearchIconBox,
  SearchInput,
  FilterSelect,
  FolderFilterWrapper,
  FolderFilterButton,
  FolderFilterMenu,
  FolderFilterMenuItem,
  MeetingsGrid,
  MeetingLink,
  MeetingCard,
  MeetingTop,
  MeetingLeft,
  MeetingTitle,
  MeetingMeta,
  MeetingSummary,
  MeetingBottom,
  MeetingTags,
  TagBadge,
  StatusBadge,
  MeetingFooter,
  MeetingFolderRow,
  MeetingMenuWrapper,
  MeetingMenuButton,
  MeetingMenu,
  MeetingMenuItem,
  ListCard,
  ListTableWrapper,
  ListTable,
  TableMeetingLink,
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
  ModalField,
  ModalLabel,
  ModalInput,
  ModalHelperText,
  ShareLinkBox,
  ShareLinkText,
  ShareOptionGroup,
  ShareOptionButton,
  ToastContainer,
  ToastBox,
  ToastCloseButton,
  EmptyStateCard,
  EmptyStateIconWrap,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateActionButton,
  WarningMessage,
} from "./MeetingsPage.styles";

type ViewMode = "card" | "list";
type MeetingStatus = "completed" | "analyzing" | "failed" | "uploaded";

type MeetingItem = {
  id: number;
  title: string;
  date: string;
  status: MeetingStatus;
  summary: string;
  duration: string;
  tags: string[];
  folder: string;
};

export default function MeetingsPage() {
  const [viewMode] = useState<ViewMode>("card");
  const [openFolderMenu, setOpenFolderMenu] = useState(false);
  const [openMeetingMenuId, setOpenMeetingMenuId] = useState<number | null>(
    null,
  );

  const [searchKeyword, setSearchKeyword] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | MeetingStatus>(
    "all",
  );
  const [selectedFolder, setSelectedFolder] = useState("전체");

  const [meetings, setMeetings] = useState<MeetingItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [folders, setFolders] = useState<string[]>([
    "전체",
    "마케팅팀",
    "제품팀",
    "개발팀",
    "디자인팀",
    "고객지원",
  ]);

  const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [shareTargetMeeting, setShareTargetMeeting] =
    useState<MeetingItem | null>(null);
  const [isMoveFolderMode, setIsMoveFolderMode] = useState(false);
  const [selectedMoveFolder, setSelectedMoveFolder] = useState("");

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteTargetMeeting, setDeleteTargetMeeting] =
    useState<MeetingItem | null>(null);

  const [toast, setToast] = useState<{
    open: boolean;
    message: string;
    variant: "success" | "error";
  }>({
    open: false,
    message: "",
    variant: "success",
  });

  const folderMenuRef = useRef<HTMLDivElement | null>(null);
  const meetingMenuRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const formatMeetingAt = (meetingAt: string) => {
    const date = new Date(meetingAt);
    if (Number.isNaN(date.getTime())) {
      return meetingAt;
    }

    return date.toLocaleString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDurationMinutes = (minutes: number) => {
    if (minutes < 60) {
      return `${minutes}분`;
    }

    const hours = Math.floor(minutes / 60);
    const remaining = minutes % 60;
    return remaining === 0 ? `${hours}시간` : `${hours}시간 ${remaining}분`;
  };

  const parseMeetingStatus = (status: string): MeetingStatus => {
    switch (status) {
      case "PROCESSING":
        return "analyzing";
      case "COMPLETED":
        return "completed";
      case "FAILED":
        return "failed";
      case "UPLOADED":
        return "analyzing";
      default:
        return "completed";
    }
  };

  const mapApiMeetingToMeetingItem = (item: MeetingListItem): MeetingItem => ({
    id: item.id,
    title: item.title,
    date: formatMeetingAt(item.meetingAt),
    status: parseMeetingStatus(item.status),
    summary: item.oneLineSummary,
    duration: formatDurationMinutes(item.durationMinutes),
    tags: item.tags,
    folder: item.folderName,
  });

  useEffect(() => {
    let isCancelled = false;

    const loadMeetings = async () => {
      try {
        setIsLoading(true);
        const fetched = await fetchMeetings();
        if (isCancelled) return;
        setMeetings(fetched.map(mapApiMeetingToMeetingItem));
      } catch (error) {
        console.error("회의 목록 조회 실패:", error);
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    };

    loadMeetings();

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (folderMenuRef.current && !folderMenuRef.current.contains(target)) {
        setOpenFolderMenu(false);
      }

      if (openMeetingMenuId !== null) {
        const currentMenuRef = meetingMenuRefs.current[openMeetingMenuId];

        if (currentMenuRef && !currentMenuRef.contains(target)) {
          setOpenMeetingMenuId(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMeetingMenuId]);

  useEffect(() => {
    if (!toast.open) return;

    const timer = window.setTimeout(() => {
      setToast((prev) => ({
        ...prev,
        open: false,
      }));
    }, 2200);

    return () => {
      window.clearTimeout(timer);
    };
  }, [toast.open]);

  const filteredMeetings = useMemo(() => {
    return meetings.filter((meeting) => {
      const matchesKeyword = meeting.title
        .toLowerCase()
        .includes(searchKeyword.trim().toLowerCase());

      const matchesStatus =
        statusFilter === "all" ? true : meeting.status === statusFilter;

      const matchesFolder =
        selectedFolder === "전체" ? true : meeting.folder === selectedFolder;

      return matchesKeyword && matchesStatus && matchesFolder;
    });
  }, [meetings, searchKeyword, statusFilter, selectedFolder]);

  const showToast = (
    message: string,
    variant: "success" | "error" = "success",
  ) => {
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

  const toggleFolderMenu = () => {
    setOpenFolderMenu((prev) => !prev);
  };

  const toggleMeetingMenu = (meetingId: number) => {
    setOpenMeetingMenuId((prev) => (prev === meetingId ? null : meetingId));
  };

  const closeMeetingMenu = () => {
    setOpenMeetingMenuId(null);
  };

  const openDeleteModal = (meeting: MeetingItem) => {
    setDeleteTargetMeeting(meeting);
    setOpenMeetingMenuId(null);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteTargetMeeting(null);
    setIsDeleteModalOpen(false);
  };

  const handleConfirmDeleteMeeting = () => {
    if (!deleteTargetMeeting) return;

    setMeetings((prev) =>
      prev.filter((meeting) => meeting.id !== deleteTargetMeeting.id),
    );

    showToast("회의가 삭제되었습니다.", "success");
    closeDeleteModal();
  };

  const handleSelectFolder = (folderName: string) => {
    setSelectedFolder(folderName);
    setOpenFolderMenu(false);
  };

  const openCreateFolderModal = () => {
    setOpenFolderMenu(false);
    setNewFolderName("");
    setIsCreateFolderModalOpen(true);
  };

  const closeCreateFolderModal = () => {
    setIsCreateFolderModalOpen(false);
    setNewFolderName("");
  };

  const handleCreateFolder = () => {
    const trimmedFolderName = newFolderName.trim();

    if (!trimmedFolderName) return;

    if (folders.includes(trimmedFolderName)) {
      showToast("이미 존재하는 폴더입니다.", "error");
      return;
    }

    setFolders((prev) => [...prev, trimmedFolderName]);
    setSelectedFolder(trimmedFolderName);
    closeCreateFolderModal();
    showToast("새 폴더가 생성되었습니다.", "success");
  };

  const openShareModal = (meeting: MeetingItem) => {
    setShareTargetMeeting(meeting);
    setSelectedMoveFolder(meeting.folder);
    setIsMoveFolderMode(false);
    setOpenMeetingMenuId(null);
    setIsShareModalOpen(true);
  };

  const closeShareModal = () => {
    setIsShareModalOpen(false);
    setShareTargetMeeting(null);
    setIsMoveFolderMode(false);
    setSelectedMoveFolder("");
  };

  const handleCopyShareLink = async () => {
    if (!shareTargetMeeting) return;

    const shareLink = `${window.location.origin}/meetings/${shareTargetMeeting.id}`;

    try {
      await navigator.clipboard.writeText(shareLink);
      showToast("공유 링크가 복사되었습니다.", "success");
    } catch {
      showToast("링크 복사에 실패했습니다.", "error");
    }
  };

  const handleOpenMoveFolderMode = () => {
    if (!shareTargetMeeting) return;
    setSelectedMoveFolder(shareTargetMeeting.folder);
    setIsMoveFolderMode(true);
  };

  const handleMoveFolder = () => {
    if (!shareTargetMeeting || !selectedMoveFolder) return;

    setMeetings((prev) =>
      prev.map((meeting) =>
        meeting.id === shareTargetMeeting.id
          ? { ...meeting, folder: selectedMoveFolder }
          : meeting,
      ),
    );

    setShareTargetMeeting((prev) =>
      prev ? { ...prev, folder: selectedMoveFolder } : prev,
    );

    setIsMoveFolderMode(false);
    showToast("폴더가 변경되었습니다.", "success");
  };

  const handleResetFilters = () => {
    setSearchKeyword("");
    setStatusFilter("all");
    setSelectedFolder("전체");
  };

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

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      <PageWrapper>
        <HeaderSection>
          <HeaderLeft>
            <HeaderTitle>내 회의</HeaderTitle>
            <HeaderDescription>
              모든 회의를 관리하고 검색하세요
            </HeaderDescription>
          </HeaderLeft>

          <HeaderActionRow>
            <Link to="/meetings/create">
              <PrimaryActionButton type="button">
                <Plus className="action-icon" />
                회의 생성
              </PrimaryActionButton>
            </Link>
          </HeaderActionRow>
        </HeaderSection>

        <FilterCard>
          <FilterRow>
            <SearchField>
              <SearchIconBox>
                <Search className="search-icon" />
              </SearchIconBox>

              <SearchInput
                placeholder="회의 제목으로 검색..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
            </SearchField>

            <FilterSelect
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value as "all" | MeetingStatus)
              }
            >
              <option value="all">모든 상태</option>
              <option value="completed">완료</option>
              <option value="analyzing">분석중</option>
              <option value="failed">실패</option>
            </FilterSelect>

            <FolderFilterWrapper ref={folderMenuRef}>
              <FolderFilterButton type="button" onClick={toggleFolderMenu}>
                <Folder className="button-icon" />
                {selectedFolder}
              </FolderFilterButton>

              {openFolderMenu && (
                <FolderFilterMenu>
                  <FolderFilterMenuItem
                    type="button"
                    onClick={openCreateFolderModal}
                  >
                    <Plus className="menu-icon" />새 폴더 만들기
                  </FolderFilterMenuItem>

                  {folders.map((folder) => (
                    <FolderFilterMenuItem
                      key={folder}
                      type="button"
                      onClick={() => handleSelectFolder(folder)}
                    >
                      {folder}
                    </FolderFilterMenuItem>
                  ))}
                </FolderFilterMenu>
              )}
            </FolderFilterWrapper>
          </FilterRow>
        </FilterCard>

        {filteredMeetings.length === 0 ? (
          <EmptyStateCard>
            <EmptyStateIconWrap>
              <FileText className="empty-icon" />
            </EmptyStateIconWrap>

            <EmptyStateTitle>조건에 맞는 회의가 없습니다</EmptyStateTitle>

            <EmptyStateDescription>
              검색어 또는 필터 조건을 바꾸면 다른 회의를 확인할 수 있습니다.
            </EmptyStateDescription>

            <EmptyStateActionButton type="button" onClick={handleResetFilters}>
              필터 초기화
            </EmptyStateActionButton>
          </EmptyStateCard>
        ) : (
          <>
            {viewMode === "card" && (
              <MeetingsGrid>
                {filteredMeetings.map((meeting) => (
                  <MeetingLink key={meeting.id} to={`/meetings/${meeting.id}`}>
                    <MeetingCard>
                      <MeetingTop>
                        <MeetingLeft>
                          <MeetingTitle>{meeting.title}</MeetingTitle>

                          <MeetingMeta>
                            <Clock className="meeting-meta-icon" />
                            <span>{meeting.date}</span>
                            <span>•</span>
                            <span>{meeting.duration}</span>
                          </MeetingMeta>
                        </MeetingLeft>

                        <MeetingMenuWrapper
                          ref={(element) => {
                            meetingMenuRefs.current[meeting.id] = element;
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <MeetingMenuButton
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              toggleMeetingMenu(meeting.id);
                            }}
                          >
                            <MoreVertical className="meeting-more-icon" />
                          </MeetingMenuButton>

                          {openMeetingMenuId === meeting.id && (
                            <MeetingMenu>
                              <MeetingMenuItem
                                type="button"
                                onClick={closeMeetingMenu}
                              >
                                수정하기
                              </MeetingMenuItem>

                              <MeetingMenuItem
                                type="button"
                                onClick={() => openShareModal(meeting)}
                              >
                                공유하기
                              </MeetingMenuItem>

                              <MeetingMenuItem
                                type="button"
                                $danger={true}
                                onClick={() => openDeleteModal(meeting)}
                              >
                                삭제하기
                              </MeetingMenuItem>
                            </MeetingMenu>
                          )}
                        </MeetingMenuWrapper>
                      </MeetingTop>

                      <MeetingSummary>{meeting.summary}</MeetingSummary>

                      <MeetingBottom>
                        <MeetingTags>
                          {meeting.tags.map((tag) => (
                            <TagBadge key={tag}>{tag}</TagBadge>
                          ))}
                        </MeetingTags>

                        {getStatusBadge(meeting.status)}
                      </MeetingBottom>

                      <MeetingFooter>
                        <MeetingFolderRow>
                          <Folder className="folder-icon" />
                          <span>{meeting.folder}</span>
                        </MeetingFolderRow>
                      </MeetingFooter>
                    </MeetingCard>
                  </MeetingLink>
                ))}
              </MeetingsGrid>
            )}

            {viewMode === "list" && (
              <ListCard>
                <ListTableWrapper>
                  <ListTable>
                    <thead>
                      <tr>
                        <th>제목</th>
                        <th>날짜</th>
                        <th>시간</th>
                        <th>상태</th>
                        <th>폴더</th>
                        <th>작업</th>
                      </tr>
                    </thead>

                    <tbody>
                      {filteredMeetings.map((meeting) => (
                        <tr key={meeting.id}>
                          <td>
                            <TableMeetingLink to={`/meetings/${meeting.id}`}>
                              {meeting.title}
                            </TableMeetingLink>
                          </td>
                          <td>{meeting.date}</td>
                          <td>{meeting.duration}</td>
                          <td>{getStatusBadge(meeting.status)}</td>
                          <td>{meeting.folder}</td>
                          <td>
                            <MeetingMenuWrapper
                              ref={(element) => {
                                meetingMenuRefs.current[meeting.id] = element;
                              }}
                            >
                              <MeetingMenuButton
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault();
                                  toggleMeetingMenu(meeting.id);
                                }}
                              >
                                <MoreVertical className="meeting-more-icon" />
                              </MeetingMenuButton>

                              {openMeetingMenuId === meeting.id && (
                                <MeetingMenu $alignRight={true}>
                                  <MeetingMenuItem
                                    type="button"
                                    onClick={closeMeetingMenu}
                                  >
                                    수정하기
                                  </MeetingMenuItem>

                                  <MeetingMenuItem
                                    type="button"
                                    onClick={() => openShareModal(meeting)}
                                  >
                                    공유하기
                                  </MeetingMenuItem>

                                  <MeetingMenuItem
                                    type="button"
                                    $danger={true}
                                    onClick={() => openDeleteModal(meeting)}
                                  >
                                    삭제하기
                                  </MeetingMenuItem>
                                </MeetingMenu>
                              )}
                            </MeetingMenuWrapper>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </ListTable>
                </ListTableWrapper>
              </ListCard>
            )}
          </>
        )}
      </PageWrapper>

      {isCreateFolderModalOpen && (
        <ModalOverlay onClick={closeCreateFolderModal}>
          <ModalCard onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <div>
                <ModalTitle>새 폴더 만들기</ModalTitle>
                <ModalDescription>
                  회의를 분류할 새 폴더 이름을 입력하세요
                </ModalDescription>
              </div>

              <ModalCloseButton type="button" onClick={closeCreateFolderModal}>
                <X className="close-icon" />
              </ModalCloseButton>
            </ModalHeader>

            <ModalBody>
              <ModalField>
                <ModalLabel htmlFor="folder-name">폴더 이름</ModalLabel>
                <ModalInput
                  id="folder-name"
                  value={newFolderName}
                  onChange={(e) => setNewFolderName(e.target.value)}
                  placeholder="예: 기획팀 회의"
                />
                <ModalHelperText>
                  중복되지 않는 이름으로 폴더를 생성할 수 있습니다.
                </ModalHelperText>
              </ModalField>
            </ModalBody>

            <ModalFooter>
              <ModalSecondaryButton
                type="button"
                onClick={closeCreateFolderModal}
              >
                취소
              </ModalSecondaryButton>

              <ModalPrimaryButton
                type="button"
                onClick={handleCreateFolder}
                disabled={!newFolderName.trim()}
              >
                생성하기
              </ModalPrimaryButton>
            </ModalFooter>
          </ModalCard>
        </ModalOverlay>
      )}

      {isShareModalOpen && shareTargetMeeting && (
        <ModalOverlay onClick={closeShareModal}>
          <ModalCard onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <div>
                <ModalTitle>회의 공유하기</ModalTitle>
                <ModalDescription>
                  {shareTargetMeeting.title} 회의를 공유할 수 있습니다
                </ModalDescription>
              </div>

              <ModalCloseButton type="button" onClick={closeShareModal}>
                <X className="close-icon" />
              </ModalCloseButton>
            </ModalHeader>

            <ModalBody>
              <ModalField>
                <ModalLabel>공유 링크</ModalLabel>

                <ShareLinkBox>
                  <ShareLinkText>
                    {window.location.origin}/meetings/{shareTargetMeeting.id}
                  </ShareLinkText>

                  <ShareOptionButton
                    type="button"
                    onClick={handleCopyShareLink}
                  >
                    <Copy className="share-option-icon" />
                    복사
                  </ShareOptionButton>
                </ShareLinkBox>

                <ModalHelperText>
                  링크를 복사해 팀원에게 전달할 수 있습니다.
                </ModalHelperText>
              </ModalField>

              <ModalField>
                <ModalLabel>빠른 공유</ModalLabel>

                <ShareOptionGroup>
                  <ShareOptionButton
                    type="button"
                    onClick={handleCopyShareLink}
                  >
                    <Share2 className="share-option-icon" />
                    링크 공유
                  </ShareOptionButton>

                  <ShareOptionButton
                    type="button"
                    onClick={handleOpenMoveFolderMode}
                  >
                    <Folder className="share-option-icon" />
                    폴더로 이동
                  </ShareOptionButton>
                </ShareOptionGroup>
              </ModalField>

              {isMoveFolderMode && (
                <ModalField>
                  <ModalLabel htmlFor="move-folder-select">
                    이동할 폴더
                  </ModalLabel>

                  <FilterSelect
                    id="move-folder-select"
                    value={selectedMoveFolder}
                    onChange={(e) => setSelectedMoveFolder(e.target.value)}
                  >
                    {folders
                      .filter((folder) => folder !== "전체")
                      .map((folder) => (
                        <option key={folder} value={folder}>
                          {folder}
                        </option>
                      ))}
                  </FilterSelect>

                  <ModalHelperText>
                    선택한 폴더로 회의가 즉시 이동됩니다.
                  </ModalHelperText>

                  <ModalFooter>
                    <ModalSecondaryButton
                      type="button"
                      onClick={() => setIsMoveFolderMode(false)}
                    >
                      취소
                    </ModalSecondaryButton>

                    <ModalPrimaryButton
                      type="button"
                      onClick={handleMoveFolder}
                    >
                      이동하기
                    </ModalPrimaryButton>
                  </ModalFooter>
                </ModalField>
              )}
            </ModalBody>

            {!isMoveFolderMode && (
              <ModalFooter>
                <ModalSecondaryButton type="button" onClick={closeShareModal}>
                  닫기
                </ModalSecondaryButton>
              </ModalFooter>
            )}
          </ModalCard>
        </ModalOverlay>
      )}

      {isDeleteModalOpen && deleteTargetMeeting && (
        <ModalOverlay onClick={closeDeleteModal}>
          <ModalCard onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <div>
                <ModalTitle>회의를 삭제하시겠습니까?</ModalTitle>
                <ModalDescription>
                  삭제한 회의는 목록에서 바로 사라지며 복구할 수 없습니다.
                </ModalDescription>
              </div>

              <ModalCloseButton type="button" onClick={closeDeleteModal}>
                <X className="close-icon" />
              </ModalCloseButton>
            </ModalHeader>

            <ModalBody>
              <ModalField>
                <ModalLabel>회의 제목</ModalLabel>
                <ShareLinkText>{deleteTargetMeeting.title}</ShareLinkText>
              </ModalField>

              <ModalField>
                <ModalLabel>폴더</ModalLabel>
                <ShareLinkText>{deleteTargetMeeting.folder}</ShareLinkText>
              </ModalField>

              <WarningMessage>
                <AlertTriangle className="warning-icon" />
                <span>삭제 후에는 이 회의를 다시 확인할 수 없습니다.</span>
              </WarningMessage>
            </ModalBody>

            <ModalFooter>
              <ModalSecondaryButton type="button" onClick={closeDeleteModal}>
                취소
              </ModalSecondaryButton>

              <ModalPrimaryButton
                type="button"
                onClick={handleConfirmDeleteMeeting}
              >
                삭제하기
              </ModalPrimaryButton>
            </ModalFooter>
          </ModalCard>
        </ModalOverlay>
      )}

      {toast.open && (
        <ToastContainer>
          <ToastBox $variant={toast.variant}>
            <span>{toast.message}</span>

            <ToastCloseButton type="button" onClick={closeToast}>
              <X className="toast-close-icon" />
            </ToastCloseButton>
          </ToastBox>
        </ToastContainer>
      )}
    </>
  );
}
