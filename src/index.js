import { readFileSync } from 'fs';
import path from 'path';
import parse from './parse.js';
import compare from './compare.js';
import makeFormatting from './formatters/index.js';

export const getFormat = (pathofFile) => path.extname(pathofFile).replace('.', '');

const gendiff = (path1, path2, format = 'stylish') => {
  const content1 = readFileSync(path1, 'utf-8');
  const content2 = readFileSync(path2, 'utf-8');
  const format1 = getFormat(path1);
  const format2 = getFormat(path2);
  const data1 = parse(format1, content1);
  const data2 = parse(format2, content2);
  const diff = compare(data1, data2);
  return makeFormatting(diff, format);
};

export default gendiff;
