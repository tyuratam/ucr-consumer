import { PATHS, REQUIRED_FILES } from './constants';
import { getFilesList, checkFilesPrefix } from './modules/fileSystem';

const filesList = getFilesList(PATHS.UPLOADS);

checkFilesPrefix(REQUIRED_FILES, filesList);
