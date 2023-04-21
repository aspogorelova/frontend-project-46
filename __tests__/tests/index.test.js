import { expect, test } from '@jest/globals';
import gendiff from '../../src/index.js';
import path from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getPathFile = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const expectResultStylish = readFileSync(getPathFile('stylish_format.txt'), 'utf-8');
const expectResultPlain = readFileSync(getPathFile('plain_format.txt'), 'utf-8');

test.each([
  { file1: 'file1.json', file2: 'file2.json', format: 'stylish', expectResult: expectResultStylish },
  { file1: 'file1.yaml', file2: 'file2.yaml', format: 'stylish', expectResult: expectResultStylish },
  { file1: 'file1.json', file2: 'file2.yaml', format: 'stylish', expectResult: expectResultStylish },
  { file1: 'file1.yaml', file2: 'file2.json', format: 'stylish', expectResult: expectResultStylish },
  { file1: 'file1.json', file2: 'file2.json', format: 'plain', expectResult: expectResultPlain },
  { file1: 'file1.yaml', file2: 'file2.yaml', format: 'plain', expectResult: expectResultPlain },
  { file1: 'file1.json', file2: 'file2.yaml', format: 'plain', expectResult: expectResultPlain },
  { file1: 'file1.yaml', file2: 'file2.json', format: 'plain', expectResult: expectResultPlain },
])('Compare files', ({ file1, file2, format, expectResult }) => {
  expect(gendiff(file1, file2, format)).toEqual(expectResult);
});
