import createMollieClient from "@mollie/api-client";

export const mollie = createMollieClient({
  apiKey: process.env.MOLLIE_API_KEY!,
});

export const SUBSCRIPTION_PRICES: Record<string, { amount: string; description: string; discountPct: number }> = {
  BASIS: {
    amount: "9.90",
    description: "Ortskasse Basis — 15% Rabatt",
    discountPct: 15,
  },
  PLUS: {
    amount: "14.90",
    description: "Ortskasse Plus — 20% Rabatt + NFC-Karte",
    discountPct: 20,
  },
  DORF: {
    amount: "24.90",
    description: "Ortskasse Dorf — 25% Rabatt + Familie",
    discountPct: 25,
  },
};
