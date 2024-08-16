import { loginSchema, registerSchema } from "../models/validity.auth.js";

export const validityForm = (req, res, next) => {
  try {
    const data = registerSchema.parse(req.body);
    req.data = data;
    next();
  } catch (error) {
    res.status(400).json(error.errors); // expect
  }
};
export const validityLogin = (req, res, next) => {
  try {
    const data = loginSchema.parse(req.body);
    req.data = data;
    next();
  } catch (error) {
    res.status(400).json(error.errors); // expect
  }
};
