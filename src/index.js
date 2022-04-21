import path from 'path';
import readFile from './utils.js';
import buildTree from './tree.js';
import parse from './parsers.js';
import format from '../formatters/index.js';

const genDiff = (filename1, filename2, formatName = 'stylish') => {
  const extension1 = path.extname(filename1);
  const extension2 = path.extname(filename2);

  const data1 = parse(readFile(filename1), extension1);
  const data2 = parse(readFile(filename2), extension2);

  const difference = buildTree(data1, data2);
  return format(difference, formatName);
};

export default genDiff;
