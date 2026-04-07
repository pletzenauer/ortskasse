"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const tierDetails: Record<string, { price: string; discount: string; label: string }> = {
  basis: { price: "9,90", discount: "15%", label: "Basis" },
  plus: { price: "14,90", discount: "20%", label: "Plus" },
  dorf: { price: "24,90", discount: "25%", label: "Dorf" },
};

function RegistrationForm() {
  const searchParams = useSearchParams();
  const initialTier = searchParams.get("tier") || "plus";
  const [tier, setTier] = useState(initialTier);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const selected = tierDetails[tier] || tierDetails.plus;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, tier: tier.toUpperCase() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Ein Fehler ist aufgetreten.");
        setLoading(false);
        return;
      }

      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      }
    } catch {
      setError("Verbindungsfehler. Bitte versuche es erneut.");
      setLoading(false);
    }
  }

  return (
    <main className="flex-1 bg-stone-50">
      <div className="mx-auto max-w-lg px-6 py-16">
        <h1 className="text-3xl font-bold">Mitglied werden</h1>
        <p className="mt-2 text-stone-600">
          Wähle dein Abo und spare sofort bei allen Ortskasse-Partnern.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Tier selection */}
          <fieldset>
            <legend className="text-sm font-medium text-stone-700">Dein Abo</legend>
            <div className="mt-2 grid grid-cols-3 gap-3">
              {Object.entries(tierDetails).map(([key, t]) => (
                <button
                  type="button"
                  key={key}
                  onClick={() => setTier(key)}
                  className={`rounded-xl border-2 p-4 text-center transition ${
                    tier === key
                      ? "border-emerald-600 bg-emerald-50"
                      : "border-stone-200 hover:border-stone-300"
                  }`}
                >
                  <div className="text-sm font-semibold">{t.label}</div>
                  <div className="mt-1 text-lg font-bold">{t.price}</div>
                  <div className="mt-0.5 text-xs text-emerald-600 font-medium">{t.discount} Rabatt</div>
                </button>
              ))}
            </div>
          </fieldset>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-stone-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-xl border border-stone-300 px-4 py-3 text-stone-900 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              placeholder="Max Mustermann"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-stone-700">
              E-Mail
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-xl border border-stone-300 px-4 py-3 text-stone-900 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              placeholder="max@beispiel.at"
            />
          </div>

          {error && (
            <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700 disabled:opacity-50"
          >
            {loading ? "Wird verarbeitet..." : `Jetzt starten — ${selected.price}/Monat`}
          </button>

          <p className="text-center text-xs text-stone-500">
            Monatlich kündbar. 14 Tage Widerrufsrecht. Sichere Zahlung via SEPA/Kreditkarte.
          </p>
        </form>
      </div>
    </main>
  );
}

export default function RegistrierenPage() {
  return (
    <Suspense fallback={<div className="flex-1 bg-stone-50 flex items-center justify-center">Laden...</div>}>
      <RegistrationForm />
    </Suspense>
  );
}
