import { getAuthHeaders } from "./auth_api";
export interface UserMeResponse {
  success: boolean;
  message: string;
  data: {
    userId: number;
    nickname: string;
    email: string;
    role: string;
    admin: boolean;
    createdAt: string;
  };
}

export interface NicknameUpdateRequest {
  nickname: string;
}

export interface NicknameUpdateResponse {
  success: boolean;
  message: string;
  data: {
    userId: number;
    nickname: string;
  };
}

// 1. 내 정보 조회
export async function getMyInfo(): Promise<UserMeResponse> {
  const res = await fetch("/api/users/me", {
    method: "GET",
    headers: {
      ...getAuthHeaders(),
    },
  });

  if (!res.ok) throw new Error("유저 정보 조회 실패");
  return res.json();
}

// 2. 닉네임 변경
export async function updateNickname(
  body: NicknameUpdateRequest,
): Promise<NicknameUpdateResponse> {
  const res = await fetch("/api/users/me/nickname", {
    method: "PATCH",
    headers: {
      ...getAuthHeaders(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error("닉네임 변경 실패");
  return res.json();
}

// 3. 계정 삭제
export async function deleteMyAccount(): Promise<{
  success: boolean;
  message: string;
}> {
  const res = await fetch("/api/users/me", {
    method: "DELETE",
    headers: {
      ...getAuthHeaders(),
    },
  });

  if (!res.ok) throw new Error("계정 삭제 실패");
  return res.json();
}

export interface UserStatsResponse {
  success: boolean;
  data: {
    meetings: number;
    todos: number;
    hours: number;
  };
}

export async function getMyStats(): Promise<UserStatsResponse> {
  const res = await fetch("/api/users/me/stats", {
    method: "GET",
    headers: getAuthHeaders(),
  });

  if (!res.ok) throw new Error("stats 실패");
  return res.json();
}
