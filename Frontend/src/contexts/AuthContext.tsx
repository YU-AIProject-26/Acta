import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import {
  AUTH_TOKEN_STORAGE_KEY,
  AUTH_USER_STORAGE_KEY,
  login as loginApi,
  logout as logoutApi,
} from '../api/auth_api';
import { getMyInfo } from '../api/mypage_api';
import { ONBOARDING_STORAGE_KEY } from '../auth/tempAuth';
import { AuthContext, type AuthUser, type LoginPayload } from './AuthContextObject';

type AuthProviderProps = {
  children: ReactNode;
};

function readStoredUser(): AuthUser | null {
  const savedUser = localStorage.getItem(AUTH_USER_STORAGE_KEY);
  const savedToken = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);

  if (!savedUser || !savedToken) return null;

  try {
    const parsedUser = JSON.parse(savedUser) as AuthUser;
    return { ...parsedUser, accessToken: savedToken };
  } catch {
    localStorage.removeItem(AUTH_USER_STORAGE_KEY);
    localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
    return null;
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(() => readStoredUser());

  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(() => {
    return localStorage.getItem(ONBOARDING_STORAGE_KEY) === 'true';
  });

  const login = async ({ email, password }: LoginPayload) => {
    try {
      const response = await loginApi({
        email: email.trim().toLowerCase(),
        password,
      });

      const loggedInUser: AuthUser = {
        userId: response.data.userId,
        email: response.data.email,
        nickname: response.data.nickname,
        role: response.data.role,
        accessToken: response.data.accessToken,
      };

      setUser(loggedInUser);
      localStorage.setItem(AUTH_USER_STORAGE_KEY, JSON.stringify(loggedInUser));
      localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, loggedInUser.accessToken);

      return {
        success: true,
        message: response.message || '로그인되었습니다.',
      };
    } catch (error) {
      return {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : '로그인 중 오류가 발생했습니다.',
      };
    }
  };

  const loginWithAccessToken = async (accessToken: string) => {
    try {
      localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, accessToken);

      const response = await getMyInfo();
      const loggedInUser: AuthUser = {
        userId: response.data.userId,
        email: response.data.email,
        nickname: response.data.nickname,
        role: response.data.role,
        accessToken,
      };

      setUser(loggedInUser);
      localStorage.setItem(AUTH_USER_STORAGE_KEY, JSON.stringify(loggedInUser));

      return {
        success: true,
        message: response.message || '로그인되었습니다.',
      };
    } catch (error) {
      setUser(null);
      localStorage.removeItem(AUTH_USER_STORAGE_KEY);
      localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);

      return {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : '소셜 로그인 중 오류가 발생했습니다.',
      };
    }
  };

  const logout = async () => {
    const token = user?.accessToken ?? localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);

    try {
      if (token) {
        await logoutApi(token);
      }
    } catch (error) {
      console.warn('로그아웃 API 요청에 실패했지만 로컬 인증 정보는 삭제합니다.', error);
    } finally {
      setUser(null);
      localStorage.removeItem(AUTH_USER_STORAGE_KEY);
      localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
    }
  };

  const completeOnboarding = () => {
    setHasCompletedOnboarding(true);
    localStorage.setItem(ONBOARDING_STORAGE_KEY, 'true');
  };

  const resetOnboarding = () => {
    setHasCompletedOnboarding(false);
    localStorage.removeItem(ONBOARDING_STORAGE_KEY);
  };

  const value = useMemo(
    () => ({
      isAuthenticated: !!user,
      user,
      accessToken: user?.accessToken ?? null,
      login,
      loginWithAccessToken,
      logout,
      hasCompletedOnboarding,
      completeOnboarding,
      resetOnboarding,
    }),
    [user, hasCompletedOnboarding],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
