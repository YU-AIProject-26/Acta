import { createContext } from 'react';
import type { AuthRole } from '../api/auth_api';

export type AuthUser = {
  userId: number;
  email: string;
  nickname: string;
  role: AuthRole;
  accessToken: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type AuthActionResult = {
  success: boolean;
  message: string;
};

export type AuthContextType = {
  isAuthenticated: boolean;
  user: AuthUser | null;
  accessToken: string | null;
  login: (payload: LoginPayload) => Promise<AuthActionResult>;
  loginWithAccessToken: (accessToken: string) => Promise<AuthActionResult>;
  logout: () => Promise<void>;
  hasCompletedOnboarding: boolean;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);
