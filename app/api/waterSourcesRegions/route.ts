import prisma from "@/lib/prismadb"
import { count } from "console";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// fetching all recond
export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const plannedWater = await prisma.region.count({
            select: {
                name: true,
            },
        });
        const wellCount = await prisma.well.count({
            where: { status: 'Non-Functional' }
        });
        return NextResponse.json(plannedWater)
    } catch (error) {

        return NextResponse.json(error);
    }
}