import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const protectedRoutes  = ["/region"]

export default async function  middleware(req: NextRequest){
    const session = await getServerSession(authOptions)
    if(!session && protectedRoutes.includes(req.nextUrl.pathname)){
        const absoluteUrl = new URL("/http://localhost:3000/auth/sign-in", req.nextUrl.origin)
        return NextResponse.redirect(absoluteUrl.toString())
    }

}