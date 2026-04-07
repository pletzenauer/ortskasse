import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getDiscountPercent, calculateDiscount } from "@/lib/discounts";

export async function POST(req: NextRequest) {
  try {
    const { token, businessId, originalAmount } = await req.json();

    if (!token || !businessId || !originalAmount) {
      return NextResponse.json({ error: "Token, Business-ID und Betrag sind erforderlich." }, { status: 400 });
    }

    const amount = parseFloat(originalAmount);
    if (isNaN(amount) || amount <= 0) {
      return NextResponse.json({ error: "Ungültiger Betrag." }, { status: 400 });
    }

    // Verify subscriber
    const subscriber = await prisma.subscriber.findUnique({ where: { token } });
    if (!subscriber || subscriber.status !== "ACTIVE") {
      return NextResponse.json({ error: "Mitglied nicht gefunden oder nicht aktiv." }, { status: 404 });
    }

    // Verify business
    const business = await prisma.business.findUnique({ where: { id: businessId } });
    if (!business || !business.isActive) {
      return NextResponse.json({ error: "Betrieb nicht gefunden." }, { status: 404 });
    }

    const discountPct = getDiscountPercent(subscriber.tier);
    const { discountAmount, finalAmount } = calculateDiscount(amount, discountPct);

    // Record transaction
    const transaction = await prisma.transaction.create({
      data: {
        subscriberId: subscriber.id,
        businessId: business.id,
        originalAmount: amount,
        discountPct,
        discountAmount,
        finalAmount,
      },
    });

    return NextResponse.json({
      id: transaction.id,
      originalAmount: amount,
      discountPct,
      discountAmount,
      finalAmount,
    });
  } catch (error) {
    console.error("Transaction error:", error);
    return NextResponse.json({ error: "Ein Fehler ist aufgetreten." }, { status: 500 });
  }
}
