import _ from 'lodash';
import plain from '../formatters/plain.js';

/**
 * Generate tree based on object's difference
 * @param {object} first First object
 * @param {object} second Second object
 * @returns {object} Tree
 */
const buildTree = (first, second) => {
  const keys1 = Object.keys(first);
  const keys2 = Object.keys(second);
  const sortedKeys = _.sortBy(_.union(keys1, keys2));
  const result = sortedKeys.map((key) => {
    if (_.isPlainObject(first[key]) && _.isPlainObject(second[key])) {
      return { key, type: 'nested', children: [buildTree(first[key], second[key])] };
    }
    if (!_.includes(keys1, key)) {
      return { key, type: 'added', value: second[key] };
    }
    if (!_.includes(keys2, key)) {
      return { key, type: 'deleted', value: first[key] };
    }
    if (first[key] === second[key]) {
      return { key, type: 'unchanged', value: first[key] };
    }
    return {
      key, type: 'changed', value1: first[key], value2: second[key],
    };
  });
  return {
    type: 'root',
    children: result,
  };
};

export default buildTree;

const first = {
  "common": {
    "setting1": "Value 1",
    "setting2": 200,
    "setting3": true,
    "setting6": {
      "key": "value",
      "doge": {
        "wow": ""
      }
    }
  },
  "group1": {
    "baz": "bas",
    "foo": "bar",
    "nest": {
      "key": "value"
    }
  },
  "group2": {
    "abc": 12345,
    "deep": {
      "id": 45
    }
  }
};

const second = {
  "common": {
    "follow": false,
    "setting1": "Value 1",
    "setting3": null,
    "setting4": "blah blah",
    "setting5": {
      "key5": "value5"
    },
    "setting6": {
      "key": "value",
      "ops": "vops",
      "doge": {
        "wow": "so much"
      }
    }
  },
  "group1": {
    "foo": "bar",
    "baz": "bars",
    "nest": "str"
  },
  "group3": {
    "deep": {
      "id": {
        "number": 45
      }
    },
    "fee": 100500
  }
};

const tree = buildTree(first, second);
console.log(tree);
console.log(plain(tree));