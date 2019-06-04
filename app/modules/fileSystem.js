import fs from 'fs';
import { logger } from './logger';

export const getFilesList = (directory) => fs
  .readdirSync(directory) || [];

export const checkFilesPrefix = (requiredFiles, filesList = []) => {
  logger.idle('checkFilesPrefix: Checking if all required files exists in folder...');

  const matchedFiles = filesList.filter(d => requiredFiles.indexOf(d.prefix) === -1);

  if (matchedFiles.length !== filesList.length) {
    logger.error('checkFilesPrefix: The files did not matches with the required files');
    process.exit(1);
  }

  logger.success('checkFilesPrefix: Success: All required files exists!');
  return matchedFiles;
};
