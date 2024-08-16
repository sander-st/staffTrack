import { pool } from "../db/db.js";
import { NAME_DB, NAME_TABLE_DB } from "../config.js";

export const schemaUser = async () => {
  await pool.execute(`create database if not exists ${NAME_DB}`);
  await pool.execute(`use ${NAME_DB}`);

  await pool.execute(`create table if not exists ${NAME_TABLE_DB} (
    id int primary key auto_increment,
    fullname varchar(60) not null,
    email varchar(30) not null unique,
    passwd varchar(255) not null
    )`);
};
