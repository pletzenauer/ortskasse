import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { mollie, SUBSCRIPTION_PRICES } from "@/lib/mollie";
import { SubscriptionTier } from "@prisma/client";
import { SequenceType } from "@mollie/api-client";

export async function POST(req: NextRequest) {
  try {
    const { name, email, tier } = await req.json();

    if (!name || !email || !tier) {
      return NextResponse.json({ error: "Name, E-Mail und Abo-Stufe sind erforderlich." }, { status: 400 });
    }

    const tierKey = tier as SubscriptionTier;
    const priceInfo = SUBSCRIPTION_PRICES[tierKey];
    if (!priceInfo) {
      return NextResponse.json({ error: "Ungültige Abo-Stufe." }, { status: 400 });
    }

    // Check if subscriber already exists
    const existing = await prisma.subscriber.findUnique({ where: { email } });
    if (existing && existing.status === "ACTIVE") {
      return NextResponse.json({ error: "Diese E-Mail ist bereits registriert." }, { status: 409 });
    }

    // Get default village (MVP: single village)
    const village = await prisma.village.findFirst();
    if (!village) {
      return NextResponse.json({ error: "Kein Ort konfiguriert." }, { status: 500 });
    }

    // Create Mollie customer
    const mollieCustomer = await mollie.customers.create({ name, email });

    // Create first payment to set up mandate for subscription
    const payment = await mollie.payments.create({
      amount: { currency: "EUR", value: priceInfo.amount },
      description: priceInfo.description,
      customerId: mollieCustomer.id,
      sequenceType: SequenceType.first,
      redirectUrl: `${process.env.NEXT_PUBLIC_APP_URL}/willkommen`,
      webhookUrl: process.env.MOLLIE_WEBHOOK_URL!,
      metadata: { email, tier: tierKey, name, villageId: village.id },
    });

    // Create or update subscriber
    await prisma.subscriber.upsert({
      where: { email },
      update: {
        name,
        tier: tierKey,
        status: "PENDING",
        mollieCustomerId: mollieCustomer.id,
        villageId: village.id,
      },
      create: {
        name,
        email,
        tier: tierKey,
        status: "PENDING",
        mollieCustomerId: mollieCustomer.id,
        villageId: village.id,
      },
    });

    return NextResponse.json({ checkoutUrl: payment.getCheckoutUrl() });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json({ error: "Ein Fehler ist aufgetreten." }, { status: 500 });
  }
}
