import bcrypt from "bcryptjs";

const { hash, compare } = bcrypt;

export const encrypt = async (passwd) => {
  const result = await hash(passwd, 10);
  return result;
};

export const comparePasswd = async (passwd, hashPasswd) => {
  const result = await compare(passwd, hashPasswd);
  return result;
};
