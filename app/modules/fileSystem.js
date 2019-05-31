import fs from 'fs';

import { PATHS } from '../constants';

export const getFilesList = (directory) => {
  const dirList = fs.readdirSync(directory);
  console.log(dirList);
};
