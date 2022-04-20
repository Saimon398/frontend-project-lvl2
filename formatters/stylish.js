import buildTree from '../src/tree.js';
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
 const stringify = (currentValue, depth) => {
  if (!_.isPlainObject(currentValue)) {
    return `${currentValue}`;
  }
  const keys = Object.keys(currentValue);
  const result = keys.map((key) => {
    return `${offset(' ', depth)}${key}: ${stringify(currentValue[key], depth + 1)}`;
  }).join('\n');
  return `{\n${result}\n${offset(' ', depth - 1)}}`;
};

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
