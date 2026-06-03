export const TEMP_USERS = [
  {
    email: 'test@acta.com',
    password: '1234',
    name: '김영남',
    role: 'user',
  },
  {
    email: 'admin@acta.com',
    password: 'admin1234',
    name: '관리자',
    role: 'admin',
  },
] as const;

export const AUTH_STORAGE_KEY = 'acta_auth_user';
export const ONBOARDING_STORAGE_KEY = 'acta_onboarding_completed';