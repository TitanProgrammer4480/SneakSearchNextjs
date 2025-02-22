import dotenv from "dotenv";

dotenv.config();

export const {
    DB_URI,
    JWT_SECRET,
    JWT_EXPIRES_IN
} = process.env;