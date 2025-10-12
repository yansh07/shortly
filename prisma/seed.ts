import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Free plan
  await prisma.plan.upsert({
    where: { name: 'free' },
    update: {},
    create: {
      name: 'free',
      priceCents: 0,
      monthlyLimitUrls: 25,
      monthlyLimitClicks: 1000,
      dataRetentionDays: 7,
    },
  });

  // Create the Pro plan
  await prisma.plan.upsert({
    where: { name: 'pro' },
    update: {},
    create: {
      name: 'pro',
      priceCents: 4900,
      monthlyLimitUrls: 500,
      monthlyLimitClicks: null, // null means unlimited
      dataRetentionDays: 90,
      customAlias: true,
      qrCodes: true,
      qrBranding: true,
      apiAccess: true,
      apiRequestsPerMonth: 10000,
      prioritySupport: true,
      teamCollabLimit: 3,
    },
  });

  // Create the Enterprise plan
  await prisma.plan.upsert({
    where: { name: 'enterprise' },
    update: {},
    create: {
      name: 'enterprise',
      priceCents: 9900,
      monthlyLimitUrls: null, // null means unlimited
      monthlyLimitClicks: null, // null means unlimited
      dataRetentionDays: null, // null means unlimited
      customAlias: true,
      qrCodes: true,
      qrBranding: true,
      apiAccess: true,
      apiRequestsPerMonth: null, // null means unlimited
      prioritySupport: true,
      teamCollabLimit: null, // null means unlimited
    },
  });

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });