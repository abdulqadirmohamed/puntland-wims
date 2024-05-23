import prisma from "@/lib/prismadb"
import { NextResponse } from "next/server";

// fetching all recond
export async function GET() {
    try {
        const villages = await prisma.village.findMany({
            include: {
              Well: true,
              Region: true,
            },
        })
        return NextResponse.json(villages)
    } catch (error) {
        console.log(error);
        return NextResponse.json(error);
    }
}