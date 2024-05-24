import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server"
// import bcrypt from "bcrypt";
import * as bcrypt from "bcrypt";

export async function POST(req: Request) {
    try {
        const body = await req.json()

        const { name, email, password, role } = body;
        const hashedPassword = await bcrypt.hash(password, 10);

        if (!email || !password) {
            return NextResponse.json({ message: "email and password are required" }, { status: 500 })
        }
        const userAlreadyExist = await prisma.user.findFirst({
            where: {
                email: email
            }
        })
        if (userAlreadyExist?.id) {
            return NextResponse.json({ message: "User already exist" }, { status: 500 })
        }
        const newUser = await prisma.user.create({
            data: {
                email: email,
                name: name,
                password: hashedPassword,
                role: role || "USER", // Default to USER if no role is provided
            }
        });
        return NextResponse.json(newUser, { status: 200 })
    } catch (error: any) {
        console.log("Register error" + error)
        return NextResponse.json(error, { status: 500 })
    }
}