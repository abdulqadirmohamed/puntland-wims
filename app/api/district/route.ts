import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const region = await prisma.district.findMany({
            include: {
                region: { select: { name: true } },
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

export async function POST(req: Request) {
    const { name, selectedRegion } = await req.json();

    if (!name) {
        return NextResponse.json(
            { message: "District name and region are required." },
            { status: 500 }
        );
    }
    try {
        const newDistrict = await prisma.district.create({
            data: {
                name,
                region: selectedRegion,
            },
        });
        console.log("District created");
        return NextResponse.json(newDistrict);
    } catch (error) {
        console.log(error);
        return NextResponse.json(error);
    }
}