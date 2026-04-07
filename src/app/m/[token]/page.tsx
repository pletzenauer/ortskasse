import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";

export default async function MemberPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  const subscriber = await prisma.subscriber.findUnique({
    where: { token },
    include: { village: true },
  });

  if (!subscriber || subscriber.status !== "ACTIVE") {
    notFound();
  }

  const discountPct =
    subscriber.tier === "DORF" ? 25 : subscriber.tier === "PLUS" ? 20 : 15;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-emerald-700 to-emerald-900 p-6 text-white">
      <div className="w-full max-w-sm text-center">
        <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-sm">
          <div className="text-5xl mb-4">✅</div>
          <h1 className="text-2xl font-bold">Heimvorteil-Mitglied</h1>
          <div className="mt-6 space-y-2">
            <p className="text-lg font-semibold">{subscriber.name}</p>
            <p className="text-emerald-200">{subscriber.village.name}</p>
            <div className="mt-4 inline-flex rounded-full bg-white/20 px-6 py-2 text-xl font-bold">
              {discountPct}% Rabatt
            </div>
            <p className="mt-2 text-sm text-emerald-200 uppercase tracking-wider">
              {subscriber.tier}
            </p>
          </div>
        </div>
        <p className="mt-6 text-xs text-emerald-300">
          Zeige diese Seite an der Kasse vor.
        </p>
        <p className="mt-1 text-xs text-emerald-400/60">
          ID: {subscriber.token.slice(0, 8)}...
        </p>
      </div>
    </main>
  );
}
