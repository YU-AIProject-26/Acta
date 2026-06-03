import { useState } from 'react';
import { Bell, CheckCircle, Calendar, Clock, Users, Trash2 } from 'lucide-react';
import {
  PageWrapper,
  Inner,
  HeaderRow,
  HeaderTextGroup,
  Title,
  UnreadText,
  OutlineButton,
  FilterRow,
  FilterButton,
  NotificationList,
  NotificationCard,
  NotificationInner,
  NotificationIconBox,
  NotificationContent,
  NotificationTopRow,
  NotificationTitle,
  UnreadDot,
  ActionButtons,
  IconActionButton,
  NotificationMessage,
  NotificationTime,
  EmptyCard,
  EmptyIconBox,
  EmptyTitle,
  EmptyDescription,
} from './NotificationsPage.styles';

type NotificationType = 'meeting' | 'todo' | 'calendar' | 'system';
type NotificationStatus = 'unread' | 'read';

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  status: NotificationStatus;
  createdAt: Date;
}

function formatNotificationTime(date: Date) {
  const now = Date.now();
  const diff = now - date.getTime();

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (diff < minute) {
    return '방금 전';
  }

  if (diff < hour) {
    return `${Math.floor(diff / minute)}분 전`;
  }

  if (diff < day) {
    return `${Math.floor(diff / hour)}시간 전`;
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const dayOfMonth = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}.${month}.${dayOfMonth} ${hours}:${minutes}`;
}

export default function NotificationsPage() {
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'meeting',
      title: '회의 분석이 완료되었습니다',
      message: '"주간 마케팅 회의" 분석 결과를 확인해보세요',
      status: 'unread',
      createdAt: new Date(Date.now() - 30 * 1000),
    },
    {
      id: '2',
      type: 'todo',
      title: '새로운 Todo가 생성되었습니다',
      message: '마케팅 자료 준비하기 외 2건이 추가되었습니다',
      status: 'unread',
      createdAt: new Date(Date.now() - 15 * 60 * 1000),
    },
    {
      id: '3',
      type: 'calendar',
      title: '일정이 추가되었습니다',
      message: '내일 오후 2:00 - 팀 미팅',
      status: 'unread',
      createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
    },
    {
      id: '4',
      type: 'todo',
      title: 'Todo 마감이 임박했습니다',
      message: '"예산안 검토"가 오늘 마감입니다',
      status: 'read',
      createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
    },
    {
      id: '5',
      type: 'system',
      title: '회의 참여 요청',
      message: '김철수님이 "Q1 결산 회의"에 초대했습니다',
      status: 'read',
      createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
    },
    {
      id: '6',
      type: 'meeting',
      title: '회의 녹음이 완료되었습니다',
      message: '"프로젝트 킥오프" 회의 녹음 파일이 저장되었습니다',
      status: 'read',
      createdAt: new Date(Date.now() - 30 * 60 * 60 * 1000),
    },
  ]);

  const getIcon = (type: NotificationType) => {
    switch (type) {
      case 'meeting':
        return <Bell className="notification-type-icon meeting" />;
      case 'todo':
        return <CheckCircle className="notification-type-icon todo" />;
      case 'calendar':
        return <Calendar className="notification-type-icon calendar" />;
      case 'system':
        return <Users className="notification-type-icon system" />;
    }
  };

  const getIconVariant = (type: NotificationType) => {
    switch (type) {
      case 'meeting':
        return 'meeting';
      case 'todo':
        return 'todo';
      case 'calendar':
        return 'calendar';
      case 'system':
        return 'system';
    }
  };

  const filteredNotifications = notifications.filter((notification) => {
    if (filter === 'all') return true;
    return notification.status === filter;
  });

  const unreadCount = notifications.filter((notification) => notification.status === 'unread').length;

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, status: 'read' as const } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, status: 'read' as const }))
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  return (
    <PageWrapper>
      <Inner>
        <HeaderRow>
          <HeaderTextGroup>
            <Title>알림</Title>
            {unreadCount > 0 && <UnreadText>읽지 않은 알림 {unreadCount}개</UnreadText>}
          </HeaderTextGroup>

          {unreadCount > 0 && (
            <OutlineButton type = "button" onClick = {markAllAsRead}>
              <CheckCircle className = "button-icon" />
              모두 읽음 처리
            </OutlineButton>
          )}
        </HeaderRow>

        <FilterRow>
          <FilterButton
            type = "button"
            $active = {filter === 'all'}
            onClick = {() => setFilter('all')}
          >
            전체 ({notifications.length})
          </FilterButton>

          <FilterButton
            type = "button"
            $active = {filter === 'unread'}
            onClick = {() => setFilter('unread')}
          >
            읽지 않음 ({unreadCount})
          </FilterButton>

          <FilterButton
            type = "button"
            $active = {filter === 'read'}
            onClick = {() => setFilter('read')}
          >
            읽음 ({notifications.length - unreadCount})
          </FilterButton>
        </FilterRow>

        {filteredNotifications.length > 0 ? (
          <NotificationList>
            {filteredNotifications.map((notification) => (
              <NotificationCard
                key={notification.id}
                $unread={notification.status === 'unread'}
              >
                <NotificationInner>
                  <NotificationIconBox $variant = {getIconVariant(notification.type)}>
                    {getIcon(notification.type)}
                  </NotificationIconBox>

                  <NotificationContent>
                    <NotificationTopRow>
                      <NotificationTitle>
                        {notification.title}
                        {notification.status === 'unread' && <UnreadDot />}
                      </NotificationTitle>

                      <ActionButtons>
                        {notification.status === 'unread' && (
                          <IconActionButton
                            type = "button"
                            title = "읽음 처리"
                            onClick = {() => markAsRead(notification.id)}
                          >
                            <CheckCircle className = "action-icon read" />
                          </IconActionButton>
                        )}

                        <IconActionButton
                          type = "button"
                          title = "삭제"
                          onClick = {() => deleteNotification(notification.id)}
                        >
                          <Trash2 className = "action-icon delete" />
                        </IconActionButton>
                      </ActionButtons>
                    </NotificationTopRow>

                    <NotificationMessage>{notification.message}</NotificationMessage>

                    <NotificationTime>
                      <Clock className = "time-icon" />
                      {formatNotificationTime(notification.createdAt)}
                    </NotificationTime>
                  </NotificationContent>
                </NotificationInner>
              </NotificationCard>
            ))}
          </NotificationList>
        ) : (
          <EmptyCard>
            <EmptyIconBox>
              <Bell />
            </EmptyIconBox>

            <EmptyTitle>알림이 없습니다</EmptyTitle>
            <EmptyDescription>새로운 알림이 있으면 여기에 표시됩니다</EmptyDescription>
          </EmptyCard>
        )}
      </Inner>
    </PageWrapper>
  );
}