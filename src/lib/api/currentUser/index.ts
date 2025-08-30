import { decodedUserToken } from "@/utils";
import { cookies } from "next/headers";

export const currentUser = async () => {
  const cookieStore = cookies();
  const token = (await cookieStore).get("accessToken")?.value;

  let user = null;
  if (token) {
    user = decodedUserToken(token as string);
  }

  return user;
};
