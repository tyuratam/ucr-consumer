import fs from 'fs';
import mysql from 'mysql2';
import path from 'path';
import { Sequelize } from 'sequelize';

import { logger } from './logger';
import { PATHS } from '../constants';

const sequelizeLog = process.env.SEQUELIZE_LOG;
// eslint-disable-next-line no-console
const logging = (sequelizeLog === 'silent') ? () => {} : output => console.log(output);

const sequelizeConfig = {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  define: {
    underscored: true,
  },
  logging,
};

export const configDataBase = (config) => new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  config,
);

export const createDatabase = () => {
  logger.running('createDatabase: Connecting to the database...');

  const sqlConection = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  });

  logger.running('createDatabase: Creating Database...');
  sqlConection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_DATABASE};`, (err, results) => {
    if (err) {
      logger.error(err);
      return process.exit(1);
    }

    logger.idle('createDatabase: Connecting to the database...');
    return logger.success(results);
  });
};

export const createModels = (modelsDir, sequelize) => {
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
  const sequelize = configDataBase(sequelizeConfig);
  const models = createModels(PATHS.MODELS, sequelize);

  logger.running('initDatabase: Syncing database models...');
  createDatabase();
  models
    .sequelize
    .sync()
    .then(() => {
      logger.success('initDatabase: Models has been successfully synced');
      process.exit(0);
    })
    .catch(err => {
      logger.running(err);
      process.exit(1);
    });
};
