"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation";


export const authGuard = async() => {

    const cookieStore = cookies();
    const token = (await cookieStore).get("accessToken")?.value;

    if(!token){
        redirect('/login');
        return false;
    }
    return true;
}