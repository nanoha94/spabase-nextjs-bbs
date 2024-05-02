import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const bbsDetailData = await prisma.post.findUnique({
    where: { id: parseInt(params.id) },
  });
  return NextResponse.json(bbsDetailData);
}
