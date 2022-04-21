import _ from 'lodash';

/**
 * Set and offset from object property
 * @param {string} replacer Kind of offset
 * @param {*} depth Depth of nesting
 * @example
 * const offset('+', 2);
 * {
 * ++ /.../
 * ++++ /.../
 * ++ /.../
 * }
 */
const offset = (replacer = ' ', depth = 1) => replacer.repeat(depth * 2);

/**
 * Return rendered value
 * @param {string | number | boolean | object} currentValue Value
 * @param {number} depth Depth of nesting
 * @returns Rendered value
 */
const stringify = (currentValue, depth = 1) => {
  if (!_.isPlainObject(currentValue)) {
    return `${currentValue}`;
  }
  const keys = Object.keys(currentValue);
  const result = keys.map((key) => `${offset(' ', depth)}${key}: ${stringify(currentValue[key], depth + 1)}`).join('\n');
  return `{\n${result}\n${offset(' ', depth - 1)}}`;
};

/**
 * Parse tree and style in certain format
 * @param {object} tree Tree
 * @returns Parsed and styled tree
 */
export default (tree) => {
  const iter = (node, depth) => {
    const {
      key, type, value, children, value1, value2,
    } = node;
    switch (type) {
      case 'root': {
        const result = children.flatMap((child) => iter(child, depth + 1));
        return `{\n${result.join('\n')}\n${offset(' ', depth)}}`;
      }
      case 'nested': {
        const result = children.flatMap((child) => iter(child, depth + 1));
        return `${offset(' ', depth)}${key}: ${result.join('\n')}${offset(' ', depth)}`;
      }
      case 'deleted': {
        return `${offset(' ', depth)}- ${key}: ${stringify(value, depth)}`;
      }
      case 'added': {
        return `${offset(' ', depth)}+ ${key}: ${stringify(value, depth)}`;
      }
      case 'changed': {
        const deleted = `${offset(' ', depth)}- ${key}: ${stringify(value1, depth)}`;
        const added = `${offset(' ', depth)}+ ${key}: ${stringify(value2, depth)}`;
        return `${deleted}\n${added}`;
      }
      case 'unchanged': {
        return `${offset(' ', depth)}  ${key}: ${stringify(value, depth)}`;
      }
      default:
        throw new Error(`Unknown type of node: ${type}`);
    }
  };
  return iter(tree, 0);
};
