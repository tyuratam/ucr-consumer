import path from 'path';
import { rootPath as ROOT_PATH } from 'get-root-path';

const APP_DIR = 'app';

export const PATHS = {
  MODELS: path.join(ROOT_PATH, APP_DIR, 'models'),
  MODULES: path.join(ROOT_PATH, APP_DIR, 'modules'),
  UPLOADS: path.join(ROOT_PATH, APP_DIR, 'uploads'),
};
