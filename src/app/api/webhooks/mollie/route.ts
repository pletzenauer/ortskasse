import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { mollie } from "@/lib/mollie";

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const params = new URLSearchParams(body);
    const paymentId = params.get("id");

    if (!paymentId) {
      return NextResponse.json({ error: "Missing payment ID" }, { status: 400 });
    }

    const payment = await mollie.payments.get(paymentId);

    if (!payment.metadata) {
      return new NextResponse("OK", { status: 200 });
    }

    const { email, tier, name, villageId } = payment.metadata as {
      email: string;
      tier: string;
      name: string;
      villageId: string;
    };

    if (payment.status === "paid") {
      // First payment successful — activate subscriber and create recurring subscription
      const subscriber = await prisma.subscriber.update({
        where: { email },
        data: { status: "ACTIVE" },
      });

      // Set up recurring subscription if this was a first payment
      if (payment.sequenceType === "first" && payment.customerId) {
        try {
          const priceMap: Record<string, string> = {
            BASIS: "9.90",
            PLUS: "14.90",
            DORF: "24.90",
          };

          const subscription = await mollie.customerSubscriptions.create({
            customerId: payment.customerId,
            amount: { currency: "EUR", value: priceMap[tier] || "9.90" },
            interval: "1 month",
            description: `Ortskasse ${tier}`,
            webhookUrl: process.env.MOLLIE_WEBHOOK_URL!,
            metadata: { email, tier, name, villageId },
          });

          await prisma.subscriber.update({
            where: { id: subscriber.id },
            data: { mollieSubId: subscription.id },
          });
        } catch (subError) {
          console.error("Subscription creation error:", subError);
        }
      }
    } else if (payment.status === "failed" || payment.status === "expired" || payment.status === "canceled") {
      await prisma.subscriber.updateMany({
        where: { email },
        data: { status: "PAST_DUE" },
      });
    }

    return new NextResponse("OK", { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return new NextResponse("Error", { status: 500 });
  }
}
