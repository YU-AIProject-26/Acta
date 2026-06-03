import { Link, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import GoogleLogo from "../assets/google_logo.svg";
import NaverLogo from "../assets/naver_logo.svg";
import KakaoLogo from "../assets/kakao_logo.png";
import LegalModal from "../components/LegalModal";
import {
  TERMS_DOCUMENT,
  PRIVACY_DOCUMENT,
  type LegalDocument,
} from "../utils/legalContent";
import { sendEmailCode, signup, verifyEmailCode } from "../api/auth_api";
import {
  SignupCard,
  HeaderSection,
  Title,
  Subtitle,
  Form,
  FieldGroup,
  Label,
  TextInput,
  InlineRow,
  InlineInputWrap,
  InlineActionButton,
  HelperText,
  TimerText,
  TermsRow,
  TermsCheckbox,
  TermsLabel,
  TermsLinkButton,
  SubmitButton,
  DividerWrapper,
  DividerLine,
  DividerText,
  SocialSection,
  SocialButton,
  SocialImage,
  BottomText,
  BottomLink,
} from "./SignupPage.styles";

const VERIFICATION_LIMIT_SECONDS = 180;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SignupPage() {
  const navigate = useNavigate();
  const [openDocument, setOpenDocument] = useState<LegalDocument | null>(null);

  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [isEmailAvailable, setIsEmailAvailable] = useState<boolean | null>(
    null,
  );
  const [emailCheckMessage, setEmailCheckMessage] = useState("");

  const [verificationCode, setVerificationCode] = useState("");
  const [isVerificationSent, setIsVerificationSent] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState("");
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [isVerifyingCode, setIsVerifyingCode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("token")) {
      return;
    }

    if (!isVerificationSent || remainingSeconds <= 0 || isEmailVerified) {
      return;
    }

    const timer = window.setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          window.clearInterval(timer);
          setIsVerificationSent(false);
          setVerificationMessage(
            "이메일 인증 시간이 만료되었습니다. 다시 요청해주세요.",
          );
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, [isVerificationSent, remainingSeconds, isEmailVerified]);
  const formattedTime = useMemo(() => {
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    return `${minutes}:${`${seconds}`.padStart(2, "0")}`;
  }, [remainingSeconds]);

  const isPasswordMatched =
    password.trim().length > 0 &&
    passwordConfirm.trim().length > 0 &&
    password === passwordConfirm;

  const passwordMessage = useMemo(() => {
    if (!password && !passwordConfirm) return "";
    if (password.trim().length > 0 && password.trim().length < 8) {
      return "비밀번호는 8자 이상이어야 합니다.";
    }
    if (passwordConfirm.trim().length > 0 && password !== passwordConfirm) {
      return "비밀번호가 일치하지 않습니다.";
    }
    if (isPasswordMatched) return "비밀번호가 일치합니다.";
    return "";
  }, [password, passwordConfirm, isPasswordMatched]);

  const isSignupEnabled =
    nickname.trim().length > 0 &&
    email.trim().length > 0 &&
    isEmailChecked &&
    isEmailAvailable === true &&
    isEmailVerified &&
    password.trim().length >= 8 &&
    passwordConfirm.trim().length > 0 &&
    isPasswordMatched &&
    agreedToTerms &&
    !isSubmitting;

  const resetEmailVerificationState = () => {
    setIsEmailChecked(false);
    setIsEmailAvailable(null);
    setEmailCheckMessage("");
    setVerificationCode("");
    setIsVerificationSent(false);
    setIsEmailVerified(false);
    setVerificationMessage("");
    setRemainingSeconds(0);
  };

  const handleEmailCheck = () => {
    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      setIsEmailChecked(false);
      setIsEmailAvailable(null);
      setEmailCheckMessage("이메일을 입력해주세요.");
      return;
    }

    if (!emailRegex.test(normalizedEmail)) {
      setIsEmailChecked(false);
      setIsEmailAvailable(null);
      setEmailCheckMessage("올바른 이메일 형식으로 입력해주세요.");
      return;
    }

    setEmail(normalizedEmail);
    setIsEmailChecked(true);
    setIsEmailAvailable(true);
    setEmailCheckMessage(
      "이메일 형식이 확인되었습니다. 인증 코드를 요청해주세요.",
    );
  };

  const handleSendVerificationEmail = async () => {
    const normalizedEmail = email.trim().toLowerCase();

    if (!isEmailChecked || isEmailAvailable !== true) {
      setVerificationMessage("이메일 확인을 먼저 진행해주세요.");
      return;
    }

    setIsSendingCode(true);
    try {
      const response = await sendEmailCode({ email: normalizedEmail });
      setIsVerificationSent(true);
      setIsEmailVerified(false);
      setVerificationCode("");
      setVerificationMessage(response.message || "인증번호를 전송했습니다.");
      setRemainingSeconds(VERIFICATION_LIMIT_SECONDS);
    } catch (error) {
      setVerificationMessage(
        error instanceof Error
          ? error.message
          : "인증번호 전송 중 오류가 발생했습니다.",
      );
    } finally {
      setIsSendingCode(false);
    }
  };

  const handleVerifyCode = async () => {
    const normalizedEmail = email.trim().toLowerCase();

    if (!isVerificationSent || remainingSeconds <= 0) {
      setVerificationMessage("인증 시간이 만료되었습니다. 다시 요청해주세요.");
      return;
    }

    if (!verificationCode.trim()) {
      setVerificationMessage("인증번호를 입력해주세요.");
      return;
    }

    setIsVerifyingCode(true);
    try {
      const response = await verifyEmailCode({
        email: normalizedEmail,
        code: verificationCode.trim(),
      });
      setIsEmailVerified(true);
      setIsVerificationSent(false);
      setRemainingSeconds(0);
      setVerificationMessage(
        response.message || "이메일 인증이 완료되었습니다.",
      );
    } catch (error) {
      setIsEmailVerified(false);
      setVerificationMessage(
        error instanceof Error
          ? error.message
          : "인증번호 확인 중 오류가 발생했습니다.",
      );
    } finally {
      setIsVerifyingCode(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isSignupEnabled) return;

    setIsSubmitting(true);
    try {
      const response = await signup({
        nickname: nickname.trim(),
        email: email.trim().toLowerCase(),
        password,
        termsAgreed: agreedToTerms,
        privacyPolicyAgreed: agreedToTerms,
      });

      alert(response.message || "회원가입이 완료되었습니다. 로그인해주세요.");
      navigate("/auth/login");
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "회원가입 중 오류가 발생했습니다.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKakaoLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/kakao";
  };
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };
  const handleNaverLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/naver";
  };

  return (
    <>
      <SignupCard>
        <HeaderSection>
          <Title>회원가입</Title>
          <Subtitle>무료로 시작하고 회의를 더 스마트하게 관리해보세요</Subtitle>
        </HeaderSection>

        <Form onSubmit={handleSubmit}>
          <FieldGroup>
            <Label htmlFor="name">닉네임</Label>
            <TextInput
              id="name"
              type="text"
              placeholder="닉네임"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              autoComplete="nickname"
              required
            />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="email">이메일</Label>

            <InlineRow>
              <InlineInputWrap>
                <TextInput
                  id="email"
                  type="email"
                  placeholder="example@acta.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    resetEmailVerificationState();
                  }}
                  disabled={isVerificationSent || isEmailVerified}
                  autoComplete="email"
                  required
                />
              </InlineInputWrap>

              <InlineActionButton
                type="button"
                onClick={handleEmailCheck}
                disabled={isVerificationSent || isEmailVerified}
              >
                이메일 확인
              </InlineActionButton>
            </InlineRow>

            {emailCheckMessage && (
              <HelperText $state={isEmailAvailable ? "success" : "error"}>
                {emailCheckMessage}
              </HelperText>
            )}

            <InlineRow>
              <InlineInputWrap>
                <TextInput
                  id="email-verification"
                  type="text"
                  placeholder="인증번호를 입력해주세요"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  disabled={!isVerificationSent || isEmailVerified}
                />
              </InlineInputWrap>

              {!isVerificationSent && !isEmailVerified ? (
                <InlineActionButton
                  type="button"
                  onClick={handleSendVerificationEmail}
                  disabled={isSendingCode}
                >
                  {isSendingCode ? "전송 중" : "인증 요청"}
                </InlineActionButton>
              ) : (
                <InlineActionButton
                  type="button"
                  onClick={handleVerifyCode}
                  disabled={isEmailVerified || isVerifyingCode}
                >
                  {isVerifyingCode ? "확인 중" : "인증 확인"}
                </InlineActionButton>
              )}
            </InlineRow>

            {isVerificationSent && !isEmailVerified && (
              <TimerText>남은 인증 시간 {formattedTime}</TimerText>
            )}

            {verificationMessage && (
              <HelperText $state={isEmailVerified ? "success" : "default"}>
                {verificationMessage}
              </HelperText>
            )}
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="password">비밀번호</Label>
            <TextInput
              id="password"
              type="password"
              placeholder="8자 이상 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="password-confirm">비밀번호 확인</Label>
            <TextInput
              id="password-confirm"
              type="password"
              placeholder="비밀번호를 다시 입력해주세요"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              autoComplete="new-password"
              required
            />

            {passwordMessage && (
              <HelperText $state={isPasswordMatched ? "success" : "error"}>
                {passwordMessage}
              </HelperText>
            )}
          </FieldGroup>

          <TermsRow htmlFor="terms">
            <TermsCheckbox
              id="terms"
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
            />
            <TermsLabel>
              <TermsLinkButton
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setOpenDocument(TERMS_DOCUMENT);
                }}
              >
                이용약관
              </TermsLinkButton>{" "}
              및{" "}
              <TermsLinkButton
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setOpenDocument(PRIVACY_DOCUMENT);
                }}
              >
                개인정보처리방침
              </TermsLinkButton>
              에 동의합니다.
            </TermsLabel>
          </TermsRow>

          <SubmitButton type="submit" disabled={!isSignupEnabled}>
            {isSubmitting ? "가입 중..." : "회원가입"}
          </SubmitButton>
        </Form>

        <DividerWrapper>
          <DividerLine />
          <DividerText>또는</DividerText>
        </DividerWrapper>

        <SocialSection>
          <SocialButton type="button" onClick={handleGoogleLogin}>
            <SocialImage src={GoogleLogo} alt="Google" />
            Google로 가입하기
          </SocialButton>

          <SocialButton type="button" onClick={handleNaverLogin}>
            <SocialImage src={NaverLogo} alt="Naver" />
            네이버로 가입하기
          </SocialButton>

          <SocialButton type="button" onClick={handleKakaoLogin}>
            <SocialImage src={KakaoLogo} alt="Kakao" />
            카카오로 가입하기
          </SocialButton>
        </SocialSection>

        <BottomText>
          이미 계정이 있으신가요?{" "}
          <BottomLink as={Link} to="/auth/login">
            로그인
          </BottomLink>
        </BottomText>
      </SignupCard>

      <LegalModal
        open={openDocument !== null}
        document={openDocument}
        onClose={() => setOpenDocument(null)}
      />
    </>
  );
}
