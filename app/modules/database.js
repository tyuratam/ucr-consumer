import fs from 'fs';
import path from 'path';
import mysql from 'mysql2';
import { Sequelize } from 'sequelize';

const sequelizeLog = process.env.SEQUELIZE_LOG;
// eslint-disable-next-line no-console
const logging = (sequelizeLog === 'silent') ? () => {} : output => console.log(output);

const sequelizeConfig = {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  define: {
    underscored: true,
  },
  operatorsAliases: false,
  logging,
};

export const configDataBase = config => new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  config,
);

export const createDatabase = () => {
  const sqlConection = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  });

  sqlConection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_DATABASE};`);
};

export const createTables = (modelsDir, sequelize) => {
  const db = {};

  fs
    .readdirSync(modelsDir)
    .filter(file => file.includes('.'))
    .forEach((file) => {
      const model = sequelize.import(path.join(modelsDir, file));
      db[model.name] = model;
    });

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;

  return db;
};

export const initDatabase = () => {
  const modelsDir = path.normalize(`${__dirname}/../models`);
  const sequelize = configDataBase(sequelizeConfig);
  const database = createTables(modelsDir, sequelize);

  createDatabase();
  database
    .sequelize
    .sync()
    .then(() => process.exit(0));
};
