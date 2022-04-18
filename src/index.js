import { readFileContent } from './utils.js';
import buildTree from './tree.js';
import parse from './parsers.js';

const genDiff = (filepath1, filepath2) => {
  const data1 = parse(readFileContent(filepath1));
  const data2 = parse(readFileContent(filepath2));
  const difference = buildTree(data1, data2);
  return difference;
};

export default genDiff;
