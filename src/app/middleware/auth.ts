import { NextRequest } from "next/server";

export function isAuthenticated(req: NextRequest) {
    const token = req.cookies.get('accessToken')?.value;
    return Boolean(token);
}