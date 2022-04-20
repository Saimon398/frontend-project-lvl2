import { test, expect, describe } from '@jest/globals';
import genDiff from '../src/index.js';
import readFile from '../src/utils.js';

const cases = [
  ['test1.json', 'test2.json', 'result-json.txt'],
  ['test1.yaml', 'test2.yaml', 'result-yaml.txt'],
  ['test1.yml', 'test2.yml', 'result-yml.txt'],
];

describe.each(cases)('compare %s and %s and show %s', (file1, file2, result) => {
  test('checking common logic', () => {
    const expected = readFile(result);
    expect(genDiff(file1, file2)).toBe(expected);
  });
});
