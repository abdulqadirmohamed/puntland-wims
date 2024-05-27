import prisma from "@/lib/prismadb"
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const { region, district, village } = req.query;
    try {
        const filter: any = {
            where: {
                name: region as string
            },
            include: {
                District: false,
                Village: false,
                Well: false
            }
        };

        if (district) {
            filter.where.District = {
                some: {
                    name: district as string
                }
            };
        }

        if (village) {
            filter.where.Village = {
                some: {
                    name: village as string
                }
            };
        }

        const regions = await prisma.region.findMany(filter);
        return NextResponse.json(regions);
    } catch (error) {
        console.log(error);
        return NextResponse.json(error);
    }
}