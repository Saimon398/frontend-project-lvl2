import stylish from './stylish.js';

/**
 * Define format for tree
 * @param {object} tree Tree
 * @returns Formatted tree
 */
export default (tree, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish(tree);
  }
};
