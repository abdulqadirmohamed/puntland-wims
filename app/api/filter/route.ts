import prisma from "@/lib/prismadb"
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const { regionName} = req.query;
    try {
        const filters: any = {};

        if (regionName) {
            filters.region = { name: regionName };
        }
        const wells = await prisma.well.findMany({
            where: {
                ...filters,
            },
            include: {
                region: true,
                district: true,
                village: true,
            },
        });

        return NextResponse.json(wells)
    } catch (error) {
        console.log(error);
        return NextResponse.json(error);
    }
}