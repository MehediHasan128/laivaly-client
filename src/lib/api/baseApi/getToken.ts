"use server";

import { cookies } from "next/headers";

export const getAccessToken = async () => {
  let accessToken = null;
  const cookieStore = cookies();
  const token = (await cookieStore).get("accessToken")?.value;
  if (token) {
    accessToken = token;
  };
  return accessToken;
};
