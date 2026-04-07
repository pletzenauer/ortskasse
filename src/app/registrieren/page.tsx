"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

const tierDetails: Record<
  string,
  { price: string; discount: string; label: string; features: string[]; color: string }
> = {
  basis: {
    price: "9,90",
    discount: "15%",
    label: "Basis",
    features: ["15% Rabatt bei allen Partnern", "Digitale Mitgliedskarte", "Sofort einsetzbar"],
    color: "stone",
  },
  plus: {
    price: "14,90",
    discount: "20%",
    label: "Plus",
    features: [
      "20% Rabatt bei allen Partnern",
      "Digitale + NFC-Karte",
      "Familie teilen (2 Personen)",
      "Fastpass: Vorrang beim Bäcker & Co.",
    ],
    color: "emerald",
  },
  dorf: {
    price: "24,90",
    discount: "25%",
    label: "Dorf",
    features: [
      "25% Rabatt bei allen Partnern",
      "Digitale + NFC-Karte",
      "Familie teilen (4 Personen)",
      "Fastpass bei allen Partnern",
      "Priority-Vorbestellung",
      "VIP-Zugang zu Dorf-Events",
    ],
    color: "amber",
  },
};

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

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
    <main className="flex-1">
      {/* Header */}
      <div className="bg-emerald-900 px-6 py-4">
        <div className="mx-auto max-w-5xl">
          <Link href="/" className="text-lg font-bold text-white">
            Heimvorteil
          </Link>
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl gap-0 lg:grid-cols-2">
        {/* Left: Form */}
        <div className="bg-white px-6 py-12 lg:px-12 lg:py-16">
          <h1 className="text-3xl font-bold text-stone-900">Mitglied werden</h1>
          <p className="mt-2 text-stone-500">
            Wähle dein Abo und spare sofort bei allen Heimvorteil-Partnern.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {/* Tier selection */}
            <fieldset>
              <legend className="text-sm font-semibold text-stone-900">Dein Abo</legend>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {Object.entries(tierDetails).map(([key, t]) => (
                  <button
                    type="button"
                    key={key}
                    onClick={() => setTier(key)}
                    className={`relative rounded-xl border-2 p-4 text-center transition ${
                      tier === key
                        ? "border-emerald-600 bg-emerald-50 shadow-md"
                        : "border-stone-200 bg-white hover:border-stone-300"
                    }`}
                  >
                    {key === "plus" && (
                      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-2.5 py-0.5 text-[10px] font-bold text-white">
                        Beliebt
                      </div>
                    )}
                    <div className="text-sm font-bold text-stone-900">{t.label}</div>
                    <div className="mt-1 text-2xl font-extrabold text-stone-900">{t.price}</div>
                    <div className="mt-1 rounded-full bg-emerald-700 px-2 py-0.5 text-[11px] font-bold text-white">
                      {t.discount} Rabatt
                    </div>
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-stone-900">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 block w-full rounded-xl border-2 border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                placeholder="Max Mustermann"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-stone-900">
                E-Mail
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 block w-full rounded-xl border-2 border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                placeholder="max@beispiel.at"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                <svg className="h-5 w-5 flex-none" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-emerald-600 px-6 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-emerald-700 disabled:opacity-50"
            >
              {loading ? "Wird verarbeitet..." : `Jetzt starten — ${selected.price}/Monat`}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 text-xs text-stone-400">
              <span className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                Sichere Zahlung
              </span>
              <span className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" /></svg>
                Jederzeit kündbar
              </span>
              <span className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                14 Tage Widerrufsrecht
              </span>
            </div>
          </form>
        </div>

        {/* Right: Summary panel */}
        <div className="bg-emerald-900 px-6 py-12 text-white lg:px-12 lg:py-16">
          <div className="rounded-2xl border border-emerald-700 bg-emerald-800/50 p-8">
            <div className="text-sm font-medium text-emerald-400">Dein Abo</div>
            <h2 className="mt-1 text-2xl font-bold">{selected.label}</h2>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-5xl font-extrabold">{selected.price}</span>
              <span className="text-emerald-300">/Monat</span>
            </div>
            <div className="mt-3 inline-flex rounded-full bg-emerald-600 px-4 py-1 text-sm font-bold">
              {selected.discount} Rabatt bei allen Partnern
            </div>

            <ul className="mt-8 space-y-3">
              {selected.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-emerald-400" />
                  <span className="text-emerald-100">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social proof */}
          <div className="mt-8 space-y-4">
            <div className="rounded-xl border border-emerald-700 bg-emerald-800/30 p-5">
              <p className="text-sm italic text-emerald-200">
                &ldquo;Seit ich Heimvorteil habe, kaufe ich fast nur noch im Ort ein. Das spart richtig Geld!&rdquo;
              </p>
              <p className="mt-2 text-xs font-medium text-emerald-400">— Maria M., Plus-Mitglied</p>
            </div>
            <div className="rounded-xl border border-emerald-700 bg-emerald-800/30 p-5">
              <p className="text-sm italic text-emerald-200">
                &ldquo;Fastpass beim Bäcker ist genial. Morgens schnell Semmeln holen ohne Schlange stehen.&rdquo;
              </p>
              <p className="mt-2 text-xs font-medium text-emerald-400">— Thomas K., Dorf-Mitglied</p>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-8 space-y-3">
            <h3 className="text-sm font-bold text-emerald-300">Häufige Fragen</h3>
            <details className="group rounded-lg border border-emerald-700 bg-emerald-800/30 px-4 py-3">
              <summary className="cursor-pointer text-sm font-medium text-emerald-100">Kann ich jederzeit kündigen?</summary>
              <p className="mt-2 text-sm text-emerald-300">Ja, monatlich kündbar. Keine Mindestlaufzeit, kein Kleingedrucktes.</p>
            </details>
            <details className="group rounded-lg border border-emerald-700 bg-emerald-800/30 px-4 py-3">
              <summary className="cursor-pointer text-sm font-medium text-emerald-100">Wie funktioniert die Zahlung?</summary>
              <p className="mt-2 text-sm text-emerald-300">Per SEPA-Lastschrift oder Kreditkarte. Die Abbuchung erfolgt monatlich automatisch.</p>
            </details>
            <details className="group rounded-lg border border-emerald-700 bg-emerald-800/30 px-4 py-3">
              <summary className="cursor-pointer text-sm font-medium text-emerald-100">Kann ich mein Abo wechseln?</summary>
              <p className="mt-2 text-sm text-emerald-300">Ja, du kannst jederzeit upgraden oder downgraden. Die Änderung gilt ab dem nächsten Abrechnungszeitraum.</p>
            </details>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function RegistrierenPage() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-1 items-center justify-center bg-white">
          <div className="text-stone-400">Laden...</div>
        </div>
      }
    >
      <RegistrationForm />
    </Suspense>
  );
}
