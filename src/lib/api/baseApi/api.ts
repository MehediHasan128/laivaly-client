/* eslint-disable @typescript-eslint/no-explicit-any */
import { TError } from "@/types/types";

export const baseURL = "http://localhost:5000/api/v1";

interface FetchOptions extends RequestInit {
  cache?: RequestCache;
  revalidate?: number | false;
}

interface TBaseApiProps {
  endPoints: string;
  options: FetchOptions;
}

export async function baseApi<T>({
  endPoints,
  options = {},
}: TBaseApiProps): Promise<T> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  const fetchOptions: RequestInit & { next?: { revalidate?: number | false } } =
    {
      ...options,
      headers,
      credentials: "include",
    };

  try {
    const res = await fetch(`${baseURL}${endPoints}`, fetchOptions);

    const data = await res.json();

    if ((data as any).success === false) {
      throw {
        status: (data as any).statusCode || 500,
        data,
      };
    }

    return data;
  } catch (err) {
    const error = err as TError;
    throw {
      status: error?.status || 500,
      data: {
        success: error?.data?.success,
        message: error?.data?.message,
      },
    };
  }
}
