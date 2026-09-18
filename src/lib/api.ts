export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8500/api";

export async function readApiResponse<T>(response: Response): Promise<T> {
  const body = (await response.json()) as {
    data?: T;
    message?: string;
  };

  if (!response.ok) {
    throw new Error(body.message ?? "Something went wrong. Please try again.");
  }

  return (body.data ?? body) as T;
}