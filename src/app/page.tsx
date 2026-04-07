import Link from "next/link";

const tiers = [
  {
    name: "Basis",
    price: "9,90",
    discount: "15%",
    features: [
      "15% Rabatt bei allen Partnern",
      "Digitale Mitgliedskarte",
      "Sofort einsetzbar",
    ],
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
      "Fastpass: Vorrang beim Bäcker & Co.",
      "Exklusive Partner-Angebote",
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
      "Fastpass: Vorrang bei allen Partnern",
      "Priority-Vorbestellung & Reservierung",
      "VIP-Zugang zu Dorf-Events",
      "Dorffonds-Stimmrecht",
    ],
  },
];

const steps = [
  {
    num: "1",
    title: "Abo wählen",
    desc: "Wähle dein Ortskasse-Abo ab 9,90 pro Monat.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    num: "2",
    title: "Karte zeigen",
    desc: "Zeige deine digitale Karte oder tippe deine NFC-Karte beim Einkaufen.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
      </svg>
    ),
  },
  {
    num: "3",
    title: "Sofort sparen",
    desc: "Du bekommst 15-25% Rabatt — direkt an der Kasse, kein Punktesammeln.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
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
      <section id="so-funktionierts" className="bg-emerald-900 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold">So funktioniert&apos;s</h2>
          <p className="mt-3 text-center text-emerald-300">In 3 einfachen Schritten</p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.num} className="rounded-2xl border border-emerald-700 bg-emerald-800/50 p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-white">
                  {step.icon}
                </div>
                <div className="mt-3 text-sm font-medium text-emerald-400">Schritt {step.num}</div>
                <h3 className="mt-1 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-emerald-200">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="preise" className="bg-stone-100 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold text-stone-900">Wähle dein Abo</h2>
          <p className="mt-3 text-center text-stone-500">
            Alle Abos sind monatlich kündbar. Kein Risiko.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative overflow-hidden rounded-2xl border-2 bg-white p-8 shadow-lg ${
                  tier.popular
                    ? "border-emerald-600 ring-1 ring-emerald-600"
                    : "border-stone-200"
                }`}
              >
                {tier.popular && (
                  <div className="absolute right-0 top-0 rounded-bl-xl bg-emerald-600 px-4 py-1.5 text-xs font-bold text-white">
                    Beliebt
                  </div>
                )}
                <h3 className="text-lg font-bold text-stone-900">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-stone-900">{tier.price}</span>
                  <span className="text-stone-500">/Monat</span>
                </div>
                <div className="mt-3 inline-flex rounded-full bg-emerald-700 px-4 py-1.5 text-sm font-bold text-white">
                  {tier.discount} Rabatt
                </div>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-stone-700">
                      <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-emerald-600" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/registrieren?tier=${tier.name.toLowerCase()}`}
                  className={`mt-8 block rounded-xl px-6 py-3.5 text-center font-semibold transition ${
                    tier.popular
                      ? "bg-emerald-600 text-white shadow-md hover:bg-emerald-700"
                      : "bg-stone-900 text-white hover:bg-stone-800"
                  }`}
                >
                  Jetzt starten
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Perks */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold text-stone-900">Bonus-Vorteile</h2>
          <p className="mt-3 text-center text-stone-500">
            Mehr als nur Rabatt — exklusive Vorteile für Plus- und Dorf-Mitglieder
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
                ),
                title: "Fastpass",
                desc: "Vorrang an der Theke beim Bäcker, Metzger & Co. Kein Anstehen in der Schlange.",
                tier: "Plus",
              },
              {
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                ),
                title: "Vorbestellung",
                desc: "Brot, Fleisch oder Kuchen vorbestellen und ohne Wartezeit abholen.",
                tier: "Dorf",
              },
              {
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                ),
                title: "VIP-Events",
                desc: "Exklusiver Zugang zu Dorf-Veranstaltungen, Verkostungen und Saisonmärkten.",
                tier: "Dorf",
              },
              {
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
                ),
                title: "Geburtstags-Bonus",
                desc: "Extra 10% Rabatt im Geburtstagsmonat — auf alles, bei allen Partnern.",
                tier: "Plus",
              },
              {
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
                ),
                title: "Freunde werben",
                desc: "Empfiehl Ortskasse weiter und erhalte einen Monat gratis pro geworbenes Mitglied.",
                tier: "Basis",
              },
              {
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>
                ),
                title: "Saisonale Specials",
                desc: "Exklusive Saison-Aktionen: Adventkalender, Sommerfest-Deals, Erntedank-Rabatte.",
                tier: "Plus",
              },
            ].map((perk) => (
              <div key={perk.title} className="rounded-2xl border-2 border-stone-200 bg-stone-50 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-700 text-white">
                    {perk.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">{perk.title}</h3>
                    <span className={`text-xs font-bold ${
                      perk.tier === "Basis" ? "text-stone-500" : perk.tier === "Plus" ? "text-emerald-600" : "text-amber-600"
                    }`}>
                      ab {perk.tier}
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-sm text-stone-600">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For businesses */}
      <section className="bg-emerald-800 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-12 sm:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Für Betriebe</h2>
              <p className="mt-4 text-lg text-emerald-100">
                Kostenlos teilnehmen. Kein Beitrag, keine Gebühr. Sie geben
                Ortskasse-Mitgliedern einen Rabatt — dafür kommen garantiert mehr
                Kunden zu Ihnen statt zum Supermarkt.
              </p>
              <Link
                href="/partner"
                className="mt-8 inline-block rounded-xl bg-white px-8 py-3.5 font-semibold text-emerald-800 shadow-lg transition hover:bg-emerald-50"
              >
                Partner werden
              </Link>
            </div>
            <ul className="space-y-4">
              {[
                "Keine Kosten, keine Gebühren",
                "Wöchentlicher Bericht über Ortskasse-Kunden",
                "\u201eOrtskasse Partner\u201c-Badge für Ihr Geschäft",
                "Mehr Stammkunden, mehr Umsatz",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-xl border border-emerald-600 bg-emerald-700/50 px-5 py-4 text-emerald-50">
                  <CheckIcon className="h-6 w-6 flex-none text-emerald-300" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Dorffonds */}
      <section className="bg-stone-100 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-700 shadow-lg">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
          </div>
          <h2 className="text-3xl font-bold text-stone-900">Der Dorffonds</h2>
          <p className="mt-4 text-lg text-stone-600">
            10% jedes Ortskasse-Abos fließen in den Dorffonds — für
            Veranstaltungen, Verschönerung und Projekte in deinem Ort. Du
            entscheidest mit, wofür das Geld verwendet wird.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-700 bg-stone-900 py-10">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-stone-400">
          <p>&copy; {new Date().getFullYear()} Ortskasse. Alle Rechte vorbehalten.</p>
          <div className="mt-3 flex justify-center gap-6">
            <Link href="/impressum" className="transition hover:text-white">Impressum</Link>
            <Link href="/datenschutz" className="transition hover:text-white">Datenschutz</Link>
            <Link href="/agb" className="transition hover:text-white">AGB</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
