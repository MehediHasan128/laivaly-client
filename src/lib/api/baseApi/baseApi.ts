/* eslint-disable @typescript-eslint/no-explicit-any */
import { TError } from "@/types/types";

const isProd = process.env.NODE_ENV === "production";
const prodURL = "https://server.laivaly.com/api/v1";
const devURL = "http://localhost:5000/api/v1";
export const baseURL = isProd ? prodURL : devURL;

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

  let fetchOptions: RequestInit & { next?: { revalidate?: number | false } } = {
    ...options,
    credentials: "include",
    headers,
  };

  if (options.revalidate !== undefined) {
    fetchOptions.next = { revalidate: options.revalidate };
  }

  if (typeof window === "undefined") {
    const { cookies } = await import("next/headers");
    const cookieHeader = (await cookies()).toString();
    fetchOptions = {
      ...fetchOptions,
      headers: {
        ...headers,
        cookie: cookieHeader,
      },
    };
  }

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
