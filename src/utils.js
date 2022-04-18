import { resolve } from 'path';
import { readFileSync } from 'fs';
import { cwd } from 'process';

/**
 * Return an absolute path to a file
 * @param {string} filename Name of file
 * @returns {string} An absolute path
 * @example
 * getPath('file.json'); // users/anonimous/project/src/file.json
 */
export const getPath = (filename) => resolve(cwd(), './__fixtures__/', filename);

/**
 * Read the entire contents of a file
 * @param {string} filename Name of file
 */
export const readFileContent = (filename) => readFileSync(getPath(filename), 'utf-8');
