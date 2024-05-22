import prisma from "@/lib/prismadb"
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// fetching all recond
export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const plannedWater = await prisma.well.findMany({
            select: {
                name: true,
                start_date: true,
                expected_date: true,
            },
        });
        return NextResponse.json(plannedWater)
    } catch (error) {

        return NextResponse.json(error);
    }
}