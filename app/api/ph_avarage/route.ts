import prisma from "@/lib/prismadb"
import { NextResponse } from "next/server";

// fetching all recond
export async function GET() {
    try {
        const wells = await prisma.well.findMany({
            where: {
                average_ph: {
                    not: null,
                },
            },
            select: {
                average_ph: true,
            },
        });

        const phValues = wells.map(well => well.average_ph as number);
        const minPh = Math.min(...phValues);
        const maxPh = Math.max(...phValues);

        return NextResponse.json({ minPh, maxPh })
    } catch (error) {
        console.log(error);
        return NextResponse.json(error);
    }
}