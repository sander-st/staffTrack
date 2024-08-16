import express from "express";
import { SERVER_PORT } from "./config.js";
import morgan from "morgan";
import cors from "cors";
import { router } from "./routes/index.js";
import { pool } from "./db/db.js";

const app = express();

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// db connect
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log("db is connect success...");
    connection.release();
  } catch (error) {
    console.error(error.message);
  }
})();

// routes
app.use(router);

// listening on port
app.listen(SERVER_PORT, () =>
  console.log(`Server listening on port http://localhost:${SERVER_PORT}`)
);
