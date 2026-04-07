import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getDiscountPercent } from "@/lib/discounts";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;

  const subscriber = await prisma.subscriber.findUnique({
    where: { token },
    include: { village: true },
  });

  if (!subscriber) {
    return NextResponse.json({ error: "Mitglied nicht gefunden." }, { status: 404 });
  }

  if (subscriber.status !== "ACTIVE") {
    return NextResponse.json({ error: "Mitgliedschaft nicht aktiv." }, { status: 403 });
  }

  const discountPct = getDiscountPercent(subscriber.tier);

  return NextResponse.json({
    name: subscriber.name,
    token: subscriber.token,
    tier: subscriber.tier,
    discountPct,
    village: subscriber.village.name,
  });
}
