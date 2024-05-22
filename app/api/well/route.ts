import prisma from "@/lib/prismadb"
import { NextResponse } from "next/server";

// fetching all recond
export async function GET() {
    try {
      const wells = await prisma.well.findMany({
        include: {
            region: {select: {name: true}},
            district: {select: {name: true}},
            village: {select: {name: true}},
        },
    
        orderBy: { createdAt: "asc" },
      });
      return NextResponse.json(wells)
    } catch (error) {
      console.log(error);
      return NextResponse.json(error);
    }
  }
