import { API_BASE_URL, readApiResponse } from "@/lib/api";

export interface AuthUser {
  id: string;
  email: string;
  role: "customer" | "admin" | "super_admin";
}
interface Session {
  accessToken: string;
  refreshToken: string;
}
const SESSION_KEY = "afc_customer_session";

function readSession(): Session | null {
  try {
    const session = JSON.parse(sessionStorage.getItem(SESSION_KEY) ?? "null");
    return typeof session?.accessToken === "string" &&
      typeof session?.refreshToken === "string"
      ? session
      : null;
  } catch {
    return null;
  }
}

export function clearSession() {
  sessionStorage.removeItem(SESSION_KEY);
}

export async function authPost<T>(path: string, body: unknown): Promise<T> {
  const response = await fetch(`${API_BASE_URL}/auth/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    cache: "no-store",
  });
  return readApiResponse<T>(response);
}

export async function signIn(
  email: string,
  password: string,
): Promise<AuthUser> {
  const result = await authPost<Session & { user: AuthUser }>("login", {
    email,
    password,
  });
  sessionStorage.setItem(
    SESSION_KEY,
    JSON.stringify({
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
    }),
  );
  return result.user;
}

let refreshInFlight: Promise<Session> | null = null;
async function refreshSession(session: Session): Promise<Session> {
  if (!refreshInFlight) {
    refreshInFlight = (async () => {
      const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
        method: "POST",
        headers: { Authorization: `Bearer ${session.refreshToken}` },
        cache: "no-store",
      });
      if (!response.ok) {
        if (response.status === 401 || response.status === 403) clearSession();
        throw new Error(
          "Your session could not be renewed. Please sign in again.",
        );
      }
      const next = await readApiResponse<Session>(response);
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(next));
      return next;
    })().finally(() => {
      refreshInFlight = null;
    });
  }
  return refreshInFlight;
}

export async function authenticatedRequest<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  let session = readSession();
  if (!session) throw new Error("Please sign in to continue.");
  const request = (token: string) =>
    fetch(`${API_BASE_URL}${path}`, {
      ...options,
      cache: "no-store",
      headers: { ...options.headers, Authorization: `Bearer ${token}` },
    });
  let response = await request(session.accessToken);
  if (response.status === 401) {
    session = await refreshSession(session);
    response = await request(session.accessToken);
  }
  return readApiResponse<T>(response);
}

export async function signOut(): Promise<void> {
  await authenticatedRequest("/auth/logout", { method: "POST" });
  clearSession();
}
