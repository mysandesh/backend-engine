import { PrismaClient } from "../generated/client/client.ts";
import { PrismaNeon } from "@prisma/adapter-neon";
import "dotenv/config";
// import { PrismaPg } from "@prisma/adapter-pg";
// import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

// // Create a PostgreSQL pool
// const pool = new Pool({ connectionString });
// const adapter = new PrismaPg(pool); // Pass pool, not connectionString

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL,
});

export const prisma = new PrismaClient({
  adapter,
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "error", "warn"]
      : ["error"],
});

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("DB Connected via Prisma");
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    process.exit(1);
  }
};

const disconnectDB = async () => {
  await prisma.$disconnect();
};

export { connectDB, disconnectDB };
