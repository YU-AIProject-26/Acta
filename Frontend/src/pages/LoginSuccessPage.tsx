import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";

export default function LoginSuccessPage() {
  const navigate = useNavigate();
  const { hasCompletedOnboarding, loginWithAccessToken } = useAuth();
  const hasStartedLogin = useRef(false);

  useEffect(() => {
    if (hasStartedLogin.current) return;
    hasStartedLogin.current = true;

    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get("accessToken") ?? queryParams.get("token");

    async function completeSocialLogin() {
      if (!token) {
        navigate("/auth/login", { replace: true });
        return;
      }

      const result = await loginWithAccessToken(token);

      if (!result.success) {
        alert(result.message);
        navigate("/auth/login", { replace: true });
        return;
      }

      window.history.replaceState({}, document.title, window.location.pathname);
      navigate(hasCompletedOnboarding ? "/dashboard" : "/onboarding", {
        replace: true,
      });
    }

    void completeSocialLogin();
  }, [hasCompletedOnboarding, loginWithAccessToken, navigate]);

  return <div>로그인 중...</div>;
}
