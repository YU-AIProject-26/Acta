import { AUTH_TOKEN_STORAGE_KEY } from "../api/auth_api";

export async function authenticatedFetch(
  input: RequestInfo | URL,
  init?: RequestInit,
) {
  const token = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);

  const headers = new Headers(init?.headers);

  headers.set("Accept", "application/json");

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  return fetch(input, {
    ...init,
    headers,
  });
}
