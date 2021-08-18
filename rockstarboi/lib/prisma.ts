// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

// ref: https://vercel.com/guides/nextjs-prisma-postgres
// let prisma: PrismaClient;
// ref: https://github.com/nextauthjs/next-auth/issues/824
declare global {
  var prisma: PrismaClient;
}

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
