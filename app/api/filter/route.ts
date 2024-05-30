// pages/api/filter.ts
import prisma from '@/lib/prismadb';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';


export async function GET() {
  try {
      const region = await prisma.region.findMany({
        include: {
          District: {
            select: {
              id: true,
              name: true,
            },
          },
          Village: {
            select: {
              id: true,
              name: true,
            },
          },
          Well: true
        }

          // orderBy: { createdAt: "asc" },
      });
      return NextResponse.json(region)
  } catch (error) {
      console.log(error);
      return NextResponse.json(error);
  }
}