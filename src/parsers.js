import { load } from 'js-yaml';

/**
 * Parse content and process to JS
 * @param {string} filename Filename to be parsed and processed
 * @returns Content processed to JS according to the extension
 */
export default (content, extension) => {
  switch (extension) {
    case '.json':
      return JSON.parse(content);
    case '.yaml':
      return load(content);
    case '.yml':
      return load(content);
    default:
      throw new Error(`UNKNOWN FORMAT: ${extension}`);
  }
};
