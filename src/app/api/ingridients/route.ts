import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";

export async function GET() {
    const ingridients = await prisma.ingridient.findMany();

    return NextResponse.json({ingridients})
}