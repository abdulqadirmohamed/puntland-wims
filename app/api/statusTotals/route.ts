import prisma from "@/lib/prismadb"
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// fetching all recond
export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const functionalCount = await prisma.well.count({
            where: { status: 'Functional' }
        });
        const nonFunctionalCount = await prisma.well.count({
            where: { status: 'Non-Functional' }
        });

        const plannedCount = await prisma.well.count({
            where: { status: 'Planned' }
        });
        const completedCount = await prisma.well.count({
            where: { status: 'completed' }
        });
        return NextResponse.json({
            functional: functionalCount,
            nonFunctional: nonFunctionalCount,
            planned: plannedCount,
            completed: completedCount
        })
    } catch (error) {
    
        return NextResponse.json(error);
    }
}