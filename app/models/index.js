import fs from 'fs';
import mysql from 'mysql2';
import path from 'path';
import { Sequelize } from 'sequelize';

const currentFile = path.basename(__filename);
const sequelizeLog = process.env.SEQUELIZE_LOG;
// eslint-disable-next-line no-console
const logging = (sequelizeLog === 'silent') ? () => {} : output => console.log(output);

const db = {};
const rawMySQLConnection = mysql.createConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
});

const sequelizeConfig = {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  define: {
    underscored: true,
  },
  operatorsAliases: false,
  logging,
};

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  sequelizeConfig,
);

fs
  .readdirSync(__dirname)
  .filter(file => file.includes('.') && file !== currentFile)
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

rawMySQLConnection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_DATABASE};`);
db.sequelize = sequelize;

export default db;
