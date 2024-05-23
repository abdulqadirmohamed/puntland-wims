import prisma from "@/lib/prismadb"
import { count } from "console";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// fetching all recond
export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const plannedWater = await prisma.region.findMany({
            include: {Well: true},
        });
        return NextResponse.json(plannedWater)
    } catch (error) {

        return NextResponse.json(error);
    }
}