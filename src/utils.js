import path from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Return an absolute path to a file
 * @param {string} filename Name of file
 * @returns {string} An absolute path
 * @example
 * getPath('file.json'); // users/anonimous/project/src/file.json
 */
export const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

/**
 * Read the entire contents of a file
 * @param {string} filename Name of file
 */
export const readFileContent = (filename) => readFileSync(getFixturePath(filename), 'utf-8');
