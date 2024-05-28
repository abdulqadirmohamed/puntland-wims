import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

// Delete record
export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const id = params.id
        const user = await prisma.region.delete({ where: { id: parseInt(id) } })
        return NextResponse.json({ message: "Region deleted!" }, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Could not delete region" });
    }

}