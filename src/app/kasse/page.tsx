"use client";

import { useState } from "react";

type CheckoutState =
  | { step: "scan" }
  | { step: "amount"; subscriber: { name: string; token: string; tier: string; discountPct: number } }
  | { step: "confirm"; subscriber: { name: string; token: string; tier: string; discountPct: number }; amount: number; discountAmount: number; finalAmount: number }
  | { step: "done"; subscriber: { name: string }; discountAmount: number; finalAmount: number }
  | { step: "error"; message: string };

export default function KassePage() {
  const [state, setState] = useState<CheckoutState>({ step: "scan" });
  const [tokenInput, setTokenInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [businessId, setBusinessId] = useState("");
  const [loading, setLoading] = useState(false);

  async function verifyToken() {
    if (!tokenInput.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/verify/${tokenInput.trim()}`);
      const data = await res.json();
      if (!res.ok) {
        setState({ step: "error", message: data.error || "Mitglied nicht gefunden." });
      } else {
        setState({ step: "amount", subscriber: data });
      }
    } catch {
      setState({ step: "error", message: "Verbindungsfehler." });
    }
    setLoading(false);
  }

  function calculatePreview() {
    if (state.step !== "amount") return;
    const amount = parseFloat(amountInput.replace(",", "."));
    if (isNaN(amount) || amount <= 0) return;
    const discountAmount = Math.round(amount * (state.subscriber.discountPct / 100) * 100) / 100;
    const finalAmount = Math.round((amount - discountAmount) * 100) / 100;
    setState({
      step: "confirm",
      subscriber: state.subscriber,
      amount,
      discountAmount,
      finalAmount,
    });
  }

  async function confirmTransaction() {
    if (state.step !== "confirm") return;
    setLoading(true);
    try {
      const res = await fetch("/api/transaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: state.subscriber.token,
          businessId,
          originalAmount: state.amount,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setState({ step: "error", message: data.error || "Fehler beim Speichern." });
      } else {
        setState({
          step: "done",
          subscriber: state.subscriber,
          discountAmount: data.discountAmount,
          finalAmount: data.finalAmount,
        });
      }
    } catch {
      setState({ step: "error", message: "Verbindungsfehler." });
    }
    setLoading(false);
  }

  function reset() {
    setState({ step: "scan" });
    setTokenInput("");
    setAmountInput("");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-stone-900 p-6 text-white">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-emerald-400">Heimvorteil</h1>
          <p className="text-sm text-stone-400">Kasse</p>
        </div>

        {/* Business ID (would be pre-set in production via login) */}
        {!businessId && (
          <div className="mb-6">
            <label className="block text-sm text-stone-400 mb-1">Betriebs-ID</label>
            <input
              type="text"
              className="w-full rounded-xl border border-stone-700 bg-stone-800 px-4 py-3 text-white placeholder-stone-500 focus:border-emerald-500 focus:outline-none"
              placeholder="Betriebs-ID eingeben"
              onKeyDown={(e) => {
                if (e.key === "Enter") setBusinessId((e.target as HTMLInputElement).value);
              }}
              onBlur={(e) => setBusinessId(e.target.value)}
            />
          </div>
        )}

        {/* Step: Scan */}
        {state.step === "scan" && (
          <div className="space-y-4">
            <div className="rounded-2xl border-2 border-dashed border-stone-600 p-8 text-center">
              <div className="text-5xl mb-3">📱</div>
              <p className="text-stone-300">QR-Code scannen oder Token eingeben</p>
            </div>
            <input
              type="text"
              value={tokenInput}
              onChange={(e) => setTokenInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && verifyToken()}
              className="w-full rounded-xl border border-stone-700 bg-stone-800 px-4 py-3 text-white placeholder-stone-500 focus:border-emerald-500 focus:outline-none"
              placeholder="Token / Mitglieds-ID"
              autoFocus
            />
            <button
              onClick={verifyToken}
              disabled={loading || !tokenInput.trim()}
              className="w-full rounded-xl bg-emerald-600 py-3.5 font-semibold transition hover:bg-emerald-700 disabled:opacity-50"
            >
              {loading ? "Prüfe..." : "Mitglied prüfen"}
            </button>
          </div>
        )}

        {/* Step: Enter amount */}
        {state.step === "amount" && (
          <div className="space-y-4">
            <div className="rounded-2xl bg-emerald-900/50 border border-emerald-700 p-4">
              <p className="text-sm text-emerald-300">Mitglied erkannt</p>
              <p className="text-lg font-semibold">{state.subscriber.name}</p>
              <p className="text-sm text-emerald-400">{state.subscriber.tier} — {state.subscriber.discountPct}% Rabatt</p>
            </div>
            <div>
              <label className="block text-sm text-stone-400 mb-1">Betrag (EUR)</label>
              <input
                type="text"
                inputMode="decimal"
                value={amountInput}
                onChange={(e) => setAmountInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && calculatePreview()}
                className="w-full rounded-xl border border-stone-700 bg-stone-800 px-4 py-4 text-2xl text-center text-white placeholder-stone-500 focus:border-emerald-500 focus:outline-none"
                placeholder="0,00"
                autoFocus
              />
            </div>
            <button
              onClick={calculatePreview}
              disabled={!amountInput.trim()}
              className="w-full rounded-xl bg-emerald-600 py-3.5 font-semibold transition hover:bg-emerald-700 disabled:opacity-50"
            >
              Rabatt berechnen
            </button>
            <button onClick={reset} className="w-full py-2 text-sm text-stone-400 hover:text-white">
              Abbrechen
            </button>
          </div>
        )}

        {/* Step: Confirm */}
        {state.step === "confirm" && (
          <div className="space-y-4">
            <div className="rounded-2xl bg-stone-800 p-6 space-y-3">
              <div className="flex justify-between text-stone-300">
                <span>Betrag</span>
                <span>{state.amount.toFixed(2)} EUR</span>
              </div>
              <div className="flex justify-between text-emerald-400 font-medium">
                <span>Rabatt ({state.subscriber.discountPct}%)</span>
                <span>-{state.discountAmount.toFixed(2)} EUR</span>
              </div>
              <hr className="border-stone-700" />
              <div className="flex justify-between text-xl font-bold">
                <span>Zu zahlen</span>
                <span className="text-emerald-400">{state.finalAmount.toFixed(2)} EUR</span>
              </div>
              <p className="text-xs text-stone-500 text-center mt-2">
                Kunde: {state.subscriber.name}
              </p>
            </div>
            <button
              onClick={confirmTransaction}
              disabled={loading}
              className="w-full rounded-xl bg-emerald-600 py-4 text-lg font-bold transition hover:bg-emerald-700 disabled:opacity-50"
            >
              {loading ? "Speichern..." : "Bestätigen"}
            </button>
            <button onClick={() => setState({ step: "amount", subscriber: state.subscriber })} className="w-full py-2 text-sm text-stone-400 hover:text-white">
              Zurück
            </button>
          </div>
        )}

        {/* Step: Done */}
        {state.step === "done" && (
          <div className="space-y-6 text-center">
            <div className="text-6xl">✅</div>
            <div>
              <p className="text-xl font-bold text-emerald-400">Gespeichert!</p>
              <p className="mt-1 text-stone-300">{state.subscriber.name} spart {state.discountAmount.toFixed(2)} EUR</p>
              <p className="text-stone-400">Zu zahlen: {state.finalAmount.toFixed(2)} EUR</p>
            </div>
            <button
              onClick={reset}
              className="w-full rounded-xl bg-emerald-600 py-3.5 font-semibold transition hover:bg-emerald-700"
            >
              Nächster Kunde
            </button>
          </div>
        )}

        {/* Error */}
        {state.step === "error" && (
          <div className="space-y-4 text-center">
            <div className="text-5xl">❌</div>
            <p className="text-red-400">{state.message}</p>
            <button
              onClick={reset}
              className="w-full rounded-xl bg-stone-700 py-3.5 font-semibold transition hover:bg-stone-600"
            >
              Nochmal versuchen
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
