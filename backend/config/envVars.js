import dotenv from "dotenv";

dotenv.config();

export const ENV_VARS = {
  DB_URL: process.env.DB_URL,
  PORT: process.env.PORT || 5000,
};
