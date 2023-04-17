import { expect, test } from '@jest/globals';
import compareObject from '../../src/index.js';
import readFile from '../../src/parsers.js';

test('compare files', () => {
  const result = readFile('stylish_format.txt');
  expect(compareObject('file1.json', 'file2.json')).toEqual(result);
  expect(compareObject('file1.yaml', 'file2.yaml')).toEqual(result);
});
