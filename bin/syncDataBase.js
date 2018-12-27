#!/usr/bin/env node
import 'dotenv/config';
import db from '../app/models/index.js';

db.sequelize.sync().then(() => process.exit(0));
