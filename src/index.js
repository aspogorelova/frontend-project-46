import { getPathFile } from './parsers.js';
import { readFileSync } from 'fs';
import { getFormat } from './parsers.js';
import compareObject from './compare.js';
import makeFormatting from './formatters/index.js';

const gendiff = (file1, file2, format) => {
  const pathOfFile1 = getPathFile(file1);
  const pathOfFile2 = getPathFile(file2);
  const contentData1 = readFileSync(pathOfFile1, 'utf-8');
  const contentData2 = readFileSync(pathOfFile2, 'utf-8');
  const data1 = getFormat(pathOfFile1, contentData1);
  const data2 = getFormat(pathOfFile2, contentData2);
  const diff = compareObject(data1, data2);
  // console.log('DIFF  ', diff);
  return makeFormatting(diff, format);
};

export default gendiff;

// console.log('result  ', gendiff('file1.json', 'file2.json', 'stylish'));