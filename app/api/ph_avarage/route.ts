import prisma from "@/lib/prismadb"
import { NextResponse } from "next/server";

// fetching all recond
export async function GET() {
    try {
        const villages = await prisma.village.findMany({
        })
        const wells = await prisma.well.findMany({
            select: {
                average_ph: true,
            },
        });
        const phValues = wells.map(well => well.average_ph).filter(ph => ph !== null) as number[];
        const minPh = Math.min(...phValues);
        const maxPh = Math.max(...phValues);
        return NextResponse.json({ villages, minPh, maxPh })
    } catch (error) {
        console.log(error);
        return NextResponse.json(error);
    }
}