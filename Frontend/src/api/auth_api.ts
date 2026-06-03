export type AuthRole = "user" | "admin" | string;

export interface ApiEnvelope<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface SignupRequest {
  nickname: string;
  email: string;
  password: string;
  termsAgreed: boolean;
  privacyPolicyAgreed: boolean;
}

export interface SignupResponseData {
  userId: number;
  email: string;
  nickname: string;
}

export interface SendEmailCodeRequest {
  email: string;
}

export interface VerifyEmailCodeRequest {
  email: string;
  code: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponseData {
  userId: number;
  email: string;
  nickname: string;
  role: AuthRole;
  accessToken: string;
}

export const AUTH_USER_STORAGE_KEY = "acta.auth.user";
export const AUTH_TOKEN_STORAGE_KEY = "acta.auth.accessToken";

async function parseAuthResponse<T>(
  response: Response,
): Promise<ApiEnvelope<T>> {
  let payload: ApiEnvelope<T> | null = null;

  try {
    payload = (await response.json()) as ApiEnvelope<T>;
  } catch {
    payload = null;
  }

  if (!response.ok || !payload?.success) {
    throw new Error(
      payload?.message || `요청에 실패했습니다. (${response.status})`,
    );
  }

  return payload;
}

async function requestAuth<T>(
  path: string,
  options: RequestInit = {},
): Promise<ApiEnvelope<T>> {
  const response = await fetch(path, {
    ...options,
    headers: {
      Accept: "application/json",
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...options.headers,
    },
  });

  return parseAuthResponse<T>(response);
}

export async function signup(request: SignupRequest) {
  return requestAuth<SignupResponseData>("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify(request),
  });
}

export async function sendEmailCode(request: SendEmailCodeRequest) {
  return requestAuth<string>("/api/auth/email/send-code", {
    method: "POST",
    body: JSON.stringify(request),
  });
}

export async function verifyEmailCode(request: VerifyEmailCodeRequest) {
  return requestAuth<string>("/api/auth/email/verify-code", {
    method: "POST",
    body: JSON.stringify(request),
  });
}

export async function login(request: LoginRequest) {
  return requestAuth<LoginResponseData>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(request),
  });
}

export async function logout(accessToken: string) {
  return requestAuth<string>("/api/auth/logout", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

export function getStoredAccessToken() {
  return localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
}

export function getAuthHeaders(): HeadersInit {
  const token = getStoredAccessToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

//비밀번호 재설정 파트
import axios from "axios";

export const checkEmail = async (email: string) => {
  return axios.post("/api/auth/check-email", { email });
};

export const sendPasswordCode = async (email: string) => {
  return axios.post("/api/auth/password/send-code", { email });
};

export const verifyPasswordCode = async (email: string, code: string) => {
  return axios.post("/api/auth/password/verify-code", {
    email,
    code,
  });
};

export const resetPassword = async (
  email: string,
  code: string,
  newPassword: string,
) => {
  return axios.post("/api/auth/password/reset", {
    email,
    code,
    newPassword,
  });
};
