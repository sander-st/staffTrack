import { pool } from "../db/db.js";
import { schemaUser } from "../models/auth.schema.js";
import { NAME_TABLE_DB } from "../config.js";
import { comparePasswd, encrypt } from "../utils/bcrypt.js";

export const userRegister = async (userObj) => {
  try {
    const { fullname, email, passwd } = userObj;
    await schemaUser();
    const passwdHash = await encrypt(passwd);
    const [result] = await pool.execute(
      `insert into ${NAME_TABLE_DB} (fullname, email, passwd) values (?, ?, ?)`,
      [fullname, email, passwdHash]
    );

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const userLogin = async (user) => {
  try {
    await schemaUser();
    const { email, passwd } = user;

    const [isEmail] = await pool.execute(
      `select email from ${NAME_TABLE_DB} where email = ?`,
      [email]
    );

    if (!isEmail.length) {
      return {
        isExistMail: true,
        message: "No existe un usuario con ese correo",
      };
    }

    const [result] = await pool.execute(
      `select passwd from ${NAME_TABLE_DB} where email = ?`,
      [email]
    );

    const passwdHash = result[0].passwd;

    const isCheckPasswd = await comparePasswd(passwd, passwdHash);

    // generate jsonwebtoken
    console.log("passwd check", isCheckPasswd);

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error("erros");

    return {
      success: false,
      message: error.message,
    };
  }
};
