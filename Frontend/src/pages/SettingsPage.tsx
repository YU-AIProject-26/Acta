import { useState } from 'react';
import {
  Bell,
  Calendar as CalendarIcon,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';
import {
  PageWrapper,
  Inner,
  HeaderTitle,
  SectionStack,
  Card,
  CardHeader,
  IconBox,
  HeaderTextGroup,
  CardTitle,
  CardDescription,
  SettingList,
  SettingItem,
  SettingLeft,
  SettingTextGroup,
  SettingLabel,
  SettingHint,
  SwitchButton,
  IntegrationRow,
  IntegrationLeft,
  IntegrationIconBox,
  IntegrationInfo,
  IntegrationTitle,
  IntegrationStatus,
  PrimaryButton,
  OutlineButton,
} from './SettingsPage.styles';

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    todoCreated: true,
    deadlineWarning: true,
    analysisComplete: true,
    meetingInvite: true,
  });
  const [isGoogleConnected, setIsGoogleConnected] = useState(false);

  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleGoogleToggle = () => {
    setIsGoogleConnected((prev) => !prev);
  };

  return (
    <PageWrapper>
      <Inner>
        <HeaderTitle>환경설정</HeaderTitle>

        <SectionStack>
          <Card>
            <CardHeader>
              <IconBox>
                <Bell />
              </IconBox>

              <HeaderTextGroup>
                <CardTitle>알림 설정</CardTitle>
                <CardDescription>받고 싶은 알림을 선택하세요</CardDescription>
              </HeaderTextGroup>
            </CardHeader>

            <SettingList>
              <SettingItem>
                <SettingLeft>
                  <CheckCircle className = "setting-icon setting-icon-green" />

                  <SettingTextGroup>
                    <SettingLabel>Todo 생성 알림</SettingLabel>
                    <SettingHint>
                      회의에서 Todo가 자동 생성되면 알림을 받습니다
                    </SettingHint>
                  </SettingTextGroup>
                </SettingLeft>

                <SwitchButton
                  type = "button"
                  $checked = {notifications.todoCreated}
                  onClick = {() => handleToggle('todoCreated')}
                  aria-label = "Todo 생성 알림 토글"
                >
                  <span />
                </SwitchButton>
              </SettingItem>

              <SettingItem>
                <SettingLeft>
                  <AlertTriangle className = "setting-icon setting-icon-orange" />

                  <SettingTextGroup>
                    <SettingLabel>일정 마감 알림</SettingLabel>
                    <SettingHint>
                      Todo 마감 시간이 임박하면 알림을 받습니다
                    </SettingHint>
                  </SettingTextGroup>
                </SettingLeft>

                <SwitchButton
                  type = "button"
                  $checked = {notifications.deadlineWarning}
                  onClick = {() => handleToggle('deadlineWarning')}
                  aria-label = "일정 마감 알림 토글"
                >
                  <span />
                </SwitchButton>
              </SettingItem>

              <SettingItem>
                <SettingLeft>
                  <Bell className = "setting-icon setting-icon-blue" />

                  <SettingTextGroup>
                    <SettingLabel>회의 분석 완료 알림</SettingLabel>
                    <SettingHint>
                      AI 회의 분석이 완료되면 알림을 받습니다
                    </SettingHint>
                  </SettingTextGroup>
                </SettingLeft>

                <SwitchButton
                  type = "button"
                  $checked = {notifications.analysisComplete}
                  onClick = {() => handleToggle('analysisComplete')}
                  aria-label = "회의 분석 완료 알림 토글"
                >
                  <span />
                </SwitchButton>
              </SettingItem>

              <SettingItem>
                <SettingLeft>
                  <CalendarIcon className = "setting-icon setting-icon-purple" />

                  <SettingTextGroup>
                    <SettingLabel>회의 초대 알림</SettingLabel>
                    <SettingHint>
                      새로운 회의에 초대되면 알림을 받습니다
                    </SettingHint>
                  </SettingTextGroup>
                </SettingLeft>

                <SwitchButton
                  type = "button"
                  $checked = {notifications.meetingInvite}
                  onClick = {() => handleToggle('meetingInvite')}
                  aria-label = "회의 초대 알림 토글"
                >
                  <span />
                </SwitchButton>
              </SettingItem>
            </SettingList>
          </Card>

          <Card>
            <CardHeader>
              <IconBox>
                <CalendarIcon />
              </IconBox>

              <HeaderTextGroup>
                <CardTitle>외부 연동</CardTitle>
                <CardDescription>
                  외부 서비스와 연동하여 일정을 동기화하세요
                </CardDescription>
              </HeaderTextGroup>
            </CardHeader>

            <IntegrationRow>
              <IntegrationLeft>
                <IntegrationIconBox>
                  <svg width = "24" height = "24" viewBox = "0 0 24 24">
                    <path
                      fill = "#4285F4"
                      d = "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill = "#34A853"
                      d = "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill = "#FBBC05"
                      d = "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill = "#EA4335"
                      d = "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                </IntegrationIconBox>

                <IntegrationInfo>
                  <IntegrationTitle>Google Calendar</IntegrationTitle>
                  <IntegrationStatus>
                    {isGoogleConnected ? '연동됨' : '연동되지 않음'}
                  </IntegrationStatus>
                </IntegrationInfo>
              </IntegrationLeft>

              {isGoogleConnected ? (
                <OutlineButton type = "button" onClick = {handleGoogleToggle}>
                  연동 해제
                </OutlineButton>
              ) : (
                <PrimaryButton type = "button" onClick = {handleGoogleToggle}>
                  연동하기
                </PrimaryButton>
              )}
            </IntegrationRow>
          </Card>
        </SectionStack>
      </Inner>
    </PageWrapper>
  );
}