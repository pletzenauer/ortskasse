import Link from "next/link";

const benefits = [
  {
    title: "Keine Kosten",
    desc: "Kein Beitrag, keine Gebühr, keine Provision. Sie geben lediglich den vereinbarten Rabatt.",
  },
  {
    title: "Mehr Stammkunden",
    desc: "Ortskasse-Mitglieder kaufen bevorzugt bei Partnern ein — statt beim Supermarkt oder online.",
  },
  {
    title: "Wöchentliche Berichte",
    desc: "Sie sehen jede Woche, wie viele Ortskasse-Kunden bei Ihnen waren und wie viel Umsatz darüber lief.",
  },
  {
    title: "Partner-Badge",
    desc: "Sichtbarkeit als Ortskasse-Partner auf der Website, in der App und mit einem Aufkleber fürs Geschäft.",
  },
  {
    title: "Gemeinde-Unterstützung",
    desc: "Die Gemeinde bewirbt Ortskasse aktiv — Ihr Geschäft profitiert von der Reichweite.",
  },
  {
    title: "Dorffonds",
    desc: "10% jedes Abos fließen in den Dorffonds für lokale Projekte — gut fürs Image, gut fürs Geschäft.",
  },
];

export default function PartnerPage() {
  return (
    <main className="flex-1 bg-stone-50">
      <section className="bg-emerald-800 text-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-bold">Partner werden</h1>
          <p className="mt-4 text-lg text-emerald-100">
            Kostenlos teilnehmen. Mehr Kunden gewinnen. Den Ort stärken.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-stone-200 bg-white p-6">
              <h3 className="font-semibold text-emerald-700">{b.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl font-bold">Wie funktioniert es für mein Geschäft?</h2>
          <div className="mt-8 space-y-6 text-left">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">1</div>
              <div>
                <p className="font-medium">Kunde zeigt QR-Code oder NFC-Karte</p>
                <p className="text-sm text-stone-500">Am Handy oder als physische Karte</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">2</div>
              <div>
                <p className="font-medium">Sie scannen und geben den Betrag ein</p>
                <p className="text-sm text-stone-500">Auf Ihrem Handy oder Tablet — dauert 15 Sekunden</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">3</div>
              <div>
                <p className="font-medium">Rabatt wird automatisch berechnet</p>
                <p className="text-sm text-stone-500">Der Kunde zahlt den reduzierten Betrag direkt bei Ihnen — bar oder Karte</p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <Link
              href="mailto:partner@ortskasse.at"
              className="rounded-xl bg-emerald-600 px-8 py-3.5 font-semibold text-white transition hover:bg-emerald-700"
            >
              Jetzt Partner werden
            </Link>
            <p className="mt-3 text-sm text-stone-500">
              Schreiben Sie uns oder rufen Sie uns an — wir kommen gerne persönlich vorbei.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-stone-50 py-10">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Ortskasse. Alle Rechte vorbehalten.</p>
          <div className="mt-3 flex justify-center gap-6">
            <Link href="/" className="hover:text-stone-700">Startseite</Link>
            <Link href="/impressum" className="hover:text-stone-700">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-stone-700">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
