#!/usr/bin/env node
import 'dotenv/config';

import { initDatabase } from '../app/modules/database';

initDatabase();
