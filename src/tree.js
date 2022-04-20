import _ from 'lodash';

// export default (data1, data2) => {
//   const keys1 = Object.keys(data1);
//   const keys2 = Object.keys(data2);
//   const sortedKeys = _.sortBy(_.union(keys1, keys2));
//   const result = sortedKeys.map((key) => {
//     if (!_.includes(keys2, key)) {
//       return ` - ${key}: ${data1[key]}`;
//     }
//     if (!_.includes(keys1, key)) {
//       return ` + ${key}: ${data2[key]}`;
//     }
//     if (data1[key] === data2[key]) {
//       return `   ${key}: ${data2[key]}`;
//     }
//     return ` - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
//   }).join('\n ');
//   return `{\n ${result}\n}`;
// };

const buildTree = (first, second) => {
  const keys1 = Object.keys(first);
  const keys2 = Object.keys(second);
  const sortedKeys = _.sortBy(_.union(keys1, keys2));
  const result = sortedKeys.map((key) => {
    const value1 = first[key];
    const value2 = second[key];
    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return {
        key,
        type: 'nested',
        children: [buildTree(value1, value2)],
      };
    }
    if (!_.includes(keys1, key)) {
      return {
        key,
        type: 'added',
        value: value2,
      };
    }
    if (!_.includes(keys2, key)) {
      return {
        key,
        type: 'deleted',
        value: value1,
      };
    }
    if (value1 === value2) {
      return {
        key,
        type: 'unchanged',
        value: value1,
      };
    }
    return {
      key,
      type: 'changed',
      value1,
      value2,
    };
  });
  return result;
};

export default buildTree;
