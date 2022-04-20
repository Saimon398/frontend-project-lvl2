import buildTree from '../src/tree.js';
import _ from 'lodash';

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

const stringify = (value, replacer = ' ', count = 2) => {
  if (_.isPlainObject(value)) {
    return `${value}`;
  }
  const keys = Object.keys(value);
  const result = keys.map(key => {
    return `${replacer.repeat(count)}${key}: ${stringify(value[key], replacer, count + 2)}`
  }).join('\n');
  return `{\n${result}\n${replacer.repeat(count - 2)}}`;
}


