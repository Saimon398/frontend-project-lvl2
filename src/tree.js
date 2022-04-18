import _ from 'lodash';

export default (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const sortedKeys = _.sortBy(_.union(keys1, keys2));
  const result = sortedKeys.reduce((acc, key) => {
    if (_.includes(keys1, key) && _.includes(keys2, key)) {
      if (data1[key] === data2[key]) {
        acc.push(`    ${key}: ${data1[key]}`);
        return acc;
      }
      acc.push(`  - ${key}: ${data1[key]}`);
      acc.push(`  + ${key}: ${data2[key]}`);
      return acc;
    }
    if (_.includes(keys2, key)) {
      acc.push(`  + ${key}: ${data2[key]}`);
      return acc;
    }
    acc.push(`  - ${key}: ${data1[key]}`);
    return acc;
  }, []);
  return `
{
${result.join('\n')}
}`;
};
