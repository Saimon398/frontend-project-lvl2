import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';


let expected;

test('main flow', () => {
  // JSON formal
  expected = genDiff('test1.json', 'test2.json');
  expect(genDiff('test1.json', 'test2.json')).toBe(expected);
  // YAML format
  expected = genDiff('test1.yaml', 'test2.yaml');
  expect(genDiff('test1.yaml', 'test2.yaml')).toBe(expected);
  // YML format
  expected = genDiff('test1.yml', 'test2.yml');
  expect(genDiff('test1.yml', 'test2.yml')).toBe(expected);
});


