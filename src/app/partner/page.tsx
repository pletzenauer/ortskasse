import Link from "next/link";

const benefits = [
  {
    title: "Keine Kosten",
    desc: "Kein Beitrag, keine Gebühr, keine Provision. Sie geben lediglich den vereinbarten Rabatt.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>
    ),
  },
  {
    title: "Mehr Stammkunden",
    desc: "Heimvorteil-Mitglieder kaufen bevorzugt bei Partnern ein — statt beim Supermarkt oder online.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
    ),
  },
  {
    title: "Wöchentliche Berichte",
    desc: "Sie sehen jede Woche, wie viele Heimvorteil-Kunden bei Ihnen waren und wie viel Umsatz darüber lief.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
    ),
  },
  {
    title: "Partner-Badge",
    desc: "Sichtbarkeit als Heimvorteil-Partner auf der Website, in der App und mit einem Aufkleber fürs Geschäft.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
    ),
  },
  {
    title: "Gemeinde-Unterstützung",
    desc: "Die Gemeinde bewirbt Heimvorteil aktiv — Ihr Geschäft profitiert von der Reichweite.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>
    ),
  },
  {
    title: "Dorffonds",
    desc: "10% jedes Abos fließen in den Dorffonds für lokale Projekte — gut fürs Image, gut fürs Geschäft.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
    ),
  },
];

const steps = [
  {
    num: "1",
    title: "Kunde zeigt QR-Code oder NFC-Karte",
    desc: "Am Handy oder als physische Karte",
  },
  {
    num: "2",
    title: "Sie scannen und geben den Betrag ein",
    desc: "Auf Ihrem Handy oder Tablet — dauert 15 Sekunden",
  },
  {
    num: "3",
    title: "Rabatt wird automatisch berechnet",
    desc: "Der Kunde zahlt den reduzierten Betrag direkt bei Ihnen — bar oder Karte",
  },
];

export default function PartnerPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 py-24 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            Kostenlos teilnehmen
          </div>
          <h1 className="text-4xl font-bold sm:text-5xl">
            Werden Sie <span className="text-emerald-300">Heimvorteil-Partner</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-emerald-100">
            Kein Beitrag, keine Gebühr. Sie geben einen Rabatt — und gewinnen dafür neue Stammkunden, die im Ort einkaufen statt online.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="mailto:partner@heimvorteil.at"
              className="rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-emerald-800 shadow-lg transition hover:bg-emerald-50"
            >
              Jetzt Partner werden
            </Link>
            <Link
              href="#vorteile"
              className="rounded-xl border border-white/30 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Vorteile ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Key stat bar */}
      <section className="bg-emerald-900 py-6">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 px-6 text-center text-white sm:gap-16">
          <div>
            <div className="text-3xl font-extrabold">0 &euro;</div>
            <div className="text-sm text-emerald-300">Kosten für Sie</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold">15 Sek.</div>
            <div className="text-sm text-emerald-300">Pro Kunde</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold">15-25%</div>
            <div className="text-sm text-emerald-300">Rabatt</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold">0</div>
            <div className="text-sm text-emerald-300">Vertragsbindung</div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="vorteile" className="bg-stone-100 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold text-stone-900">Was Sie bekommen</h2>
          <p className="mt-3 text-center text-stone-500">Alles kostenlos — keine versteckten Kosten</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border-2 border-stone-200 bg-white p-6 shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-700 text-white">
                  {b.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold text-stone-900">{b.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-emerald-900 py-20 text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-bold">So funktioniert es in Ihrem Geschäft</h2>
          <p className="mt-3 text-center text-emerald-300">In nur 15 Sekunden pro Kunde</p>
          <div className="mt-12 space-y-6">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-5 rounded-2xl border border-emerald-700 bg-emerald-800/50 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xl font-bold">
                  {step.num}
                </div>
                <div>
                  <p className="text-lg font-semibold">{step.title}</p>
                  <p className="mt-1 text-emerald-300">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-bold text-stone-900">Warum Heimvorteil?</h2>
          <p className="mt-3 text-center text-stone-500">Im Vergleich zu anderen Lösungen</p>
          <div className="mt-10 overflow-hidden rounded-2xl border-2 border-stone-200 shadow-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-stone-100">
                  <th className="px-4 py-3 text-left font-semibold text-stone-700"></th>
                  <th className="px-4 py-3 text-center font-bold text-emerald-700">Heimvorteil</th>
                  <th className="px-4 py-3 text-center font-semibold text-stone-500">Payback</th>
                  <th className="px-4 py-3 text-center font-semibold text-stone-500">Groupon</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Kosten für Betrieb", "0 \u20ac", "Hoch", "50%+ Marge"],
                  ["Rabatt-Art", "15-25% sofort", "0,5% Punkte", "Einmal-Deal"],
                  ["Kundenbindung", "Monatlich", "Gering", "Keine"],
                  ["Lokaler Fokus", "Ja", "Nein", "Nein"],
                  ["Gemeinde-Daten", "Ja", "Nein", "Nein"],
                ].map(([label, ok, pay, grp], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="px-4 py-3 font-medium text-stone-700">{label}</td>
                    <td className="px-4 py-3 text-center font-bold text-emerald-700">{ok}</td>
                    <td className="px-4 py-3 text-center text-stone-400">{pay}</td>
                    <td className="px-4 py-3 text-center text-stone-400">{grp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-800 py-20 text-white">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold">Bereit, Partner zu werden?</h2>
          <p className="mt-4 text-lg text-emerald-200">
            Kein Risiko, keine Bindung. Schreiben Sie uns oder rufen Sie an — wir kommen gerne persönlich vorbei.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="mailto:partner@heimvorteil.at"
              className="rounded-xl bg-white px-8 py-4 text-lg font-bold text-emerald-800 shadow-lg transition hover:bg-emerald-50"
            >
              partner@heimvorteil.at
            </Link>
          </div>
          <p className="mt-4 text-sm text-emerald-300">
            Oder rufen Sie uns an — wir melden uns innerhalb von 24 Stunden.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-700 bg-stone-900 py-10">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-stone-400">
          <p>&copy; {new Date().getFullYear()} Heimvorteil. Alle Rechte vorbehalten.</p>
          <div className="mt-3 flex justify-center gap-6">
            <Link href="/" className="transition hover:text-white">Startseite</Link>
            <Link href="/impressum" className="transition hover:text-white">Impressum</Link>
            <Link href="/datenschutz" className="transition hover:text-white">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
