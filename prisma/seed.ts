import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create demo village
  const village = await prisma.village.upsert({
    where: { slug: "musterort" },
    update: {},
    create: {
      name: "Musterort",
      slug: "musterort",
      description: "Ein charmantes Dorf in Niederösterreich mit 2.000 Einwohnern.",
      residents: 2000,
    },
  });

  // Create demo businesses
  const businesses = [
    { name: "Bäckerei Huber", category: "Bäckerei", discountPct: 20, address: "Hauptstraße 1" },
    { name: "Gasthof Zum Hirschen", category: "Gastronomie", discountPct: 15, address: "Kirchengasse 5" },
    { name: "Installateur Gruber", category: "Handwerk", discountPct: 20, address: "Werkstattweg 12" },
    { name: "Blumen Moser", category: "Floristik", discountPct: 25, address: "Marktplatz 3" },
    { name: "Buchhandlung Fink", category: "Einzelhandel", discountPct: 15, address: "Schulgasse 7" },
    { name: "Tischlerei Pichler", category: "Handwerk", discountPct: 20, address: "Gewerbepark 2" },
    { name: "Friseursalon Haarmonie", category: "Dienstleistung", discountPct: 20, address: "Bahnhofstraße 9" },
    { name: "Apotheke Am Markt", category: "Gesundheit", discountPct: 10, address: "Marktplatz 1" },
    { name: "Café Zeitlos", category: "Gastronomie", discountPct: 20, address: "Rathausplatz 4" },
    { name: "Elektro Wimmer", category: "Handwerk", discountPct: 15, address: "Industriestraße 8" },
  ];

  for (const biz of businesses) {
    await prisma.business.upsert({
      where: { id: `demo-${biz.name.toLowerCase().replace(/\s/g, "-")}` },
      update: {},
      create: {
        id: `demo-${biz.name.toLowerCase().replace(/\s/g, "-")}`,
        villageId: village.id,
        ...biz,
      },
    });
  }

  // Create a demo subscriber (for testing checkout)
  await prisma.subscriber.upsert({
    where: { email: "demo@ortskasse.at" },
    update: {},
    create: {
      villageId: village.id,
      email: "demo@ortskasse.at",
      name: "Maria Mustermann",
      tier: "PLUS",
      status: "ACTIVE",
      token: "demo-token-12345",
    },
  });

  console.log("Seed complete: village, 10 businesses, 1 demo subscriber");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
