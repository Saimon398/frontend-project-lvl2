import _ from 'lodash';

export default (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const sortedKeys = _.sortBy(_.union(keys1, keys2));
  const result = sortedKeys.map((key) => {
    if (!_.includes(keys2, key)) {
      return ` - ${key}: ${data1[key]}`;
    }
    if (!_.includes(keys1, key)) {
      return ` + ${key}: ${data2[key]}`;
    }
    if (data1[key] === data2[key]) {
      return `   ${key}: ${data2[key]}`;
    }
    return ` - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
  }).join('\n ');
  return `{\n ${result}\n}`;
};
