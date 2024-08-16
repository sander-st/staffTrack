import { userLogin, userRegister } from "../service/auth.service.js";
import { DbError } from "../utils/errorCtrl.js";
import { handleHttpError } from "../utils/handleHttp.js";

export const register = async (req, res) => {
  try {
    const result = await userRegister(req.data);

    if (!result.success) throw new DbError(result.message, 409);

    const { data } = result;

    // expect
    res.json(data);
  } catch (error) {
    handleHttpError(res, error);
  }
};

export const login = async (req, res) => {
  try {
    const result = await userLogin(req.data);
    const isExistMail = !result.isExistMail; // true --> false || undefined --> true

    if (!isExistMail) throw new DbError(result.message, 404);
    if (!result.success) throw new DbError(result.message, 500);

    console.log(result.data);
    res.json("Received");
  } catch (error) {
    handleHttpError(res, error);
  }
};
