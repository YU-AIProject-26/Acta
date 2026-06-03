import { useState } from "react";
import {
  Bell,
  CalendarDays,
  CheckSquare,
  ClipboardList,
  User,
} from "lucide-react";
import {
  HeaderWrapper,
  HeaderInner,
  LogoLink,
  LogoIcon,
  LogoText,
  Nav,
  NavItemLink,
  GhostButton,
  IconButton,
  BadgeBubble,
  RightActions,
  DropdownWrapper,
  DropdownPanel,
  DropdownHeader,
  DropdownTitle,
  DropdownHeaderButton,
  NotificationList,
  NotificationItem,
  NotificationIconBox,
  NotificationContent,
  NotificationTopRow,
  NotificationTitle,
  NotificationUnreadDot,
  NotificationDescription,
  NotificationTime,
  DropdownFooter,
  FooterButtonLink,
  ProfileInfo,
  ProfileName,
  ProfileEmail,
  ProfileMenuList,
  ProfileMenuLink,
} from "./Header.styles";
import { useAuth } from "../contexts/useAuth";

type NotificationVariant = "blue" | "green" | "purple" | "orange" | "gray";

type NotificationItemType = {
  id: number;
  title: string;
  description: string;
  unread: boolean;
  type: NotificationVariant;
  createdAt: Date;
};

function formatNotificationTime(date: Date) {
  const now = Date.now();
  const diff = now - date.getTime();
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (diff < minute) return "방금 전";
  if (diff < hour) return `${Math.floor(diff / minute)}분 전`;
  if (diff < day) return `${Math.floor(diff / hour)}시간 전`;

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const dayOfMonth = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}.${month}.${dayOfMonth} ${hours}:${minutes}`;
}

function NotificationIcon({ type }: { type: NotificationVariant }) {
  if (type === "green") return <CheckSquare className="notify-icon" />;
  if (type === "purple") return <CalendarDays className="notify-icon" />;
  if (type === "orange") return <ClipboardList className="notify-icon" />;
  return <Bell className="notify-icon" />;
}

export default function Header() {
  const { user, logout } = useAuth();

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [notifications, setNotifications] = useState<NotificationItemType[]>(
    () => {
      const now = Date.now();

      return [
        {
          id: 1,
          title: "회의 분석이 완료되었습니다.",
          description: "주간 마케팅 회의 분석 결과를 확인해보세요.",
          unread: true,
          type: "blue",
          createdAt: new Date(now - 30 * 1000),
        },
        {
          id: 2,
          title: "새 Todo가 생성되었습니다.",
          description: "회의 자료 준비하기 외 2건이 추가되었습니다.",
          unread: true,
          type: "green",
          createdAt: new Date(now - 15 * 60 * 1000),
        },
        {
          id: 3,
          title: "일정이 추가되었습니다.",
          description: "내일 오후 2:00 팀 미팅이 등록되었습니다.",
          unread: true,
          type: "purple",
          createdAt: new Date(now - 60 * 60 * 1000),
        },
        {
          id: 4,
          title: "Todo 마감이 임박했습니다.",
          description: "예산안 검토가 오늘 마감입니다.",
          unread: false,
          type: "orange",
          createdAt: new Date(now - 30 * 60 * 60 * 1000),
        },
      ];
    },
  );

  const unreadCount = notifications.filter((item) => item.unread).length;
  const isAdmin = user?.role?.toUpperCase() === "ADMIN";

  const closeAllDropdowns = () => {
    setIsNotificationOpen(false);
    setIsProfileOpen(false);
  };

  const handleReadAll = () => {
    setNotifications((prev) =>
      prev.map((item) => ({ ...item, unread: false })),
    );
    setIsNotificationOpen(false);
  };

  const handleLogout = async () => {
    await logout();
    closeAllDropdowns();
  };

  return (
    <HeaderWrapper>
      <HeaderInner>
        <LogoLink to="/" onClick={closeAllDropdowns}>
          <LogoIcon>
            <span>A</span>
          </LogoIcon>
          <LogoText>Acta</LogoText>
        </LogoLink>

        <Nav>
          <NavItemLink to="/meetings" onClick={closeAllDropdowns}>
            <GhostButton type="button">회의</GhostButton>
          </NavItemLink>
          <NavItemLink to="/calendar" onClick={closeAllDropdowns}>
            <GhostButton type="button">일정</GhostButton>
          </NavItemLink>
          <NavItemLink to="/todo" onClick={closeAllDropdowns}>
            <GhostButton type="button">Todo</GhostButton>
          </NavItemLink>
        </Nav>

        <RightActions>
          <DropdownWrapper>
            <IconButton
              type="button"
              onClick={() => {
                setIsNotificationOpen((prev) => !prev);
                setIsProfileOpen(false);
              }}
            >
              <Bell className="icon" />
              {unreadCount > 0 && <BadgeBubble>{unreadCount}</BadgeBubble>}
            </IconButton>

            {isNotificationOpen && (
              <DropdownPanel $type="notification">
                <DropdownHeader>
                  <DropdownTitle>알림</DropdownTitle>
                  <DropdownHeaderButton type="button" onClick={handleReadAll}>
                    모두 읽음
                  </DropdownHeaderButton>
                </DropdownHeader>

                <NotificationList>
                  {notifications.map((item) => (
                    <NotificationItem
                      key={item.id}
                      onClick={() => {
                        setNotifications((prev) =>
                          prev.map((notification) =>
                            notification.id === item.id
                              ? { ...notification, unread: false }
                              : notification,
                          ),
                        );
                        setIsNotificationOpen(false);
                      }}
                    >
                      <NotificationIconBox $variant={item.type}>
                        <NotificationIcon type={item.type} />
                      </NotificationIconBox>

                      <NotificationContent>
                        <NotificationTopRow>
                          <NotificationTitle>{item.title}</NotificationTitle>
                          {item.unread && <NotificationUnreadDot />}
                        </NotificationTopRow>
                        <NotificationDescription>
                          {item.description}
                        </NotificationDescription>
                        <NotificationTime>
                          {formatNotificationTime(item.createdAt)}
                        </NotificationTime>
                      </NotificationContent>
                    </NotificationItem>
                  ))}
                </NotificationList>

                <DropdownFooter>
                  <FooterButtonLink
                    to="/notifications"
                    onClick={closeAllDropdowns}
                  >
                    모든 알림 보기
                  </FooterButtonLink>
                </DropdownFooter>
              </DropdownPanel>
            )}
          </DropdownWrapper>

          <DropdownWrapper>
            <IconButton
              type="button"
              $rounded
              $filled
              onClick={() => {
                setIsProfileOpen((prev) => !prev);
                setIsNotificationOpen(false);
              }}
            >
              <User className="icon" />
            </IconButton>

            {isProfileOpen && (
              <DropdownPanel $type="profile">
                <ProfileInfo>
                  <ProfileName>{user?.nickname ?? "사용자"}</ProfileName>
                  <ProfileEmail>{user?.email ?? ""}</ProfileEmail>
                </ProfileInfo>

                <ProfileMenuList>
                  {isAdmin && (
                    <ProfileMenuLink to="/admin" onClick={closeAllDropdowns}>
                      관리자 페이지
                    </ProfileMenuLink>
                  )}

                  <ProfileMenuLink to="/my" onClick={closeAllDropdowns}>
                    마이페이지
                  </ProfileMenuLink>
                  <ProfileMenuLink to="/settings" onClick={closeAllDropdowns}>
                    환경설정
                  </ProfileMenuLink>
                  <ProfileMenuLink to="/landing" $danger onClick={handleLogout}>
                    로그아웃
                  </ProfileMenuLink>
                </ProfileMenuList>
              </DropdownPanel>
            )}
          </DropdownWrapper>
        </RightActions>
      </HeaderInner>
    </HeaderWrapper>
  );
}
