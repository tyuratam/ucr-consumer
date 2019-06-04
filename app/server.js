import { PATHS, REQUIRED_FILES } from './constants';
import { getFilesList, checkFilesPrefix, readSpreadSheets } from './modules/fileSystem';

const filesList = getFilesList(PATHS.UPLOADS);

checkFilesPrefix(REQUIRED_FILES, filesList);

readSpreadSheets(filesList[1]);
