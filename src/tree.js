import _, { get } from 'lodash';
import genDiff from '.';

const genTree = (first, second) => {
  const keys1 = Object.keys(first);
  const keys2 = Object.keys(second);
  const sortedKeys = _.sortBy(_.union(keys1, keys2));
  const result = sortedKeys.map((key) => {
    if (_.isPlainObject(first[key]) && _.isPlainObject(second[key])) {
      return { key, type: 'nested', children: [buildTree(first[key], second[key])], };
    }
    if (!_.includes(keys1, key)) {
      return { key, type: 'added', value: second[key], };
    }
    if (!_.includes(keys2, key)) {
      return { key, type: 'deleted', value: first[key], };
    }
    if (first[key] === second[key]) {
      return { key, type: 'unchanged', value: first[key], };
    }
    return { key, type: 'changed', value1 : first[key],  value2 : second[key], };
  });
  return result;
};

const buildTree = (first, second) => ({type: 'root', children: genTree(first, second)});

export default buildTree;
