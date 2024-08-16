import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";
import { validityForm, validityLogin } from "../middleware/validityForm.js";
import { pool } from "../db/db.js";
import { schemaUser } from "../models/auth.schema.js";

const router = Router();

router.get("/users", async (req, res) => {
  await schemaUser();
  const [result] = await pool.execute("select * from userAccounts");
  res.json(result);
});

router.post("/register", validityForm, register);
router.post("/login", validityLogin, login);

export { router };
