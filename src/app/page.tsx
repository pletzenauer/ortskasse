import Link from "next/link";

const tiers = [
  {
    name: "Basis",
    price: "9,90",
    discount: "15%",
    features: ["15% Rabatt bei allen Partnern", "Digitale Mitgliedskarte", "Sofort einsetzbar"],
  },
  {
    name: "Plus",
    price: "14,90",
    discount: "20%",
    popular: true,
    features: [
      "20% Rabatt bei allen Partnern",
      "Digitale + NFC-Karte",
      "Familie teilen (2 Personen)",
    ],
  },
  {
    name: "Dorf",
    price: "24,90",
    discount: "25%",
    features: [
      "25% Rabatt bei allen Partnern",
      "Digitale + NFC-Karte",
      "Familie teilen (4 Personen)",
      "Dorffonds-Stimmrecht",
    ],
  },
];

const steps = [
  { num: "1", title: "Abo wählen", desc: "Wähle dein Ortskasse-Abo ab 9,90 pro Monat." },
  { num: "2", title: "Karte zeigen", desc: "Zeige deine digitale Karte oder tippe deine NFC-Karte beim Einkaufen." },
  { num: "3", title: "Sofort sparen", desc: "Du bekommst 15-25% Rabatt — direkt an der Kasse, kein Punktesammeln." },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            Jetzt in deinem Ort verfügbar
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Dein Abo fürs lokale
            <br />
            <span className="text-emerald-300">Einkaufen</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-emerald-100">
            Spare 15-25% bei allen Geschäften in deinem Ort — vom Bäcker bis zum
            Installateur. Kein Gutschein, kein Punktesammeln. Einfach Karte
            zeigen, sparen.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/registrieren"
              className="rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-emerald-800 shadow-lg transition hover:bg-emerald-50"
            >
              Jetzt Mitglied werden
            </Link>
            <Link
              href="#so-funktionierts"
              className="rounded-xl border border-white/30 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
            >
              So funktioniert&apos;s
            </Link>
          </div>
          <p className="mt-6 text-sm text-emerald-200">
            Ab 9,90/Monat &middot; Jederzeit kündbar &middot; Kein Risiko
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="so-funktionierts" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold">So funktioniert&apos;s</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-2xl font-bold text-emerald-700">
                {step.num}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-stone-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="preise" className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold">Wähle dein Abo</h2>
          <p className="mt-3 text-center text-stone-600">
            Alle Abos sind monatlich kündbar. Kein Risiko.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-8 ${
                  tier.popular
                    ? "border-emerald-500 ring-2 ring-emerald-500 shadow-lg"
                    : "border-stone-200"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-4 py-1 text-xs font-semibold text-white">
                    Beliebt
                  </div>
                )}
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-stone-500">/Monat</span>
                </div>
                <div className="mt-2 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                  {tier.discount} Rabatt
                </div>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-stone-700">
                      <svg className="mt-0.5 h-4 w-4 flex-none text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/registrieren?tier=${tier.name.toLowerCase()}`}
                  className={`mt-8 block rounded-xl px-6 py-3 text-center text-sm font-semibold transition ${
                    tier.popular
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "bg-stone-100 text-stone-800 hover:bg-stone-200"
                  }`}
                >
                  Jetzt starten
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For businesses */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-3xl bg-emerald-800 p-10 text-white sm:p-16">
          <h2 className="text-3xl font-bold">Für Betriebe</h2>
          <p className="mt-4 max-w-xl text-emerald-100">
            Kostenlos teilnehmen. Kein Beitrag, keine Gebühr. Sie geben
            Ortskasse-Mitgliedern einen Rabatt — dafür kommen garantiert mehr
            Kunden zu Ihnen statt zum Supermarkt.
          </p>
          <ul className="mt-6 space-y-2 text-emerald-100">
            <li>Keine Kosten, keine Gebühren</li>
            <li>Wöchentlicher Bericht über Ortskasse-Kunden</li>
            <li>&quot;Ortskasse Partner&quot;-Badge für Ihr Geschäft</li>
            <li>Mehr Stammkunden, mehr Umsatz</li>
          </ul>
          <Link
            href="/partner"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3.5 font-semibold text-emerald-800 transition hover:bg-emerald-50"
          >
            Partner werden
          </Link>
        </div>
      </section>

      {/* Dorffonds */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold">Der Dorffonds</h2>
          <p className="mt-4 text-lg text-stone-600">
            10% jedes Ortskasse-Abos fließen in den Dorffonds — für
            Veranstaltungen, Verschönerung und Projekte in deinem Ort. Du
            entscheidest mit, wofür das Geld verwendet wird.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-stone-50 py-10">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Ortskasse. Alle Rechte vorbehalten.</p>
          <div className="mt-3 flex justify-center gap-6">
            <Link href="/impressum" className="hover:text-stone-700">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-stone-700">Datenschutz</Link>
            <Link href="/agb" className="hover:text-stone-700">AGB</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
