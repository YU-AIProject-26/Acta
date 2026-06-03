import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import {
  ResetCard,
  HeaderSection,
  Title,
  Subtitle,
  Form,
  FieldGroup,
  Label,
  TextInput,
  OutlineButton,
  CodeRow,
  CodeInputWrapper,
  CodeCheckButton,
  SubmitButton,
  BottomSection,
  BottomLink,
  HelperText,
  TimerText,
} from "./PasswordResetPage.styles";

import {
  sendPasswordCode,
  verifyPasswordCode,
  resetPassword,
} from "../api/auth_api";

const VERIFICATION_LIMIT_SECONDS = 180;

export default function PasswordResetPage() {
  const [email, setEmail] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [verificationMessage, setVerificationMessage] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

  useEffect(() => {
    if (!isCodeSent || remainingSeconds <= 0 || isVerified) {
      return;
    }

    const timer = window.setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          window.clearInterval(timer);
          setIsCodeSent(false);
          setVerificationMessage(
            "인증 시간이 만료되었습니다. 인증코드를 다시 요청해주세요.",
          );
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, [isCodeSent, remainingSeconds, isVerified]);

  const formattedTime = useMemo(() => {
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    return `${minutes}:${`${seconds}`.padStart(2, "0")}`;
  }, [remainingSeconds]);

  const isPasswordMatched =
    newPassword.trim().length > 0 &&
    newPasswordConfirm.trim().length > 0 &&
    newPassword === newPasswordConfirm;

  const passwordMessage = useMemo(() => {
    if (!newPassword && !newPasswordConfirm) {
      return "";
    }

    if (newPassword.length > 0 && newPassword.length < 8) {
      return "비밀번호는 8자 이상이어야 합니다.";
    }

    if (newPasswordConfirm.length > 0 && newPassword !== newPasswordConfirm) {
      return "비밀번호가 일치하지 않습니다.";
    }

    if (isPasswordMatched) {
      return "비밀번호가 일치합니다.";
    }

    return "";
  }, [newPassword, newPasswordConfirm, isPasswordMatched]);

  const isSubmitEnabled =
    email.trim().length > 0 &&
    isVerified &&
    newPassword.trim().length >= 8 &&
    newPasswordConfirm.trim().length > 0 &&
    isPasswordMatched;

  const handleSendCode = async () => {
    if (!email.trim()) {
      setVerificationMessage("이메일을 먼저 입력해주세요.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      setVerificationMessage("올바른 이메일 형식으로 입력해주세요.");
      return;
    }

    try {
      await sendPasswordCode(email.trim());

      setIsCodeSent(true);
      setIsVerified(false);
      setVerificationCode("");
      setRemainingSeconds(VERIFICATION_LIMIT_SECONDS);

      setVerificationMessage("인증코드를 전송했습니다.");
    } catch {
      setVerificationMessage("인증코드 전송 실패");
    }
  };

  const handleVerifyCode = async () => {
    if (!isCodeSent || remainingSeconds <= 0) {
      setVerificationMessage(
        "인증 시간이 만료되었습니다. 인증코드를 다시 요청해주세요.",
      );
      return;
    }

    if (!verificationCode.trim()) {
      setVerificationMessage("인증코드를 입력해주세요.");
      return;
    }

    try {
      await verifyPasswordCode(email.trim(), verificationCode.trim());

      setIsVerified(true);
      setIsCodeSent(false);
      setRemainingSeconds(0);
      setVerificationMessage("이메일 인증이 완료되었습니다.");
    } catch {
      setIsVerified(false);
      setVerificationMessage("인증코드가 올바르지 않습니다.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isSubmitEnabled) return;

    try {
      await resetPassword(email.trim(), verificationCode.trim(), newPassword);

      alert("비밀번호 변경 완료! 로그인으로 이동하세요");

      // 로그인 페이지 이동
      window.location.href = "/auth/login";
    } catch {
      alert("비밀번호 변경 실패");
    }
  };

  return (
    <ResetCard>
      <HeaderSection>
        <Title>비밀번호 재설정</Title>
        <Subtitle>이메일 주소를 입력하시면 인증코드를 보내드립니다</Subtitle>
      </HeaderSection>

      <Form onSubmit={handleSubmit}>
        <FieldGroup>
          <Label htmlFor="email">이메일</Label>
          <TextInput
            id="email"
            type="email"
            placeholder="example@acta.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isCodeSent || isVerified}
          />
        </FieldGroup>

        <OutlineButton
          type="button"
          onClick={handleSendCode}
          disabled={isVerified}
        >
          인증코드 받기
        </OutlineButton>

        <FieldGroup>
          <Label htmlFor="code">인증코드</Label>
          <CodeRow>
            <CodeInputWrapper>
              <TextInput
                id="code"
                type="text"
                placeholder="6자리 코드 입력"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                disabled={!isCodeSent || isVerified}
              />
            </CodeInputWrapper>
            <CodeCheckButton
              type="button"
              onClick={handleVerifyCode}
              disabled={isVerified}
            >
              확인
            </CodeCheckButton>
          </CodeRow>

          {isCodeSent && !isVerified && (
            <TimerText>남은 인증 시간 {formattedTime}</TimerText>
          )}

          {verificationMessage && (
            <HelperText $state={isVerified ? "success" : "default"}>
              {verificationMessage}
            </HelperText>
          )}
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="new-password">새 비밀번호</Label>
          <TextInput
            id="new-password"
            type="password"
            placeholder="8자 이상 입력해주세요"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="new-password-confirm">새 비밀번호 확인</Label>
          <TextInput
            id="new-password-confirm"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            value={newPasswordConfirm}
            onChange={(e) => setNewPasswordConfirm(e.target.value)}
          />

          {passwordMessage && (
            <HelperText $state={isPasswordMatched ? "success" : "error"}>
              {passwordMessage}
            </HelperText>
          )}
        </FieldGroup>

        <SubmitButton type="submit" disabled={!isSubmitEnabled}>
          비밀번호 변경
        </SubmitButton>
      </Form>

      <BottomSection>
        <BottomLink as={Link} to="/auth/login">
          로그인으로 돌아가기
        </BottomLink>
      </BottomSection>
    </ResetCard>
  );
}
