import { expect, test } from '@jest/globals';
import path from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import gendiff from '../../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getPathFile = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const expectResultStylish = readFileSync(getPathFile('stylishFormat.txt'), 'utf-8');
const expectResultStylish1 = readFileSync(getPathFile('stylishFormat1.txt'), 'utf-8');
const expectResultPlain = readFileSync(getPathFile('plainFormat.txt'), 'utf-8');
const expectResultJson = readFileSync(getPathFile('jsonFormat.txt'), 'utf-8');

test.each([
  { file1: 'file1.json', file2: 'file2.json', format: 'stylish', expectResult: expectResultStylish },
  { file1: 'file1.yaml', file2: 'file2.yaml', format: 'stylish', expectResult: expectResultStylish },
  { file1: 'file1.json', file2: 'file2.yaml', format: 'stylish', expectResult: expectResultStylish },
  { file1: 'file1.yaml', file2: 'file2.json', format: 'stylish', expectResult: expectResultStylish },
  { file1: 'firstFile1.json', file2: 'firstFile2.json', format: 'stylish', expectResult: expectResultStylish1 },
  { file1: 'firstFile1.yaml', file2: 'firstFile2.yaml', format: 'stylish', expectResult: expectResultStylish1 },
  { file1: 'firstFile1.json', file2: 'firstFile2.yaml', format: 'stylish', expectResult: expectResultStylish1 },
  { file1: 'firstFile1.yaml', file2: 'firstFile2.json', format: 'stylish', expectResult: expectResultStylish1 },
  { file1: 'file1.json', file2: 'file2.json', format: 'plain', expectResult: expectResultPlain },
  { file1: 'file1.yaml', file2: 'file2.yaml', format: 'plain', expectResult: expectResultPlain },
  { file1: 'file1.json', file2: 'file2.yaml', format: 'plain', expectResult: expectResultPlain },
  { file1: 'file1.yaml', file2: 'file2.json', format: 'plain', expectResult: expectResultPlain },
  { file1: 'file1.json', file2: 'file2.json', format: 'json', expectResult: expectResultJson },
  { file1: 'file1.yaml', file2: 'file2.yaml', format: 'json', expectResult: expectResultJson },
  { file1: 'file1.json', file2: 'file2.yaml', format: 'json', expectResult: expectResultJson },
  { file1: 'file1.yaml', file2: 'file2.json', format: 'json', expectResult: expectResultJson },
])('Compare files $file1 and $file2 format $format', ({ file1, file2, format, expectResult }) => {
  expect(gendiff(file1, file2, format)).toEqual(expectResult);
});
