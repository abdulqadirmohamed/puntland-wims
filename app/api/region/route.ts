import prisma from "@/lib/prismadb"
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

// fetching all recond
export async function GET() {
    try {
        const region = await prisma.region.findMany({
            include: {
                District: { select: { name: true } },
                Village: { select: { name: true } },
                Well: true,
            },

            // orderBy: { createdAt: "asc" },
        });
        return NextResponse.json(region)
    } catch (error) {
        console.log(error);
        return NextResponse.json(error);
    }
}

export async function POST(req: Request) {
//     const session = await getServerSession(authOptions);
//      if (!session) {
//     return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
//   }
    const { name } = await req.json();

    if (!name) {
        return NextResponse.json(
            { message: "region is required." },
            { status: 500 }
        );
    }
    try {
        const newPost = await prisma.region.create({
            data: {
                name
            },
        });
        console.log("region created");
        return NextResponse.json(newPost);
    } catch (error) {
        console.log(error);
        return NextResponse.json(error);
    }
}