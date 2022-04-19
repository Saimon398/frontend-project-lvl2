import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

const expected = `{
  - follow: true
  + follow: false
  - host: hexlet.ru
  + host: hexlet.io
    proxy: 123.234.53.22
  - timeout: 50
  + timeout: 100
}`;

test('common flow', () => {
  expect(genDiff('test1.json', 'test2.json')).toBe(expected);
});
