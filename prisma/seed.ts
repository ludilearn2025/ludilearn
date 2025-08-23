import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: { name: "Admin" },
    create: { email: "admin@example.com", name: "Admin" },
  });

  const count = await prisma.user.count();
  console.log(`Seed complete. Users in DB: ${count}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
