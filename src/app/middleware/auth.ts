import { NextRequest } from "next/server";

export function isAuthenticated(req: NextRequest) {
    const token = req.cookies.get('accessToken')?.value;
    console.log('token form protected auth', token);
    return Boolean(token);
}