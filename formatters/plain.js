import _ from 'lodash';

/**
 * Display output according to the type
 * @param {string | number | boolean | object} item  
 * @returns 
 */
const stringify = (item) => _.isPlainObject(item) ? '[complex value]' : `'${item}'`;

/**
 * Parse tree and style in certain format
 * @param {object} tree Tree
 * @returns Parsed and styled tree
 */
const plain = (tree) => {
  const iter = (node, path = '') => {
    const { key, type, value, children, value1, value2, } = node
    switch (type) {
      case 'root':
        return children.flatMap(child => iter(child, `${path}`)).join('\n');
      case 'nested':
        return children.flatMap(child => iter(child, `${path}${key}.`)).join('\n');
      case 'added':
        return `Property '${path}${key}' was added with value: ${stringify(value)}`;
      case 'deleted':
        return `Property '${path}${key}' was removed`;
      case 'changed':
        return `Property '${path}${key}' was updated from ${stringify(value1)} to ${stringify(value2)}`;
      case 'unchanged':
        return [];
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  }
  return iter(tree);
};

export default plain;


