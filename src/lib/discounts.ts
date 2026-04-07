import { SubscriptionTier } from "@prisma/client";

export function getDiscountPercent(tier: SubscriptionTier): number {
  switch (tier) {
    case "BASIS":
      return 15;
    case "PLUS":
      return 20;
    case "DORF":
      return 25;
    default:
      return 15;
  }
}

export function calculateDiscount(amount: number, discountPct: number) {
  const discountAmount = Math.round(amount * (discountPct / 100) * 100) / 100;
  const finalAmount = Math.round((amount - discountAmount) * 100) / 100;
  return { discountAmount, finalAmount };
}
