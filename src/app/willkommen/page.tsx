import Link from "next/link";

export default function WillkommenPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-emerald-700 to-emerald-900 p-6 text-white">
      <div className="w-full max-w-md text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold">Willkommen bei Ortskasse!</h1>
        <p className="mt-4 text-lg text-emerald-100">
          Deine Mitgliedschaft ist jetzt aktiv. Du kannst sofort bei allen
          Ortskasse-Partnern sparen.
        </p>
        <div className="mt-8 rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
          <h2 className="font-semibold text-emerald-200">So geht&apos;s weiter:</h2>
          <ol className="mt-4 space-y-3 text-left text-sm text-emerald-100">
            <li className="flex gap-3">
              <span className="font-bold text-emerald-300">1.</span>
              Du bekommst eine E-Mail mit deinem QR-Code.
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-emerald-300">2.</span>
              Zeige den QR-Code beim Einkaufen an der Kasse.
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-emerald-300">3.</span>
              Der Rabatt wird sofort abgezogen — fertig!
            </li>
          </ol>
        </div>
        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-white px-8 py-3.5 font-semibold text-emerald-800 transition hover:bg-emerald-50"
        >
          Zur Startseite
        </Link>
      </div>
    </main>
  );
}
