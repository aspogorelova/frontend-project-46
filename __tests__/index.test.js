import { expect, test } from '@jest/globals';
import path from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getPathFile = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getPathFile(filename), 'utf-8');

test.each([
  {
    file1: 'file1.json', file2: 'file2.json', format: 'stylish', expectResult: 'stylishFormat.txt',
  },
  {
    file1: 'file1.yaml', file2: 'file2.yaml', format: 'stylish', expectResult: 'stylishFormat.txt',
  },
  {
    file1: 'file1.json', file2: 'file2.json', expectResult: 'stylishFormat.txt',
  },
  {
    file1: 'file1.yaml', file2: 'file2.yaml', expectResult: 'stylishFormat.txt',
  },
  {
    file1: 'file1.yml', file2: 'file2.yml', format: 'stylish', expectResult: 'stylishFormat.txt',
  },
  {
    file1: 'file1.json', file2: 'file2.yaml', format: 'stylish', expectResult: 'stylishFormat.txt',
  },
  {
    file1: 'file1.yaml', file2: 'file2.json', format: 'stylish', expectResult: 'stylishFormat.txt',
  },
  {
    file1: 'file1.json', file2: 'file2.json', format: 'plain', expectResult: 'plainFormat.txt',
  },
  {
    file1: 'file1.yaml', file2: 'file2.yaml', format: 'plain', expectResult: 'plainFormat.txt',
  },
  {
    file1: 'file1.yml', file2: 'file2.yml', format: 'plain', expectResult: 'plainFormat.txt',
  },
  {
    file1: 'file1.json', file2: 'file2.yaml', format: 'plain', expectResult: 'plainFormat.txt',
  },
  {
    file1: 'file1.yaml', file2: 'file2.json', format: 'plain', expectResult: 'plainFormat.txt',
  },
  {
    file1: 'file1.json', file2: 'file2.json', format: 'json', expectResult: 'jsonFormat.txt',
  },
  {
    file1: 'file1.yaml', file2: 'file2.yaml', format: 'json', expectResult: 'jsonFormat.txt',
  },
  {
    file1: 'file1.yml', file2: 'file2.yml', format: 'json', expectResult: 'jsonFormat.txt',
  },
  {
    file1: 'file1.json', file2: 'file2.yaml', format: 'json', expectResult: 'jsonFormat.txt',
  },
  {
    file1: 'file1.yaml', file2: 'file2.json', format: 'json', expectResult: 'jsonFormat.txt',
  },
])('Compare files $file1 and $file2 format $format', ({
  file1, file2, format, expectResult,
}) => {
  const resultFunction = gendiff(getPathFile(file1), getPathFile(file2), format);
  const expected = readFile(expectResult);

  expect(resultFunction).toEqual(expected);
});
