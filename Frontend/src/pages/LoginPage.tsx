import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LoginCard,
  HeaderSection,
  Title,
  Subtitle,
  Form,
  FieldGroup,
  Label,
  FieldHeader,
  PasswordLink,
  TextInput,
  SubmitButton,
  DividerWrapper,
  DividerLine,
  DividerText,
  SocialSection,
  SocialButton,
  SocialImage,
  BottomText,
  BottomLink,
} from "./LoginPage.styles";
import GoogleLogo from "../assets/google_logo.svg";
import NaverLogo from "../assets/naver_logo.svg";
import KakaoLogo from "../assets/kakao_logo.png";
import { useAuth } from "../contexts/useAuth";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, loginWithAccessToken, hasCompletedOnboarding } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    const result = await login({ email, password });
    setIsSubmitting(false);

    if (!result.success) {
      alert(result.message);
      return;
    }

    navigate(hasCompletedOnboarding ? "/dashboard" : "/onboarding");
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

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get("accessToken") ?? queryParams.get("token");

    if (!token) return;
    const accessToken = token;

    async function completeSocialLogin() {
      const result = await loginWithAccessToken(accessToken);

      if (!result.success) {
        alert(result.message);
        return;
      }

      window.history.replaceState({}, document.title, window.location.pathname);
      navigate(hasCompletedOnboarding ? "/dashboard" : "/onboarding", {
        replace: true,
      });
    }

    void completeSocialLogin();
  }, [hasCompletedOnboarding, loginWithAccessToken, navigate]);

  return (
    <LoginCard>
      <HeaderSection>
        <Title>로그인</Title>
        <Subtitle>회의를 더 스마트하게 관리해보세요</Subtitle>
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
            autoComplete="email"
            required
          />
        </FieldGroup>

        <FieldGroup>
          <FieldHeader>
            <Label htmlFor="password">비밀번호</Label>
            <PasswordLink as={Link} to="/auth/reset-password">
              비밀번호 찾기
            </PasswordLink>
          </FieldHeader>

          <TextInput
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </FieldGroup>

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "로그인 중..." : "로그인"}
        </SubmitButton>
      </Form>

      <DividerWrapper>
        <DividerLine />
        <DividerText>또는</DividerText>
      </DividerWrapper>

      <SocialSection>
        <SocialButton type="button" onClick={handleGoogleLogin}>
          <SocialImage src={GoogleLogo} alt="Google Logo" />
          Google로 로그인
        </SocialButton>

        <SocialButton type="button" onClick={handleNaverLogin}>
          <SocialImage src={NaverLogo} alt="Naver Logo" />
          네이버로 로그인
        </SocialButton>

        <SocialButton type="button" onClick={handleKakaoLogin}>
          <SocialImage src={KakaoLogo} alt="Kakao Logo" />
          카카오로 로그인
        </SocialButton>
      </SocialSection>

      <BottomText>
        아직 계정이 없으신가요?{" "}
        <BottomLink as={Link} to="/auth/signup">
          회원가입
        </BottomLink>
      </BottomText>
    </LoginCard>
  );
}
