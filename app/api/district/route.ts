import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const region = await prisma.district.findMany({
            include: {
                region: {select: {name: true}},
                Village: { select: { name: true } },
                Well: { select: { name: true } },
            },

            // orderBy: { createdAt: "asc" },
        });
        return NextResponse.json(region)
    } catch (error) {
        console.log(error);
        return NextResponse.json(error);
    }
}