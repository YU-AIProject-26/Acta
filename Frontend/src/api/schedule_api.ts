import { AUTH_TOKEN_STORAGE_KEY } from "./auth_api";

function getToken() {
  return localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
}

function authHeaders() {
  const token = getToken();

  const headers: HeadersInit = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
}

export async function fetchSchedules() {
  const res = await fetch("/api/schedules", {
    method: "GET",
    headers: authHeaders(),
  });

  if (!res.ok) {
    if (res.status === 401) throw new Error("UNAUTHORIZED");
    throw new Error("FETCH_FAILED");
  }

  const data: {
    items: {
      id: number;
      meetingId: number;
      title: string;
      startsAt: string;
      location: string;
      participantCount: number;
    }[];
  } = await res.json();

  return (data.items || []).map((item) => {
    const d = new Date(item.startsAt);

    return {
      id: item.id,
      title: item.title,
      date: d.toISOString().split("T")[0],
      time: d.toTimeString().slice(0, 5),
      duration: "1시간",
      type: "meeting",
      location: item.location,
      attendees: item.participantCount,
      color: "blue",
    };
  });
}

export async function createSchedule(body: {
  meetingId: number;
  title: string;
  startsAt: string;
  location: string;
  participantCount: number;
}) {
  const res = await fetch("/api/schedules", {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    if (res.status === 401) throw new Error("UNAUTHORIZED");
    throw new Error("CREATE_FAILED");
  }

  return await res.json();
}
