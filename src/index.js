import { readFileSync } from 'fs';
import getFormat from './parsers.js';
import compareObject from './compare.js';
import makeFormatting from './formatters/index.js';

const gendiff = (pathOfFile1, pathOfFile2, format) => {
  const contentData1 = readFileSync(pathOfFile1, 'utf-8');
  const contentData2 = readFileSync(pathOfFile2, 'utf-8');
  const data1 = getFormat(pathOfFile1, contentData1);
  const data2 = getFormat(pathOfFile2, contentData2);
  const diff = compareObject(data1, data2);
  return makeFormatting(diff, format);
};

export default gendiff;
