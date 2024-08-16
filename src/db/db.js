import { createPool } from "mysql2/promise";
import { DB_HOST, DB_PORT, DB_PASSWD, DB_USER } from "../config.js";

export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWD,
  // port: DB_PORT
});
