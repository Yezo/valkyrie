import * as dotenv from "dotenv";
import type { Config } from "drizzle-kit";

dotenv.config({ path: `.env.local`, override: true });

export default {
  schema: "./src/db/schema/index.ts",
  out: "./src/db/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DRIZZLE_DATABASE_URL || "",
  },
} satisfies Config;
